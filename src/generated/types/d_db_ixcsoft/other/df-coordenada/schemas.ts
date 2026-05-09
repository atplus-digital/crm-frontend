/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_COORDENADA_TABLE_NAME = "df_coordenada";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_coordenadaBaseSchema = z.object({
	id: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_coordenadaSchema = df_coordenadaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_coordenadaCreateSchema = df_coordenadaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_coordenadaUpdateSchema = df_coordenadaCreateSchema.partial();
