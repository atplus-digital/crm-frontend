/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { predioStatusSchema } from "./labels";

export const PREDIO_TABLE_NAME = "predio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const predioBaseSchema = z.object({
	id: z.number(),
	cor: z.string(),
	descricao: z.string(),
	id_condominio: z.number(),
	id_projeto: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	observacao: z.string(),
	status: predioStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const predioSchema = predioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const predioCreateSchema = predioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const predioUpdateSchema = predioCreateSchema.partial();
