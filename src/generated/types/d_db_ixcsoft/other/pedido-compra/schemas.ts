/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	pedido_compraStatusLiberadoSchema,
	pedido_compraStatusSchema,
	pedido_compraTipoDescontoSchema,
	pedido_compraTipoFreteSchema,
} from "./labels";

export const PEDIDO_COMPRA_TABLE_NAME = "pedido_compra";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pedido_compraBaseSchema = z.object({
	id: z.number(),
	cancelamento_descricao: z.string(),
	data: z.string(),
	data_liberacao: z.string(),
	filial_id: z.number(),
	id_colaborador: z.number(),
	id_condicoes_pagamento: z.number(),
	id_fornecedor: z.number(),
	id_modelo: z.number(),
	obs: z.string(),
	previsao_entrega: z.string(),
	previsao_faturamento: z.string(),
	status: pedido_compraStatusSchema,
	status_liberado: pedido_compraStatusLiberadoSchema,
	tipo_desconto: pedido_compraTipoDescontoSchema,
	tipo_frete: pedido_compraTipoFreteSchema,
	valor_desconto: z.number(),
	valor_frete: z.number(),
	valor_negociado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pedido_compraSchema = pedido_compraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pedido_compraCreateSchema = pedido_compraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pedido_compraUpdateSchema = pedido_compraCreateSchema.partial();
