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

export enum LinhaMvnoDddTelefone {
	Value24 = "24",
	Value41 = "41",
	Value44 = "44",
	Value47 = "47",
	Value48 = "48",
	Value49 = "49",
}

export enum LinhaMvnoDiaRecorrencia {
	Value0 = "0",
	Value1 = "1",
	Value10 = "10",
	Value15 = "15",
	Value20 = "20",
	Value25 = "25",
	Value5 = "5",
}

export enum LinhaMvnoEsim {
	N = "N",
	S = "S",
}

export enum LinhaMvnoIdIntegracao {
	Value1 = "1",
	Value2 = "2",
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
	ddd_telefone: LinhaMvnoDddTelefone;
	dia_recorrencia: LinhaMvnoDiaRecorrencia;
	esim: LinhaMvnoEsim;
	expiracao_dados: string;
	id_account_mvno: string;
	id_assinatura_cliente: number;
	id_assinatura_cliente_produto: number;
	id_contrato: number;
	id_contrato_integracao: string;
	id_customer_mvno: string;
	id_integracao: LinhaMvnoIdIntegracao;
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

export const LINHAMVNO_DDDTELEFONE_LABELS: Record<
	LinhaMvnoDddTelefone,
	string
> = {
	[LinhaMvnoDddTelefone.Value24]: "Código 24",
	[LinhaMvnoDddTelefone.Value41]: "Código 41",
	[LinhaMvnoDddTelefone.Value44]: "Código 44",
	[LinhaMvnoDddTelefone.Value47]: "Código 47",
	[LinhaMvnoDddTelefone.Value48]: "Código 48",
	[LinhaMvnoDddTelefone.Value49]: "Código 49",
};

export const LINHAMVNO_DIARECORRENCIA_LABELS: Record<
	LinhaMvnoDiaRecorrencia,
	string
> = {
	[LinhaMvnoDiaRecorrencia.Value0]: "Inativo",
	[LinhaMvnoDiaRecorrencia.Value1]: "Ativo",
	[LinhaMvnoDiaRecorrencia.Value10]: "Código 10",
	[LinhaMvnoDiaRecorrencia.Value15]: "Código 15",
	[LinhaMvnoDiaRecorrencia.Value20]: "Código 20",
	[LinhaMvnoDiaRecorrencia.Value25]: "Código 25",
	[LinhaMvnoDiaRecorrencia.Value5]: "Código 5",
};

export const LINHAMVNO_ESIM_LABELS: Record<LinhaMvnoEsim, string> = {
	[LinhaMvnoEsim.N]: "Não",
	[LinhaMvnoEsim.S]: "Sim",
};

export const LINHAMVNO_IDINTEGRACAO_LABELS: Record<
	LinhaMvnoIdIntegracao,
	string
> = {
	[LinhaMvnoIdIntegracao.Value1]: "Ativo",
	[LinhaMvnoIdIntegracao.Value2]: "Código 2",
};

export const LINHAMVNO_PORTABILIDADE_LABELS: Record<
	LinhaMvnoPortabilidade,
	string
> = {
	[LinhaMvnoPortabilidade.N]: "Não",
	[LinhaMvnoPortabilidade.S]: "Sim",
};
