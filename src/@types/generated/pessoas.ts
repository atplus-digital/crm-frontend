/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { UsersBase } from "./users";

export interface PessoasBase {
	createdAt: string;
	f_analise_ixc: string;
	f_cpf: string;
	f_credito: string;
	f_data_nascimento: string;
	f_nome: string;
	f_sexo: string;
	f_vky78cvjtdw: number;
	id: number;
	updatedAt: string;
}

export interface PessoasRelations {
	createdBy?: UsersBase | null;
	updatedBy?: UsersBase | null;
}

export type PessoasRelationKey = keyof PessoasRelations;
