/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const FN_ARECEBER_TABLE_NAME = "fn_areceber";

export enum FnAreceberAguardandoConfirmacaoPagamento {
	S = "S",
	N = "N",
}

export enum FnAreceberArquivoRemessaBaixado {
	S = "S",
	N = "N",
}

export enum FnAreceberEmCobranca {
	S = "S",
	N = "N",
}

export enum FnAreceberEstornado {
	S = "S",
	N = "N",
}

export enum FnAreceberEtapaEnvioRegua {
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

export enum FnAreceberFormaRecebimento {
	M = "M",
	R = "R",
}

export enum FnAreceberImpresso {
	S = "S",
	N = "N",
}

export enum FnAreceberLiberaPeriodo {
	S = "S",
	N = "N",
}

export enum FnAreceberMotivoAlteracao {
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

export enum FnAreceberParceladoCartao {
	S = "S",
	N = "N",
}

export enum FnAreceberPixStatusRecorrente {
	Criada = "CRIADA",
	Ativa = "ATIVA",
	Concluida = "CONCLUIDA",
	Expirada = "EXPIRADA",
	Rejeitada = "REJEITADA",
	Cancelada = "CANCELADA",
}

export enum FnAreceberPrevisao {
	N = "N",
	S = "S",
	M = "M",
}

export enum FnAreceberRecebidoPorRecorrencia {
	S = "S",
	N = "N",
}

export enum FnAreceberRecebidoViaPix {
	S = "S",
	N = "N",
}

export enum FnAreceberStatus {
	A = "A",
	R = "R",
	P = "P",
	C = "C",
}

export enum FnAreceberStatusCobrancaRegua {
	A = "A",
	F = "F",
}

export enum FnAreceberTipoCobranca {
	P = "P",
	I = "I",
	E = "E",
}

export enum FnAreceberTipoCobrancaPix {
	ComVencimento = "COM_VENCIMENTO",
	Imediata = "IMEDIATA",
}

export enum FnAreceberTipoRecebimento {
	Boleto = "Boleto",
	Cheque = "Cheque",
	CartaO = "CartÃ£o",
	Dinheiro = "Dinheiro",
	DepaSito = "DepÃ³sito",
	Gateway = "Gateway",
	DaBito = "DÃ©bito",
	Fatura = "Fatura",
	Arrecadacaorecebimento = "ArrecadacaoRecebimento",
	Transferencia = "Transferencia",
	Pix = "Pix",
}

export enum FnAreceberTituloImportado {
	S = "S",
	N = "N",
}

export enum FnAreceberTituloProtestado {
	S = "S",
	N = "N",
}

export enum FnAreceberTituloRenegociado {
	S = "S",
	N = "N",
}

export interface FnAreceber {
	id: number;
	aguardando_confirmacao_pagamento: FnAreceberAguardandoConfirmacaoPagamento;
	arquivo_remessa_baixado: FnAreceberArquivoRemessaBaixado;
	baixa_automatica: string;
	baixa_data: string;
	baixa_id_operador: string;
	bandeira_pagamento: string;
	boleto: number;
	caixa: number;
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
	em_processamento: string;
	enviado_remessa_baixa: string;
	estornado: FnAreceberEstornado;
	filial_id: number;
	forma_recebimento: FnAreceberFormaRecebimento;
	gateway_link: string;
	gerencianet_token: string;
	id_assinatura_cliente: number;
	id_carteira_cobranca: number;
	id_cliente: number;
	id_cobranca: string;
	id_conta: number;
	id_contrato: number;
	id_contrato_avulso: string;
	id_contrato_principal: string;
	id_im_imovel: string;
	id_lote_geracao_financeiro: string;
	id_lote_geracao_financeiro_fatura: string;
	id_mot_cancelamento: string;
	id_nota_gerada: number;
	id_nota_gerada_opc2: string;
	id_nota_gerada_opc3: string;
	id_nota_gerada_opc4: string;
	id_remessa: number;
	id_remessa_alteracao: string;
	id_remessa_baixa: string;
	id_renegociacao: string;
	id_renegociacao_novo: string;
	id_saida: number;
	id_sip: string;
	ids_contratos_origem: string;
	ids_faturas_origem: string;
	impresso: FnAreceberImpresso;
	libera_periodo: FnAreceberLiberaPeriodo;
	liberado: string;
	linha_digitavel: string;
	lote: number;
	moeda: string;
	motivo_alteracao: FnAreceberMotivoAlteracao;
	nn_boleto: string;
	nparcela: number;
	numero_parcela_recorrente: string;
	obs: string;
	origem_importacao: string;
	pagamento_data: string;
	pagamento_valor: string;
	parcela_proporcional: string;
	parcelado_cartao: FnAreceberParceladoCartao;
	pix_id_carteira_cobranca: string;
	pix_status: string;
	pix_status_recorrente: FnAreceberPixStatusRecorrente;
	pix_txid: string;
	pix_txid_recorrente: string;
	previsao: FnAreceberPrevisao;
	recebido_via_pix: FnAreceberRecebidoViaPix;
	status: FnAreceberStatus;
	status_cobranca: string;
	status_remessa: string;
	tarifa_gateway_lancada: string;
	tipo_cobranca: FnAreceberTipoCobranca;
	tipo_pagamento_cartao: string;
	tipo_recebimento: FnAreceberTipoRecebimento;
	tipo_renegociacao: string;
	titulo_importado: FnAreceberTituloImportado;
	titulo_negativacao_integracao: string;
	titulo_protestado: FnAreceberTituloProtestado;
	titulo_renegociado: FnAreceberTituloRenegociado;
	ultima_atualizacao: string;
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
	[FnAreceberAguardandoConfirmacaoPagamento.S]: "Sim",
	[FnAreceberAguardandoConfirmacaoPagamento.N]: "Não",
};

export const FNARECEBER_ARQUIVOREMESSABAIXADO_LABELS: Record<
	FnAreceberArquivoRemessaBaixado,
	string
> = {
	[FnAreceberArquivoRemessaBaixado.S]: "Sim",
	[FnAreceberArquivoRemessaBaixado.N]: "Não",
};

export const FNARECEBER_EMCOBRANCA_LABELS: Record<
	FnAreceberEmCobranca,
	string
> = {
	[FnAreceberEmCobranca.S]: "SIm",
	[FnAreceberEmCobranca.N]: "Não",
};

export const FNARECEBER_ESTORNADO_LABELS: Record<FnAreceberEstornado, string> =
	{
		[FnAreceberEstornado.S]: "Sim",
		[FnAreceberEstornado.N]: "Não",
	};

export const FNARECEBER_ETAPAENVIOREGUA_LABELS: Record<
	FnAreceberEtapaEnvioRegua,
	string
> = {
	[FnAreceberEtapaEnvioRegua.Lp]: "Lembrete de pagamento",
	[FnAreceberEtapaEnvioRegua.Cv]: "No vencimento",
	[FnAreceberEtapaEnvioRegua.Ac]: "Aviso de cobrança",
	[FnAreceberEtapaEnvioRegua.Ip]: "Informativo de pendência",
	[FnAreceberEtapaEnvioRegua.Ap]: "Agendar pagamento",
	[FnAreceberEtapaEnvioRegua.Cap]: "Cobrança automática e presencial",
	[FnAreceberEtapaEnvioRegua.Nc]: "Negativar clientes",
	[FnAreceberEtapaEnvioRegua.Rca]: "Recebimento de contas a receber",
	[FnAreceberEtapaEnvioRegua.Cca]: "Cancelamento de contas a receber",
	[FnAreceberEtapaEnvioRegua.Rcb]: "Renegociação de contas a receber",
	[FnAreceberEtapaEnvioRegua.Rn]: "Remover negativações",
};

export const FNARECEBER_FORMARECEBIMENTO_LABELS: Record<
	FnAreceberFormaRecebimento,
	string
> = {
	[FnAreceberFormaRecebimento.M]: "Recebido de forma manual",
	[FnAreceberFormaRecebimento.R]: "Recebido automaticamente",
};

export const FNARECEBER_IMPRESSO_LABELS: Record<FnAreceberImpresso, string> = {
	[FnAreceberImpresso.S]: "Sim",
	[FnAreceberImpresso.N]: "Não",
};

export const FNARECEBER_LIBERAPERIODO_LABELS: Record<
	FnAreceberLiberaPeriodo,
	string
> = {
	[FnAreceberLiberaPeriodo.S]: "Sim",
	[FnAreceberLiberaPeriodo.N]: "Não",
};

export const FNARECEBER_MOTIVOALTERACAO_LABELS: Record<
	FnAreceberMotivoAlteracao,
	string
> = {
	[FnAreceberMotivoAlteracao.Value08]: "Cancelamento de Desconto",
	[FnAreceberMotivoAlteracao.Value15]: "Dispensar Cobrança de Multa",
	[FnAreceberMotivoAlteracao.Value16]: "Alteração do Valor de Desconto",
	[FnAreceberMotivoAlteracao.Value17]: "Não conceder Desconto",
	[FnAreceberMotivoAlteracao.Value03]: "Protesto para Fins Falimentares",
	[FnAreceberMotivoAlteracao.Value04]: "Concessão de Abatimento",
	[FnAreceberMotivoAlteracao.Value05]: "Cancelamento de Abatimento",
	[FnAreceberMotivoAlteracao.Value06]: "Alteração de Vencimento",
	[FnAreceberMotivoAlteracao.Value07]: "Concessão de Desconto",
	[FnAreceberMotivoAlteracao.Value09]: "Protestar",
	[FnAreceberMotivoAlteracao.Value10]: "Sustar Protesto e Baixar Título",
	[FnAreceberMotivoAlteracao.Value11]: "Sustar Protesto e Manter em Carteira",
	[FnAreceberMotivoAlteracao.Value12]: "Alteração de Juros de Mora",
	[FnAreceberMotivoAlteracao.Value13]: "Dispensar Cobrança de Juros de Mora",
	[FnAreceberMotivoAlteracao.Value14]: "Alteração de Valor/Percentual de Multa",
	[FnAreceberMotivoAlteracao.Value18]: "Alteração do Valor de Abatimento",
	[FnAreceberMotivoAlteracao.Value19]: "Prazo Limite de Recebimento ? Alterar",
	[FnAreceberMotivoAlteracao.Value20]:
		"Prazo Limite de Recebimento ? Dispensar",
	[FnAreceberMotivoAlteracao.Value21]:
		"Alterar número do título dado pelo beneficiario",
	[FnAreceberMotivoAlteracao.Value22]:
		"Alterar número do título dado pelo beneficiario",
	[FnAreceberMotivoAlteracao.Value23]: "Alterar dados do Pagador",
	[FnAreceberMotivoAlteracao.Value24]: "Alterar dados do Sacador/Avalista",
	[FnAreceberMotivoAlteracao.Value30]: "Recusa da Alegação do Pagador",
	[FnAreceberMotivoAlteracao.Value31]: "Alteração de Outros Dados",
	[FnAreceberMotivoAlteracao.Value33]:
		"Alteração dos Dados do Rateio de Crédito",
	[FnAreceberMotivoAlteracao.Value34]:
		"Pedido de Cancelamento dos Dados do Rateio de Crédito",
	[FnAreceberMotivoAlteracao.Value35]:
		"Pedido de Desagendamento do Débito Automático",
	[FnAreceberMotivoAlteracao.Value40]: "Alteração de Carteira",
	[FnAreceberMotivoAlteracao.Value41]: "Cancelar protesto",
	[FnAreceberMotivoAlteracao.Value42]: "Alteração de Espécie de Título",
	[FnAreceberMotivoAlteracao.Value43]:
		"Transferência de carteira/modalidade de cobrança",
	[FnAreceberMotivoAlteracao.Value44]: "Alteração de contrato de cobrança",
	[FnAreceberMotivoAlteracao.Value45]: "Negativação Sem Protesto",
	[FnAreceberMotivoAlteracao.Value46]:
		"Solicitação de Baixa de Título Negativado Sem Protesto",
	[FnAreceberMotivoAlteracao.Value49]: "Alteração de dados extras multa",
};

export const FNARECEBER_PARCELADOCARTAO_LABELS: Record<
	FnAreceberParceladoCartao,
	string
> = {
	[FnAreceberParceladoCartao.S]: "Sim",
	[FnAreceberParceladoCartao.N]: "Não",
};

export const FNARECEBER_PIXSTATUSRECORRENTE_LABELS: Record<
	FnAreceberPixStatusRecorrente,
	string
> = {
	[FnAreceberPixStatusRecorrente.Criada]: "Criado",
	[FnAreceberPixStatusRecorrente.Ativa]: "Ativo",
	[FnAreceberPixStatusRecorrente.Concluida]: "Concluído",
	[FnAreceberPixStatusRecorrente.Expirada]: "Expirado",
	[FnAreceberPixStatusRecorrente.Rejeitada]: "Rejeitado",
	[FnAreceberPixStatusRecorrente.Cancelada]: "Cancelado",
};

export const FNARECEBER_PREVISAO_LABELS: Record<FnAreceberPrevisao, string> = {
	[FnAreceberPrevisao.N]: "Competência (Previsão NÃO)",
	[FnAreceberPrevisao.S]: "Caixa (Previsão SIM)",
	[FnAreceberPrevisao.M]: "Manual",
};

export const FNARECEBER_RECEBIDOPORRECORRENCIA_LABELS: Record<
	FnAreceberRecebidoPorRecorrencia,
	string
> = {
	[FnAreceberRecebidoPorRecorrencia.S]: "Sim",
	[FnAreceberRecebidoPorRecorrencia.N]: "Não",
};

export const FNARECEBER_RECEBIDOVIAPIX_LABELS: Record<
	FnAreceberRecebidoViaPix,
	string
> = {
	[FnAreceberRecebidoViaPix.S]: "Sim",
	[FnAreceberRecebidoViaPix.N]: "Não",
};

export const FNARECEBER_STATUS_LABELS: Record<FnAreceberStatus, string> = {
	[FnAreceberStatus.A]: "A receber",
	[FnAreceberStatus.R]: "Recebido",
	[FnAreceberStatus.P]: "Parcial",
	[FnAreceberStatus.C]: "Cancelado",
};

export const FNARECEBER_STATUSCOBRANCAREGUA_LABELS: Record<
	FnAreceberStatusCobrancaRegua,
	string
> = {
	[FnAreceberStatusCobrancaRegua.A]: "Aberta",
	[FnAreceberStatusCobrancaRegua.F]: "Finalizada",
};

export const FNARECEBER_TIPOCOBRANCA_LABELS: Record<
	FnAreceberTipoCobranca,
	string
> = {
	[FnAreceberTipoCobranca.P]: "Padrão",
	[FnAreceberTipoCobranca.I]: "Impresso",
	[FnAreceberTipoCobranca.E]: "E-mail",
};

export const FNARECEBER_TIPOCOBRANCAPIX_LABELS: Record<
	FnAreceberTipoCobrancaPix,
	string
> = {
	[FnAreceberTipoCobrancaPix.ComVencimento]: "Com vencimento",
	[FnAreceberTipoCobrancaPix.Imediata]: "Imediata",
};

export const FNARECEBER_TIPORECEBIMENTO_LABELS: Record<
	FnAreceberTipoRecebimento,
	string
> = {
	[FnAreceberTipoRecebimento.Boleto]: "Boleto",
	[FnAreceberTipoRecebimento.Cheque]: "Cheque",
	[FnAreceberTipoRecebimento.CartaO]: "Cartão de crédito",
	[FnAreceberTipoRecebimento.Dinheiro]: "Dinheiro",
	[FnAreceberTipoRecebimento.DepaSito]: "Depósito",
	[FnAreceberTipoRecebimento.Gateway]: "Gateway",
	[FnAreceberTipoRecebimento.DaBito]: "Débito em conta",
	[FnAreceberTipoRecebimento.Fatura]: "Fatura",
	[FnAreceberTipoRecebimento.Arrecadacaorecebimento]: "Arrecadação/Recebimento",
	[FnAreceberTipoRecebimento.Transferencia]: "Transferência",
	[FnAreceberTipoRecebimento.Pix]: "Pix",
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
	[FnAreceberTituloProtestado.S]: "Sim",
	[FnAreceberTituloProtestado.N]: "Não",
};

export const FNARECEBER_TITULORENEGOCIADO_LABELS: Record<
	FnAreceberTituloRenegociado,
	string
> = {
	[FnAreceberTituloRenegociado.S]: "Sim",
	[FnAreceberTituloRenegociado.N]: "Não",
};
