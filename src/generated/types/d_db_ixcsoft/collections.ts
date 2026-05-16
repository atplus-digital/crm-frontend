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
import type { CrmCobranca, CrmCobrancaRelations } from "./other/crm-cobranca";
import type {
	FnCarteiraCobranca,
	FnCarteiraCobrancaRelations,
} from "./other/fn-carteira-cobranca";
import type { Funcionarios, FuncionariosRelations } from "./other/funcionarios";
import type { Produtos, ProdutosRelations } from "./other/produtos";
import type { RadpopRadio, RadpopRadioRelations } from "./other/radpop-radio";
import type {
	SuDiagnostico,
	SuDiagnosticoRelations,
} from "./other/su-diagnostico";
import type {
	SuOssAssunto,
	SuOssAssuntoRelations,
} from "./other/su-oss-assunto";
import type {
	SuOssChamado,
	SuOssChamadoRelations,
} from "./other/su-oss-chamado";
import type {
	SuTicketSetor,
	SuTicketSetorRelations,
} from "./other/su-ticket-setor";
import type { VdContratos, VdContratosRelations } from "./other/vd-contratos";
import type { Vendedor, VendedorRelations } from "./other/vendedor";
import type { WflProcesso, WflProcessoRelations } from "./other/wfl-processo";
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
	| "crm_cobranca"
	| "fn_areceber"
	| "fn_carteira_cobranca"
	| "funcionarios"
	| "linha_mvno"
	| "produtos"
	| "radpop_radio"
	| "radusuarios"
	| "su_diagnostico"
	| "su_oss_assunto"
	| "su_oss_chamado"
	| "su_ticket"
	| "su_ticket_setor"
	| "uf"
	| "vd_contratos"
	| "vd_contratos_produtos"
	| "vendedor"
	| "wfl_processo";

export interface CollectionMap {
	cidade: Cidade;
	cliente: Cliente;
	cliente_contrato: ClienteContrato;
	crm_cobranca: CrmCobranca;
	fn_areceber: FnAreceber;
	fn_carteira_cobranca: FnCarteiraCobranca;
	funcionarios: Funcionarios;
	linha_mvno: LinhaMvno;
	produtos: Produtos;
	radpop_radio: RadpopRadio;
	radusuarios: Radusuarios;
	su_diagnostico: SuDiagnostico;
	su_oss_assunto: SuOssAssunto;
	su_oss_chamado: SuOssChamado;
	su_ticket: SuTicket;
	su_ticket_setor: SuTicketSetor;
	uf: Uf;
	vd_contratos: VdContratos;
	vd_contratos_produtos: VdContratosProdutos;
	vendedor: Vendedor;
	wfl_processo: WflProcesso;
}

export interface CollectionRelationsMap {
	cidade: CidadeRelations;
	cliente: ClienteRelations;
	cliente_contrato: ClienteContratoRelations;
	crm_cobranca: CrmCobrancaRelations;
	fn_areceber: FnAreceberRelations;
	fn_carteira_cobranca: FnCarteiraCobrancaRelations;
	funcionarios: FuncionariosRelations;
	linha_mvno: LinhaMvnoRelations;
	produtos: ProdutosRelations;
	radpop_radio: RadpopRadioRelations;
	radusuarios: RadusuariosRelations;
	su_diagnostico: SuDiagnosticoRelations;
	su_oss_assunto: SuOssAssuntoRelations;
	su_oss_chamado: SuOssChamadoRelations;
	su_ticket: SuTicketRelations;
	su_ticket_setor: SuTicketSetorRelations;
	uf: UfRelations;
	vd_contratos: VdContratosRelations;
	vd_contratos_produtos: VdContratosProdutosRelations;
	vendedor: VendedorRelations;
	wfl_processo: WflProcessoRelations;
}

// Lista de todas as collections (para uso em runtime)
export const COLLECTIONS = [
	"cidade",
	"cliente",
	"cliente_contrato",
	"crm_cobranca",
	"fn_areceber",
	"fn_carteira_cobranca",
	"funcionarios",
	"linha_mvno",
	"produtos",
	"radpop_radio",
	"radusuarios",
	"su_diagnostico",
	"su_oss_assunto",
	"su_oss_chamado",
	"su_ticket",
	"su_ticket_setor",
	"uf",
	"vd_contratos",
	"vd_contratos_produtos",
	"vendedor",
	"wfl_processo",
] as const;
