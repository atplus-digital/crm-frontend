/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Cliente } from "./cliente";

export const LINHA_MVNO_TABLE_NAME = "linha_mvno";

export const LINHAMVNO_API_LABELS = {
	A: "Na API e no IXC",
	I: "Apenas no IXC",
} as const;

export const LINHAMVNO_ESIM_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const LINHAMVNO_PORTABILIDADE_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const LINHAMVNO_STATUSLINHA_LABELS = {
	A: "Ativo",
	BR: "Bloqueio roubo",
	BP: "Bloqueio perda",
	BA: "Bloqueio parcial",
	I: "Inativo",
	BI: "Bloqueio uso indevido",
	BT: "Bloqueio total",
	C: "Cancelada",
	AA: "Aguardando ativação",
} as const;

export const LINHAMVNO_STATUSPORTABILIDADE_LABELS = {
	A: "Aguardando",
	R: "Recusado",
	CO: "Concluído",
	CA: "Cancelado",
} as const;

export const LINHAMVNO_TIPONUMERO_LABELS = {
	"1": "Normal",
	"2": "Gold",
	"3": "DID Móvel",
	"4": "M2M",
	"5": "M2M Especial",
	"6": "Teste",
	"7": "QA",
} as const;

export type LinhaMvnoApi = keyof typeof LINHAMVNO_API_LABELS;

export type LinhaMvnoEsim = keyof typeof LINHAMVNO_ESIM_LABELS;

export type LinhaMvnoPortabilidade =
	keyof typeof LINHAMVNO_PORTABILIDADE_LABELS;

export type LinhaMvnoStatusLinha = keyof typeof LINHAMVNO_STATUSLINHA_LABELS;

export type LinhaMvnoStatusPortabilidade =
	keyof typeof LINHAMVNO_STATUSPORTABILIDADE_LABELS;

export type LinhaMvnoTipoNumero = keyof typeof LINHAMVNO_TIPONUMERO_LABELS;

export interface LinhaMvno {
	id: number;
	api: LinhaMvnoApi;
	consulta_saldo: string;
	dados_moveis: string;
	data_agendamento: string;
	data_recarga: string;
	ddd_telefone: number;
	dia_recorrencia: string;
	esim: LinhaMvnoEsim;
	expiracao_dados: string;
	id_account_mvno: string;
	id_assinatura_cliente: number;
	id_assinatura_cliente_produto: number;
	id_contrato: number;
	id_contrato_integracao: string;
	id_customer_mvno: string;
	id_integracao: number;
	id_linha_integracao: string;
	id_plano_integracao: string;
	id_portabilidade_integracao: string;
	id_prod_ixc_mvno: number;
	link_esim: string;
	login: string;
	msisdn: string;
	numero_telefone: string;
	numero_temporario: string;
	operadora_origem: string;
	portabilidade: LinhaMvnoPortabilidade;
	profile_mvno: string;
	senha: string;
	simcard: string;
	sms: string;
	status_aplicativo: string;
	tipo_numero: LinhaMvnoTipoNumero;
	token_validacao: string;
	voz: string;
}

export interface LinhaMvnoRelations {
	f_chip?: unknown | null;
	f_cliente?: Cliente | null;
	f_plano?: unknown | null;
}

export type LinhaMvnoRelationKey = keyof LinhaMvnoRelations;
