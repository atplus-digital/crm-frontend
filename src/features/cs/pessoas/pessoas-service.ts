import type { CollectionRelationsMap } from "#/generated/types/nocobase/collections";
import type { Empresas } from "#/generated/types/nocobase/empresas";
import type {
	Pessoas,
	PessoasAnaliseIxc,
} from "#/generated/types/nocobase/pessoas";
import { getErrorMessage } from "#/lib/api-errors";
import { buildFilter, eq, includes } from "#/lib/filter-builder";
import { createLogger } from "#/lib/logger";
import { nocobaseRepository } from "#/repositories";
import type {
	PessoaFisicaFilters,
	PessoaFisicaListParams,
	PessoaFisicaResponse,
	PessoaJuridicaFilters,
	PessoaJuridicaListParams,
	PessoaJuridicaResponse,
} from "./pessoas-types";

// Aliases de domínio para clareza no código de serviço
type PessoaFisica = Pessoas;

const log = createLogger("services:cs:pessoas");

function buildPessoaFisicaFilter(
	filters?: PessoaFisicaFilters,
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	if (filters.f_nome) {
		conditions.push(includes("f_nome", filters.f_nome));
	}

	if (filters.f_cpf) {
		conditions.push(includes("f_cpf", filters.f_cpf));
	}

	if (filters.f_analise_ixc && filters.f_analise_ixc !== "all") {
		conditions.push(
			eq("f_analise_ixc", filters.f_analise_ixc as PessoasAnaliseIxc),
		);
	}

	return buildFilter(conditions);
}

function buildPessoaJuridicaFilter(
	filters?: PessoaJuridicaFilters,
): Record<string, unknown> | undefined {
	if (!filters) return undefined;

	const conditions: Record<string, unknown>[] = [];

	if (filters.f_razao_social) {
		conditions.push(includes("f_razao_social", filters.f_razao_social));
	}

	if (filters.f_cnpj) {
		conditions.push(includes("f_cnpj", filters.f_cnpj));
	}

	return buildFilter(conditions);
}

export async function fetchPessoasFisicas(
	params: PessoaFisicaListParams = {},
): Promise<PessoaFisicaResponse> {
	try {
		const {
			page = 1,
			pageSize = 15,
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
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch pessoas físicas", { error: message });
		throw error;
	}
}

export async function fetchPessoasJuridicas(
	params: PessoaJuridicaListParams = {},
): Promise<PessoaJuridicaResponse> {
	try {
		const {
			page = 1,
			pageSize = 15,
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
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch pessoas jurídicas", { error: message });
		throw error;
	}
}

// ---------------------------------------------------------------------------
// Search helpers (for PF/PJ combobox lookups)
// ---------------------------------------------------------------------------

export async function searchPessoasFisicas(
	query: string,
): Promise<Pick<Pessoas, "id" | "f_nome" | "f_cpf" | "f_credito">[]> {
	if (!query || query.length < 2) return [];

	try {
		return await doSearchPessoasFisicas(query);
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to search pessoas físicas", { error: message });
		return [];
	}
}

async function doSearchPessoasFisicas(
	query: string,
): Promise<Pick<Pessoas, "id" | "f_nome" | "f_cpf" | "f_credito">[]> {
	const filter = buildFilter([
		includes("f_nome", query),
		includes("f_cpf", query),
	]);

	const response = await nocobaseRepository.list("t_pessoas", {
		page: 1,
		pageSize: 20,
		filter,
		appends: [] as Array<keyof CollectionRelationsMap["t_pessoas"]>,
	});

	return (response.data as Pessoas[]).map((p) => ({
		id: p.id,
		f_nome: p.f_nome,
		f_cpf: p.f_cpf,
		f_credito: p.f_credito,
	}));
}

export async function searchPessoasJuridicas(
	query: string,
): Promise<Pick<Empresas, "id" | "f_razao_social" | "f_cnpj">[]> {
	if (!query || query.length < 2) return [];

	try {
		const filter = buildFilter([
			includes("f_razao_social", query),
			includes("f_cnpj", query),
		]);

		const response = await nocobaseRepository.list("t_empresas", {
			page: 1,
			pageSize: 20,
			filter,
			appends: [] as Array<keyof CollectionRelationsMap["t_empresas"]>,
		});

		return (response.data as Empresas[]).map((e) => ({
			id: e.id,
			f_razao_social: e.f_razao_social,
			f_cnpj: e.f_cnpj,
		}));
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to search pessoas jurídicas", { error: message });
		return [];
	}
}
