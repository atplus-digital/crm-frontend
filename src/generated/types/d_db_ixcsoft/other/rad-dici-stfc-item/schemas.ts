/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	rad_dici_stfc_itemTipoAtendimentoSchema,
	rad_dici_stfc_itemTipoClienteSchema,
	rad_dici_stfc_itemTipoMeioAcessoSchema,
} from "./labels";

export const RAD_DICI_STFC_ITEM_TABLE_NAME = "rad_dici_stfc_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_dici_stfc_itemBaseSchema = z.object({
	id: z.number(),
	cidade: z.number(),
	data_cancelamento: z.string(),
	data_emissao: z.string(),
	id_rad_dici_stfc: z.number(),
	id_tipo_documento: z.number(),
	modelo_nf: z.string(),
	qt_acessos: z.number(),
	tipo_atendimento: rad_dici_stfc_itemTipoAtendimentoSchema,
	tipo_cliente: rad_dici_stfc_itemTipoClienteSchema,
	tipo_meio_acesso: rad_dici_stfc_itemTipoMeioAcessoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_dici_stfc_itemSchema = rad_dici_stfc_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_dici_stfc_itemCreateSchema = rad_dici_stfc_itemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_dici_stfc_itemUpdateSchema =
	rad_dici_stfc_itemCreateSchema.partial();
