import { queryOptions, useQueries } from "@tanstack/react-query";
import { authStore } from "#/features/auth";
import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import type {
	Negociacoes,
	NegociacoesRelations,
} from "#/generated/types/nocobase/negociacoes";
import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
} from "#/generated/types/nocobase/suspensao-contrato";
import type {
	TrocaEndereco,
	TrocaEnderecoRelations,
} from "#/generated/types/nocobase/troca-endereco";
import {
	buildFilter,
	eq,
	includes,
	nestedField,
	or,
} from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import type {
	KanbanDashboardCard,
	KanbanDashboardFilters,
	KanbanSortField,
} from "./kanban-dashboard-types";
import {
	mapNegociacaoStatus,
	mapSuspensaoContratoStatus,
	mapTrocaEnderecoStatus,
	mapTrocaTitularidadeStatus,
} from "./kanban-dashboard-types";

type CrmTrocaTitularidadeWithVendedor = CrmTrocaTitularidade &
	Pick<CrmTrocaTitularidadeRelations, "f_vendedor">;

type TrocaEnderecoWithCreatedBy = TrocaEndereco &
	Pick<TrocaEnderecoRelations, "createdBy">;

type SuspensaoContratoWithResponsibles = SuspensaoContrato &
	Pick<SuspensaoContratoRelations, "createdBy" | "f_responsavel">;

type NegociacoesWithVendedor = Negociacoes &
	Pick<NegociacoesRelations, "f_vendedor">;

// ---------------------------------------------------------------------------
// Sort parameter converter — converts KanbanSortField to NocoBase sort format
// ---------------------------------------------------------------------------

function getSortParam(sortField: KanbanSortField | undefined): string[] {
	// Default sort
	if (!sortField || sortField === "createdAt_desc") {
		return ["-createdAt"];
	}

	switch (sortField) {
		case "createdAt_asc":
			return ["createdAt"];
		case "displayName_asc":
			// Uses f_cedente/f_cliente/f_titulo depending on collection
			return ["f_cedente"];
		case "displayName_desc":
			return ["-f_cedente"];
		default:
			return ["-createdAt"];
	}
}

// ---------------------------------------------------------------------------
// Query options — each collection fetched independently (factory per filter set)
// ---------------------------------------------------------------------------

function trocaTitularidadeQueryOptions(filters: KanbanDashboardFilters) {
	const conditions: Record<string, unknown>[] = [];

	if (filters.searchTerm) {
		conditions.push(includes("f_cedente", filters.searchTerm));
	}

	if (filters.responsibleName) {
		conditions.push(
			nestedField("f_vendedor", includes("nickname", filters.responsibleName)),
		);
	}

	const effectiveResponsibleId = filters.currentUser
		? authStore.state.user?.id
		: filters.responsibleId;

	if (effectiveResponsibleId != null) {
		conditions.push(
			nestedField("f_vendedor", eq("id", effectiveResponsibleId)),
		);
	}

	// Build sort parameter based on sortField
	const sortParam = getSortParam(filters.sortField);

	return queryOptions({
		queryKey: ["kanban-dashboard", "tt", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_crm_troca_titularidade",
				{
					pageSize: 200,
					sort: sortParam,
					appends: ["f_vendedor"] as Array<keyof CrmTrocaTitularidadeRelations>,
					...(conditions.length > 0 ? { filter: buildFilter(conditions) } : {}),
				},
			);
			return response as {
				data: CrmTrocaTitularidadeWithVendedor[];
				meta: { total: number };
			};
		},
		staleTime: 10_000,
	});
}

