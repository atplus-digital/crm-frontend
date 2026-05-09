/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CHAVE_INTEGRADOR_TABLE_NAME = "chave_integrador";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const chave_integradorBaseSchema = z.object({
	id: z.number(),
	id_chave: z.number(),
	id_integrador: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const chave_integradorSchema = chave_integradorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const chave_integradorCreateSchema = chave_integradorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const chave_integradorUpdateSchema =
	chave_integradorCreateSchema.partial();
