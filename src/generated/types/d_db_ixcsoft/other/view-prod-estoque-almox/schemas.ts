/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { view_prod_estoque_almoxAlmoxAtivoSchema } from "./labels";

export const VIEW_PROD_ESTOQUE_ALMOX_TABLE_NAME = "view_prod_estoque_almox";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_prod_estoque_almoxBaseSchema = z.object({
	almox_ativo: view_prod_estoque_almoxAlmoxAtivoSchema,
	almox_descricao: z.string(),
	almox_id: z.number(),
	filial_id: z.number(),
	id_produto: z.number(),
	saldo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_prod_estoque_almoxSchema = view_prod_estoque_almoxBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_prod_estoque_almoxCreateSchema =
	view_prod_estoque_almoxSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_prod_estoque_almoxUpdateSchema =
	view_prod_estoque_almoxCreateSchema.partial();
