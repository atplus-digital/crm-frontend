/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { restricoes_serasaIntermediadorSchema } from "./labels";

export const RESTRICOES_SERASA_TABLE_NAME = "restricoes_serasa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const restricoes_serasaBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
	intermediador: restricoes_serasaIntermediadorSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const restricoes_serasaSchema = restricoes_serasaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const restricoes_serasaCreateSchema = restricoes_serasaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const restricoes_serasaUpdateSchema =
	restricoes_serasaCreateSchema.partial();
