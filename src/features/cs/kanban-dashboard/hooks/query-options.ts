import { queryOptions } from "@tanstack/react-query";
import { authStore } from "#/features/auth";
import type { CrmTrocaTitularidadeRelations } from "#/generated/types/nocobase/crm-troca-titularidade";
import type { NegociacoesRelations } from "#/generated/types/nocobase/negociacoes";
import type { TrocaEnderecoRelations } from "#/generated/types/nocobase/troca-endereco";
import {
	buildFilter,
	eq,
	includes,
	nestedField,
	or,
} from "#/lib/filter-builder";
import { nocobaseRepository } from "#/repositories";
import type { KanbanDashboardFilters, KanbanSortField } from "../types";
import type {
	CrmTrocaTitularidadeWithVendedor,
	NegociacoesWithVendedor,
	SuspensaoContratoWithResponsibles,
	TrocaEnderecoWithCreatedBy,
} from "./normalizers";

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
			const response = await nocobaseRepository.list("t_troca_endereco", {
				pageSize: 200,
				sort: adjustedSort,
				appends: ["createdBy"] as Array<keyof TrocaEnderecoRelations>,
				...(conditions.length > 0 ? { filter: buildFilter(conditions) } : {}),
			});
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
			const response = await nocobaseRepository.list("t_suspensao_contrato", {
				pageSize: 200,
				sort: adjustedSort,
				appends: ["createdBy", "f_responsavel"],
				...(conditions.length > 0 ? { filter: buildFilter(conditions) } : {}),
			} as Parameters<typeof nocobaseRepository.list>[1]);
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

export {
	negociacoesQueryOptions,
	suspensaoContratoQueryOptions,
	trocaEnderecoQueryOptions,
	trocaTitularidadeQueryOptions,
};
