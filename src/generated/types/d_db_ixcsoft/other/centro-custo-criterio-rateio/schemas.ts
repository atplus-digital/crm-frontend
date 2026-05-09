/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	centro_custo_criterio_rateioEstruturaSchema,
	centro_custo_criterio_rateioStatusSchema,
} from "./labels";

export const CENTRO_CUSTO_CRITERIO_RATEIO_TABLE_NAME =
	"centro_custo_criterio_rateio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_criterio_rateioBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	estrutura: centro_custo_criterio_rateioEstruturaSchema,
	status: centro_custo_criterio_rateioStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custo_criterio_rateioSchema =
	centro_custo_criterio_rateioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_criterio_rateioCreateSchema =
	centro_custo_criterio_rateioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_criterio_rateioUpdateSchema =
	centro_custo_criterio_rateioCreateSchema.partial();
