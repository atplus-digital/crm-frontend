/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_contrato_acrescimosAtivoSchema } from "./labels";

export const CLIENTE_CONTRATO_ACRESCIMOS_TABLE_NAME =
	"cliente_contrato_acrescimos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_acrescimosBaseSchema = z.object({
	id: z.number(),
	ativo: cliente_contrato_acrescimosAtivoSchema,
	data: z.string(),
	data_validade: z.string(),
	descricao: z.string(),
	id_contrato: z.number(),
	id_reajuste: z.number(),
	id_vd_contrato_produtos: z.number(),
	percentual: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_acrescimosSchema =
	cliente_contrato_acrescimosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_acrescimosCreateSchema =
	cliente_contrato_acrescimosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_acrescimosUpdateSchema =
	cliente_contrato_acrescimosCreateSchema.partial();
