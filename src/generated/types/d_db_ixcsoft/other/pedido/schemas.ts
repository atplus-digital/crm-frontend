/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { pedidoAtivoSchema, pedidoTipoSchema } from "./labels";

export const PEDIDO_TABLE_NAME = "pedido";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pedidoBaseSchema = z.object({
	id: z.number(),
	ativo: pedidoAtivoSchema,
	cliente: z.number(),
	companhia_maritima: z.string(),
	comprador: z.string(),
	condicao_pagamento: z.string(),
	data: z.string(),
	data_carga: z.string(),
	data_draft: z.string(),
	data_entrega: z.string(),
	data_navio: z.string(),
	embalagem: z.string(),
	filial_id: z.number(),
	forma_entrega: z.string(),
	forma_pagamento: z.number(),
	id_fornecedor: z.number(),
	id_oss_mensagem: z.number(),
	incoterm: z.string(),
	local_entrega: z.string(),
	marca_pintura: z.string(),
	modalidade_frete: z.number(),
	numero_po: z.string(),
	numero_reserva: z.string(),
	obs: z.string(),
	outra_forma_pgto: z.string(),
	percentual_desconto: z.number(),
	porto_destino: z.string(),
	porto_saida: z.string(),
	status: z.number(),
	tipo: pedidoTipoSchema,
	total_containers: z.number(),
	vendedor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pedidoSchema = pedidoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pedidoCreateSchema = pedidoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pedidoUpdateSchema = pedidoCreateSchema.partial();
