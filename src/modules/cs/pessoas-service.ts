import { nocobaseClient } from "#/modules/auth/client";
import type {
	Pessoa,
	PessoaFisicaFilters,
	PessoaJuridicaFilters,
	PessoaListParams,
	PaginatedResponse,
} from "./pessoas-types";

function buildPessoaFilter(
	filters?: PessoaFisicaFilters | PessoaJuridicaFilters,
	type?: "fisica" | "juridica",
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	// Filtros para Pessoa Física
	if (type === "fisica" || !type) {
		const fisicas = filters as PessoaFisicaFilters;
		if (fisicas.nome) {
			conditions.push({ f_nome: { $includes: fisicas.nome } });
		}
		if (fisicas.cpf) {
			conditions.push({ f_cpf: { $includes: fisicas.cpf } });
		}
		if (fisicas.email) {
			conditions.push({ f_email: { $includes: fisicas.email } });
		}
		if (fisicas.telefone) {
			conditions.push({ f_telefone: { $includes: fisicas.telefone } });
		}
	}

	// Filtros para Pessoa Jurídica
	if (type === "juridica" || !type) {
		const juridicas = filters as PessoaJuridicaFilters;
		if (juridicas.razaoSocial) {
			conditions.push({ f_razao_social: { $includes: juridicas.razaoSocial } });
		}
		if (juridicas.nomeFantasia) {
			conditions.push({
				f_nome_fantasia: { $includes: juridicas.nomeFantasia },
			});
		}
		if (juridicas.cnpj) {
			conditions.push({ f_cnpj: { $includes: juridicas.cnpj } });
		}
		if (juridicas.email) {
			conditions.push({ f_email: { $includes: juridicas.email } });
		}
	}

	if (conditions.length === 0) return undefined;
	if (conditions.length === 1) return conditions[0];
	return { $and: conditions };
}

export async function fetchPessoas(
	params: PessoaListParams = {},
): Promise<PaginatedResponse<Pessoa>> {
	const { page = 1, pageSize = 20, sort, filters, type } = params;
	const filter = buildPessoaFilter(filters, type);

	const collection = type === "juridica" ? "t_pessoas_juridicas" : "t_pessoas";

	const response = await nocobaseClient.request({
		url: `${collection}:list`,
		method: "GET",
		params: {
			page,
			pageSize,
			...(sort && sort.length > 0 && { sort }),
			...(filter && { filter: JSON.stringify(filter) }),
		},
	});

	return response.data;
}

export async function fetchPessoaById(
	id: number,
	type: "fisica" | "juridica" = "fisica",
): Promise<Pessoa> {
	const collection = type === "juridica" ? "t_pessoas_juridicas" : "t_pessoas";

	const response = await nocobaseClient.request({
		url: `${collection}:get`,
		method: "POST",
		params: {
			filterByTk: id,
		},
	});

	if (!response.data?.data) {
		throw new Error(`Pessoa ${id} não encontrada`);
	}

	return response.data.data;
}

export async function fetchPessoaCount(
	type?: "fisica" | "juridica",
): Promise<number> {
	const collection = type === "juridica" ? "t_pessoas_juridicas" : "t_pessoas";

	const response = await nocobaseClient.request({
		url: `${collection}:count`,
		method: "GET",
	});

	return response.data?.data?.total || 0;
}
