/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_MODELO_TABLE_NAME = "fn_areceber_modelo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_modeloBaseSchema = z.object({
	id: z.number(),
	nome: z.string(),
	texto: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_modeloSchema = fn_areceber_modeloBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_modeloCreateSchema = fn_areceber_modeloSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_modeloUpdateSchema =
	fn_areceber_modeloCreateSchema.partial();
