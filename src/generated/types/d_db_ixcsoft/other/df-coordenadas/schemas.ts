/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_COORDENADAS_TABLE_NAME = "df_coordenadas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_coordenadasBaseSchema = z.object({
	id: z.number(),
	latitude: z.string(),
	longitude: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_coordenadasSchema = df_coordenadasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_coordenadasCreateSchema = df_coordenadasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_coordenadasUpdateSchema = df_coordenadasCreateSchema.partial();
