/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PLAYS_TABLE_NAME = "plays";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const playsBaseSchema = z.object({
	id: z.number(),
	string: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const playsSchema = playsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const playsCreateSchema = playsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const playsUpdateSchema = playsCreateSchema.partial();
