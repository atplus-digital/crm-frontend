/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_LOGOMARCA_TABLE_NAME = "hs_logomarca";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_logomarcaBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	imagem: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_logomarcaSchema = hs_logomarcaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_logomarcaCreateSchema = hs_logomarcaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_logomarcaUpdateSchema = hs_logomarcaCreateSchema.partial();
