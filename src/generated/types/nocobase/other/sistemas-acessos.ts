/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_SISTEMAS_ACESSOS_TABLE_NAME = "t_sistemas_acessos";

export interface SistemasAcessos {
	id: number;
	f_fk_funcionarios: unknown[];
	f_sistemas_acessos: string;
	f_url: string;
	updatedAt: string;
	createdAt: string;
}

export interface SistemasAcessosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	updatedBy?: Users | null;
}

export type SistemasAcessosRelationKey = keyof SistemasAcessosRelations;
