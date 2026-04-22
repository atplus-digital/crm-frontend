import type {
	ColumnDef,
	OnChangeFn,
	SortingState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";
import { DEFAULT_DATA_TABLE_EMPTY_MESSAGE } from "#/components/table/constants";
import { DataTable } from "#/components/table/data-table";
import type { TableFilters } from "#/components/table/data-table-context";
import { DataTableProvider } from "#/components/table/data-table-context";
import { DataTablePagination } from "#/components/table/data-table-pagination";
import { useDataTableController } from "#/components/table/hooks/use-data-table-controller";

interface DataTableContainerProps<
	TData,
	TFilters extends TableFilters = TableFilters,
> {
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
	initialFilters?: TFilters;
	filters?: TFilters;
	onFiltersChange?: (filters: TFilters) => void;
	onFiltersApply?: (
		filters: TFilters,
		pagination: { page: number; pageSize: number },
	) => void;
	onFiltersClear?: (
		filters: TFilters,
		pagination: { page: number; pageSize: number },
	) => void;
	showPagination?: boolean;
	children?: ReactNode;
}

export function DataTableContainer<
	TData,
	TFilters extends TableFilters = TableFilters,
>({
	columns,
	data,
	total,
	totalPages,
	emptyMessage = DEFAULT_DATA_TABLE_EMPTY_MESSAGE,
	onPageChange,
	onPageSizeChange,
	initialPage = 1,
	initialPageSize = 20,
	sorting,
	onSortingChange,
	initialFilters,
	filters,
	onFiltersChange,
	onFiltersApply,
	onFiltersClear,
	showPagination = true,
	children,
}: DataTableContainerProps<TData, TFilters>) {
	const controller = useDataTableController<TData, TFilters>({
		columns,
		data,
		total,
		totalPages,
		emptyMessage,
		initialPage,
		initialPageSize,
		onPageChange,
		onPageSizeChange,
		sorting,
		onSortingChange,
		initialFilters,
		filters,
		onFiltersChange,
		onFiltersApply,
		onFiltersClear,
	});

	return (
		<DataTableProvider value={controller}>
			<div className="flex flex-col gap-4">
				{children}
				<DataTable />
				{showPagination ? <DataTablePagination /> : null}
			</div>
		</DataTableProvider>
	);
}
