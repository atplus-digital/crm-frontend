/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { suspensao_contratoStatusSchema } from "./labels";

export const T_SUSPENSAO_CONTRATO_TABLE_NAME = "t_suspensao_contrato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const suspensao_contratoBaseSchema = z.object({
	id: z.number(),
	f_fk_pessoas: z.number(),
	f_fk_pessoas_pj: z.number(),
	f_fk_responsavel: z.number(),
	f_cpf: z.string(),
	f_dias_suspensao: z.string(),
	f_email: z.string(),
	f_final_suspensao: z.string(),
	f_id_contrato: z.string(),
	f_inicio_suspensao: z.string(),
	f_link_assinatura: z.string(),
	f_status: suspensao_contratoStatusSchema,
	f_telefone: z.string(),
	f_teste: z.number(),
	f_titulo: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const suspensao_contratoRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_comentarios: z.number().array(),
	f_contratos: z.number().array(),
	f_pessoas: z.number().nullable(),
	f_pessoas_pj: z.number().nullable(),
	f_responsavel: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const suspensao_contratoSchema = suspensao_contratoBaseSchema.merge(
	suspensao_contratoRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const suspensao_contratoCreateSchema = suspensao_contratoSchema.omit({
	createdAt: true,
	createdBy: true,
	f_comentarios: true,
	f_contratos: true,
	f_pessoas: true,
	f_pessoas_pj: true,
	f_responsavel: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const suspensao_contratoUpdateSchema =
	suspensao_contratoCreateSchema.partial();
