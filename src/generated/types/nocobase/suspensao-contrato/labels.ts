/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUSPENSAOCONTRATO_STATUS_LABELS = {
	0: "Nova Solicitação",
	1: "Aguardando Assinatura",
	2: "Assinatura Concluída",
	3: "Concluído",
	4: "Cancelado",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const suspensao_contratoStatusSchema = z.enum(
	["0", "1", "2", "3", "4"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Nova Solicitação, Aguardando Assinatura, Assinatura Concluída, Concluído, Cancelado]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuspensaoContratoStatus = z.infer<
	typeof suspensao_contratoStatusSchema
>;
