/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_ARQUIVOS_TABLE_NAME = "fn_areceber_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_arquivosBaseSchema = z.object({
	id: z.number(),
	arquivo: z.string(),
	data: z.string(),
	descricao: z.string(),
	extensao: z.string(),
	id_areceber: z.number(),
	id_usuario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_arquivosSchema = fn_areceber_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_arquivosCreateSchema = fn_areceber_arquivosSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_arquivosUpdateSchema =
	fn_areceber_arquivosCreateSchema.partial();
