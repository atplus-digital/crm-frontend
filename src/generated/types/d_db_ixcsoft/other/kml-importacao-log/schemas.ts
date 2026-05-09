/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const KML_IMPORTACAO_LOG_TABLE_NAME = "kml_importacao_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const kml_importacao_logBaseSchema = z.object({
	id: z.number(),
	dados_importados: z.string(),
	data_importacao: z.string(),
	id_projeto: z.number(),
	id_usuario: z.number(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const kml_importacao_logSchema = kml_importacao_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const kml_importacao_logCreateSchema = kml_importacao_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const kml_importacao_logUpdateSchema =
	kml_importacao_logCreateSchema.partial();
