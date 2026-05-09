/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNMOVIMFINAN_CENTROCUSTOREGRACRITERIO_LABELS = {
	CE: "CE",
	CR: "CR",
} as const;

export const FNMOVIMFINAN_CENTRORESULTADOREGRACRITERIO_LABELS = {
	CER: "CER",
	CR: "CR",
} as const;

export const FNMOVIMFINAN_CONCILIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNMOVIMFINAN_ESTRUTURACENTROCUSTOCENTRORESULTADO_LABELS = {
	CC: "CC",
	CR: "CR",
} as const;

export const FNMOVIMFINAN_TIPOLANC_LABELS = {
	M: "M",
	P: "P",
	R: "R",
	D: "D",
	C: "C",
	AC: "AC",
	AF: "AF",
	T: "T",
} as const;

export const FNMOVIMFINAN_TIPORECEBIMENTO_LABELS = {
	D: "D",
	H: "H",
	C: "C",
	CD: "CD",
	DP: "DP",
	T: "T",
	P: "P",
	DC: "DC",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_movim_finanCentroCustoRegraCriterioSchema = z.enum(
	["CE", "CR"],
	{
		error: () => ({
			message: "centro_custo_regra_criterio: valores válidos são [CE, CR]",
		}),
	},
);

export const fn_movim_finanCentroResultadoRegraCriterioSchema = z.enum(
	["CER", "CR"],
	{
		error: () => ({
			message: "centro_resultado_regra_criterio: valores válidos são [CER, CR]",
		}),
	},
);

export const fn_movim_finanConciliadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "conciliado: valores válidos são [S, N]" }),
});

export const fn_movim_finanEstruturaCentroCustoCentroResultadoSchema = z.enum(
	["CC", "CR"],
	{
		error: () => ({
			message:
				"estrutura_centro_custo_centro_resultado: valores válidos são [CC, CR]",
		}),
	},
);

export const fn_movim_finanTipoLancSchema = z.enum(
	["M", "P", "R", "D", "C", "AC", "AF", "T"],
	{
		error: () => ({
			message: "tipo_lanc: valores válidos são [M, P, R, D, C, AC, AF, T]",
		}),
	},
);

export const fn_movim_finanTipoRecebimentoSchema = z.enum(
	["D", "H", "C", "CD", "DP", "T", "P", "DC", "B"],
	{
		error: () => ({
			message:
				"tipo_recebimento: valores válidos são [D, H, C, CD, DP, T, P, DC, B]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnMovimFinanCentroCustoRegraCriterio = z.infer<
	typeof fn_movim_finanCentroCustoRegraCriterioSchema
>;

export type FnMovimFinanCentroResultadoRegraCriterio = z.infer<
	typeof fn_movim_finanCentroResultadoRegraCriterioSchema
>;

export type FnMovimFinanConciliado = z.infer<
	typeof fn_movim_finanConciliadoSchema
>;

export type FnMovimFinanEstruturaCentroCustoCentroResultado = z.infer<
	typeof fn_movim_finanEstruturaCentroCustoCentroResultadoSchema
>;

export type FnMovimFinanTipoLanc = z.infer<typeof fn_movim_finanTipoLancSchema>;

export type FnMovimFinanTipoRecebimento = z.infer<
	typeof fn_movim_finanTipoRecebimentoSchema
>;
