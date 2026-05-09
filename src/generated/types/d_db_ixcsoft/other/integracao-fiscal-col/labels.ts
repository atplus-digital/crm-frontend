/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INTEGRACAOFISCALCOL_AMBIENTE_LABELS = {
	homologacao: "homologacao",
	producao: "producao",
	inativo: "inativo",
} as const;

export const INTEGRACAOFISCALCOL_ENVIAEMAILSIIGO_LABELS = {
	sim: "sim",
	nao: "nao",
} as const;

export const INTEGRACAOFISCALCOL_INTEGRACAO_LABELS = {
	siigo: "siigo",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const integracao_fiscal_colAmbienteSchema = z.enum(
	["homologacao", "producao", "inativo"],
	{
		error: () => ({
			message: "ambiente: valores válidos são [homologacao, producao, inativo]",
		}),
	},
);

export const integracao_fiscal_colEnviaEmailSiigoSchema = z.enum(
	["sim", "nao"],
	{
		error: () => ({
			message: "envia_email_siigo: valores válidos são [sim, nao]",
		}),
	},
);

export const integracao_fiscal_colIntegracaoSchema = z.enum(["siigo"], {
	error: () => ({ message: "integracao: valores válidos são [siigo]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IntegracaoFiscalColAmbiente = z.infer<
	typeof integracao_fiscal_colAmbienteSchema
>;

export type IntegracaoFiscalColEnviaEmailSiigo = z.infer<
	typeof integracao_fiscal_colEnviaEmailSiigoSchema
>;

export type IntegracaoFiscalColIntegracao = z.infer<
	typeof integracao_fiscal_colIntegracaoSchema
>;
