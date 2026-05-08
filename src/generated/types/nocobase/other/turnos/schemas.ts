/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";

export const T_TURNOS_TABLE_NAME = "t_turnos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const turnosBaseSchema = z.object({
	id: z.number(),
	f_turno: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const turnosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const turnosSchema = turnosBaseSchema.extend(turnosRelationSchema.shape);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const turnosCreateSchema = turnosSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_funcionarios: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const turnosUpdateSchema = turnosCreateSchema.partial();
