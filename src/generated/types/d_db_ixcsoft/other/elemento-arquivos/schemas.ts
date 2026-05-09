/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ELEMENTO_ARQUIVOS_TABLE_NAME = "elemento_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const elemento_arquivosBaseSchema = z.object({
	id: z.number(),
	data_descricao: z.string(),
	data_envio: z.string(),
	descricao: z.string(),
	id_elemento: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
	tabela: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const elemento_arquivosSchema = elemento_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const elemento_arquivosCreateSchema = elemento_arquivosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const elemento_arquivosUpdateSchema =
	elemento_arquivosCreateSchema.partial();
