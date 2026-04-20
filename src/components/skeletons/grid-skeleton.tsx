import { Skeleton } from "#/components/ui/skeleton";

interface GridSkeletonProps {
	items?: number;
	columns?: {
		sm?: number;
		md?: number;
		lg?: number;
	};
	className?: string;
	itemClassName?: string;
}

export function GridSkeleton({
	items = 6,
	columns = { sm: 1, md: 2, lg: 3 },
	className,
	itemClassName,
}: GridSkeletonProps) {
	const columnClasses = [
		columns.sm ? `grid-cols-${columns.sm}` : "grid-cols-1",
		columns.md ? `md:grid-cols-${columns.md}` : undefined,
		columns.lg ? `lg:grid-cols-${columns.lg}` : undefined,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={`grid gap-4 ${columnClasses} ${className || ""}`}>
			{Array.from({ length: items }).map((_, i) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loading state, no dynamic reordering
					key={i}
					className={`flex flex-col gap-2 p-4 border rounded-lg ${itemClassName || ""}`}
				>
					<Skeleton className="h-6 w-3/4" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-2/3" />
					<div className="flex gap-2 mt-2">
						<Skeleton className="h-8 w-20" />
						<Skeleton className="h-8 w-20" />
					</div>
				</div>
			))}
		</div>
	);
}
