/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_TELECOM_SALAS_TABLE_NAME = "t_telecom_salas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_salasBaseSchema = z.object({
	id: z.number(),
	f_fk_salas: z.number(),
	f_nome: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_salasRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_fk_sala_racks: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_salasSchema = telecom_salasBaseSchema.merge(
	telecom_salasRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_salasCreateSchema = telecom_salasSchema.omit({
	createdAt: true,
	createdBy: true,
	f_fk_sala_racks: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_salasUpdateSchema = telecom_salasCreateSchema.partial();
