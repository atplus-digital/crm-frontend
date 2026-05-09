/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADIPPOOLFIXO_TABLE_NAME = "radippoolfixo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radippoolfixoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	rede: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radippoolfixoSchema = radippoolfixoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radippoolfixoCreateSchema = radippoolfixoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radippoolfixoUpdateSchema = radippoolfixoCreateSchema.partial();
