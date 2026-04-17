import { Badge } from "#/components/ui/badge";
import {
	NEGOCIACAO_STATUS_LABELS,
	NEGOCIACAO_STATUS_VARIANTS,
	NEGOCIACAO_SUBSTATUS_LABELS,
	NEGOCIACAO_SUBSTATUS_VARIANTS,
	PONTOS_ATENCAO_LABELS,
} from "#/features/cs/negociacoes/negociacoes-types";
import type { NegociacoesItens } from "#/generated/nocobase";

function getStatusBadgeVariant(
	status: string,
): "default" | "secondary" | "destructive" {
	return NEGOCIACAO_STATUS_VARIANTS[status] ?? "secondary";
}

function getSubstatusBadgeVariant(
	substatus: string,
): "default" | "secondary" | "destructive" {
	return NEGOCIACAO_SUBSTATUS_VARIANTS[substatus] ?? "secondary";
}

function getPontosAtencaoVariant(
	value: string,
): "default" | "secondary" | "destructive" {
	const num = Number(value);
	if (num === 0) return "default";
	if (num <= 2) return "secondary";
	return "destructive";
}

interface StatusBadgeProps {
	status: string;
	substatus?: string;
}

export function StatusBadge({ status, substatus }: StatusBadgeProps) {
	return (
		<div className="flex flex-wrap gap-2">
			<Badge variant={getStatusBadgeVariant(status)}>
				{NEGOCIACAO_STATUS_LABELS[status] ?? status}
			</Badge>
			{substatus && (
				<Badge variant={getSubstatusBadgeVariant(substatus)}>
					{NEGOCIACAO_SUBSTATUS_LABELS[substatus] ?? substatus}
				</Badge>
			)}
		</div>
	);
}

interface PontosAtencaoBadgeProps {
	value: string;
}

export function PontosAtencaoBadge({ value }: PontosAtencaoBadgeProps) {
	return (
		<Badge variant={getPontosAtencaoVariant(value)}>
			{PONTOS_ATENCAO_LABELS[value] ?? `${value} Pontos`}
		</Badge>
	);
}

interface TipoProdutoBadgeProps {
	tipo: NegociacoesItens["f_tipo_produto"];
}

export function TipoProdutoBadge({ tipo }: TipoProdutoBadgeProps) {
	const colorMap: Record<NegociacoesItens["f_tipo_produto"], string> = {
		INTERNET: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
		TV: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
		STFC: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
		MVNO: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
		SVA: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
	};

	return (
		<span
			className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colorMap[tipo]}`}
		>
			{tipo}
		</span>
	);
}

interface RelacaoBadgeProps {
	relacao: NegociacoesItens["f_relacao"];
}

export function RelacaoBadge({ relacao }: RelacaoBadgeProps) {
	const colorMap: Record<NegociacoesItens["f_relacao"], string> = {
		COMBO: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
		ADICIONAL:
			"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
	};

	return (
		<span
			className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colorMap[relacao]}`}
		>
			{relacao}
		</span>
	);
}
