import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/page-layout/page-layout";
import { KanbanBoard } from "#/features/cs/kanban-dashboard/kanban-board";
import { useKanbanDashboardData } from "#/features/cs/kanban-dashboard/kanban-dashboard-hooks";

export function KanbanDashboardPage() {
	const { cards, isLoading, error } = useKanbanDashboardData();

	return (
		<PageLayout
			title="Dashboard"
			subtitle="Visão unificada das solicitações de Troca de Titularidade, Troca de Endereço e Suspensão de Contrato"
		>
			{error ? (
				<InlineErrorAlert>
					Erro ao carregar dashboard: {(error as Error).message}
				</InlineErrorAlert>
			) : (
				<KanbanBoard cards={cards} isLoading={isLoading} />
			)}
		</PageLayout>
	);
}
