/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ENTRADA_ENTRADAREABERTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ENTRADA_ENTRADAXML_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ENTRADA_FINALIDADENFE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
} as const;

export const ENTRADA_FORMULARIO_LABELS = {
	P: "P",
	C: "C",
	I: "I",
	T: "T",
} as const;

export const ENTRADA_NFEEMITIDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ENTRADA_ORIGEMMERCADORIA_LABELS = {
	0: "0",
	1: "1",
	2: "2",
} as const;

export const ENTRADA_REALIZARRATEIOOUTRASDESPESAS_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const ENTRADA_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
	E: "E",
} as const;

export const ENTRADA_TIPOCALCULOTRIBUTACAO_LABELS = {
	XML: "XML",
	XMLA: "XMLA",
	SIST: "SIST",
	MAN: "MAN",
} as const;

export const ENTRADA_TIPOENTRADACOMPRA_LABELS = {
	XML: "XML",
	DFE: "DFE",
	MANUAL: "MANUAL",
} as const;

export const ENTRADA_TIPOFRETE_LABELS = {
	P: "P",
	A: "A",
	9: "9",
} as const;

export const ENTRADA_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
} as const;

export const ENTRADA_TPIMPNFE_LABELS = {
	1: "1",
	2: "2",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const entradaEntradaReabertaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "entrada_reaberta: valores válidos são [S, N]" }),
});

export const entradaEntradaXmlSchema = z.enum(["S", "N"], {
	error: () => ({ message: "entrada_xml: valores válidos são [S, N]" }),
});

export const entradaFinalidadeNfeSchema = z.enum(["1", "2", "3", "4"], {
	error: () => ({
		message: "finalidade_nfe: valores válidos são [1, 2, 3, 4]",
	}),
});

export const entradaFormularioSchema = z.enum(["P", "C", "I", "T"], {
	error: () => ({ message: "formulario: valores válidos são [P, C, I, T]" }),
});

export const entradaNfeEmitidaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nfe_emitida: valores válidos são [S, N]" }),
});

export const entradaOrigemMercadoriaSchema = z.enum(["0", "1", "2"], {
	error: () => ({
		message: "origem_mercadoria: valores válidos são [0, 1, 2]",
	}),
});

export const entradaRealizarRateioOutrasDespesasSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "realizar_rateio_outras_despesas: valores válidos são [S, N, P]",
		}),
	},
);

export const entradaStatusSchema = z.enum(["A", "F", "C", "E"], {
	error: () => ({ message: "status: valores válidos são [A, F, C, E]" }),
});

export const entradaTipoCalculoTributacaoSchema = z.enum(
	["XML", "XMLA", "SIST", "MAN"],
	{
		error: () => ({
			message:
				"tipo_calculo_tributacao: valores válidos são [XML, XMLA, SIST, MAN]",
		}),
	},
);

export const entradaTipoEntradaCompraSchema = z.enum(["XML", "DFE", "MANUAL"], {
	error: () => ({
		message: "tipo_entrada_compra: valores válidos são [XML, DFE, MANUAL]",
	}),
});

export const entradaTipoFreteSchema = z.enum(["P", "A", "9"], {
	error: () => ({ message: "tipo_frete: valores válidos são [P, A, 9]" }),
});

export const entradaTipoTributacaoSchema = z.enum(["ICMS", "ISSQN"], {
	error: () => ({
		message: "tipo_tributacao: valores válidos são [ICMS, ISSQN]",
	}),
});

export const entradaTpimpNfeSchema = z.enum(["1", "2"], {
	error: () => ({ message: "tpimp_nfe: valores válidos são [1, 2]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EntradaEntradaReaberta = z.infer<
	typeof entradaEntradaReabertaSchema
>;

export type EntradaEntradaXml = z.infer<typeof entradaEntradaXmlSchema>;

export type EntradaFinalidadeNfe = z.infer<typeof entradaFinalidadeNfeSchema>;

export type EntradaFormulario = z.infer<typeof entradaFormularioSchema>;

export type EntradaNfeEmitida = z.infer<typeof entradaNfeEmitidaSchema>;

export type EntradaOrigemMercadoria = z.infer<
	typeof entradaOrigemMercadoriaSchema
>;

export type EntradaRealizarRateioOutrasDespesas = z.infer<
	typeof entradaRealizarRateioOutrasDespesasSchema
>;

export type EntradaStatus = z.infer<typeof entradaStatusSchema>;

export type EntradaTipoCalculoTributacao = z.infer<
	typeof entradaTipoCalculoTributacaoSchema
>;

export type EntradaTipoEntradaCompra = z.infer<
	typeof entradaTipoEntradaCompraSchema
>;

export type EntradaTipoFrete = z.infer<typeof entradaTipoFreteSchema>;

export type EntradaTipoTributacao = z.infer<typeof entradaTipoTributacaoSchema>;

export type EntradaTpimpNfe = z.infer<typeof entradaTpimpNfeSchema>;
