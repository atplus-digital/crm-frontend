/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const COMENTARIO_DIRECAOINOUT_LABELS = {
	IN: "IN",
	OUT: "OUT",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const comentarioDirecaoInOutSchema = z.enum(["IN", "OUT"], {
	error: () => ({ message: "direcao_in_out: valores válidos são [IN, OUT]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ComentarioDirecaoInOut = z.infer<
	typeof comentarioDirecaoInOutSchema
>;
