import { KanbanColumnSkeleton } from "./kanban-column-skeleton";
import { STATUS_CONFIG } from "./kanban-status-config";
import { useHorizontalScroll } from "./use-horizontal-scroll";

interface KanbanSkeletonProps {
	/** Number of cards per column (default: 3) */
	cardsPerColumn?: number;
}

export function KanbanSkeleton({ cardsPerColumn = 3 }: KanbanSkeletonProps) {
	const scrollContainerRef = useHorizontalScroll();

	return (
		<div ref={scrollContainerRef} className="overflow-x-auto pb-2">
			<div className="flex gap-4">
				{STATUS_CONFIG.map((status) => (
					<KanbanColumnSkeleton
						key={status.key}
						status={status}
						cardCount={cardsPerColumn}
					/>
				))}
			</div>
		</div>
	);
}
