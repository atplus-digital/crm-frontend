/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ORIGEM_X_TIPOS_TABLE_NAME = "origem_x_tipos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const origem_x_tiposBaseSchema = z.object({
	f_fk_origem_tipo_1: z.number(),
	f_fk_origem_tipo_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const origem_x_tiposSchema = origem_x_tiposBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const origem_x_tiposCreateSchema = origem_x_tiposSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const origem_x_tiposUpdateSchema = origem_x_tiposCreateSchema.partial();
