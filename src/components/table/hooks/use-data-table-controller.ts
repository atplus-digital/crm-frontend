import type {
	ColumnDef,
	OnChangeFn,
	SortingState,
} from "@tanstack/react-table";
import { useCallback, useRef, useState } from "react";
import { useDataTable } from "#/components/table/data-table";
import type {
	DataTableController,
	TableFilters,
} from "#/components/table/data-table-context";
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

function getNextState<TState>(
	updater: TState | ((previous: TState) => TState),
	previous: TState,
) {
	return typeof updater === "function"
		? (updater as (previous: TState) => TState)(previous)
		: updater;
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
		...(options.sorting !== undefined
			? {
					sorting: options.sorting,
					onSortingChange: options.onSortingChange,
				}
			: {}),
	});

	const setFilters = useCallback(
		(updater: TFilters | ((previous: TFilters) => TFilters)) => {
			const nextFilters = getNextState(updater, filters);

			if (!isFiltersControlled) {
				setInternalFilters(nextFilters);
			}

			options.onFiltersChange?.(nextFilters);
		},
		[filters, isFiltersControlled, options],
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

		options.onFiltersApply?.(filters, {
			page: 1,
			pageSize,
		});
	}, [filters, onPaginationChange, options, pageSize]);

	const clearFilters = useCallback(() => {
		const resetFilters = initialFiltersRef.current;
		setFilters(resetFilters);

		onPaginationChange((previous) => ({
			...previous,
			pageIndex: 0,
		}));

		options.onFiltersClear?.(resetFilters, {
			page: 1,
			pageSize,
		});
	}, [onPaginationChange, options, pageSize, setFilters]);

	return {
		table,
		total: options.total,
		emptyMessage: options.emptyMessage ?? "Nenhum registro encontrado",
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
		sorting: options.sorting,
		onSortingChange: options.onSortingChange,
	};
}
