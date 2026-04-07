/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { UsersBase } from "./users";

export interface EmpresasBase {
	createdAt: string;
	f_cnpj: string;
	f_cpf_responsavel: string;
	f_email_responsavel: string;
	f_fundacao: string;
	f_ie: string;
	f_nome_fantasia: string;
	f_razao_social: string;
	f_responsavel: string;
	id: number;
	updatedAt: string;
}

export interface EmpresasRelations {
	createdBy?: UsersBase | null;
	updatedBy?: UsersBase | null;
}

export type EmpresasRelationKey = keyof EmpresasRelations;
