/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FORNECEDOR_ARQUIVOS_TABLE_NAME = "fornecedor_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fornecedor_arquivosBaseSchema = z.object({
	id: z.number(),
	data_envio: z.string(),
	descricao: z.string(),
	id_fornecedor: z.number(),
	local_arquivo: z.string(),
	nome_arquivos: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fornecedor_arquivosSchema = fornecedor_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fornecedor_arquivosCreateSchema = fornecedor_arquivosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fornecedor_arquivosUpdateSchema =
	fornecedor_arquivosCreateSchema.partial();
