/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DICI_PPP_LINE_PROCESSOR_TABLE_NAME = "dici_ppp_line_processor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const dici_ppp_line_processorBaseSchema = z.object({
	id: z.number(),
	cnpj: z.string(),
	data_associated: z.string(),
	date: z.string(),
	filter_id: z.number(),
	national_code: z.string(),
	service: z.string(),
	total_value: z.number(),
	uf: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const dici_ppp_line_processorSchema = dici_ppp_line_processorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const dici_ppp_line_processorCreateSchema =
	dici_ppp_line_processorSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const dici_ppp_line_processorUpdateSchema =
	dici_ppp_line_processorCreateSchema.partial();
