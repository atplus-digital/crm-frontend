/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IM_CONDOMINIO_LANC_PADRAO_TABLE_NAME = "im_condominio_lanc_padrao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_condominio_lanc_padraoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_condominio: z.number(),
	id_produto: z.number(),
	meses_ignorar: z.string(),
	quantidade: z.number(),
	valor_total: z.number(),
	valor_unit: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_condominio_lanc_padraoSchema =
	im_condominio_lanc_padraoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_condominio_lanc_padraoCreateSchema =
	im_condominio_lanc_padraoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_condominio_lanc_padraoUpdateSchema =
	im_condominio_lanc_padraoCreateSchema.partial();
