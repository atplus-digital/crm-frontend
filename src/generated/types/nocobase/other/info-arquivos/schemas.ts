/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
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
	createdBy: z.number().nullable(),
	f_arquivos: z.number().nullable(),
	f_funcionarios: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const info_arquivosSchema = info_arquivosBaseSchema.merge(
	info_arquivosRelationSchema,
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
