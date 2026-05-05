/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { comentarios_suspensao_de_contratoBaseSchema } from "../comentarios-suspensao-de-contrato/schemas";
import { empresasBaseSchema } from "../empresas/schemas";
import { contratosBaseSchema } from "../other/contratos/schemas";
import { pessoasBaseSchema } from "../pessoas/schemas";
import { usersBaseSchema } from "../users/schemas";
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
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_comentarios: z.lazy(() =>
		comentarios_suspensao_de_contratoBaseSchema.array(),
	),
	f_contratos: z.lazy(() => contratosBaseSchema.array()),
	f_pessoas: z.lazy(() => pessoasBaseSchema.nullable()),
	f_pessoas_pj: z.lazy(() => empresasBaseSchema.nullable()),
	f_responsavel: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const suspensao_contratoSchema = suspensao_contratoBaseSchema.extend(
	suspensao_contratoRelationSchema.shape,
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
