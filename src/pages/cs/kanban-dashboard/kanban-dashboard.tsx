import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/page-layout/page-layout";
import { KanbanBoard } from "#/features/cs/kanban-dashboard/kanban-board";
import { KanbanDashboardFilterBar } from "#/features/cs/kanban-dashboard/kanban-dashboard-filters";
import { useKanbanDashboardData } from "#/features/cs/kanban-dashboard/kanban-dashboard-hooks";
import type { KanbanDashboardFilters as FiltersType } from "#/features/cs/kanban-dashboard/kanban-dashboard-types";

export function KanbanDashboardPage() {
	const [filters, setFilters] = useState<FiltersType>({});
	const { cards, isLoading, error } = useKanbanDashboardData(filters);

	return (
		<PageLayout
			title="Dashboard"
		>
			<div className="space-y-4">
				<KanbanDashboardFilterBar filters={filters} onFilter={setFilters} />
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
