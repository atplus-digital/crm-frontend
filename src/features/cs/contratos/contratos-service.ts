import { getErrorMessage } from "#/lib/api-errors";
import { buildFilter, eq } from "#/lib/filter-builder";
import { createLogger } from "#/lib/logger";
import { ixcRepository, nocobaseRepository } from "#/repositories";
import type { PaginatedResponse } from "#/repositories/types";
import type {
	AtendimentoIXC,
	ContratoFilters,
	ContratoListParams,
	ContratoWithCliente,
	DadosAdicionaisContrato,
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
		const { page = 1, pageSize = 15, sort, filters } = params;
		const filter = buildContratoFilter(filters);

		return ixcRepository.list<ContratoWithCliente>("cliente_contrato", {
			page,
			pageSize,
			appends: ["f_nc_cliente"],
			...(sort && sort.length > 0 && { sort }),
			...(filter && { filter }),
		});
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch contratos", { error: message });
		throw error;
	}
}

export async function fetchContratoById(
	id: number,
): Promise<ContratoWithCliente> {
	try {
		const response = await ixcRepository.list<ContratoWithCliente>(
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

		return contrato;
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch contrato by ID", { id, error: message });
		throw error;
	}
}

export async function fetchContratoMovel(
	idContrato: number,
): Promise<PaginatedResponse<LinhaMovel>> {
	try {
		return ixcRepository.list<LinhaMovel>("linha_mvno", {
			page: 1,
			pageSize: 100,
			filter: eq("id_contrato", idContrato),
		});
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch contrato móvel", { idContrato, error: message });
		throw error;
	}
}

export async function fetchContratoProdutos(
	idContrato: number,
): Promise<PaginatedResponse<ProdutoContrato>> {
	try {
		return ixcRepository.list<ProdutoContrato>("vd_contratos_produtos", {
			page: 1,
			pageSize: 100,
			filter: eq("id_contrato", idContrato),
		});
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
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
		return ixcRepository.list<Fatura>("fn_areceber", {
			page: 1,
			pageSize: 10,
			filter: eq("id_contrato", idContrato),
		});
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
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
		return nocobaseRepository.list<"t_crm_troca_titularidade">(
			"t_crm_troca_titularidade",
			{
				page: 1,
				pageSize: 50,
				filter: eq("f_id_contrato", String(idContrato)),
			},
		);
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
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
		return ixcRepository.list<AtendimentoIXC>("su_ticket", {
			page: 1,
			pageSize: 50,
			filter: eq("id_contrato", idContrato),
		});
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch atendimentos", { idContrato, error: message });
		throw error;
	}
}

export async function fetchContratoRegistros(
	idContrato: number,
): Promise<PaginatedResponse<RegistroContato>> {
	try {
		return nocobaseRepository.list<"t_registros_de_contato">(
			"t_registros_de_contato",
			{
				page: 1,
				pageSize: 50,
				filter: eq("f_fk_id_contrato", idContrato),
				appends: ["createdBy"],
			},
		);
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch registros de contato", {
			idContrato,
			error: message,
		});
		throw error;
	}
}

export async function fetchDadosAdicionaisContrato(
	clienteContratoId: number,
): Promise<DadosAdicionaisContrato | null> {
	try {
		const response = await nocobaseRepository.list(
			"t_dados_adicionais_cliente_contrato",
			{
				page: 1,
				pageSize: 1,
				filter: eq("f_id_cliente_contrato", clienteContratoId),
			},
		);

		const item = response.data[0];
		if (!item) return null;

		return item;
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch dados adicionais", {
			clienteContratoId,
			error: message,
		});
		throw error;
	}
}
