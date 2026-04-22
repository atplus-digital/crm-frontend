import { Card, CardContent, CardHeader } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";

export function AttachmentSkeleton() {
	return (
		<Card>
			<CardHeader>
				<Skeleton className="size-8 mb-2" />
				<Skeleton className="h-5 w-3/4" />
				<Skeleton className="h-4 w-1/2" />
			</CardHeader>
			<CardContent>
				<div className="flex gap-2">
					<Skeleton className="h-8 w-16" />
					<Skeleton className="h-8 w-16" />
				</div>
			</CardContent>
		</Card>
	);
}
