/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { favoriteAtivoSchema } from "./labels";

export const FAVORITE_TABLE_NAME = "favorite";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const favoriteBaseSchema = z.object({
	id: z.number(),
	ativo: favoriteAtivoSchema,
	fullpath: z.string(),
	grid: z.string(),
	usuario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const favoriteSchema = favoriteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const favoriteCreateSchema = favoriteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const favoriteUpdateSchema = favoriteCreateSchema.partial();
