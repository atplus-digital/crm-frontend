/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { radpop_radio_clienteUsaSmartSchema } from "./labels";

export const RADPOP_RADIO_CLIENTE_TABLE_NAME = "radpop_radio_cliente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_clienteBaseSchema = z.object({
	id: z.number(),
	ack: z.number(),
	airmax_capacity: z.number(),
	airmax_priority: z.number(),
	airmax_quality: z.number(),
	airmax_sinal: z.number(),
	ap: z.string(),
	bytes: z.string(),
	ccq: z.number(),
	distance: z.string(),
	id_hardware: z.number(),
	id_pop: z.number(),
	id_pop_radio: z.number(),
	id_pop_radio_porta: z.number(),
	id_radusuarios: z.number(),
	interface: z.string(),
	lastip: z.string(),
	mac: z.string(),
	name: z.string(),
	noise: z.number(),
	nstreme: z.string(),
	routeros_version: z.string(),
	rx: z.number(),
	rx_ccq: z.string(),
	signal_strength_ch0: z.string(),
	signal_strength_ch1: z.string(),
	signal_to_noise: z.string(),
	sinal: z.number(),
	tx: z.number(),
	tx_ccq: z.string(),
	ultima_atualizacao: z.string(),
	uptime: z.string(),
	usa_smart: radpop_radio_clienteUsaSmartSchema,
	wds: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_clienteSchema = radpop_radio_clienteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_clienteCreateSchema = radpop_radio_clienteSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_clienteUpdateSchema =
	radpop_radio_clienteCreateSchema.partial();
