/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADSICIPARAMETROS_ACATAREL712_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_sici_parametrosAcataRel712Schema = z.enum(["S", "N"], {
	error: () => ({ message: "acata_rel712: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadSiciParametrosAcataRel712 = z.infer<
	typeof rad_sici_parametrosAcataRel712Schema
>;
