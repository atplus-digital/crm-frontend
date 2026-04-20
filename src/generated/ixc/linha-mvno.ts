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
	S = "S",
	N = "N",
}

export enum LinhaMvnoPortabilidade {
	S = "S",
	N = "N",
}

export enum LinhaMvnoStatusLinha {
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

export enum LinhaMvnoStatusPortabilidade {
	A = "A",
	R = "R",
	Co = "CO",
	Ca = "CA",
}

export enum LinhaMvnoTipoNumero {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
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
	tipo_numero: LinhaMvnoTipoNumero;
	token_validacao: string;
	voz: string;
}

export type LinhaMvnoRelations = Record<string, never>;

export type LinhaMvnoRelationKey = keyof LinhaMvnoRelations;

export const LINHAMVNO_API_LABELS: Record<LinhaMvnoApi, string> = {
	[LinhaMvnoApi.A]: "Na API e no IXC",
	[LinhaMvnoApi.I]: "Apenas no IXC",
};

export const LINHAMVNO_ESIM_LABELS: Record<LinhaMvnoEsim, string> = {
	[LinhaMvnoEsim.S]: "Sim",
	[LinhaMvnoEsim.N]: "Não",
};

export const LINHAMVNO_PORTABILIDADE_LABELS: Record<
	LinhaMvnoPortabilidade,
	string
> = {
	[LinhaMvnoPortabilidade.S]: "Sim",
	[LinhaMvnoPortabilidade.N]: "Não",
};

export const LINHAMVNO_STATUSLINHA_LABELS: Record<
	LinhaMvnoStatusLinha,
	string
> = {
	[LinhaMvnoStatusLinha.A]: "Ativo",
	[LinhaMvnoStatusLinha.Br]: "Bloqueio roubo",
	[LinhaMvnoStatusLinha.Bp]: "Bloqueio perda",
	[LinhaMvnoStatusLinha.Ba]: "Bloqueio parcial",
	[LinhaMvnoStatusLinha.I]: "Inativo",
	[LinhaMvnoStatusLinha.Bi]: "Bloqueio uso indevido",
	[LinhaMvnoStatusLinha.Bt]: "Bloqueio total",
	[LinhaMvnoStatusLinha.C]: "Cancelada",
	[LinhaMvnoStatusLinha.Aa]: "Aguardando ativação",
};

export const LINHAMVNO_STATUSPORTABILIDADE_LABELS: Record<
	LinhaMvnoStatusPortabilidade,
	string
> = {
	[LinhaMvnoStatusPortabilidade.A]: "Aguardando",
	[LinhaMvnoStatusPortabilidade.R]: "Recusado",
	[LinhaMvnoStatusPortabilidade.Co]: "Concluído",
	[LinhaMvnoStatusPortabilidade.Ca]: "Cancelado",
};

export const LINHAMVNO_TIPONUMERO_LABELS: Record<LinhaMvnoTipoNumero, string> =
	{
		[LinhaMvnoTipoNumero.Value1]: "Normal",
		[LinhaMvnoTipoNumero.Value2]: "Gold",
		[LinhaMvnoTipoNumero.Value3]: "DID Móvel",
		[LinhaMvnoTipoNumero.Value4]: "M2M",
		[LinhaMvnoTipoNumero.Value5]: "M2M Especial",
		[LinhaMvnoTipoNumero.Value6]: "Teste",
		[LinhaMvnoTipoNumero.Value7]: "QA",
	};
