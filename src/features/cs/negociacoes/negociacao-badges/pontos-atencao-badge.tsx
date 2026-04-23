import { StatusBadge } from "#/components/badges/status-badge";
import { PONTOS_ATENCAO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

export interface PontosAtencaoBadgeProps {
	value: string | number;
}

export function PontosAtencaoBadge({ value }: PontosAtencaoBadgeProps) {
	const num = Number(value);
	const variant =
		num === 0 ? "default" : num <= 2 ? "secondary" : "destructive";
	const valueStr = String(value);
	return (
		<StatusBadge
			value={valueStr}
			labels={PONTOS_ATENCAO_LABELS}
			variants={{ [valueStr]: variant }}
		/>
	);
}
