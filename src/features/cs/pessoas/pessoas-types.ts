import type {
	Empresas,
	EmpresasRelations,
} from "#/generated/nocobase/empresas";
import type {
	Pessoas,
	PessoasAnaliseIxc,
	PessoasRelations,
} from "#/generated/nocobase/pessoas";
import type { ListParams, PaginatedResponse } from "#/repositories/types";

export type PessoaFisicaFilters = Pick<Pessoas, "f_nome" | "f_cpf"> & {
	f_analise_ixc?: PessoasAnaliseIxc | "all";
};

export type PessoaJuridicaFilters = Pick<Empresas, "f_razao_social" | "f_cnpj">;

export type PessoaFisicaListParams = ListParams & {
	filters?: PessoaFisicaFilters;
	appends?: Array<keyof PessoasRelations>;
};

export type PessoaJuridicaListParams = ListParams & {
	filters?: PessoaJuridicaFilters;
	appends?: Array<keyof EmpresasRelations>;
};

export type PessoaFisicaResponse = PaginatedResponse<Pessoas>;
export type PessoaJuridicaResponse = PaginatedResponse<Empresas>;

// ---------------------------------------------------------------------------
// Table Filters (UI-facing types)
// ---------------------------------------------------------------------------

export interface PessoaFisicaTableFilters {
	[key: string]: string;
	f_nome: string;
	f_cpf: string;
	f_analise_ixc: NonNullable<PessoaFisicaFilters["f_analise_ixc"]>;
}

export interface PessoaJuridicaTableFilters {
	[key: string]: string;
	f_razao_social: string;
	f_cnpj: string;
}

export const DEFAULT_PESSOA_FISICA_TABLE_FILTERS: PessoaFisicaTableFilters = {
	f_nome: "",
	f_cpf: "",
	f_analise_ixc: "all",
};

export const DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS: PessoaJuridicaTableFilters =
	{
		f_razao_social: "",
		f_cnpj: "",
	};

export function toPessoaFisicaFilters(
	filters: PessoaFisicaTableFilters,
): PessoaFisicaFilters {
	return {
		f_nome: filters.f_nome,
		f_cpf: filters.f_cpf,
		f_analise_ixc: filters.f_analise_ixc,
	};
}

export function toPessoaJuridicaFilters(
	filters: PessoaJuridicaTableFilters,
): PessoaJuridicaFilters {
	return {
		f_razao_social: filters.f_razao_social,
		f_cnpj: filters.f_cnpj,
	};
}
