/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { regua_cobranca_lotesSituacaoSchema } from "./labels";

export const REGUA_COBRANCA_LOTES_TABLE_NAME = "regua_cobranca_lotes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_lotesBaseSchema = z.object({
	id: z.number(),
	cobrancas_enviadas: z.number(),
	comunicacao_falhas: z.number(),
	data_envio: z.string(),
	falhas: z.number(),
	situacao: regua_cobranca_lotesSituacaoSchema,
	total_cobrancas: z.number(),
	valor_total: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_lotesSchema = regua_cobranca_lotesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_lotesCreateSchema = regua_cobranca_lotesSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_lotesUpdateSchema =
	regua_cobranca_lotesCreateSchema.partial();
