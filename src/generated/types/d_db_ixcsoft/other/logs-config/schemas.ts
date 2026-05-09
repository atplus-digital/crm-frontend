/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOGS_CONFIG_TABLE_NAME = "logs_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_configBaseSchema = z.object({
	id: z.number(),
	ativo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_configSchema = logs_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_configCreateSchema = logs_configSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_configUpdateSchema = logs_configCreateSchema.partial();
