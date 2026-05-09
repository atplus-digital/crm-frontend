/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONFIGURACAOMVNO_AMBIENTE_LABELS = {
	P: "P",
	H: "H",
} as const;

export const CONFIGURACAOMVNO_INTEGRACAO_LABELS = {
	A: "A",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const configuracao_mvnoAmbienteSchema = z.enum(["P", "H"], {
	error: () => ({ message: "ambiente: valores válidos são [P, H]" }),
});

export const configuracao_mvnoIntegracaoSchema = z.enum(["A", "S"], {
	error: () => ({ message: "integracao: valores válidos são [A, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConfiguracaoMvnoAmbiente = z.infer<
	typeof configuracao_mvnoAmbienteSchema
>;

export type ConfiguracaoMvnoIntegracao = z.infer<
	typeof configuracao_mvnoIntegracaoSchema
>;
