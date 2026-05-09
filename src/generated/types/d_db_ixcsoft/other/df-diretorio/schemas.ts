/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_DIRETORIO_TABLE_NAME = "df_diretorio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_diretorioBaseSchema = z.object({
	id: z.number(),
	id_cliente: z.number(),
	id_diretorio_pai: z.number(),
	id_projeto: z.number(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_diretorioSchema = df_diretorioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_diretorioCreateSchema = df_diretorioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_diretorioUpdateSchema = df_diretorioCreateSchema.partial();
