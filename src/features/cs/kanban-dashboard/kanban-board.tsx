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

// Threshold for "recent" cancelados (5 days in milliseconds)
const RECENT_THRESHOLD_MS = 5 * 24 * 60 * 60 * 1000;

function isRecentCancelado(card: KanbanDashboardCard): boolean {
	const createdAt = new Date(card.createdAt).getTime();
	const now = Date.now();
	const fiveDaysAgo = now - RECENT_THRESHOLD_MS;

	return createdAt >= fiveDaysAgo;
}

function sortCardsByCreatedAtDesc(
	cards: KanbanDashboardCard[],
): KanbanDashboardCard[] {
	return [...cards].sort((a, b) => {
		const dateA = new Date(a.createdAt).getTime();
		const dateB = new Date(b.createdAt).getTime();
		return dateB - dateA; // descending (newest first)
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

// Returns { visible: cards to show, hidden: older cancelados }
function filterCanceladosForDisplay(cancelados: KanbanDashboardCard[]): {
	visible: KanbanDashboardCard[];
	hidden: KanbanDashboardCard[];
} {
	const visible: KanbanDashboardCard[] = [];
	const hidden: KanbanDashboardCard[] = [];

	for (const card of cancelados) {
		if (isRecentCancelado(card)) {
			visible.push(card);
		} else {
			hidden.push(card);
		}
	}

	return { visible, hidden };
}

export function KanbanBoard({ cards, isLoading }: KanbanBoardProps) {
	if (isLoading) {
		return (
			<div className="flex items-center justify-center py-12">
				<div className="text-sm text-muted-foreground">Carregando...</div>
			</div>
		);
	}

	// Sort all cards by createdAt descending (newest first)
	const sortedCards = sortCardsByCreatedAtDesc(cards);

	const grouped = groupCardsByStatus(sortedCards);
	const { visible: recentCancelados, hidden: olderCancelados } =
		filterCanceladosForDisplay(grouped.Cancelado);

	// For Cancelado: combine recent + older for the column
	const allCancelados = [...recentCancelados, ...olderCancelados];

	return (
		<div className="overflow-x-auto pb-2">
			<div className="flex gap-4">
				{UNIFIED_STATUS_COLUMNS.map((status) => {
					if (status.key === "Cancelado") {
						return (
							<KanbanColumn
								key={status.key}
								status={status}
								cards={allCancelados}
								recentCount={recentCancelados.length}
								olderCount={olderCancelados.length}
							/>
						);
					}

					return (
						<KanbanColumn
							key={status.key}
							status={status}
							cards={grouped[status.key as UnifiedStatusKey]}
						/>
					);
				})}
			</div>
		</div>
	);
}
