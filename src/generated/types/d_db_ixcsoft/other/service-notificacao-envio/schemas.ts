/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SERVICE_NOTIFICACAO_ENVIO_TABLE_NAME = "service_notificacao_envio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const service_notificacao_envioBaseSchema = z.object({
	id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const service_notificacao_envioSchema =
	service_notificacao_envioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const service_notificacao_envioCreateSchema =
	service_notificacao_envioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const service_notificacao_envioUpdateSchema =
	service_notificacao_envioCreateSchema.partial();
