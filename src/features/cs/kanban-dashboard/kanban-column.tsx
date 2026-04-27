import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";
import { KanbanCard } from "./kanban-card";
import type {
	KanbanDashboardCard,
	UNIFIED_STATUS_COLUMNS,
} from "./kanban-dashboard-types";

const PAGE_SIZE = 5;

export interface KanbanColumnProps {
	status: (typeof UNIFIED_STATUS_COLUMNS)[number];
	cards: KanbanDashboardCard[];
	recentCount?: number;
	olderCount?: number;
}

export function KanbanColumn({
	status,
	cards,
	recentCount,
	olderCount,
}: KanbanColumnProps) {
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
	const [showOlder, setShowOlder] = useState(false);

	const isCancelado = status.key === "Cancelado";
	const recent =
		isCancelado && recentCount !== undefined ? recentCount : cards.length;
	const hiddenOlder = isCancelado && olderCount !== undefined ? olderCount : 0;

	// Recent cards (always first in the list)
	const recentCards = cards.slice(0, recent);

	// Older cards (after recent)
	const olderCards = isCancelado ? cards.slice(recent) : [];

	// Paginated display
	const visibleRecentCards = recentCards.slice(0, visibleCount);
	const visibleOlderCards = olderCards.slice(
		0,
		Math.max(0, visibleCount - recent),
	);
	const visibleCards = cards.slice(0, visibleCount);

	const remaining = cards.length - visibleCards.length;
	const hasMore = remaining > 0;

	return (
		<div className="flex w-72 shrink-0 flex-col rounded-xl border border-border bg-muted/30">
			<div
				className={cn(
					"flex items-center justify-between rounded-t-xl border-b border-border px-3 py-2.5",
					status.bgClass,
				)}
			>
				<div className="flex items-center gap-2">
					<div className={cn("size-2.5 rounded-full", status.colorClass)} />
					<h3 className="text-sm font-semibold">{status.label}</h3>
				</div>
				<Badge variant="secondary" className="h-5 min-w-6 text-xs">
					{cards.length}
				</Badge>
			</div>

			<div className="flex flex-1 flex-col space-y-2 overflow-y-auto p-2">
				{visibleCards.length === 0 ? (
					<div className="flex h-24 items-center justify-center text-xs text-muted-foreground">
						Nenhum registro
					</div>
				) : (
					<>
						{/* Cards recentes */}
						{visibleRecentCards.map((card) => (
							<KanbanCard key={card.id} card={card} />
						))}

						{/* Botão para mostrar antigos - posicionado acima dos antigos */}
						{isCancelado && hiddenOlder > 0 && !showOlder && (
							<Button
								variant="ghost"
								size="sm"
								className="mt-1 w-full text-xs text-muted-foreground"
								onClick={() => {
									setShowOlder(true);
									setVisibleCount(recent + PAGE_SIZE);
								}}
							>
								<ChevronDown className="mr-1 size-3" />
								Ver {hiddenOlder} mais antigo{hiddenOlder !== 1 ? "s" : ""} (5
								dias+)
							</Button>
						)}

						{/* Cards antigos */}
						{showOlder && visibleOlderCards.length > 0 && (
							<>
								<div className="flex items-center gap-2 py-1">
									<div className="h-px flex-1 bg-border" />
									<span className="text-xs text-muted-foreground">
										Mais antigos
									</span>
									<div className="h-px flex-1 bg-border" />
								</div>
								{visibleOlderCards.map((card) => (
									<KanbanCard key={card.id} card={card} />
								))}
							</>
						)}

						{/* Ver mais */}
						{hasMore && (
							<Button
								variant="ghost"
								size="sm"
								className="mt-1 w-full text-xs text-muted-foreground"
								onClick={() =>
									setVisibleCount((prev) =>
										Math.min(prev + PAGE_SIZE, cards.length),
									)
								}
							>
								Ver mais ({remaining})
							</Button>
						)}

						{/* Botão para recolher antigos */}
						{isCancelado && hiddenOlder > 0 && showOlder && (
							<Button
								variant="ghost"
								size="sm"
								className="mt-1 w-full text-xs text-muted-foreground"
								onClick={() => {
									setShowOlder(false);
									setVisibleCount(PAGE_SIZE);
								}}
							>
								<ChevronUp className="mr-1 size-3" />
								Recolher antigos
							</Button>
						)}
					</>
				)}
			</div>
		</div>
	);
}
