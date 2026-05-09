/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADCAIXAFTTH_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const RADCAIXAFTTH_TIPO_LABELS = {
	P: "P",
	N: "N",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_caixa_ftthStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const rad_caixa_ftthTipoSchema = z.enum(["P", "N", "A"], {
	error: () => ({ message: "tipo: valores válidos são [P, N, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadCaixaFtthStatus = z.infer<typeof rad_caixa_ftthStatusSchema>;

export type RadCaixaFtthTipo = z.infer<typeof rad_caixa_ftthTipoSchema>;
