/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { centro_custo_categoriaStatusSchema } from "./labels";

export const CENTRO_CUSTO_CATEGORIA_TABLE_NAME = "centro_custo_categoria";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_categoriaBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
	status: centro_custo_categoriaStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custo_categoriaSchema = centro_custo_categoriaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_categoriaCreateSchema =
	centro_custo_categoriaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_categoriaUpdateSchema =
	centro_custo_categoriaCreateSchema.partial();
