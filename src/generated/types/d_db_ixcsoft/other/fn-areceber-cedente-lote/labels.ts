/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERCEDENTELOTE_STATUS_LABELS = {
	A: "A",
	P: "P",
	F: "F",
	E: "E",
} as const;

export const FNARECEBERCEDENTELOTE_TIPORETORNO_LABELS = {
	D: "D",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_cedente_loteStatusSchema = z.enum(
	["A", "P", "F", "E"],
	{
		error: () => ({ message: "status: valores válidos são [A, P, F, E]" }),
	},
);

export const fn_areceber_cedente_loteTipoRetornoSchema = z.enum(["D", "B"], {
	error: () => ({ message: "tipo_retorno: valores válidos são [D, B]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberCedenteLoteStatus = z.infer<
	typeof fn_areceber_cedente_loteStatusSchema
>;

export type FnAreceberCedenteLoteTipoRetorno = z.infer<
	typeof fn_areceber_cedente_loteTipoRetornoSchema
>;
