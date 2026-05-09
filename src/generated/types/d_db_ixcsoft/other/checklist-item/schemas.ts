/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CHECKLIST_ITEM_TABLE_NAME = "checklist_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const checklist_itemBaseSchema = z.object({
	id: z.number(),
	chave_ordenacao: z.number(),
	descricao: z.string(),
	id_checklist: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const checklist_itemSchema = checklist_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const checklist_itemCreateSchema = checklist_itemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const checklist_itemUpdateSchema = checklist_itemCreateSchema.partial();
