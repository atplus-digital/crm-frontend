import type {
	OnChangeFn,
	PaginationState,
	SortingState,
	Table,
	VisibilityState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export type TableFilters = Record<string, unknown>;

export interface DataTableController<
	TData,
	TFilters extends TableFilters = TableFilters,
> {
	table: Table<TData>;
	total?: number;
	emptyMessage: string;
	isLoading?: boolean;
	hasInitialQueryData?: boolean;
	pagination: PaginationState;
	page: number;
	pageSize: number;
	setPage: (page: number) => void;
	setPageSize: (pageSize: number) => void;
	filters: TFilters;
	setFilters: (updater: TFilters | ((previous: TFilters) => TFilters)) => void;
	setFilter: <K extends keyof TFilters>(key: K, value: TFilters[K]) => void;
	applyFilters: () => void;
	clearFilters: () => void;
	sorting?: SortingState;
	onSortingChange?: OnChangeFn<SortingState>;
	columnVisibility: VisibilityState;
	setColumnVisibility: OnChangeFn<VisibilityState>;
	showPagination?: boolean;
	enableColumnVisibility?: boolean;
}

const DataTableContext = createContext<DataTableController<
	unknown,
	TableFilters
> | null>(null);

interface DataTableProviderProps<
	TData,
	TFilters extends TableFilters = TableFilters,
> {
	value: DataTableController<TData, TFilters>;
	children: ReactNode;
}

interface UseResolvedDataTableOptions<TData> {
	table?: Table<TData>;
	componentName: string;
}

export function DataTableProvider<
	TData,
	TFilters extends TableFilters = TableFilters,
>({ value, children }: DataTableProviderProps<TData, TFilters>) {
	return (
		<DataTableContext.Provider
			value={value as DataTableController<unknown, TableFilters>}
		>
			{children}
		</DataTableContext.Provider>
	);
}

function useOptionalDataTableContext<
	TData,
	TFilters extends TableFilters = TableFilters,
>() {
	return useContext(DataTableContext) as DataTableController<
		TData,
		TFilters
	> | null;
}

export function useResolvedDataTable<TData>({
	table: tableProp,
	componentName,
}: UseResolvedDataTableOptions<TData>) {
	const context = useOptionalDataTableContext<TData>();
	const table = tableProp ?? context?.table;

	if (!table) {
		throw new Error(
			`${componentName} requires a \`table\` prop or DataTableProvider context.`,
		);
	}

	return {
		context,
		table,
	};
}
