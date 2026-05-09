/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INVENTARIO_TABLE_NAME = "inventario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const inventarioBaseSchema = z.object({
	id: z.number(),
	custo_medio_atual: z.number(),
	custo_medio_total_atual: z.number(),
	data_inventario: z.string(),
	estoque_atual: z.number(),
	fator_conversao: z.number(),
	filial_id: z.number(),
	id_ajuste_inventario: z.number(),
	id_almox: z.number(),
	id_entrada: z.number(),
	id_lote: z.number(),
	id_produto: z.number(),
	id_saida: z.number(),
	id_unidade: z.number(),
	novo_custo_medio: z.number(),
	novo_estoque: z.number(),
	novo_preco_base: z.number(),
	preco_base: z.number(),
	saldo_lote: z.number(),
	unidade_sigla: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const inventarioSchema = inventarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const inventarioCreateSchema = inventarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const inventarioUpdateSchema = inventarioCreateSchema.partial();
