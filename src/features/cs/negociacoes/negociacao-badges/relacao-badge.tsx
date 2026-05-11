import { StatusBadge } from "#/components/badges/status-badge";
import type { NegociacoesItensRelacao } from "#/generated/types/nocobase/other/negociacoes-itens";
import { NEGOCIACOESITENS_RELACAO_LABELS } from "#/generated/types/nocobase/other/negociacoes-itens";

export const RELACAO_COLORS: Record<
	keyof typeof NEGOCIACOESITENS_RELACAO_LABELS,
	string
> = {
	COMBO: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
	ADICIONAL:
		"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export interface RelacaoBadgeProps {
	relacao: NegociacoesItensRelacao;
}

export function RelacaoBadge({ relacao }: RelacaoBadgeProps) {
	return (
		<StatusBadge
			value={relacao}
			labels={NEGOCIACOESITENS_RELACAO_LABELS}
			colorClasses={RELACAO_COLORS}
			variant="inline"
		/>
	);
}
