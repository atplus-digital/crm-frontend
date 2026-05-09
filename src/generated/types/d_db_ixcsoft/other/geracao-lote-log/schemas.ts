/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const GERACAO_LOTE_LOG_TABLE_NAME = "geracao_lote_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const geracao_lote_logBaseSchema = z.object({
	id: z.number(),
	data_geracao: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_geracao_lote: z.number(),
	id_geracao_lote_agrup_finan: z.number(),
	id_geracao_lote_assinaturas: z.number(),
	id_saida: z.number(),
	mensagem: z.string(),
	numero_lote: z.number(),
	status_lote: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const geracao_lote_logSchema = geracao_lote_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const geracao_lote_logCreateSchema = geracao_lote_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const geracao_lote_logUpdateSchema =
	geracao_lote_logCreateSchema.partial();
