/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARRETORNOLOTEREGISTROS_STATUS_LABELS = {
	A: "A",
	P: "P",
	NE: "NE",
	VI: "VI",
	JR: "JR",
	JC: "JC",
	JP: "JP",
	I: "I",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_retorno_lote_registrosStatusSchema = z.enum(
	["A", "P", "NE", "VI", "JR", "JC", "JP", "I", "E"],
	{
		error: () => ({
			message: "status: valores válidos são [A, P, NE, VI, JR, JC, JP, I, E]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarRetornoLoteRegistrosStatus = z.infer<
	typeof fn_apagar_retorno_lote_registrosStatusSchema
>;
