/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PEDIDO_REQUIASICAO_TABLE_NAME = "pedido_requiasicao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pedido_requiasicaoBaseSchema = z.object({
	id: z.number(),
	id_pedido_compra: z.number(),
	id_requisicao: z.number(),
	temp: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pedido_requiasicaoSchema = pedido_requiasicaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pedido_requiasicaoCreateSchema = pedido_requiasicaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pedido_requiasicaoUpdateSchema =
	pedido_requiasicaoCreateSchema.partial();
