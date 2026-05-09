/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { message_queueStatusSchema } from "./labels";

export const MESSAGE_QUEUE_TABLE_NAME = "message_queue";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const message_queueBaseSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	id_integration: z.number(),
	message: z.string(),
	random_id_ixc: z.string(),
	status: message_queueStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const message_queueSchema = message_queueBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const message_queueCreateSchema = message_queueSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const message_queueUpdateSchema = message_queueCreateSchema.partial();
