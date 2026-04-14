import { nocobaseClient } from "#/modules/auth/client";
import type {
	Negociacao,
	NegociacaoFilters,
	NegociacaoListParams,
	PaginatedResponse,
} from "./negociacoes-types";

function buildNegociacaoFilter(
	filters?: NegociacaoFilters,
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	if (filters.titulo) {
		conditions.push({ f_titulo: { $includes: filters.titulo } });
	}

	if (filters.status) {
		conditions.push({ f_status: { $eq: filters.status } });
	}

	if (filters.substatus) {
		conditions.push({ f_substatus: { $eq: filters.substatus } });
	}

	if (filters.vendedorId) {
		conditions.push({ f_vendedor_id: { $eq: filters.vendedorId } });
	}

	if (filters.pessoaId) {
		conditions.push({ f_pessoa_id: { $eq: filters.pessoaId } });
	}

	if (filters.pessoaJuridicaId) {
		conditions.push({
			f_pessoa_juridica_id: { $eq: filters.pessoaJuridicaId },
		});
	}

	if (filters.valorMin !== undefined && filters.valorMax !== undefined) {
		conditions.push({
			$and: [
				{ f_valor_mensal: { $gte: filters.valorMin } },
				{ f_valor_mensal: { $lte: filters.valorMax } },
			],
		});
	} else if (filters.valorMin !== undefined) {
		conditions.push({ f_valor_mensal: { $gte: filters.valorMin } });
	} else if (filters.valorMax !== undefined) {
		conditions.push({ f_valor_mensal: { $lte: filters.valorMax } });
	}

	if (filters.dataInicioDe) {
		conditions.push({ f_data_inicio: { $gte: filters.dataInicioDe } });
	}

	if (filters.dataInicioAte) {
		conditions.push({ f_data_inicio: { $lte: filters.dataInicioAte } });
	}

	if (conditions.length === 0) return undefined;
	if (conditions.length === 1) return conditions[0];
	return { $and: conditions };
}

export async function fetchNegociacoes(
	params: NegociacaoListParams = {},
): Promise<PaginatedResponse<Negociacao>> {
	const { page = 1, pageSize = 20, sort, filters, appends } = params;
	const filter = buildNegociacaoFilter(filters);

	const response = await nocobaseClient.request({
		url: "t_negociacoes:list",
		method: "GET",
		params: {
			page,
			pageSize,
			appends: appends || ["f_pessoa", "f_pessoa_juridica", "f_vendedor"],
			...(sort && sort.length > 0 && { sort }),
			...(filter && { filter: JSON.stringify(filter) }),
		},
	});

	return response.data;
}

export async function fetchNegociacaoById(
	id: number,
	appends?: string[],
): Promise<Negociacao> {
	const response = await nocobaseClient.request({
		url: "t_negociacoes:get",
		method: "POST",
		params: {
			filterByTk: id,
			appends: appends || ["f_pessoa", "f_pessoa_juridica", "f_vendedor"],
		},
	});

	if (!response.data?.data) {
		throw new Error(`Negociação ${id} não encontrada`);
	}

	return response.data.data;
}

export async function fetchNegociacoesCount(): Promise<number> {
	const response = await nocobaseClient.request({
		url: "t_negociacoes:count",
		method: "GET",
	});

	return response.data?.data?.total || 0;
}
