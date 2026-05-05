/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LANCAMENTOSFERIAS_STATUS_LABELS = {
	cancelada: "Cancelada",
	planejada: "Planejada",
	"em-andamento": "Em andamento",
	aprovada: "Aprovada",
	concluida: "Concluída",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lancamentos_feriasStatusSchema = z.enum(
	["cancelada", "planejada", "em-andamento", "aprovada", "concluida"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Cancelada, Planejada, Em andamento, Aprovada, Concluída]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LancamentosFeriasStatus = z.infer<
	typeof lancamentos_feriasStatusSchema
>;
