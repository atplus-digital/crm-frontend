/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TARIFASGRUPOS_PADRAO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tarifas_gruposPadraoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "padrao: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TarifasGruposPadrao = z.infer<typeof tarifas_gruposPadraoSchema>;
