/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CATEGORIA_PATRIMONIO_TABLE_NAME = "categoria_patrimonio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const categoria_patrimonioBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	forma_depreciacao: z.number(),
	id_categoria_depreciacao: z.number(),
	revisar_em: z.number(),
	taxa_depreciacao: z.number(),
	vida_util: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const categoria_patrimonioSchema = categoria_patrimonioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const categoria_patrimonioCreateSchema = categoria_patrimonioSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const categoria_patrimonioUpdateSchema =
	categoria_patrimonioCreateSchema.partial();
