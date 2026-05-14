/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INTEGRACOESASSINATURADIGITAL_FIELD_LABELS = {
	ambiente: "ambiente",
	descricao: "descricao",
	dias_expiracao: "dias_expiracao",
	document_photo: "document_photo",
	id: "id",
	id_email_envio_assinatura: "id_email_envio_assinatura",
	id_email_envio_assinatura_testemunha: "id_email_envio_assinatura_testemunha",
	id_omnichannel_envio_assinatura: "id_omnichannel_envio_assinatura",
	id_omnichannel_envio_assinatura_testemunha:
		"id_omnichannel_envio_assinatura_testemunha",
	id_webhook_integracao: "id_webhook_integracao",
	integrador: "integrador",
	metodo_envio_assinatura: "metodo_envio_assinatura",
	permite_recusar_documento: "permite_recusar_documento",
	responsavel_provedor: "responsavel_provedor",
	selfie_photo: "selfie_photo",
	testemunha_provedor: "testemunha_provedor",
	token_autenticacao_webhook: "token_autenticacao_webhook",
	token_integracao: "token_integracao",
	token_usuario_api_responsavel: "token_usuario_api_responsavel",
	token_usuario_api_testemunha: "token_usuario_api_testemunha",
	url: "url",
	usuario_api_webhook: "usuario_api_webhook",
} as const;

export const INTEGRACOESASSINATURADIGITAL_AMBIENTE_LABELS = {
	P: "P",
	H: "H",
} as const;

export const INTEGRACOESASSINATURADIGITAL_DOCUMENTPHOTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOESASSINATURADIGITAL_METODOENVIOASSINATURA_LABELS = {
	CO: "CO",
	OS: "OS",
} as const;

export const INTEGRACOESASSINATURADIGITAL_PERMITERECUSARDOCUMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOESASSINATURADIGITAL_SELFIEPHOTO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const integracoes_assinatura_digitalAmbienteSchema = z.enum(["P", "H"], {
	error: () => ({ message: "ambiente: valores válidos são [P, H]" }),
});

export const integracoes_assinatura_digitalDocumentPhotoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "document_photo: valores válidos são [S, N]" }),
	},
);

export const integracoes_assinatura_digitalMetodoEnvioAssinaturaSchema = z.enum(
	["CO", "OS"],
	{
		error: () => ({
			message: "metodo_envio_assinatura: valores válidos são [CO, OS]",
		}),
	},
);

export const integracoes_assinatura_digitalPermiteRecusarDocumentoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "permite_recusar_documento: valores válidos são [S, N]",
		}),
	});

export const integracoes_assinatura_digitalSelfiePhotoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "selfie_photo: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IntegracoesAssinaturaDigitalAmbiente = z.infer<
	typeof integracoes_assinatura_digitalAmbienteSchema
>;

export type IntegracoesAssinaturaDigitalDocumentPhoto = z.infer<
	typeof integracoes_assinatura_digitalDocumentPhotoSchema
>;

export type IntegracoesAssinaturaDigitalMetodoEnvioAssinatura = z.infer<
	typeof integracoes_assinatura_digitalMetodoEnvioAssinaturaSchema
>;

export type IntegracoesAssinaturaDigitalPermiteRecusarDocumento = z.infer<
	typeof integracoes_assinatura_digitalPermiteRecusarDocumentoSchema
>;

export type IntegracoesAssinaturaDigitalSelfiePhoto = z.infer<
	typeof integracoes_assinatura_digitalSelfiePhotoSchema
>;
