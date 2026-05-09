/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ENTRADADFE_ULTIMONSU_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const entrada_dfeUltimoNsuSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ultimo_nsu: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EntradaDfeUltimoNsu = z.infer<typeof entrada_dfeUltimoNsuSchema>;
