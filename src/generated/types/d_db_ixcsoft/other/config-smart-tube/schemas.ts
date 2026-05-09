/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CONFIG_SMART_TUBE_TABLE_NAME = "config_smart_tube";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const config_smart_tubeBaseSchema = z.object({
	id: z.number(),
	endereco_ip: z.string(),
	porta: z.string(),
	prefix: z.string(),
	proximo_number: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const config_smart_tubeSchema = config_smart_tubeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const config_smart_tubeCreateSchema = config_smart_tubeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const config_smart_tubeUpdateSchema =
	config_smart_tubeCreateSchema.partial();
