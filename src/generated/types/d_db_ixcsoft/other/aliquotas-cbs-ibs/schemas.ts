/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ALIQUOTAS_CBS_IBS_TABLE_NAME = "aliquotas_cbs_ibs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const aliquotas_cbs_ibsBaseSchema = z.object({
	id: z.number(),
	aliquota_cbs: z.number(),
	aliquota_ibs_estadual: z.number(),
	aliquota_ibs_municipal: z.number(),
	descricao_municipio: z.string(),
	ibge: z.number(),
	uf_descricao: z.string(),
	uf_sigla: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const aliquotas_cbs_ibsSchema = aliquotas_cbs_ibsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const aliquotas_cbs_ibsCreateSchema = aliquotas_cbs_ibsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const aliquotas_cbs_ibsUpdateSchema =
	aliquotas_cbs_ibsCreateSchema.partial();
