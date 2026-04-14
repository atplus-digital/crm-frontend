// ---------------------------------------------------------------------------
// Pessoa Física
// ---------------------------------------------------------------------------

export interface PessoaFisica {
	id: number;
	f_nome: string;
	f_cpf: string;
	f_rg?: string | null;
	f_data_nascimento?: string | null;
	f_email?: string | null;
	f_telefone?: string | null;
	f_celular?: string | null;
	f_endereco?: string | null;
	f_numero?: string | null;
	f_complemento?: string | null;
	f_bairro?: string | null;
	f_cidade?: string | null;
	f_estado?: string | null;
	f_cep?: string | null;
	createdAt?: string;
	updatedAt?: string;
}

// ---------------------------------------------------------------------------
// Pessoa Jurídica
// ---------------------------------------------------------------------------

export interface PessoaJuridica {
	id: number;
	f_razao_social: string;
	f_nome_fantasia?: string | null;
	f_cnpj: string;
	f_inscricao_estadual?: string | null;
	f_email?: string | null;
	f_telefone?: string | null;
	f_celular?: string | null;
	f_endereco?: string | null;
	f_numero?: string | null;
	f_complemento?: string | null;
	f_bairro?: string | null;
	f_cidade?: string | null;
	f_estado?: string | null;
	f_cep?: string | null;
	createdAt?: string;
	updatedAt?: string;
}

// ---------------------------------------------------------------------------
// Types unificadas para Pessoa (Física ou Jurídica)
// ---------------------------------------------------------------------------

export type Pessoa = PessoaFisica | PessoaJuridica;

export interface PessoaFisicaFilters {
	nome?: string;
	cpf?: string;
	email?: string;
	telefone?: string;
}

export interface PessoaJuridicaFilters {
	razaoSocial?: string;
	nomeFantasia?: string;
	cnpj?: string;
	email?: string;
}

export interface PessoaListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: PessoaFisicaFilters | PessoaJuridicaFilters;
	type?: "fisica" | "juridica";
}

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export interface PaginatedResponse<T> {
	data: T[];
	meta: {
		total?: number;
		totalPage?: number;
		page?: number;
		pageSize?: number;
		filterCount?: number;
		print?: number;
		[key: string]: unknown;
	};
}
