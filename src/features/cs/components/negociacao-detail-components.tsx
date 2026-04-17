import { Card, CardContent, CardHeader } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";

interface DetailFieldProps {
	label: string;
	children: React.ReactNode;
}

export function DetailField({ label, children }: DetailFieldProps) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-sm font-medium text-muted-foreground">{label}</span>
			<span className="text-sm">{children}</span>
		</div>
	);
}

export function DetailSkeleton() {
	const sectionKeys = ["section-1", "section-2", "section-3"] as const;
	const fieldKeys = [
		"field-1",
		"field-2",
		"field-3",
		"field-4",
		"field-5",
		"field-6",
	] as const;

	return (
		<div className="flex flex-col gap-6">
			{sectionKeys.map((sectionKey) => (
				<Card key={sectionKey}>
					<CardHeader>
						<Skeleton className="h-5 w-48" />
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							{fieldKeys.map((fieldKey) => (
								<div
									key={`${sectionKey}-${fieldKey}`}
									className="flex flex-col gap-1"
								>
									<Skeleton className="h-3 w-24" />
									<Skeleton className="h-4 w-32" />
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}

export function CardSectionSkeleton() {
	const fieldKeys = [
		"field-1",
		"field-2",
		"field-3",
		"field-4",
		"field-5",
		"field-6",
	] as const;

	return (
		<Card>
			<CardHeader>
				<Skeleton className="h-5 w-48" />
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{fieldKeys.map((fieldKey) => (
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

export function MovelTableSkeleton() {
	return (
		<div className="space-y-2">
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
		</div>
	);
}
