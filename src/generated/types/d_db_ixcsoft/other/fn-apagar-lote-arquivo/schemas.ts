/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_APAGAR_LOTE_ARQUIVO_TABLE_NAME = "fn_apagar_lote_arquivo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_lote_arquivoBaseSchema = z.object({
	id: z.number(),
	id_fn_apagar_lote: z.number(),
	nome_arquivo: z.string(),
	txt_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_lote_arquivoSchema = fn_apagar_lote_arquivoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_lote_arquivoCreateSchema =
	fn_apagar_lote_arquivoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_lote_arquivoUpdateSchema =
	fn_apagar_lote_arquivoCreateSchema.partial();
