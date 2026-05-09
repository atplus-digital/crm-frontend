/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TV_CANAIS_TABLE_NAME = "tv_canais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tv_canaisBaseSchema = z.object({
	id: z.number(),
	id_plataforma: z.number(),
	nome: z.string(),
	plataforma: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tv_canaisSchema = tv_canaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tv_canaisCreateSchema = tv_canaisSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tv_canaisUpdateSchema = tv_canaisCreateSchema.partial();
