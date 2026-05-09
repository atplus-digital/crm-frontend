/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CENTROCUSTOCRITERIORATEIO_ESTRUTURA_LABELS = {
	CC: "CC",
	CR: "CR",
} as const;

export const CENTROCUSTOCRITERIORATEIO_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const centro_custo_criterio_rateioEstruturaSchema = z.enum(
	["CC", "CR"],
	{
		error: () => ({ message: "estrutura: valores válidos são [CC, CR]" }),
	},
);

export const centro_custo_criterio_rateioStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CentroCustoCriterioRateioEstrutura = z.infer<
	typeof centro_custo_criterio_rateioEstruturaSchema
>;

export type CentroCustoCriterioRateioStatus = z.infer<
	typeof centro_custo_criterio_rateioStatusSchema
>;
