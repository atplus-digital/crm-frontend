/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_CUSTO_RATEIO_TABLE_NAME = "centro_custo_rateio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_rateioBaseSchema = z.object({
	id: z.number(),
	data_contabilizacao: z.string(),
	id_centro_custo_projeto: z.number(),
	id_centro_custo_rel_centro_custo_categoria: z.number(),
	id_fn_apagar: z.number(),
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
export const centro_custo_rateioSchema = centro_custo_rateioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_rateioCreateSchema = centro_custo_rateioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_rateioUpdateSchema =
	centro_custo_rateioCreateSchema.partial();
