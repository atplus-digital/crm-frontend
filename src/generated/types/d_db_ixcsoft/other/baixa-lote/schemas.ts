/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { baixa_loteTipoSchema } from "./labels";

export const BAIXA_LOTE_TABLE_NAME = "baixa_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const baixa_loteBaseSchema = z.object({
	id: z.number(),
	codigo_tecido: z.number(),
	data: z.string(),
	fator_conversao: z.number(),
	filial_id: z.number(),
	id_item_pedido: z.number(),
	id_origem: z.number(),
	id_produto: z.number(),
	lote: z.number(),
	origem: z.string(),
	qtde: z.number(),
	qtde_entrada: z.number(),
	temp: z.number(),
	tipo: baixa_loteTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const baixa_loteSchema = baixa_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const baixa_loteCreateSchema = baixa_loteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const baixa_loteUpdateSchema = baixa_loteCreateSchema.partial();
