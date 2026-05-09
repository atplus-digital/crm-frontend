/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARREMESSALOTE_TIPOREMESSA_LABELS = {
	D: "D",
	F: "F",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_remessa_loteTipoRemessaSchema = z.enum(["D", "F", "S"], {
	error: () => ({ message: "tipo_remessa: valores válidos são [D, F, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarRemessaLoteTipoRemessa = z.infer<
	typeof fn_apagar_remessa_loteTipoRemessaSchema
>;
