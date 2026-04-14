import { buildFilter, eq } from "#/lib/filter-builder";
import { ixcRepository } from "#/modules/repositories";
import type {
	ContratoFilters,
	ContratoListParams,
	ContratoWithCliente,
	PaginatedResponse,
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
