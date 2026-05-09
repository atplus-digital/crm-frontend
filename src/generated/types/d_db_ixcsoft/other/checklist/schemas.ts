/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CHECKLIST_TABLE_NAME = "checklist";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const checklistBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const checklistSchema = checklistBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const checklistCreateSchema = checklistSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const checklistUpdateSchema = checklistCreateSchema.partial();
