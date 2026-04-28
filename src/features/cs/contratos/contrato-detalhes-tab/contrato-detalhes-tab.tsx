import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { DetailSkeleton } from "#/features/cs/components/detail-skeleton";
import type {
	ContratoWithCliente,
	DadosAdicionaisContrato,
	Fatura,
	ProdutoContrato,
} from "#/features/cs/contratos/contratos-types";
import { ClienteInfoCard } from "./cliente-info-card";
import { ContratoActionsCard } from "./contrato-actions-card";
import { ContratoInfoCard } from "./contrato-info-card";
import { EnderecoCard } from "./endereco-card";
import { FaturasTable } from "./faturas-table";
import { InformacoesAdicionaisCard } from "./informacoes-adicionais-card";
import { ProdutosTable } from "./produtos-table";

interface ContratoDetalhesTabProps {
	contrato: ContratoWithCliente | null;
	isLoading: boolean;
	produtos: ProdutoContrato[];
	isLoadingProdutos: boolean;
	produtosError: Error | null;
	faturas: Fatura[];
	isLoadingFaturas: boolean;
	faturasError: Error | null;
	dadosAdicionais: DadosAdicionaisContrato | null | undefined;
	isLoadingDadosAdicionais: boolean;
}

export function ContratoDetalhesTab({
	contrato,
	isLoading,
	produtos,
	isLoadingProdutos,
	produtosError,
	faturas,
	isLoadingFaturas,
	faturasError,
	dadosAdicionais,
	isLoadingDadosAdicionais,
}: ContratoDetalhesTabProps) {
	if (isLoading) {
		return <DetailSkeleton />;
	}

	if (!contrato) {
		return <InlineErrorAlert>Contrato não encontrado</InlineErrorAlert>;
	}

	return (
		<div className="flex flex-col gap-6">
			<ContratoActionsCard />
			<ClienteInfoCard contrato={contrato} />
			<ContratoInfoCard contrato={contrato} />
			<EnderecoCard contrato={contrato} />
			<InformacoesAdicionaisCard
				data={dadosAdicionais}
				isLoading={isLoadingDadosAdicionais}
			/>
			<ProdutosTable
				produtos={produtos}
				isLoading={isLoadingProdutos}
				error={produtosError}
			/>
			<FaturasTable
				faturas={faturas}
				isLoading={isLoadingFaturas}
				error={faturasError}
			/>
		</div>
	);
}
