/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_CONEXAO_ELEMENTO_TABLE_NAME = "df_conexao_elemento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_conexao_elementoBaseSchema = z.object({
	id: z.number(),
	fibra_conexao: z.number(),
	id_conexao: z.number(),
	id_elemento: z.number(),
	reserva_tecnica: z.number(),
	tipo_conexao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_conexao_elementoSchema = df_conexao_elementoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_conexao_elementoCreateSchema = df_conexao_elementoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_conexao_elementoUpdateSchema =
	df_conexao_elementoCreateSchema.partial();
