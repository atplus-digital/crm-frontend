/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const LINHA_MVNO_TABLE_NAME = "linha_mvno";

export enum LinhaMvnoApi {
	A = "A",
	I = "I",
}

export enum LinhaMvnoEsim {
	N = "N",
	S = "S",
}

export enum LinhaMvnoPortabilidade {
	N = "N",
	S = "S",
}

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
	tipo_numero: string;
	token_validacao: string;
	voz: string;
}

export type LinhaMvnoRelations = Record<string, never>;

export type LinhaMvnoRelationKey = keyof LinhaMvnoRelations;

export const LINHAMVNO_API_LABELS: Record<LinhaMvnoApi, string> = {
	[LinhaMvnoApi.A]: "Ativo",
	[LinhaMvnoApi.I]: "Inativo",
};

export const LINHAMVNO_ESIM_LABELS: Record<LinhaMvnoEsim, string> = {
	[LinhaMvnoEsim.N]: "Não",
	[LinhaMvnoEsim.S]: "Sim",
};

export const LINHAMVNO_PORTABILIDADE_LABELS: Record<
	LinhaMvnoPortabilidade,
	string
> = {
	[LinhaMvnoPortabilidade.N]: "Não",
	[LinhaMvnoPortabilidade.S]: "Sim",
};