function trocaEnderecoQueryOptions(filters: KanbanDashboardFilters) {
	const conditions: Record<string, unknown>[] = [];

	if (filters.searchTerm) {
		conditions.push(includes("f_cliente", filters.searchTerm));
	}

	if (filters.responsibleName) {
		conditions.push(
			nestedField("createdBy", includes("nickname", filters.responsibleName)),
		);
	}

	const effectiveResponsibleId = filters.currentUser
		? authStore.state.user?.id
		: filters.responsibleId;

	if (effectiveResponsibleId != null) {
		conditions.push(nestedField("createdBy", eq("id", effectiveResponsibleId)));
	}

	// Build sort parameter based on sortField
	const sortParam = getSortParam(filters.sortField);
	// Adjust field name for troca endereco (uses f_cliente instead of f_cedente)
	const adjustedSort = sortParam.map((s) =>
		s.startsWith("-")
			? `-${s.slice(1).replace("f_cedente", "f_cliente")}`
			: s.replace("f_cedente", "f_cliente"),
	);

	return queryOptions({
		queryKey: ["kanban-dashboard", "te", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_troca_endereco" as "users",
				{
					pageSize: 200,
					sort: adjustedSort,
					appends: ["createdBy"] as Array<keyof TrocaEnderecoRelations>,
					...(conditions.length > 0 ? { filter: buildFilter(conditions) } : {}),
				},
			);
			return response as unknown as {
				data: TrocaEnderecoWithCreatedBy[];
				meta: { total: number };
			};
		},
		staleTime: 10_000,
	});
}

function suspensaoContratoQueryOptions(filters: KanbanDashboardFilters) {
	const conditions: Record<string, unknown>[] = [];

	if (filters.searchTerm) {
		conditions.push(includes("f_titulo", filters.searchTerm));
	}

	if (filters.responsibleName) {
		conditions.push(
			or(
				nestedField(
					"f_responsavel",
					includes("nickname", filters.responsibleName),
				),
				nestedField("createdBy", includes("nickname", filters.responsibleName)),
			),
		);
	}

	const effectiveResponsibleId = filters.currentUser
		? authStore.state.user?.id
		: filters.responsibleId;

	if (effectiveResponsibleId != null) {
		conditions.push(
			or(
				nestedField("f_responsavel", eq("id", effectiveResponsibleId)),
				nestedField("createdBy", eq("id", effectiveResponsibleId)),
			),
		);
	}

	// Build sort parameter based on sortField
	const sortParam = getSortParam(filters.sortField);
	// Adjust field name for suspensao (uses f_titulo instead of f_cedente)
	const adjustedSort = sortParam.map((s) =>
		s.startsWith("-")
			? `-${s.slice(1).replace("f_cedente", "f_titulo")}`
			: s.replace("f_cedente", "f_titulo"),
	);

	return queryOptions({
		queryKey: ["kanban-dashboard", "sc", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_suspensao_contrato" as "users",
				{
					pageSize: 200,
					sort: adjustedSort,
					appends: ["createdBy", "f_responsavel"],
					...(conditions.length > 0 ? { filter: buildFilter(conditions) } : {}),
				} as Parameters<typeof nocobaseRepository.list>[1],
			);
			return response as unknown as {
				data: SuspensaoContratoWithResponsibles[];
				meta: { total: number };
			};
		},
		staleTime: 10_000,
	});
}

function negociacoesQueryOptions(filters: KanbanDashboardFilters) {
	const conditions: Record<string, unknown>[] = [];

	if (filters.searchTerm) {
		conditions.push(includes("f_titulo", filters.searchTerm));
	}

	if (filters.responsibleName) {
		conditions.push(
			nestedField("f_vendedor", includes("nickname", filters.responsibleName)),
		);
	}

	const effectiveResponsibleId = filters.currentUser
		? authStore.state.user?.id
		: filters.responsibleId;

	if (effectiveResponsibleId != null) {
		conditions.push(
			nestedField("f_vendedor", eq("id", effectiveResponsibleId)),
		);
	}

	// Apply tipo de negociação filter (f_motivo field) using OR for multiple values
	if (filters.tipoNegociacao && filters.tipoNegociacao.length > 0) {
		const motivoConditions = filters.tipoNegociacao.map((motivo) =>
			includes("f_motivo", motivo),
		);
		conditions.push(or(...motivoConditions));
	}

	// Build sort parameter based on sortField
	const sortParam = getSortParam(filters.sortField);
	// Adjust field name for negociacoes (uses f_titulo instead of f_cedente)
	const adjustedSort = sortParam.map((s) =>
		s.startsWith("-")
			? `-${s.slice(1).replace("f_cedente", "f_titulo")}`
			: s.replace("f_cedente", "f_titulo"),
	);

	return queryOptions({
		queryKey: ["kanban-dashboard", "neg", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list("t_negociacoes", {
				pageSize: 200,
				sort: adjustedSort,
				appends: ["f_vendedor"] as Array<keyof NegociacoesRelations>,
				...(conditions.length > 0 ? { filter: buildFilter(conditions) } : {}),
			});
			return response as {
				data: NegociacoesWithVendedor[];
				meta: { total: number };
			};
		},
		staleTime: 10_000,
	});
}

