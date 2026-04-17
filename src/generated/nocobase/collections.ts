/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
} from "./crm-troca-titularidade";
import type { Empresas, EmpresasRelations } from "./empresas";
import type { Negociacoes, NegociacoesRelations } from "./negociacoes";
import type { Pessoas, PessoasRelations } from "./pessoas";
import type {
	RegistrosDeContato,
	RegistrosDeContatoRelations,
} from "./registros-de-contato";
import type { Users, UsersRelations } from "./users";

// Tipo union com todas as collections disponíveis
export type CollectionName =
	| "t_crm_troca_titularidade"
	| "t_empresas"
	| "t_negociacoes"
	| "t_pessoas"
	| "t_registros_de_contato"
	| "users";

export interface CollectionMap {
	t_crm_troca_titularidade: CrmTrocaTitularidade;
	t_empresas: Empresas;
	t_negociacoes: Negociacoes;
	t_pessoas: Pessoas;
	t_registros_de_contato: RegistrosDeContato;
	users: Users;
}

export interface CollectionRelationsMap {
	t_crm_troca_titularidade: CrmTrocaTitularidadeRelations;
	t_empresas: EmpresasRelations;
	t_negociacoes: NegociacoesRelations;
	t_pessoas: PessoasRelations;
	t_registros_de_contato: RegistrosDeContatoRelations;
	users: UsersRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = [
	"t_crm_troca_titularidade",
	"t_empresas",
	"t_negociacoes",
	"t_pessoas",
	"t_registros_de_contato",
	"users",
] as const;
