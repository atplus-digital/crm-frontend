/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_STATS_PAGINAS_TABLE_NAME = "hs_stats_paginas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_stats_paginasBaseSchema = z.object({
	id: z.number(),
	data_entrada: z.string(),
	data_saida: z.string(),
	id_visita: z.number(),
	titulo: z.string(),
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_stats_paginasSchema = hs_stats_paginasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_stats_paginasCreateSchema = hs_stats_paginasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_stats_paginasUpdateSchema =
	hs_stats_paginasCreateSchema.partial();
