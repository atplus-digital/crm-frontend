/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBER_AGUARDANDOCONFIRMACAOPAGAMENTO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_ARQUIVOREMESSABAIXADO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FNARECEBER_ESTORNADO_LABELS = {
	S: "Sim",
	N: "Não",
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
	"08": "Cancelamento de Desconto",
	15: "Dispensar Cobrança de Multa",
	16: "Alteração do Valor de Desconto",
	17: "Não conceder Desconto",
	"03": "Protesto para Fins Falimentares",
	"04": "Concessão de Abatimento",
	"05": "Cancelamento de Abatimento",
	"06": "Alteração de Vencimento",
	"07": "Concessão de Desconto",
	"09": "Protestar",
	10: "Sustar Protesto e Baixar Título",
	11: "Sustar Protesto e Manter em Carteira",
	12: "Alteração de Juros de Mora",
	13: "Dispensar Cobrança de Juros de Mora",
	14: "Alteração de Valor/Percentual de Multa",
	18: "Alteração do Valor de Abatimento",
	19: "Prazo Limite de Recebimento ? Alterar",
	20: "Prazo Limite de Recebimento ? Dispensar",
	21: "Alterar número do título dado pelo beneficiario",
	22: "Alterar número do título dado pelo beneficiario",
	23: "Alterar dados do Pagador",
	24: "Alterar dados do Sacador/Avalista",
	30: "Recusa da Alegação do Pagador",
	31: "Alteração de Outros Dados",
	33: "Alteração dos Dados do Rateio de Crédito",
	34: "Pedido de Cancelamento dos Dados do Rateio de Crédito",
	35: "Pedido de Desagendamento do Débito Automático",
	40: "Alteração de Carteira",
	41: "Cancelar protesto",
	42: "Alteração de Espécie de Título",
	43: "Transferência de carteira/modalidade de cobrança",
	44: "Alteração de contrato de cobrança",
	45: "Negativação Sem Protesto",
	46: "Solicitação de Baixa de Título Negativado Sem Protesto",
	49: "Alteração de dados extras multa",
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

export const FNARECEBER_TIPOCOBRANCA_LABELS = {
	P: "Padrão",
	I: "Impresso",
	E: "E-mail",
} as const;

export const FNARECEBER_TIPORECEBIMENTO_LABELS = {
	Boleto: "Boleto",
	Cheque: "Cheque",
	"CartÃ£o": "Cartão de crédito",
	Dinheiro: "Dinheiro",
	"DepÃ³sito": "Depósito",
	Gateway: "Gateway",
	"DÃ©bito": "Débito em conta",
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

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceberAguardandoConfirmacaoPagamentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"aguardando_confirmacao_pagamento: valores válidos são [Sim, Não]",
		}),
	},
);

export const fn_areceberArquivoRemessaBaixadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "arquivo_remessa_baixado: valores válidos são [Sim, Não]",
	}),
});

export const fn_areceberEstornadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "estornado: valores válidos são [Sim, Não]" }),
});

export const fn_areceberFormaRecebimentoSchema = z.enum(["M", "R"], {
	error: () => ({
		message:
			"forma_recebimento: valores válidos são [Recebido de forma manual, Recebido automaticamente]",
	}),
});

export const fn_areceberImpressoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "impresso: valores válidos são [Sim, Não]" }),
});

export const fn_areceberLiberaPeriodoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "libera_periodo: valores válidos são [Sim, Não]" }),
});

export const fn_areceberMotivoAlteracaoSchema = z.enum(
	[
		"08",
		"15",
		"16",
		"17",
		"03",
		"04",
		"05",
		"06",
		"07",
		"09",
		"10",
		"11",
		"12",
		"13",
		"14",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"30",
		"31",
		"33",
		"34",
		"35",
		"40",
		"41",
		"42",
		"43",
		"44",
		"45",
		"46",
		"49",
	],
	{
		error: () => ({
			message:
				"motivo_alteracao: valores válidos são [Cancelamento de Desconto, Dispensar Cobrança de Multa, Alteração do Valor de Desconto, Não conceder Desconto, Protesto para Fins Falimentares, Concessão de Abatimento, Cancelamento de Abatimento, Alteração de Vencimento, Concessão de Desconto, Protestar, Sustar Protesto e Baixar Título, Sustar Protesto e Manter em Carteira, Alteração de Juros de Mora, Dispensar Cobrança de Juros de Mora, Alteração de Valor/Percentual de Multa, Alteração do Valor de Abatimento, Prazo Limite de Recebimento ? Alterar, Prazo Limite de Recebimento ? Dispensar, Alterar número do título dado pelo beneficiario, Alterar número do título dado pelo beneficiario, Alterar dados do Pagador, Alterar dados do Sacador/Avalista, Recusa da Alegação do Pagador, Alteração de Outros Dados, Alteração dos Dados do Rateio de Crédito, Pedido de Cancelamento dos Dados do Rateio de Crédito, Pedido de Desagendamento do Débito Automático, Alteração de Carteira, Cancelar protesto, Alteração de Espécie de Título, Transferência de carteira/modalidade de cobrança, Alteração de contrato de cobrança, Negativação Sem Protesto, Solicitação de Baixa de Título Negativado Sem Protesto, Alteração de dados extras multa]",
		}),
	},
);

