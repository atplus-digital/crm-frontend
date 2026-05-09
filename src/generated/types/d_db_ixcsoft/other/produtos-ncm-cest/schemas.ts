/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_NCM_CEST_TABLE_NAME = "produtos_ncm_cest";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_ncm_cestBaseSchema = z.object({
	id: z.number(),
	codigo_cest: z.string(),
	descricao: z.string(),
	id_produtos_ncm: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_ncm_cestSchema = produtos_ncm_cestBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_ncm_cestCreateSchema = produtos_ncm_cestSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_ncm_cestUpdateSchema =
	produtos_ncm_cestCreateSchema.partial();
