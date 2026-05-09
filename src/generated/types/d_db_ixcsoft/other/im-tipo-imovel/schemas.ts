/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IM_TIPO_IMOVEL_TABLE_NAME = "im_tipo_imovel";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_tipo_imovelBaseSchema = z.object({
	id: z.number(),
	dia_vencimento: z.number(),
	id_carteira_cobranca: z.number(),
	id_cond_pagamento: z.number(),
	id_tipo_documento: z.number(),
	id_vendedor: z.number(),
	perc_comissao: z.number(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_tipo_imovelSchema = im_tipo_imovelBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_tipo_imovelCreateSchema = im_tipo_imovelSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_tipo_imovelUpdateSchema = im_tipo_imovelCreateSchema.partial();
