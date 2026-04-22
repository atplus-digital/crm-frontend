/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_EMPRESAS_TABLE_NAME = "t_empresas";

export const EMPRESAS_ANALISEIXC_LABELS = {
	"0": "Com Pendências",
	"1": "Sem Pendências",
} as const;

export const EMPRESAS_CREDITO_LABELS = {
	"1": "Aprovado",
	"2": "Aprovado com Atenção",
	"9": "Negado",
} as const;

export type EmpresasAnaliseIxc = keyof typeof EMPRESAS_ANALISEIXC_LABELS;

export type EmpresasCredito = keyof typeof EMPRESAS_CREDITO_LABELS;

export interface Empresas {
	id: number;
	f_analise_ixc: EmpresasAnaliseIxc;
	f_cnpj: string;
	f_cpf_responsavel: string;
	f_credito: EmpresasCredito;
	f_email_responsavel: string;
	f_fundacao: string;
	f_ie: string;
	f_nome_fantasia: string;
	f_razao_social: string;
	f_responsavel: string;
	updatedAt: string;
	createdAt: string;
}

export interface EmpresasRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type EmpresasRelationKey = keyof EmpresasRelations;
