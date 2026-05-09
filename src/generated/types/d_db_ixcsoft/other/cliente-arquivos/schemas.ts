/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_ARQUIVOS_TABLE_NAME = "cliente_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_arquivosBaseSchema = z.object({
	id: z.number(),
	data_envio: z.string(),
	descricao: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_termo: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_arquivosSchema = cliente_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_arquivosCreateSchema = cliente_arquivosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_arquivosUpdateSchema =
	cliente_arquivosCreateSchema.partial();
