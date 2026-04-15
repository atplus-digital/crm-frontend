/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "./users";

export const T_PESSOAS_TABLE_NAME = "t_pessoas";

export interface Pessoas {
	id: number;
	f_analise_ixc: string;
	f_cpf: string;
	f_credito: string;
	f_data_nascimento: string;
	f_nome: string;
	f_sexo: string;
	f_vky78cvjtdw: number;
	updatedAt: string;
	createdAt: string;
}

export interface PessoasRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type PessoasRelationKey = keyof PessoasRelations;
