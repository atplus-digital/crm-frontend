import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Skeleton } from "#/components/ui/skeleton";
import { CardSectionSkeleton } from "#/features/cs/components/detail-skeleton";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import type { FnAreceber } from "#/generated/types/d_db_ixcsoft/fn-areceber";
import type { VdContratosProdutos } from "#/generated/types/d_db_ixcsoft/vd-contratos-produtos";
import type { DadosAdicionaisClienteContrato } from "#/generated/types/nocobase/other/dados-adicionais-cliente-contrato";
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

function ContratoDetailSkeleton() {
	return (
		<div className="flex flex-col gap-6">
			{/* Summary hero skeleton */}
			<div className="rounded-lg border border-border/50 bg-muted/30">
				<div className="flex flex-col gap-4 border-b p-6 pb-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<Skeleton className="h-14 w-14 rounded-full" />
						<div className="space-y-2">
							<Skeleton className="h-6 w-48" />
							<Skeleton className="h-4 w-32" />
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Skeleton className="h-8 w-28 rounded-lg" />
						<Skeleton className="h-8 w-28 rounded-lg" />
						<Skeleton className="h-8 w-20 rounded-lg" />
					</div>
				</div>
				<div className="bg-background/50 p-4">
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
						{[1, 2, 3, 4].map((i) => (
							<div key={i} className="flex items-center gap-2.5">
								<Skeleton className="h-9 w-9 rounded-lg" />
								<div className="space-y-1.5">
									<Skeleton className="h-3 w-16" />
									<Skeleton className="h-4 w-24" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Two-column cards */}
			<div className="grid gap-6 lg:grid-cols-2">
				<div className="space-y-6">
					<CardSectionSkeleton />
					<CardSectionSkeleton />
				</div>
				<div className="space-y-6">
					<CardSectionSkeleton />
					<CardSectionSkeleton />
				</div>
			</div>

			{/* Table skeletons */}
			<Skeleton className="h-64" />
			<Skeleton className="h-64" />
		</div>
	);
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
