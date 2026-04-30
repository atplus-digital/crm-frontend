import { Database, FilePlus, FolderOpen, Smartphone } from "lucide-react";
import { Outlet, useParams } from "react-router";
import { BackButton } from "#/components/back-button";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/page-layout/page-layout";
import { useNegociacao } from "#/features/cs/negociacoes/negociacoes-hooks";
import { routePaths } from "#/routes/route-paths";
import type { NegociacaoDetailOutletContext } from "../negociacoes/negociacao-detail";

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
			tabsPrefixElement={<BackButton fallbackTo={routePaths.cs_vendas} />}
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
			<div className="w-full">
				<Outlet
					context={
						{
							negociacao,
							isLoading,
						} satisfies NegociacaoDetailOutletContext
					}
				/>
			</div>
		</PageLayout>
	);
}
