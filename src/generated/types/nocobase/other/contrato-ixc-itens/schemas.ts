/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_CONTRATO_IXC_ITENS_TABLE_NAME = "t_contrato_ixc_itens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contrato_ixc_itensBaseSchema = z.object({
	id: z.number(),
	f_fk_itens_contrato_ixc: z.number(),
	f_id_produto_contrato_ixc: z.string(),
	f_mensalidade: z.string(),
	f_produto: z.string(),
	f_quantidade: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const contrato_ixc_itensRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contrato_ixc_itensSchema = contrato_ixc_itensBaseSchema.extend(
	contrato_ixc_itensRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contrato_ixc_itensCreateSchema = contrato_ixc_itensSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const contrato_ixc_itensUpdateSchema =
	contrato_ixc_itensCreateSchema.partial();
