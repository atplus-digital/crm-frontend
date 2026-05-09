/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	pedido_osStatusFatOsSchema,
	pedido_osStatusPedidoOsSchema,
	pedido_osTipoProdutosSchema,
} from "./labels";

export const PEDIDO_OS_TABLE_NAME = "pedido_os";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pedido_osBaseSchema = z.object({
	id: z.number(),
	data_emissao: z.string(),
	data_saida: z.string(),
	filial_id: z.number(),
	id_cliente: z.number(),
	id_comissionado: z.number(),
	id_condicao_pagamento: z.number(),
	id_contrato: z.number(),
	id_oss_chamado: z.number(),
	id_saida: z.number(),
	id_tipo_documento: z.number(),
	status_fat_os: pedido_osStatusFatOsSchema,
	status_pedido_os: pedido_osStatusPedidoOsSchema,
	tipo_produtos: pedido_osTipoProdutosSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pedido_osSchema = pedido_osBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pedido_osCreateSchema = pedido_osSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pedido_osUpdateSchema = pedido_osCreateSchema.partial();
