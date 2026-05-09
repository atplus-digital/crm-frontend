/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_RADIO_PORTA_LOG_TABLE_NAME = "radpop_radio_porta_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_porta_logBaseSchema = z.object({
	id: z.number(),
	ack: z.string(),
	airmax_capacity: z.string(),
	airmax_quality: z.string(),
	airmax_sinal: z.string(),
	ccq: z.string(),
	conexoes_ultima: z.string(),
	data: z.string(),
	distancia: z.string(),
	id_radpop_radio_porta: z.number(),
	noise: z.string(),
	rxrate: z.string(),
	sinal: z.string(),
	txrate: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_porta_logSchema = radpop_radio_porta_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_porta_logCreateSchema =
	radpop_radio_porta_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_porta_logUpdateSchema =
	radpop_radio_porta_logCreateSchema.partial();
