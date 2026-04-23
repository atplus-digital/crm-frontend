import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import type { Fatura } from "#/features/cs/contratos/contratos-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

interface FaturasTableProps {
	faturas: Fatura[];
	isLoading: boolean;
	error: Error | null;
}

const FATURA_COLUMNS = [
	"Status",
	"Valor",
	"Data de Vencimento",
	"Data de Pagamento",
];

export function FaturasTable({ faturas, isLoading, error }: FaturasTableProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Últimas Faturas</CardTitle>
				<CardDescription>
					Últimas faturas geradas para este contrato
				</CardDescription>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<Skeleton className="h-32 w-full" />
				) : error ? (
					<InlineErrorAlert>
						Erro ao carregar faturas: {error.message}
					</InlineErrorAlert>
				) : faturas.length === 0 ? (
					<EmptyTable
						columns={FATURA_COLUMNS}
						message="Nenhuma fatura encontrada"
					/>
				) : (
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead className="bg-muted/50">
								<tr>
									<th className="px-4 py-3 text-left font-medium">Status</th>
									<th className="px-4 py-3 text-left font-medium">Valor</th>
									<th className="px-4 py-3 text-left font-medium">
										Data de Vencimento
									</th>
									<th className="px-4 py-3 text-left font-medium">
										Data de Pagamento
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-border">
								{faturas.map((fatura) => (
									<tr key={fatura.id}>
										<td className="px-4 py-3">{fatura.status || "—"}</td>
										<td className="px-4 py-3">
											{formatCurrency(Number(fatura.valor))}
										</td>
										<td className="px-4 py-3">
											{formatDatePtBR(fatura.data_vencimento ?? "")}
										</td>
										<td className="px-4 py-3">
											{formatDatePtBR(fatura.data_pagamento ?? "")}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</CardContent>
		</Card>
	);
}
