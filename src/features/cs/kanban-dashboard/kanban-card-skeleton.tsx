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
			<div className="flex items-center gap-2">
				<Skeleton className="h-5 w-16 rounded-full" />
				<Skeleton className="h-3 w-20" />
			</div>
		</div>
	);
}
