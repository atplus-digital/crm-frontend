/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";
import { arquivos_funcionariosBaseSchema } from "../arquivos-funcionarios/schemas";
import { info_arquivosArquivoExternoSchema } from "./labels";

export const T_INFO_ARQUIVOS_TABLE_NAME = "t_info_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const info_arquivosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_arquivo_externo: info_arquivosArquivoExternoSchema,
	f_titulo: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const info_arquivosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_arquivos: z.lazy(() => arquivos_funcionariosBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const info_arquivosSchema = info_arquivosBaseSchema.extend(
	info_arquivosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const info_arquivosCreateSchema = info_arquivosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_arquivos: true,
	f_funcionarios: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const info_arquivosUpdateSchema = info_arquivosCreateSchema.partial();
