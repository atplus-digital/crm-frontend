/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { df_projetoStatusSchema } from "./labels";

export const DF_PROJETO_TABLE_NAME = "df_projeto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_projetoBaseSchema = z.object({
	id: z.number(),
	cor_mapa: z.string(),
	id_filial: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	nome: z.string(),
	status: df_projetoStatusSchema,
	zoom: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_projetoSchema = df_projetoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_projetoCreateSchema = df_projetoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_projetoUpdateSchema = df_projetoCreateSchema.partial();
