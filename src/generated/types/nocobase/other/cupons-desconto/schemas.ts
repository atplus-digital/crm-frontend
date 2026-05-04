/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cupons_descontoStatusSchema,
	cupons_descontoTipoNegociacaoSchema,
	cupons_descontoTipoSchema,
} from "./labels";

export const T_CUPONS_DESCONTO_TABLE_NAME = "t_cupons_desconto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cupons_descontoBaseSchema = z.object({
	id: z.number(),
	f_fk_pacotes_desconto: z.number(),
	f_fk_vendedor_desconto: z.number(),
	f_cep: z.string(),
	f_codigo: z.string(),
	f_data_fim: z.string(),
	f_data_inicio: z.string(),
	f_endereco: z.string(),
	f_endereco_numero: z.string(),
	f_nome: z.string(),
	f_status: cupons_descontoStatusSchema,
	f_tipo: cupons_descontoTipoSchema,
	f_tipo_negociacao: cupons_descontoTipoNegociacaoSchema,
	f_utilizacoes: z.number(),
	f_valor: z.number(),
	f_valor_renovacao: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const cupons_descontoRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_pacotes: z.number().array(),
	f_vendedor: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cupons_descontoSchema = cupons_descontoBaseSchema.merge(
	cupons_descontoRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cupons_descontoCreateSchema = cupons_descontoSchema.omit({
	createdAt: true,
	createdBy: true,
	f_pacotes: true,
	f_vendedor: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cupons_descontoUpdateSchema =
	cupons_descontoCreateSchema.partial();
