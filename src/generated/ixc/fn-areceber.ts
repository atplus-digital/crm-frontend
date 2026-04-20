/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const FN_ARECEBER_TABLE_NAME = "fn_areceber";

export enum FnAreceberAguardandoConfirmacaoPagamento {
	N = "N",
}

export enum FnAreceberBandeiraPagamento {
	S = "S",
	N = "N",
}

export enum FnAreceberCaixa {
	Value0 = "0",
	Value13 = "13",
	Value6 = "6",
}

export enum FnAreceberDataCancelamento {
	S = "S",
	N = "N",
}

export enum FnAreceberDataInicial {
	A = "A",
	R = "R",
	P = "P",
	C = "C",
}

export enum FnAreceberDataVencimento {
	N = "N",
	S = "S",
	M = "M",
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

export enum FnAreceberIdCobrancaRegua {
	Lp = "LP",
	Cv = "CV",
	Ac = "AC",
	Ip = "IP",
	Ap = "AP",
	Cap = "CAP",
	Nc = "NC",
	Rca = "RCA",
	Cca = "CCA",
	Rcb = "RCB",
	Rn = "RN",
}

export enum FnAreceberIdLoteCobrancaRegua {
	A = "A",
	F = "F",
}

export enum FnAreceberIdMotCancelamento {
	Value1 = "1",
}

export enum FnAreceberIdNotaGerada {
	S = "S",
	N = "N",
}

export enum FnAreceberIdNotaGeradaOpc3 {
	S = "S",
	N = "N",
}

export enum FnAreceberIdRemessa {
	Value0 = "0",
	Value2 = "2",
}

export enum FnAreceberIdRenegociacao {
	M = "M",
	R = "R",
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

export enum FnAreceberLinhaDigitavel {
	Value08 = "08",
	Value15 = "15",
	Value16 = "16",
	Value17 = "17",
	Value03 = "03",
	Value04 = "04",
	Value05 = "05",
	Value06 = "06",
	Value07 = "07",
	Value09 = "09",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
	Value14 = "14",
	Value18 = "18",
	Value19 = "19",
	Value20 = "20",
	Value21 = "21",
	Value22 = "22",
	Value23 = "23",
	Value24 = "24",
	Value30 = "30",
	Value31 = "31",
	Value33 = "33",
	Value34 = "34",
	Value35 = "35",
	Value40 = "40",
	Value41 = "41",
	Value42 = "42",
	Value43 = "43",
	Value44 = "44",
	Value45 = "45",
	Value46 = "46",
	Value49 = "49",
}

export enum FnAreceberLote {
	Value3 = "-3",
	Value1 = "1",
}

export enum FnAreceberNparcela {
	P = "P",
	I = "I",
	E = "E",
}

export enum FnAreceberOrigemImportacao {
	S = "S",
	N = "N",
}

export enum FnAreceberParcelaProporcional {
	N = "N",
}

export enum FnAreceberParceladoCartao {
	S = "S",
	N = "N",
}

export enum FnAreceberPixTxid {
	ComVencimento = "COM_VENCIMENTO",
	Imediata = "IMEDIATA",
}

export enum FnAreceberPrevisao {
	S = "S",
}

export enum FnAreceberRecebidoViaPix {
	S = "S",
	N = "N",
}

export enum FnAreceberStatus {
	C = "C",
	R = "R",
}

export enum FnAreceberStatusCobranca {
	S = "S",
	N = "N",
}

export enum FnAreceberStatusCobrancaRegua {
	S = "S",
	N = "N",
}

export enum FnAreceberTarifaGatewayLancada {
	N = "N",
}

export enum FnAreceberTentativaPixRecorrente {
	S = "S",
	N = "N",
}

export enum FnAreceberTipoCobranca {
	S = "S",
	N = "N",
}

export enum FnAreceberTipoCobrancaPix {
	Criada = "CRIADA",
	Ativa = "ATIVA",
	Concluida = "CONCLUIDA",
	Expirada = "EXPIRADA",
	Rejeitada = "REJEITADA",
	Cancelada = "CANCELADA",
}

export enum FnAreceberTipoRecebimento {
	Boleto = "Boleto",
}

export enum FnAreceberTituloImportado {
	S = "S",
	N = "N",
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

export enum FnAreceberValor {
	Boleto = "Boleto",
	Cheque = "Cheque",
	CartO = "CartÃ£o",
	Dinheiro = "Dinheiro",
	DepSito = "DepÃ³sito",
	Gateway = "Gateway",
	DBito = "DÃ©bito",
	Fatura = "Fatura",
	Arrecadacaorecebimento = "ArrecadacaoRecebimento",
	Transferencia = "Transferencia",
	Pix = "Pix",
}

export interface FnAreceber {
	id: number;
	aguardando_confirmacao_pagamento: FnAreceberAguardandoConfirmacaoPagamento;
	arquivo_remessa_baixado: string;
	baixa_automatica: string;
	baixa_data: string;
	baixa_id_operador: string;
	bandeira_pagamento: FnAreceberBandeiraPagamento;
	boleto: number;
	caixa: FnAreceberCaixa;
	cancelamento_id_operador: string;
	charge_id: string;
	conta_recebimento: string;
	credit_card_transaction_id: string;
	credito_data: string;
	data_cancelamento: FnAreceberDataCancelamento;
	data_cotacao_diaria: string;
	data_emissao: string;
	data_fin_cdr_voip: string;
	data_final: string;
	data_final_ligacoes: string;
	data_ini_cdr_voip: string;
	data_inicial: FnAreceberDataInicial;
	data_inicial_ligacoes: string;
	data_vencimento: FnAreceberDataVencimento;
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
	id_nota_gerada: FnAreceberIdNotaGerada;
	id_nota_gerada_opc2: string;
	id_nota_gerada_opc3: FnAreceberIdNotaGeradaOpc3;
	id_nota_gerada_opc4: string;
	id_remessa: FnAreceberIdRemessa;
	id_remessa_alteracao: string;
	id_remessa_baixa: string;
	id_renegociacao: FnAreceberIdRenegociacao;
	id_renegociacao_novo: string;
	id_saida: FnAreceberIdSaida;
	id_sip: string;
	ids_contratos_origem: string;
	ids_faturas_origem: string;
	impresso: FnAreceberImpresso;
	libera_periodo: FnAreceberLiberaPeriodo;
	liberado: FnAreceberLiberado;
	linha_digitavel: FnAreceberLinhaDigitavel;
	lote: FnAreceberLote;
	moeda: string;
	motivo_alteracao: string;
	nn_boleto: string;
	nparcela: FnAreceberNparcela;
	numero_parcela_recorrente: string;
	obs: string;
	origem_importacao: FnAreceberOrigemImportacao;
	pagamento_data: string;
	pagamento_valor: string;
	parcela_proporcional: FnAreceberParcelaProporcional;
	parcelado_cartao: FnAreceberParceladoCartao;
	pix_id_carteira_cobranca: string;
	pix_status: string;
	pix_status_recorrente: string;
	pix_txid: FnAreceberPixTxid;
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
	valor: FnAreceberValor;
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

export const FNARECEBER_BANDEIRAPAGAMENTO_LABELS: Record<
	FnAreceberBandeiraPagamento,
	string
> = {
	[FnAreceberBandeiraPagamento.S]: "Sim",
	[FnAreceberBandeiraPagamento.N]: "Não",
};

export const FNARECEBER_CAIXA_LABELS: Record<FnAreceberCaixa, string> = {
	[FnAreceberCaixa.Value0]: "Inativo",
	[FnAreceberCaixa.Value13]: "Código 13",
	[FnAreceberCaixa.Value6]: "Código 6",
};

export const FNARECEBER_DATACANCELAMENTO_LABELS: Record<
	FnAreceberDataCancelamento,
	string
> = {
	[FnAreceberDataCancelamento.S]: "Sim",
	[FnAreceberDataCancelamento.N]: "Não",
};

export const FNARECEBER_DATAINICIAL_LABELS: Record<
	FnAreceberDataInicial,
	string
> = {
	[FnAreceberDataInicial.A]: "A receber",
	[FnAreceberDataInicial.R]: "Recebido",
	[FnAreceberDataInicial.P]: "Parcial",
	[FnAreceberDataInicial.C]: "Cancelado",
};

export const FNARECEBER_DATAVENCIMENTO_LABELS: Record<
	FnAreceberDataVencimento,
	string
> = {
	[FnAreceberDataVencimento.N]: "Competência (Previsão NÃO)",
	[FnAreceberDataVencimento.S]: "Caixa (Previsão SIM)",
	[FnAreceberDataVencimento.M]: "Manual",
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

export const FNARECEBER_IDCOBRANCAREGUA_LABELS: Record<
	FnAreceberIdCobrancaRegua,
	string
> = {
	[FnAreceberIdCobrancaRegua.Lp]: "Lembrete de pagamento",
	[FnAreceberIdCobrancaRegua.Cv]: "No vencimento",
	[FnAreceberIdCobrancaRegua.Ac]: "Aviso de cobrança",
	[FnAreceberIdCobrancaRegua.Ip]: "Informativo de pendência",
	[FnAreceberIdCobrancaRegua.Ap]: "Agendar pagamento",
	[FnAreceberIdCobrancaRegua.Cap]: "Cobrança automática e presencial",
	[FnAreceberIdCobrancaRegua.Nc]: "Negativar clientes",
	[FnAreceberIdCobrancaRegua.Rca]: "Recebimento de contas a receber",
	[FnAreceberIdCobrancaRegua.Cca]: "Cancelamento de contas a receber",
	[FnAreceberIdCobrancaRegua.Rcb]: "Renegociação de contas a receber",
	[FnAreceberIdCobrancaRegua.Rn]: "Remover negativações",
};

export const FNARECEBER_IDLOTECOBRANCAREGUA_LABELS: Record<
	FnAreceberIdLoteCobrancaRegua,
	string
> = {
	[FnAreceberIdLoteCobrancaRegua.A]: "Aberta",
	[FnAreceberIdLoteCobrancaRegua.F]: "Finalizada",
};

export const FNARECEBER_IDMOTCANCELAMENTO_LABELS: Record<
	FnAreceberIdMotCancelamento,
	string
> = {
	[FnAreceberIdMotCancelamento.Value1]: "Ativo",
};

export const FNARECEBER_IDNOTAGERADA_LABELS: Record<
	FnAreceberIdNotaGerada,
	string
> = {
	[FnAreceberIdNotaGerada.S]: "Sim",
	[FnAreceberIdNotaGerada.N]: "Não",
};

export const FNARECEBER_IDNOTAGERADAOPC3_LABELS: Record<
	FnAreceberIdNotaGeradaOpc3,
	string
> = {
	[FnAreceberIdNotaGeradaOpc3.S]: "Sim",
	[FnAreceberIdNotaGeradaOpc3.N]: "Não",
};

export const FNARECEBER_IDREMESSA_LABELS: Record<FnAreceberIdRemessa, string> =
	{
		[FnAreceberIdRemessa.Value0]: "Inativo",
		[FnAreceberIdRemessa.Value2]: "Código 2",
	};

export const FNARECEBER_IDRENEGOCIACAO_LABELS: Record<
	FnAreceberIdRenegociacao,
	string
> = {
	[FnAreceberIdRenegociacao.M]: "Recebido de forma manual",
	[FnAreceberIdRenegociacao.R]: "Recebido automaticamente",
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

export const FNARECEBER_LINHADIGITAVEL_LABELS: Record<
	FnAreceberLinhaDigitavel,
	string
> = {
	[FnAreceberLinhaDigitavel.Value08]: "Cancelamento de Desconto",
	[FnAreceberLinhaDigitavel.Value15]: "Dispensar Cobrança de Multa",
	[FnAreceberLinhaDigitavel.Value16]: "Alteração do Valor de Desconto",
	[FnAreceberLinhaDigitavel.Value17]: "Não conceder Desconto",
	[FnAreceberLinhaDigitavel.Value03]: "Protesto para Fins Falimentares",
	[FnAreceberLinhaDigitavel.Value04]: "Concessão de Abatimento",
	[FnAreceberLinhaDigitavel.Value05]: "Cancelamento de Abatimento",
	[FnAreceberLinhaDigitavel.Value06]: "Alteração de Vencimento",
	[FnAreceberLinhaDigitavel.Value07]: "Concessão de Desconto",
	[FnAreceberLinhaDigitavel.Value09]: "Protestar",
	[FnAreceberLinhaDigitavel.Value10]: "Sustar Protesto e Baixar Título",
	[FnAreceberLinhaDigitavel.Value11]: "Sustar Protesto e Manter em Carteira",
	[FnAreceberLinhaDigitavel.Value12]: "Alteração de Juros de Mora",
	[FnAreceberLinhaDigitavel.Value13]: "Dispensar Cobrança de Juros de Mora",
	[FnAreceberLinhaDigitavel.Value14]: "Alteração de Valor/Percentual de Multa",
	[FnAreceberLinhaDigitavel.Value18]: "Alteração do Valor de Abatimento",
	[FnAreceberLinhaDigitavel.Value19]: "Prazo Limite de Recebimento ? Alterar",
	[FnAreceberLinhaDigitavel.Value20]: "Prazo Limite de Recebimento ? Dispensar",
	[FnAreceberLinhaDigitavel.Value21]:
		"Alterar número do título dado pelo beneficiario",
	[FnAreceberLinhaDigitavel.Value22]:
		"Alterar número do título dado pelo beneficiario",
	[FnAreceberLinhaDigitavel.Value23]: "Alterar dados do Pagador",
	[FnAreceberLinhaDigitavel.Value24]: "Alterar dados do Sacador/Avalista",
	[FnAreceberLinhaDigitavel.Value30]: "Recusa da Alegação do Pagador",
	[FnAreceberLinhaDigitavel.Value31]: "Alteração de Outros Dados",
	[FnAreceberLinhaDigitavel.Value33]:
		"Alteração dos Dados do Rateio de Crédito",
	[FnAreceberLinhaDigitavel.Value34]:
		"Pedido de Cancelamento dos Dados do Rateio de Crédito",
	[FnAreceberLinhaDigitavel.Value35]:
		"Pedido de Desagendamento do Débito Automático",
	[FnAreceberLinhaDigitavel.Value40]: "Alteração de Carteira",
	[FnAreceberLinhaDigitavel.Value41]: "Cancelar protesto",
	[FnAreceberLinhaDigitavel.Value42]: "Alteração de Espécie de Título",
	[FnAreceberLinhaDigitavel.Value43]:
		"Transferência de carteira/modalidade de cobrança",
	[FnAreceberLinhaDigitavel.Value44]: "Alteração de contrato de cobrança",
	[FnAreceberLinhaDigitavel.Value45]: "Negativação Sem Protesto",
	[FnAreceberLinhaDigitavel.Value46]:
		"Solicitação de Baixa de Título Negativado Sem Protesto",
	[FnAreceberLinhaDigitavel.Value49]: "Alteração de dados extras multa",
};

export const FNARECEBER_LOTE_LABELS: Record<FnAreceberLote, string> = {
	[FnAreceberLote.Value3]: "3",
	[FnAreceberLote.Value1]: "Ativo",
};

export const FNARECEBER_NPARCELA_LABELS: Record<FnAreceberNparcela, string> = {
	[FnAreceberNparcela.P]: "Padrão",
	[FnAreceberNparcela.I]: "Impresso",
	[FnAreceberNparcela.E]: "E-mail",
};

export const FNARECEBER_ORIGEMIMPORTACAO_LABELS: Record<
	FnAreceberOrigemImportacao,
	string
> = {
	[FnAreceberOrigemImportacao.S]: "Sim",
	[FnAreceberOrigemImportacao.N]: "Não",
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
	[FnAreceberParceladoCartao.S]: "Sim",
	[FnAreceberParceladoCartao.N]: "Não",
};

export const FNARECEBER_PIXTXID_LABELS: Record<FnAreceberPixTxid, string> = {
	[FnAreceberPixTxid.ComVencimento]: "Com vencimento",
	[FnAreceberPixTxid.Imediata]: "Imediata",
};

export const FNARECEBER_PREVISAO_LABELS: Record<FnAreceberPrevisao, string> = {
	[FnAreceberPrevisao.S]: "Sim",
};

export const FNARECEBER_RECEBIDOVIAPIX_LABELS: Record<
	FnAreceberRecebidoViaPix,
	string
> = {
	[FnAreceberRecebidoViaPix.S]: "Sim",
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
	[FnAreceberStatusCobranca.S]: "Sim",
	[FnAreceberStatusCobranca.N]: "Não",
};

export const FNARECEBER_STATUSCOBRANCAREGUA_LABELS: Record<
	FnAreceberStatusCobrancaRegua,
	string
> = {
	[FnAreceberStatusCobrancaRegua.S]: "SIm",
	[FnAreceberStatusCobrancaRegua.N]: "Não",
};

export const FNARECEBER_TARIFAGATEWAYLANCADA_LABELS: Record<
	FnAreceberTarifaGatewayLancada,
	string
> = {
	[FnAreceberTarifaGatewayLancada.N]: "Não",
};

export const FNARECEBER_TENTATIVAPIXRECORRENTE_LABELS: Record<
	FnAreceberTentativaPixRecorrente,
	string
> = {
	[FnAreceberTentativaPixRecorrente.S]: "Sim",
	[FnAreceberTentativaPixRecorrente.N]: "Não",
};

export const FNARECEBER_TIPOCOBRANCA_LABELS: Record<
	FnAreceberTipoCobranca,
	string
> = {
	[FnAreceberTipoCobranca.S]: "Sim",
	[FnAreceberTipoCobranca.N]: "Não",
};

export const FNARECEBER_TIPOCOBRANCAPIX_LABELS: Record<
	FnAreceberTipoCobrancaPix,
	string
> = {
	[FnAreceberTipoCobrancaPix.Criada]: "Criado",
	[FnAreceberTipoCobrancaPix.Ativa]: "Ativo",
	[FnAreceberTipoCobrancaPix.Concluida]: "Concluído",
	[FnAreceberTipoCobrancaPix.Expirada]: "Expirado",
	[FnAreceberTipoCobrancaPix.Rejeitada]: "Rejeitado",
	[FnAreceberTipoCobrancaPix.Cancelada]: "Cancelado",
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
	[FnAreceberTituloImportado.N]: "Não",
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

export const FNARECEBER_VALOR_LABELS: Record<FnAreceberValor, string> = {
	[FnAreceberValor.Boleto]: "Boleto",
	[FnAreceberValor.Cheque]: "Cheque",
	[FnAreceberValor.CartO]: "Cartão de crédito",
	[FnAreceberValor.Dinheiro]: "Dinheiro",
	[FnAreceberValor.DepSito]: "Depósito",
	[FnAreceberValor.Gateway]: "Gateway",
	[FnAreceberValor.DBito]: "Débito em conta",
	[FnAreceberValor.Fatura]: "Fatura",
	[FnAreceberValor.Arrecadacaorecebimento]: "Arrecadação/Recebimento",
	[FnAreceberValor.Transferencia]: "Transferência",
	[FnAreceberValor.Pix]: "Pix",
};
