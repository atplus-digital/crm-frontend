/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOPRADIOPORTA_FIELD_LABELS = {
	ack: "ack",
	band: "band",
	canal: "canal",
	ccq: "ccq",
	chains: "chains",
	chwidth: "chwidth",
	codigo_do_pais: "codigo_do_pais",
	conexao: "conexao",
	conexoes_ultima: "conexoes_ultima",
	data: "data",
	descricao: "descricao",
	dfs: "dfs",
	distancia: "distancia",
	frequency: "frequency",
	id: "id",
	id_pop_radio: "id_pop_radio",
	id_slot: "id_slot",
	interface: "interface",
	interface_type: "interface_type",
	mac: "mac",
	mode: "mode",
	mtu: "mtu",
	noise: "noise",
	numero_pon: "numero_pon",
	pais: "pais",
	potencia_limite: "potencia_limite",
	potencia_pon: "potencia_pon",
	quantidade_onus: "quantidade_onus",
	quantidade_onus_autorizadas: "quantidade_onus_autorizadas",
	radio_name: "radio_name",
	rssi: "rssi",
	rxrate: "rxrate",
	security: "security",
	sinal: "sinal",
	speed_lan: "speed_lan",
	speed_wlan: "speed_wlan",
	ssid: "ssid",
	txrate: "txrate",
	uptime: "uptime",
	vlan_dhcp: "vlan_dhcp",
	vlan_iptv: "vlan_iptv",
	vlan_outros: "vlan_outros",
	vlan_pppoe: "vlan_pppoe",
	vlan_tr69: "vlan_tr69",
	vlan_uplink: "vlan_uplink",
	vlan_voip: "vlan_voip",
	wds: "wds",
	wireless_protocol: "wireless_protocol",
	wpa: "wpa",
} as const;

export const RADPOPRADIOPORTA_CONEXAO_LABELS = {
	58: "58",
	24: "24",
	C: "C",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpop_radio_portaConexaoSchema = z.enum(["58", "24", "C", "F"], {
	error: () => ({ message: "conexao: valores válidos são [58, 24, C, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopRadioPortaConexao = z.infer<
	typeof radpop_radio_portaConexaoSchema
>;
