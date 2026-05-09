/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { doc_filtrosFavoritoSchema } from "./labels";

export const DOC_FILTROS_TABLE_NAME = "doc_filtros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const doc_filtrosBaseSchema = z.object({
	id: z.number(),
	favorito: doc_filtrosFavoritoSchema,
	id_template: z.number(),
	id_usuario: z.number(),
	json: z.string(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const doc_filtrosSchema = doc_filtrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const doc_filtrosCreateSchema = doc_filtrosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const doc_filtrosUpdateSchema = doc_filtrosCreateSchema.partial();
