/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const BAIXALOTE_TIPO_LABELS = {
	E: "E",
	S: "S",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const baixa_loteTipoSchema = z.enum(["E", "S", "I"], {
	error: () => ({ message: "tipo: valores válidos são [E, S, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type BaixaLoteTipo = z.infer<typeof baixa_loteTipoSchema>;
