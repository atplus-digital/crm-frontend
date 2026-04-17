import { MovelTableSkeleton } from "#/components/detail/movel-table-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import { useNegociacaoItens } from "#/features/cs/negociacoes/negociacoes-hooks";
import { formatCurrency } from "#/lib/utils";
import { RelacaoBadge, TipoProdutoBadge } from "./negociacao-badges";

export function NegociacaoItensTab({ negociacaoId }: { negociacaoId: number }) {
	const { data: response, isLoading, error } = useNegociacaoItens(negociacaoId);
	const itens = response?.data ?? [];

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar itens: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	if (isLoading) {
		return <MovelTableSkeleton />;
	}

	if (itens.length === 0) {
		return (
			<EmptyTable
				columns={[
					"Produto",
					"Tipo",
					"Mensalidade c/ Desconto",
					"Mensalidade s/ Desconto",
					"Relação",
					"Observações",
				]}
				message="Nenhum item encontrado"
			/>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Itens da Negociação</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Produto</TableHead>
								<TableHead>Tipo</TableHead>
								<TableHead className="text-right">
									Mensalidade c/ Desconto
								</TableHead>
								<TableHead className="text-right">
									Mensalidade s/ Desconto
								</TableHead>
								<TableHead>Relação</TableHead>
								<TableHead>Observações</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{itens.map((item) => (
								<TableRow key={item.id}>
									<TableCell className="font-medium">
										{item.f_nome_produto}
									</TableCell>
									<TableCell>
										<TipoProdutoBadge tipo={item.f_tipo_produto} />
									</TableCell>
									<TableCell className="text-right">
										{formatCurrency(item.f_mensalidade_com_desconto)}
									</TableCell>
									<TableCell className="text-right">
										{formatCurrency(item.f_mensalidade_sem_desconto)}
									</TableCell>
									<TableCell>
										<RelacaoBadge relacao={item.f_relacao} />
									</TableCell>
									<TableCell className="max-w-xs truncate">
										{item.f_observacoes || "—"}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
}
