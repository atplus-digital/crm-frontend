/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	contrato_modelo_rel_termoInserirAutomaticoContratoSchema,
	contrato_modelo_rel_termoStatusSchema,
} from "./labels";

export const CONTRATO_MODELO_REL_TERMO_TABLE_NAME = "contrato_modelo_rel_termo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contrato_modelo_rel_termoBaseSchema = z.object({
	id: z.number(),
	id_cliente_contrato_modelo: z.number(),
	id_termo: z.number(),
	inserir_automatico_contrato:
		contrato_modelo_rel_termoInserirAutomaticoContratoSchema,
	status: contrato_modelo_rel_termoStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contrato_modelo_rel_termoSchema =
	contrato_modelo_rel_termoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contrato_modelo_rel_termoCreateSchema =
	contrato_modelo_rel_termoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const contrato_modelo_rel_termoUpdateSchema =
	contrato_modelo_rel_termoCreateSchema.partial();
