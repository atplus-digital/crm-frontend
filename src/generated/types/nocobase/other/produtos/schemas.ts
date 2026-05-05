/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { opcoes_smp_templateBaseSchema } from "../opcoes-smp-template/schemas";
import { opcoes_stfc_templateBaseSchema } from "../opcoes-stfc-template/schemas";
import { produtosTipoIxcSchema, produtosTipoProdutoSchema } from "./labels";

export const T_PRODUTOS_TABLE_NAME = "t_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtosBaseSchema = z.object({
	id: z.number(),
	f_descricao_produto: z.string(),
	f_id_ixc: z.number(),
	f_mensalidade_com_desconto: z.number(),
	f_mensalidade_sem_desconto: z.number(),
	f_nome_produto: z.string(),
	f_tipo_ixc: produtosTipoIxcSchema,
	f_tipo_produto: produtosTipoProdutoSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const produtosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_opcoes_smp_template: z.lazy(() => opcoes_smp_templateBaseSchema.nullable()),
	f_opcoes_STFC: z.lazy(() => opcoes_stfc_templateBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtosSchema = produtosBaseSchema.extend(
	produtosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtosCreateSchema = produtosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_opcoes_smp_template: true,
	f_opcoes_STFC: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtosUpdateSchema = produtosCreateSchema.partial();
