/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_contatos_categoriaPublicadoSchema } from "./labels";

export const HS_CONTATOS_CATEGORIA_TABLE_NAME = "hs_contatos_categoria";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_contatos_categoriaBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	imagem: z.string(),
	nivel_acesso: z.string(),
	ordem_categoria: z.string(),
	posicao_imagem: z.string(),
	publicado: hs_contatos_categoriaPublicadoSchema,
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_contatos_categoriaSchema = hs_contatos_categoriaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_contatos_categoriaCreateSchema =
	hs_contatos_categoriaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_contatos_categoriaUpdateSchema =
	hs_contatos_categoriaCreateSchema.partial();
