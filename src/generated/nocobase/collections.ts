/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import type {
	ComentariosSuspensaoDeContrato,
	ComentariosSuspensaoDeContratoRelations,
} from "./comentarios-suspensao-de-contrato";
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
import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
} from "./suspensao-contrato";
import type { TrocaEndereco, TrocaEnderecoRelations } from "./troca-endereco";
import type { Users, UsersRelations } from "./users";

// Tipo union com todas as collections disponíveis
export type CollectionName =
	| "t_comentarios_suspensao_de_contrato"
	| "t_crm_troca_titularidade"
	| "t_empresas"
	| "t_negociacoes"
	| "t_pessoas"
	| "t_registros_de_contato"
	| "t_suspensao_contrato"
	| "t_troca_endereco"
	| "users";

export interface CollectionMap {
	t_comentarios_suspensao_de_contrato: ComentariosSuspensaoDeContrato;
	t_crm_troca_titularidade: CrmTrocaTitularidade;
	t_empresas: Empresas;
	t_negociacoes: Negociacoes;
	t_pessoas: Pessoas;
	t_registros_de_contato: RegistrosDeContato;
	t_suspensao_contrato: SuspensaoContrato;
	t_troca_endereco: TrocaEndereco;
	users: Users;
}

export interface CollectionRelationsMap {
	t_comentarios_suspensao_de_contrato: ComentariosSuspensaoDeContratoRelations;
	t_crm_troca_titularidade: CrmTrocaTitularidadeRelations;
	t_empresas: EmpresasRelations;
	t_negociacoes: NegociacoesRelations;
	t_pessoas: PessoasRelations;
	t_registros_de_contato: RegistrosDeContatoRelations;
	t_suspensao_contrato: SuspensaoContratoRelations;
	t_troca_endereco: TrocaEnderecoRelations;
	users: UsersRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = [
	"t_comentarios_suspensao_de_contrato",
	"t_crm_troca_titularidade",
	"t_empresas",
	"t_negociacoes",
	"t_pessoas",
	"t_registros_de_contato",
	"t_suspensao_contrato",
	"t_troca_endereco",
	"users",
] as const;
