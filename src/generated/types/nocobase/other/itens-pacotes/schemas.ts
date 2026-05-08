/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import {
	itens_pacotesTipoIxcSchema,
	itens_pacotesTipoProdutoSchema,
} from "./labels";

export const T_ITENS_PACOTES_TABLE_NAME = "t_itens_pacotes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const itens_pacotesBaseSchema = z.object({
	id: z.number(),
	f_ch3bjzt4zr7: z.number(),
	f_fk1: z.number(),
	f_fk2: z.number(),
	f_id_ixc: z.number(),
	f_mensalidade_com_desconto: z.number(),
	f_mensalidade_sem_desconto: z.number(),
	f_nome_do_produto: z.string(),
	f_tipo_ixc: itens_pacotesTipoIxcSchema,
	f_tipo_produto: itens_pacotesTipoProdutoSchema,
	f_vna9rme0f5j: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const itens_pacotesRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const itens_pacotesSchema = itens_pacotesBaseSchema.extend(
	itens_pacotesRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const itens_pacotesCreateSchema = itens_pacotesSchema.omit({
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
export const itens_pacotesUpdateSchema = itens_pacotesCreateSchema.partial();
