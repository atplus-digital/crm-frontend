/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const FN_ARECEBER_TABLE_NAME = "fn_areceber";

export enum FnAreceberAguardandoConfirmacaoPagamento {
	N = "N",
}

export enum FnAreceberCaixa {
	Value0 = "0",
	Value13 = "13",
	Value6 = "6",
}

export enum FnAreceberEmProcessamento {
	N = "N",
}

export enum FnAreceberEnviadoRemessaBaixa {
	N = "N",
}

export enum FnAreceberEstornado {
	N = "N",
}

export enum FnAreceberFilialId {
	Value1 = "1",
}

export enum FnAreceberIdCarteiraCobranca {
	Value0 = "0",
	Value4 = "4",
	Value5 = "5",
}

export enum FnAreceberIdMotCancelamento {
	Value1 = "1",
}

export enum FnAreceberIdRemessa {
	Value0 = "0",
	Value2 = "2",
}

export enum FnAreceberIdSaida {
	Value25 = "-25",
}

export enum FnAreceberImpresso {
	N = "N",
	S = "S",
}

export enum FnAreceberLiberaPeriodo {
	N = "N",
}

export enum FnAreceberLiberado {
	S = "S",
}

export enum FnAreceberLote {
	Value3 = "-3",
	Value1 = "1",
}

export enum FnAreceberParcelaProporcional {
	N = "N",
}

export enum FnAreceberParceladoCartao {
	N = "N",
}

export enum FnAreceberPrevisao {
	S = "S",
}

export enum FnAreceberRecebidoViaPix {
	N = "N",
}

export enum FnAreceberStatus {
	C = "C",
	R = "R",
}

export enum FnAreceberStatusCobranca {
	F = "F",
}

export enum FnAreceberTarifaGatewayLancada {
	N = "N",
}

export enum FnAreceberTipoCobranca {
	I = "I",
}

export enum FnAreceberTipoRecebimento {
	Boleto = "Boleto",
}

export enum FnAreceberTituloImportado {
	S = "S",
}

export enum FnAreceberTituloProtestado {
	N = "N",
}

export enum FnAreceberUltimaAtualizacao {
	Value20211228t125930000z = "2021-12-28T12:59:30.000Z",
	Value20251121t185348000z = "2025-11-21T18:53:48.000Z",
	Value20251121t185419000z = "2025-11-21T18:54:19.000Z",
	Value20260303t123005000z = "2026-03-03T12:30:05.000Z",
}

