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

interface KanbanColumnProps {
	status: (typeof UNIFIED_STATUS_COLUMNS)[number];
	cards: KanbanDashboardCard[];
}

export function KanbanColumn({ status, cards }: KanbanColumnProps) {
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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
						{visibleCards.map((card) => (
							<KanbanCard key={card.id} card={card} />
						))}

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
					</>
				)}
			</div>
		</div>
	);
}
