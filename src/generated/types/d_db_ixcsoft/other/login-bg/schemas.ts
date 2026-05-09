/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { login_bgTypeSchema } from "./labels";

export const LOGIN_BG_TABLE_NAME = "login_bg";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const login_bgBaseSchema = z.object({
	id: z.number(),
	checksum: z.number(),
	date: z.string(),
	html: z.string(),
	nonce: z.string(),
	type: login_bgTypeSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const login_bgSchema = login_bgBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const login_bgCreateSchema = login_bgSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const login_bgUpdateSchema = login_bgCreateSchema.partial();
