/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { loteAtivoSchema } from "./labels";

export const LOTE_TABLE_NAME = "lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const loteBaseSchema = z.object({
	id: z.number(),
	ativo: loteAtivoSchema,
	fator_conversao: z.number(),
	filial_id: z.number(),
	id_mov_produtos: z.number(),
	id_produto: z.number(),
	lote_fornecedor: z.string(),
	qtde: z.number(),
	qtde_baixada: z.number(),
	saldo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const loteSchema = loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const loteCreateSchema = loteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const loteUpdateSchema = loteCreateSchema.partial();
