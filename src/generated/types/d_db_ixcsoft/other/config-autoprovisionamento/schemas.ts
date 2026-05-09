/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	config_autoprovisionamentoCondicaoStatusSchema,
	config_autoprovisionamentoNotificacaoPushSchema,
	config_autoprovisionamentoTipoFiltroSchema,
} from "./labels";

export const CONFIG_AUTOPROVISIONAMENTO_TABLE_NAME =
	"config_autoprovisionamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const config_autoprovisionamentoBaseSchema = z.object({
	id: z.number(),
	ativo: z.number(),
	chat_id: z.number(),
	condicao_status: config_autoprovisionamentoCondicaoStatusSchema,
	data_expiracao: z.number(),
	data_inicio_procura: z.number(),
	id_email: z.number(),
	id_sms_marketing: z.number(),
	id_telegram: z.number(),
	notificacao_push: config_autoprovisionamentoNotificacaoPushSchema,
	periodo_monitoramento: z.number(),
	tipo_filtro: config_autoprovisionamentoTipoFiltroSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const config_autoprovisionamentoSchema =
	config_autoprovisionamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const config_autoprovisionamentoCreateSchema =
	config_autoprovisionamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const config_autoprovisionamentoUpdateSchema =
	config_autoprovisionamentoCreateSchema.partial();
