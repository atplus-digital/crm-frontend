import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { FilterActions } from "#/components/filters";
import { PageLayout } from "#/components/page-layout/page-layout";
import { KanbanBoard } from "#/features/cs/kanban-dashboard/kanban-board";
import { KanbanDashboardFilterBar } from "#/features/cs/kanban-dashboard/kanban-dashboard-filters";
import { useKanbanDashboardData } from "#/features/cs/kanban-dashboard/kanban-dashboard-hooks";
import type { KanbanDashboardFilters as FiltersType } from "#/features/cs/kanban-dashboard/kanban-dashboard-types";

export function KanbanDashboardPage() {
	const [filters, setFilters] = useState<FiltersType>({});
	const { cards, isLoading, error } = useKanbanDashboardData(filters);

	const hasFilters = Boolean(filters.searchTerm || filters.sourceCollection);

	const handleClearFilters = () => {
		setFilters({});
	};

	return (
		<PageLayout
			title="Dashboard"
			subtitle="Visão unificada das solicitações de Troca de Titularidade, Troca de Endereço e Suspensão de Contrato"
		>
			<div className="space-y-4">
				<KanbanDashboardFilterBar filters={filters} onFilter={setFilters} />
				<FilterActions
					onApply={() => setFilters({ ...filters })}
					onClear={handleClearFilters}
					canClear={hasFilters}
				/>
				{error ? (
					<InlineErrorAlert>
						Erro ao carregar dashboard: {(error as Error).message}
					</InlineErrorAlert>
				) : (
					<KanbanBoard cards={cards} isLoading={isLoading} />
				)}
			</div>
		</PageLayout>
	);
}
