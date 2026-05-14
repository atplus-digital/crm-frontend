import type { BadgeColor, BadgeVariant } from "#/components/ui/badge";
import { cn } from "#/lib/utils";
import { StatusBadge } from "./status-badge";

interface StatusBadgeGroupProps {
	status: string;
	substatus?: string;
	statusLabels: Record<string, string>;
	substatusLabels: Record<string, string>;
	statusVariants?: Record<string, BadgeVariant>;
	substatusVariants?: Record<string, BadgeVariant>;
	statusColorMap?: Record<string, BadgeColor>;
	substatusColorMap?: Record<string, BadgeColor>;
	className?: string;
}

export function StatusBadgeGroup({
	status,
	substatus,
	statusLabels,
	substatusLabels,
	statusVariants,
	substatusVariants,
	statusColorMap,
	substatusColorMap,
	className,
}: StatusBadgeGroupProps) {
	return (
		<div className={cn("flex flex-wrap gap-2", className)}>
			<StatusBadge
				value={status}
				labels={statusLabels}
				variants={statusVariants}
				colorMap={statusColorMap}
			/>
			{substatus && (
				<StatusBadge
					value={substatus}
					labels={substatusLabels}
					variants={substatusVariants}
					colorMap={substatusColorMap}
				/>
			)}
		</div>
	);
}