export interface FnAreceber {
	id: number;
	aguardando_confirmacao_pagamento: FnAreceberAguardandoConfirmacaoPagamento;
	arquivo_remessa_baixado: string;
	baixa_automatica: string;
	baixa_data: string;
	baixa_id_operador: string;
	bandeira_pagamento: string;
	boleto: number;
	caixa: FnAreceberCaixa;
	cancelamento_id_operador: string;
	charge_id: string;
	conta_recebimento: string;
	credit_card_transaction_id: string;
	credito_data: string;
	data_cancelamento: string;
	data_cotacao_diaria: string;
	data_emissao: string;
	data_fin_cdr_voip: string;
	data_final: string;
	data_final_ligacoes: string;
	data_ini_cdr_voip: string;
	data_inicial: string;
	data_inicial_ligacoes: string;
	data_vencimento: string;
	desconto_condicional_valor: string;
	descontos_adicionais: string;
	documento: string;
	duplicata: string;
	em_processamento: FnAreceberEmProcessamento;
	enviado_remessa_baixa: FnAreceberEnviadoRemessaBaixa;
	estornado: FnAreceberEstornado;
	filial_id: FnAreceberFilialId;
	forma_recebimento: string;
	gateway_link: string;
	gerencianet_token: string;
	id_assinatura_cliente: number;
	id_carteira_cobranca: FnAreceberIdCarteiraCobranca;
	id_cliente: number;
	id_cobranca: string;
	id_conta: number;
	id_contrato: number;
	id_contrato_avulso: string;
	id_contrato_principal: string;
	id_im_imovel: string;
	id_lote_geracao_financeiro: string;
	id_lote_geracao_financeiro_fatura: string;
	id_mot_cancelamento: FnAreceberIdMotCancelamento;
	id_nota_gerada: number;
	id_nota_gerada_opc2: string;
	id_nota_gerada_opc3: string;
	id_nota_gerada_opc4: string;
	id_remessa: FnAreceberIdRemessa;
	id_remessa_alteracao: string;
	id_remessa_baixa: string;
	id_renegociacao: string;
	id_renegociacao_novo: string;
	id_saida: FnAreceberIdSaida;
	id_sip: string;
	ids_contratos_origem: string;
	ids_faturas_origem: string;
	impresso: FnAreceberImpresso;
	libera_periodo: FnAreceberLiberaPeriodo;
	liberado: FnAreceberLiberado;
	linha_digitavel: string;
	lote: FnAreceberLote;
	moeda: string;
	motivo_alteracao: string;
	nn_boleto: string;
	nparcela: number;
	numero_parcela_recorrente: string;
	obs: string;
	origem_importacao: string;
	pagamento_data: string;
	pagamento_valor: string;
	parcela_proporcional: FnAreceberParcelaProporcional;
	parcelado_cartao: FnAreceberParceladoCartao;
	pix_id_carteira_cobranca: string;
	pix_status: string;
	pix_status_recorrente: string;
	pix_txid: string;
	pix_txid_recorrente: string;
	previsao: FnAreceberPrevisao;
	recebido_via_pix: FnAreceberRecebidoViaPix;
	status: FnAreceberStatus;
	status_cobranca: FnAreceberStatusCobranca;
	status_remessa: string;
	tarifa_gateway_lancada: FnAreceberTarifaGatewayLancada;
	tipo_cobranca: FnAreceberTipoCobranca;
	tipo_pagamento_cartao: string;
	tipo_recebimento: FnAreceberTipoRecebimento;
	tipo_renegociacao: string;
	titulo_importado: FnAreceberTituloImportado;
	titulo_negativacao_integracao: string;
	titulo_protestado: FnAreceberTituloProtestado;
	titulo_renegociado: string;
	ultima_atualizacao: FnAreceberUltimaAtualizacao;
	validade_desconto_condicional: string;
	valor: string;
	valor_aberto: string;
	valor_ate_vencimento: string;
	valor_cancelado: string;
	valor_cotacao_diaria: string;
	valor_desconto_ate_vencimento: string;
	valor_juros_multa: string;
	valor_moeda_original: string;
	valor_recebido: string;
	valor_total_com_juros: string;
}

export type FnAreceberRelations = Record<string, never>;

export type FnAreceberRelationKey = keyof FnAreceberRelations;

export const FNARECEBER_AGUARDANDOCONFIRMACAOPAGAMENTO_LABELS: Record<
	FnAreceberAguardandoConfirmacaoPagamento,
	string
> = {
	[FnAreceberAguardandoConfirmacaoPagamento.N]: "Não",
};

export const FNARECEBER_CAIXA_LABELS: Record<FnAreceberCaixa, string> = {
	[FnAreceberCaixa.Value0]: "Inativo",
	[FnAreceberCaixa.Value13]: "Código 13",
	[FnAreceberCaixa.Value6]: "Código 6",
};

export const FNARECEBER_EMPROCESSAMENTO_LABELS: Record<
	FnAreceberEmProcessamento,
	string
> = {
	[FnAreceberEmProcessamento.N]: "Não",
};

export const FNARECEBER_ENVIADOREMESSABAIXA_LABELS: Record<
	FnAreceberEnviadoRemessaBaixa,
	string
> = {
	[FnAreceberEnviadoRemessaBaixa.N]: "Não",
};

export const FNARECEBER_ESTORNADO_LABELS: Record<FnAreceberEstornado, string> =
	{
		[FnAreceberEstornado.N]: "Não",
	};

export const FNARECEBER_FILIALID_LABELS: Record<FnAreceberFilialId, string> = {
	[FnAreceberFilialId.Value1]: "Ativo",
};

export const FNARECEBER_IDCARTEIRACOBRANCA_LABELS: Record<
	FnAreceberIdCarteiraCobranca,
	string
> = {
	[FnAreceberIdCarteiraCobranca.Value0]: "Inativo",
	[FnAreceberIdCarteiraCobranca.Value4]: "Código 4",
	[FnAreceberIdCarteiraCobranca.Value5]: "Código 5",
};

export const FNARECEBER_IDMOTCANCELAMENTO_LABELS: Record<
	FnAreceberIdMotCancelamento,
	string
