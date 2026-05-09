/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_prospeccao_propostasAssinaturaSchema,
	crm_prospeccao_propostasStatusSchema,
	crm_prospeccao_propostasTipoEnvioSchema,
} from "./labels";

export const CRM_PROSPECCAO_PROPOSTAS_TABLE_NAME = "crm_prospeccao_propostas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_prospeccao_propostasBaseSchema = z.object({
	id: z.number(),
	assinatura: crm_prospeccao_propostasAssinaturaSchema,
	assunto: z.string(),
	cabecalho: z.string(),
	corpo: z.string(),
	corpo_modelo_proposta: z.string(),
	corpo_whatsapp: z.string(),
	data: z.string(),
	email_destinatario: z.string(),
	hash: z.string(),
	id_contrato: z.number(),
	id_modelo_proposta: z.number(),
	id_negociacao: z.number(),
	id_prospeccao: z.number(),
	id_responsavel: z.number(),
	id_tipo_proposta: z.number(),
	link: z.string(),
	observacao_recusa: z.string(),
	omnichannel_canal_envio_id: z.string(),
	omnichannel_template_id: z.string(),
	rodape: z.string(),
	status: crm_prospeccao_propostasStatusSchema,
	tipo_envio: crm_prospeccao_propostasTipoEnvioSchema,
	ultima_atualizacao: z.string(),
	ultima_atualizacao_original: z.string(),
	uuid: z.string(),
	validade: z.string(),
	variaveis_whatsapp: z.string(),
	whatsapp_destinatario: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_prospeccao_propostasSchema =
	crm_prospeccao_propostasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_prospeccao_propostasCreateSchema =
	crm_prospeccao_propostasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_prospeccao_propostasUpdateSchema =
	crm_prospeccao_propostasCreateSchema.partial();
