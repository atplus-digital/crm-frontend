/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_UTILI_CABOS_TABLE_NAME = "t_utili_cabos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const utili_cabosBaseSchema = z.object({
	id: z.number(),
	f_fk_cabos_opticos: z.number(),
	f_comprimento_utilizado: z.number(),
	f_obs_historico: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const utili_cabosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_cabos_opticos: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const utili_cabosSchema = utili_cabosBaseSchema.merge(
	utili_cabosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const utili_cabosCreateSchema = utili_cabosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_cabos_opticos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const utili_cabosUpdateSchema = utili_cabosCreateSchema.partial();
