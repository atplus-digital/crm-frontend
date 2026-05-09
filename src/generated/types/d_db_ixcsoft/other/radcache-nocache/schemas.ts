/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADCACHE_NOCACHE_TABLE_NAME = "radcache_nocache";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radcache_nocacheBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_radcache: z.number(),
	ip_rede: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radcache_nocacheSchema = radcache_nocacheBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radcache_nocacheCreateSchema = radcache_nocacheSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radcache_nocacheUpdateSchema =
	radcache_nocacheCreateSchema.partial();
