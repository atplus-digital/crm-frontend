/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSUARIOS_CONSUMO_D_TABLE_NAME = "radusuarios_consumo_d";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_consumo_dBaseSchema = z.object({
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
export const radusuarios_consumo_dSchema = radusuarios_consumo_dBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_consumo_dCreateSchema =
	radusuarios_consumo_dSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_consumo_dUpdateSchema =
	radusuarios_consumo_dCreateSchema.partial();
