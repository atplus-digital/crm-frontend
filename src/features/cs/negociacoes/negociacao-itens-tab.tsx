import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import { ContractTabWrapper } from "#/features/cs/contract-tab-wrapper";
import { useNegociacaoItens } from "#/features/cs/negociacoes/negociacoes-hooks";
import { formatCurrency } from "#/lib/utils";
import { RelacaoBadge, TipoProdutoBadge } from "./negociacao-badges";

const ITENS_COLUMNS = [
	"Produto",
	"Tipo",
	"Mensalidade c/ Desconto",
	"Mensalidade s/ Desconto",
	"Relação",
	"Observações",
];

export function NegociacaoItensTab({ negociacaoId }: { negociacaoId: number }) {
	const { data: response, isLoading, error } = useNegociacaoItens(negociacaoId);
	const itens = response?.data ?? [];

	return (
		<ContractTabWrapper
			title="Itens da Negociação"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar itens"
			isEmpty={itens.length === 0}
			emptyMessage="Nenhum item encontrado"
			emptyColumns={ITENS_COLUMNS}
		>
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
		</ContractTabWrapper>
	);
}
