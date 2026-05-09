/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_RADIO_CLIENTE_LOG_TABLE_NAME = "radpop_radio_cliente_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_cliente_logBaseSchema = z.object({
	id: z.number(),
	ack: z.number(),
	airmax_capacity: z.number(),
	airmax_quality: z.number(),
	airmax_sinal: z.number(),
	ccq: z.number(),
	data: z.string(),
	distance: z.string(),
	id_radpop_radio_cliente: z.number(),
	lastip: z.string(),
	noise: z.number(),
	rx: z.number(),
	sinal: z.number(),
	tx: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_cliente_logSchema =
	radpop_radio_cliente_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_cliente_logCreateSchema =
	radpop_radio_cliente_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_cliente_logUpdateSchema =
	radpop_radio_cliente_logCreateSchema.partial();
