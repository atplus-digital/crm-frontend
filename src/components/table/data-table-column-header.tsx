import type { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
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
				{sorted === "desc" && <ArrowUp />}
				{sorted === "asc" && <ArrowDown />}
				{sorted === false && <ArrowUpDown className="text-muted-foreground" />}
			</Button>
		</div>
	);
}
