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
 * // Server-side pagination
 * <DataTableWithPagination
 *   columns={columns}
 *   data={data}
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
	total,
	totalPages,
	emptyMessage = "Nenhum registro encontrado",
	onPageChange,
	onPageSizeChange,
	initialPage = 1,
	initialPageSize = 20,
	sorting,
	onSortingChange,
}: DataTableWithPaginationProps<TData>) {
	const { pagination, onPaginationChange } = usePagination({
		initialPage,
		initialPageSize,
		onPageChange,
		onPageSizeChange,
	});

	const table = useDataTable({
		columns,
		data,
		pageCount: totalPages,
		pagination,
		onPaginationChange,
		...(sorting && { sorting, onSortingChange }),
	});

	return (
		<div className="flex flex-col gap-4">
			<DataTable
				table={table}
				isLoading={isLoading}
				emptyMessage={emptyMessage}
			/>
			<DataTablePagination table={table} total={total} />
		</div>
	);
}
