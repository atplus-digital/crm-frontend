/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { empresasAnaliseIxcSchema, empresasCreditoSchema } from "./labels";

export const T_EMPRESAS_TABLE_NAME = "t_empresas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const empresasBaseSchema = z.object({
	id: z.number(),
	f_analise_ixc: empresasAnaliseIxcSchema,
	f_cnpj: z.string(),
	f_cpf_responsavel: z.string(),
	f_credito: empresasCreditoSchema,
	f_email_responsavel: z.string(),
	f_fundacao: z.string(),
	f_ie: z.string(),
	f_nome_fantasia: z.string(),
	f_razao_social: z.string(),
	f_responsavel: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const empresasRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const empresasSchema = empresasBaseSchema.merge(empresasRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const empresasCreateSchema = empresasSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const empresasUpdateSchema = empresasCreateSchema.partial();
