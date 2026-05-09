/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_links_categoriasPublicadoSchema } from "./labels";

export const HS_LINKS_CATEGORIAS_TABLE_NAME = "hs_links_categorias";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_links_categoriasBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	imagem: z.string(),
	nivel_acesso: z.string(),
	ordem_categoria: z.string(),
	posicao_imagem: z.string(),
	publicado: hs_links_categoriasPublicadoSchema,
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_links_categoriasSchema = hs_links_categoriasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_links_categoriasCreateSchema = hs_links_categoriasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_links_categoriasUpdateSchema =
	hs_links_categoriasCreateSchema.partial();
