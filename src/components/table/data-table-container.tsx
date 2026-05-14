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
	isLoading?: boolean;
	hasInitialQueryData?: boolean;
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
	enableColumnVisibility?: boolean;
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
	initialPageSize = 15,
	sorting,
	onSortingChange,
	initialFilters,
	filters,
	onFiltersChange,
	onFiltersApply,
	onFiltersClear,
	showPagination = true,
	isLoading,
	hasInitialQueryData,
	children,
	enableColumnVisibility = false,
}: DataTableContainerProps<TData, TFilters>) {
	const controller = useDataTableController<TData, TFilters>({
		columns,
		data,
		total,
		totalPages,
		emptyMessage,
		isLoading,
		hasInitialQueryData,
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
		showPagination,
		enableColumnVisibility,
	});

	return (
		<DataTableProvider value={controller}>
			<div className="flex flex-col gap-4">
				{children}
				<DataTable />
				<DataTablePagination />
			</div>
		</DataTableProvider>
	);
}
