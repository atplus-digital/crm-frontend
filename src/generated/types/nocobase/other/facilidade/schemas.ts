/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_FACILIDADE_TABLE_NAME = "t_facilidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const facilidadeBaseSchema = z.object({
	id: z.number(),
	f_descricao: z.string(),
	f_nome: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const facilidadeRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const facilidadeSchema = facilidadeBaseSchema.merge(
	facilidadeRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const facilidadeCreateSchema = facilidadeSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const facilidadeUpdateSchema = facilidadeCreateSchema.partial();
