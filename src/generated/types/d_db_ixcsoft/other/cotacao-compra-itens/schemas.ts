/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cotacao_compra_itensAprovadoSchema,
	cotacao_compra_itensStatusSchema,
} from "./labels";

export const COTACAO_COMPRA_ITENS_TABLE_NAME = "cotacao_compra_itens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cotacao_compra_itensBaseSchema = z.object({
	id: z.number(),
	aprovado: cotacao_compra_itensAprovadoSchema,
	id_cotacao: z.number(),
	id_produto: z.number(),
	id_unidade: z.number(),
	quantidade: z.number(),
	status: cotacao_compra_itensStatusSchema,
	valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cotacao_compra_itensSchema = cotacao_compra_itensBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cotacao_compra_itensCreateSchema = cotacao_compra_itensSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cotacao_compra_itensUpdateSchema =
	cotacao_compra_itensCreateSchema.partial();
