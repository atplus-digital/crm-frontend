// Tipos para Pessoas Físicas e Jurídicas integradas com NocoBase

import type { PaginatedResponse } from "./negociacoes-types";

// ---------------------------------------------------------------------------
// Pessoa Física
// ---------------------------------------------------------------------------

export interface PessoaFisica {
	id: number;
	createdAt: string;
	updatedAt: string;
	f_nome: string;
	f_cpf?: string;
	f_data_nascimento?: string;
	f_credito?: "Aprovado" | "Aprovado com Atenção" | "Negado" | null;
	f_analise_ixc?: "Sem Pendências" | "Com Pendências" | null;
	f_sexo?: "MASCULINO" | "FEMININO" | "INDEFINIDO";
	f_email?: string;
	f_telefone?: string;
	createdBy?: {
		id: number;
		nickname: string;
		email?: string;
	};
}

// ---------------------------------------------------------------------------
// Pessoa Jurídica
// ---------------------------------------------------------------------------

export interface PessoaJuridica {
	id: number;
	createdAt: string;
	updatedAt: string;
	f_razao_social: string;
	f_nome_fantasia?: string;
	f_cnpj?: string;
	f_ie?: string;
	f_responsavel?: string;
	f_email_responsavel?: string;
	f_email?: string;
	f_telefone?: string;
	createdBy?: {
		id: number;
		nickname: string;
		email?: string;
	};
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface PessoaFisicaFilters {
	nome?: string;
	cpf?: string;
	analiseIxc?: "all" | "Sem Pendências" | "Com Pendências";
}

export interface PessoaJuridicaFilters {
	razaoSocial?: string;
	cnpj?: string;
}

// ---------------------------------------------------------------------------
// List Params
// ---------------------------------------------------------------------------

export interface PessoaFisicaListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: PessoaFisicaFilters;
	appends?: string[];
}

export interface PessoaJuridicaListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: PessoaJuridicaFilters;
	appends?: string[];
}

// ---------------------------------------------------------------------------
// Response Types
// ---------------------------------------------------------------------------

export type PessoaFisicaResponse = PaginatedResponse<PessoaFisica>;
export type PessoaJuridicaResponse = PaginatedResponse<PessoaJuridica>;
