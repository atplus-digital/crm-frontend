/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOFNARECEBER_ARQUIVOREMESSABAIXADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_BAIXAAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_CONTRATO_LABELS = {
	TODOS: "TODOS",
	RECORRENTE: "RECORRENTE",
	AVULSO: "AVULSO",
	AVULSO_E_RECORRENTE: "AVULSO_E_RECORRENTE",
	SEM_CONTRATO: "SEM_CONTRATO",
} as const;

export const RELATORIOFNARECEBER_ENVIADOREMESSABAIXA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_ESTORNORECEBIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_FORMARECEBIMENTO_LABELS = {
	M: "M",
	R: "R",
} as const;

export const RELATORIOFNARECEBER_IMPRESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_LIBERAPERIODO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RELATORIOFNARECEBER_LIBERADO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RELATORIOFNARECEBER_PARCELAPROPORCIONAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_PARCELADOCARTAO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RELATORIOFNARECEBER_PREVISAO_LABELS = {
	N: "N",
	S: "S",
	M: "M",
} as const;

export const RELATORIOFNARECEBER_RECEBIDOVIAPIX_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_STATUS_LABELS = {
	A: "A",
	R: "R",
	P: "P",
	C: "C",
} as const;

export const RELATORIOFNARECEBER_TIPOCOBRANCA_LABELS = {
	I: "I",
	E: "E",
} as const;

export const RELATORIOFNARECEBER_TIPODATACANCELAMENTO_LABELS = {
	F: "F",
	P: "P",
} as const;

export const RELATORIOFNARECEBER_TIPODATAEMISSAO_LABELS = {
	F: "F",
	P: "P",
} as const;

export const RELATORIOFNARECEBER_TIPODATAPAGAMENTO_LABELS = {
	F: "F",
	P: "P",
} as const;

export const RELATORIOFNARECEBER_TIPODATAVENCIMENTO_LABELS = {
	F: "F",
	P: "P",
} as const;

export const RELATORIOFNARECEBER_TIPORECEBIMENTO_LABELS = {
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

export const RELATORIOFNARECEBER_TIPORENEGOCIACAO_LABELS = {
	R: "R",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_TITULOPROTESTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_TYPEOFPERSON_LABELS = {
	P: "P",
	J: "J",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_fn_areceberArquivoRemessaBaixadoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "arquivo_remessa_baixado: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_fn_areceberBaixaAutomaticaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "baixa_automatica: valores válidos são [S, N]" }),
});

export const relatorio_fn_areceberContratoSchema = z.enum(
	["TODOS", "RECORRENTE", "AVULSO", "AVULSO_E_RECORRENTE", "SEM_CONTRATO"],
	{
		error: () => ({
			message:
				"contrato: valores válidos são [TODOS, RECORRENTE, AVULSO, AVULSO_E_RECORRENTE, SEM_CONTRATO]",
		}),
	},
);

export const relatorio_fn_areceberEnviadoRemessaBaixaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enviado_remessa_baixa: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_fn_areceberEstornoRecebimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "estorno_recebimento: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_fn_areceberFormaRecebimentoSchema = z.enum(["M", "R"], {
	error: () => ({ message: "forma_recebimento: valores válidos são [M, R]" }),
});

export const relatorio_fn_areceberImpressoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "impresso: valores válidos são [S, N]" }),
});

export const relatorio_fn_areceberLiberaPeriodoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "libera_periodo: valores válidos são [N, S]" }),
});

export const relatorio_fn_areceberLiberadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "liberado: valores válidos são [N, S]" }),
});

export const relatorio_fn_areceberParcelaProporcionalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "parcela_proporcional: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_fn_areceberParceladoCartaoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "parcelado_cartao: valores válidos são [N, S]" }),
});

export const relatorio_fn_areceberPrevisaoSchema = z.enum(["N", "S", "M"], {
	error: () => ({ message: "previsao: valores válidos são [N, S, M]" }),
});

export const relatorio_fn_areceberRecebidoViaPixSchema = z.enum(["S", "N"], {
	error: () => ({ message: "recebido_via_pix: valores válidos são [S, N]" }),
});

export const relatorio_fn_areceberStatusSchema = z.enum(["A", "R", "P", "C"], {
	error: () => ({ message: "status: valores válidos são [A, R, P, C]" }),
});

export const relatorio_fn_areceberTipoCobrancaSchema = z.enum(["I", "E"], {
	error: () => ({ message: "tipo_cobranca: valores válidos são [I, E]" }),
});

export const relatorio_fn_areceberTipoDataCancelamentoSchema = z.enum(
	["F", "P"],
	{
		error: () => ({
			message: "tipo_data_cancelamento: valores válidos são [F, P]",
		}),
	},
);

