/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNTRANSFERENCIACAIXA_TIPORECEBIMENTO_LABELS = {
	D: "D",
	B: "B",
	H: "H",
	T: "T",
	C: "C",
	CD: "CD",
	DP: "DP",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_transferencia_caixaTipoRecebimentoSchema = z.enum(
	["D", "B", "H", "T", "C", "CD", "DP", "P"],
	{
		error: () => ({
			message:
				"tipo_recebimento: valores válidos são [D, B, H, T, C, CD, DP, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnTransferenciaCaixaTipoRecebimento = z.infer<
	typeof fn_transferencia_caixaTipoRecebimentoSchema
>;
