/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_renegociacaoPrevisaoSchema,
	fn_renegociacaoStatusSchema,
} from "./labels";

export const FN_RENEGOCIACAO_TABLE_NAME = "fn_renegociacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_renegociacaoBaseSchema = z.object({
	id: z.number(),
	data_emissao: z.string(),
	data_exclusao: z.string(),
	data_finalizada: z.string(),
	id_carteira_cobranca: z.number(),
	id_cliente: z.number(),
	id_condicao_pagamento: z.number(),
	id_conta: z.number(),
	id_contrato: z.number(),
	id_filial: z.number(),
	operador_responsavel_final: z.number(),
	operador_responsavel_inicial: z.number(),
	previsao: fn_renegociacaoPrevisaoSchema,
	status: fn_renegociacaoStatusSchema,
	valor_acrescimos: z.number(),
	valor_descontos: z.number(),
	valor_parcelas: z.number(),
	valor_total: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_renegociacaoSchema = fn_renegociacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_renegociacaoCreateSchema = fn_renegociacaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_renegociacaoUpdateSchema =
	fn_renegociacaoCreateSchema.partial();
