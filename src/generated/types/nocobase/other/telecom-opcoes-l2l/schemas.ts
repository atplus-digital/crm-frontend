/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_TELECOM_OPCOES_L2L_TABLE_NAME = "t_telecom_opcoes_l2l";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_opcoes_l2lBaseSchema = z.object({
	id: z.number(),
	f_rmfqnk0k53u: z.number(),
	f_velocidade: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_opcoes_l2lRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_opcoes_l2lSchema = telecom_opcoes_l2lBaseSchema.merge(
	telecom_opcoes_l2lRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_opcoes_l2lCreateSchema = telecom_opcoes_l2lSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_opcoes_l2lUpdateSchema =
	telecom_opcoes_l2lCreateSchema.partial();
