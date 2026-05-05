/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";
import { foto_aniversarioBaseSchema } from "../foto-aniversario/schemas";
import { aniversariosStatusSchema } from "./labels";

export const T_ANIVERSARIOS_TABLE_NAME = "t_aniversarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const aniversariosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_data_execucao: z.string(),
	f_dia_mes: z.string(),
	f_status: aniversariosStatusSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const aniversariosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_foto_aniversario: z.lazy(() => foto_aniversarioBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const aniversariosSchema = aniversariosBaseSchema.extend(
	aniversariosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const aniversariosCreateSchema = aniversariosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_foto_aniversario: true,
	f_funcionarios: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const aniversariosUpdateSchema = aniversariosCreateSchema.partial();
