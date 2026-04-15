/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_EMPRESAS_TABLE_NAME = "t_empresas";

export interface Empresas {
	id: number;
	f_cnpj: string;
	f_cpf_responsavel: string;
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
