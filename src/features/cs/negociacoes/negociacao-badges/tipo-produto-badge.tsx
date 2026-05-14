import { StatusBadge } from "#/components/badges/status-badge";
import type { BadgeColor } from "#/components/ui/badge";
import type { NegociacoesItensTipoProduto } from "#/generated/types/nocobase/other/negociacoes-itens";
import { NEGOCIACOESITENS_TIPOPRODUTO_LABELS } from "#/generated/types/nocobase/other/negociacoes-itens";

const TIPO_PRODUTO_COLOR_MAP: Record<
	keyof typeof NEGOCIACOESITENS_TIPOPRODUTO_LABELS,
	BadgeColor
> = {
	INTERNET: "blue",
	TV: "purple",
	STFC: "green",
	MVNO: "orange",
	SVA: "yellow",
};

interface TipoProdutoBadgeProps {
	tipo: NegociacoesItensTipoProduto;
}

export function TipoProdutoBadge({ tipo }: TipoProdutoBadgeProps) {
	return (
		<StatusBadge
			value={tipo}
			labels={NEGOCIACOESITENS_TIPOPRODUTO_LABELS}
			colorMap={TIPO_PRODUTO_COLOR_MAP}
			variant="inline"
		/>
	);
}
