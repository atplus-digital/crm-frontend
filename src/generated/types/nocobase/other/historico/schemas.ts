/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_HISTORICO_TABLE_NAME = "t_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const historicoBaseSchema = z.object({
	id: z.number(),
	f_fk_cabos_opticos: z.number(),
	f_comprimento_estoque_anterior: z.number(),
	f_comprimento_estoque_atual: z.number(),
	f_comprimento_utilizado: z.number(),
	f_observacao: z.string(),
	f_solicitante: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const historicoRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_cabos_opticos: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const historicoSchema = historicoBaseSchema.merge(
	historicoRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const historicoCreateSchema = historicoSchema.omit({
	createdAt: true,
	createdBy: true,
	f_cabos_opticos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const historicoUpdateSchema = historicoCreateSchema.partial();
