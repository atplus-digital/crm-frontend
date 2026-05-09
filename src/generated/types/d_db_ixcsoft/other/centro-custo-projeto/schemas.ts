/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { centro_custo_projetoStatusSchema } from "./labels";

export const CENTRO_CUSTO_PROJETO_TABLE_NAME = "centro_custo_projeto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_projetoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	status: centro_custo_projetoStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custo_projetoSchema = centro_custo_projetoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_projetoCreateSchema = centro_custo_projetoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_projetoUpdateSchema =
	centro_custo_projetoCreateSchema.partial();
