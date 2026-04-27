import { KanbanColumn } from "./kanban-column";
import type {
	KanbanDashboardCard,
	UnifiedStatusKey,
} from "./kanban-dashboard-types";
import { UNIFIED_STATUS_COLUMNS } from "./kanban-dashboard-types";

interface KanbanBoardProps {
	cards: KanbanDashboardCard[];
	isLoading: boolean;
}

function groupCardsByStatus(
	cards: KanbanDashboardCard[],
): Record<UnifiedStatusKey, KanbanDashboardCard[]> {
	const groups: Record<UnifiedStatusKey, KanbanDashboardCard[]> = {
		Novo: [],
		"Em Andamento": [],
		Assinatura: [],
		Concluido: [],
		Cancelado: [],
	};

	for (const card of cards) {
		const key = card.unifiedStatus;
		if (groups[key]) {
			groups[key].push(card);
		} else {
			groups.Novo.push(card);
		}
	}

	return groups;
}

export function KanbanBoard({ cards, isLoading }: KanbanBoardProps) {
	if (isLoading) {
		return (
			<div className="flex items-center justify-center py-12">
				<div className="text-sm text-muted-foreground">Carregando...</div>
			</div>
		);
	}

	const grouped = groupCardsByStatus(cards);

	return (
		<div className="overflow-x-auto pb-2">
			<div className="flex gap-4">
				{UNIFIED_STATUS_COLUMNS.map((status) => (
					<KanbanColumn
						key={status.key}
						status={status}
						cards={grouped[status.key as UnifiedStatusKey]}
					/>
				))}
			</div>
		</div>
	);
}
