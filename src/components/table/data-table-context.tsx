import type {
	OnChangeFn,
	PaginationState,
	SortingState,
	Table,
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

export function useOptionalDataTableContext<
	TData,
	TFilters extends TableFilters = TableFilters,
>() {
	return useContext(DataTableContext) as DataTableController<
		TData,
		TFilters
	> | null;
}

export function useDataTableContext<
	TData,
	TFilters extends TableFilters = TableFilters,
>() {
	const context = useOptionalDataTableContext<TData, TFilters>();

	if (!context) {
		throw new Error(
			"useDataTableContext must be used within a DataTableProvider.",
		);
	}

	return context;
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
