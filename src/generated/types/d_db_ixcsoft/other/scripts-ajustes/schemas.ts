/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SCRIPTS_AJUSTES_TABLE_NAME = "scripts_ajustes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const scripts_ajustesBaseSchema = z.object({
	id: z.number(),
	date_time: z.string(),
	executado: z.number(),
	nome: z.string(),
	versao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const scripts_ajustesSchema = scripts_ajustesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const scripts_ajustesCreateSchema = scripts_ajustesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const scripts_ajustesUpdateSchema =
	scripts_ajustesCreateSchema.partial();
