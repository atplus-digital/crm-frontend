import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Database, FilePlus } from "lucide-react";
import { useParams } from "react-router";
import { toast } from "sonner";
import { BackButton } from "#/components/back-button";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { TabsContent } from "#/components/ui/tabs";
import {
	TransferenciaTitularidadeDetailSkeleton,
	TransferenciaTitularidadeSummaryCard,
} from "#/features/cs/troca-titularidade/components/sections";
import { TitularidadeAcoesSidebar } from "#/features/cs/troca-titularidade/components/sections/titularidade-acoes-sidebar";
import { TitularidadeAnexosTab } from "#/features/cs/troca-titularidade/components/sections/titularidade-anexos-tab";
import { TitularidadeComentarioDrawer } from "#/features/cs/troca-titularidade/components/sections/titularidade-comentario-drawer";
import { TitularidadeEditForm } from "#/features/cs/troca-titularidade/components/sections/titularidade-edit-form";
import { useTrocaTitularidadeById } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import { getErrorMessage } from "#/lib/api-errors";
import { nocobaseRepository } from "#/repositories";
import { routePaths } from "#/routes/route-paths";

export function TrocaTitularidadeDetailPage() {
	const { id } = useParams<{ id: string }>();
	const transferenciaId = Number(id);
	const queryClient = useQueryClient();

	const {
		data: transferencia,
		isLoading,
		error,
	} = useTrocaTitularidadeById(transferenciaId);

	const arquivarMutation = useMutation({
		mutationFn: (tid: number) =>
			nocobaseRepository.update("t_crm_troca_titularidade", tid, {
				f_status: "9",
			}),
		onSuccess: (_data, tid) => {
			toast.success("Arquivado com sucesso");
			queryClient.invalidateQueries({ queryKey: ["troca-titularidade"] });
			queryClient.invalidateQueries({
				queryKey: ["troca-titularidade", tid],
			});
		},
		onError: (err) =>
			toast.error(
				`Erro: ${err instanceof Error ? err.message : "desconhecido"}`,
			),
	});

	const excluirMutation = useMutation({
		mutationFn: (tid: number) =>
			nocobaseRepository.delete("t_crm_troca_titularidade", tid),
		onSuccess: () => {
			toast.success("Excluído com sucesso");
			queryClient.invalidateQueries({ queryKey: ["troca-titularidade"] });
		},
		onError: (err) =>
			toast.error(
				`Erro: ${err instanceof Error ? err.message : "desconhecido"}`,
			),
	});

	const title = transferencia
		? `Transferência de Titularidade #${transferencia.id}`
		: undefined;

	if (error) {
		return (
			<PageLayout
				title="Transferência de Titularidade"
				prefixElement={
					<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />
				}
			>
				<InlineErrorAlert>
					Erro ao carregar detalhes da transferência: {getErrorMessage(error)}
				</InlineErrorAlert>
			</PageLayout>
		);
	}

	if (!isLoading && !transferencia) {
		return (
			<PageLayout
				title="Transferência de Titularidade"
				prefixElement={
					<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />
				}
			>
				<InlineErrorAlert>
					Transferência de titularidade não encontrada
				</InlineErrorAlert>
			</PageLayout>
		);
	}

	return (
		<PageLayout
			title={title ?? "Transferência de Titularidade"}
			prefixElement={
				<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />
			}
			tabs={[
				{
					value: "detalhes",
					label: "Detalhes",
					icon: <Database className="size-4" />,
				},
				{
					value: "anexos",
					label: "Anexos",
					icon: <FilePlus className="size-4" />,
				},
			]}
			defaultTab="detalhes"
		>
			<TabsContent value="detalhes">
				{isLoading ? (
					<TransferenciaTitularidadeDetailSkeleton />
				) : transferencia ? (
					<div className="flex flex-col gap-6">
						<TransferenciaTitularidadeSummaryCard
							transferencia={transferencia}
						/>
						<div className="flex flex-col lg:grid lg:grid-cols-[64%_36%] gap-6">
							<TitularidadeEditForm trocaTitularidade={transferencia} />
							<div className="space-y-4">
								<TitularidadeAcoesSidebar
									trocaTitularidade={transferencia}
									onArquivar={() => arquivarMutation.mutate(transferencia.id)}
									onExcluir={() => excluirMutation.mutate(transferencia.id)}
								/>
								<TitularidadeComentarioDrawer
									trocaTitularidadeId={transferencia.id}
								/>
							</div>
						</div>
					</div>
				) : null}
			</TabsContent>
			<TabsContent value="anexos">
				<TitularidadeAnexosTab />
			</TabsContent>
		</PageLayout>
	);
}
