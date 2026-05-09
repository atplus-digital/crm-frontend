/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_NUMERO_ENTRANTE_POOL_TABLE_NAME = "voip_numero_entrante_pool";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_numero_entrante_poolBaseSchema = z.object({
	id: z.number(),
	ddd: z.string(),
	dias_para_cancelamento_automatico: z.number(),
	nome: z.string(),
	numeracao_final: z.string(),
	numeracao_inicial: z.string(),
	range_gerado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_numero_entrante_poolSchema =
	voip_numero_entrante_poolBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_numero_entrante_poolCreateSchema =
	voip_numero_entrante_poolSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_numero_entrante_poolUpdateSchema =
	voip_numero_entrante_poolCreateSchema.partial();
