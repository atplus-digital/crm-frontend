import { Card, CardContent, CardHeader } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";

export function CardSectionSkeleton() {
	return (
		<Card>
			<CardHeader>
				<Skeleton className="h-5 w-48" />
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{[
						"field-1",
						"field-2",
						"field-3",
						"field-4",
						"field-5",
						"field-6",
					].map((fieldKey) => (
						<div key={fieldKey} className="flex flex-col gap-1">
							<Skeleton className="h-3 w-24" />
							<Skeleton className="h-4 w-32" />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
