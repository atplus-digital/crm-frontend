/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_QUEUE_LOG_TABLE_NAME = "voip_queue_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_queue_logBaseSchema = z.object({
	id: z.number(),
	agent: z.string(),
	callid: z.string(),
	data: z.string(),
	data1: z.string(),
	data2: z.string(),
	data3: z.string(),
	data4: z.string(),
	data5: z.string(),
	event: z.string(),
	queuename: z.string(),
	time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_queue_logSchema = voip_queue_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_queue_logCreateSchema = voip_queue_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_queue_logUpdateSchema = voip_queue_logCreateSchema.partial();
