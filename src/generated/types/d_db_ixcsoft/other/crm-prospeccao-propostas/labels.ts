/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMPROSPECCAOPROPOSTAS_FIELD_LABELS = {
	assinatura: "assinatura",
	assunto: "assunto",
	cabecalho: "cabecalho",
	corpo: "corpo",
	corpo_modelo_proposta: "corpo_modelo_proposta",
	corpo_whatsapp: "corpo_whatsapp",
	data: "data",
	email_destinatario: "email_destinatario",
	hash: "hash",
	id: "id",
	id_contrato: "id_contrato",
	id_modelo_proposta: "id_modelo_proposta",
	id_negociacao: "id_negociacao",
	id_prospeccao: "id_prospeccao",
	id_responsavel: "id_responsavel",
	id_tipo_proposta: "id_tipo_proposta",
	link: "link",
	observacao_recusa: "observacao_recusa",
	omnichannel_canal_envio_id: "omnichannel_canal_envio_id",
	omnichannel_template_id: "omnichannel_template_id",
	rodape: "rodape",
	status: "status",
	tipo_envio: "tipo_envio",
	ultima_atualizacao: "ultima_atualizacao",
	ultima_atualizacao_original: "ultima_atualizacao_original",
	uuid: "uuid",
	validade: "validade",
	variaveis_whatsapp: "variaveis_whatsapp",
	whatsapp_destinatario: "whatsapp_destinatario",
} as const;

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
