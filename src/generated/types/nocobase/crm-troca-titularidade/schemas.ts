/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_troca_titularidadeComplementoSchema,
	crm_troca_titularidadeEstadoSchema,
	crm_troca_titularidadeStatusSchema,
	crm_troca_titularidadeSubstatusSchema,
	crm_troca_titularidadeTipoPessoaSchema,
} from "./labels";

export const T_CRM_TROCA_TITULARIDADE_TABLE_NAME = "t_crm_troca_titularidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_troca_titularidadeBaseSchema = z.object({
	id: z.number(),
	f_fk_negociacao_vendedor: z.number(),
	f_fk_pessoa_negociacao: z.number(),
	f_fk_pessoa_pj_negociacao: z.number(),
	f_bairro: z.string(),
	f_cedente: z.string(),
	f_cedente_documento: z.string(),
	f_cedente_email: z.string(),
	f_cedente_responsavel_legal: z.string(),
	f_cedente_telefone: z.string(),
	f_cep: z.string(),
	f_cessionario: z.string(),
	f_cessionario_documento: z.string(),
	f_cessionario_email: z.string(),
	f_cessionario_responsavel: z.string(),
	f_cessionario_telefone: z.string(),
	f_cidade: z.string(),
	f_complemento: crm_troca_titularidadeComplementoSchema,
	f_endereco: z.string(),
	f_estado: crm_troca_titularidadeEstadoSchema,
	f_id_contrato: z.string(),
	f_link_assinatura_cedente: z.string(),
	f_link_assinatura_cessionario: z.string(),
	f_numero: z.string(),
	f_ordenacao: z.number(),
	f_rw7rp8431ty: z.number(),
	f_status: crm_troca_titularidadeStatusSchema,
	f_substatus: crm_troca_titularidadeSubstatusSchema,
	f_tipo_pessoa: crm_troca_titularidadeTipoPessoaSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const crm_troca_titularidadeRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_anexos: z.number().array(),
	f_comentarios: z.number().array(),
	f_pessoa_pf: z.number().nullable(),
	f_pessoa_pj: z.number().nullable(),
	f_trocadetitularidade_contrato: z.number().array(),
	f_vendedor: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_troca_titularidadeSchema =
	crm_troca_titularidadeBaseSchema.merge(crm_troca_titularidadeRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_troca_titularidadeCreateSchema =
	crm_troca_titularidadeSchema.omit({
		createdAt: true,
		createdBy: true,
		f_anexos: true,
		f_comentarios: true,
		f_pessoa_pf: true,
		f_pessoa_pj: true,
		f_trocadetitularidade_contrato: true,
		f_vendedor: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_troca_titularidadeUpdateSchema =
	crm_troca_titularidadeCreateSchema.partial();
