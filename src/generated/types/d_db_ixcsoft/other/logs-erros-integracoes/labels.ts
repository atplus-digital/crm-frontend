/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSERROSINTEGRACOES_STATUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const LOGSERROSINTEGRACOES_TIPOINTEGRACAO_LABELS = {
	sva: "sva",
	tv: "tv",
	mvno: "mvno",
	lte: "lte",
	digital_signature: "digital_signature",
	voip: "voip",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logs_erros_integracoesStatusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status: valores válidos são [S, N]" }),
});

export const logs_erros_integracoesTipoIntegracaoSchema = z.enum(
	["sva", "tv", "mvno", "lte", "digital_signature", "voip"],
	{
		error: () => ({
			message:
				"tipo_integracao: valores válidos são [sva, tv, mvno, lte, digital_signature, voip]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsErrosIntegracoesStatus = z.infer<
	typeof logs_erros_integracoesStatusSchema
>;

export type LogsErrosIntegracoesTipoIntegracao = z.infer<
	typeof logs_erros_integracoesTipoIntegracaoSchema
>;
