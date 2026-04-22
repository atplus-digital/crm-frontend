import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import {
	KanbanFilters,
	ListaFilters,
} from "#/features/cs/negociacoes/negociacoes-filters";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesKanban } from "#/features/cs/negociacoes/negociacoes-kanban";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import type { NegociacaoFilters } from "#/features/cs/negociacoes/negociacoes-types";

export function NegociacoesPage() {
	const [activeTab, setActiveTab] = useState<string>("kanban");
	const [kanbanFilters, setKanbanFilters] = useState<NegociacaoFilters>({});
	const [listaFilters, setListaFilters] = useState<NegociacaoFilters>({});

	const {
		data: negociacoesData,
		isLoading,
		error,
		refetch,
	} = useNegociacoes({
		page: 1,
		pageSize: 100,
		filters: activeTab === "kanban" ? kanbanFilters : listaFilters,
	});

	const negociacoes = negociacoesData?.data ?? [];
	const totalCount = negociacoesData?.meta?.total ?? 0;

	const handleExport = () => {
		const csv = exportNegociacoesToCsv(negociacoes);
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `negociacoes-${new Date().toISOString().split("T")[0]}.csv`;
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="flex flex-1 flex-col overflow-auto">
			<main className="flex-1">
				<div className="p-4">
					<div className="space-y-6">
						<div>
							<h1 className="text-2xl font-semibold tracking-tight">
								Renegociações
							</h1>
							<p className="text-sm text-muted-foreground">
								Gerencie suas negociações de renegociação
							</p>
						</div>

						<Tabs value={activeTab} onValueChange={setActiveTab}>
							<TabsList className="mb-4">
								<TabsTrigger value="kanban">Kanban (Minhas)</TabsTrigger>
								<TabsTrigger value="lista">Lista (Todas)</TabsTrigger>
							</TabsList>

							<div className="rounded-lg border bg-card p-4">
								<TabsContent value="kanban" className="mt-0">
									<div className="space-y-4">
										<KanbanFilters
											filters={kanbanFilters}
											onFilter={setKanbanFilters}
										/>
										{error ? (
											<InlineErrorAlert>
												Erro ao carregar negociações: {(error as Error).message}
											</InlineErrorAlert>
										) : (
											<NegociacoesKanban
												negociacoes={negociacoes}
												isLoading={isLoading}
											/>
										)}
									</div>
								</TabsContent>

								<TabsContent value="lista" className="mt-0">
									<div className="space-y-4">
										<ListaFilters
											filters={listaFilters}
											onFilter={setListaFilters}
										/>
										{error ? (
											<InlineErrorAlert>
												Erro ao carregar negociações: {(error as Error).message}
											</InlineErrorAlert>
										) : (
											<NegociacoesList
												negociacoes={negociacoes}
												totalCount={totalCount}
												onRefresh={() => refetch()}
												onExport={handleExport}
											/>
										)}
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</main>
		</div>
	);
}
