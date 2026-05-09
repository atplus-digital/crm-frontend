/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CHAVEN_TABLE_NAME = "cliente_chaveN";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_chavenBaseSchema = z.object({
	id: z.number(),
	chave: z.string(),
	data: z.string(),
	ip: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_chavenSchema = cliente_chavenBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_chavenCreateSchema = cliente_chavenSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_chavenUpdateSchema = cliente_chavenCreateSchema.partial();
