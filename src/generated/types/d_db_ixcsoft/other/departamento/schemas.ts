/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { departamentoPrestaAtendimentoSchema } from "./labels";

export const DEPARTAMENTO_TABLE_NAME = "departamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const departamentoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	presta_atendimento: departamentoPrestaAtendimentoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const departamentoSchema = departamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const departamentoCreateSchema = departamentoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const departamentoUpdateSchema = departamentoCreateSchema.partial();
