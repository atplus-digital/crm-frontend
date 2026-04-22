import { TableEmptyRow } from "#/components/table/table-empty-row";
import {
	Table,
	TableBody,
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
				<TableEmptyRow colSpan={columns.length} message={message} />
			</TableBody>
		</Table>
	);
}
