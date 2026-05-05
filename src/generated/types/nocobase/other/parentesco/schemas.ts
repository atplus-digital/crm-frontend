/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { f_funcionariosBaseSchema } from "../funcionarios/schemas";

export const T_PARENTESCO_TABLE_NAME = "t_parentesco";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const parentescoBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_cpf: z.string(),
	f_nome: z.string(),
	f_vinculo_colaborador: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const parentescoRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const parentescoSchema = parentescoBaseSchema.extend(
	parentescoRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const parentescoCreateSchema = parentescoSchema.omit({
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
export const parentescoUpdateSchema = parentescoCreateSchema.partial();
