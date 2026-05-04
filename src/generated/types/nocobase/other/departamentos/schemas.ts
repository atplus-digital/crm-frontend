/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_DEPARTAMENTOS_TABLE_NAME = "t_departamentos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const departamentosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_nome: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const departamentosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_responsavel: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const departamentosSchema = departamentosBaseSchema.merge(
	departamentosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const departamentosCreateSchema = departamentosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_responsavel: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const departamentosUpdateSchema = departamentosCreateSchema.partial();
