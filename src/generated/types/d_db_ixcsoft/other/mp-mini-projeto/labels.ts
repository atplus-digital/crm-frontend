/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MPMINIPROJETO_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

export const MPMINIPROJETO_TIPO_LABELS = {
	C: "C",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const mp_mini_projetoStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

export const mp_mini_projetoTipoSchema = z.enum(["C", "E"], {
	error: () => ({ message: "tipo: valores válidos são [C, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MpMiniProjetoStatus = z.infer<typeof mp_mini_projetoStatusSchema>;

export type MpMiniProjetoTipo = z.infer<typeof mp_mini_projetoTipoSchema>;
