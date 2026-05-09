/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_CATEGORIA_TIPO_TABLE_NAME = "df_categoria_tipo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_categoria_tipoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	tabela: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_categoria_tipoSchema = df_categoria_tipoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_categoria_tipoCreateSchema = df_categoria_tipoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_categoria_tipoUpdateSchema =
	df_categoria_tipoCreateSchema.partial();
