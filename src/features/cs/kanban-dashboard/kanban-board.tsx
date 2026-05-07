import { useMemo } from "react";
import { KanbanColumn } from "./kanban-column";
import type {
	KanbanDashboardCard,
	UnifiedStatusKey,
} from "./kanban-dashboard-types";
import { UNIFIED_STATUS_COLUMNS } from "./kanban-dashboard-types";
import { KanbanSkeleton } from "./kanban-skeleton";

interface KanbanBoardProps {
	cards: KanbanDashboardCard[];
	isLoading: boolean;
}

function sortCardsByCreatedAtDesc(
	cards: KanbanDashboardCard[],
): KanbanDashboardCard[] {
	return [...cards].sort((a, b) => {
		const dateA = new Date(a.createdAt).getTime();
		const dateB = new Date(b.createdAt).getTime();
		return dateB - dateA;
	});
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
		"Aguardando assinatura teste": [],
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
	const sortedCards = useMemo(() => sortCardsByCreatedAtDesc(cards), [cards]);
	const grouped = useMemo(() => groupCardsByStatus(sortedCards), [sortedCards]);

	if (isLoading) {
		return <KanbanSkeleton />;
	}

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
