// Re-export BadgeOption for convenience
import type { BadgeOption } from "#/components/filters";
import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
	CrmTrocaTitularidadeStatus,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import {
	NEGOCIACOES_MOTIVO_LABELS,
	type Negociacoes,
	type NegociacoesMotivo,
	type NegociacoesRelations,
	type NegociacoesStatus,
} from "#/generated/types/nocobase/negociacoes";
import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
	SuspensaoContratoStatus,
} from "#/generated/types/nocobase/suspensao-contrato";
import type {
	TrocaEndereco,
	TrocaEnderecoRelations,
	TrocaEnderecoStatus,
} from "#/generated/types/nocobase/troca-endereco";

// ─────────────────────────────────────────────────────────────────────────────
// Unified Kanban status columns (shared across all source collections)
// ─────────────────────────────────────────────────────────────────────────────

export const UNIFIED_STATUS_COLUMNS = [
	{
		key: "Novo",
		label: "Novo",
		colorClass: "bg-blue-500 dark:bg-blue-600",
		bgClass: "bg-blue-100/70 dark:bg-blue-950/40 dark:text-blue-300",
	},
	{
		key: "Em Andamento",
		label: "Em Andamento",
		colorClass: "bg-amber-500 dark:bg-amber-600",
		bgClass: "bg-amber-100/70 dark:bg-amber-950/40 dark:text-amber-300",
	},
	{
		key: "Assinatura",
		label: "Assinatura",
		colorClass: "bg-purple-500 dark:bg-purple-600",
		bgClass: "bg-purple-100/70 dark:bg-purple-950/40 dark:text-purple-300",
	},
	{
		key: "Concluido",
		label: "Concluído",
		colorClass: "bg-green-500 dark:bg-green-600",
		bgClass: "bg-green-100/70 dark:bg-green-950/40 dark:text-green-300",
	},
	{
		key: "Cancelado",
		label: "Cancelado",
		colorClass: "bg-red-500 dark:bg-red-600",
		bgClass: "bg-red-100/70 dark:bg-red-950/40 dark:text-red-300",
	},
	{
		key: "Aguardando assinatura teste",
		label: "Aguardando assinatura teste",
		colorClass: "bg-yellow-500 dark:bg-yellow-600",
		bgClass: "bg-yellow-100/70 dark:bg-yellow-950/40 dark:text-yellow-300",
	},
] as const;

export type UnifiedStatusKey = (typeof UNIFIED_STATUS_COLUMNS)[number]["key"];

// ─────────────────────────────────────────────────────────────────────────────
// Source collection discriminator
// ─────────────────────────────────────────────────────────────────────────────

// Source collections for the "Tipo de Solicitação" filter
// "neg" (Negociação) is included here and controlled by this filter
export type SourceCollection = "tt" | "te" | "sc" | "neg";

export type { NegociacoesMotivo };
// Tipo de negociação options derived from f_motivo field
export { NEGOCIACOES_MOTIVO_LABELS };

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

// ─────────────────────────────────────────────────────────────────────────────
// Unified card discriminated union
// ─────────────────────────────────────────────────────────────────────────────

export type KanbanDashboardCard =
	| {
			sourceCollection: "tt";
			id: number;
			displayName: string;
			createdAt: string;
			status: CrmTrocaTitularidadeStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			responsibleId: number | null;
			source: CrmTrocaTitularidade & CrmTrocaTitularidadeRelations;
	  }
	| {
			sourceCollection: "te";
			id: number;
			displayName: string;
			createdAt: string;
			status: TrocaEnderecoStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			responsibleId: number | null;
			source: TrocaEndereco & TrocaEnderecoRelations;
	  }
	| {
			sourceCollection: "sc";
			id: number;
			displayName: string;
			createdAt: string;
			status: SuspensaoContratoStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			responsibleId: number | null;
			source: SuspensaoContrato & SuspensaoContratoRelations;
	  }
	| {
			sourceCollection: "neg";
			id: number;
			displayName: string;
			createdAt: string;
			status: NegociacoesStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			responsibleId: number | null;
			source: Negociacoes & NegociacoesRelations;
	  };

// ─────────────────────────────────────────────────────────────────────────────
// Status mapping functions (source status → unified column)
// ─────────────────────────────────────────────────────────────────────────────

