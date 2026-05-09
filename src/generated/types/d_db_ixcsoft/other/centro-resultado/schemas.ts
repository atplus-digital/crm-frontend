/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { centro_resultadoStatusSchema } from "./labels";

export const CENTRO_RESULTADO_TABLE_NAME = "centro_resultado";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_resultadoBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
	status: centro_resultadoStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_resultadoSchema = centro_resultadoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_resultadoCreateSchema = centro_resultadoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_resultadoUpdateSchema =
	centro_resultadoCreateSchema.partial();
