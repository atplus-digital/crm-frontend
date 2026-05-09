/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { queue_autoprovisionamentoStatusSchema } from "./labels";

export const QUEUE_AUTOPROVISIONAMENTO_TABLE_NAME = "queue_autoprovisionamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const queue_autoprovisionamentoBaseSchema = z.object({
	id: z.number(),
	boxes: z.string(),
	codigo_ultimo_erro: z.number(),
	data_inicio: z.string(),
	force_monitoring: z.number(),
	id_cliente_fibra: z.number(),
	id_movimento_produto: z.number(),
	id_oss_chamado: z.number(),
	id_perfil: z.number(),
	localizacao: z.string(),
	log: z.string(),
	olts: z.string(),
	onu: z.string(),
	status: queue_autoprovisionamentoStatusSchema,
	template: z.string(),
	tempo_em_processo: z.string(),
	ultimo_monitoramento: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const queue_autoprovisionamentoSchema =
	queue_autoprovisionamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const queue_autoprovisionamentoCreateSchema =
	queue_autoprovisionamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const queue_autoprovisionamentoUpdateSchema =
	queue_autoprovisionamentoCreateSchema.partial();
