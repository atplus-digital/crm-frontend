/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { logs_autoprovisionamentoStatusSchema } from "./labels";

export const LOGS_AUTOPROVISIONAMENTO_TABLE_NAME = "logs_autoprovisionamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_autoprovisionamentoBaseSchema = z.object({
	id: z.number(),
	codigo_ultimo_erro: z.number(),
	data: z.string(),
	id_perfil: z.number(),
	id_queue_autoprovisionamento: z.number(),
	info_extra: z.string(),
	log: z.string(),
	retorno: z.string(),
	script: z.string(),
	status: logs_autoprovisionamentoStatusSchema,
	variaveis: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_autoprovisionamentoSchema =
	logs_autoprovisionamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_autoprovisionamentoCreateSchema =
	logs_autoprovisionamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_autoprovisionamentoUpdateSchema =
	logs_autoprovisionamentoCreateSchema.partial();
