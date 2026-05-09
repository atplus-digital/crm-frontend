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
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_ARQUIVOREMESSABAIXADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_BAIXAAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_EMPROCESSAMENTO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const FNARECEBER_ENVIADOREMESSABAIXA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_ESTORNADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_FORMARECEBIMENTO_LABELS = {
	M: "M",
	R: "R",
} as const;

export const FNARECEBER_IMPRESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_LIBERAPERIODO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const FNARECEBER_LIBERADO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const FNARECEBER_PARCELAPROPORCIONAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_PARCELADOCARTAO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const FNARECEBER_PIXSTATUS_LABELS = {
	A: "A",
	C: "C",
} as const;

export const FNARECEBER_PIXSTATUSRECORRENTE_LABELS = {
	CRIADA: "CRIADA",
	ATIVA: "ATIVA",
	CONCLUIDA: "CONCLUIDA",
	EXPIRADA: "EXPIRADA",
	REJEITADA: "REJEITADA",
	CANCELADA: "CANCELADA",
} as const;

export const FNARECEBER_PREVISAO_LABELS = {
	N: "N",
	S: "S",
	M: "M",
} as const;

export const FNARECEBER_RECEBIDOVIAPIX_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_STATUS_LABELS = {
	A: "Aberto",
	R: "Recebido",
	P: "Parcial",
	C: "Cancelado",
} as const;

export const FNARECEBER_TARIFAGATEWAYLANCADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_TIPOCOBRANCA_LABELS = {
	I: "I",
	E: "E",
} as const;

export const FNARECEBER_TIPOPAGAMENTOCARTAO_LABELS = {
	N: "N",
	R: "R",
} as const;

export const FNARECEBER_TIPORECEBIMENTO_LABELS = {
	Boleto: "Boleto",
	Cheque: "Cheque",
	Cartão: "Cartão",
	Dinheiro: "Dinheiro",
	Depósito: "Depósito",
	Gateway: "Gateway",
	Débito: "Débito",
	Fatura: "Fatura",
	ArrecadacaoRecebimento: "ArrecadacaoRecebimento",
	Transferencia: "Transferencia",
	Pix: "Pix",
} as const;

export const FNARECEBER_TIPORENEGOCIACAO_LABELS = {
	R: "R",
	N: "N",
} as const;

export const FNARECEBER_TITULOIMPORTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_TITULONEGATIVACAOINTEGRACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_TITULOPROTESTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBER_TITULORENEGOCIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceberAguardandoConfirmacaoPagamentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "aguardando_confirmacao_pagamento: valores válidos são [S, N]",
		}),
	},
);

export const fn_areceberArquivoRemessaBaixadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "arquivo_remessa_baixado: valores válidos são [S, N]",
	}),
});

export const fn_areceberBaixaAutomaticaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "baixa_automatica: valores válidos são [S, N]" }),
});

export const fn_areceberEmProcessamentoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "em_processamento: valores válidos são [N, S]" }),
});

export const fn_areceberEnviadoRemessaBaixaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "enviado_remessa_baixa: valores válidos são [S, N]",
	}),
});

export const fn_areceberEstornadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "estornado: valores válidos são [S, N]" }),
});

export const fn_areceberFormaRecebimentoSchema = z.enum(["M", "R"], {
	error: () => ({ message: "forma_recebimento: valores válidos são [M, R]" }),
});

export const fn_areceberImpressoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "impresso: valores válidos são [S, N]" }),
});

export const fn_areceberLiberaPeriodoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "libera_periodo: valores válidos são [N, S]" }),
});

export const fn_areceberLiberadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "liberado: valores válidos são [N, S]" }),
});

export const fn_areceberParcelaProporcionalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "parcela_proporcional: valores válidos são [S, N]",
	}),
});

export const fn_areceberParceladoCartaoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "parcelado_cartao: valores válidos são [N, S]" }),
});

export const fn_areceberPixStatusSchema = z.enum(["A", "C"], {
	error: () => ({ message: "pix_status: valores válidos são [A, C]" }),
});

export const fn_areceberPixStatusRecorrenteSchema = z.enum(
	["CRIADA", "ATIVA", "CONCLUIDA", "EXPIRADA", "REJEITADA", "CANCELADA"],
	{
		error: () => ({
			message:
				"pix_status_recorrente: valores válidos são [CRIADA, ATIVA, CONCLUIDA, EXPIRADA, REJEITADA, CANCELADA]",
		}),
	},
);

export const fn_areceberPrevisaoSchema = z.enum(["N", "S", "M"], {
	error: () => ({ message: "previsao: valores válidos são [N, S, M]" }),
});

export const fn_areceberRecebidoViaPixSchema = z.enum(["S", "N"], {
	error: () => ({ message: "recebido_via_pix: valores válidos são [S, N]" }),
});

