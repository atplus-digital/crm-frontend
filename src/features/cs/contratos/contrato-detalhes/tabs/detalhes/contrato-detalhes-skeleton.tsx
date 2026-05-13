import { CardSectionSkeleton } from "#/components/detail-skeleton";
import { Skeleton } from "#/components/ui/skeleton";

/**
 * Skeleton para a tab de detalhes de contrato.
 *
 * Renderiza um placeholder com:
 * - Hero card (avatar, título, ações)
 * - Grid de métricas
 * - Duas colunas de cards (total 4 CardSectionSkeleton)
 * - Duas tabelas (faturas, produtos)
 */
export function ContratoDetailSkeleton() {
	return (
		<div className="flex flex-col gap-6">
			{/* Summary hero skeleton */}
			<div className="rounded-lg border border-border/50 bg-muted/30">
				<div className="flex flex-col gap-4 border-b p-6 pb-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<Skeleton className="h-14 w-14 rounded-full" />
						<div className="space-y-2">
							<Skeleton className="h-6 w-48" />
							<Skeleton className="h-4 w-32" />
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Skeleton className="h-8 w-28 rounded-lg" />
						<Skeleton className="h-8 w-28 rounded-lg" />
						<Skeleton className="h-8 w-20 rounded-lg" />
					</div>
				</div>
				<div className="bg-background/50 p-4">
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
						{[1, 2, 3, 4].map((i) => (
							<div key={i} className="flex items-center gap-2.5">
								<Skeleton className="h-9 w-9 rounded-lg" />
								<div className="space-y-1.5">
									<Skeleton className="h-3 w-16" />
									<Skeleton className="h-4 w-24" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Two-column cards */}
			<div className="grid gap-6 lg:grid-cols-2">
				<div className="space-y-6">
					<CardSectionSkeleton />
					<CardSectionSkeleton />
				</div>
				<div className="space-y-6">
					<CardSectionSkeleton />
					<CardSectionSkeleton />
				</div>
			</div>

			{/* Table skeletons */}
			<Skeleton className="h-64" />
			<Skeleton className="h-64" />
		</div>
	);
}
