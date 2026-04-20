import {
	StatusBadge as GenericStatusBadge,
	StatusBadgeGroup,
} from "#/components/badges/status-badge";
import {
	NEGOCIACAO_STATUS_LABELS,
	NEGOCIACAO_STATUS_VARIANTS,
	NEGOCIACAO_SUBSTATUS_LABELS,
	NEGOCIACAO_SUBSTATUS_VARIANTS,
	PONTOS_ATENCAO_LABELS,
} from "#/features/cs/negociacoes/negociacoes-types";
import type { NegociacoesItens } from "#/generated/nocobase";

interface StatusBadgeProps {
	status: string;
	substatus?: string;
}

export function StatusBadge({ status, substatus }: StatusBadgeProps) {
	return (
		<StatusBadgeGroup
			status={status}
			substatus={substatus}
			statusLabels={NEGOCIACAO_STATUS_LABELS}
			substatusLabels={NEGOCIACAO_SUBSTATUS_LABELS}
			statusVariants={NEGOCIACAO_STATUS_VARIANTS}
			substatusVariants={NEGOCIACAO_SUBSTATUS_VARIANTS}
		/>
	);
}

interface PontosAtencaoBadgeProps {
	value: string;
}

export function PontosAtencaoBadge({ value }: PontosAtencaoBadgeProps) {
	const num = Number(value);
	const variant =
		num === 0 ? "default" : num <= 2 ? "secondary" : "destructive";
	return (
		<GenericStatusBadge
			value={value}
			labels={PONTOS_ATENCAO_LABELS}
			variants={{ [value]: variant }}
		/>
	);
}

const TIPO_PRODUTO_COLORS: Record<string, string> = {
	INTERNET: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
	TV: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
	STFC: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
	MVNO: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
	SVA: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
};

interface TipoProdutoBadgeProps {
	tipo: NegociacoesItens["f_tipo_produto"];
}

export function TipoProdutoBadge({ tipo }: TipoProdutoBadgeProps) {
	return (
		<GenericStatusBadge
			value={tipo}
			labels={{ [tipo]: tipo }}
			colorClasses={TIPO_PRODUTO_COLORS}
			variant="inline"
		/>
	);
}

const RELACAO_COLORS: Record<string, string> = {
	COMBO: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
	ADICIONAL:
		"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

interface RelacaoBadgeProps {
	relacao: NegociacoesItens["f_relacao"];
}

export function RelacaoBadge({ relacao }: RelacaoBadgeProps) {
	return (
		<GenericStatusBadge
			value={relacao}
			labels={{ [relacao]: relacao }}
			colorClasses={RELACAO_COLORS}
			variant="inline"
		/>
	);
}