export const fn_areceberStatusSchema = z.enum(["A", "R", "P", "C"], {
	error: () => ({
		message:
			"status: valores válidos são [Aberto, Recebido, Parcial, Cancelado]",
	}),
});

export const fn_areceberTarifaGatewayLancadaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "tarifa_gateway_lancada: valores válidos são [S, N]",
	}),
});

export const fn_areceberTipoCobrancaSchema = z.enum(["I", "E"], {
	error: () => ({ message: "tipo_cobranca: valores válidos são [I, E]" }),
});

export const fn_areceberTipoPagamentoCartaoSchema = z.enum(["N", "R"], {
	error: () => ({
		message: "tipo_pagamento_cartao: valores válidos são [N, R]",
	}),
});

export const fn_areceberTipoRecebimentoSchema = z.enum(
	[
		"Boleto",
		"Cheque",
		"Cartão",
		"Dinheiro",
		"Depósito",
		"Gateway",
		"Débito",
		"Fatura",
		"ArrecadacaoRecebimento",
		"Transferencia",
		"Pix",
	],
	{
		error: () => ({
			message:
				"tipo_recebimento: valores válidos são [Boleto, Cheque, Cartão, Dinheiro, Depósito, Gateway, Débito, Fatura, ArrecadacaoRecebimento, Transferencia, Pix]",
		}),
	},
);

export const fn_areceberTipoRenegociacaoSchema = z.enum(["R", "N"], {
	error: () => ({ message: "tipo_renegociacao: valores válidos são [R, N]" }),
});

export const fn_areceberTituloImportadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "titulo_importado: valores válidos são [S, N]" }),
});

export const fn_areceberTituloNegativacaoIntegracaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "titulo_negativacao_integracao: valores válidos são [S, N]",
	}),
});

export const fn_areceberTituloProtestadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "titulo_protestado: valores válidos são [S, N]" }),
});

export const fn_areceberTituloRenegociadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "titulo_renegociado: valores válidos são [S, N]" }),
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

export type FnAreceberBaixaAutomatica = z.infer<
	typeof fn_areceberBaixaAutomaticaSchema
>;

export type FnAreceberEmProcessamento = z.infer<
	typeof fn_areceberEmProcessamentoSchema
>;

export type FnAreceberEnviadoRemessaBaixa = z.infer<
	typeof fn_areceberEnviadoRemessaBaixaSchema
>;

export type FnAreceberEstornado = z.infer<typeof fn_areceberEstornadoSchema>;

export type FnAreceberFormaRecebimento = z.infer<
	typeof fn_areceberFormaRecebimentoSchema
>;

export type FnAreceberImpresso = z.infer<typeof fn_areceberImpressoSchema>;

export type FnAreceberLiberaPeriodo = z.infer<
	typeof fn_areceberLiberaPeriodoSchema
>;

export type FnAreceberLiberado = z.infer<typeof fn_areceberLiberadoSchema>;

export type FnAreceberParcelaProporcional = z.infer<
	typeof fn_areceberParcelaProporcionalSchema
>;

export type FnAreceberParceladoCartao = z.infer<
	typeof fn_areceberParceladoCartaoSchema
>;

export type FnAreceberPixStatus = z.infer<typeof fn_areceberPixStatusSchema>;

export type FnAreceberPixStatusRecorrente = z.infer<
	typeof fn_areceberPixStatusRecorrenteSchema
>;

export type FnAreceberPrevisao = z.infer<typeof fn_areceberPrevisaoSchema>;

export type FnAreceberRecebidoViaPix = z.infer<
	typeof fn_areceberRecebidoViaPixSchema
>;

export type FnAreceberStatus = z.infer<typeof fn_areceberStatusSchema>;

export type FnAreceberTarifaGatewayLancada = z.infer<
	typeof fn_areceberTarifaGatewayLancadaSchema
>;

export type FnAreceberTipoCobranca = z.infer<
	typeof fn_areceberTipoCobrancaSchema
>;

export type FnAreceberTipoPagamentoCartao = z.infer<
	typeof fn_areceberTipoPagamentoCartaoSchema
>;

export type FnAreceberTipoRecebimento = z.infer<
	typeof fn_areceberTipoRecebimentoSchema
>;

export type FnAreceberTipoRenegociacao = z.infer<
	typeof fn_areceberTipoRenegociacaoSchema
>;

export type FnAreceberTituloImportado = z.infer<
	typeof fn_areceberTituloImportadoSchema
>;

export type FnAreceberTituloNegativacaoIntegracao = z.infer<
	typeof fn_areceberTituloNegativacaoIntegracaoSchema
>;

export type FnAreceberTituloProtestado = z.infer<
	typeof fn_areceberTituloProtestadoSchema
>;

export type FnAreceberTituloRenegociado = z.infer<
	typeof fn_areceberTituloRenegociadoSchema
>;
