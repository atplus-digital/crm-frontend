import {
	ArrowLeft,
	Database,
	FilePlus,
	FolderOpen,
	Smartphone,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Button } from "#/components/ui/button";
import { Skeleton } from "#/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { useNegociacao } from "#/features/cs/negociacoes/negociacoes-hooks";

function DetailSkeleton() {
	const sectionKeys = ["section-1", "section-2", "section-3"] as const;
	const fieldKeys = [
		"field-1",
		"field-2",
		"field-3",
		"field-4",
		"field-5",
		"field-6",
	] as const;

	return (
		<div className="flex flex-col gap-6">
			{sectionKeys.map((sectionKey) => (
				<div key={sectionKey}>
					<div className="flex flex-col gap-1 mb-2">
						<Skeleton className="h-5 w-48" />
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{fieldKeys.map((fieldKey) => (
							<div
								key={`${sectionKey}-${fieldKey}`}
								className="flex flex-col gap-1"
							>
								<Skeleton className="h-3 w-24" />
								<Skeleton className="h-4 w-32" />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

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
				{/* Header */}
				<div className="flex items-center gap-4 mb-6">
					<Button variant="ghost" size="icon" asChild>
						<Link to="/cs/negociacoes">
							<ArrowLeft className="size-4" />
						</Link>
					</Button>
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

				{/* Tabs */}
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

					{/* Tab Contents */}
					<TabsContent value="detalhes" className="mt-6">
						{isLoading ? (
							<DetailSkeleton />
						) : negociacao ? (
							<div className="flex flex-col gap-6">
								{/* Cards will be added in Task 7 */}
								<p className="text-sm text-muted-foreground">
									Detalhes da negociação serão exibidos aqui
								</p>
							</div>
						) : (
							<InlineErrorAlert>Negociação não encontrada</InlineErrorAlert>
						)}
					</TabsContent>

					<TabsContent value="itens" className="mt-6">
						{/* Will be implemented in Task 8 */}
						<p className="text-sm text-muted-foreground">Itens da negociação</p>
					</TabsContent>

					<TabsContent value="anexos" className="mt-6">
						{/* Will be implemented in Task 9 */}
						<p className="text-sm text-muted-foreground">
							Anexos da negociação
						</p>
					</TabsContent>

					<TabsContent value="comentarios" className="mt-6">
						{/* Will be implemented in Task 10 */}
						<p className="text-sm text-muted-foreground">
							Comentários da negociação
						</p>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
