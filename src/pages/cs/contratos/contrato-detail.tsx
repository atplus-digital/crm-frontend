import {
	Database,
	FilePlus,
	FolderOpen,
	Phone,
	Smartphone,
} from "lucide-react";
import { useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import {
	PageLayout,
	PageTabContent,
} from "#/components/page-layout/page-layout";
import { Skeleton } from "#/components/ui/skeleton";
import { BackButton } from "#/features/cs/components/back-button";
import { ContratoAtendimentosTab } from "#/features/cs/contratos/contrato-atendimentos-tab";
import { ContratoDetalhesTab } from "#/features/cs/contratos/contrato-detalhes-tab";
import { ContratoMovelTab } from "#/features/cs/contratos/contrato-movel-tab";
import { ContratoNegociacoesTab } from "#/features/cs/contratos/contrato-negociacoes-tab";
import { ContratoRegistrosTab } from "#/features/cs/contratos/contrato-registros-tab";
import {
	useContratoById,
	useContratoFaturas,
	useContratoProdutos,
} from "#/features/cs/contratos/contratos-hooks";
import { routePaths } from "#/routes/route-paths";

export function ContratoDetailPage() {
	const { id } = useParams<{ id: string }>();
	const contratoId = Number(id);
	const { data: contrato, isLoading, error } = useContratoById(contratoId);
	const {
		data: produtosData,
		isLoading: isLoadingProdutos,
		error: produtosError,
	} = useContratoProdutos(contratoId);
	const {
		data: faturasData,
		isLoading: isLoadingFaturas,
		error: faturasError,
	} = useContratoFaturas(contratoId);

	const produtos = produtosData?.data ?? [];
	const faturas = faturasData?.data ?? [];

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar contrato: {(error as Error).message}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<PageLayout
			prefixElement={<BackButton fallbackTo={routePaths.cs_contratos} />}
			title={
				isLoading ? (
					<Skeleton className="h-7 w-48" />
				) : (
					`Contrato #${contrato?.id ?? id}`
				)
			}
			subtitle={
				!isLoading && contrato?.contrato ? contrato.contrato : undefined
			}
			tabs={[
				{
					value: "detalhes",
					label: "Detalhes",
					icon: <Database className="size-4" />,
				},
				{ value: "movel", label: "Móvel", icon: <Phone className="size-4" /> },
				{
					value: "negociacoes",
					label: "Negociações",
					icon: <FolderOpen className="size-4" />,
				},
				{
					value: "atendimentos",
					label: "Atendimentos IXC",
					icon: <Smartphone className="size-4" />,
				},
				{
					value: "registros",
					label: "Registros",
					icon: <FilePlus className="size-4" />,
				},
			]}
			defaultTab="detalhes"
		>
			<div className="mx-auto max-w-400">
				<PageTabContent value="detalhes">
					<ContratoDetalhesTab
						contrato={contrato ?? null}
						isLoading={isLoading}
						produtos={produtos}
						isLoadingProdutos={isLoadingProdutos}
						produtosError={produtosError}
						faturas={faturas}
						isLoadingFaturas={isLoadingFaturas}
						faturasError={faturasError}
					/>
				</PageTabContent>

				<PageTabContent value="movel">
					<ContratoMovelTab contratoId={contratoId} />
				</PageTabContent>

				<PageTabContent value="negociacoes">
					<ContratoNegociacoesTab contratoId={contratoId} />
				</PageTabContent>

				<PageTabContent value="atendimentos">
					<ContratoAtendimentosTab contratoId={contratoId} />
				</PageTabContent>

				<PageTabContent value="registros">
					<ContratoRegistrosTab contratoId={contratoId} />
				</PageTabContent>
			</div>
		</PageLayout>
	);
}
