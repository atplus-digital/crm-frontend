/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_APAGAR_ARQUIVOS_TABLE_NAME = "fn_apagar_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_arquivosBaseSchema = z.object({
	id: z.number(),
	arquivo: z.string(),
	arquivo_original: z.string(),
	data: z.string(),
	descricao: z.string(),
	extensao: z.string(),
	id_apagar: z.number(),
	id_usuario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_arquivosSchema = fn_apagar_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_arquivosCreateSchema = fn_apagar_arquivosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_arquivosUpdateSchema =
	fn_apagar_arquivosCreateSchema.partial();
