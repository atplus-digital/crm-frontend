/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FLFOLHA_DESCONTARADIANTAMENTOS_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fl_folhaDescontarAdiantamentosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "descontar_adiantamentos: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FlFolhaDescontarAdiantamentos = z.infer<
	typeof fl_folhaDescontarAdiantamentosSchema
>;
