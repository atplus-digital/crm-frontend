/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSALTERACOESMANUAIS_EXECUTOU_LABELS = {
	U: "U",
	S: "S",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logs_alteracoes_manuaisExecutouSchema = z.enum(["U", "S", "A"], {
	error: () => ({ message: "executou: valores válidos são [U, S, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsAlteracoesManuaisExecutou = z.infer<
	typeof logs_alteracoes_manuaisExecutouSchema
>;
