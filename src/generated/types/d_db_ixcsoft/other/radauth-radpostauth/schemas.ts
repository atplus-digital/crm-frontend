/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_RADPOSTAUTH_TABLE_NAME = "radauth_radpostauth";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_radpostauthBaseSchema = z.object({
	id: z.number(),
	authdate: z.string(),
	pass: z.string(),
	reply: z.string(),
	username: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radauth_radpostauthSchema = radauth_radpostauthBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_radpostauthCreateSchema = radauth_radpostauthSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_radpostauthUpdateSchema =
	radauth_radpostauthCreateSchema.partial();
