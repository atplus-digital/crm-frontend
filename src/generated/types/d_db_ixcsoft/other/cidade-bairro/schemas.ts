/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CIDADE_BAIRRO_TABLE_NAME = "cidade_bairro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cidade_bairroBaseSchema = z.object({
	id: z.number(),
	bairro: z.string(),
	id_cidade: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cidade_bairroSchema = cidade_bairroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cidade_bairroCreateSchema = cidade_bairroSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cidade_bairroUpdateSchema = cidade_bairroCreateSchema.partial();
