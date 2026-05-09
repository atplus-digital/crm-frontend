/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_RADIO_LOG_TABLE_NAME = "radpop_radio_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_logBaseSchema = z.object({
	id: z.number(),
	ack: z.number(),
	canal: z.string(),
	ccq: z.number(),
	chwidth: z.number(),
	conexoes: z.number(),
	cpu_load: z.number(),
	data: z.string(),
	distance: z.string(),
	free_memory: z.number(),
	id_pop_radio: z.number(),
	noisef: z.number(),
	rssi: z.number(),
	rxrate: z.number(),
	sinal: z.number(),
	temperatura: z.number(),
	total_memory: z.number(),
	txrate: z.number(),
	voltagem: z.number(),
	wds: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_logSchema = radpop_radio_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_logCreateSchema = radpop_radio_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_logUpdateSchema =
	radpop_radio_logCreateSchema.partial();
