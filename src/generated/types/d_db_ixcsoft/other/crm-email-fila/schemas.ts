/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_email_filaEnviaAnexoSchema,
	crm_email_filaEnviadoSchema,
	crm_email_filaPularEnvioSchema,
} from "./labels";

export const CRM_EMAIL_FILA_TABLE_NAME = "crm_email_fila";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_email_filaBaseSchema = z.object({
	id: z.number(),
	anexos: z.string(),
	cli_mail: z.string(),
	cli_nome: z.string(),
	data_hora_inclusao: z.string(),
	envia_anexo: crm_email_filaEnviaAnexoSchema,
	enviado: crm_email_filaEnviadoSchema,
	filial: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_fn_areceber: z.string(),
	id_responsavel: z.number(),
	imagens: z.string(),
	mensagem: z.string(),
	nro_tentativas_envio: z.number(),
	prioridade: z.number(),
	pular_envio: crm_email_filaPularEnvioSchema,
	regua_cobranca_envios_id: z.number(),
	smtp: z.number(),
	texto_hitorico: z.string(),
	time_envio: z.string(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_email_filaSchema = crm_email_filaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_email_filaCreateSchema = crm_email_filaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_email_filaUpdateSchema = crm_email_filaCreateSchema.partial();
