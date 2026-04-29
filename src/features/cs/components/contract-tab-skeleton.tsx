import { Skeleton } from "#/components/ui/skeleton";

export function ContractTabSkeleton() {
	return (
		<>
			<div className="flex items-center gap-2">
				<Skeleton className="h-6 w-32" />
				<Skeleton className="h-5 w-8 rounded-full" />
			</div>
			<div className="mt-1">
				<Skeleton className="h-4 w-64" />
			</div>
			<Skeleton className="mt-4 h-40 w-full" />
		</>
	);
}
