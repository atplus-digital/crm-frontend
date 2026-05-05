// Tipos para Contratos IXC
// ⚠️ Usando tipos gerados automaticamente como fonte de verdade

import type { ClienteContrato } from "#/generated/types/d_db_ixcsoft/cliente-contrato";
import type { FnAreceber } from "#/generated/types/d_db_ixcsoft/fn-areceber";
import type { LinhaMvno } from "#/generated/types/d_db_ixcsoft/linha-mvno";
import type { SuTicket } from "#/generated/types/d_db_ixcsoft/su-ticket";
import type { VdContratosProdutos } from "#/generated/types/d_db_ixcsoft/vd-contratos-produtos";
import type { CrmTrocaTitularidade } from "#/generated/types/nocobase/crm-troca-titularidade";
import type { DadosAdicionaisClienteContrato } from "#/generated/types/nocobase/other/dados-adicionais-cliente-contrato";
import type { RegistrosDeContato } from "#/generated/types/nocobase/registros-de-contato";
import type { ListParams } from "#/repositories/types";

// ---------------------------------------------------------------------------
// Status (enumerações de domínio - não geradas pelo IXC)
// ---------------------------------------------------------------------------

export const ContratoStatus = {
	Ativo: "A",
	Inativo: "I",
	Desativado: "D",
	Cancelado: "C",
} as const;

export type ContratoStatus =
	(typeof ContratoStatus)[keyof typeof ContratoStatus];

export const CONTRATO_STATUS_LABELS: Record<ContratoStatus, string> = {
	[ContratoStatus.Ativo]: "Ativo",
	[ContratoStatus.Inativo]: "Inativo",
	[ContratoStatus.Desativado]: "Desativado",
	[ContratoStatus.Cancelado]: "Cancelado",
};

export const InternetStatus = {
	Ativo: "A",
	Desconectado: "D",
	FinanceiroAtraso: "FA",
} as const;

export type InternetStatus =
	(typeof InternetStatus)[keyof typeof InternetStatus];

export const INTERNET_STATUS_LABELS: Record<InternetStatus, string> = {
	[InternetStatus.Ativo]: "Ativo",
	[InternetStatus.Desconectado]: "Desconectado",
	[InternetStatus.FinanceiroAtraso]: "Financeiro Atraso",
};

// ---------------------------------------------------------------------------
// Tipos gerados (usados diretamente na UI e camada de serviço)
// ---------------------------------------------------------------------------

/** Contrato - tipo gerado completo do IXC (cliente_contrato) */
export type Contrato = ClienteContrato;

/** Cliente do contrato - tipo gerado completo do IXC (cliente) */
export type Cliente = import("#/generated/types/d_db_ixcsoft/cliente").Cliente;

/** Contrato com dados do cliente (appends) */
export type ContratoWithCliente = Contrato & {
	f_nc_cliente?: Cliente | null;
};

// ---------------------------------------------------------------------------
// Dados Adicionais (NocoBase)
// ---------------------------------------------------------------------------

/** Dados adicionais do contrato - tipo gerado completo */
export type DadosAdicionaisContrato = DadosAdicionaisClienteContrato;

export {
	DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS,
	DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS,
} from "#/generated/types/nocobase/other/dados-adicionais-cliente-contrato";

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface ContratoFilters {
	cpfCnpj?: string;
	nome?: string;
	status?: ContratoStatus;
	contratoId?: number;
}

export type ContratoListParams = Omit<ListParams, "filter"> & {
	filters?: ContratoFilters;
	appends?: string[];
};

/** Linha móvel - tipo gerado completo do IXC (linha_mvno) */
export type LinhaMovel = LinhaMvno;

/** Troca de titularidade - tipo gerado completo do NocoBase */
export type TrocaTitularidade = CrmTrocaTitularidade;

/** Atendimento IXC - tipo gerado completo (su_ticket) */
export type AtendimentoIXC = SuTicket;

/** Registro de contato - tipo gerado completo do NocoBase */
export type RegistroContato = RegistrosDeContato;

/** Produto do contrato - tipo gerado completo do IXC (vd_contratos_produtos) */
export type ProdutoContrato = VdContratosProdutos;

/** Fatura - tipo gerado completo do IXC (fn_areceber) */
export type Fatura = FnAreceber;

// ---------------------------------------------------------------------------
// Table Filters (UI-facing types)
// ---------------------------------------------------------------------------

export interface ContratosTableFilters {
	[key: string]: string;
	cpfCnpj: string;
	nome: string;
	status: string;
	contratoId: string;
}

export const DEFAULT_CONTRATOS_TABLE_FILTERS: ContratosTableFilters = {
	cpfCnpj: "",
	nome: "",
	status: "all",
	contratoId: "",
};

export function toContratoFilters(
	filters: ContratosTableFilters,
): ContratoFilters {
	return {
		cpfCnpj: filters.cpfCnpj || undefined,
		nome: filters.nome || undefined,
		status: (filters.status === "all"
			? undefined
			: filters.status) as ContratoFilters["status"],
		contratoId: filters.contratoId ? Number(filters.contratoId) : undefined,
	};
}
