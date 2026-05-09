/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { central_bloqueio_ipHouveBloqueioSchema } from "./labels";

export const CENTRAL_BLOQUEIO_IP_TABLE_NAME = "central_bloqueio_ip";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const central_bloqueio_ipBaseSchema = z.object({
	id: z.number(),
	bloqueado: z.string(),
	data_hora: z.string(),
	houve_bloqueio: central_bloqueio_ipHouveBloqueioSchema,
	id_cliente: z.string(),
	ip: z.string(),
	tentativas: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const central_bloqueio_ipSchema = central_bloqueio_ipBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const central_bloqueio_ipCreateSchema = central_bloqueio_ipSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const central_bloqueio_ipUpdateSchema =
	central_bloqueio_ipCreateSchema.partial();
