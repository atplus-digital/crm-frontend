import type { Table } from "@tanstack/react-table";

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
	table: Table<TData>;
	total?: number;
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
	table,
	total,
}: DataTablePaginationProps<TData>) {
	const { pageIndex, pageSize } = table.getState().pagination;
	const totalPages = table.getPageCount();

	const itemCount = total ?? table.getFilteredRowModel().rows.length;
	const currentPage = pageIndex + 1;
	const startItem = itemCount === 0 ? 0 : pageIndex * pageSize + 1;
	const endItem = Math.min((pageIndex + 1) * pageSize, itemCount);

	const pageNumbers = getPageNumbers(currentPage, totalPages);

	return (
		<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
			<span className="text-sm text-muted-foreground">
				{startItem}-{endItem} de {itemCount}
			</span>

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href="#"
							onClick={(e) => {
								e.preventDefault();
								table.previousPage();
							}}
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
									onClick={(e) => {
										e.preventDefault();
										table.setPageIndex(p - 1);
									}}
								>
									{p}
								</PaginationLink>
							</PaginationItem>
						);
					})}

					<PaginationItem>
						<PaginationNext
							href="#"
							onClick={(e) => {
								e.preventDefault();
								table.nextPage();
							}}
							className={
								!table.getCanNextPage() ? "pointer-events-none opacity-50" : ""
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>

			<div className="flex items-center gap-2">
				<span className="text-sm text-muted-foreground">Itens por página:</span>
				<Select
					value={pageSize.toString()}
					onValueChange={(value) => table.setPageSize(Number(value))}
				>
					<SelectTrigger className="w-20">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="10">10</SelectItem>
						<SelectItem value="20">20</SelectItem>
						<SelectItem value="50">50</SelectItem>
						<SelectItem value="100">100</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
