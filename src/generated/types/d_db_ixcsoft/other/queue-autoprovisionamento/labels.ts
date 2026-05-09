/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
