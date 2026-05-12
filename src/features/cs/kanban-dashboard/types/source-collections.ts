import type { BadgeOption } from "#/components/filters/filter-badge-group.logic";
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

export const SOURCE_COLLECTION_BADGE: Record<SourceCollection, BadgeStyle> = {
	tt: {
		label: "Troca Tit.",
		colorClass: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
		bgClass: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
	},
	te: {
		label: "Troca End.",
		colorClass:
			"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
		bgClass:
			"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
	},
	sc: {
		label: "Suspensão",
		colorClass:
			"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
		bgClass:
			"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
	},
	neg: {
		label: "Negociação",
		colorClass: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
		bgClass: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
	},
};

// Badge styles for negotiation types (motivo)
export const NEGOCIACAO_MOTIVO_BADGE: Record<NegociacoesMotivo, BadgeStyle> = {
	I: {
		label: "Venda Nova",
		colorClass:
			"bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
		bgClass:
			"bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
	},
	M: {
		label: "Mud. Endereço",
		colorClass:
			"bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
		bgClass:
			"bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
	},
	D: {
		label: "Downgrade",
		colorClass: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
		bgClass: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
	},
	U: {
		label: "Upgrade",
		colorClass: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
		bgClass: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
	},
	N: {
		label: "Renegociação",
		colorClass:
			"bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
		bgClass:
			"bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
	},
	R: {
		label: "Reativação",
		colorClass: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
		bgClass: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
	},
	T: {
		label: "Mud. Tecnologia",
		colorClass:
			"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
		bgClass:
			"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
	},
	L: {
		label: "Mud. Titularidade",
		colorClass: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
		bgClass: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
	},
	S: {
		label: "2ª Contratação",
		colorClass: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
		bgClass: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
	},
	P: {
		label: "Proposta",
		colorClass: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
		bgClass: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
	},
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
