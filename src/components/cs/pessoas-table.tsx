import type {
	ColumnDef,
	OnChangeFn,
	PaginationState,
} from "@tanstack/react-table";
import { DataTable, useDataTable } from "#/components/ui/data-table";
import { DataTablePagination } from "#/components/ui/data-table-pagination";

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

export function PessoasTable<T extends { id: number | string }>({
	columns,
	data,
	isLoading = false,
	pagination,
	onPageChange,
	onPageSizeChange,
	emptyMessage = "Nenhum registro encontrado",
}: PessoasTableProps<T>) {
	const paginationState: PaginationState = {
		pageIndex: pagination.page - 1,
		pageSize: pagination.pageSize,
	};

	const handlePaginationChange: OnChangeFn<PaginationState> = (updater) => {
		const newPagination =
			typeof updater === "function" ? updater(paginationState) : updater;
		onPageChange(newPagination.pageIndex + 1);
		onPageSizeChange(newPagination.pageSize);
	};

	const table = useDataTable({
		columns,
		data,
		pageCount: pagination.totalPages,
		pagination: paginationState,
		onPaginationChange: handlePaginationChange,
	});

	return (
		<div className="flex flex-col gap-4">
			<DataTable
				table={table}
				isLoading={isLoading}
				emptyMessage={emptyMessage}
			/>
			<DataTablePagination table={table} total={pagination.total} />
		</div>
	);
}
