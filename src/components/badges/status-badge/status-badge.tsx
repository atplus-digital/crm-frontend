import {
	Badge,
	type BadgeColor,
	type BadgeVariant,
	getBadgeSolidClass,
} from "#/components/ui/badge";
import { cn } from "#/lib/utils";
import { getBadgeColorValue, getColorClass, getStatusVariant } from "../utils";

interface StatusBadgeProps {
	value: string;
	labels: Record<string, string>;
	variants?: Record<string, BadgeVariant>;
	/** @deprecated Use `colorMap` instead */
	colorClasses?: Record<string, string>;
	/** Preferred: maps status value → BadgeColor */
	colorMap?: Record<string, BadgeColor>;
	variant?: "badge" | "inline";
	className?: string;
	defaultVariant?: BadgeVariant;
	defaultClass?: string;
	/** Default color when value is not in colorMap (for variant="badge") */
	defaultColor?: BadgeColor;
}

export function StatusBadge({
	value,
	labels,
	variants,
	colorClasses,
	colorMap,
	variant = "badge",
	className,
	defaultVariant = "secondary",
	defaultClass,
	defaultColor,
}: StatusBadgeProps) {
	const label = labels[value] ?? value;

	if (variant === "inline") {
		const colorClass = colorMap
			? getBadgeSolidClass(colorMap[value] ?? defaultColor ?? "gray")
			: getColorClass(value, colorClasses, defaultClass);
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
	const badgeColor = colorMap
		? getBadgeColorValue(value, colorMap, defaultColor ?? "gray")
		: undefined;
	const colorClass = colorMap
		? undefined
		: getColorClass(value, colorClasses, defaultClass);

	return (
		<Badge
			variant={badgeVariant}
			color={badgeColor}
			className={cn(colorClass, className)}
		>
			{label}
		</Badge>
	);
}
