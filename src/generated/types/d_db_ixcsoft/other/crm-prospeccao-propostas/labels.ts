/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMPROSPECCAOPROPOSTAS_ASSINATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMPROSPECCAOPROPOSTAS_STATUS_LABELS = {
	criada: "criada",
	enviada: "enviada",
	recusada: "recusada",
	aceita: "aceita",
	cancelada: "cancelada",
	finalizada: "finalizada",
} as const;

export const CRMPROSPECCAOPROPOSTAS_TIPOENVIO_LABELS = {
	email: "email",
	whatsapp: "whatsapp",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_prospeccao_propostasAssinaturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "assinatura: valores válidos são [S, N]" }),
});

export const crm_prospeccao_propostasStatusSchema = z.enum(
	["criada", "enviada", "recusada", "aceita", "cancelada", "finalizada"],
	{
		error: () => ({
			message:
				"status: valores válidos são [criada, enviada, recusada, aceita, cancelada, finalizada]",
		}),
	},
);

export const crm_prospeccao_propostasTipoEnvioSchema = z.enum(
	["email", "whatsapp"],
	{
		error: () => ({
			message: "tipo_envio: valores válidos são [email, whatsapp]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmProspeccaoPropostasAssinatura = z.infer<
	typeof crm_prospeccao_propostasAssinaturaSchema
>;

export type CrmProspeccaoPropostasStatus = z.infer<
	typeof crm_prospeccao_propostasStatusSchema
>;

export type CrmProspeccaoPropostasTipoEnvio = z.infer<
	typeof crm_prospeccao_propostasTipoEnvioSchema
>;
