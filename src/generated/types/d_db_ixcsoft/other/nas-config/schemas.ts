/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const NAS_CONFIG_TABLE_NAME = "nas_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nas_configBaseSchema = z.object({
	id: z.number(),
	comando: z.string(),
	comentario: z.string(),
	regra: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nas_configSchema = nas_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nas_configCreateSchema = nas_configSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nas_configUpdateSchema = nas_configCreateSchema.partial();
