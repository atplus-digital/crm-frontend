import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesKanban } from "#/features/cs/negociacoes/negociacoes-kanban";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import type { NegociacaoFilters } from "#/features/cs/negociacoes/negociacoes-types";
import { VendasFilters } from "#/features/cs/vendas/vendas-filters";
import { useVendedores } from "#/features/cs/vendas/vendas-hooks";

export function VendasPage() {
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

	const { data: vendedores } = useVendedores();

	const negociacoes = negociacoesData?.data ?? [];
	const totalCount = negociacoesData?.meta?.total ?? 0;

	const handleExport = () => {
		const csv = exportNegociacoesToCsv(negociacoes);
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `vendas-${new Date().toISOString().split("T")[0]}.csv`;
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="flex flex-1 flex-col overflow-auto">
			<main className="flex-1">
				<div className="p-4">
					<div className="space-y-6">
						<div>
							<h1 className="text-2xl font-semibold tracking-tight">Vendas</h1>
							<p className="text-sm text-muted-foreground">
								Suas Negociações de Vendas
							</p>
						</div>

						<Tabs value={activeTab} onValueChange={setActiveTab}>
							<TabsList className="mb-4">
								<TabsTrigger value="kanban">Kanban</TabsTrigger>
								<TabsTrigger value="lista">Lista</TabsTrigger>
							</TabsList>

							<div className="rounded-lg border bg-card p-4">
								<TabsContent value="kanban" className="mt-0">
									<div className="space-y-4">
										<VendasFilters
											filters={kanbanFilters}
											onFilter={setKanbanFilters}
											vendedores={vendedores}
										/>
										{error ? (
											<InlineErrorAlert>
												Erro ao carregar vendas: {(error as Error).message}
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
										<VendasFilters
											filters={listaFilters}
											onFilter={setListaFilters}
											vendedores={vendedores}
										/>
										{error ? (
											<InlineErrorAlert>
												Erro ao carregar vendas: {(error as Error).message}
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
