/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_FORNECEDORES_TELECOM_TABLE_NAME = "t_fornecedores_telecom";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fornecedores_telecomBaseSchema = z.object({
	id: z.number(),
	f_fk_cliente_circuiro: z.number(),
	f_fk_fornecedor_circuito: z.number(),
	f_instrucoes: z.string(),
	f_nome_fantasia: z.string(),
	f_razao_social: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const fornecedores_telecomRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_fk_cliente_contrato: z.number().array(),
	f_fk_contrato_fornecedor: z.number().array(),
	f_fk_recurso_cliente: z.number().array(),
	f_fk_recurso_fornecedor: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fornecedores_telecomSchema = fornecedores_telecomBaseSchema.merge(
	fornecedores_telecomRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fornecedores_telecomCreateSchema = fornecedores_telecomSchema.omit(
	{
		createdAt: true,
		createdBy: true,
		f_fk_cliente_contrato: true,
		f_fk_contrato_fornecedor: true,
		f_fk_recurso_cliente: true,
		f_fk_recurso_fornecedor: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fornecedores_telecomUpdateSchema =
	fornecedores_telecomCreateSchema.partial();
