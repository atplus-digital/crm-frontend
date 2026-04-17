// Tipos para Pessoas Físicas e Jurídicas integradas com NocoBase
// ⚠️ Usando tipos gerados automaticamente como fonte de verdade

import type {
	Empresas,
	EmpresasRelations,
} from "#/generated/nocobase/empresas";
import type { Pessoas, PessoasRelations } from "#/generated/nocobase/pessoas";
import type { Users } from "#/generated/nocobase/users";
import type { PaginatedResponse } from "#/lib/api-types";

// Re-export PaginatedResponse para compatibilidade
export type { PaginatedResponse };

// ---------------------------------------------------------------------------
// Pessoa Física (baseado no tipo gerado Pessoas)
// ---------------------------------------------------------------------------

/**
 * Pessoa Física - tipo principal gerado pelo NocoBase
 * Usa campos com prefixo 'f_' conforme padrão NocoBase
 */
export type PessoaFisica = Pessoas;

/**
 * Relacionamentos de Pessoa Física
 */
export type PessoaFisicaRelations = PessoasRelations;

// ---------------------------------------------------------------------------
// Pessoa Jurídica (baseado no tipo gerado Empresas)
// ---------------------------------------------------------------------------

/**
 * Pessoa Jurídica - tipo principal gerado pelo NocoBase
 * Usa campos com prefixo 'f_' conforme padrão NocoBase
 */
export type PessoaJuridica = Empresas;

/**
 * Relacionamentos de Pessoa Jurídica
 */
export type PessoaJuridicaRelations = EmpresasRelations;

// ---------------------------------------------------------------------------
// Utility Types - Campos específicos para UI/Forms
// ---------------------------------------------------------------------------

/**
 * Campos selecionados de Pessoa Física para exibição em listas/tables
 * Nota: Não estende Pessoas diretamente pois alguns campos têm tipos mais flexíveis para UI
 */
export interface PessoaFisicaListItem {
	id: number;
	createdAt?: string | null;
	f_nome: string;
	f_cpf?: string | null;
	f_data_nascimento?: string | null;
	f_credito?: "Aprovado" | "Aprovado com Atenção" | "Negado" | null;
	f_analise_ixc?: "Sem Pendências" | "Com Pendências" | null;
	f_sexo?: "MASCULINO" | "FEMININO" | "INDEFINIDO" | null;
	f_email?: string | null;
	f_telefone?: string | null;
	createdBy?: Users | null;
}

/**
 * Campos selecionados de Pessoa Jurídica para exibição em listas/tables
 */
export interface PessoaJuridicaListItem {
	id: number;
	f_razao_social: string;
	f_nome_fantasia?: string | null;
	f_cnpj?: string | null;
	f_ie?: string | null;
	f_responsavel?: string | null;
	f_email_responsavel?: string | null;
	f_email?: string | null;
	f_telefone?: string | null;
	createdBy?: Users | null;
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
	appends?: Array<keyof PessoasRelations>;
}

export interface PessoaJuridicaListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: PessoaJuridicaFilters;
	appends?: Array<keyof EmpresasRelations>;
}

// ---------------------------------------------------------------------------
// Response Types
// ---------------------------------------------------------------------------

export type PessoaFisicaResponse = PaginatedResponse<PessoaFisica>;
export type PessoaJuridicaResponse = PaginatedResponse<PessoaJuridica>;
