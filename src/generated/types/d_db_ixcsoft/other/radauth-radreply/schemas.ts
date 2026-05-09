/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_RADREPLY_TABLE_NAME = "radauth_radreply";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_radreplyBaseSchema = z.object({
	id: z.number(),
	attribute: z.string(),
	id_auth_usuario: z.number(),
	op: z.string(),
	ultima_atualizacao: z.string(),
	username: z.string(),
	value: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radauth_radreplySchema = radauth_radreplyBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_radreplyCreateSchema = radauth_radreplySchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_radreplyUpdateSchema =
	radauth_radreplyCreateSchema.partial();
