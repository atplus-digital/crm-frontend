/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const OBSERVER_2FA_MODIFY_TABLE_NAME = "observer_2fa_modify";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const observer_2fa_modifyBaseSchema = z.object({
	id: z.number(),
	alter_date: z.string(),
	campo: z.string(),
	estado: z.string(),
	grupo_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const observer_2fa_modifySchema = observer_2fa_modifyBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const observer_2fa_modifyCreateSchema = observer_2fa_modifySchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const observer_2fa_modifyUpdateSchema =
	observer_2fa_modifyCreateSchema.partial();
