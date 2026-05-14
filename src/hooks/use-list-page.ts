import type { SortingState } from "@tanstack/react-table";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router";

const FILTER_PREFIX = "filter_";

function serializeFilters(filters: object): Record<string, string> {
	const params: Record<string, string> = {};
	for (const [key, value] of Object.entries(filters)) {
		if (value !== undefined && value !== null && value !== "") {
			params[`${FILTER_PREFIX}${key}`] = String(value);
		}
	}
	return params;
}

function clearSerializedFilters(searchParams: URLSearchParams) {
	for (const key of Array.from(searchParams.keys())) {
		if (key.startsWith(FILTER_PREFIX)) {
			searchParams.delete(key);
		}
	}
}

function deserializeFilters<T extends object>(
	searchParams: URLSearchParams,
	defaults: T,
): T {
	const result = { ...defaults } as Record<string, unknown>;
	for (const [key, value] of searchParams.entries()) {
		if (key.startsWith(FILTER_PREFIX)) {
			result[key.slice(FILTER_PREFIX.length)] = value;
		}
	}
	return result as T;
}

interface UseListPageOptions<TFilters extends object = object> {
	defaultFilters?: TFilters;
	defaultPageSize?: number;
	/** Default sort to use when no sort is specified in URL (e.g., ["-createdAt"] for descending createdAt) */
	defaultSort?: string[];
	syncSortToUrl?: boolean;
}

interface UseListPageReturn<TFilters extends object = object> {
	page: number;
	pageSize: number;
	sorting: SortingState;
	/** Sort array for API calls (uses defaultSort if URL has no sort) */
	sort: string[];
	filters: TFilters;
	setPage: (page: number) => void;
	setPageSize: (pageSize: number) => void;
	handleSort: (field: string) => void;
	handleFilterChange: (newFilters: TFilters) => void;
	setFilters: (updater: TFilters | ((prev: TFilters) => TFilters)) => void;
}

export function useListPage<TFilters extends object = object>(
	options: UseListPageOptions<TFilters> = {},
): UseListPageReturn<TFilters> {
	const {
		defaultFilters = {} as TFilters,
		defaultPageSize = 15,
		defaultSort = [],
		syncSortToUrl = true,
	} = options;

	const [searchParams, setSearchParams] = useSearchParams();

	const updateSearchParams = useCallback(
		(updater: (nextSearchParams: URLSearchParams) => void) => {
			setSearchParams(
				(prev) => {
					const next = new URLSearchParams(prev);
					updater(next);
					return next;
				},
				{ replace: true },
			);
		},
		[setSearchParams],
	);

	// Read filters from URL, falling back to defaults
	const filters = useMemo(
		() => deserializeFilters(searchParams, defaultFilters),
		[searchParams, defaultFilters],
	);

	const page = Number(searchParams.get("page")) || 1;
	const pageSize = Number(searchParams.get("pageSize")) || defaultPageSize;

	const sortParam = searchParams.get("sort");
	const sort: string[] = useMemo(() => {
		if (!sortParam) return defaultSort;
		const urlSort = sortParam.split(",").filter(Boolean);
		return urlSort.length > 0 ? urlSort : defaultSort;
	}, [sortParam, defaultSort]);

	const sorting = useMemo<SortingState>(() => {
		return sort.map((field) => {
			const isDesc = field.startsWith("-");
			return { id: isDesc ? field.slice(1) : field, desc: isDesc };
		});
	}, [sort]);

	const setPage = useCallback(
		(newPage: number) => {
			updateSearchParams((nextSearchParams) => {
				nextSearchParams.set("page", String(newPage));
			});
		},
		[updateSearchParams],
	);

	const setPageSize = useCallback(
		(size: number) => {
			updateSearchParams((nextSearchParams) => {
				nextSearchParams.set("pageSize", String(size));
				nextSearchParams.set("page", "1");
			});
		},
		[updateSearchParams],
	);

	const handleSort = useCallback(
		(field: string) => {
			if (!syncSortToUrl) return;
			updateSearchParams((nextSearchParams) => {
				if (field) {
					nextSearchParams.set("sort", field);
				} else {
					nextSearchParams.delete("sort");
				}

				nextSearchParams.set("page", "1");
			});
		},
		[syncSortToUrl, updateSearchParams],
	);

	const syncFiltersToUrl = useCallback(
		(nextFilters: TFilters) => {
			updateSearchParams((nextSearchParams) => {
				clearSerializedFilters(nextSearchParams);

				for (const [key, value] of Object.entries(
					serializeFilters(nextFilters),
				)) {
					nextSearchParams.set(key, value);
				}

				nextSearchParams.set("page", "1");
			});
		},
		[updateSearchParams],
	);

	const handleFilterChange = useCallback(
		(newFilters: TFilters) => {
			syncFiltersToUrl(newFilters);
		},
		[syncFiltersToUrl],
	);

	const setFilters = useCallback(
		(updater: TFilters | ((prev: TFilters) => TFilters)) => {
			const current = deserializeFilters(searchParams, defaultFilters);
			const next =
				typeof updater === "function"
					? (updater as (prev: TFilters) => TFilters)(current)
					: updater;
			syncFiltersToUrl(next);
		},
		[searchParams, defaultFilters, syncFiltersToUrl],
	);

	return {
		page,
		pageSize,
		sorting,
		sort,
		filters,
		setPage,
		setPageSize,
		handleSort,
		handleFilterChange,
		setFilters,
	};
}