export const fn_areceberParceladoCartaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "parcelado_cartao: valores válidos são [Sim, Não]",
	}),
});

export const fn_areceberPixStatusRecorrenteSchema = z.enum(
	["CRIADA", "ATIVA", "CONCLUIDA", "EXPIRADA", "REJEITADA", "CANCELADA"],
	{
		error: () => ({
			message:
				"pix_status_recorrente: valores válidos são [Criado, Ativo, Concluído, Expirado, Rejeitado, Cancelado]",
		}),
	},
);

export const fn_areceberPrevisaoSchema = z.enum(["N", "S", "M"], {
	error: () => ({
		message:
			"previsao: valores válidos são [Competência (Previsão NÃO), Caixa (Previsão SIM), Manual]",
	}),
});

export const fn_areceberRecebidoViaPixSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "recebido_via_pix: valores válidos são [Sim, Não]",
	}),
});

export const fn_areceberStatusSchema = z.enum(["A", "R", "P", "C"], {
	error: () => ({
		message:
			"status: valores válidos são [A receber, Recebido, Parcial, Cancelado]",
	}),
});

export const fn_areceberTipoCobrancaSchema = z.enum(["P", "I", "E"], {
	error: () => ({
		message: "tipo_cobranca: valores válidos são [Padrão, Impresso, E-mail]",
	}),
});

export const fn_areceberTipoRecebimentoSchema = z.enum(
	[
		"Boleto",
		"Cheque",
		"CartÃ£o",
		"Dinheiro",
		"DepÃ³sito",
		"Gateway",
		"DÃ©bito",
		"Fatura",
		"ArrecadacaoRecebimento",
		"Transferencia",
		"Pix",
	],
	{
		error: () => ({
			message:
				"tipo_recebimento: valores válidos são [Boleto, Cheque, Cartão de crédito, Dinheiro, Depósito, Gateway, Débito em conta, Fatura, Arrecadação/Recebimento, Transferência, Pix]",
		}),
	},
);

export const fn_areceberTituloImportadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "titulo_importado: valores válidos são [Sim, Não]",
	}),
});

export const fn_areceberTituloProtestadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "titulo_protestado: valores válidos são [Sim, Não]",
	}),
});

export const fn_areceberTituloRenegociadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "titulo_renegociado: valores válidos são [Sim, Não]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberAguardandoConfirmacaoPagamento = z.infer<
	typeof fn_areceberAguardandoConfirmacaoPagamentoSchema
>;

export type FnAreceberArquivoRemessaBaixado = z.infer<
	typeof fn_areceberArquivoRemessaBaixadoSchema
>;

export type FnAreceberEstornado = z.infer<typeof fn_areceberEstornadoSchema>;

export type FnAreceberFormaRecebimento = z.infer<
	typeof fn_areceberFormaRecebimentoSchema
>;

export type FnAreceberImpresso = z.infer<typeof fn_areceberImpressoSchema>;

export type FnAreceberLiberaPeriodo = z.infer<
	typeof fn_areceberLiberaPeriodoSchema
>;

export type FnAreceberMotivoAlteracao = z.infer<
	typeof fn_areceberMotivoAlteracaoSchema
>;

export type FnAreceberParceladoCartao = z.infer<
	typeof fn_areceberParceladoCartaoSchema
>;

export type FnAreceberPixStatusRecorrente = z.infer<
	typeof fn_areceberPixStatusRecorrenteSchema
>;

export type FnAreceberPrevisao = z.infer<typeof fn_areceberPrevisaoSchema>;

export type FnAreceberRecebidoViaPix = z.infer<
	typeof fn_areceberRecebidoViaPixSchema
>;

export type FnAreceberStatus = z.infer<typeof fn_areceberStatusSchema>;

export type FnAreceberTipoCobranca = z.infer<
	typeof fn_areceberTipoCobrancaSchema
>;

export type FnAreceberTipoRecebimento = z.infer<
	typeof fn_areceberTipoRecebimentoSchema
>;

export type FnAreceberTituloImportado = z.infer<
	typeof fn_areceberTituloImportadoSchema
>;

export type FnAreceberTituloProtestado = z.infer<
	typeof fn_areceberTituloProtestadoSchema
>;

export type FnAreceberTituloRenegociado = z.infer<
	typeof fn_areceberTituloRenegociadoSchema
>;
