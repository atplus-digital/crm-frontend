/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const STATUS_ITEM_TABLE_NAME = "status_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const status_itemBaseSchema = z.object({
	id: z.number(),
	status_item: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const status_itemSchema = status_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const status_itemCreateSchema = status_itemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const status_itemUpdateSchema = status_itemCreateSchema.partial();
