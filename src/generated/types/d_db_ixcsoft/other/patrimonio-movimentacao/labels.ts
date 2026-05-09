/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PATRIMONIOMOVIMENTACAO_INDISPONIVEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PATRIMONIOMOVIMENTACAO_TIPOMOVIMENTO_LABELS = {
	M: "M",
	E: "E",
	V: "V",
	OS: "OS",
	TA: "TA",
	TM: "TM",
	RE: "RE",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const patrimonio_movimentacaoIndisponivelSchema = z.enum(["S", "N"], {
	error: () => ({ message: "indisponivel: valores válidos são [S, N]" }),
});

export const patrimonio_movimentacaoTipoMovimentoSchema = z.enum(
	["M", "E", "V", "OS", "TA", "TM", "RE"],
	{
		error: () => ({
			message: "tipo_movimento: valores válidos são [M, E, V, OS, TA, TM, RE]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PatrimonioMovimentacaoIndisponivel = z.infer<
	typeof patrimonio_movimentacaoIndisponivelSchema
>;

export type PatrimonioMovimentacaoTipoMovimento = z.infer<
	typeof patrimonio_movimentacaoTipoMovimentoSchema
>;
