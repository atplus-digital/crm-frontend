/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CNFDOCUMENTONUMERO_CONTADORFUNCOESSICREDI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFDOCUMENTONUMERO_CONTROLAMENSAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFDOCUMENTONUMERO_TIPOFISCALCARTEIRA_LABELS = {
	NF: "NF",
	CC: "CC",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cnf_documento_numeroContadorFuncoesSicrediSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "contador_funcoes_sicredi: valores válidos são [S, N]",
		}),
	},
);

export const cnf_documento_numeroControlaMensalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "controla_mensal: valores válidos são [S, N]" }),
});

export const cnf_documento_numeroTipoFiscalCarteiraSchema = z.enum(
	["NF", "CC"],
	{
		error: () => ({
			message: "tipo_fiscal_carteira: valores válidos são [NF, CC]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CnfDocumentoNumeroContadorFuncoesSicredi = z.infer<
	typeof cnf_documento_numeroContadorFuncoesSicrediSchema
>;

export type CnfDocumentoNumeroControlaMensal = z.infer<
	typeof cnf_documento_numeroControlaMensalSchema
>;

export type CnfDocumentoNumeroTipoFiscalCarteira = z.infer<
	typeof cnf_documento_numeroTipoFiscalCarteiraSchema
>;
