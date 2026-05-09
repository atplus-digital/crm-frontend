/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOG_TAREFA_GATEWAY_TABLE_NAME = "log_tarefa_gateway";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_tarefa_gatewayBaseSchema = z.object({
	id: z.number(),
	charge_id: z.string(),
	dados: z.string(),
	data_hora: z.string(),
	gateway: z.string(),
	id_carteira_cobranca: z.number(),
	id_fn_areceber: z.number(),
	id_lote_retorno: z.number(),
	log: z.string(),
	num_tentativas: z.number(),
	request: z.string(),
	status_transacao: z.string(),
	tarefa: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_tarefa_gatewaySchema = log_tarefa_gatewayBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_tarefa_gatewayCreateSchema = log_tarefa_gatewaySchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_tarefa_gatewayUpdateSchema =
	log_tarefa_gatewayCreateSchema.partial();
