/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADGRUPOS_POOLS_TABLE_NAME = "radgrupos_pools";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radgrupos_poolsBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_rad_pool: z.number(),
	nome: z.string(),
	nomepoolipv6: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radgrupos_poolsSchema = radgrupos_poolsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radgrupos_poolsCreateSchema = radgrupos_poolsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radgrupos_poolsUpdateSchema =
	radgrupos_poolsCreateSchema.partial();
