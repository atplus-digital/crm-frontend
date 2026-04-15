import type { ColumnDef } from "@tanstack/react-table";
import { DataTableWithPagination } from "#/components/tables/data-table-with-pagination";

interface PaginationInfo {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

interface PessoasTableProps<T extends { id: number | string }> {
	columns: ColumnDef<T, unknown>[];
	data: T[];
	isLoading?: boolean;
	pagination: PaginationInfo;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
	emptyMessage?: string;
}

/**
 * @deprecated Use DataTableWithPagination directly instead.
 * This wrapper is kept for backwards compatibility and will be removed in a future version.
 */
export function PessoasTable<T extends { id: number | string }>({
	columns,
	data,
	isLoading = false,
	pagination,
	onPageChange,
	onPageSizeChange,
	emptyMessage,
}: PessoasTableProps<T>) {
	return (
		<DataTableWithPagination
			columns={columns}
			data={data}
			isLoading={isLoading}
			total={pagination.total}
			totalPages={pagination.totalPages}
			emptyMessage={emptyMessage}
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
		/>
	);
}
