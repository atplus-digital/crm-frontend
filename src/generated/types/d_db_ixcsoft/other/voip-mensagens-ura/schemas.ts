/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_MENSAGENS_URA_TABLE_NAME = "voip_mensagens_ura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_mensagens_uraBaseSchema = z.object({
	id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_mensagens_uraSchema = voip_mensagens_uraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_mensagens_uraCreateSchema = voip_mensagens_uraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_mensagens_uraUpdateSchema =
	voip_mensagens_uraCreateSchema.partial();
