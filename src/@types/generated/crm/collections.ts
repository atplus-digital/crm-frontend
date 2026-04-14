/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import type {
	Empresas,
	EmpresasRelations,
	Pessoas,
	PessoasRelations,
} from "./index";
import type { Negociacoes, NegociacoesRelations } from "./negociacoes";
import type { Users, UsersRelations } from "./users";

// Tipo union com todas as collections disponíveis
export type CollectionName =
	| "t_negociacoes"
	| "users"
	| "t_pessoas"
	| "t_empresas";

export interface CollectionMap {
	t_negociacoes: Negociacoes;
	users: Users;
	t_pessoas: Pessoas;
	t_empresas: Empresas;
}

export interface CollectionRelationsMap {
	t_negociacoes: NegociacoesRelations;
	users: UsersRelations;
	t_pessoas: PessoasRelations;
	t_empresas: EmpresasRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = [
	"t_negociacoes",
	"users",
	"t_pessoas",
	"t_empresas",
] as const;
