/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSAUTOPROVISIONAMENTO_FIELD_LABELS = {
	codigo_ultimo_erro: "codigo_ultimo_erro",
	data: "data",
	id: "id",
	id_perfil: "id_perfil",
	id_queue_autoprovisionamento: "id_queue_autoprovisionamento",
	info_extra: "info_extra",
	log: "log",
	retorno: "retorno",
	script: "script",
	status: "status",
	variaveis: "variaveis",
} as const;

export const LOGSAUTOPROVISIONAMENTO_STATUS_LABELS = {
	invalido: "invalido",
	procurando: "procurando",
	autorizado: "autorizado",
	falha: "falha",
	parado: "parado",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logs_autoprovisionamentoStatusSchema = z.enum(
	["invalido", "procurando", "autorizado", "falha", "parado"],
	{
		error: () => ({
			message:
				"status: valores válidos são [invalido, procurando, autorizado, falha, parado]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsAutoprovisionamentoStatus = z.infer<
	typeof logs_autoprovisionamentoStatusSchema
>;
