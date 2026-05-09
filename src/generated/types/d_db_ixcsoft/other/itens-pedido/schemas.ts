/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	itens_pedidoAssistenciaSchema,
	itens_pedidoTipoSchema,
} from "./labels";

export const ITENS_PEDIDO_TABLE_NAME = "itens_pedido";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const itens_pedidoBaseSchema = z.object({
	id: z.number(),
	assistencia: itens_pedidoAssistenciaSchema,
	codigo: z.number(),
	comissao: z.number(),
	composicao: z.number(),
	data_carregamento: z.string(),
	data_corte: z.string(),
	data_montagem: z.string(),
	desconto: z.number(),
	descricao_produto: z.string(),
	fator_conv_unidade: z.number(),
	filial_id: z.number(),
	id_almox: z.number(),
	id_carregamento: z.number(),
	id_corte_tecido: z.number(),
	id_filial: z.number(),
	id_moeda: z.number(),
	id_pedido: z.number(),
	id_prioridade: z.number(),
	id_produto: z.number(),
	id_saida: z.number(),
	id_unidade: z.number(),
	modulos: z.number(),
	obs: z.string(),
	pecas: z.number(),
	percentual_desconto: z.number(),
	produto: z.string(),
	qtde: z.number(),
	qtde_saldo: z.number(),
	qtde_tecido_almofadas: z.number(),
	qtde_tecido_base: z.number(),
	saldo_cancelado: z.number(),
	status_item: z.number(),
	tecido: z.number(),
	tipo: itens_pedidoTipoSchema,
	valor: z.number(),
	valor_comissao: z.number(),
	valor_temp: z.number(),
	valor_total: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const itens_pedidoSchema = itens_pedidoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const itens_pedidoCreateSchema = itens_pedidoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const itens_pedidoUpdateSchema = itens_pedidoCreateSchema.partial();
