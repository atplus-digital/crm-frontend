/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_adm_categoriasPublicadoSchema } from "./labels";

export const HS_ADM_CATEGORIAS_TABLE_NAME = "hs_adm_categorias";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_adm_categoriasBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	imagem: z.string(),
	nivel_acesso: z.number(),
	ordem_categoria: z.number(),
	posicao_imagem: z.string(),
	publicado: hs_adm_categoriasPublicadoSchema,
	secao: z.number(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_adm_categoriasSchema = hs_adm_categoriasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_adm_categoriasCreateSchema = hs_adm_categoriasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_adm_categoriasUpdateSchema =
	hs_adm_categoriasCreateSchema.partial();
