import type { NegociacoesMotivo } from "#/generated/types/nocobase/negociacoes";
import type { SourceCollection } from "./source-collections";

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
