/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const QUEUEAUTOPROVISIONAMENTO_FIELD_LABELS = {
	boxes: "boxes",
	codigo_ultimo_erro: "codigo_ultimo_erro",
	data_inicio: "data_inicio",
	force_monitoring: "force_monitoring",
	id: "id",
	id_cliente_fibra: "id_cliente_fibra",
	id_movimento_produto: "id_movimento_produto",
	id_oss_chamado: "id_oss_chamado",
	id_perfil: "id_perfil",
	localizacao: "localizacao",
	log: "log",
	olts: "olts",
	onu: "onu",
	status: "status",
	template: "template",
	tempo_em_processo: "tempo_em_processo",
	ultimo_monitoramento: "ultimo_monitoramento",
} as const;

export const QUEUEAUTOPROVISIONAMENTO_STATUS_LABELS = {
	invalido: "invalido",
	procurando: "procurando",
	autorizado: "autorizado",
	falha: "falha",
	parado: "parado",
	expirado: "expirado",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const queue_autoprovisionamentoStatusSchema = z.enum(
	["invalido", "procurando", "autorizado", "falha", "parado", "expirado"],
	{
		error: () => ({
			message:
				"status: valores válidos são [invalido, procurando, autorizado, falha, parado, expirado]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type QueueAutoprovisionamentoStatus = z.infer<
	typeof queue_autoprovisionamentoStatusSchema
>;
