/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_SLIDESHOW_TABLE_NAME = "hs_slideshow";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_slideshowBaseSchema = z.object({
	id: z.number(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_slideshowSchema = hs_slideshowBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_slideshowCreateSchema = hs_slideshowSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_slideshowUpdateSchema = hs_slideshowCreateSchema.partial();
