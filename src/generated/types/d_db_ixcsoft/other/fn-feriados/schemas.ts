/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_FERIADOS_TABLE_NAME = "fn_feriados";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_feriadosBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	descricao: z.string(),
	id_filial: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_feriadosSchema = fn_feriadosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_feriadosCreateSchema = fn_feriadosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_feriadosUpdateSchema = fn_feriadosCreateSchema.partial();
