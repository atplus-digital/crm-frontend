import { queryOptions, useQueries } from "@tanstack/react-query";
import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
} from "#/generated/nocobase/crm-troca-titularidade";
import type {
	Negociacoes,
	NegociacoesRelations,
} from "#/generated/nocobase/negociacoes";
import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
} from "#/generated/nocobase/suspensao-contrato";
import type {
	TrocaEndereco,
	TrocaEnderecoRelations,
} from "#/generated/nocobase/troca-endereco";
import { buildFilter, includes, nestedField, or } from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import type {
	KanbanDashboardCard,
	KanbanDashboardFilters,
	NegociacaoOverrideStatus,
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

	return queryOptions({
		queryKey: ["kanban-dashboard", "tt", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_crm_troca_titularidade",
				{
					pageSize: 200,
					sort: ["-createdAt"],
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

	return queryOptions({
		queryKey: ["kanban-dashboard", "te", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_troca_endereco" as "users",
				{
					pageSize: 200,
					sort: ["-createdAt"],
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

	return queryOptions({
		queryKey: ["kanban-dashboard", "sc", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_suspensao_contrato" as "users",
				{
					pageSize: 200,
					sort: ["-createdAt"],
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

	// Apply tipo de negociação filter (f_motivo field) using OR for multiple values
	if (filters.tipoNegociacao && filters.tipoNegociacao.length > 0) {
		const motivoConditions = filters.tipoNegociacao.map((motivo) =>
			includes("f_motivo", motivo),
		);
		conditions.push(or(...motivoConditions));
	}

	return queryOptions({
		queryKey: ["kanban-dashboard", "neg", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list("t_negociacoes", {
				pageSize: 200,
				sort: ["-createdAt"],
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
	const status =
		record.f_status as import("./kanban-dashboard-types").SuspensaoContratoOverrideStatus;
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
	const status = record.f_status as NegociacaoOverrideStatus;
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

	// Client-side filter: sourceCollections (array filter)
	// Note: "neg" cards are always included; they are filtered by tipoNegociacao instead
	if (
		activeFilters.sourceCollections &&
		activeFilters.sourceCollections.length > 0
	) {
		const selectedCollections = new Set(activeFilters.sourceCollections);

		if (ttResult.data && selectedCollections.has("tt")) {
			cards.push(...ttResult.data.data.map(normalizeTrocaTitularidade));
		}

		if (teResult.data && selectedCollections.has("te")) {
			cards.push(...teResult.data.data.map(normalizeTrocaEndereco));
		}

		if (scResult.data && selectedCollections.has("sc")) {
			cards.push(...scResult.data.data.map(normalizeSuspensaoContrato));
		}

		// Always include neg cards (filtered by tipoNegociacao server-side)
		if (negResult.data) {
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

	return { cards, isLoading, error };
}
