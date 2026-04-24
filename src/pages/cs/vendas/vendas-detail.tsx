import { Database, FilePlus, FolderOpen, Smartphone } from "lucide-react";
import { useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import {
	PageLayout,
	PageTabContent,
} from "#/components/page-layot/page-layout";
import { Skeleton } from "#/components/ui/skeleton";
import { BackButton } from "#/features/cs/components/back-button";
import { NegociacaoAnexosTab } from "#/features/cs/negociacoes/negociacao-anexos-tab";
import { NegociacaoComentariosTab } from "#/features/cs/negociacoes/negociacao-comentarios-tab";
import { NegociacaoDetalhesTab } from "#/features/cs/negociacoes/negociacao-detalhes-tab";
import { NegociacaoItensTab } from "#/features/cs/negociacoes/negociacao-itens-tab";
import { useNegociacao } from "#/features/cs/negociacoes/negociacoes-hooks";
import { routePaths } from "#/routes/route-paths";

export function VendasDetailPage() {
	const { id } = useParams<{ id: string }>();
	const negociacaoId = Number(id);
	const { data: negociacao, isLoading, error } = useNegociacao(negociacaoId);

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar venda: {(error as Error).message}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<PageLayout
			prefixElement={<BackButton fallbackTo={routePaths.cs_vendas} />}
			title={
				isLoading ? (
					<Skeleton className="h-7 w-48" />
				) : (
					`Venda #${negociacao?.id ?? id}`
				)
			}
			subtitle={
				!isLoading && negociacao?.f_titulo ? negociacao.f_titulo : undefined
			}
			tabs={[
				{
					value: "detalhes",
					label: "Detalhes",
					icon: <Database className="size-4" />,
				},
				{
					value: "itens",
					label: "Itens da Negociação",
					icon: <FolderOpen className="size-4" />,
				},
				{
					value: "anexos",
					label: "Anexos",
					icon: <FilePlus className="size-4" />,
				},
				{
					value: "comentarios",
					label: "Comentários",
					icon: <Smartphone className="size-4" />,
				},
			]}
			defaultTab="detalhes"
		>
			<div className="mx-auto max-w-400">
				<PageTabContent value="detalhes">
					<NegociacaoDetalhesTab
						negociacao={negociacao}
						isLoading={isLoading}
					/>
				</PageTabContent>

				<PageTabContent value="itens">
					<NegociacaoItensTab negociacaoId={negociacaoId} />
				</PageTabContent>

				<PageTabContent value="anexos">
					<NegociacaoAnexosTab negociacaoId={negociacaoId} />
				</PageTabContent>

				<PageTabContent value="comentarios">
					<NegociacaoComentariosTab negociacaoId={negociacaoId} />
				</PageTabContent>
			</div>
		</PageLayout>
	);
}
