import type { BadgeVariant } from "#/components/ui/badge";
import { cn } from "#/lib/utils";
import { StatusBadge } from "./status-badge";

interface StatusBadgeGroupProps {
	status: string;
	substatus?: string;
	statusLabels: Record<string, string>;
	substatusLabels: Record<string, string>;
	statusVariants?: Record<string, BadgeVariant>;
	substatusVariants?: Record<string, BadgeVariant>;
	statusColorClasses?: Record<string, string>;
	substatusColorClasses?: Record<string, string>;
	className?: string;
}

export function StatusBadgeGroup({
	status,
	substatus,
	statusLabels,
	substatusLabels,
	statusVariants,
	substatusVariants,
	statusColorClasses,
	substatusColorClasses,
	className,
}: StatusBadgeGroupProps) {
	return (
		<div className={cn("flex flex-wrap gap-2", className)}>
			<StatusBadge
				value={status}
				labels={statusLabels}
				variants={statusVariants}
				colorClasses={statusColorClasses}
			/>
			{substatus && (
				<StatusBadge
					value={substatus}
					labels={substatusLabels}
					variants={substatusVariants}
					colorClasses={substatusColorClasses}
				/>
			)}
		</div>
	);
}
