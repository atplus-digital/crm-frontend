/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_CONTRATOS_IXC_TABLE_NAME = "t_contratos_ixc";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contratos_ixcBaseSchema = z.object({
	id: z.number(),
	f_descricao: z.string(),
	f_expiracao: z.string(),
	f_vencimento: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const contratos_ixcRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_itens_contrato: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contratos_ixcSchema = contratos_ixcBaseSchema.merge(
	contratos_ixcRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contratos_ixcCreateSchema = contratos_ixcSchema.omit({
	createdAt: true,
	createdBy: true,
	f_itens_contrato: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const contratos_ixcUpdateSchema = contratos_ixcCreateSchema.partial();
