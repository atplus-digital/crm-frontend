import type { CollectionRelationsMap } from "#/generated/nocobase/collections";
import type { Empresas } from "#/generated/nocobase/empresas";
import type { Pessoas } from "#/generated/nocobase/pessoas";
import { buildFilter, eq, includes } from "#/lib/filter-builder";
import { createLogger } from "#/lib/logger";
import { nocobaseRepository } from "#/repositories";
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

const log = createLogger("services:cs:pessoas");

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
	try {
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
			appends: appends as Array<keyof CollectionRelationsMap["t_pessoas"]>,
			...(sort.length > 0 && { sort }),
			...(filter && { filter }),
		});

		return {
			data: response.data as unknown as PessoaFisica[],
			meta: response.meta,
		};
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch pessoas físicas", { error: message });
		throw error;
	}
}

export async function fetchPessoaFisicaById(id: number): Promise<PessoaFisica> {
	try {
		const response = await nocobaseRepository.get("t_pessoas", id);

		return response as Pessoas;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch pessoa física by ID", { id, error: message });
		throw error;
	}
}

export async function fetchPessoasJuridicas(
	params: PessoaJuridicaListParams = {},
): Promise<PessoaJuridicaResponse> {
	try {
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
			appends: appends as Array<keyof CollectionRelationsMap["t_empresas"]>,
			...(sort.length > 0 && { sort }),
			...(filter && { filter }),
		});

		return {
			data: response.data as unknown as Empresas[],
			meta: response.meta,
		};
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch pessoas jurídicas", { error: message });
		throw error;
	}
}

export async function fetchPessoaJuridicaById(
	id: number,
): Promise<PessoaJuridica> {
	try {
		const response = await nocobaseRepository.get("t_empresas", id);

		return response as Empresas;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to fetch pessoa jurídica by ID", { id, error: message });
		throw error;
	}
}

export async function createPessoaFisica(
	data: Partial<PessoaFisica>,
): Promise<PessoaFisica> {
	try {
		const result = await nocobaseRepository.create<"t_pessoas">(
			"t_pessoas",
			data as Partial<Pessoas>,
		);
		return result as Pessoas;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to create pessoa física", { error: message });
		throw error;
	}
}

export async function updatePessoaFisica(
	id: number,
	data: Partial<PessoaFisica>,
): Promise<PessoaFisica> {
	try {
		const result = await nocobaseRepository.update<"t_pessoas">(
			"t_pessoas",
			id,
			data as Partial<Pessoas>,
		);
		return result as Pessoas;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to update pessoa física", { id, error: message });
		throw error;
	}
}

export async function deletePessoaFisica(id: number): Promise<void> {
	try {
		await nocobaseRepository.delete("t_pessoas", id);
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to delete pessoa física", { id, error: message });
		throw error;
	}
}

export async function createPessoaJuridica(
	data: Partial<PessoaJuridica>,
): Promise<PessoaJuridica> {
	try {
		const result = await nocobaseRepository.create<"t_empresas">(
			"t_empresas",
			data as Partial<Empresas>,
		);
		return result as Empresas;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to create pessoa jurídica", { error: message });
		throw error;
	}
}

export async function updatePessoaJuridica(
	id: number,
	data: Partial<PessoaJuridica>,
): Promise<PessoaJuridica> {
	try {
		const result = await nocobaseRepository.update<"t_empresas">(
			"t_empresas",
			id,
			data as Partial<Empresas>,
		);
		return result as Empresas;
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to update pessoa jurídica", { id, error: message });
		throw error;
	}
}

export async function deletePessoaJuridica(id: number): Promise<void> {
	try {
		await nocobaseRepository.delete("t_empresas", id);
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Erro desconhecido";
		log.error("Failed to delete pessoa jurídica", { id, error: message });
		throw error;
	}
}
