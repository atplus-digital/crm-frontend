import type { BadgeVariant } from "#/components/ui/badge";

/**
 * Retorna o variant do Badge para um determinado valor de status.
 * @param value - O valor do status
 * @param variants - Mapeamento opcional de valor → variant
 * @param defaultVariant - Variant padrão (default: "secondary")
 */
export function getStatusVariant(
	value: string,
	variants?: Record<string, BadgeVariant>,
	defaultVariant: BadgeVariant = "secondary",
): BadgeVariant {
	return variants?.[value] ?? defaultVariant;
}

/**
 * Retorna a classe CSS para um determinado valor de status.
 * @param value - O valor do status
 * @param colorClasses - Mapeamento opcional de valor → classes Tailwind
 * @param defaultClass - Classe padrão
 */
export function getColorClass(
	value: string,
	colorClasses?: Record<string, string>,
	defaultClass = "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
): string {
	return colorClasses?.[value] ?? defaultClass;
}
