/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	rad_diciAgruparCodigoFistelSchema,
	rad_diciModeloNfSchema,
} from "./labels";

export const RAD_DICI_TABLE_NAME = "rad_dici";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_diciBaseSchema = z.object({
	id: z.number(),
	agrupar_codigo_fistel: rad_diciAgruparCodigoFistelSchema,
	ano: z.number(),
	cnpj_cpf: z.string(),
	data_referencia: z.string(),
	id_filial: z.number(),
	log_dici_planos: z.string(),
	mes: z.number(),
	modelo_nf: rad_diciModeloNfSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_diciSchema = rad_diciBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_diciCreateSchema = rad_diciSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_diciUpdateSchema = rad_diciCreateSchema.partial();
