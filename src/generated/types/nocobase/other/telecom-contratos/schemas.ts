/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_TELECOM_CONTRATOS_TABLE_NAME = "t_telecom_contratos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_contratosBaseSchema = z.object({
	id: z.number(),
	f_fk_cliente: z.number(),
	f_fk_fornecedor: z.number(),
	f_descricao: z.string(),
	f_o6r7bgwk9bb: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_contratosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_cliente: z.number().nullable(),
	f_fornecedor: z.number().nullable(),
	f_servicos: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_contratosSchema = telecom_contratosBaseSchema.merge(
	telecom_contratosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_contratosCreateSchema = telecom_contratosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_cliente: true,
	f_fornecedor: true,
	f_servicos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_contratosUpdateSchema =
	telecom_contratosCreateSchema.partial();
