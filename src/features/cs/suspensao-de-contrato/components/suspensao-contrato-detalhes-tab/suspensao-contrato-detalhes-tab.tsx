import { CardSectionSkeleton } from "#/components/detail-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { CommentsList } from "#/features/cs/components/comments-list";
import { useUpdateSuspensaoContrato } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { SuspensaoContratoActions } from "../sections/suspensao-contrato-actions";
import { SuspensaoContratoComentarioDrawer } from "../sections/suspensao-contrato-comentario-drawer";
import { AssinanteCard } from "./suspensao-contrato-assinante-card";
import { ContratoCard } from "./suspensao-contrato-contrato-card";
import { SuspensaoContratoContratoLinkCard } from "./suspensao-contrato-contrato-link-card";
import { DadosClienteCard } from "./suspensao-contrato-dados-cliente-card";
import { EnvioCard } from "./suspensao-contrato-envio-card";
import { SuspensaoContratoSummaryCard } from "./suspensao-contrato-summary-card";
import { SuspensaoCard } from "./suspensao-contrato-suspensao-card";

interface SuspensaoContratoDetalhesTabProps {
	suspensaoContrato: SuspensaoContratoWithRelations | undefined;
	isLoading: boolean;
}

export function SuspensaoContratoDetalhesTab({
	suspensaoContrato,
	isLoading,
}: SuspensaoContratoDetalhesTabProps) {
	const updateMutation = useUpdateSuspensaoContrato();

	if (isLoading) {
		return (
			<div className="flex flex-col gap-6">
				<CardSectionSkeleton />
				<CardSectionSkeleton />
				<CardSectionSkeleton />
			</div>
		);
	}

	if (!suspensaoContrato) {
		return (
			<InlineErrorAlert>Suspensão de contrato não encontrada</InlineErrorAlert>
		);
	}

	return (
		<div className="flex flex-col gap-6">
			<SuspensaoContratoSummaryCard suspensaoContrato={suspensaoContrato} />

			<Tabs defaultValue="detalhes" className="w-full">
				<TabsList className="mb-6">
					<TabsTrigger value="detalhes">Detalhes Suspensão</TabsTrigger>
					<TabsTrigger value="contrato">Contrato</TabsTrigger>
				</TabsList>

				<TabsContent value="detalhes" className="space-y-6">
					<div className="grid gap-6 lg:grid-cols-2">
						<div className="space-y-6">
							<DadosClienteCard suspensaoContrato={suspensaoContrato} />
							<SuspensaoCard suspensaoContrato={suspensaoContrato} />
						</div>
						<div className="space-y-6">
							<EnvioCard suspensaoContrato={suspensaoContrato} />
							<SuspensaoContratoContratoLinkCard
								suspensaoContrato={suspensaoContrato}
							/>
						</div>
					</div>

					<SuspensaoContratoActions
						status={Number(suspensaoContrato.f_status)}
						onEnviar={() =>
							updateMutation.mutate({
								id: suspensaoContrato.id,
								data: { f_status: "1" },
							})
						}
						onConcluir={() =>
							updateMutation.mutate({
								id: suspensaoContrato.id,
								data: { f_status: "3" },
							})
						}
						onArquivar={() =>
							updateMutation.mutate({
								id: suspensaoContrato.id,
								data: { f_status: "4" },
							})
						}
						isLoading={updateMutation.isPending}
					/>

					<div className="flex items-center justify-between">
						<h3 className="text-sm font-medium">Comentários</h3>
						<SuspensaoContratoComentarioDrawer
							suspensaoId={suspensaoContrato.id}
						/>
					</div>
					<CommentsList
						comments={suspensaoContrato.f_comentarios}
						title=""
						description="Observações registradas"
					/>
				</TabsContent>

				<TabsContent value="contrato" className="space-y-6">
					<div className="grid gap-6 lg:grid-cols-2">
						<div className="space-y-6">
							<AssinanteCard suspensaoContrato={suspensaoContrato} />
						</div>
						<div className="space-y-6">
							<ContratoCard suspensaoContrato={suspensaoContrato} />
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
