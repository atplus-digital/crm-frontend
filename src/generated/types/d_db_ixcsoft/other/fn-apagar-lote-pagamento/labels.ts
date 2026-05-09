/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARLOTEPAGAMENTO_COMUNICADO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_lote_pagamentoComunicadoSchema = z.enum(
	["S", "N", "P", "E"],
	{
		error: () => ({ message: "comunicado: valores válidos são [S, N, P, E]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarLotePagamentoComunicado = z.infer<
	typeof fn_apagar_lote_pagamentoComunicadoSchema
>;
