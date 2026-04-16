// Tipos para Contratos IXC
// ⚠️ Usando tipos gerados automaticamente como fonte de verdade

import type { ClienteContrato } from "#/generated/ixc/cliente-contrato";
import type { PaginatedResponse } from "#/lib/api-types";

// Re-export PaginatedResponse para compatibilidade
export type { PaginatedResponse };

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
 * Cliente do contrato - tipo manual (não existe no gerado do IXC)
 */
export interface ContratoCliente {
	id: number;
	razao: string;
	cnpj_cpf: string;
	fantasia: string;
	email: string;
	telefone_celular: string;
	tipo_pessoa: string;
}

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

export interface ContratoListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: ContratoFilters;
}

export interface LinhaMovel {
	id: number;
	id_contrato: number;
	ddd_telefone: string;
	numero_telefone: string;
	dia_recorrencia: number;
	portabilidade: string;
	simcard: string;
}

export interface TrocaTitularidade {
	id: number;
	id_contrato: number;
	cedente: string;
	documento_cedente: string;
	cessionario: string;
	documento_cessionario: string;
	status: string;
}

export interface Renegociacao {
	id: number;
	f_titulo?: string;
	f_valor_mensal?: number;
	f_data_criacao?: string;
	f_vendedor?: {
		id: number;
		nickname: string;
	};
	f_status: string;
	id_contrato?: number;
}

export interface ContratoAssociado {
	id: number;
	endereco: string;
	numero: string;
	data_criacao: string;
	id_contrato: number;
	status_negociacao: string;
	motivo_negociacao: string;
	valor_mensal: number;
}

export interface AtendimentoIXC {
	id: number;
	id_contrato: number;
	status: string;
	assunto: string;
	descricao: string;
	data_criacao: string;
	data_ultima_alteracao: string;
}

export interface RegistroContato {
	id: number;
	id_contrato: number;
	categoria: string;
	motivo_contato: string;
	nota_vendas: string;
	nota_tecnico: string;
	pendencia: string;
	data_criacao: string;
	criado_por: string;
}

export interface ProdutoContrato {
	id: number;
	id_contrato: number;
	descricao: string;
	valor_unit: number;
	qtde: number;
}

export interface Fatura {
	id: number;
	id_contrato: number;
	status: string;
	valor: number;
	data_vencimento: string;
	data_pagamento: string | null;
}
