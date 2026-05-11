import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import type { FnAreceber } from "#/generated/types/d_db_ixcsoft/fn-areceber";
import type { VdContratosProdutos } from "#/generated/types/d_db_ixcsoft/vd-contratos-produtos";
import type { DadosAdicionaisClienteContrato } from "#/generated/types/nocobase/other/dados-adicionais-cliente-contrato";
import { ContratoDetailSkeleton } from "./contrato-detalhes-skeleton";
import { ContratoInfoCard } from "./contrato-info-card";
import { ContratoSummaryCard } from "./contrato-summary-card";
import { DadosClienteCard } from "./dados-cliente-card";
import { EnderecoCard } from "./endereco-card";
import { FaturasTable } from "./faturas-table";
import { InformacoesAdicionaisCard } from "./informacoes-adicionais-card";
import { ProdutosTable } from "./produtos-table";

interface ContratoDetalhesTabProps {
	contrato: ContratoWithCliente | null;
	isLoading: boolean;
	produtos: VdContratosProdutos[];
	isLoadingProdutos: boolean;
	produtosError: Error | null;
	faturas: FnAreceber[];
	isLoadingFaturas: boolean;
	faturasError: Error | null;
	dadosAdicionais: DadosAdicionaisClienteContrato | null | undefined;
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
		return <ContratoDetailSkeleton />;
	}

	if (!contrato) {
		return <InlineErrorAlert>Contrato não encontrado</InlineErrorAlert>;
	}

	return (
		<div className="flex flex-col gap-6">
			{/* Hero summary with quick actions dropdown */}
			<ContratoSummaryCard contrato={contrato} />

			{/* Two-column layout */}
			<div className="grid gap-6 lg:grid-cols-2">
				<div className="space-y-6">
					<DadosClienteCard contrato={contrato} />
					<ContratoInfoCard contrato={contrato} />
				</div>
				<div className="space-y-6">
					<EnderecoCard contrato={contrato} />
					<InformacoesAdicionaisCard
						data={dadosAdicionais}
						isLoading={isLoadingDadosAdicionais}
					/>
				</div>
			</div>

			{/* Full-width tables */}
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
