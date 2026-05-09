/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { voip_uraGravacaoSchema } from "./labels";

export const VOIP_URA_TABLE_NAME = "voip_ura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_uraBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	gravacao: voip_uraGravacaoSchema,
	id_modulo_entrada: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_uraSchema = voip_uraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_uraCreateSchema = voip_uraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_uraUpdateSchema = voip_uraCreateSchema.partial();
