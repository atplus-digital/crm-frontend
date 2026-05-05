/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_COMPRAS_FORNECEDORES_TABLE_NAME = "t_compras_fornecedores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const compras_fornecedoresBaseSchema = z.object({
	id: z.number(),
	f_contato: z.string(),
	f_nome: z.string(),
	f_site: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const compras_fornecedoresRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const compras_fornecedoresSchema = compras_fornecedoresBaseSchema.extend(
	compras_fornecedoresRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const compras_fornecedoresCreateSchema = compras_fornecedoresSchema.omit(
	{
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const compras_fornecedoresUpdateSchema =
	compras_fornecedoresCreateSchema.partial();
