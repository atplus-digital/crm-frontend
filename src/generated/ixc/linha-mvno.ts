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
	S = "S",
	N = "N",
}

export enum LinhaMvnoId {
	A = "A",
	I = "I",
}

export enum LinhaMvnoIdIntegracao {
	Value1 = "1",
	Value2 = "2",
}

export enum LinhaMvnoIdLinhaIntegracao {
	A = "A",
	Br = "BR",
	Bp = "BP",
	Ba = "BA",
	I = "I",
	Bi = "BI",
	Bt = "BT",
	C = "C",
	Aa = "AA",
}

export enum LinhaMvnoPortabilidade {
	N = "N",
	S = "S",
}

export enum LinhaMvnoProfileMvno {
	S = "S",
	N = "N",
}

export enum LinhaMvnoSimcard {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
}

export enum LinhaMvnoTokenValidacao {
	A = "A",
	R = "R",
	Co = "CO",
	Ca = "CA",
}

export interface LinhaMvno {
	id: LinhaMvnoId;
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
	id_linha_integracao: LinhaMvnoIdLinhaIntegracao;
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
	profile_mvno: LinhaMvnoProfileMvno;
	senha: string;
	simcard: LinhaMvnoSimcard;
	sms: string;
	status_aplicativo: string;
	tipo_numero: string;
	token_validacao: LinhaMvnoTokenValidacao;
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
	[LinhaMvnoEsim.S]: "Sim",
	[LinhaMvnoEsim.N]: "Não",
};

export const LINHAMVNO_ID_LABELS: Record<LinhaMvnoId, string> = {
	[LinhaMvnoId.A]: "Na API e no IXC",
	[LinhaMvnoId.I]: "Apenas no IXC",
};

export const LINHAMVNO_IDINTEGRACAO_LABELS: Record<
	LinhaMvnoIdIntegracao,
	string
> = {
	[LinhaMvnoIdIntegracao.Value1]: "Ativo",
	[LinhaMvnoIdIntegracao.Value2]: "Código 2",
};

export const LINHAMVNO_IDLINHAINTEGRACAO_LABELS: Record<
	LinhaMvnoIdLinhaIntegracao,
	string
> = {
	[LinhaMvnoIdLinhaIntegracao.A]: "Ativo",
	[LinhaMvnoIdLinhaIntegracao.Br]: "Bloqueio roubo",
	[LinhaMvnoIdLinhaIntegracao.Bp]: "Bloqueio perda",
	[LinhaMvnoIdLinhaIntegracao.Ba]: "Bloqueio parcial",
	[LinhaMvnoIdLinhaIntegracao.I]: "Inativo",
	[LinhaMvnoIdLinhaIntegracao.Bi]: "Bloqueio uso indevido",
	[LinhaMvnoIdLinhaIntegracao.Bt]: "Bloqueio total",
	[LinhaMvnoIdLinhaIntegracao.C]: "Cancelada",
	[LinhaMvnoIdLinhaIntegracao.Aa]: "Aguardando ativação",
};

export const LINHAMVNO_PORTABILIDADE_LABELS: Record<
	LinhaMvnoPortabilidade,
	string
> = {
	[LinhaMvnoPortabilidade.N]: "Não",
	[LinhaMvnoPortabilidade.S]: "Sim",
};

export const LINHAMVNO_PROFILEMVNO_LABELS: Record<
	LinhaMvnoProfileMvno,
	string
> = {
	[LinhaMvnoProfileMvno.S]: "Sim",
	[LinhaMvnoProfileMvno.N]: "Não",
};

export const LINHAMVNO_SIMCARD_LABELS: Record<LinhaMvnoSimcard, string> = {
	[LinhaMvnoSimcard.Value1]: "Normal",
	[LinhaMvnoSimcard.Value2]: "Gold",
	[LinhaMvnoSimcard.Value3]: "DID Móvel",
	[LinhaMvnoSimcard.Value4]: "M2M",
	[LinhaMvnoSimcard.Value5]: "M2M Especial",
	[LinhaMvnoSimcard.Value6]: "Teste",
	[LinhaMvnoSimcard.Value7]: "QA",
};

export const LINHAMVNO_TOKENVALIDACAO_LABELS: Record<
	LinhaMvnoTokenValidacao,
	string
> = {
	[LinhaMvnoTokenValidacao.A]: "Aguardando",
	[LinhaMvnoTokenValidacao.R]: "Recusado",
	[LinhaMvnoTokenValidacao.Co]: "Concluído",
	[LinhaMvnoTokenValidacao.Ca]: "Cancelado",
};
