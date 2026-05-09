/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { radpop_radio_portaConexaoSchema } from "./labels";

export const RADPOP_RADIO_PORTA_TABLE_NAME = "radpop_radio_porta";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_portaBaseSchema = z.object({
	id: z.number(),
	ack: z.string(),
	band: z.string(),
	canal: z.string(),
	ccq: z.string(),
	chains: z.string(),
	chwidth: z.string(),
	codigo_do_pais: z.string(),
	conexao: radpop_radio_portaConexaoSchema,
	conexoes_ultima: z.number(),
	data: z.string(),
	descricao: z.string(),
	dfs: z.string(),
	distancia: z.string(),
	frequency: z.string(),
	id_pop_radio: z.number(),
	id_slot: z.number(),
	interface: z.string(),
	interface_type: z.string(),
	mac: z.string(),
	mode: z.string(),
	mtu: z.number(),
	noise: z.string(),
	numero_pon: z.number(),
	pais: z.string(),
	potencia_limite: z.string(),
	potencia_pon: z.number(),
	quantidade_onus: z.number(),
	quantidade_onus_autorizadas: z.number(),
	radio_name: z.string(),
	rssi: z.string(),
	rxrate: z.string(),
	security: z.string(),
	sinal: z.string(),
	speed_lan: z.string(),
	speed_wlan: z.string(),
	ssid: z.string(),
	txrate: z.string(),
	uptime: z.string(),
	vlan_dhcp: z.string(),
	vlan_iptv: z.string(),
	vlan_outros: z.string(),
	vlan_pppoe: z.string(),
	vlan_tr69: z.string(),
	vlan_uplink: z.number(),
	vlan_voip: z.string(),
	wds: z.string(),
	wireless_protocol: z.string(),
	wpa: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_portaSchema = radpop_radio_portaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_portaCreateSchema = radpop_radio_portaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_portaUpdateSchema =
	radpop_radio_portaCreateSchema.partial();
