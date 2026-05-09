/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOSTAUTH_TABLE_NAME = "radpostauth";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpostauthBaseSchema = z.object({
	id: z.number(),
	authdate: z.string(),
	pass: z.string(),
	reply: z.string(),
	username: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpostauthSchema = radpostauthBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpostauthCreateSchema = radpostauthSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpostauthUpdateSchema = radpostauthCreateSchema.partial();
