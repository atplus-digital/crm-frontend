/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { remocao_spc_serasaFormaRemocaoSchema } from "./labels";

export const REMOCAO_SPC_SERASA_TABLE_NAME = "remocao_spc_serasa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const remocao_spc_serasaBaseSchema = z.object({
	id: z.number(),
	data_baixa: z.string(),
	forma_remocao: remocao_spc_serasaFormaRemocaoSchema,
	id_baixa: z.number(),
	id_negativacao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const remocao_spc_serasaSchema = remocao_spc_serasaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const remocao_spc_serasaCreateSchema = remocao_spc_serasaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const remocao_spc_serasaUpdateSchema =
	remocao_spc_serasaCreateSchema.partial();
