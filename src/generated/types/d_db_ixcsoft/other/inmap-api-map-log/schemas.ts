/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INMAP_API_MAP_LOG_TABLE_NAME = "inmap_api_map_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const inmap_api_map_logBaseSchema = z.object({
	id: z.number(),
	cliente: z.string(),
	data_hora: z.string(),
	produto: z.string(),
	resposta: z.string(),
	status_code: z.number(),
	tipo_api: z.string(),
	tipo_requisicao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const inmap_api_map_logSchema = inmap_api_map_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const inmap_api_map_logCreateSchema = inmap_api_map_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const inmap_api_map_logUpdateSchema =
	inmap_api_map_logCreateSchema.partial();
