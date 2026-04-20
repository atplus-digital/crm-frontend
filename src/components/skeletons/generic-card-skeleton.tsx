import { Card, CardContent, CardHeader } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";

interface GenericCardSkeletonProps {
	showHeader?: boolean;
	contentLines?: number;
	className?: string;
}

export function GenericCardSkeleton({
	showHeader = true,
	contentLines = 3,
	className,
}: GenericCardSkeletonProps) {
	return (
		<Card className={className}>
			{showHeader && (
				<CardHeader>
					<Skeleton className="h-5 w-3/4" />
					<Skeleton className="h-4 w-1/2" />
				</CardHeader>
			)}
			<CardContent>
				<div className="space-y-2">
					{Array.from({ length: contentLines }).map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: Skeleton loading state, no dynamic reordering
						<Skeleton key={i} className="h-4 w-full" />
					))}
					<Skeleton className="h-4 w-3/5" />
				</div>
			</CardContent>
		</Card>
	);
}
