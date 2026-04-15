import type {
	ColumnDef,
	OnChangeFn,
	PaginationState,
	SortingState,
	Table,
} from "@tanstack/react-table";
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Skeleton } from "#/components/ui/skeleton";

import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	Table as TablePrimitive,
	TableRow,
} from "#/components/ui/table";

interface DataTableProps<TData> {
	table: Table<TData>;
	isLoading?: boolean;
	/** Whether a page change is in progress (shows stale data indicator) */
	isPageChanging?: boolean;
	emptyMessage?: string;
}

export function DataTable<TData>({
	table,
	isLoading = false,
	isPageChanging = false,
	emptyMessage = "Nenhum registro encontrado",
}: DataTableProps<TData>) {
	const columnCount = table.getVisibleLeafColumns().length;

	return (
		<div className="relative overflow-x-auto rounded-lg border">
			{isPageChanging && (
				<div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-[1px]">
					<div className="flex items-center gap-2 rounded-lg border bg-popover px-4 py-2 shadow-lg">
						<div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
						<span className="text-sm text-muted-foreground">Carregando...</span>
					</div>
				</div>
			)}
			<TablePrimitive>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead key={header.id}>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{isLoading && !isPageChanging ? (
						Array.from({ length: 10 }, (_, i) => `skeleton-${i}`).map((key) => (
							<TableRow key={key}>
								{table.getVisibleLeafColumns().map((col) => (
									<TableCell key={`${key}-${col.id}`}>
										<Skeleton className="h-4 w-full" />
									</TableCell>
								))}
							</TableRow>
						))
					) : table.getRowModel().rows.length > 0 ? (
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={columnCount}
								className="h-24 text-center text-muted-foreground"
							>
								{emptyMessage}
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</TablePrimitive>
		</div>
	);
}

interface UseDataTableOptions<TData> {
	columns: ColumnDef<TData, unknown>[];
	data: TData[];
	pageCount?: number;
	pagination?: PaginationState;
	onPaginationChange?: OnChangeFn<PaginationState>;
	sorting?: SortingState;
	onSortingChange?: OnChangeFn<SortingState>;
}

export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
	return useReactTable({
		data: options.data,
		columns: options.columns,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: options.pageCount !== undefined,
		manualSorting: options.sorting !== undefined,
		...(options.pageCount !== undefined
			? { pageCount: options.pageCount }
			: {}),
		state: {
			...(options.pagination !== undefined
				? { pagination: options.pagination }
				: {}),
			...(options.sorting !== undefined ? { sorting: options.sorting } : {}),
		},
		onPaginationChange: options.onPaginationChange,
		onSortingChange: options.onSortingChange,
	});
}
