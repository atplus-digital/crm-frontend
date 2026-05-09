/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTETRIAL_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_trialTipoPessoaSchema = z.enum(["F", "J"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteTrialTipoPessoa = z.infer<
	typeof cliente_trialTipoPessoaSchema
>;
