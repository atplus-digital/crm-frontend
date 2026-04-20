import { Skeleton } from "#/components/ui/skeleton";

interface GenericTableSkeletonProps {
	columns?: number;
	rows?: number;
	className?: string;
}

export function GenericTableSkeleton({
	columns = 6,
	rows = 5,
	className,
}: GenericTableSkeletonProps) {
	return (
		<div className={className}>
			<div className="space-y-2">
				{Array.from({ length: rows }).map((_, rowIndex) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loading state, no dynamic reordering
					<div key={rowIndex} className="flex gap-4">
						{Array.from({ length: columns }).map((_, colIndex) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loading state, no dynamic reordering
							<Skeleton key={colIndex} className="h-10 flex-1" />
						))}
					</div>
				))}
			</div>
		</div>
	);
}
