/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_CEDENTE_LOTE_ARQUIVO_TABLE_NAME =
	"fn_areceber_cedente_lote_arquivo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_cedente_lote_arquivoBaseSchema = z.object({
	id: z.number(),
	id_lote_retorno: z.number(),
	nome_arquivo: z.string(),
	txt_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_cedente_lote_arquivoSchema =
	fn_areceber_cedente_lote_arquivoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_cedente_lote_arquivoCreateSchema =
	fn_areceber_cedente_lote_arquivoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_cedente_lote_arquivoUpdateSchema =
	fn_areceber_cedente_lote_arquivoCreateSchema.partial();
