/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { log_rotinas_cobrancasStatusSchema } from "./labels";

export const LOG_ROTINAS_COBRANCAS_TABLE_NAME = "log_rotinas_cobrancas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_rotinas_cobrancasBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	descricao: z.string(),
	id_cliente: z.number(),
	id_receber: z.number(),
	status: log_rotinas_cobrancasStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_rotinas_cobrancasSchema = log_rotinas_cobrancasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_rotinas_cobrancasCreateSchema =
	log_rotinas_cobrancasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_rotinas_cobrancasUpdateSchema =
	log_rotinas_cobrancasCreateSchema.partial();
