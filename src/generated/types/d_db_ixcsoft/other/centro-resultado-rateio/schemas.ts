/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_RESULTADO_RATEIO_TABLE_NAME = "centro_resultado_rateio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_resultado_rateioBaseSchema = z.object({
	id: z.number(),
	data_contabilizacao: z.string(),
	id_centro_resultado_rel_centro_custo_categoria: z.number(),
	id_fn_movim_finan: z.number(),
	id_movimento_produtos: z.number(),
	id_planejamento_analitico: z.number(),
	porcentagem: z.number(),
	quantidade: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_resultado_rateioSchema = centro_resultado_rateioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_resultado_rateioCreateSchema =
	centro_resultado_rateioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_resultado_rateioUpdateSchema =
	centro_resultado_rateioCreateSchema.partial();
