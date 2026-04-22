import type {
	ColumnDef,
	OnChangeFn,
	SortingState,
} from "@tanstack/react-table";
import { useCallback, useRef, useState } from "react";
import { DEFAULT_DATA_TABLE_EMPTY_MESSAGE } from "#/components/table/constants";
import { useDataTable } from "#/components/table/data-table";
import type {
	DataTableController,
	TableFilters,
} from "#/components/table/data-table-context";
import { resolveStateUpdater } from "#/components/table/hooks/resolve-state-updater";
import { usePagination } from "#/components/table/hooks/use-pagination";

interface PaginationSnapshot {
	page: number;
	pageSize: number;
}

interface UseDataTableControllerOptions<
	TData,
	TFilters extends TableFilters = TableFilters,
> {
	columns: ColumnDef<TData, unknown>[];
	data: TData[];
	total?: number;
	totalPages?: number;
	emptyMessage?: string;
	initialPage?: number;
	initialPageSize?: number;
	onPageChange?: (page: number) => void;
	onPageSizeChange?: (pageSize: number) => void;
	sorting?: SortingState;
	onSortingChange?: OnChangeFn<SortingState>;
	initialFilters?: TFilters;
	filters?: TFilters;
	onFiltersChange?: (filters: TFilters) => void;
	onFiltersApply?: (filters: TFilters, pagination: PaginationSnapshot) => void;
	onFiltersClear?: (filters: TFilters, pagination: PaginationSnapshot) => void;
}

export function useDataTableController<
	TData,
	TFilters extends TableFilters = TableFilters,
>(
	options: UseDataTableControllerOptions<TData, TFilters>,
): DataTableController<TData, TFilters> {
	const initialFiltersRef = useRef<TFilters>(
		options.initialFilters ?? ({} as TFilters),
	);
	const isFiltersControlled = options.filters !== undefined;
	const [internalFilters, setInternalFilters] = useState<TFilters>(
		initialFiltersRef.current,
	);
	const filters = (
		isFiltersControlled ? options.filters : internalFilters
	) as TFilters;
	const {
		total,
		emptyMessage,
		sorting,
		onSortingChange,
		onFiltersChange,
		onFiltersApply,
		onFiltersClear,
	} = options;

	const { pagination, onPaginationChange, page, pageSize } = usePagination({
		initialPage: options.initialPage,
		initialPageSize: options.initialPageSize,
		onPageChange: options.onPageChange,
		onPageSizeChange: options.onPageSizeChange,
	});

	const table = useDataTable({
		columns: options.columns,
		data: options.data,
		pageCount: options.totalPages,
		pagination,
		onPaginationChange,
		...(sorting !== undefined
			? {
					sorting,
					onSortingChange,
				}
			: {}),
	});

	const setFilters = useCallback(
		(updater: TFilters | ((previous: TFilters) => TFilters)) => {
			const nextFilters = resolveStateUpdater(updater, filters);

			if (!isFiltersControlled) {
				setInternalFilters(nextFilters);
			}

			onFiltersChange?.(nextFilters);
		},
		[filters, isFiltersControlled, onFiltersChange],
	);

	const setFilter = useCallback(
		<K extends keyof TFilters>(key: K, value: TFilters[K]) => {
			setFilters((previous) => ({
				...previous,
				[key]: value,
			}));
		},
		[setFilters],
	);

	const setPage = useCallback(
		(nextPage: number) => {
			const safePage = Math.max(1, nextPage);
			onPaginationChange((previous) => ({
				...previous,
				pageIndex: safePage - 1,
			}));
		},
		[onPaginationChange],
	);

	const setPageSize = useCallback(
		(nextPageSize: number) => {
			const safePageSize = Math.max(1, nextPageSize);
			onPaginationChange((previous) => ({
				...previous,
				pageIndex: 0,
				pageSize: safePageSize,
			}));
		},
		[onPaginationChange],
	);

	const applyFilters = useCallback(() => {
		onPaginationChange((previous) => ({
			...previous,
			pageIndex: 0,
		}));

		onFiltersApply?.(filters, {
			page: 1,
			pageSize,
		});
	}, [filters, onFiltersApply, onPaginationChange, pageSize]);

	const clearFilters = useCallback(() => {
		const resetFilters = initialFiltersRef.current;
		setFilters(resetFilters);

		onPaginationChange((previous) => ({
			...previous,
			pageIndex: 0,
		}));

		onFiltersClear?.(resetFilters, {
			page: 1,
			pageSize,
		});
	}, [onFiltersClear, onPaginationChange, pageSize, setFilters]);

	return {
		table,
		total,
		emptyMessage: emptyMessage ?? DEFAULT_DATA_TABLE_EMPTY_MESSAGE,
		pagination,
		page,
		pageSize,
		setPage,
		setPageSize,
		filters,
		setFilters,
		setFilter,
		applyFilters,
		clearFilters,
		sorting,
		onSortingChange,
	};
}
