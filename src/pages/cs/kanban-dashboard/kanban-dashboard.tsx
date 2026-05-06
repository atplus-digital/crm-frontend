import { useSearchParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { KanbanBoard } from "#/features/cs/kanban-dashboard/kanban-board";
import { KanbanDashboardFilterBar } from "#/features/cs/kanban-dashboard/kanban-dashboard-filters";
import {
	DEFAULT_KANBAN_FILTERS,
	searchParamsToFilters,
} from "#/features/cs/kanban-dashboard/kanban-dashboard-filters-url";
import { useKanbanDashboardData } from "#/features/cs/kanban-dashboard/kanban-dashboard-hooks";
import type { KanbanDashboardFilters as FiltersType } from "#/features/cs/kanban-dashboard/kanban-dashboard-types";

export function KanbanDashboardPage() {
	const [searchParams, setSearchParams] = useSearchParams();

	// Parse filters from URL, apply defaults
	const filters: FiltersType = {
		...DEFAULT_KANBAN_FILTERS,
		...searchParamsToFilters(searchParams),
	};

	// Update URL when filters change
	const handleFilterChange = (newFilters: FiltersType) => {
		const params = new URLSearchParams();

		if (newFilters.searchTerm) {
			params.set("q", newFilters.searchTerm);
		}

		if (
			newFilters.sourceCollections &&
			newFilters.sourceCollections.length > 0
		) {
			params.set("s", newFilters.sourceCollections.join(","));
		}

		if (newFilters.tipoNegociacao && newFilters.tipoNegociacao.length > 0) {
			params.set("t", newFilters.tipoNegociacao.join(","));
		}

		if (newFilters.currentUser === true) {
			params.set("u", "1");
		} else if (newFilters.currentUser === false) {
			params.set("u", "0");
		}

		if (newFilters.sortField) {
			params.set("sort", newFilters.sortField);
		}

		setSearchParams(params, { replace: true });
	};

	const { cards, isLoading, error } = useKanbanDashboardData(filters);

	return (
		<PageLayout title="Dashboard">
			<div className="space-y-4">
				<KanbanDashboardFilterBar
					filters={filters}
					onFilter={handleFilterChange}
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
