/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const USER_INTERACTIONS_TABLE_NAME = "user_interactions";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const user_interactionsBaseSchema = z.object({
	id: z.number(),
	action: z.string(),
	created_at: z.string(),
	resource_type: z.string(),
	user_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const user_interactionsSchema = user_interactionsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const user_interactionsCreateSchema = user_interactionsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const user_interactionsUpdateSchema =
	user_interactionsCreateSchema.partial();
