/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { opcoes_smpBaseSchema } from "../opcoes-smp/schemas";
import { opcoes_stfcBaseSchema } from "../opcoes-stfc/schemas";
import {
	negociacoes_itensRelacaoSchema,
	negociacoes_itensTipoProdutoSchema,
} from "./labels";

export const T_NEGOCIACOES_ITENS_TABLE_NAME = "t_negociacoes_itens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const negociacoes_itensBaseSchema = z.object({
	id: z.number(),
	f_fk_id_negociacao: z.number(),
	f_id_ixc: z.number(),
	f_mensalidade_com_desconto: z.number(),
	f_mensalidade_sem_desconto: z.number(),
	f_nome_produto: z.string(),
	f_observacoes: z.string(),
	f_observacoes_atendimento: z.string(),
	f_relacao: negociacoes_itensRelacaoSchema,
	f_tipo_ixc: z.string(),
	f_tipo_produto: negociacoes_itensTipoProdutoSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const negociacoes_itensRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_opcoes_smp: z.lazy(() => opcoes_smpBaseSchema.nullable()),
	f_opcoes_stfc: z.lazy(() => opcoes_stfcBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const negociacoes_itensSchema = negociacoes_itensBaseSchema.extend(
	negociacoes_itensRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const negociacoes_itensCreateSchema = negociacoes_itensSchema.omit({
	createdAt: true,
	createdBy: true,
	f_opcoes_smp: true,
	f_opcoes_stfc: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const negociacoes_itensUpdateSchema =
	negociacoes_itensCreateSchema.partial();
