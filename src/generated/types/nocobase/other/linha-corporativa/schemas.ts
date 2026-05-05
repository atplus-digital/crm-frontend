/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";
import { linha_corporativaTipoSchema } from "./labels";

export const T_LINHA_CORPORATIVA_TABLE_NAME = "t_linha_corporativa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const linha_corporativaBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_iccid_corporativo: z.string(),
	f_numero_movel_corporativo: z.string(),
	f_tipo: linha_corporativaTipoSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const linha_corporativaRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const linha_corporativaSchema = linha_corporativaBaseSchema.extend(
	linha_corporativaRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const linha_corporativaCreateSchema = linha_corporativaSchema.omit({
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
export const linha_corporativaUpdateSchema =
	linha_corporativaCreateSchema.partial();