export function mapTrocaTitularidadeStatus(
	status: CrmTrocaTitularidadeStatus,
): UnifiedStatusKey {
	const mapping: Record<CrmTrocaTitularidadeStatus, UnifiedStatusKey> = {
		"0": "Novo",
		"1": "Assinatura",
		"2": "Em Andamento",
		"3": "Concluido",
		"9": "Cancelado",
		"20": "Aguardando assinatura teste",
	};
	return mapping[status] ?? "Novo";
}

export function mapTrocaEnderecoStatus(
	status: TrocaEnderecoStatus,
): UnifiedStatusKey {
	const mapping: Record<TrocaEnderecoStatus, UnifiedStatusKey> = {
		"1": "Novo",
		"3": "Em Andamento",
		"4": "Em Andamento",
		"2": "Concluido",
		"0": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}

export function mapSuspensaoContratoStatus(
	status: SuspensaoContratoStatus,
): UnifiedStatusKey {
	const mapping: Record<SuspensaoContratoStatus, UnifiedStatusKey> = {
		"0": "Novo",
		"1": "Assinatura",
		"2": "Assinatura",
		"3": "Concluido",
		"4": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}

export function mapNegociacaoStatus(
	status: NegociacoesStatus,
): UnifiedStatusKey {
	const mapping: Record<NegociacoesStatus, UnifiedStatusKey> = {
		"1": "Novo",
		"2": "Em Andamento",
		"3": "Assinatura",
		"4": "Assinatura",
		"5": "Concluido",
		"6": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper functions — extract display data from unified card
// ─────────────────────────────────────────────────────────────────────────────

export function getCardDisplayName(card: KanbanDashboardCard): string {
	switch (card.sourceCollection) {
		case "tt":
			return card.source.f_cedente;
		case "te":
			return card.source.f_cliente;
		case "sc":
			return card.source.f_titulo;
		case "neg":
			return card.source.f_titulo;
	}
}

export function getCardResponsible(card: KanbanDashboardCard): string | null {
	switch (card.sourceCollection) {
		case "tt":
			return card.source.f_vendedor?.nickname ?? null;
		case "te":
			return card.source.createdBy?.nickname ?? null;
		case "sc": {
			const scSource = card.source;
			const responsible = scSource.f_responsavel ?? scSource.createdBy ?? null;
			return responsible?.nickname ?? null;
		}
		case "neg":
			return card.source.f_vendedor?.nickname ?? null;
	}
}

export function getCardBadgeInfo(card: KanbanDashboardCard) {
	if (card.sourceCollection === "neg") {
		// For negotiations, show badge based on motivo (tipo de negociação)
		const motivo = card.source.f_motivo;
		return NEGOCIACAO_MOTIVO_BADGE[motivo] ?? SOURCE_COLLECTION_BADGE.neg;
	}
	return SOURCE_COLLECTION_BADGE[card.sourceCollection];
}

// ─────────────────────────────────────────────────────────────────────────────
// Filter types
// ─────────────────────────────────────────────────────────────────────────────

export interface KanbanDashboardFilters {
	sourceCollections?: SourceCollection[];
	searchTerm?: string;
	responsibleName?: string;
	responsibleId?: number;
	tipoNegociacao?: NegociacoesMotivo[];
	/**
	 * When true, filters are scoped to the current authenticated user.
	 * The hooks will override responsibleId with authStore.state.user?.id.
	 */
	currentUser?: boolean;
	/**
	 * Sort field for ordering cards within each column.
	 * Format: "field_direction" e.g. "createdAt_desc"
	 */
	sortField?: KanbanSortField;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sort options
// ─────────────────────────────────────────────────────────────────────────────

export type KanbanSortField =
	| "createdAt_desc"
	| "createdAt_asc"
	| "displayName_asc"
	| "displayName_desc"
	| "responsibleName_asc"
	| "responsibleName_desc";

export const KANBAN_SORT_OPTIONS: readonly {
	value: KanbanSortField;
	label: string;
}[] = [
	{ value: "createdAt_desc", label: "Mais recentes" },
	{ value: "createdAt_asc", label: "Mais antigos" },
	{ value: "displayName_asc", label: "Nome (A-Z)" },
	{ value: "displayName_desc", label: "Nome (Z-A)" },
	{ value: "responsibleName_asc", label: "Responsável (A-Z)" },
	{ value: "responsibleName_desc", label: "Responsável (Z-A)" },
];
