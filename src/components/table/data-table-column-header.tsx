import type { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp } from "lucide-react";
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

	return (
		<div className={cn("flex items-center", className)}>
			<Button
				variant="ghost"
				size="sm"
				className="-ml-3 h-8 data-[state=sorted]:text-foreground"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				{title}
				{column.getIsSorted() === "asc" && <ArrowUp />}
				{column.getIsSorted() === "desc" && <ArrowDown />}
			</Button>
		</div>
	);
}
