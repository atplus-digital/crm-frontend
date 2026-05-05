/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { telecom_contratosBaseSchema } from "../telecom-contratos/schemas";
import { telecom_recursosBaseSchema } from "../telecom-recursos/schemas";

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
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_fk_cliente_contrato: z.lazy(() => telecom_contratosBaseSchema.array()),
	f_fk_contrato_fornecedor: z.lazy(() => telecom_contratosBaseSchema.array()),
	f_fk_recurso_cliente: z.lazy(() => telecom_recursosBaseSchema.array()),
	f_fk_recurso_fornecedor: z.lazy(() => telecom_recursosBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fornecedores_telecomSchema = fornecedores_telecomBaseSchema.extend(
	fornecedores_telecomRelationSchema.shape,
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
