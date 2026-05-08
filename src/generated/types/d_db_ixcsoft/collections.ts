/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import type { Cidade, CidadeRelations } from "./cidade";
import type { Cliente, ClienteRelations } from "./cliente";
import type {
	ClienteContrato,
	ClienteContratoRelations,
} from "./cliente-contrato";
import type { FnAreceber, FnAreceberRelations } from "./fn-areceber";
import type { LinhaMvno, LinhaMvnoRelations } from "./linha-mvno";
import type { Radusuarios, RadusuariosRelations } from "./radusuarios";
import type { SuTicket, SuTicketRelations } from "./su-ticket";
import type { Uf, UfRelations } from "./uf";
import type {
	VdContratosProdutos,
	VdContratosProdutosRelations,
} from "./vd-contratos-produtos";

// Tipo union com todas as collections disponíveis
export type CollectionName =
	| "cidade"
	| "cliente"
	| "cliente_contrato"
	| "fn_areceber"
	| "linha_mvno"
	| "radusuarios"
	| "su_ticket"
	| "uf"
	| "vd_contratos_produtos";

export interface CollectionMap {
	cidade: Cidade;
	cliente: Cliente;
	cliente_contrato: ClienteContrato;
	fn_areceber: FnAreceber;
	linha_mvno: LinhaMvno;
	radusuarios: Radusuarios;
	su_ticket: SuTicket;
	uf: Uf;
	vd_contratos_produtos: VdContratosProdutos;
}

export interface CollectionRelationsMap {
	cidade: CidadeRelations;
	cliente: ClienteRelations;
	cliente_contrato: ClienteContratoRelations;
	fn_areceber: FnAreceberRelations;
	linha_mvno: LinhaMvnoRelations;
	radusuarios: RadusuariosRelations;
	su_ticket: SuTicketRelations;
	uf: UfRelations;
	vd_contratos_produtos: VdContratosProdutosRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = [
	"cidade",
	"cliente",
	"cliente_contrato",
	"fn_areceber",
	"linha_mvno",
	"radusuarios",
	"su_ticket",
	"uf",
	"vd_contratos_produtos",
] as const;
