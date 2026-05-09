/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_FILMES_CATEGORIA_TABLE_NAME = "hs_filmes_categoria";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_filmes_categoriaBaseSchema = z.object({
	id: z.number(),
	categoria: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_filmes_categoriaSchema = hs_filmes_categoriaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_filmes_categoriaCreateSchema = hs_filmes_categoriaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_filmes_categoriaUpdateSchema =
	hs_filmes_categoriaCreateSchema.partial();
