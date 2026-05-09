/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INTEGRACOES_IOT_TABLE_NAME = "integracoes_iot";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracoes_iotBaseSchema = z.object({
	id: z.number(),
	access_token: z.string(),
	client_id: z.string(),
	client_secret: z.string(),
	data_atualizacao_token: z.string(),
	integracao: z.string(),
	refresh_token: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracoes_iotSchema = integracoes_iotBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracoes_iotCreateSchema = integracoes_iotSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracoes_iotUpdateSchema =
	integracoes_iotCreateSchema.partial();
