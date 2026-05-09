/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOG_VOIP_TABLE_NAME = "log_voip";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_voipBaseSchema = z.object({
	id: z.number(),
	data_cancelamento_contrato: z.string(),
	data_log: z.string(),
	historico: z.string(),
	id_contrato_ramal: z.number(),
	id_voip_sippeers: z.number(),
	numero_binagem: z.string(),
	razao_cliente: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_voipSchema = log_voipBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_voipCreateSchema = log_voipSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_voipUpdateSchema = log_voipCreateSchema.partial();
