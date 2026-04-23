import {
	Database,
	FilePlus,
	FolderOpen,
	Phone,
	Smartphone,
} from "lucide-react";
import { useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Skeleton } from "#/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { BackButton } from "#/features/cs/back-button";
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
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 p-4">
				{/* Header */}
				<div className="flex items-center gap-4 mb-6">
					<BackButton fallbackTo={routePaths.cs_contratos} />
					<div>
						{isLoading ? (
							<>
								<Skeleton className="h-7 w-48 mb-1" />
								<Skeleton className="h-4 w-64" />
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold tracking-tight">
									Contrato #{contrato?.id ?? id}
								</h1>
								{contrato?.contrato && (
									<p className="text-muted-foreground">{contrato.contrato}</p>
								)}
							</>
						)}
					</div>
				</div>

				{/* Tabs */}
				<Tabs defaultValue="detalhes">
					<div className="overflow-x-auto pb-2">
						<TabsList variant="line" className="flex whitespace-nowrap">
							<TabsTrigger value="detalhes">
								<Database className="size-4" />
								Detalhes
							</TabsTrigger>
							<TabsTrigger value="movel">
								<Phone className="size-4" />
								Móvel
							</TabsTrigger>
							<TabsTrigger value="negociacoes">
								<FolderOpen className="size-4" />
								Negociações
							</TabsTrigger>
							<TabsTrigger value="atendimentos">
								<Smartphone className="size-4" />
								Atendimentos IXC
							</TabsTrigger>
							<TabsTrigger value="registros">
								<FilePlus className="size-4" />
								Registros
							</TabsTrigger>
						</TabsList>
					</div>

					{/* Tab: Detalhes */}
					<TabsContent value="detalhes" className="mt-6">
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
					</TabsContent>

					{/* Tab: Móvel */}
					<TabsContent value="movel" className="mt-6">
						<ContratoMovelTab contratoId={contratoId} />
					</TabsContent>

					{/* Tab: Negociações */}
					<TabsContent value="negociacoes" className="mt-6">
						<ContratoNegociacoesTab contratoId={contratoId} />
					</TabsContent>

					{/* Tab: Atendimentos IXC */}
					<TabsContent value="atendimentos" className="mt-6">
						<ContratoAtendimentosTab contratoId={contratoId} />
					</TabsContent>

					{/* Tab: Registros */}
					<TabsContent value="registros" className="mt-6">
						<ContratoRegistrosTab contratoId={contratoId} />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
