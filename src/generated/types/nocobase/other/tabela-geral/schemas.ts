/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_TABELA_GERAL_TABLE_NAME = "t_tabela_geral";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tabela_geralBaseSchema = z.object({
	id: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const tabela_geralRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tabela_geralSchema = tabela_geralBaseSchema.merge(
	tabela_geralRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tabela_geralCreateSchema = tabela_geralSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tabela_geralUpdateSchema = tabela_geralCreateSchema.partial();
