/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_apagar_lotePrevisaoSchema,
	fn_apagar_loteStatusSchema,
	fn_apagar_loteTipoPagamentoSchema,
	fn_apagar_loteTipoSchema,
} from "./labels";

export const FN_APAGAR_LOTE_TABLE_NAME = "fn_apagar_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_loteBaseSchema = z.object({
	id: z.number(),
	arquivo_importacao: z.string(),
	data_emissao: z.string(),
	data_hora_criacao: z.string(),
	data_hora_processamento: z.string(),
	data_referencia: z.string(),
	descricao: z.string(),
	id_filial: z.number(),
	id_fornecedor: z.number(),
	previsao: fn_apagar_lotePrevisaoSchema,
	status: fn_apagar_loteStatusSchema,
	tipo: fn_apagar_loteTipoSchema,
	tipo_pagamento: fn_apagar_loteTipoPagamentoSchema,
	total_erros: z.number(),
	total_registros_importados: z.number(),
	total_registros_lidos: z.number(),
	valor_total_importado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_loteSchema = fn_apagar_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_loteCreateSchema = fn_apagar_loteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_loteUpdateSchema = fn_apagar_loteCreateSchema.partial();
