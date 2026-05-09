/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_contrato_descontosOrigemSchema } from "./labels";

export const CLIENTE_CONTRATO_DESCONTOS_TABLE_NAME =
	"cliente_contrato_descontos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_descontosBaseSchema = z.object({
	id: z.number(),
	data_validade: z.string(),
	descricao: z.string(),
	id_contrato: z.number(),
	id_vd_contrato_produtos: z.number(),
	origem: cliente_contrato_descontosOrigemSchema,
	percentual: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_descontosSchema =
	cliente_contrato_descontosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_descontosCreateSchema =
	cliente_contrato_descontosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_descontosUpdateSchema =
	cliente_contrato_descontosCreateSchema.partial();
