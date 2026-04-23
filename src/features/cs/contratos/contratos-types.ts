// Tipos para Contratos IXC
// ⚠️ Usando tipos gerados automaticamente como fonte de verdade

import type { Cliente } from "#/generated/ixc/cliente";
import type { ClienteContrato } from "#/generated/ixc/cliente-contrato";
import type { FnAreceber } from "#/generated/ixc/fn-areceber";
import type { LinhaMvno } from "#/generated/ixc/linha-mvno";
import type { SuTicket } from "#/generated/ixc/su-ticket";
import type { VdContratosProdutos } from "#/generated/ixc/vd-contratos-produtos";
import type { CrmTrocaTitularidade } from "#/generated/nocobase/crm-troca-titularidade";
import type { RegistrosDeContato } from "#/generated/nocobase/registros-de-contato";
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
// Tipos derivados dos gerados
// ---------------------------------------------------------------------------

/**
 * Contrato - baseado no tipo gerado ClienteContrato do IXC
 * Pick dos campos mais utilizados na UI
 */
export type Contrato = Pick<
	ClienteContrato,
	| "id"
	| "id_cliente"
	| "id_vd_contrato"
	| "contrato"
	| "status"
	| "status_internet"
	| "ultima_atualizacao"
	| "data"
	| "data_ativacao"
	| "data_cancelamento"
	| "data_validade"
	| "pago_ate_data"
	| "email_cobranca"
	| "valor_unitario"
	| "fidelidade"
	| "tipo_cobranca"
	| "tipo"
	| "cidade"
	| "bairro"
	| "cep"
	| "endereco"
	| "numero"
	| "complemento"
>;

/**
 * Cliente do contrato - derivado do tipo gerado de IXC (`cliente`)
 */
export type ContratoCliente = Pick<
	Cliente,
	| "id"
	| "razao"
	| "cnpj_cpf"
	| "fantasia"
	| "email"
	| "telefone_celular"
	| "tipo_pessoa"
>;

/**
 * Contrato com dados do cliente
 */
export type ContratoWithCliente = Contrato & {
	f_nc_cliente?: ContratoCliente | null;
};

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

export type LinhaMovel = Pick<
	LinhaMvno,
	| "id"
	| "id_contrato"
	| "ddd_telefone"
	| "numero_telefone"
	| "dia_recorrencia"
	| "portabilidade"
	| "simcard"
>;

export type TrocaTitularidade = {
	id: CrmTrocaTitularidade["id"];
	id_contrato: CrmTrocaTitularidade["f_id_contrato"];
	cedente: CrmTrocaTitularidade["f_cedente"];
	documento_cedente: CrmTrocaTitularidade["f_cedente_documento"];
	cessionario: CrmTrocaTitularidade["f_cessionario"];
	documento_cessionario: CrmTrocaTitularidade["f_cessionario_documento"];
	status: CrmTrocaTitularidade["f_status"];
};

export type AtendimentoIXC = {
	id: SuTicket["id"];
	id_contrato: SuTicket["id_contrato"];
	status: SuTicket["status"];
	assunto: SuTicket["titulo"];
	descricao: SuTicket["menssagem"];
	data_criacao: SuTicket["data_criacao"];
	data_ultima_alteracao: SuTicket["data_ultima_alteracao"];
};

export type RegistroContato = {
	id: RegistrosDeContato["id"];
	id_contrato: RegistrosDeContato["f_fk_id_contrato"];
	categoria: RegistrosDeContato["f_categoria"];
	motivo_contato: RegistrosDeContato["f_resumo_contato"];
	nota_vendas: RegistrosDeContato["f_nota_vendas"];
	nota_tecnico: RegistrosDeContato["f_nota_tecnico"];
	pendencia: RegistrosDeContato["f_ha_pendencia"];
	data_criacao: RegistrosDeContato["createdAt"];
	criado_por: string;
};

export type ProdutoContrato = Pick<
	VdContratosProdutos,
	"id" | "id_contrato" | "descricao" | "valor_unit" | "qtde"
>;

export type Fatura = Pick<
	FnAreceber,
	"id" | "id_contrato" | "status" | "valor" | "data_vencimento"
> & {
	data_pagamento: FnAreceber["pagamento_data"] | null;
};

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
