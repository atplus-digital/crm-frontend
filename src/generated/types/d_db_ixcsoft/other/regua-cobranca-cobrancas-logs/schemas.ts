/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	regua_cobranca_cobrancas_logsAcaoSchema,
	regua_cobranca_cobrancas_logsStatusSchema,
	regua_cobranca_cobrancas_logsTipoExecucaoSchema,
} from "./labels";

export const REGUA_COBRANCA_COBRANCAS_LOGS_TABLE_NAME =
	"regua_cobranca_cobrancas_logs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_cobrancas_logsBaseSchema = z.object({
	id: z.number(),
	acao: regua_cobranca_cobrancas_logsAcaoSchema,
	descricao: z.string(),
	id_cobranca: z.number(),
	id_lote: z.number(),
	parametro_dias_id: z.number(),
	status: regua_cobranca_cobrancas_logsStatusSchema,
	tipo_execucao: regua_cobranca_cobrancas_logsTipoExecucaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_cobrancas_logsSchema =
	regua_cobranca_cobrancas_logsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_cobrancas_logsCreateSchema =
	regua_cobranca_cobrancas_logsSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_cobrancas_logsUpdateSchema =
	regua_cobranca_cobrancas_logsCreateSchema.partial();
