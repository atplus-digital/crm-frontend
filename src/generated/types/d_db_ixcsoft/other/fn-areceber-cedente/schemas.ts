/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_areceber_cedenteStatusSchema } from "./labels";

export const FN_ARECEBER_CEDENTE_TABLE_NAME = "fn_areceber_cedente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_cedenteBaseSchema = z.object({
	id: z.number(),
	abatimentos: z.number(),
	acrescimos: z.number(),
	agencia_codigo: z.string(),
	ass_gerencianet: z.string(),
	cod_mov: z.string(),
	codigo_autorizacao: z.string(),
	conta_numero: z.string(),
	data_credito: z.string(),
	data_hora: z.string(),
	data_ocorrencia: z.string(),
	data_vencimento: z.string(),
	file_md5: z.string(),
	fn_areceber_assinatura: z.string(),
	id_carteira_cobranca: z.number(),
	id_cliente: z.number(),
	id_cobranca: z.number(),
	id_lote_retorno: z.number(),
	id_movim_finan: z.number(),
	iof: z.number(),
	local_pagamento: z.string(),
	motivo: z.string(),
	nosso_numero: z.string(),
	obs: z.string(),
	status: fn_areceber_cedenteStatusSchema,
	tarifa: z.number(),
	temp: z.string(),
	tipo_carteira: z.string(),
	valor: z.number(),
	valor_atualizado: z.number(),
	valor_liquido: z.number(),
	valor_original: z.number(),
	valor_pago: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_cedenteSchema = fn_areceber_cedenteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_cedenteCreateSchema = fn_areceber_cedenteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_cedenteUpdateSchema =
	fn_areceber_cedenteCreateSchema.partial();
