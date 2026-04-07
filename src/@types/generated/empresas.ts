/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { UsersBase } from "./users";

export interface EmpresasBase {
	createdAt: string;
	createdBy: UsersBase | null;
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
	updatedBy: UsersBase | null;
}

export type EmpresasRelations = Record<string, never>;

export type EmpresasRelationKey = keyof EmpresasRelations;
