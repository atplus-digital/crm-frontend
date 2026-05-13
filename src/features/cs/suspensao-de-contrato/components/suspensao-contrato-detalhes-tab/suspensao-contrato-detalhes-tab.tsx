import { CardSectionSkeleton } from "#/components/detail-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { CommentsList } from "#/features/cs/components/comments-list";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { SuspensaoContratoActions } from "../sections/suspensao-contrato-actions";
import { AssinanteCard } from "./suspensao-contrato-assinante-card";
import { ContratoCard } from "./suspensao-contrato-contrato-card";
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
						</div>
					</div>

					<SuspensaoContratoActions
						status={Number(suspensaoContrato.f_status)}
						onEnviar={() => console.log("TODO: mutation Enviar")}
						onConcluir={() => console.log("TODO: mutation Concluir")}
						onArquivar={() => console.log("TODO: mutation Arquivar")}
					/>

					<CommentsList
						comments={suspensaoContrato.f_comentarios}
						title="Comentários"
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
