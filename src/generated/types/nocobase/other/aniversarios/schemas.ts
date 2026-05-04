/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
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
	createdBy: z.number().nullable(),
	f_foto_aniversario: z.number().nullable(),
	f_funcionarios: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const aniversariosSchema = aniversariosBaseSchema.merge(
	aniversariosRelationSchema,
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
