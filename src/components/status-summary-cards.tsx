import { BasicTableCard } from "#/components/basic-table-card";
import { Badge, type BadgeVariant } from "#/components/ui/badge";
import { cn } from "#/lib/utils";

// ============================================================================
// Types
// ============================================================================

interface StatusSummaryCardsProps<T> {
	items: T[];
	getKey: (item: T) => string;
	getLabel: (key: string) => string;
	getVariant?: (key: string) => BadgeVariant;
	/** Callback when a card is clicked; receives the card's key */
	onClick?: (key: string) => void;
	/** Key of the currently active card (for highlight styling) */
	activeKey?: string | null;
}

// ============================================================================
// Component
// ============================================================================

export function StatusSummaryCards<T>({
	items,
	getKey,
	getLabel,
	getVariant,
	onClick,
	activeKey,
}: StatusSummaryCardsProps<T>) {
	const statusCounts: Record<string, { count: number; variant: BadgeVariant }> =
		{};

	for (const item of items) {
		const key = getKey(item);
		if (!statusCounts[key]) {
			statusCounts[key] = {
				count: 0,
				variant: getVariant?.(key) ?? "secondary",
			};
		}
		statusCounts[key].count++;
	}

	const entries = Object.entries(statusCounts);
	if (entries.length === 0) return null;

	return (
		<div className="flex flex-wrap gap-4">
			{entries.map(([key, info]) => {
				const isActive = key === activeKey;
				return (
					<BasicTableCard
						key={key}
						label={getLabel(key)}
						value={info.count}
						className={cn(
							"cursor-pointer transition-colors",
							isActive && "border-primary bg-primary/5 ring-1 ring-primary/30",
						)}
						onClick={onClick ? () => onClick(key) : undefined}
					>
						<div className="flex items-center gap-2">
							<p className="text-lg font-semibold">{info.count}</p>
							<Badge
								variant={info.variant}
								className="size-2 rounded-full p-0"
							/>
						</div>
					</BasicTableCard>
				);
			})}
		</div>
	);
}