export const relatorio_fn_areceberTipoDataEmissaoSchema = z.enum(["F", "P"], {
	error: () => ({ message: "tipo_data_emissao: valores válidos são [F, P]" }),
});

export const relatorio_fn_areceberTipoDataPagamentoSchema = z.enum(["F", "P"], {
	error: () => ({ message: "tipo_data_pagamento: valores válidos são [F, P]" }),
});

export const relatorio_fn_areceberTipoDataVencimentoSchema = z.enum(
	["F", "P"],
	{
		error: () => ({
			message: "tipo_data_vencimento: valores válidos são [F, P]",
		}),
	},
);

export const relatorio_fn_areceberTipoRecebimentoSchema = z.enum(
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

export const relatorio_fn_areceberTipoRenegociacaoSchema = z.enum(["R", "N"], {
	error: () => ({ message: "tipo_renegociacao: valores válidos são [R, N]" }),
});

export const relatorio_fn_areceberTituloProtestadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "titulo_protestado: valores válidos são [S, N]" }),
});

export const relatorio_fn_areceberTypeOfPersonSchema = z.enum(["P", "J", "E"], {
	error: () => ({ message: "type_of_person: valores válidos são [P, J, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioFnAreceberArquivoRemessaBaixado = z.infer<
	typeof relatorio_fn_areceberArquivoRemessaBaixadoSchema
>;

export type RelatorioFnAreceberBaixaAutomatica = z.infer<
	typeof relatorio_fn_areceberBaixaAutomaticaSchema
>;

export type RelatorioFnAreceberContrato = z.infer<
	typeof relatorio_fn_areceberContratoSchema
>;

export type RelatorioFnAreceberEnviadoRemessaBaixa = z.infer<
	typeof relatorio_fn_areceberEnviadoRemessaBaixaSchema
>;

export type RelatorioFnAreceberEstornoRecebimento = z.infer<
	typeof relatorio_fn_areceberEstornoRecebimentoSchema
>;

export type RelatorioFnAreceberFormaRecebimento = z.infer<
	typeof relatorio_fn_areceberFormaRecebimentoSchema
>;

export type RelatorioFnAreceberImpresso = z.infer<
	typeof relatorio_fn_areceberImpressoSchema
>;

export type RelatorioFnAreceberLiberaPeriodo = z.infer<
	typeof relatorio_fn_areceberLiberaPeriodoSchema
>;

export type RelatorioFnAreceberLiberado = z.infer<
	typeof relatorio_fn_areceberLiberadoSchema
>;

export type RelatorioFnAreceberParcelaProporcional = z.infer<
	typeof relatorio_fn_areceberParcelaProporcionalSchema
>;

export type RelatorioFnAreceberParceladoCartao = z.infer<
	typeof relatorio_fn_areceberParceladoCartaoSchema
>;

export type RelatorioFnAreceberPrevisao = z.infer<
	typeof relatorio_fn_areceberPrevisaoSchema
>;

export type RelatorioFnAreceberRecebidoViaPix = z.infer<
	typeof relatorio_fn_areceberRecebidoViaPixSchema
>;

export type RelatorioFnAreceberStatus = z.infer<
	typeof relatorio_fn_areceberStatusSchema
>;

export type RelatorioFnAreceberTipoCobranca = z.infer<
	typeof relatorio_fn_areceberTipoCobrancaSchema
>;

export type RelatorioFnAreceberTipoDataCancelamento = z.infer<
	typeof relatorio_fn_areceberTipoDataCancelamentoSchema
>;

export type RelatorioFnAreceberTipoDataEmissao = z.infer<
	typeof relatorio_fn_areceberTipoDataEmissaoSchema
>;

export type RelatorioFnAreceberTipoDataPagamento = z.infer<
	typeof relatorio_fn_areceberTipoDataPagamentoSchema
>;

export type RelatorioFnAreceberTipoDataVencimento = z.infer<
	typeof relatorio_fn_areceberTipoDataVencimentoSchema
>;

export type RelatorioFnAreceberTipoRecebimento = z.infer<
	typeof relatorio_fn_areceberTipoRecebimentoSchema
>;

export type RelatorioFnAreceberTipoRenegociacao = z.infer<
	typeof relatorio_fn_areceberTipoRenegociacaoSchema
>;

export type RelatorioFnAreceberTituloProtestado = z.infer<
	typeof relatorio_fn_areceberTituloProtestadoSchema
>;

export type RelatorioFnAreceberTypeOfPerson = z.infer<
	typeof relatorio_fn_areceberTypeOfPersonSchema
>;
