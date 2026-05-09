/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_RESULTADO_REL_CENTRO_CUSTO_CATEGORIA_TABLE_NAME =
	"centro_resultado_rel_centro_custo_categoria";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_resultado_rel_centro_custo_categoriaBaseSchema = z.object({
	id: z.number(),
	id_centro_custo_categoria: z.number(),
	id_centro_resultado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_resultado_rel_centro_custo_categoriaSchema =
	centro_resultado_rel_centro_custo_categoriaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_resultado_rel_centro_custo_categoriaCreateSchema =
	centro_resultado_rel_centro_custo_categoriaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_resultado_rel_centro_custo_categoriaUpdateSchema =
	centro_resultado_rel_centro_custo_categoriaCreateSchema.partial();
