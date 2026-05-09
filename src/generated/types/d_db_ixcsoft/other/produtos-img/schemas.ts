/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { produtos_imgPrincipalSchema } from "./labels";

export const PRODUTOS_IMG_TABLE_NAME = "produtos_img";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_imgBaseSchema = z.object({
	id: z.number(),
	id_produto: z.number(),
	imagem: z.string(),
	imagem_big: z.string(),
	imagem_thumb: z.string(),
	principal: produtos_imgPrincipalSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_imgSchema = produtos_imgBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_imgCreateSchema = produtos_imgSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_imgUpdateSchema = produtos_imgCreateSchema.partial();
