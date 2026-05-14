/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MESSAGEQUEUE_FIELD_LABELS = {
	created_at: "created_at",
	id: "id",
	id_integration: "id_integration",
	message: "message",
	random_id_ixc: "random_id_ixc",
	status: "status",
} as const;

export const MESSAGEQUEUE_STATUS_LABELS = {
	WS: "WS",
	WR: "WR",
	WT: "WT",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const message_queueStatusSchema = z.enum(["WS", "WR", "WT"], {
	error: () => ({ message: "status: valores válidos são [WS, WR, WT]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MessageQueueStatus = z.infer<typeof message_queueStatusSchema>;
