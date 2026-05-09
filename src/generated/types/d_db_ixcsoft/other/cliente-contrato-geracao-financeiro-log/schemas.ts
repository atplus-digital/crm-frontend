/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_contrato_geracao_financeiro_logTipoSchema } from "./labels";

export const CLIENTE_CONTRATO_GERACAO_FINANCEIRO_LOG_TABLE_NAME =
	"cliente_contrato_geracao_financeiro_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_geracao_financeiro_logBaseSchema = z.object({
	id: z.number(),
	id_cliente_contrato_geracao_financeiro: z.number(),
	id_contrato: z.number(),
	id_saida: z.number(),
	mensagem: z.string(),
	tipo: cliente_contrato_geracao_financeiro_logTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_geracao_financeiro_logSchema =
	cliente_contrato_geracao_financeiro_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_geracao_financeiro_logCreateSchema =
	cliente_contrato_geracao_financeiro_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_geracao_financeiro_logUpdateSchema =
	cliente_contrato_geracao_financeiro_logCreateSchema.partial();
