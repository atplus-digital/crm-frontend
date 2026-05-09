/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUOSSCHAMADOFEEDBACKS_STATUS_LABELS = {
	EN: "EN",
	RE: "RE",
	EX: "EX",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_oss_chamado_feedbacksStatusSchema = z.enum(["EN", "RE", "EX"], {
	error: () => ({ message: "status: valores válidos são [EN, RE, EX]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuOssChamadoFeedbacksStatus = z.infer<
	typeof su_oss_chamado_feedbacksStatusSchema
>;
