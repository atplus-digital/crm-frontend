/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { event_logStatusSchema } from "./labels";

export const EVENT_LOG_TABLE_NAME = "event_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const event_logBaseSchema = z.object({
	id: z.number(),
	duration_seconds: z.number(),
	end_time: z.string(),
	error_message: z.string(),
	event_name: z.string(),
	rows_affected: z.number(),
	start_time: z.string(),
	status: event_logStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const event_logSchema = event_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const event_logCreateSchema = event_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const event_logUpdateSchema = event_logCreateSchema.partial();
