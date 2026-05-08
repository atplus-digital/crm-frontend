/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { cabos_opticosBaseSchema } from "../cabos-opticos/schemas";

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
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const historicoRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_cabos_opticos: z.lazy(() => cabos_opticosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const historicoSchema = historicoBaseSchema.extend(
	historicoRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const historicoCreateSchema = historicoSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_cabos_opticos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const historicoUpdateSchema = historicoCreateSchema.partial();
