import type { BadgeColor, BadgeVariant } from "#/components/ui/badge";

/**
 * Returns the Badge variant for a given status value.
 */
export function getStatusVariant(
	value: string,
	variants?: Record<string, BadgeVariant>,
	defaultVariant: BadgeVariant = "secondary",
): BadgeVariant {
	return variants?.[value] ?? defaultVariant;
}

/**
 * Returns a Tailwind class string for a given status value (legacy — deprecated).
 * @deprecated Use `getBadgeColorValue` + Badge color prop instead.
 */
export function getColorClass(
	value: string,
	colorClasses?: Record<string, string>,
	defaultClass = "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
): string {
	return colorClasses?.[value] ?? defaultClass;
}

/**
 * Returns the BadgeColor for a given status value.
 *
 * @example
 * const color = getBadgeColorValue("A", { A: "emerald", I: "gray" }, "gray");
 * // => "emerald" | "gray" (fallback)
 */
export function getBadgeColorValue(
	value: string,
	colorMap?: Record<string, BadgeColor>,
	defaultColor: BadgeColor = "gray",
): BadgeColor {
	return colorMap?.[value] ?? defaultColor;
}
