import { Skeleton } from "#/components/ui/skeleton";

export function DetailSkeleton({ sections = 3 }: { sections?: number }) {
	const sectionKeys = Array.from(
		{ length: sections },
		(_, i) => `section-${i + 1}`,
	);
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
				<div key={sectionKey}>
					<div className="flex flex-col gap-1 mb-2">
						<Skeleton className="h-5 w-48" />
					</div>
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
				</div>
			))}
		</div>
	);
}
