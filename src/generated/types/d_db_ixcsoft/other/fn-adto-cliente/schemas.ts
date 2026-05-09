/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_adto_clienteStatusSchema } from "./labels";

export const FN_ADTO_CLIENTE_TABLE_NAME = "fn_adto_cliente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_adto_clienteBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	filial_id: z.number(),
	id_cliente: z.number(),
	id_conta: z.number(),
	id_mov_fin_mestre: z.number(),
	obs: z.string(),
	status: fn_adto_clienteStatusSchema,
	valor: z.number(),
	valor_aberto: z.number(),
	valor_baixado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_adto_clienteSchema = fn_adto_clienteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_adto_clienteCreateSchema = fn_adto_clienteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_adto_clienteUpdateSchema =
	fn_adto_clienteCreateSchema.partial();
