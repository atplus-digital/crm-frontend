import type { Table } from "@tanstack/react-table";
import type { MouseEventHandler } from "react";
import { DATA_TABLE_PAGE_SIZE_OPTIONS } from "#/components/table/constants";
import { useResolvedDataTable } from "#/components/table/data-table-context";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "#/components/ui/pagination";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";

interface DataTablePaginationProps<TData> {
	table?: Table<TData>;
	total?: number;
}

function withPreventDefault(
	action: () => void,
): MouseEventHandler<HTMLAnchorElement> {
	return (event) => {
		event.preventDefault();
		action();
	};
}

function getPageNumbers(
	current: number,
	total: number,
): (number | "ellipsis-start" | "ellipsis-end")[] {
	if (total <= 5) {
		return Array.from({ length: total }, (_, i) => i + 1);
	}

	const pages: (number | "ellipsis-start" | "ellipsis-end")[] = [1];

	if (current > 3) {
		pages.push("ellipsis-start");
	}

	const start = Math.max(2, current - 1);
	const end = Math.min(total - 1, current + 1);

	for (let i = start; i <= end; i++) {
		pages.push(i);
	}

	if (current < total - 2) {
		pages.push("ellipsis-end");
	}

	pages.push(total);

	return pages;
}

export function DataTablePagination<TData>({
	table: tableProp,
	total: totalProp,
}: DataTablePaginationProps<TData>) {
	const { context, table } = useResolvedDataTable({
		table: tableProp,
		componentName: "DataTablePagination",
	});
	const total = totalProp ?? context?.total;

	const { pageIndex, pageSize } = table.getState().pagination;
	const totalPages = table.getPageCount();

	const itemCount = total ?? table.getFilteredRowModel().rows.length;
	const currentPage = pageIndex + 1;
	const startItem = itemCount === 0 ? 0 : pageIndex * pageSize + 1;
	const endItem = Math.min((pageIndex + 1) * pageSize, itemCount);

	const pageNumbers = getPageNumbers(currentPage, totalPages);

	return (
		<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
			<span className="text-sm text-muted-foreground text-nowrap">
				{startItem}-{endItem} de {itemCount}
			</span>

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href="#"
							onClick={withPreventDefault(() => table.previousPage())}
							className={
								!table.getCanPreviousPage()
									? "pointer-events-none opacity-50"
									: ""
							}
						/>
					</PaginationItem>

					{pageNumbers.map((p) => {
						if (p === "ellipsis-start" || p === "ellipsis-end") {
							return (
								<PaginationItem key={p}>
									<PaginationEllipsis />
								</PaginationItem>
							);
						}

						return (
							<PaginationItem key={p}>
								<PaginationLink
									href="#"
									isActive={p === currentPage}
									onClick={withPreventDefault(() => table.setPageIndex(p - 1))}
								>
									{p}
								</PaginationLink>
							</PaginationItem>
						);
					})}

					<PaginationItem>
						<PaginationNext
							href="#"
							onClick={withPreventDefault(() => table.nextPage())}
							className={
								!table.getCanNextPage() ? "pointer-events-none opacity-50" : ""
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<div className="flex items-center gap-2">
				<span className="text-sm text-muted-foreground text-nowrap">
					Itens por página:
				</span>
				<Select
					value={pageSize.toString()}
					onValueChange={(value) => table.setPageSize(Number(value))}
				>
					<SelectTrigger className="w-20">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{DATA_TABLE_PAGE_SIZE_OPTIONS.map((pageSizeOption) => (
							<SelectItem
								key={pageSizeOption}
								value={pageSizeOption.toString()}
							>
								{pageSizeOption}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
