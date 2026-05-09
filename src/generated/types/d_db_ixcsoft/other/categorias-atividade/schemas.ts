/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	categorias_atividadePrioridadeSchema,
	categorias_atividadeStatusSchema,
} from "./labels";

export const CATEGORIAS_ATIVIDADE_TABLE_NAME = "categorias_atividade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const categorias_atividadeBaseSchema = z.object({
	id: z.number(),
	categoria: z.string(),
	prioridade: categorias_atividadePrioridadeSchema,
	status: categorias_atividadeStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const categorias_atividadeSchema = categorias_atividadeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const categorias_atividadeCreateSchema = categorias_atividadeSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const categorias_atividadeUpdateSchema =
	categorias_atividadeCreateSchema.partial();
