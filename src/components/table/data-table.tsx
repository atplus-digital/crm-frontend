import type {
	Column,
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
import type { CSSProperties, ReactNode } from "react";
import { DEFAULT_DATA_TABLE_EMPTY_MESSAGE } from "#/components/table/constants";
import { useResolvedDataTable } from "#/components/table/data-table-context";
import { DataTableSkeleton } from "#/components/table/data-table-skeleton";
import { TableEmptyRow } from "#/components/table/table-empty-row";
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	Table as TablePrimitive,
	TableRow,
} from "#/components/ui/table";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "#/components/ui/tooltip";
import { cn } from "#/lib/utils";

function getColumnWidthStyle<TData>(
	column: Column<TData, unknown>,
): CSSProperties | undefined {
	const { size, minSize, maxSize } = column.columnDef;
	const hasExplicitWidth =
		size !== undefined || minSize !== undefined || maxSize !== undefined;

	if (!hasExplicitWidth) {
		return undefined;
	}

	return {
		width: column.getSize(),
		...(minSize !== undefined ? { minWidth: minSize } : {}),
		...(maxSize !== undefined ? { maxWidth: maxSize } : {}),
	};
}

interface OverflowTooltipCellProps {
	children: ReactNode;
}

function OverflowTooltipCell({ children }: OverflowTooltipCellProps) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className="w-full overflow-hidden">{children}</div>
				</TooltipTrigger>
				<TooltipContent>{children}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

interface DataTableProps<TData> {
	table?: Table<TData>;
	emptyMessage?: string;
}

export function DataTable<TData>({
	table: tableProp,
	emptyMessage,
}: DataTableProps<TData>) {
	const { context, table } = useResolvedDataTable({
		table: tableProp,
		componentName: "DataTable",
	});
	const resolvedEmptyMessage =
		emptyMessage ?? context?.emptyMessage ?? DEFAULT_DATA_TABLE_EMPTY_MESSAGE;

	const isLoading = context?.isLoading ?? false;
	const hasInitialQueryData = context?.hasInitialQueryData ?? false;
	const rows = table.getRowModel().rows;
	const hasRows = rows.length > 0;
	const isBusyWithPreviousData = isLoading && hasRows;
	const shouldShowDisabledOverlay =
		isBusyWithPreviousData && !hasInitialQueryData;

	const columnCount = table.getVisibleLeafColumns().length;

	if (isLoading && !hasRows) {
		return <DataTableSkeleton />;
	}

	return (
		<div className="w-full relative overflow-x-auto rounded-lg border">
			{shouldShowDisabledOverlay ? (
				<div
					className="absolute inset-0 z-10 cursor-wait bg-background/35 backdrop-blur-[1px]"
					aria-hidden="true"
				/>
			) : null}
			<TablePrimitive
				className={cn(
					isBusyWithPreviousData &&
						"pointer-events-none select-none opacity-60 transition-opacity",
				)}
				aria-busy={isBusyWithPreviousData}
			>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead
									key={header.id}
									style={getColumnWidthStyle(header.column)}
								>
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
					{hasRows ? (
						rows.map((row) => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										style={getColumnWidthStyle(cell.column)}
									>
										{cell.column.columnDef.maxSize !== undefined &&
										cell.column.columnDef.maxSize < 999999 ? (
											<OverflowTooltipCell>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</OverflowTooltipCell>
										) : (
											flexRender(cell.column.columnDef.cell, cell.getContext())
										)}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableEmptyRow
							colSpan={columnCount}
							message={resolvedEmptyMessage}
						/>
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
