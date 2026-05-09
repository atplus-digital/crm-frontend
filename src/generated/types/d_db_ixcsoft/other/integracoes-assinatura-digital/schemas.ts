/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	integracoes_assinatura_digitalAmbienteSchema,
	integracoes_assinatura_digitalDocumentPhotoSchema,
	integracoes_assinatura_digitalMetodoEnvioAssinaturaSchema,
	integracoes_assinatura_digitalPermiteRecusarDocumentoSchema,
	integracoes_assinatura_digitalSelfiePhotoSchema,
} from "./labels";

export const INTEGRACOES_ASSINATURA_DIGITAL_TABLE_NAME =
	"integracoes_assinatura_digital";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracoes_assinatura_digitalBaseSchema = z.object({
	id: z.number(),
	ambiente: integracoes_assinatura_digitalAmbienteSchema,
	descricao: z.string(),
	dias_expiracao: z.number(),
	document_photo: integracoes_assinatura_digitalDocumentPhotoSchema,
	id_email_envio_assinatura: z.number(),
	id_email_envio_assinatura_testemunha: z.number(),
	id_omnichannel_envio_assinatura: z.number(),
	id_omnichannel_envio_assinatura_testemunha: z.number(),
	id_webhook_integracao: z.string(),
	integrador: z.string(),
	metodo_envio_assinatura:
		integracoes_assinatura_digitalMetodoEnvioAssinaturaSchema,
	permite_recusar_documento:
		integracoes_assinatura_digitalPermiteRecusarDocumentoSchema,
	responsavel_provedor: z.number(),
	selfie_photo: integracoes_assinatura_digitalSelfiePhotoSchema,
	testemunha_provedor: z.number(),
	token_autenticacao_webhook: z.string(),
	token_integracao: z.string(),
	token_usuario_api_responsavel: z.string(),
	token_usuario_api_testemunha: z.string(),
	url: z.string(),
	usuario_api_webhook: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracoes_assinatura_digitalSchema =
	integracoes_assinatura_digitalBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracoes_assinatura_digitalCreateSchema =
	integracoes_assinatura_digitalSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracoes_assinatura_digitalUpdateSchema =
	integracoes_assinatura_digitalCreateSchema.partial();
