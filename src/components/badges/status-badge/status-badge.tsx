import { Badge, type BadgeVariant } from "#/components/ui/badge";
import { cn } from "#/lib/utils";
import { getColorClass, getStatusVariant } from "../utils";

/**
 * Componente genérico para exibição de badges de status.
 *
 * @example
 * // Uso básico com Badge
 * <StatusBadge
 *   value="ATIVO"
 *   labels={{ ATIVO: "Ativo", INATIVO: "Inativo" }}
 *   variants={{ ATIVO: "default", INATIVO: "secondary" }}
 * />
 *
 * @example
 * // Uso com classes customizadas inline
 * <StatusBadge
 *   value="A"
 *   labels={{ A: "Ativo", I: "Inativo" }}
 *   colorClasses={{
 *     A: "bg-emerald-100 text-emerald-800",
 *     I: "bg-gray-100 text-gray-800"
 *   }}
 *   variant="outline"
 * />
 *
 * @example
 * // Uso inline (span)
 * <StatusBadge
 *   value="INTERNET"
 *   labels={{ INTERNET: "Internet" }}
 *   colorClasses={{ INTERNET: "bg-blue-100 text-blue-800" }}
 *   variant="inline"
 * />
 */
interface StatusBadgeProps {
	/** Valor do status */
	value: string;
	/** Mapeamento valor → label exibido */
	labels: Record<string, string>;
	/** Mapeamento valor → variant do Badge (default, secondary, destructive, outline) */
	variants?: Record<string, BadgeVariant>;
	/** Mapeamento valor → classes Tailwind customizadas */
	colorClasses?: Record<string, string>;
	/** Tipo de renderização: "badge" usa componente Badge, "inline" usa span */
	variant?: "badge" | "inline";
	/** Classes CSS adicionais */
	className?: string;
	/** Variant padrão quando não houver mapeamento (apenas para variant="badge") */
	defaultVariant?: BadgeVariant;
	/** Classe padrão quando não houver mapeamento */
	defaultClass?: string;
}

/**
 * Componente StatusBadge - exibe status com Badge ou span inline.
 */
export function StatusBadge({
	value,
	labels,
	variants,
	colorClasses,
	variant = "badge",
	className,
	defaultVariant = "secondary",
	defaultClass,
}: StatusBadgeProps) {
	const label = labels[value] ?? value;

	if (variant === "inline") {
		const colorClass = getColorClass(value, colorClasses, defaultClass);
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

	// variant === "badge"
	const badgeVariant = getStatusVariant(value, variants, defaultVariant);
	const colorClass = getColorClass(value, colorClasses, defaultClass);

	return (
		<Badge variant={badgeVariant} className={cn(colorClass, className)}>
			{label}
		</Badge>
	);
}
