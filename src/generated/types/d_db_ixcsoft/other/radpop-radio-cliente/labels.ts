/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOPRADIOCLIENTE_FIELD_LABELS = {
	ack: "ack",
	airmax_capacity: "airmax_capacity",
	airmax_priority: "airmax_priority",
	airmax_quality: "airmax_quality",
	airmax_sinal: "airmax_sinal",
	ap: "ap",
	bytes: "bytes",
	ccq: "ccq",
	distance: "distance",
	id: "id",
	id_hardware: "id_hardware",
	id_pop: "id_pop",
	id_pop_radio: "id_pop_radio",
	id_pop_radio_porta: "id_pop_radio_porta",
	id_radusuarios: "id_radusuarios",
	interface: "interface",
	lastip: "lastip",
	mac: "mac",
	name: "name",
	noise: "noise",
	nstreme: "nstreme",
	routeros_version: "routeros_version",
	rx: "rx",
	rx_ccq: "rx_ccq",
	signal_strength_ch0: "signal_strength_ch0",
	signal_strength_ch1: "signal_strength_ch1",
	signal_to_noise: "signal_to_noise",
	sinal: "sinal",
	tx: "tx",
	tx_ccq: "tx_ccq",
	ultima_atualizacao: "ultima_atualizacao",
	uptime: "uptime",
	usa_smart: "usa_smart",
	wds: "wds",
} as const;

export const RADPOPRADIOCLIENTE_USASMART_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpop_radio_clienteUsaSmartSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usa_smart: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopRadioClienteUsaSmart = z.infer<
	typeof radpop_radio_clienteUsaSmartSchema
>;
