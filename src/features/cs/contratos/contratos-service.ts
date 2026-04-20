import type { ClienteContrato } from "#/generated/ixc/cliente-contrato";
import type { FnAreceber } from "#/generated/ixc/fn-areceber";
import type { LinhaMvno } from "#/generated/ixc/linha-mvno";
import type { SuTicket } from "#/generated/ixc/su-ticket";
import type { VdContratosProdutos } from "#/generated/ixc/vd-contratos-produtos";
import type { CrmTrocaTitularidade } from "#/generated/nocobase/crm-troca-titularidade";
import type { RegistrosDeContato } from "#/generated/nocobase/registros-de-contato";
import { buildFilter, eq } from "#/lib/filter-builder";
import { createLogger } from "#/lib/logger";
import { ixcRepository, nocobaseRepository } from "#/repositories";
import type { PaginatedResponse } from "#/repositories/types";
import type {
	AtendimentoIXC,
	ContratoCliente,
	ContratoFilters,
	ContratoListParams,
	ContratoWithCliente,
	Fatura,
	LinhaMovel,
	ProdutoContrato,
	RegistroContato,
	TrocaTitularidade,
} from "./contratos-types";

const log = createLogger("services:cs:contratos");

function buildContratoFilter(
	filters?: ContratoFilters,
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	if (filters.cpfCnpj) {
		conditions.push({
			f_nc_cliente: { cnpj_cpf: { $includes: filters.cpfCnpj } },
		});
	}

	if (filters.nome) {
		conditions.push({
			f_nc_cliente: { razao: { $includes: filters.nome } },
		});
	}

	if (filters.status) {
		conditions.push(eq("status", filters.status));
	}

	if (filters.contratoId) {
		conditions.push(eq("id", filters.contratoId));
	}

	return buildFilter(conditions);
}

export async function fetchContratos(
	params: ContratoListParams = {},
): Promise<PaginatedResponse<ContratoWithCliente>> {
	try {
		const { page = 1, pageSize = 20, sort, filters } = params;
		const filter = buildContratoFilter(filters);

		const response = await ixcRepository.list<ClienteContrato>(
			"cliente_contrato",
			{
				page,
				pageSize,
				appends: ["f_nc_cliente"],
				...(sort && sort.length > 0 && { sort }),
				...(filter && { filter }),
			},
		);

		const data = response.data as Array<
			ClienteContrato & { f_nc_cliente?: ContratoCliente | null }
		>;

		return {
			...response,
			data,
		};
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch contratos", { error: message });
		throw error;
	}
}

export async function fetchContratoById(
	id: number,
): Promise<ContratoWithCliente> {
	try {
		const response = await ixcRepository.list<ClienteContrato>(
			"cliente_contrato",
			{
				page: 1,
				pageSize: 1,
				appends: ["f_nc_cliente"],
				filter: eq("id", id),
			},
		);

		const contrato = response.data[0];

		if (!contrato) {
			throw new Error(`Contrato ${id} não encontrado`);
		}

		return contrato as ContratoWithCliente;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch contrato by ID", { id, error: message });
		throw error;
	}
}

export async function fetchContratoMovel(
	idContrato: number,
): Promise<PaginatedResponse<LinhaMovel>> {
	try {
		return ixcRepository.list<LinhaMvno>("linha_mvno", {
			page: 1,
			pageSize: 100,
			filter: eq("id_contrato", idContrato),
		}) as Promise<PaginatedResponse<LinhaMovel>>;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch contrato móvel", { idContrato, error: message });
		throw error;
	}
}

export async function fetchContratoProdutos(
	idContrato: number,
): Promise<PaginatedResponse<ProdutoContrato>> {
	try {
		return ixcRepository.list<VdContratosProdutos>("vd_contratos_produtos", {
			page: 1,
			pageSize: 100,
			filter: eq("id_contrato", idContrato),
		}) as Promise<PaginatedResponse<ProdutoContrato>>;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch contrato produtos", {
			idContrato,
			error: message,
		});
		throw error;
	}
}

export async function fetchContratoFaturas(
	idContrato: number,
): Promise<PaginatedResponse<Fatura>> {
	try {
		const response = await ixcRepository.list<FnAreceber>("fn_areceber", {
			page: 1,
			pageSize: 10,
			filter: eq("id_contrato", idContrato),
		});

		return {
			...response,
			data: response.data.map((item) => ({
				id: item.id,
				id_contrato: item.id_contrato,
				status: item.status,
				valor: item.valor,
				data_vencimento: item.data_vencimento,
				data_pagamento: item.pagamento_data || null,
			})),
		};
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch contrato faturas", {
			idContrato,
			error: message,
		});
		throw error;
	}
}

export async function fetchContratoTrocasTitularidade(
	idContrato: number,
): Promise<PaginatedResponse<TrocaTitularidade>> {
	try {
		const response = await nocobaseRepository.list("t_crm_troca_titularidade", {
			page: 1,
			pageSize: 50,
			filter: eq("f_id_contrato", String(idContrato)),
		});

		return {
			...response,
			data: response.data.map((item: CrmTrocaTitularidade) => ({
				id: item.id,
				id_contrato: item.f_id_contrato,
				cedente: item.f_cedente,
				documento_cedente: item.f_cedente_documento,
				cessionario: item.f_cessionario,
				documento_cessionario: item.f_cessionario_documento,
				status: item.f_status,
			})),
		};
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch trocas de titularidade", {
			idContrato,
			error: message,
		});
		throw error;
	}
}

export async function fetchContratoAtendimentos(
	idContrato: number,
): Promise<PaginatedResponse<AtendimentoIXC>> {
	try {
		const response = await ixcRepository.list<SuTicket>("su_ticket", {
			page: 1,
			pageSize: 50,
			filter: eq("id_contrato", idContrato),
		});

		return {
			...response,
			data: response.data.map((item) => ({
				id: item.id,
				id_contrato: item.id_contrato,
				status: item.status,
				assunto: item.titulo,
				descricao: item.menssagem,
				data_criacao: item.data_criacao,
				data_ultima_alteracao: item.data_ultima_alteracao,
			})),
		};
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch atendimentos", { idContrato, error: message });
		throw error;
	}
}

export async function fetchContratoRegistros(
	idContrato: number,
): Promise<PaginatedResponse<RegistroContato>> {
	try {
		const response = await nocobaseRepository.list("t_registros_de_contato", {
			page: 1,
			pageSize: 50,
			filter: eq("f_fk_id_contrato", idContrato),
			appends: ["createdBy"],
		});

		return {
			...response,
			data: response.data.map(
				(
					item: RegistrosDeContato & {
						createdBy?: { nickname?: string } | null;
					},
				) => ({
					id: item.id,
					id_contrato: item.f_fk_id_contrato,
					categoria: item.f_categoria,
					motivo_contato: item.f_resumo_contato,
					nota_vendas: item.f_nota_vendas,
					nota_tecnico: item.f_nota_tecnico,
					pendencia: item.f_ha_pendencia,
					data_criacao: item.createdAt,
					criado_por: item.createdBy?.nickname ?? "—",
				}),
			),
		};
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch registros de contato", {
			idContrato,
			error: message,
		});
		throw error;
	}
}
