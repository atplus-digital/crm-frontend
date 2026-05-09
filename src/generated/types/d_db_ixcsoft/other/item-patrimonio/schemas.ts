/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ITEM_PATRIMONIO_TABLE_NAME = "item_patrimonio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const item_patrimonioBaseSchema = z.object({
	id: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	qtd_produto: z.number(),
	valor_acumulado: z.number(),
	valor_produto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const item_patrimonioSchema = item_patrimonioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const item_patrimonioCreateSchema = item_patrimonioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const item_patrimonioUpdateSchema =
	item_patrimonioCreateSchema.partial();
