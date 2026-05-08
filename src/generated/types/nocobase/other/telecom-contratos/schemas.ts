/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { fornecedores_telecomBaseSchema } from "../fornecedores-telecom/schemas";
import { servicosBaseSchema } from "../servicos/schemas";

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
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_contratosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_cliente: z.lazy(() => fornecedores_telecomBaseSchema.nullable()),
	f_fornecedor: z.lazy(() => fornecedores_telecomBaseSchema.nullable()),
	f_servicos: z.lazy(() => servicosBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_contratosSchema = telecom_contratosBaseSchema.extend(
	telecom_contratosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_contratosCreateSchema = telecom_contratosSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_cliente: true,
	f_fornecedor: true,
	f_servicos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_contratosUpdateSchema =
	telecom_contratosCreateSchema.partial();
