/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADREPLY_TABLE_NAME = "radreply";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radreplyBaseSchema = z.object({
	id: z.number(),
	attribute: z.string(),
	id_usuario: z.number(),
	op: z.string(),
	ultima_atualizacao: z.string(),
	username: z.string(),
	value: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radreplySchema = radreplyBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radreplyCreateSchema = radreplySchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radreplyUpdateSchema = radreplyCreateSchema.partial();
