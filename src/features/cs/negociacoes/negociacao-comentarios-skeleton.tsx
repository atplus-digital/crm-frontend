import { Card, CardContent, CardHeader } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";

export function CommentSkeleton() {
	return (
		<Card className="w-full">
			<CardHeader className="flex flex-row items-start gap-3 space-y-0 p-4 pb-2">
				<Skeleton className="size-10 rounded-full" />
				<div className="flex flex-col gap-1 flex-1">
					<div className="flex items-center gap-2">
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-3 w-24" />
					</div>
					<Skeleton className="h-3 w-20 mt-1" />
				</div>
			</CardHeader>
			<CardContent className="pb-4 pt-0">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-3/4 mt-2" />
			</CardContent>
		</Card>
	);
}