> = {
	[FnAreceberIdMotCancelamento.Value1]: "Ativo",
};

export const FNARECEBER_IDREMESSA_LABELS: Record<FnAreceberIdRemessa, string> =
	{
		[FnAreceberIdRemessa.Value0]: "Inativo",
		[FnAreceberIdRemessa.Value2]: "Código 2",
	};

export const FNARECEBER_IDSAIDA_LABELS: Record<FnAreceberIdSaida, string> = {
	[FnAreceberIdSaida.Value25]: "25",
};

export const FNARECEBER_IMPRESSO_LABELS: Record<FnAreceberImpresso, string> = {
	[FnAreceberImpresso.N]: "Não",
	[FnAreceberImpresso.S]: "Sim",
};

export const FNARECEBER_LIBERAPERIODO_LABELS: Record<
	FnAreceberLiberaPeriodo,
	string
> = {
	[FnAreceberLiberaPeriodo.N]: "Não",
};

export const FNARECEBER_LIBERADO_LABELS: Record<FnAreceberLiberado, string> = {
	[FnAreceberLiberado.S]: "Sim",
};

export const FNARECEBER_LOTE_LABELS: Record<FnAreceberLote, string> = {
	[FnAreceberLote.Value3]: "3",
	[FnAreceberLote.Value1]: "Ativo",
};

export const FNARECEBER_PARCELAPROPORCIONAL_LABELS: Record<
	FnAreceberParcelaProporcional,
	string
> = {
	[FnAreceberParcelaProporcional.N]: "Não",
};

export const FNARECEBER_PARCELADOCARTAO_LABELS: Record<
	FnAreceberParceladoCartao,
	string
> = {
	[FnAreceberParceladoCartao.N]: "Não",
};

export const FNARECEBER_PREVISAO_LABELS: Record<FnAreceberPrevisao, string> = {
	[FnAreceberPrevisao.S]: "Sim",
};

export const FNARECEBER_RECEBIDOVIAPIX_LABELS: Record<
	FnAreceberRecebidoViaPix,
	string
> = {
	[FnAreceberRecebidoViaPix.N]: "Não",
};

export const FNARECEBER_STATUS_LABELS: Record<FnAreceberStatus, string> = {
	[FnAreceberStatus.C]: "C",
	[FnAreceberStatus.R]: "R",
};

export const FNARECEBER_STATUSCOBRANCA_LABELS: Record<
	FnAreceberStatusCobranca,
	string
> = {
	[FnAreceberStatusCobranca.F]: "F",
};

export const FNARECEBER_TARIFAGATEWAYLANCADA_LABELS: Record<
	FnAreceberTarifaGatewayLancada,
	string
> = {
	[FnAreceberTarifaGatewayLancada.N]: "Não",
};

export const FNARECEBER_TIPOCOBRANCA_LABELS: Record<
	FnAreceberTipoCobranca,
	string
> = {
	[FnAreceberTipoCobranca.I]: "Inativo",
};

export const FNARECEBER_TIPORECEBIMENTO_LABELS: Record<
	FnAreceberTipoRecebimento,
	string
> = {
	[FnAreceberTipoRecebimento.Boleto]: "Boleto",
};

export const FNARECEBER_TITULOIMPORTADO_LABELS: Record<
	FnAreceberTituloImportado,
	string
> = {
	[FnAreceberTituloImportado.S]: "Sim",
};

export const FNARECEBER_TITULOPROTESTADO_LABELS: Record<
	FnAreceberTituloProtestado,
	string
> = {
	[FnAreceberTituloProtestado.N]: "Não",
};

export const FNARECEBER_ULTIMAATUALIZACAO_LABELS: Record<
	FnAreceberUltimaAtualizacao,
	string
> = {
	[FnAreceberUltimaAtualizacao.Value20211228t125930000z]:
		"2021 12 28t12:59:30.000z",
	[FnAreceberUltimaAtualizacao.Value20251121t185348000z]:
		"2025 11 21t18:53:48.000z",
	[FnAreceberUltimaAtualizacao.Value20251121t185419000z]:
		"2025 11 21t18:54:19.000z",
	[FnAreceberUltimaAtualizacao.Value20260303t123005000z]:
		"2026 03 03t12:30:05.000z",
};
