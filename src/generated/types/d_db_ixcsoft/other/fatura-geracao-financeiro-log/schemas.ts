/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FATURA_GERACAO_FINANCEIRO_LOG_TABLE_NAME =
	"fatura_geracao_financeiro_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fatura_geracao_financeiro_logBaseSchema = z.object({
	id: z.number(),
	id_cliente: z.number(),
	id_geracao_financeiro_fatura_lote: z.number(),
	id_saida: z.number(),
	mensagem: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fatura_geracao_financeiro_logSchema =
	fatura_geracao_financeiro_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fatura_geracao_financeiro_logCreateSchema =
	fatura_geracao_financeiro_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fatura_geracao_financeiro_logUpdateSchema =
	fatura_geracao_financeiro_logCreateSchema.partial();
