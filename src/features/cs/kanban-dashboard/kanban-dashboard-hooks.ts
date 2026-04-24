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
import { nocobaseRepository } from "#/repositories";
import type { KanbanDashboardCard } from "./kanban-dashboard-types";
import {
	mapSuspensaoContratoStatus,
	mapTrocaEnderecoStatus,
	mapTrocaTitularidadeStatus,
} from "./kanban-dashboard-types";

type CrmTrocaTitularidadeWithVendedor = CrmTrocaTitularidade &
	Pick<CrmTrocaTitularidadeRelations, "f_vendedor">;

type TrocaEnderecoWithCreatedBy = TrocaEndereco &
	Pick<TrocaEnderecoRelations, "createdBy">;

type SuspensaoContratoWithResponsavel = SuspensaoContrato &
	Pick<SuspensaoContratoRelations, "f_responsavel">;

// ────────────────────────────────────────────────────────────────────────────
// Query options — each collection fetched independently
// ────────────────────────────────────────────────────────────────────────────

const trocaTitularidadeQueryOptions = queryOptions({
	queryKey: ["kanban-dashboard", "tt"] as const,
	queryFn: async () => {
		const response = await nocobaseRepository.list("t_crm_troca_titularidade", {
			pageSize: 200,
			sort: ["-createdAt"],
			appends: ["f_vendedor"] as Array<keyof CrmTrocaTitularidadeRelations>,
		});
		return response as {
			data: CrmTrocaTitularidadeWithVendedor[];
			meta: { total: number };
		};
	},
	staleTime: 10_000,
});

const trocaEnderecoQueryOptions = queryOptions({
	queryKey: ["kanban-dashboard", "te"] as const,
	queryFn: async () => {
		const response = await nocobaseRepository.list(
			"t_troca_endereco" as "users",
			{
				pageSize: 200,
				sort: ["-createdAt"],
				appends: ["createdBy"] as Array<keyof TrocaEnderecoRelations>,
			},
		);
		return response as unknown as {
			data: TrocaEnderecoWithCreatedBy[];
			meta: { total: number };
		};
	},
	staleTime: 10_000,
});

const suspensaoContratoQueryOptions = queryOptions({
	queryKey: ["kanban-dashboard", "sc"] as const,
	queryFn: async () => {
		const response = await nocobaseRepository.list(
			"t_suspensao_contrato" as "users",
			{
				pageSize: 200,
				sort: ["-createdAt"],
				appends: ["f_responsavel"],
			} as Parameters<typeof nocobaseRepository.list>[1],
		);
		return response as unknown as {
			data: SuspensaoContratoWithResponsavel[];
			meta: { total: number };
		};
	},
	staleTime: 10_000,
});

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
	record: SuspensaoContratoWithResponsavel,
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
		responsibleName: record.f_responsavel?.nickname ?? null,
		source: record as SuspensaoContrato & SuspensaoContratoRelations,
	};
}

// ────────────────────────────────────────────────────────────────────────────
// Main hook — parallel fetch + normalization
// ────────────────────────────────────────────────────────────────────────────

export function useKanbanDashboardData() {
	const [ttResult, teResult, scResult] = useQueries({
		queries: [
			trocaTitularidadeQueryOptions,
			trocaEnderecoQueryOptions,
			suspensaoContratoQueryOptions,
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

	return { cards, isLoading, error };
}
