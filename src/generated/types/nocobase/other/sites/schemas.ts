/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { sitesStatusSchema, sitesTipoSchema } from "./labels";

export const T_SITES_TABLE_NAME = "t_sites";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sitesBaseSchema = z.object({
	id: z.number(),
	f_fk_telecom_contatos: z.number(),
	f_bairro: z.string(),
	f_cep: z.string(),
	f_cidade: z.string(),
	f_complemento: z.string(),
	f_dados_acesso: z.string(),
	f_endereco: z.string(),
	f_nome: z.string(),
	f_numero: z.string(),
	f_sigla: z.string(),
	f_status: sitesStatusSchema,
	f_tipo: sitesTipoSchema,
	f_uf: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const sitesRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_anexos: z.number().array(),
	f_contatos: z.number().nullable(),
	f_fk_sites_equipamentos: z.number().array(),
	f_racks: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sitesSchema = sitesBaseSchema.merge(sitesRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sitesCreateSchema = sitesSchema.omit({
	createdAt: true,
	createdBy: true,
	f_anexos: true,
	f_contatos: true,
	f_fk_sites_equipamentos: true,
	f_racks: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sitesUpdateSchema = sitesCreateSchema.partial();
