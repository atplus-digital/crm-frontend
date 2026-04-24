import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import {
	PageLayout,
	PageTabContent,
} from "#/components/page-layot/page-layout";
import {
	KanbanFilters,
	ListaFilters,
} from "#/features/cs/negociacoes/negociacoes-filters";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesKanban } from "#/features/cs/negociacoes/negociacoes-kanban";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import type { NegociacaoFilters } from "#/features/cs/negociacoes/negociacoes-types";
import { usePageTab } from "#/hooks/use-page-tab";

export function NegociacoesPage() {
	const [activeTab] = usePageTab("kanban");
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
		<PageLayout
			title="Renegociações"
			subtitle="Gerencie suas negociações de renegociação"
			tabs={[
				{ value: "kanban", label: "Kanban (Minhas)" },
				{ value: "lista", label: "Lista (Todas)" },
			]}
			defaultTab="kanban"
		>
			<PageTabContent value="kanban">
				<div className="space-y-4">
					<KanbanFilters filters={kanbanFilters} onFilter={setKanbanFilters} />
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
			</PageTabContent>

			<PageTabContent value="lista">
				<div className="space-y-4">
					<ListaFilters filters={listaFilters} onFilter={setListaFilters} />
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
			</PageTabContent>
		</PageLayout>
	);
}
