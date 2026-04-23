import { Badge } from "#/components/ui/badge";
import { cn } from "#/lib/utils";
import { KanbanCardComponent } from "./kanban-card";
import type { STATUS_CONFIG } from "./kanban-status-config";
import type { KanbanCard } from "./kanban-utils";

interface KanbanColumnProps {
	status: (typeof STATUS_CONFIG)[number];
	cards: KanbanCard[];
}

export function KanbanColumn({ status, cards }: KanbanColumnProps) {
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

			<div className="flex-1 space-y-2 overflow-y-auto p-2">
				{cards.length === 0 ? (
					<div className="flex h-24 items-center justify-center text-xs text-muted-foreground">
						Sem itens
					</div>
				) : (
					cards.map((card) => <KanbanCardComponent key={card.id} card={card} />)
				)}
			</div>
		</div>
	);
}
