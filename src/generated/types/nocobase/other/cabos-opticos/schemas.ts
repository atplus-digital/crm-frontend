/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_CABOS_OPTICOS_TABLE_NAME = "t_cabos_opticos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cabos_opticosBaseSchema = z.object({
	id: z.number(),
	f_comprimento: z.number(),
	f_comprimento_estoque: z.number(),
	f_comprimento_utilizado: z.number(),
	f_fabricante: z.string(),
	f_id_cabo: z.string(),
	f_obs: z.string(),
	f_quantidade_fibras: z.string(),
	f_tipo: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const cabos_opticosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_historico: z.number().array(),
	f_utilizacao_cabos: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cabos_opticosSchema = cabos_opticosBaseSchema.merge(
	cabos_opticosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cabos_opticosCreateSchema = cabos_opticosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_historico: true,
	f_utilizacao_cabos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cabos_opticosUpdateSchema = cabos_opticosCreateSchema.partial();
