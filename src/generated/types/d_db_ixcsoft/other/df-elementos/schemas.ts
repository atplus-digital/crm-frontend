/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_ELEMENTOS_TABLE_NAME = "df_elementos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_elementosBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_projeto: z.number(),
	id_tipo_elemento: z.number(),
	observacao: z.string(),
	preco_unidade: z.number(),
	tipo: z.number(),
	z_index: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_elementosSchema = df_elementosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_elementosCreateSchema = df_elementosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_elementosUpdateSchema = df_elementosCreateSchema.partial();
