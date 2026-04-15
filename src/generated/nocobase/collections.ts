/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import type { Empresas, EmpresasRelations } from "./empresas";
import type { Negociacoes, NegociacoesRelations } from "./negociacoes";
import type { Pessoas, PessoasRelations } from "./pessoas";
import type { Users, UsersRelations } from "./users";

// Tipo union com todas as collections disponíveis
export type CollectionName =
	| "t_empresas"
	| "t_negociacoes"
	| "t_pessoas"
	| "users";

export interface CollectionMap {
	t_empresas: Empresas;
	t_negociacoes: Negociacoes;
	t_pessoas: Pessoas;
	users: Users;
}

export interface CollectionRelationsMap {
	t_empresas: EmpresasRelations;
	t_negociacoes: NegociacoesRelations;
	t_pessoas: PessoasRelations;
	users: UsersRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = [
	"t_empresas",
	"t_negociacoes",
	"t_pessoas",
	"users",
] as const;
