/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { im_imovel_imgPrincipalSchema } from "./labels";

export const IM_IMOVEL_IMG_TABLE_NAME = "im_imovel_img";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_imovel_imgBaseSchema = z.object({
	id: z.number(),
	id_imovel: z.number(),
	imagem: z.string(),
	imagem_big: z.string(),
	imagem_thumb: z.string(),
	principal: im_imovel_imgPrincipalSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_imovel_imgSchema = im_imovel_imgBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_imovel_imgCreateSchema = im_imovel_imgSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_imovel_imgUpdateSchema = im_imovel_imgCreateSchema.partial();
