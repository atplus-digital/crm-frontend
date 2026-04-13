import type {
	ContratoFilters,
	ContratoListParams,
	ContratoWithCliente,
	PaginatedResponse,
} from "./contratos-types";
import { ixcRequest } from "./ixc-client";

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
		conditions.push({ status: { $eq: filters.status } });
	}

	if (filters.contratoId) {
		conditions.push({ id: { $eq: filters.contratoId } });
	}

	if (conditions.length === 0) return undefined;
	if (conditions.length === 1) return conditions[0];
	return { $and: conditions };
}

export async function fetchContratos(
	params: ContratoListParams = {},
): Promise<PaginatedResponse<ContratoWithCliente>> {
	const { page = 1, pageSize = 20, sort, filters } = params;
	const filter = buildContratoFilter(filters);

	const response = await ixcRequest<PaginatedResponse<ContratoWithCliente>>({
		url: "cliente_contrato:list",
		method: "GET",
		params: {
			page,
			pageSize,
			appends: ["f_nc_cliente"],
			...(sort && sort.length > 0 && { sort }),
			...(filter && { filter: JSON.stringify(filter) }),
		},
	});

	return response;
}

export async function fetchContratoById(
	id: number,
): Promise<ContratoWithCliente> {
	const response = await ixcRequest<PaginatedResponse<ContratoWithCliente>>({
		url: "cliente_contrato:list",
		method: "GET",
		params: {
			page: 1,
			pageSize: 1,
			appends: ["f_nc_cliente"],
			filter: JSON.stringify({ id: { $eq: id } }),
		},
	});

	if (!response.data || response.data.length === 0) {
		throw new Error(`Contrato ${id} não encontrado`);
	}

	return response.data[0];
}
