/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OMNICHANNELMESSAGEQUEUE_STATUS_LABELS = {
	A: "A",
	S: "S",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const omnichannel_message_queueStatusSchema = z.enum(["A", "S", "F"], {
	error: () => ({ message: "status: valores válidos são [A, S, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OmnichannelMessageQueueStatus = z.infer<
	typeof omnichannel_message_queueStatusSchema
>;
