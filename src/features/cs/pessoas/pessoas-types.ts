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
