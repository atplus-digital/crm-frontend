/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const MOEDAS_TABLE_NAME = "moedas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const moedasBaseSchema = z.object({
	id: z.number(),
	nome: z.string(),
	simbolo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const moedasSchema = moedasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const moedasCreateSchema = moedasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const moedasUpdateSchema = moedasCreateSchema.partial();
