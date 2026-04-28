import { Skeleton } from "#/components/ui/skeleton";
import { cn } from "#/lib/utils";

interface KanbanCardSkeletonProps {
	className?: string;
}

export function KanbanCardSkeleton({ className }: KanbanCardSkeletonProps) {
	return (
		<div
			className={cn(
				"rounded-lg bg-card p-3 shadow-sm border border-border/50",
				className,
			)}
		>
			<Skeleton className="mb-2 h-4 w-3/4" />
			<div className="space-y-1.5">
				<div className="flex items-center justify-between">
					<Skeleton className="h-3 w-10" />
					<Skeleton className="h-3 w-16" />
				</div>
				<div className="flex items-center justify-between">
					<Skeleton className="h-3 w-12" />
					<Skeleton className="h-3 w-20" />
				</div>
			</div>
		</div>
	);
}
