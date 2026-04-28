/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const F_CONTATOS_TABLE_NAME = "f_contatos";

export interface FContatos {
	id: number;
	f_contato: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface FContatosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type FContatosRelationKey = keyof FContatosRelations;
