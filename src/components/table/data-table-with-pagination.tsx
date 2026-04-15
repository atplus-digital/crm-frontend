import type {
	ColumnDef,
	OnChangeFn,
	SortingState,
} from "@tanstack/react-table";

import { DataTable, useDataTable } from "#/components/table/data-table";
import { DataTablePagination } from "#/components/table/data-table-pagination";
import { usePagination } from "#/hooks/use-pagination";

interface DataTableWithPaginationProps<TData> {
	columns: ColumnDef<TData, unknown>[];
	data: TData[];
	total?: number;
	totalPages?: number;
	emptyMessage?: string;
	onPageChange?: (page: number) => void;
	onPageSizeChange?: (pageSize: number) => void;
	initialPage?: number;
	initialPageSize?: number;
	sorting?: SortingState;
	onSortingChange?: OnChangeFn<SortingState>;
}

export function DataTableWithPagination<TData>({
	columns,
	data,
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
			<DataTable table={table} emptyMessage={emptyMessage} />
			<DataTablePagination table={table} total={total} />
		</div>
	);
}
