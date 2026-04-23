import { Database, FilePlus, FolderOpen, Smartphone } from "lucide-react";
import { useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Skeleton } from "#/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { BackButton } from "#/features/cs/back-button";
import { NegociacaoAnexosTab } from "#/features/cs/negociacoes/negociacao-anexos-tab";
import { NegociacaoComentariosTab } from "#/features/cs/negociacoes/negociacao-comentarios-tab";
import { NegociacaoDetalhesTab } from "#/features/cs/negociacoes/negociacao-detalhes-tab";
import { NegociacaoItensTab } from "#/features/cs/negociacoes/negociacao-itens-tab";
import { useNegociacao } from "#/features/cs/negociacoes/negociacoes-hooks";
import { routePaths } from "#/routes/route-paths";

export function NegociacaoDetailPage() {
	const { id } = useParams<{ id: string }>();
	const negociacaoId = Number(id);
	const { data: negociacao, isLoading, error } = useNegociacao(negociacaoId);

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar negociação: {(error as Error).message}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 p-4">
				<div className="flex items-center gap-4 mb-6">
					<BackButton fallbackTo={routePaths.cs_negociacoes} />
					<div>
						{isLoading ? (
							<>
								<Skeleton className="h-7 w-48 mb-1" />
								<Skeleton className="h-4 w-64" />
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold tracking-tight">
									Renegociação #{negociacao?.id ?? id}
								</h1>
								{negociacao?.f_titulo && (
									<p className="text-muted-foreground">{negociacao.f_titulo}</p>
								)}
							</>
						)}
					</div>
				</div>

				<Tabs defaultValue="detalhes">
					<div className="overflow-x-auto pb-2">
						<TabsList variant="line" className="flex whitespace-nowrap">
							<TabsTrigger value="detalhes">
								<Database className="size-4" />
								Detalhes
							</TabsTrigger>
							<TabsTrigger value="itens">
								<FolderOpen className="size-4" />
								Itens
							</TabsTrigger>
							<TabsTrigger value="anexos">
								<FilePlus className="size-4" />
								Anexos
							</TabsTrigger>
							<TabsTrigger value="comentarios">
								<Smartphone className="size-4" />
								Comentários
							</TabsTrigger>
						</TabsList>
					</div>

					<TabsContent value="detalhes" className="mt-6">
						<NegociacaoDetalhesTab
							negociacao={negociacao}
							isLoading={isLoading}
						/>
					</TabsContent>

					<TabsContent value="itens" className="mt-6">
						<NegociacaoItensTab negociacaoId={negociacaoId} />
					</TabsContent>

					<TabsContent value="anexos" className="mt-6">
						<NegociacaoAnexosTab negociacaoId={negociacaoId} />
					</TabsContent>

					<TabsContent value="comentarios" className="mt-6">
						<NegociacaoComentariosTab negociacaoId={negociacaoId} />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
