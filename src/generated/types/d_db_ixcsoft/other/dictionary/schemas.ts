/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DICTIONARY_TABLE_NAME = "dictionary";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const dictionaryBaseSchema = z.object({
	id: z.number(),
	attribute: z.string(),
	format: z.string(),
	type: z.string(),
	value: z.string(),
	vendor: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const dictionarySchema = dictionaryBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const dictionaryCreateSchema = dictionarySchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const dictionaryUpdateSchema = dictionaryCreateSchema.partial();
