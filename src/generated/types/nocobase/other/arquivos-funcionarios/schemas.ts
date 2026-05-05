/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";
import { info_arquivosBaseSchema } from "../info-arquivos/schemas";

export const T_ARQUIVOS_FUNCIONARIOS_TABLE_NAME = "t_arquivos_funcionarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const arquivos_funcionariosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_fk_info_arquivos: z.number(),
	extname: z.string(),
	filename: z.string(),
	meta: z.string(),
	mimetype: z.string(),
	path: z.string(),
	preview: z.string(),
	size: z.number(),
	title: z.string(),
	url: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const arquivos_funcionariosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	f_info_arquivos: z.lazy(() => info_arquivosBaseSchema.nullable()),
	storage: z.number().nullable(),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const arquivos_funcionariosSchema =
	arquivos_funcionariosBaseSchema.extend(
		arquivos_funcionariosRelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const arquivos_funcionariosCreateSchema =
	arquivos_funcionariosSchema.omit({
		createdAt: true,
		createdBy: true,
		f_funcionarios: true,
		f_info_arquivos: true,
		id: true,
		storage: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const arquivos_funcionariosUpdateSchema =
	arquivos_funcionariosCreateSchema.partial();
