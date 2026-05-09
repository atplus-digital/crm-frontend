/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SVACONFIGURACOES_AMBIENTE_LABELS = {
	P: "P",
	H: "H",
} as const;

export const SVACONFIGURACOES_USUARIOAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sva_configuracoesAmbienteSchema = z.enum(["P", "H"], {
	error: () => ({ message: "ambiente: valores válidos são [P, H]" }),
});

export const sva_configuracoesUsuarioAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usuario_automatico: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SvaConfiguracoesAmbiente = z.infer<
	typeof sva_configuracoesAmbienteSchema
>;

export type SvaConfiguracoesUsuarioAutomatico = z.infer<
	typeof sva_configuracoesUsuarioAutomaticoSchema
>;
