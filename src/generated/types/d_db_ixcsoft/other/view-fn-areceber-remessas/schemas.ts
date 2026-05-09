/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VIEW_FN_ARECEBER_REMESSAS_TABLE_NAME = "view_fn_areceber_remessas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_fn_areceber_remessasBaseSchema = z.object({
	id: z.number(),
	data_emissao: z.string(),
	data_vencimento: z.string(),
	id_carteira_cobranca: z.number(),
	id_receber: z.number(),
	id_remessa: z.number(),
	razao: z.string(),
	tipo_remessa: z.string(),
	valor_aberto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_fn_areceber_remessasSchema =
	view_fn_areceber_remessasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_fn_areceber_remessasCreateSchema =
	view_fn_areceber_remessasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_fn_areceber_remessasUpdateSchema =
	view_fn_areceber_remessasCreateSchema.partial();
