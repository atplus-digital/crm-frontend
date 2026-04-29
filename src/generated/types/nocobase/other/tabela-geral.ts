/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_TABELA_GERAL_TABLE_NAME = "t_tabela_geral";

export interface TabelaGeral {
	id: number;
	updatedAt: string;
	createdAt: string;
}

export interface TabelaGeralRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TabelaGeralRelationKey = keyof TabelaGeralRelations;
