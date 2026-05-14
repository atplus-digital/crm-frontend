import { StatusBadge } from "#/components/badges/status-badge";
import type { BadgeColor } from "#/components/ui/badge";
import type { NegociacoesItensRelacao } from "#/generated/types/nocobase/other/negociacoes-itens";
import { NEGOCIACOESITENS_RELACAO_LABELS } from "#/generated/types/nocobase/other/negociacoes-itens";

const RELACAO_COLOR_MAP: Record<
	keyof typeof NEGOCIACOESITENS_RELACAO_LABELS,
	BadgeColor
> = {
	COMBO: "blue",
	ADICIONAL: "orange",
};

interface RelacaoBadgeProps {
	relacao: NegociacoesItensRelacao;
}

export function RelacaoBadge({ relacao }: RelacaoBadgeProps) {
	return (
		<StatusBadge
			value={relacao}
			labels={NEGOCIACOESITENS_RELACAO_LABELS}
			colorMap={RELACAO_COLOR_MAP}
			variant="inline"
		/>
	);
}
