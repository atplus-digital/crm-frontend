/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_TURNOS_TABLE_NAME = "t_turnos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const turnosBaseSchema = z.object({
	id: z.number(),
	f_turno: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const turnosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_funcionarios: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const turnosSchema = turnosBaseSchema.merge(turnosRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const turnosCreateSchema = turnosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_funcionarios: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const turnosUpdateSchema = turnosCreateSchema.partial();
