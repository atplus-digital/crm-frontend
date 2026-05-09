/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_CATEGORIA_TABLE_NAME = "patrimonio_categoria";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_categoriaBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_patrimonio_categoria_depreciacao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_categoriaSchema = patrimonio_categoriaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_categoriaCreateSchema = patrimonio_categoriaSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_categoriaUpdateSchema =
	patrimonio_categoriaCreateSchema.partial();
