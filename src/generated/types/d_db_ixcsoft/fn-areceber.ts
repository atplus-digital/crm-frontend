/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Cliente } from "./cliente";

export const FN_ARECEBER_TABLE_NAME = "fn_areceber";

export const FNARECEBER_AGUARDANDOCONFIRMACAOPAGAMENTO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_ARQUIVOREMESSABAIXADO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_EMCOBRANCA_LABELS = {
	S: "SIm",
	N: "Não",
} as const;

export const FNARECEBER_ESTORNADO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_ETAPAENVIOREGUA_LABELS = {
	LP: "Lembrete de pagamento",
	CV: "No vencimento",
	AC: "Aviso de cobrança",
	IP: "Informativo de pendência",
	AP: "Agendar pagamento",
	CAP: "Cobrança automática e presencial",
	NC: "Negativar clientes",
	RCA: "Recebimento de contas a receber",
	CCA: "Cancelamento de contas a receber",
	RCB: "Renegociação de contas a receber",
	RN: "Remover negativações",
} as const;

export const FNARECEBER_FORMARECEBIMENTO_LABELS = {
	M: "Recebido de forma manual",
	R: "Recebido automaticamente",
} as const;

export const FNARECEBER_IMPRESSO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_LIBERAPERIODO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_MOTIVOALTERACAO_LABELS = {
	Value08: "Cancelamento de Desconto",
	"15": "Dispensar Cobrança de Multa",
	"16": "Alteração do Valor de Desconto",
	"17": "Não conceder Desconto",
	Value03: "Protesto para Fins Falimentares",
	Value04: "Concessão de Abatimento",
	Value05: "Cancelamento de Abatimento",
	Value06: "Alteração de Vencimento",
	Value07: "Concessão de Desconto",
	Value09: "Protestar",
	"10": "Sustar Protesto e Baixar Título",
	"11": "Sustar Protesto e Manter em Carteira",
	"12": "Alteração de Juros de Mora",
	"13": "Dispensar Cobrança de Juros de Mora",
	"14": "Alteração de Valor/Percentual de Multa",
	"18": "Alteração do Valor de Abatimento",
	"19": "Prazo Limite de Recebimento ? Alterar",
	"20": "Prazo Limite de Recebimento ? Dispensar",
	"21": "Alterar número do título dado pelo beneficiario",
	"22": "Alterar número do título dado pelo beneficiario",
	"23": "Alterar dados do Pagador",
	"24": "Alterar dados do Sacador/Avalista",
	"30": "Recusa da Alegação do Pagador",
	"31": "Alteração de Outros Dados",
	"33": "Alteração dos Dados do Rateio de Crédito",
	"34": "Pedido de Cancelamento dos Dados do Rateio de Crédito",
	"35": "Pedido de Desagendamento do Débito Automático",
	"40": "Alteração de Carteira",
	"41": "Cancelar protesto",
	"42": "Alteração de Espécie de Título",
	"43": "Transferência de carteira/modalidade de cobrança",
	"44": "Alteração de contrato de cobrança",
	"45": "Negativação Sem Protesto",
	"46": "Solicitação de Baixa de Título Negativado Sem Protesto",
	"49": "Alteração de dados extras multa",
} as const;

export const FNARECEBER_PARCELADOCARTAO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_PIXSTATUSRECORRENTE_LABELS = {
	CRIADA: "Criado",
	ATIVA: "Ativo",
	CONCLUIDA: "Concluído",
	EXPIRADA: "Expirado",
	REJEITADA: "Rejeitado",
	CANCELADA: "Cancelado",
} as const;

export const FNARECEBER_PREVISAO_LABELS = {
	N: "Competência (Previsão NÃO)",
	S: "Caixa (Previsão SIM)",
	M: "Manual",
} as const;

export const FNARECEBER_RECEBIDOPORRECORRENCIA_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_RECEBIDOVIAPIX_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_STATUS_LABELS = {
	A: "A receber",
	R: "Recebido",
	P: "Parcial",
	C: "Cancelado",
} as const;

export const FNARECEBER_STATUSCOBRANCAREGUA_LABELS = {
	A: "Aberta",
	F: "Finalizada",
} as const;

export const FNARECEBER_TIPOCOBRANCA_LABELS = {
	P: "Padrão",
	I: "Impresso",
	E: "E-mail",
} as const;

