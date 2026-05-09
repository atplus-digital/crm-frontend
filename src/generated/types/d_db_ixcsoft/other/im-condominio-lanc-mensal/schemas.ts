/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { im_condominio_lanc_mensalMesSchema } from "./labels";

export const IM_CONDOMINIO_LANC_MENSAL_TABLE_NAME = "im_condominio_lanc_mensal";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_condominio_lanc_mensalBaseSchema = z.object({
	id: z.number(),
	ano: z.number(),
	descricao: z.string(),
	id_condominio: z.number(),
	id_lanc_padrao: z.number(),
	id_produto: z.number(),
	mes: im_condominio_lanc_mensalMesSchema,
	valor_total: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_condominio_lanc_mensalSchema =
	im_condominio_lanc_mensalBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_condominio_lanc_mensalCreateSchema =
	im_condominio_lanc_mensalSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_condominio_lanc_mensalUpdateSchema =
	im_condominio_lanc_mensalCreateSchema.partial();
