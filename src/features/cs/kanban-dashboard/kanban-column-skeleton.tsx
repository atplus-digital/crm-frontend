import { Skeleton } from "#/components/ui/skeleton";
import { cn } from "#/lib/utils";
import { KanbanCardSkeleton } from "./kanban-card-skeleton";
import type { UNIFIED_STATUS_COLUMNS } from "./types";

interface KanbanColumnSkeletonProps {
	status: (typeof UNIFIED_STATUS_COLUMNS)[number];
	cardCount?: number;
}

export function KanbanColumnSkeleton({
	status,
	cardCount = 3,
}: KanbanColumnSkeletonProps) {
	const cards = Array.from({ length: cardCount }, (_, i) => i);

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
					<Skeleton className="h-4 w-24" />
				</div>
				<Skeleton className="h-5 w-8 rounded-md" />
			</div>

			<div className="flex flex-1 flex-col space-y-2 overflow-y-auto p-2">
				{cards.map((i) => (
					<KanbanCardSkeleton key={i} />
				))}
			</div>
		</div>
	);
}
