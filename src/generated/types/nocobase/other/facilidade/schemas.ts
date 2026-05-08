/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_FACILIDADE_TABLE_NAME = "t_facilidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const facilidadeBaseSchema = z.object({
	id: z.number(),
	f_descricao: z.string(),
	f_nome: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const facilidadeRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const facilidadeSchema = facilidadeBaseSchema.extend(
	facilidadeRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const facilidadeCreateSchema = facilidadeSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const facilidadeUpdateSchema = facilidadeCreateSchema.partial();
