import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
} from "#/generated/nocobase/crm-troca-titularidade";
import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
} from "#/generated/nocobase/suspensao-contrato";
import type {
	TrocaEndereco,
	TrocaEnderecoRelations,
} from "#/generated/nocobase/troca-endereco";

// ────────────────────────────────────────────────────────────────────────────
// Unified Kanban status columns (shared across all 3 source collections)
// ────────────────────────────────────────────────────────────────────────────

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
] as const;

export type UnifiedStatusKey = (typeof UNIFIED_STATUS_COLUMNS)[number]["key"];

// ────────────────────────────────────────────────────────────────────────────
// Source collection discriminator
// ────────────────────────────────────────────────────────────────────────────

export type SourceCollection = "tt" | "te" | "sc";

// SC actual API values: "0"|"1"|"2"|"3"|"4" (matches generated SuspensaoContratoStatus)
export type SuspensaoContratoOverrideStatus = "0" | "1" | "2" | "3" | "4";

// ────────────────────────────────────────────────────────────────────────────
// Unified card discriminated union
// ────────────────────────────────────────────────────────────────────────────

export type KanbanDashboardCard =
	| {
			sourceCollection: "tt";
			id: number;
			displayName: string;
			createdAt: string;
			status: CrmTrocaTitularidade["f_status"];
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			source: CrmTrocaTitularidade & CrmTrocaTitularidadeRelations;
	  }
	| {
			sourceCollection: "te";
			id: number;
			displayName: string;
			createdAt: string;
			status: TrocaEndereco["f_status"];
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			source: TrocaEndereco & TrocaEnderecoRelations;
	  }
	| {
			sourceCollection: "sc";
			id: number;
			displayName: string;
			createdAt: string;
			status: SuspensaoContratoOverrideStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			source: SuspensaoContrato & SuspensaoContratoRelations;
	  };

// ────────────────────────────────────────────────────────────────────────────
// Status mapping functions (source status → unified column)
// ────────────────────────────────────────────────────────────────────────────

export function mapTrocaTitularidadeStatus(
	status: CrmTrocaTitularidade["f_status"],
): UnifiedStatusKey {
	const mapping: Record<CrmTrocaTitularidade["f_status"], UnifiedStatusKey> = {
		"0": "Novo",
		"1": "Assinatura",
		"2": "Em Andamento",
		"3": "Concluido",
		"9": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}

export function mapTrocaEnderecoStatus(
	status: TrocaEndereco["f_status"],
): UnifiedStatusKey {
	const mapping: Record<TrocaEndereco["f_status"], UnifiedStatusKey> = {
		"1": "Novo",
		"3": "Em Andamento",
		"4": "Em Andamento",
		"2": "Concluido",
		"0": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}

export function mapSuspensaoContratoStatus(
	status: SuspensaoContratoOverrideStatus,
): UnifiedStatusKey {
	const mapping: Record<SuspensaoContratoOverrideStatus, UnifiedStatusKey> = {
		"0": "Novo",
		"1": "Assinatura",
		"2": "Assinatura",
		"3": "Concluido",
		"4": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}

// ────────────────────────────────────────────────────────────────────────────
// Helper functions — extract display data from unified card
// ────────────────────────────────────────────────────────────────────────────

export function getCardDisplayName(card: KanbanDashboardCard): string {
	switch (card.sourceCollection) {
		case "tt":
			return card.source.f_cedente;
		case "te":
			return card.source.f_cliente;
		case "sc":
			return card.source.f_titulo;
	}
}

export function getCardResponsible(card: KanbanDashboardCard): string | null {
	switch (card.sourceCollection) {
		case "tt":
			return card.source.f_vendedor?.nickname ?? null;
		case "te":
			return card.source.createdBy?.nickname ?? null;
		case "sc":
			return card.source.createdBy?.nickname ?? null;
	}
}

// ────────────────────────────────────────────────────────────────────────────
// Filter types
// ────────────────────────────────────────────────────────────────────────────

export interface KanbanDashboardFilters {
	sourceCollection?: SourceCollection;
	searchTerm?: string;
}

export const SOURCE_COLLECTION_OPTIONS = [
	{ value: "tt", label: "Troca Titularidade" },
	{ value: "te", label: "Troca Endereço" },
	{ value: "sc", label: "Suspensão de Contrato" },
] as const;
