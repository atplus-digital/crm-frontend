import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { DetailSkeleton } from "#/features/cs/components/detail-skeleton";
import type {
	ContratoWithCliente,
	Fatura,
	ProdutoContrato,
} from "#/features/cs/contratos/contratos-types";
import { ClienteInfoCard } from "./cliente-info-card";
import { ContratoInfoCard } from "./contrato-info-card";
import { EnderecoCard } from "./endereco-card";
import { FaturasTable } from "./faturas-table";
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
}: ContratoDetalhesTabProps) {
	if (isLoading) {
		return <DetailSkeleton />;
	}

	if (!contrato) {
		return <InlineErrorAlert>Contrato não encontrado</InlineErrorAlert>;
	}

	return (
		<div className="flex flex-col gap-6">
			<ClienteInfoCard contrato={contrato} />
			<ContratoInfoCard contrato={contrato} />
			<EnderecoCard contrato={contrato} />
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
