/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PAIS_TABLE_NAME = "pais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const paisBaseSchema = z.object({
	id: z.number(),
	api_id: z.number(),
	codigo_pais: z.string(),
	iso: z.string(),
	iso3: z.string(),
	nome: z.string(),
	numeric_code: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const paisSchema = paisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const paisCreateSchema = paisSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const paisUpdateSchema = paisCreateSchema.partial();
