/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_banner_categoriasPublicadoSchema } from "./labels";

export const HS_BANNER_CATEGORIAS_TABLE_NAME = "hs_banner_categorias";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_banner_categoriasBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	imagem: z.string(),
	nivel_acesso: z.number(),
	ordem_categoria: z.number(),
	posicao_imagem: z.string(),
	publicado: hs_banner_categoriasPublicadoSchema,
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_banner_categoriasSchema = hs_banner_categoriasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_banner_categoriasCreateSchema = hs_banner_categoriasSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_banner_categoriasUpdateSchema =
	hs_banner_categoriasCreateSchema.partial();
