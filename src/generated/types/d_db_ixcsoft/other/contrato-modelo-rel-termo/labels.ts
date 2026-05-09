/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONTRATOMODELORELTERMO_INSERIRAUTOMATICOCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTRATOMODELORELTERMO_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const contrato_modelo_rel_termoInserirAutomaticoContratoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "inserir_automatico_contrato: valores válidos são [S, N]",
		}),
	},
);

export const contrato_modelo_rel_termoStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ContratoModeloRelTermoInserirAutomaticoContrato = z.infer<
	typeof contrato_modelo_rel_termoInserirAutomaticoContratoSchema
>;

export type ContratoModeloRelTermoStatus = z.infer<
	typeof contrato_modelo_rel_termoStatusSchema
>;
