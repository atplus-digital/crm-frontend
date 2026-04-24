import { queryOptions, useQueries } from "@tanstack/react-query";
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
import { buildFilter, includes } from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import type {
	KanbanDashboardCard,
	KanbanDashboardFilters,
} from "./kanban-dashboard-types";
import {
	mapSuspensaoContratoStatus,
	mapTrocaEnderecoStatus,
	mapTrocaTitularidadeStatus,
} from "./kanban-dashboard-types";

type CrmTrocaTitularidadeWithVendedor = CrmTrocaTitularidade &
	Pick<CrmTrocaTitularidadeRelations, "f_vendedor">;

type TrocaEnderecoWithCreatedBy = TrocaEndereco &
	Pick<TrocaEnderecoRelations, "createdBy">;

type SuspensaoContratoWithCreatedBy = SuspensaoContrato &
	Pick<SuspensaoContratoRelations, "createdBy">;

// ────────────────────────────────────────────────────────────────────────────
// Query options — each collection fetched independently (factory per filter set)
// ────────────────────────────────────────────────────────────────────────────

function trocaTitularidadeQueryOptions(filters: KanbanDashboardFilters) {
	const conditions: Record<string, unknown>[] = [];

	if (filters.searchTerm) {
		conditions.push(includes("f_cedente", filters.searchTerm));
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

	return queryOptions({
		queryKey: ["kanban-dashboard", "sc", filters] as const,
		queryFn: async () => {
			const response = await nocobaseRepository.list(
				"t_suspensao_contrato" as "users",
				{
					pageSize: 200,
					sort: ["-createdAt"],
					appends: ["createdBy"],
					...(conditions.length > 0 ? { filter: buildFilter(conditions) } : {}),
				} as Parameters<typeof nocobaseRepository.list>[1],
			);
			return response as unknown as {
				data: SuspensaoContratoWithCreatedBy[];
				meta: { total: number };
			};
		},
		staleTime: 10_000,
	});
}

// ────────────────────────────────────────────────────────────────────────────
// Normalization helpers
// ────────────────────────────────────────────────────────────────────────────

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
		source: record as TrocaEndereco & TrocaEnderecoRelations,
	};
}

function normalizeSuspensaoContrato(
	record: SuspensaoContratoWithCreatedBy,
): KanbanDashboardCard {
	const status =
		record.f_status as import("./kanban-dashboard-types").SuspensaoContratoOverrideStatus;
	const unifiedStatus = mapSuspensaoContratoStatus(status);
	return {
		sourceCollection: "sc",
		id: record.id,
		displayName: record.f_titulo,
		createdAt: record.createdAt,
		status,
		unifiedStatus,
		responsibleName: record.createdBy?.nickname ?? null,
		source: record as SuspensaoContrato & SuspensaoContratoRelations,
	};
}

// ────────────────────────────────────────────────────────────────────────────
// Main hook — parallel fetch + normalization
// ────────────────────────────────────────────────────────────────────────────

const EMPTY_FILTERS: KanbanDashboardFilters = {};

export function useKanbanDashboardData(filters: KanbanDashboardFilters = {}) {
	const activeFilters = filters ?? EMPTY_FILTERS;

	const [ttResult, teResult, scResult] = useQueries({
		queries: [
			trocaTitularidadeQueryOptions(activeFilters),
			trocaEnderecoQueryOptions(activeFilters),
			suspensaoContratoQueryOptions(activeFilters),
		],
	});

	const isLoading =
		ttResult.isLoading || teResult.isLoading || scResult.isLoading;

	const errors = [ttResult.error, teResult.error, scResult.error].filter(
		(e) => e !== null && e !== undefined,
	);
	const error =
		errors.length === 3 ? errors[0] : errors.length > 0 ? errors[0] : null;

	const cards: KanbanDashboardCard[] = [];

	if (ttResult.data) {
		cards.push(...ttResult.data.data.map(normalizeTrocaTitularidade));
	}

	if (teResult.data) {
		cards.push(...teResult.data.data.map(normalizeTrocaEndereco));
	}

	if (scResult.data) {
		cards.push(...scResult.data.data.map(normalizeSuspensaoContrato));
	}

	// Client-side filter: sourceCollection (type filter)
	if (activeFilters.sourceCollection) {
		cards.splice(
			0,
			cards.length,
			...cards.filter(
				(c) => c.sourceCollection === activeFilters.sourceCollection,
			),
		);
	}

	return { cards, isLoading, error };
}
