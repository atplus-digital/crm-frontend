import { KanbanColumnSkeleton } from "./kanban-column-skeleton";

import { UNIFIED_STATUS_COLUMNS } from "./types";

interface KanbanSkeletonProps {
	/** Number of cards per column (default: 3) */
	cardsPerColumn?: number;
}

export function KanbanSkeleton({ cardsPerColumn = 3 }: KanbanSkeletonProps) {
	return (
		<div className="overflow-x-auto pb-2">
			<div className="flex gap-4">
				{UNIFIED_STATUS_COLUMNS.map((status) => (
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
