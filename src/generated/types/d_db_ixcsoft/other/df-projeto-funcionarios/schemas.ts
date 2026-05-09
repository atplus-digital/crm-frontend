/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_PROJETO_FUNCIONARIOS_TABLE_NAME = "df_projeto_funcionarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_projeto_funcionariosBaseSchema = z.object({
	id: z.number(),
	id_df_projeto: z.number(),
	id_funcionarios: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_projeto_funcionariosSchema = df_projeto_funcionariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_projeto_funcionariosCreateSchema =
	df_projeto_funcionariosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_projeto_funcionariosUpdateSchema =
	df_projeto_funcionariosCreateSchema.partial();
