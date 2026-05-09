/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_NAS_TABLE_NAME = "radauth_nas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_nasBaseSchema = z.object({
	id: z.number(),
	community: z.string(),
	description: z.string(),
	nasname: z.string(),
	ports: z.number(),
	secret: z.string(),
	server: z.string(),
	shortname: z.string(),
	type: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radauth_nasSchema = radauth_nasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_nasCreateSchema = radauth_nasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_nasUpdateSchema = radauth_nasCreateSchema.partial();
