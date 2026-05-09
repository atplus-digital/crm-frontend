/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSUARIOS_CONSUMO_TABLE_NAME = "radusuarios_consumo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_consumoBaseSchema = z.object({
	id: z.number(),
	consumo: z.number(),
	consumo_upload: z.number(),
	data: z.string(),
	id_login: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_consumoSchema = radusuarios_consumoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_consumoCreateSchema = radusuarios_consumoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_consumoUpdateSchema =
	radusuarios_consumoCreateSchema.partial();
