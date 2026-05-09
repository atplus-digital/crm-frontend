/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_movim_finan_classeLiberadoSchema,
	fn_movim_finan_classeStatusSchema,
} from "./labels";

export const FN_MOVIM_FINAN_CLASSE_TABLE_NAME = "fn_movim_finan_classe";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_movim_finan_classeBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	historico: z.string(),
	id_apagar: z.number(),
	id_areceber: z.number(),
	id_filial: z.number(),
	id_movim_finan: z.number(),
	id_planejamento_analitico_finan: z.number(),
	liberado: fn_movim_finan_classeLiberadoSchema,
	status: fn_movim_finan_classeStatusSchema,
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_movim_finan_classeSchema = fn_movim_finan_classeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_movim_finan_classeCreateSchema =
	fn_movim_finan_classeSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_movim_finan_classeUpdateSchema =
	fn_movim_finan_classeCreateSchema.partial();
