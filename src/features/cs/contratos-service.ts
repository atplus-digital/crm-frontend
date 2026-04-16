import { buildFilter, eq } from "#/lib/filter-builder";
import { ixcRepository } from "#/repositories";
import type {
	AtendimentoIXC,
	ContratoFilters,
	ContratoListParams,
	ContratoWithCliente,
	Fatura,
	LinhaMovel,
	PaginatedResponse,
	ProdutoContrato,
	RegistroContato,
	TrocaTitularidade,
} from "./contratos-types";

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
	const { page = 1, pageSize = 20, sort, filters } = params;
	const filter = buildContratoFilter(filters);

	const response = await ixcRepository.list<ContratoWithCliente>(
		"cliente_contrato",
		{
			page,
			pageSize,
			appends: ["f_nc_cliente"],
			...(sort && sort.length > 0 && { sort }),
			...(filter && { filter }),
		},
	);

	return response;
}

export async function fetchContratoById(
	id: number,
): Promise<ContratoWithCliente> {
	return ixcRepository.get<ContratoWithCliente>("cliente_contrato", id);
}

export async function fetchContratoMovel(
	idContrato: number,
): Promise<PaginatedResponse<LinhaMovel>> {
	return ixcRepository.list<LinhaMovel>("linha_mvno", {
		page: 1,
		pageSize: 100,
		filter: eq("id_contrato", idContrato),
	});
}

export async function fetchContratoProdutos(
	idContrato: number,
): Promise<PaginatedResponse<ProdutoContrato>> {
	return ixcRepository.list<ProdutoContrato>("vd_contratos_produtos", {
		page: 1,
		pageSize: 100,
		filter: eq("id_contrato", idContrato),
	});
}

export async function fetchContratoFaturas(
	idContrato: number,
): Promise<PaginatedResponse<Fatura>> {
	return ixcRepository.list<Fatura>("fn_areceber", {
		page: 1,
		pageSize: 10,
		filter: eq("id_contrato", idContrato),
	});
}

export async function fetchContratoTrocasTitularidade(
	idContrato: number,
): Promise<PaginatedResponse<TrocaTitularidade>> {
	return ixcRepository.list<TrocaTitularidade>("t_crm_troca_titularidade", {
		page: 1,
		pageSize: 50,
		filter: eq("id_contrato", idContrato),
	});
}

export async function fetchContratoAtendimentos(
	idContrato: number,
): Promise<PaginatedResponse<AtendimentoIXC>> {
	return ixcRepository.list<AtendimentoIXC>("su_ticket", {
		page: 1,
		pageSize: 50,
		filter: eq("id_contrato", idContrato),
	});
}

export async function fetchContratoRegistros(
	idContrato: number,
): Promise<PaginatedResponse<RegistroContato>> {
	return ixcRepository.list<RegistroContato>("t_registros_de_contato", {
		page: 1,
		pageSize: 50,
		filter: eq("f_fk_id_contrato", idContrato),
	});
}
