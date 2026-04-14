import type { CollectionRelationsMap } from "#/generated/nocobase/collections";
import { buildFilter, eq, includes } from "#/lib/filter-builder";
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
		conditions.push(includes("f_nome", filters.nome));
	}

	if (filters.cpf) {
		conditions.push(includes("f_cpf", filters.cpf));
	}

	if (filters.analiseIxc && filters.analiseIxc !== "all") {
		conditions.push(eq("f_analise_ixc", filters.analiseIxc));
	}

	return buildFilter(conditions);
}

function buildPessoaJuridicaFilter(
	filters?: PessoaJuridicaFilters,
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	if (filters.razaoSocial) {
		conditions.push(includes("f_razao_social", filters.razaoSocial));
	}

	if (filters.cnpj) {
		conditions.push(includes("f_cnpj", filters.cnpj));
	}

	return buildFilter(conditions);
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

	const response = await nocobaseRepository.list("t_pessoas", {
		page,
		pageSize,
		appends: appends as unknown as Array<
			keyof CollectionRelationsMap["t_pessoas"]
		>,
		...(sort.length > 0 && { sort }),
		...(filter && { filter }),
	});

	return response as unknown as PessoaFisicaResponse;
}

export async function fetchPessoaFisicaById(id: number): Promise<PessoaFisica> {
	const response = await nocobaseRepository.get("t_pessoas", id);

	return response as unknown as PessoaFisica;
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

	const response = await nocobaseRepository.list("t_empresas", {
		page,
		pageSize,
		appends: appends as unknown as Array<
			keyof CollectionRelationsMap["t_empresas"]
		>,
		...(sort.length > 0 && { sort }),
		...(filter && { filter }),
	});

	return response as unknown as PessoaJuridicaResponse;
}

export async function fetchPessoaJuridicaById(
	id: number,
): Promise<PessoaJuridica> {
	const response = await nocobaseRepository.get("t_empresas", id);

	return response as unknown as PessoaJuridica;
}

export async function createPessoaFisica(
	data: Partial<PessoaFisica>,
): Promise<PessoaFisica> {
	const result = await nocobaseRepository.create<"t_pessoas">(
		"t_pessoas",
		data as Partial<import("#/generated/nocobase/index").Pessoas>,
	);
	return result as unknown as PessoaFisica;
}

export async function updatePessoaFisica(
	id: number,
	data: Partial<PessoaFisica>,
): Promise<PessoaFisica> {
	const result = await nocobaseRepository.update<"t_pessoas">(
		"t_pessoas",
		id,
		data as Partial<import("#/generated/nocobase/index").Pessoas>,
	);
	return result as unknown as PessoaFisica;
}

export async function deletePessoaFisica(id: number): Promise<void> {
	await nocobaseRepository.delete("t_pessoas", id);
}

export async function createPessoaJuridica(
	data: Partial<PessoaJuridica>,
): Promise<PessoaJuridica> {
	const result = await nocobaseRepository.create<"t_empresas">(
		"t_empresas",
		data as Partial<import("#/generated/nocobase/index").Empresas>,
	);
	return result as unknown as PessoaJuridica;
}

export async function updatePessoaJuridica(
	id: number,
	data: Partial<PessoaJuridica>,
): Promise<PessoaJuridica> {
	const result = await nocobaseRepository.update<"t_empresas">(
		"t_empresas",
		id,
		data as Partial<import("#/generated/nocobase/index").Empresas>,
	);
	return result as unknown as PessoaJuridica;
}

export async function deletePessoaJuridica(id: number): Promise<void> {
	await nocobaseRepository.delete("t_empresas", id);
}
