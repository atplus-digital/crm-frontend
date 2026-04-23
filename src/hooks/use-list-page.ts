import type { SortingState } from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

export interface UseListPageOptions<TFilters extends object = object> {
	defaultFilters?: TFilters;
	defaultPageSize?: number;
	syncSortToUrl?: boolean;
}

export interface UseListPageReturn<TFilters extends object = object> {
	page: number;
	pageSize: number;
	sorting: SortingState;
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
		defaultPageSize = 20,
		syncSortToUrl = true,
	} = options;

	const [searchParams, setSearchParams] = useSearchParams();
	const [filters, setFiltersState] = useState<TFilters>(defaultFilters);

	const page = Number(searchParams.get("page")) || 1;
	const pageSize = Number(searchParams.get("pageSize")) || defaultPageSize;

	const sortParam = searchParams.get("sort");
	const sort: string[] = useMemo(() => {
		if (!sortParam) return [];
		return sortParam.split(",").filter(Boolean);
	}, [sortParam]);

	const sorting = useMemo<SortingState>(() => {
		return sort.map((field) => {
			const isDesc = field.startsWith("-");
			return { id: isDesc ? field.slice(1) : field, desc: isDesc };
		});
	}, [sort]);

	const setPage = useCallback(
		(newPage: number) => {
			setSearchParams(
				(prev) => {
					prev.set("page", String(newPage));
					return prev;
				},
				{ replace: true },
			);
		},
		[setSearchParams],
	);

	const setPageSize = useCallback(
		(size: number) => {
			setSearchParams(
				(prev) => {
					prev.set("pageSize", String(size));
					prev.set("page", "1");
					return prev;
				},
				{ replace: true },
			);
		},
		[setSearchParams],
	);

	const handleSort = useCallback(
		(field: string) => {
			if (!syncSortToUrl) return;
			setSearchParams(
				(prev) => {
					const current = prev.get("sort") ?? "";
					const fields = current.split(",").filter(Boolean);
					const existingDesc = fields.find(
						(f) => f === field || f === `-${field}`,
					);
					const isDesc = existingDesc?.startsWith("-") ?? false;

					if (existingDesc === field && !isDesc) {
						prev.set(
							"sort",
							fields.map((f) => (f === field ? `-${field}` : f)).join(","),
						);
					} else if (existingDesc === `-${field}`) {
						prev.set("sort", fields.filter((f) => f !== `-${field}`).join(","));
					} else {
						prev.set("sort", [...fields, field].join(","));
					}
					return prev;
				},
				{ replace: true },
			);
			setPage(1);
		},
		[setSearchParams, setPage, syncSortToUrl],
	);

	const handleFilterChange = useCallback(
		(newFilters: TFilters) => {
			setFiltersState(newFilters);
			setPage(1);
		},
		[setPage],
	);

	const setFilters = useCallback(
		(updater: TFilters | ((prev: TFilters) => TFilters)) => {
			setFiltersState((prev) =>
				typeof updater === "function"
					? (updater as (prev: TFilters) => TFilters)(prev)
					: updater,
			);
			setPage(1);
		},
		[setPage],
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
