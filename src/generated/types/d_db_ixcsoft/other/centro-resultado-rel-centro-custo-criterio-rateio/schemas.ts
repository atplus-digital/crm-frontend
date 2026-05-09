/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_RESULTADO_REL_CENTRO_CUSTO_CRITERIO_RATEIO_TABLE_NAME =
	"centro_resultado_rel_centro_custo_criterio_rateio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_resultado_rel_centro_custo_criterio_rateioBaseSchema =
	z.object({
		id: z.number(),
		id_centro_custo_criterio_rateio: z.number(),
		id_centro_resultado_rel_centro_custo_categoria: z.number(),
		porcentagem: z.number(),
	});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_resultado_rel_centro_custo_criterio_rateioSchema =
	centro_resultado_rel_centro_custo_criterio_rateioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_resultado_rel_centro_custo_criterio_rateioCreateSchema =
	centro_resultado_rel_centro_custo_criterio_rateioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_resultado_rel_centro_custo_criterio_rateioUpdateSchema =
	centro_resultado_rel_centro_custo_criterio_rateioCreateSchema.partial();
