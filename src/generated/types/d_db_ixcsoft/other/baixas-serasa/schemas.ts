/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { baixas_serasaIntermediadorSchema } from "./labels";

export const BAIXAS_SERASA_TABLE_NAME = "baixas_serasa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const baixas_serasaBaseSchema = z.object({
	id: z.number(),
	codigo: z.number(),
	descricao: z.string(),
	intermediador: baixas_serasaIntermediadorSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const baixas_serasaSchema = baixas_serasaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const baixas_serasaCreateSchema = baixas_serasaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const baixas_serasaUpdateSchema = baixas_serasaCreateSchema.partial();
