/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const API_USAGE_SUMMARY_TABLE_NAME = "api_usage_summary";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const api_usage_summaryBaseSchema = z.object({
	id: z.number(),
	date: z.string(),
	endpoint: z.string(),
	method: z.string(),
	usage_count: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const api_usage_summarySchema = api_usage_summaryBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const api_usage_summaryCreateSchema = api_usage_summarySchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const api_usage_summaryUpdateSchema =
	api_usage_summaryCreateSchema.partial();