// ---------------------------------------------------------------------------
// Normalization helpers
// ---------------------------------------------------------------------------

function normalizeTrocaTitularidade(
	record: CrmTrocaTitularidadeWithVendedor,
): KanbanDashboardCard {
	const unifiedStatus = mapTrocaTitularidadeStatus(record.f_status);
	return {
		sourceCollection: "tt",
		id: record.id,
		displayName: record.f_cedente,
		createdAt: record.createdAt,
		status: record.f_status,
		unifiedStatus,
		responsibleName: record.f_vendedor?.nickname ?? null,
		responsibleId: record.f_vendedor?.id ?? null,
		source: record as CrmTrocaTitularidade & CrmTrocaTitularidadeRelations,
	};
}

function normalizeTrocaEndereco(
	record: TrocaEnderecoWithCreatedBy,
): KanbanDashboardCard {
	const unifiedStatus = mapTrocaEnderecoStatus(record.f_status);
	return {
		sourceCollection: "te",
		id: record.id,
		displayName: record.f_cliente,
		createdAt: record.createdAt,
		status: record.f_status,
		unifiedStatus,
		responsibleName: record.createdBy?.nickname ?? null,
		responsibleId: record.createdBy?.id ?? null,
		source: record as TrocaEndereco & TrocaEnderecoRelations,
	};
}

function normalizeSuspensaoContrato(
	record: SuspensaoContratoWithResponsibles,
): KanbanDashboardCard {
	const status = record.f_status;
	const unifiedStatus = mapSuspensaoContratoStatus(status);
	const responsible = record.f_responsavel ?? record.createdBy ?? null;
	return {
		sourceCollection: "sc",
		id: record.id,
		displayName: record.f_titulo,
		createdAt: record.createdAt,
		status,
		unifiedStatus,
		responsibleName: responsible?.nickname ?? null,
		responsibleId: responsible?.id ?? null,
		source: record as SuspensaoContrato & SuspensaoContratoRelations,
	};
}

function normalizeNegociacao(
	record: NegociacoesWithVendedor,
): KanbanDashboardCard {
	const status = record.f_status;
	const unifiedStatus = mapNegociacaoStatus(status);
	return {
		sourceCollection: "neg",
		id: record.id,
		displayName: record.f_titulo,
		createdAt: record.createdAt,
		status,
		unifiedStatus,
		responsibleName: record.f_vendedor?.nickname ?? null,
		responsibleId: record.f_vendedor?.id ?? null,
		source: record as Negociacoes & NegociacoesRelations,
	};
}

// ---------------------------------------------------------------------------
// Main hook — parallel fetch + normalization
// ---------------------------------------------------------------------------

const EMPTY_FILTERS: KanbanDashboardFilters = {};

