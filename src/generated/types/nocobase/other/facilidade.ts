/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_FACILIDADE_TABLE_NAME = "t_facilidade";

export interface Facilidade {
	id: number;
	f_descricao: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface FacilidadeRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type FacilidadeRelationKey = keyof FacilidadeRelations;
