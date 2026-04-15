import type {
	ColumnDef,
	OnChangeFn,
	SortingState,
} from "@tanstack/react-table";

import { DataTable, useDataTable } from "#/components/tables/data-table";
import { DataTablePagination } from "#/components/tables/data-table-pagination";
import { usePagination } from "#/hooks/use-pagination";

interface DataTableWithPaginationProps<TData> {
	/** Table column definitions */
	columns: ColumnDef<TData, unknown>[];
	/** Data to display */
	data: TData[];
	/** Loading state */
	isLoading?: boolean;
	/** Stale data to display during page changes (previous page data) */
	staleData?: TData[];
	/** Total number of items (for server-side pagination) */
	total?: number;
	/** Total number of pages (for server-side pagination) */
	totalPages?: number;
	/** Custom empty state message */
	emptyMessage?: string;
	/** Callback when page changes (for server-side refetch) */
	onPageChange?: (page: number) => void;
	/** Callback when page size changes (for server-side refetch) */
	onPageSizeChange?: (pageSize: number) => void;
	/** Callback when page change loading completes */
	onPageChangeComplete?: () => void;
	/** Initial page number (1-indexed). Default: 1 */
	initialPage?: number;
	/** Initial page size. Default: 20 */
	initialPageSize?: number;
	/** Sorting state (for server-side sorting) */
	sorting?: SortingState;
	/** Callback when sorting changes (for server-side refetch) */
	onSortingChange?: OnChangeFn<SortingState>;
}

/**
 * Generic data table component with integrated pagination.
 * Consolidates duplicate table + pagination patterns across the codebase.
 *
 * Features:
 * - Server-side pagination support
 * - Loading state with skeleton rows
 * - Stale-while-loading: shows previous data during page changes
 * - Empty state message
 * - Optional sorting support
 *
 * @example
 * ```tsx
 * // Client-side pagination
 * <DataTableWithPagination
 *   columns={columns}
 *   data={data}
 * />
 *
 * // Server-side pagination with stale-while-loading
 * const { data, isFetching } = useQuery({...});
 * const previousData = usePrevious(data);
 *
 * <DataTableWithPagination
 *   columns={columns}
 *   data={data}
 *   staleData={previousData}
 *   total={meta.total}
 *   totalPages={meta.totalPage}
 *   onPageChange={(page) => refetch({ page })}
 *   onPageSizeChange={(pageSize) => refetch({ page: 1, pageSize })}
 *   isLoading={isFetching}
 * />
 * ```
 */
export function DataTableWithPagination<TData>({
	columns,
	data,
	isLoading = false,
	staleData,
	total,
	totalPages,
	emptyMessage = "Nenhum registro encontrado",
	onPageChange,
	onPageSizeChange,
	onPageChangeComplete,
	initialPage = 1,
	initialPageSize = 20,
	sorting,
	onSortingChange,
}: DataTableWithPaginationProps<TData>) {
	const {
		pagination,
		onPaginationChange,
		isPageChanging,
		markPageChangeComplete,
	} = usePagination({
		initialPage,
		initialPageSize,
		onPageChange,
		onPageSizeChange,
		onPageChangeComplete,
	});

	// Use stale data during page changes if provided
	const displayData =
		isLoading && isPageChanging && staleData ? staleData : data;

	const table = useDataTable({
		columns,
		data: displayData,
		pageCount: totalPages,
		pagination,
		onPaginationChange,
		...(sorting && { sorting, onSortingChange }),
	});

	// Mark page change as complete when loading finishes
	if (isLoading && isPageChanging && !data) {
		markPageChangeComplete();
	}

	return (
		<div className="flex flex-col gap-4">
			<DataTable
				table={table}
				isLoading={isLoading}
				isPageChanging={isPageChanging}
				emptyMessage={emptyMessage}
			/>
			<DataTablePagination table={table} total={total} />
		</div>
	);
}
