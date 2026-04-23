import { StatusBadge } from "#/components/badges/status-badge";
import type { NegociacoesItens } from "#/generated/nocobase";

export const TIPO_PRODUTO_COLORS: Record<string, string> = {
	INTERNET: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
	TV: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
	STFC: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
	MVNO: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
	SVA: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
};

export interface TipoProdutoBadgeProps {
	tipo: NegociacoesItens["f_tipo_produto"];
}

export function TipoProdutoBadge({ tipo }: TipoProdutoBadgeProps) {
	return (
		<StatusBadge
			value={tipo}
			labels={{ [tipo]: tipo }}
			colorClasses={TIPO_PRODUTO_COLORS}
			variant="inline"
		/>
	);
}
