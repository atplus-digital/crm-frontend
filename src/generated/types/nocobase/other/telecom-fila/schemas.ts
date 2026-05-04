/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_TELECOM_FILA_TABLE_NAME = "t_telecom_fila";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_filaBaseSchema = z.object({
	id: z.number(),
	f_fk_fila: z.number(),
	f_nome: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_filaRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_fk_fila_rack: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_filaSchema = telecom_filaBaseSchema.merge(
	telecom_filaRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_filaCreateSchema = telecom_filaSchema.omit({
	createdAt: true,
	createdBy: true,
	f_fk_fila_rack: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_filaUpdateSchema = telecom_filaCreateSchema.partial();
