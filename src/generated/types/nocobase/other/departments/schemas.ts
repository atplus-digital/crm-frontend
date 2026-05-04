/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DEPARTMENTS_TABLE_NAME = "departments";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const departmentsBaseSchema = z.object({
	id: z.number(),
	sort: z.number(),
	isLeaf: z.boolean(),
	title: z.string(),
	updatedById: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const departmentsRelationSchema = z.object({
	children: departmentsBaseSchema.array(),
	createdBy: z.number().nullable(),
	members: z.number().array(),
	owners: z.number().array(),
	parent: departmentsBaseSchema.nullable(),
	roles: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const departmentsSchema = departmentsBaseSchema.merge(
	departmentsRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const departmentsCreateSchema = departmentsSchema.omit({
	children: true,
	createdBy: true,
	createdById: true,
	id: true,
	members: true,
	owners: true,
	parent: true,
	roles: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const departmentsUpdateSchema = departmentsCreateSchema.partial();
