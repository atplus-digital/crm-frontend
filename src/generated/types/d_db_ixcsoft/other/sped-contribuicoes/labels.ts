/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SPEDCONTRIBUICOES_STATUS_LABELS = {
	A: "A",
	P: "P",
	G: "G",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sped_contribuicoesStatusSchema = z.enum(["A", "P", "G", "E"], {
	error: () => ({ message: "status: valores válidos são [A, P, G, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SpedContribuicoesStatus = z.infer<
	typeof sped_contribuicoesStatusSchema
>;
