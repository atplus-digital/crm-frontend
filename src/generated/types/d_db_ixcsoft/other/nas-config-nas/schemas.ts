/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const NAS_CONFIG_NAS_TABLE_NAME = "nas_config_nas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nas_config_nasBaseSchema = z.object({
	id: z.number(),
	id_config: z.number(),
	id_nas: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nas_config_nasSchema = nas_config_nasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nas_config_nasCreateSchema = nas_config_nasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nas_config_nasUpdateSchema = nas_config_nasCreateSchema.partial();
