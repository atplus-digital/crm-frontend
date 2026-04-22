import { Skeleton } from "#/components/ui/skeleton";

export function ContractTabSkeleton() {
	return (
		<>
			<div className="space-y-1">
				<Skeleton className="h-6 w-32" />
				<Skeleton className="h-4 w-64" />
			</div>
			<Skeleton className="h-40 w-full" />
		</>
	);
}
