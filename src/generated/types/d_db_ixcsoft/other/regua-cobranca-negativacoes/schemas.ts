/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const REGUA_COBRANCA_NEGATIVACOES_TABLE_NAME =
	"regua_cobranca_negativacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_negativacoesBaseSchema = z.object({
	id: z.number(),
	id_lote: z.number(),
	regua_cobranca_cobranca_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_negativacoesSchema =
	regua_cobranca_negativacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_negativacoesCreateSchema =
	regua_cobranca_negativacoesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_negativacoesUpdateSchema =
	regua_cobranca_negativacoesCreateSchema.partial();
