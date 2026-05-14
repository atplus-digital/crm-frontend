import {
	Badge,
	type BadgeColor,
	type BadgeVariant,
	getBadgeSolidClass,
} from "#/components/ui/badge";
import { cn } from "#/lib/utils";
import { getBadgeColorValue, getStatusVariant } from "../utils";

interface StatusBadgeProps {
	value: string;
	labels: Record<string, string>;
	variants?: Record<string, BadgeVariant>;
	colorMap?: Record<string, BadgeColor>;
	variant?: "badge" | "inline";
	className?: string;
	defaultVariant?: BadgeVariant;
	/** Default color when value is not in colorMap (for variant="badge") */
	defaultColor?: BadgeColor;
}

export function StatusBadge({
	value,
	labels,
	variants,
	colorMap,
	variant = "badge",
	className,
	defaultVariant = "secondary",
	defaultColor,
}: StatusBadgeProps) {
	const label = labels[value] ?? value;
	const resolvedColor = getBadgeColorValue(
		value,
		colorMap,
		defaultColor ?? "gray",
	);

	if (variant === "inline") {
		const colorClass = getBadgeSolidClass(resolvedColor);
		return (
			<span
				className={cn(
					"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
					colorClass,
					className,
				)}
			>
				{label}
			</span>
		);
	}

	const badgeVariant = getStatusVariant(value, variants, defaultVariant);

	return (
		<Badge variant={badgeVariant} color={resolvedColor} className={className}>
			{label}
		</Badge>
	);
}
