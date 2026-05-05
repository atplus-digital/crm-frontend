/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { f_funcionariosBaseSchema } from "../funcionarios/schemas";
import { sistemas_acessosBaseSchema } from "../sistemas-acessos/schemas";

export const T_SETOR_TABLE_NAME = "t_setor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const setorBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.string(),
	f_fk_sistemas_acessos: z.string(),
	f_nome_setor: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const setorRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.array()),
	f_funcionarios_1: z.lazy(() => f_funcionariosBaseSchema.array()),
	f_sistemas_acessos: z.lazy(() => sistemas_acessosBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const setorSchema = setorBaseSchema.extend(setorRelationSchema.shape);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const setorCreateSchema = setorSchema.omit({
	createdAt: true,
	createdBy: true,
	f_funcionarios: true,
	f_funcionarios_1: true,
	f_sistemas_acessos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const setorUpdateSchema = setorCreateSchema.partial();
