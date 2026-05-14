import { SlidersHorizontal } from "lucide-react";
import { useResolvedDataTable } from "#/components/table/data-table-context";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";

export function DataTableColumnVisibility<TData>() {
	const { context, table } = useResolvedDataTable<TData>({
		componentName: "DataTableColumnVisibility",
	});

	if (context?.enableColumnVisibility === false) {
		return null;
	}

	const hideableColumns = table
		.getAllLeafColumns()
		.filter((column) => column.getCanHide());

	if (hideableColumns.length === 0) {
		return null;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="sm">
					<SlidersHorizontal className="size-4" />
					<span className="hidden sm:inline">Colunas</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className="w-48">
				<DropdownMenuLabel>Colunas visíveis</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{hideableColumns.map((column) => (
					<DropdownMenuCheckboxItem
						key={column.id}
						checked={column.getIsVisible()}
						onCheckedChange={(value) => column.toggleVisibility(!!value)}
					>
						{typeof column.columnDef.header === "string"
							? column.columnDef.header
							: column.id}
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
