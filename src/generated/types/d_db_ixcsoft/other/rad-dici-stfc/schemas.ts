/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	rad_dici_stfcAgruparCodigoFistelSchema,
	rad_dici_stfcModeloNfSchema,
} from "./labels";

export const RAD_DICI_STFC_TABLE_NAME = "rad_dici_stfc";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_dici_stfcBaseSchema = z.object({
	id: z.number(),
	agrupar_codigo_fistel: rad_dici_stfcAgruparCodigoFistelSchema,
	ano: z.number(),
	cnpj_cpf: z.string(),
	data_referencia: z.string(),
	id_filial: z.number(),
	mes: z.number(),
	modelo_nf: rad_dici_stfcModeloNfSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_dici_stfcSchema = rad_dici_stfcBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_dici_stfcCreateSchema = rad_dici_stfcSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_dici_stfcUpdateSchema = rad_dici_stfcCreateSchema.partial();
