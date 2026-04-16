import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";

interface EmptyTableProps {
	columns: string[];
	message?: string;
}

export function EmptyTable({
	columns,
	message = "Nenhum dado disponível",
}: EmptyTableProps) {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{columns.map((col) => (
						<TableHead key={col}>{col}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell
						colSpan={columns.length}
						className="h-24 text-center text-muted-foreground"
					>
						{message}
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