export function useKanbanDashboardData(filters: KanbanDashboardFilters = {}) {
	const activeFilters = filters ?? EMPTY_FILTERS;

	// Always fetch all 4 collections - filtering is done client-side based on sourceCollections
	const [ttResult, teResult, scResult, negResult] = useQueries({
		queries: [
			trocaTitularidadeQueryOptions(activeFilters),
			trocaEnderecoQueryOptions(activeFilters),
			suspensaoContratoQueryOptions(activeFilters),
			negociacoesQueryOptions(activeFilters),
		],
	});

	const isLoading =
		ttResult.isLoading ||
		teResult.isLoading ||
		scResult.isLoading ||
		negResult.isLoading;

	const errors = [
		ttResult.error,
		teResult.error,
		scResult.error,
		negResult.error,
	].filter((e) => e !== null && e !== undefined);
	const error =
		errors.length === 4 ? errors[0] : errors.length > 0 ? errors[0] : null;

	const cards: KanbanDashboardCard[] = [];

	// Determine which collections to include based on sourceCollections filter
	const selectedCollections = activeFilters.sourceCollections;
	const showNegociacoes =
		!selectedCollections ||
		selectedCollections.length === 0 ||
		selectedCollections.includes("neg");

	// Client-side filter: sourceCollections (array filter) based on what's selected
	if (
		activeFilters.sourceCollections &&
		activeFilters.sourceCollections.length > 0
	) {
		const selectedSet = new Set(activeFilters.sourceCollections);

		if (ttResult.data && selectedSet.has("tt")) {
			cards.push(...ttResult.data.data.map(normalizeTrocaTitularidade));
		}

		if (teResult.data && selectedSet.has("te")) {
			cards.push(...teResult.data.data.map(normalizeTrocaEndereco));
		}

		if (scResult.data && selectedSet.has("sc")) {
			cards.push(...scResult.data.data.map(normalizeSuspensaoContrato));
		}

		// Include neg cards only if "neg" is selected
		if (showNegociacoes && negResult.data) {
			cards.push(...negResult.data.data.map(normalizeNegociacao));
		}
	} else {
		// No sourceCollections filter — include all tt, te, sc, and neg cards
		if (ttResult.data) {
			cards.push(...ttResult.data.data.map(normalizeTrocaTitularidade));
		}

		if (teResult.data) {
			cards.push(...teResult.data.data.map(normalizeTrocaEndereco));
		}

		if (scResult.data) {
			cards.push(...scResult.data.data.map(normalizeSuspensaoContrato));
		}

		if (negResult.data) {
			cards.push(...negResult.data.data.map(normalizeNegociacao));
		}
	}

	const sortField = activeFilters.sortField;

	// Apply client-side sorting after combining all collections
	let sortedCards = cards;
	if (
		sortField &&
		(sortField === "responsibleName_asc" ||
			sortField === "responsibleName_desc")
	) {
		sortedCards = sortCardsClientSide(cards, sortField);
	}

	return { cards: sortedCards, isLoading, error };
}

// ---------------------------------------------------------------------------
// Client-side sorting — applies after combining all collections
// Handles responsibleName sorting which requires normalized card data
// ---------------------------------------------------------------------------

function sortCardsClientSide(
	cards: KanbanDashboardCard[],
	sortField: NonNullable<KanbanDashboardFilters["sortField"]>,
): KanbanDashboardCard[] {
	// For createdAt sorting, server-side already handles it
	// For displayName sorting, server-side already handles it per collection
	// Only client-side sort needed is for responsibleName which requires
	// accessing the normalized card's responsibleName field
	if (
		sortField === "responsibleName_asc" ||
		sortField === "responsibleName_desc"
	) {
		return [...cards].sort((a, b) => {
			const aName = a.responsibleName ?? "";
			const bName = b.responsibleName ?? "";
			if (sortField === "responsibleName_asc") {
				return (
					aName.localeCompare(bName) ||
					a.displayName.localeCompare(b.displayName)
				);
			}
			return (
				bName.localeCompare(aName) || b.displayName.localeCompare(a.displayName)
			);
		});
	}

	// For other sort fields, server-side already sorted correctly
	// Just maintain the order as returned from server
	return cards;
}