export const FNARECEBER_TIPOCOBRANCAPIX_LABELS = {
	COM_VENCIMENTO: "Com vencimento",
	IMEDIATA: "Imediata",
} as const;

export const FNARECEBER_TIPORECEBIMENTO_LABELS = {
	Boleto: "Boleto",
	Cheque: "Cheque",
	CartaO: "Cartão de crédito",
	Dinheiro: "Dinheiro",
	DepaSito: "Depósito",
	Gateway: "Gateway",
	DaBito: "Débito em conta",
	Fatura: "Fatura",
	ArrecadacaoRecebimento: "Arrecadação/Recebimento",
	Transferencia: "Transferência",
	Pix: "Pix",
} as const;

export const FNARECEBER_TITULOIMPORTADO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_TITULOPROTESTADO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_TITULORENEGOCIADO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export type FnAreceberAguardandoConfirmacaoPagamento =
	keyof typeof FNARECEBER_AGUARDANDOCONFIRMACAOPAGAMENTO_LABELS;

export type FnAreceberArquivoRemessaBaixado =
	keyof typeof FNARECEBER_ARQUIVOREMESSABAIXADO_LABELS;

export type FnAreceberEmCobranca = keyof typeof FNARECEBER_EMCOBRANCA_LABELS;

export type FnAreceberEstornado = keyof typeof FNARECEBER_ESTORNADO_LABELS;

export type FnAreceberEtapaEnvioRegua =
	keyof typeof FNARECEBER_ETAPAENVIOREGUA_LABELS;

export type FnAreceberFormaRecebimento =
	keyof typeof FNARECEBER_FORMARECEBIMENTO_LABELS;

export type FnAreceberImpresso = keyof typeof FNARECEBER_IMPRESSO_LABELS;

export type FnAreceberLiberaPeriodo =
	keyof typeof FNARECEBER_LIBERAPERIODO_LABELS;

export type FnAreceberMotivoAlteracao =
	keyof typeof FNARECEBER_MOTIVOALTERACAO_LABELS;

export type FnAreceberParceladoCartao =
	keyof typeof FNARECEBER_PARCELADOCARTAO_LABELS;

export type FnAreceberPixStatusRecorrente =
	keyof typeof FNARECEBER_PIXSTATUSRECORRENTE_LABELS;

export type FnAreceberPrevisao = keyof typeof FNARECEBER_PREVISAO_LABELS;

export type FnAreceberRecebidoPorRecorrencia =
	keyof typeof FNARECEBER_RECEBIDOPORRECORRENCIA_LABELS;

export type FnAreceberRecebidoViaPix =
	keyof typeof FNARECEBER_RECEBIDOVIAPIX_LABELS;

export type FnAreceberStatus = keyof typeof FNARECEBER_STATUS_LABELS;

export type FnAreceberStatusCobrancaRegua =
	keyof typeof FNARECEBER_STATUSCOBRANCAREGUA_LABELS;

export type FnAreceberTipoCobranca =
	keyof typeof FNARECEBER_TIPOCOBRANCA_LABELS;

export type FnAreceberTipoCobrancaPix =
	keyof typeof FNARECEBER_TIPOCOBRANCAPIX_LABELS;

export type FnAreceberTipoRecebimento =
	keyof typeof FNARECEBER_TIPORECEBIMENTO_LABELS;

export type FnAreceberTituloImportado =
	keyof typeof FNARECEBER_TITULOIMPORTADO_LABELS;

export type FnAreceberTituloProtestado =
	keyof typeof FNARECEBER_TITULOPROTESTADO_LABELS;

export type FnAreceberTituloRenegociado =
	keyof typeof FNARECEBER_TITULORENEGOCIADO_LABELS;

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

export interface FnAreceberRelations {
	f_carteira_cobranca?: unknown | null;
	f_cliente?: Cliente | null;
	f_conta?: unknown | null;
	f_conta_class_finan_a?: unknown | null;
	f_filial?: unknown | null;
	f_lote_geracao_financeiro_fatura?: unknown | null;
	f_renegociacao?: unknown | null;
	f_renegociacao_novo?: unknown | null;
	f_saida?: unknown | null;
	f_sip?: unknown | null;
}

export type FnAreceberRelationKey = keyof FnAreceberRelations;
