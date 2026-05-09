/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_DESPESA_TIPO_TABLE_NAME = "fn_despesa_tipo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_despesa_tipoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	planejamento: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_despesa_tipoSchema = fn_despesa_tipoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_despesa_tipoCreateSchema = fn_despesa_tipoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_despesa_tipoUpdateSchema =
	fn_despesa_tipoCreateSchema.partial();
