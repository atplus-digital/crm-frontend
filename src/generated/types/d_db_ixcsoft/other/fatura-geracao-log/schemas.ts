/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FATURA_GERACAO_LOG_TABLE_NAME = "fatura_geracao_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fatura_geracao_logBaseSchema = z.object({
	id: z.number(),
	id_cliente_contrato_geracao_fatura_lote: z.number(),
	id_contrato: z.number(),
	id_fatura: z.number(),
	mensagem: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fatura_geracao_logSchema = fatura_geracao_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fatura_geracao_logCreateSchema = fatura_geracao_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fatura_geracao_logUpdateSchema =
	fatura_geracao_logCreateSchema.partial();
