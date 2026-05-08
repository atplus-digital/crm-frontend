/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";

export const T_SISTEMAS_ACESSOS_TABLE_NAME = "t_sistemas_acessos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sistemas_acessosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.string(),
	f_sistemas_acessos: z.string(),
	f_url: z.string(),
	f_url2: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const sistemas_acessosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sistemas_acessosSchema = sistemas_acessosBaseSchema.extend(
	sistemas_acessosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sistemas_acessosCreateSchema = sistemas_acessosSchema.omit({
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
export const sistemas_acessosUpdateSchema =
	sistemas_acessosCreateSchema.partial();
