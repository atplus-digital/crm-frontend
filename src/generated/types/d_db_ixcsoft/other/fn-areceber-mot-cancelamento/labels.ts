/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERMOTCANCELAMENTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBERMOTCANCELAMENTO_CONSIDERARCHURN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBERMOTCANCELAMENTO_FINALIDADE_LABELS = {
	C: "C",
	F: "F",
	A: "A",
} as const;

export const FNARECEBERMOTCANCELAMENTO_INADIMPLENCIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNARECEBERMOTCANCELAMENTO_LIBERAPERIODO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const FNARECEBERMOTCANCELAMENTO_NAOVENCIDOSINADIMPLENCIA_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_mot_cancelamentoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const fn_areceber_mot_cancelamentoConsiderarChurnSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "considerar_churn: valores válidos são [S, N]" }),
	},
);

export const fn_areceber_mot_cancelamentoFinalidadeSchema = z.enum(
	["C", "F", "A"],
	{
		error: () => ({ message: "finalidade: valores válidos são [C, F, A]" }),
	},
);

export const fn_areceber_mot_cancelamentoInadimplenciaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "inadimplencia: valores válidos são [S, N]" }),
	},
);

export const fn_areceber_mot_cancelamentoLiberaPeriodoSchema = z.enum(
	["N", "S"],
	{
		error: () => ({ message: "libera_periodo: valores válidos são [N, S]" }),
	},
);

export const fn_areceber_mot_cancelamentoNaoVencidosInadimplenciaSchema =
	z.enum(["N", "S"], {
		error: () => ({
			message: "nao_vencidos_inadimplencia: valores válidos são [N, S]",
		}),
	});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberMotCancelamentoAtivo = z.infer<
	typeof fn_areceber_mot_cancelamentoAtivoSchema
>;

export type FnAreceberMotCancelamentoConsiderarChurn = z.infer<
	typeof fn_areceber_mot_cancelamentoConsiderarChurnSchema
>;

export type FnAreceberMotCancelamentoFinalidade = z.infer<
	typeof fn_areceber_mot_cancelamentoFinalidadeSchema
>;

export type FnAreceberMotCancelamentoInadimplencia = z.infer<
	typeof fn_areceber_mot_cancelamentoInadimplenciaSchema
>;

export type FnAreceberMotCancelamentoLiberaPeriodo = z.infer<
	typeof fn_areceber_mot_cancelamentoLiberaPeriodoSchema
>;

export type FnAreceberMotCancelamentoNaoVencidosInadimplencia = z.infer<
	typeof fn_areceber_mot_cancelamentoNaoVencidosInadimplenciaSchema
>;
