import type { BadgeOption } from "#/components/filters/filter-badge-group.logic";
import type { BadgeColor } from "#/components/ui/badge";
import { getBadgeSolidClass } from "#/components/ui/badge";
import type { NegociacoesMotivo } from "#/generated/types/nocobase/negociacoes";

// ─────────────────────────────────────────────────────────────────────────────
// Source collection discriminator
// ─────────────────────────────────────────────────────────────────────────────

// Source collections for the "Tipo de Solicitação" filter
// "neg" (Negociação) is included here and controlled by this filter
export type SourceCollection = "tt" | "te" | "sc" | "neg";

export type { NegociacoesMotivo };

// Primary tipo de negociação options (always visible in filter)
export const PRIMARY_NEGOCIACAO_MOTIVO_OPTIONS: readonly NegociacoesMotivo[] = [
	"N",
	"I",
	"S",
	"P",
] as const;

// Extra tipo de negociação options (hidden by default, shown in "+" badge)
export const EXTRA_NEGOCIACAO_MOTIVO_OPTIONS: readonly NegociacoesMotivo[] =
	[] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Collection badge colors
// ─────────────────────────────────────────────────────────────────────────────

type BadgeStyle = { label: string; colorClass: string; bgClass: string };

function makeBadgeStyle(label: string, color: BadgeColor): BadgeStyle {
	return {
		label,
		colorClass: getBadgeSolidClass(color),
		bgClass: getBadgeSolidClass(color),
	};
}

export const SOURCE_COLLECTION_BADGE: Record<SourceCollection, BadgeStyle> = {
	tt: makeBadgeStyle("Troca Tit.", "blue"),
	te: makeBadgeStyle("Troca End.", "purple"),
	sc: makeBadgeStyle("Suspensão", "orange"),
	neg: makeBadgeStyle("Negociação", "teal"),
};

// Badge styles for negotiation types (motivo)
export const NEGOCIACAO_MOTIVO_BADGE: Record<NegociacoesMotivo, BadgeStyle> = {
	I: makeBadgeStyle("Venda Nova", "emerald"),
	M: makeBadgeStyle("Mud. Endereço", "violet"),
	D: makeBadgeStyle("Downgrade", "rose"),
	U: makeBadgeStyle("Upgrade", "sky"),
	N: makeBadgeStyle("Negociação", "amber"),
	R: makeBadgeStyle("Reativação", "cyan"),
	T: makeBadgeStyle("Mud. Tecnologia", "indigo"),
	L: makeBadgeStyle("Mud. Titularidade", "teal"),
	S: makeBadgeStyle("2ª Contratação", "pink"),
	P: makeBadgeStyle("Proposta", "gray"),
};

const SOURCE_COLLECTION_OPTION_LABELS = {
	tt: "Troca Titularidade",
	te: "Troca Endereço",
	sc: "Suspensão de Contrato",
	neg: "Negociação",
} as const satisfies Record<SourceCollection, string>;

export const SOURCE_COLLECTION_OPTIONS: BadgeOption<SourceCollection>[] = (
	Object.entries(SOURCE_COLLECTION_BADGE) as [SourceCollection, BadgeStyle][]
).map(([value, style]) => ({
	value,
	label: SOURCE_COLLECTION_OPTION_LABELS[value],
	colorClass: style.colorClass,
	bgClass: style.bgClass,
}));

export type { BadgeOption };
