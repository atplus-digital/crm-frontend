/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	pessoasAnaliseIxcSchema,
	pessoasCreditoSchema,
	pessoasSexoSchema,
} from "./labels";

export const T_PESSOAS_TABLE_NAME = "t_pessoas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pessoasBaseSchema = z.object({
	id: z.number(),
	f_analise_ixc: pessoasAnaliseIxcSchema,
	f_cpf: z.string(),
	f_credito: pessoasCreditoSchema,
	f_data_nascimento: z.string(),
	f_nome: z.string(),
	f_sexo: pessoasSexoSchema,
	f_vky78cvjtdw: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const pessoasRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pessoasSchema = pessoasBaseSchema.merge(pessoasRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pessoasCreateSchema = pessoasSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pessoasUpdateSchema = pessoasCreateSchema.partial();
