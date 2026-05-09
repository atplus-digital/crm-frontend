/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_REMESSAS_ARQUIVO_TABLE_NAME =
	"fn_areceber_remessas_arquivo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_remessas_arquivoBaseSchema = z.object({
	id: z.number(),
	data_geracao: z.string(),
	id_remessa: z.number(),
	nome_arquivo: z.string(),
	txt_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_remessas_arquivoSchema =
	fn_areceber_remessas_arquivoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_remessas_arquivoCreateSchema =
	fn_areceber_remessas_arquivoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_remessas_arquivoUpdateSchema =
	fn_areceber_remessas_arquivoCreateSchema.partial();
