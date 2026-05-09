/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { centro_custoStatusSchema } from "./labels";

export const CENTRO_CUSTO_TABLE_NAME = "centro_custo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custoBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
	status: centro_custoStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custoSchema = centro_custoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custoCreateSchema = centro_custoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custoUpdateSchema = centro_custoCreateSchema.partial();
