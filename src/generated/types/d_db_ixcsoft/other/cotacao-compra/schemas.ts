/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const COTACAO_COMPRA_TABLE_NAME = "cotacao_compra";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cotacao_compraBaseSchema = z.object({
	id: z.number(),
	cotacao: z.string(),
	data: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cotacao_compraSchema = cotacao_compraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cotacao_compraCreateSchema = cotacao_compraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cotacao_compraUpdateSchema = cotacao_compraCreateSchema.partial();
