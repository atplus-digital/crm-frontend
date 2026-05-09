/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SERVICE_NOTIFICACAO_LOTE_TABLE_NAME = "service_notificacao_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const service_notificacao_loteBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const service_notificacao_loteSchema =
	service_notificacao_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const service_notificacao_loteCreateSchema =
	service_notificacao_loteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const service_notificacao_loteUpdateSchema =
	service_notificacao_loteCreateSchema.partial();
