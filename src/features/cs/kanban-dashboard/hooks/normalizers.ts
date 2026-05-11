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
import type { KanbanDashboardCard } from "../types";
import {
	mapNegociacaoStatus,
	mapSuspensaoContratoStatus,
	mapTrocaEnderecoStatus,
	mapTrocaTitularidadeStatus,
} from "../types";

// ---------------------------------------------------------------------------
// Type aliases — shared between query options and normalizers
// ---------------------------------------------------------------------------

export type CrmTrocaTitularidadeWithVendedor = CrmTrocaTitularidade &
	Pick<CrmTrocaTitularidadeRelations, "f_vendedor">;

export type TrocaEnderecoWithCreatedBy = TrocaEndereco &
	Pick<TrocaEnderecoRelations, "createdBy">;

export type SuspensaoContratoWithResponsibles = SuspensaoContrato &
	Pick<SuspensaoContratoRelations, "createdBy" | "f_responsavel">;

export type NegociacoesWithVendedor = Negociacoes &
	Pick<NegociacoesRelations, "f_vendedor">;

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

export {
	normalizeNegociacao,
	normalizeSuspensaoContrato,
	normalizeTrocaEndereco,
	normalizeTrocaTitularidade,
};
