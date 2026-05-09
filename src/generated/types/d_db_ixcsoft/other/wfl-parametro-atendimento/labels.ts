/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const WFLPARAMETROATENDIMENTO_PRIORIDADE_LABELS = {
	C: "C",
	A: "A",
	N: "N",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const wfl_parametro_atendimentoPrioridadeSchema = z.enum(
	["C", "A", "N", "B"],
	{
		error: () => ({ message: "prioridade: valores válidos são [C, A, N, B]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type WflParametroAtendimentoPrioridade = z.infer<
	typeof wfl_parametro_atendimentoPrioridadeSchema
>;
