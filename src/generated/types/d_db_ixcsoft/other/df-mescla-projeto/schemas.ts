/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_MESCLA_PROJETO_TABLE_NAME = "df_mescla_projeto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_mescla_projetoBaseSchema = z.object({
	id: z.number(),
	descricao_projeto_destino: z.string(),
	descricao_projeto_origem: z.string(),
	estrutura_projeto_origem: z.string(),
	id_projeto_destino: z.number(),
	id_projeto_origem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_mescla_projetoSchema = df_mescla_projetoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_mescla_projetoCreateSchema = df_mescla_projetoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_mescla_projetoUpdateSchema =
	df_mescla_projetoCreateSchema.partial();
