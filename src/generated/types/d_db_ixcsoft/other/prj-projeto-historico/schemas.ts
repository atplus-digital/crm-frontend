/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { prj_projeto_historicoStatusSchema } from "./labels";

export const PRJ_PROJETO_HISTORICO_TABLE_NAME = "prj_projeto_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const prj_projeto_historicoBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	id_operador: z.number(),
	id_prj_projeto: z.number(),
	status: prj_projeto_historicoStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const prj_projeto_historicoSchema = prj_projeto_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const prj_projeto_historicoCreateSchema =
	prj_projeto_historicoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const prj_projeto_historicoUpdateSchema =
	prj_projeto_historicoCreateSchema.partial();
