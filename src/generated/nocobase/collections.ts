/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import type { Negociacoes, NegociacoesRelations } from "./negociacoes";
import type { Users, UsersRelations } from "./users";

// Tipo union com todas as collections disponíveis
export type CollectionName = "t_negociacoes" | "users";

export interface CollectionMap {
	t_negociacoes: Negociacoes;
	users: Users;
}

export interface CollectionRelationsMap {
	t_negociacoes: NegociacoesRelations;
	users: UsersRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = ["t_negociacoes", "users"] as const;
