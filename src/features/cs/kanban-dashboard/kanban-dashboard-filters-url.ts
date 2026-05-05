import type {
	KanbanDashboardFilters,
	NegociacoesMotivo,
	SourceCollection,
} from "./kanban-dashboard-types";
import { NEGOCIACAO_MOTIVO_BADGE } from "./kanban-dashboard-types";

// ─────────────────────────────────────────────────────────────────────────────
// Serialize filters → URLSearchParams
// ─────────────────────────────────────────────────────────────────────────────

export function filtersToSearchParams(
	filters: KanbanDashboardFilters,
): URLSearchParams {
	const params = new URLSearchParams();

	if (filters.searchTerm) {
		params.set("q", filters.searchTerm);
	}

	if (filters.sourceCollections && filters.sourceCollections.length > 0) {
		params.set("s", filters.sourceCollections.join(","));
	}

	if (filters.tipoNegociacao && filters.tipoNegociacao.length > 0) {
		params.set("t", filters.tipoNegociacao.join(","));
	}

	if (filters.currentUser === true) {
		params.set("u", "1");
	} else if (filters.currentUser === false) {
		params.set("u", "0");
	}

	if (filters.sortField) {
		params.set("sort", filters.sortField);
	}

	return params;
}

// ─────────────────────────────────────────────────────────────────────────────
// Parse URLSearchParams → filters
// ─────────────────────────────────────────────────────────────────────────────

export function searchParamsToFilters(
	searchParams: URLSearchParams,
): Partial<KanbanDashboardFilters> {
	const filters: Partial<KanbanDashboardFilters> = {};

	const searchTerm = searchParams.get("q");
	if (searchTerm) {
		filters.searchTerm = searchTerm;
	}

	const sourceCollections = searchParams.get("s");
	if (sourceCollections) {
		const sources = sourceCollections.split(",") as SourceCollection[];
		// Validate each value
		const validSources = sources.filter(
			(s): s is SourceCollection =>
				s === "tt" || s === "te" || s === "sc" || s === "neg",
		);
		if (validSources.length > 0) {
			filters.sourceCollections = validSources;
		}
	}

	const tipoNegociacao = searchParams.get("t");
	if (tipoNegociacao) {
		const validMotivos = new Set(Object.keys(NEGOCIACAO_MOTIVO_BADGE));
		const motivos = tipoNegociacao
			.split(",")
			.filter((m) => validMotivos.has(m));
		if (motivos.length > 0) {
			filters.tipoNegociacao = motivos as NegociacoesMotivo[];
		}
	}

	const currentUser = searchParams.get("u");
	if (currentUser === "1") {
		filters.currentUser = true;
	} else if (currentUser === "0") {
		filters.currentUser = false;
	}

	const sortField = searchParams.get("sort");
	if (sortField) {
		filters.sortField = sortField as KanbanDashboardFilters["sortField"];
	}

	return filters;
}

// ─────────────────────────────────────────────────────────────────────────────
// Build URL with filters
// ─────────────────────────────────────────────────────────────────────────────

export function buildKanbanUrl(
	basePath: string,
	filters: KanbanDashboardFilters,
): string {
	const params = filtersToSearchParams(filters);
	const queryString = params.toString();
	return queryString ? `${basePath}?${queryString}` : basePath;
}

// ─────────────────────────────────────────────────────────────────────────────
// Default filters
// ─────────────────────────────────────────────────────────────────────────────

export const DEFAULT_KANBAN_FILTERS: KanbanDashboardFilters = {
	currentUser: true,
};
