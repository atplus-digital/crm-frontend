/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { radcacheStatusSchema } from "./labels";

export const RADCACHE_TABLE_NAME = "radcache";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radcacheBaseSchema = z.object({
	id: z.number(),
	ip: z.string(),
	nome: z.string(),
	porta: z.string(),
	status: radcacheStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radcacheSchema = radcacheBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radcacheCreateSchema = radcacheSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radcacheUpdateSchema = radcacheCreateSchema.partial();
