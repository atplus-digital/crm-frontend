/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_TELECOM_RACKS_TABLE_NAME = "t_telecom_racks";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_racksBaseSchema = z.object({
	id: z.number(),
	f_fk_rack_fila: z.number(),
	f_fk_rack_sala: z.number(),
	f_fk_site_racks: z.number(),
	f_rack: z.string(),
	f_sigla: z.string(),
	parentId: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_racksRelationSchema = z.object({
	children: telecom_racksBaseSchema.array(),
	createdBy: z.number().nullable(),
	f_fila: z.number().nullable(),
	f_fk_rack_a_recursos: z.number().array(),
	f_fk_rack_ativos: z.number().array(),
	f_fk_rack_sites: z.number().nullable(),
	f_fk_recursos_rack_b: z.number().array(),
	f_sala: z.number().nullable(),
	parent: telecom_racksBaseSchema.nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_racksSchema = telecom_racksBaseSchema.merge(
	telecom_racksRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_racksCreateSchema = telecom_racksSchema.omit({
	children: true,
	createdAt: true,
	createdBy: true,
	f_fila: true,
	f_fk_rack_a_recursos: true,
	f_fk_rack_ativos: true,
	f_fk_rack_sites: true,
	f_fk_recursos_rack_b: true,
	f_sala: true,
	id: true,
	parent: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_racksUpdateSchema = telecom_racksCreateSchema.partial();
