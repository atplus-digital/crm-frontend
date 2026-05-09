/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	rad_dici_itemTipoAtendimentoSchema,
	rad_dici_itemTipoClienteSchema,
	rad_dici_itemTipoMeioAcessoSchema,
	rad_dici_itemTipoProdutoSchema,
} from "./labels";

export const RAD_DICI_ITEM_TABLE_NAME = "rad_dici_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_dici_itemBaseSchema = z.object({
	id: z.number(),
	cidade: z.number(),
	data_cancelamento: z.string(),
	data_emissao: z.string(),
	dici_velocidade: z.string(),
	id_plano: z.number(),
	id_rad_dici: z.number(),
	id_tipo_documento: z.number(),
	modelo_nf: z.string(),
	nome_plano: z.string(),
	qtd_acessos: z.number(),
	tecnologia: z.string(),
	tipo_atendimento: rad_dici_itemTipoAtendimentoSchema,
	tipo_cliente: rad_dici_itemTipoClienteSchema,
	tipo_meio_acesso: rad_dici_itemTipoMeioAcessoSchema,
	tipo_produto: rad_dici_itemTipoProdutoSchema,
	velocidade: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_dici_itemSchema = rad_dici_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_dici_itemCreateSchema = rad_dici_itemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_dici_itemUpdateSchema = rad_dici_itemCreateSchema.partial();
