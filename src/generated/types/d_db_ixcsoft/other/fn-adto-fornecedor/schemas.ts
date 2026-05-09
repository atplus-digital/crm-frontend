/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_adto_fornecedorStatusSchema } from "./labels";

export const FN_ADTO_FORNECEDOR_TABLE_NAME = "fn_adto_fornecedor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_adto_fornecedorBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	filial_id: z.number(),
	id_conta: z.number(),
	id_fornecedor: z.number(),
	obs: z.string(),
	status: fn_adto_fornecedorStatusSchema,
	valor: z.number(),
	valor_aberto: z.number(),
	valor_baixado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_adto_fornecedorSchema = fn_adto_fornecedorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_adto_fornecedorCreateSchema = fn_adto_fornecedorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_adto_fornecedorUpdateSchema =
	fn_adto_fornecedorCreateSchema.partial();
