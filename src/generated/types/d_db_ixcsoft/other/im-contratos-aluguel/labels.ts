/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IMCONTRATOSALUGUEL_FINALIDADE_LABELS = {
	R: "R",
	C: "C",
	RC: "RC",
} as const;

export const IMCONTRATOSALUGUEL_FINANCEIROAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMCONTRATOSALUGUEL_REAJUSTEAUTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMCONTRATOSALUGUEL_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const IMCONTRATOSALUGUEL_TIPOCOBRANCA_LABELS = {
	A: "A",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const im_contratos_aluguelFinalidadeSchema = z.enum(["R", "C", "RC"], {
	error: () => ({ message: "finalidade: valores válidos são [R, C, RC]" }),
});

export const im_contratos_aluguelFinanceiroAutomaticoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "financeiro_automatico: valores válidos são [S, N]",
		}),
	},
);

export const im_contratos_aluguelReajusteAutoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "reajuste_auto: valores válidos são [S, N]" }),
});

export const im_contratos_aluguelStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const im_contratos_aluguelTipoCobrancaSchema = z.enum(["A", "P"], {
	error: () => ({ message: "tipo_cobranca: valores válidos são [A, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ImContratosAluguelFinalidade = z.infer<
	typeof im_contratos_aluguelFinalidadeSchema
>;

export type ImContratosAluguelFinanceiroAutomatico = z.infer<
	typeof im_contratos_aluguelFinanceiroAutomaticoSchema
>;

export type ImContratosAluguelReajusteAuto = z.infer<
	typeof im_contratos_aluguelReajusteAutoSchema
>;

export type ImContratosAluguelStatus = z.infer<
	typeof im_contratos_aluguelStatusSchema
>;

export type ImContratosAluguelTipoCobranca = z.infer<
	typeof im_contratos_aluguelTipoCobrancaSchema
>;
