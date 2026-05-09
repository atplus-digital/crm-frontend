/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSUARIOS_CONSUMO_M_TABLE_NAME = "radusuarios_consumo_m";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_consumo_mBaseSchema = z.object({
	id: z.number(),
	consumo: z.number(),
	consumo_upload: z.number(),
	data: z.string(),
	id_login: z.number(),
	maior_id_consumo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_consumo_mSchema = radusuarios_consumo_mBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_consumo_mCreateSchema =
	radusuarios_consumo_mSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_consumo_mUpdateSchema =
	radusuarios_consumo_mCreateSchema.partial();
