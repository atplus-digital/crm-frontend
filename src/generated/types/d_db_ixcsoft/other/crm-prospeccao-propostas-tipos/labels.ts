/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMPROSPECCAOPROPOSTASTIPOS_ASSINATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPROSPECCAOPROPOSTASTIPOS_PRODUTOSINTERESSE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_prospeccao_propostas_tiposAssinaturaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "assinatura: valores válidos são [S, N]" }),
	},
);

export const crm_prospeccao_propostas_tiposProdutosInteresseSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "produtos_interesse: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmProspeccaoPropostasTiposAssinatura = z.infer<
	typeof crm_prospeccao_propostas_tiposAssinaturaSchema
>;

export type CrmProspeccaoPropostasTiposProdutosInteresse = z.infer<
	typeof crm_prospeccao_propostas_tiposProdutosInteresseSchema
>;
