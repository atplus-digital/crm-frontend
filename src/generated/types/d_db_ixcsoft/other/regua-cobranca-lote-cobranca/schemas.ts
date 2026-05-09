/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const REGUA_COBRANCA_LOTE_COBRANCA_TABLE_NAME =
	"regua_cobranca_lote_cobranca";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_lote_cobrancaBaseSchema = z.object({
	id: z.number(),
	regua_cobranca_cobrancas_id: z.number(),
	regua_cobranca_lote_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_lote_cobrancaSchema =
	regua_cobranca_lote_cobrancaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_lote_cobrancaCreateSchema =
	regua_cobranca_lote_cobrancaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_lote_cobrancaUpdateSchema =
	regua_cobranca_lote_cobrancaCreateSchema.partial();
