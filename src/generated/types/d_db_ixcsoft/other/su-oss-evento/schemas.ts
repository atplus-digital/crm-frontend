/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_EVENTO_TABLE_NAME = "su_oss_evento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_eventoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_eventoSchema = su_oss_eventoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_eventoCreateSchema = su_oss_eventoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_eventoUpdateSchema = su_oss_eventoCreateSchema.partial();
