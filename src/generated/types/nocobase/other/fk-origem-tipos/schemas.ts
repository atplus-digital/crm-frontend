/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const F_FK_ORIGEM_TIPOS_TABLE_NAME = "f_fk_origem_tipos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const f_fk_origem_tiposBaseSchema = z.object({
	f_fk1_origem_tipo: z.number(),
	f_fk2_origem_tipo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const f_fk_origem_tiposSchema = f_fk_origem_tiposBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const f_fk_origem_tiposCreateSchema = f_fk_origem_tiposSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const f_fk_origem_tiposUpdateSchema =
	f_fk_origem_tiposCreateSchema.partial();
