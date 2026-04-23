import { StatusBadge } from "#/components/badges/status-badge";
import type { NegociacoesItens } from "#/generated/nocobase";

export const RELACAO_COLORS: Record<string, string> = {
	COMBO: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
	ADICIONAL:
		"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export interface RelacaoBadgeProps {
	relacao: NegociacoesItens["f_relacao"];
}

export function RelacaoBadge({ relacao }: RelacaoBadgeProps) {
	return (
		<StatusBadge
			value={relacao}
			labels={{ [relacao]: relacao }}
			colorClasses={RELACAO_COLORS}
			variant="inline"
		/>
	);
}
