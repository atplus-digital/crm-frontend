/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import type { Cliente, ClienteRelations } from "./cliente";
import type {
	ClienteContrato,
	ClienteContratoRelations,
} from "./cliente-contrato";
import type { FnAreceber, FnAreceberRelations } from "./fn-areceber";
import type { LinhaMvno, LinhaMvnoRelations } from "./linha-mvno";
import type { SuTicket, SuTicketRelations } from "./su-ticket";
import type {
	VdContratosProdutos,
	VdContratosProdutosRelations,
} from "./vd-contratos-produtos";

// Tipo union com todas as collections disponíveis
export type CollectionName =
	| "cliente"
	| "cliente_contrato"
	| "fn_areceber"
	| "linha_mvno"
	| "su_ticket"
	| "vd_contratos_produtos";

export interface CollectionMap {
	cliente: Cliente;
	cliente_contrato: ClienteContrato;
	fn_areceber: FnAreceber;
	linha_mvno: LinhaMvno;
	su_ticket: SuTicket;
	vd_contratos_produtos: VdContratosProdutos;
}

export interface CollectionRelationsMap {
	cliente: ClienteRelations;
	cliente_contrato: ClienteContratoRelations;
	fn_areceber: FnAreceberRelations;
	linha_mvno: LinhaMvnoRelations;
	su_ticket: SuTicketRelations;
	vd_contratos_produtos: VdContratosProdutosRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = [
	"cliente",
	"cliente_contrato",
	"fn_areceber",
	"linha_mvno",
	"su_ticket",
	"vd_contratos_produtos",
] as const;
