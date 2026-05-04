/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	solicitacao_comprasCategoriaSchema,
	solicitacao_comprasDepartamentoSchema,
	solicitacao_comprasMetodoDePagamentoSchema,
	solicitacao_comprasPrazoSchema,
	solicitacao_comprasStatusSchema,
	solicitacao_comprasTipoSchema,
} from "./labels";

export const T_SOLICITACAO_COMPRAS_TABLE_NAME = "t_solicitacao_compras";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const solicitacao_comprasBaseSchema = z.object({
	id: z.number(),
	f_0i82r8a2t99: z.number(),
	f_categoria: solicitacao_comprasCategoriaSchema,
	f_departamento: solicitacao_comprasDepartamentoSchema,
	f_justificativa: z.string(),
	f_link: z.string(),
	f_metodo_de_pagamento: solicitacao_comprasMetodoDePagamentoSchema,
	f_motivo_arquivamento: z.string(),
	f_observacoes_finais: z.string(),
	f_prazo: solicitacao_comprasPrazoSchema,
	f_prazo_de_entrega: z.string(),
	f_servico: z.string(),
	f_status: solicitacao_comprasStatusSchema,
	f_tipo: solicitacao_comprasTipoSchema,
	f_titulo: z.string(),
	f_valor_total: z.number(),
	f_xm95ss7u5xw: z.number(),
	fk_demandas_solicitacao_compras: z.number(),
	fk_solicitacao_compras: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const solicitacao_comprasRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_anexos: z.number().array(),
	f_fornecedor: z.number().nullable(),
	f_produtos: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const solicitacao_comprasSchema = solicitacao_comprasBaseSchema.merge(
	solicitacao_comprasRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const solicitacao_comprasCreateSchema = solicitacao_comprasSchema.omit({
	createdAt: true,
	createdBy: true,
	f_anexos: true,
	f_fornecedor: true,
	f_produtos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const solicitacao_comprasUpdateSchema =
	solicitacao_comprasCreateSchema.partial();
