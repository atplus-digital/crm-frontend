/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_KIT_TABLE_NAME = "su_oss_kit";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_kitBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_kitSchema = su_oss_kitBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_kitCreateSchema = su_oss_kitSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_kitUpdateSchema = su_oss_kitCreateSchema.partial();
