/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fl_adto_salarioTipoPagamentoSchema } from "./labels";

export const FL_ADTO_SALARIO_TABLE_NAME = "fl_adto_salario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fl_adto_salarioBaseSchema = z.object({
	id: z.number(),
	conta_: z.number(),
	data: z.string(),
	descricao: z.string(),
	documento: z.string(),
	filial_id: z.number(),
	id_conta: z.number(),
	id_funcionario: z.number(),
	tipo_pagamento: fl_adto_salarioTipoPagamentoSchema,
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fl_adto_salarioSchema = fl_adto_salarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fl_adto_salarioCreateSchema = fl_adto_salarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fl_adto_salarioUpdateSchema =
	fl_adto_salarioCreateSchema.partial();
