/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_QUEUE_RULES_TABLE_NAME = "voip_queue_rules";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_queue_rulesBaseSchema = z.object({
	id: z.number(),
	max_penalty: z.string(),
	min_penalty: z.string(),
	rule_name: z.string(),
	time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_queue_rulesSchema = voip_queue_rulesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_queue_rulesCreateSchema = voip_queue_rulesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_queue_rulesUpdateSchema =
	voip_queue_rulesCreateSchema.partial();
