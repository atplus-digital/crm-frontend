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
import type { ProdutoContrato } from "#/features/cs/contratos/contratos-types";
import { formatCurrency } from "#/lib/utils";

interface ProdutosTableProps {
	produtos: ProdutoContrato[];
	isLoading: boolean;
	error: Error | null;
}

const PRODUTO_COLUMNS = ["Descrição", "Valor", "Quantidade"];

export function ProdutosTable({
	produtos,
	isLoading,
	error,
}: ProdutosTableProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Produtos</CardTitle>
				<CardDescription>Produtos vinculados ao contrato</CardDescription>
			</CardHeader>
			<CardContent>
				{isLoading ? (
					<Skeleton className="h-32 w-full" />
				) : error ? (
					<InlineErrorAlert>
						Erro ao carregar produtos: {error.message}
					</InlineErrorAlert>
				) : produtos.length === 0 ? (
					<EmptyTable
						columns={PRODUTO_COLUMNS}
						message="Nenhum produto encontrado"
					/>
				) : (
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead className="bg-muted/50">
								<tr>
									<th className="px-4 py-3 text-left font-medium">Descrição</th>
									<th className="px-4 py-3 text-left font-medium">Valor</th>
									<th className="px-4 py-3 text-left font-medium">
										Quantidade
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-border">
								{produtos.map((produto) => (
									<tr key={produto.id}>
										<td className="px-4 py-3">{produto.descricao || "—"}</td>
										<td className="px-4 py-3">
											{formatCurrency(Number(produto.valor_unit))}
										</td>
										<td className="px-4 py-3">{produto.qtde ?? "—"}</td>
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
