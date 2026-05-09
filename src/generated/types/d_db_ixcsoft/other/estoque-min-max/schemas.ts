/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ESTOQUE_MIN_MAX_TABLE_NAME = "estoque_min_max";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const estoque_min_maxBaseSchema = z.object({
	id: z.number(),
	estoque_atual: z.number(),
	id_almox: z.number(),
	id_produto: z.number(),
	qtd_max: z.number(),
	qtd_min: z.number(),
	requisitar_mutiplo_de: z.number(),
	status: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const estoque_min_maxSchema = estoque_min_maxBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const estoque_min_maxCreateSchema = estoque_min_maxSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const estoque_min_maxUpdateSchema =
	estoque_min_maxCreateSchema.partial();
