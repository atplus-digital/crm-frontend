import type { Column } from "@tanstack/react-table";
import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import type { HTMLAttributes } from "react";

import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue>
	extends HTMLAttributes<HTMLDivElement> {
	column: Column<TData, TValue>;
	title: string;
}

export function DataTableColumnHeader<TData, TValue>({
	column,
	title,
	className,
}: DataTableColumnHeaderProps<TData, TValue>) {
	if (!column.getCanSort()) {
		return <span className={cn(className)}>{title}</span>;
	}

	const sorted = column.getIsSorted();

	return (
		<div className={cn("flex items-center", className)}>
			<Button
				variant="ghost"
				size="sm"
				className="-ml-3 h-8 data-[state=sorted]:text-foreground"
				onClick={() => column.toggleSorting(sorted === "asc")}
			>
				{title}
				{sorted === "desc" && <ChevronDown className="size-5" />}
				{sorted === "asc" && <ChevronUp className="size-5" />}
				{sorted === false && (
					<ChevronsUpDown className="text-muted-foreground size-4" />
				)}
			</Button>
		</div>
	);
}
