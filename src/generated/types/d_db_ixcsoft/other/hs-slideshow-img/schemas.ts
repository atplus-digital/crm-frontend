/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_SLIDESHOW_IMG_TABLE_NAME = "hs_slideshow_img";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_slideshow_imgBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_slideshow: z.number(),
	imagem: z.string(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_slideshow_imgSchema = hs_slideshow_imgBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_slideshow_imgCreateSchema = hs_slideshow_imgSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_slideshow_imgUpdateSchema =
	hs_slideshow_imgCreateSchema.partial();
