/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	rad_dici_seac_itemTipoAtendimentoSchema,
	rad_dici_seac_itemTipoClienteSchema,
	rad_dici_seac_itemTipoMeioAcessoSchema,
	rad_dici_seac_itemTipoProdutoSchema,
} from "./labels";

export const RAD_DICI_SEAC_ITEM_TABLE_NAME = "rad_dici_seac_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_dici_seac_itemBaseSchema = z.object({
	id: z.number(),
	cidade: z.number(),
	data_cancelamento: z.string(),
	data_emissao: z.string(),
	id_cliente_contrato: z.number(),
	id_rad_dici_seac: z.number(),
	id_tipo_documento: z.number(),
	mdoelo_nf: z.string(),
	modelo_nf: z.string(),
	numero_nf: z.number(),
	qtd_acessos: z.number(),
	tecnologia: z.string(),
	tipo_atendimento: rad_dici_seac_itemTipoAtendimentoSchema,
	tipo_cliente: rad_dici_seac_itemTipoClienteSchema,
	tipo_meio_acesso: rad_dici_seac_itemTipoMeioAcessoSchema,
	tipo_produto: rad_dici_seac_itemTipoProdutoSchema,
	type_connection_tv: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_dici_seac_itemSchema = rad_dici_seac_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_dici_seac_itemCreateSchema = rad_dici_seac_itemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_dici_seac_itemUpdateSchema =
	rad_dici_seac_itemCreateSchema.partial();
