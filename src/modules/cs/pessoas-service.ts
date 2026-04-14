import { nocobaseRepository } from "#/modules/repositories";
import type {
	PessoaFisica,
	PessoaFisicaFilters,
	PessoaFisicaListParams,
	PessoaFisicaResponse,
	PessoaJuridica,
	PessoaJuridicaFilters,
	PessoaJuridicaListParams,
	PessoaJuridicaResponse,
} from "./pessoas-types";

function buildPessoaFisicaFilter(
	filters?: PessoaFisicaFilters,
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	if (filters.nome) {
		conditions.push({ f_nome: { $includes: filters.nome } });
	}

	if (filters.cpf) {
		conditions.push({ f_cpf: { $includes: filters.cpf } });
	}

	if (filters.analiseIxc && filters.analiseIxc !== "all") {
		conditions.push({ f_analise_ixc: { $eq: filters.analiseIxc } });
	}

	if (conditions.length === 0) return undefined;
	if (conditions.length === 1) return conditions[0];
	return { $and: conditions };
}

function buildPessoaJuridicaFilter(
	filters?: PessoaJuridicaFilters,
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	if (filters.razaoSocial) {
		conditions.push({ f_razao_social: { $includes: filters.razaoSocial } });
	}

	if (filters.cnpj) {
		conditions.push({ f_cnpj: { $includes: filters.cnpj } });
	}

	if (conditions.length === 0) return undefined;
	if (conditions.length === 1) return conditions[0];
	return { $and: conditions };
}

export async function fetchPessoasFisicas(
	params: PessoaFisicaListParams = {},
): Promise<PessoaFisicaResponse> {
	const {
		page = 1,
		pageSize = 20,
		sort = ["-createdAt"],
		filters,
		appends = ["createdBy"],
	} = params;

	const filter = buildPessoaFisicaFilter(filters);

	const response = await nocobaseRepository.list<PessoaFisica>(
		"t_pessoas",
		{
			page,
			pageSize,
			appends,
			...(sort.length > 0 && { sort }),
			...(filter && { filter }),
		},
	);

	return response;
}

export async function fetchPessoaFisicaById(id: number): Promise<PessoaFisica> {
	const response = await nocobaseRepository.get<PessoaFisica>(
		"t_pessoas",
		id,
	);

	return response;
}

export async function fetchPessoasJuridicas(
	params: PessoaJuridicaListParams = {},
): Promise<PessoaJuridicaResponse> {
	const {
		page = 1,
		pageSize = 20,
		sort = ["-createdAt"],
		filters,
		appends = ["createdBy"],
	} = params;

	const filter = buildPessoaJuridicaFilter(filters);

	const response = await nocobaseRepository.list<PessoaJuridica>(
		"t_empresas",
		{
			page,
			pageSize,
			appends,
			...(sort.length > 0 && { sort }),
			...(filter && { filter }),
		},
	);

	return response;
}

export async function fetchPessoaJuridicaById(
	id: number,
): Promise<PessoaJuridica> {
	const response = await nocobaseRepository.get<PessoaJuridica>(
		"t_empresas",
		id,
	);

	return response;
}

export async function createPessoaFisica(
	data: Partial<PessoaFisica>,
): Promise<PessoaFisica> {
	return nocobaseRepository.create<PessoaFisica>("t_pessoas", data);
}

export async function updatePessoaFisica(
	id: number,
	data: Partial<PessoaFisica>,
): Promise<PessoaFisica> {
	return nocobaseRepository.update<PessoaFisica>("t_pessoas", id, data);
}

export async function deletePessoaFisica(id: number): Promise<void> {
	await nocobaseRepository.delete("t_pessoas", id);
}

export async function createPessoaJuridica(
	data: Partial<PessoaJuridica>,
): Promise<PessoaJuridica> {
	return nocobaseRepository.create<PessoaJuridica>("t_empresas", data);
}

export async function updatePessoaJuridica(
	id: number,
	data: Partial<PessoaJuridica>,
): Promise<PessoaJuridica> {
	return nocobaseRepository.update<PessoaJuridica>(
		"t_empresas",
		id,
		data,
	);
}

export async function deletePessoaJuridica(id: number): Promise<void> {
	await nocobaseRepository.delete("t_empresas", id);
}
