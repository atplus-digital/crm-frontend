/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CARREGAMENTO_TABLE_NAME = "carregamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const carregamentoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	filial_id: z.number(),
	obs: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const carregamentoSchema = carregamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const carregamentoCreateSchema = carregamentoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const carregamentoUpdateSchema = carregamentoCreateSchema.partial();
