/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	df_fusaoIoElementoDestinoSchema,
	df_fusaoIoElementoOrigemSchema,
} from "./labels";

export const DF_FUSAO_TABLE_NAME = "df_fusao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_fusaoBaseSchema = z.object({
	id: z.number(),
	bandeja: z.number(),
	id_conexao_elemento_destino: z.number(),
	id_conexao_elemento_origem: z.number(),
	id_elemento_destino: z.number(),
	id_elemento_origem: z.number(),
	id_elemento_principal: z.number(),
	id_tipo_conexao: z.number(),
	id_tipo_fusao: z.number(),
	interface_elemento_destino: z.number(),
	interface_elemento_origem: z.number(),
	io_elemento_destino: df_fusaoIoElementoDestinoSchema,
	io_elemento_origem: df_fusaoIoElementoOrigemSchema,
	porta_elemento_destino: z.number(),
	porta_elemento_origem: z.number(),
	tabela_elemento_destino: z.string(),
	tabela_elemento_origem: z.string(),
	tabela_elemento_principal: z.string(),
	tipo_elemento_destino: z.string(),
	tipo_elemento_origem: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_fusaoSchema = df_fusaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_fusaoCreateSchema = df_fusaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_fusaoUpdateSchema = df_fusaoCreateSchema.partial();
