/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOPRADIO_FIELD_LABELS = {
	ack: "ack",
	apmac: "apmac",
	ativo: "ativo",
	autosave: "autosave",
	busca_potencia: "busca_potencia",
	canal: "canal",
	ccq: "ccq",
	chains: "chains",
	channel: "channel",
	chwidth: "chwidth",
	conexao: "conexao",
	conexoes_ulltima_data: "conexoes_ulltima_data",
	conexoes_ultima: "conexoes_ultima",
	cor_mapa: "cor_mapa",
	countrycode: "countrycode",
	cpu_load: "cpu_load",
	current_firmware: "current_firmware",
	descricao: "descricao",
	dfs: "dfs",
	distance: "distance",
	fabricante_modelo: "fabricante_modelo",
	free_memory: "free_memory",
	fwversion: "fwversion",
	gabinete: "gabinete",
	httpd_port: "httpd_port",
	id: "id",
	id_olt: "id_olt",
	id_olt_conscius: "id_olt_conscius",
	id_olt_externo: "id_olt_externo",
	id_olt_unms: "id_olt_unms",
	id_padrao_cores: "id_padrao_cores",
	id_pop: "id_pop",
	id_prov_snmp: "id_prov_snmp",
	id_pv_grupo_backup: "id_pv_grupo_backup",
	id_servidor_unms: "id_servidor_unms",
	ip: "ip",
	ip_anm: "ip_anm",
	login: "login",
	login_anm: "login_anm",
	login_hw: "login_hw",
	mode: "mode",
	modelo: "modelo",
	netrole: "netrole",
	noisef: "noisef",
	operador_neutro: "operador_neutro",
	opmode: "opmode",
	perfil_fibra_padrao: "perfil_fibra_padrao",
	perfil_neutro_bridge: "perfil_neutro_bridge",
	perfil_neutro_router: "perfil_neutro_router",
	pico_conexoes: "pico_conexoes",
	pico_conexoes_data: "pico_conexoes_data",
	pico_conexoes_dia: "pico_conexoes_dia",
	pico_conexoes_dia_data: "pico_conexoes_dia_data",
	porta_api: "porta_api",
	porta_ssh: "porta_ssh",
	porta_telnet: "porta_telnet",
	porta_telnet_tl1: "porta_telnet_tl1",
	rssi: "rssi",
	rstatus: "rstatus",
	rxrate: "rxrate",
	security: "security",
	senha: "senha",
	senha_anm: "senha_anm",
	senha_hw: "senha_hw",
	sinal: "sinal",
	speed_lan: "speed_lan",
	speed_wlan: "speed_wlan",
	ssid: "ssid",
	subrack: "subrack",
	temperatura: "temperatura",
	time: "time",
	timeout: "timeout",
	total_memory: "total_memory",
	txrate: "txrate",
	upgrade_firmware: "upgrade_firmware",
	uptime: "uptime",
	usa_smart: "usa_smart",
	usa_vpn: "usa_vpn",
	voltagem: "voltagem",
	wds: "wds",
	wpa_psk: "wpa_psk",
} as const;

export const RADPOPRADIO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIO_BUSCAPOTENCIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIO_CONEXAO_LABELS = {
	58: "58",
	24: "24",
	C: "C",
	F: "F",
} as const;

export const RADPOPRADIO_FABRICANTEMODELO_LABELS = {
	SMARTOLT: "SMARTOLT",
	U: "U",
	M: "M",
	I: "I",
	O: "O",
	FH: "FH",
	DC: "DC",
	HW: "HW",
	ZTE: "ZTE",
	HW2: "HW2",
	PK: "PK",
	FK: "FK",
	FKG: "FKG",
	INB: "INB",
	DIG: "DIG",
	NK: "NK",
	FBT: "FBT",
	FKWGL: "FKWGL",
	VSOL: "VSOL",
	RAISE: "RAISE",
	CIAEPON: "CIAEPON",
	ZYXEL: "ZYXEL",
	UFIBER: "UFIBER",
	FB6001: "FB6001",
	FKC: "FKC",
	CIAGPON: "CIAGPON",
	ZTEC610: "ZTEC610",
	VSOLGPON: "VSOLGPON",
	PHYHOME: "PHYHOME",
	INTELBRASG16: "INTELBRASG16",
	"2FLEX": "2FLEX",
	INTELBRASEPON: "INTELBRASEPON",
	TPLINK: "TPLINK",
	OLTNEUTRA: "OLTNEUTRA",
	TH: "TH",
	TPLINKP700X: "TPLINKP700X",
} as const;

export const RADPOPRADIO_USASMART_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpop_radioAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const radpop_radioBuscaPotenciaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "busca_potencia: valores válidos são [S, N]" }),
});

export const radpop_radioConexaoSchema = z.enum(["58", "24", "C", "F"], {
	error: () => ({ message: "conexao: valores válidos são [58, 24, C, F]" }),
});

export const radpop_radioFabricanteModeloSchema = z.enum(
	[
		"SMARTOLT",
		"U",
		"M",
		"I",
		"O",
		"FH",
		"DC",
		"HW",
		"ZTE",
		"HW2",
		"PK",
		"FK",
		"FKG",
		"INB",
		"DIG",
		"NK",
		"FBT",
		"FKWGL",
		"VSOL",
		"RAISE",
		"CIAEPON",
		"ZYXEL",
		"UFIBER",
		"FB6001",
		"FKC",
		"CIAGPON",
		"ZTEC610",
		"VSOLGPON",
		"PHYHOME",
		"INTELBRASG16",
		"2FLEX",
		"INTELBRASEPON",
		"TPLINK",
		"OLTNEUTRA",
		"TH",
		"TPLINKP700X",
	],
	{
		error: () => ({
			message:
				"fabricante_modelo: valores válidos são [SMARTOLT, U, M, I, O, FH, DC, HW, ZTE, HW2, PK, FK, FKG, INB, DIG, NK, FBT, FKWGL, VSOL, RAISE, CIAEPON, ZYXEL, UFIBER, FB6001, FKC, CIAGPON, ZTEC610, VSOLGPON, PHYHOME, INTELBRASG16, 2FLEX, INTELBRASEPON, TPLINK, OLTNEUTRA, TH, TPLINKP700X]",
		}),
	},
);

export const radpop_radioUsaSmartSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usa_smart: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopRadioAtivo = z.infer<typeof radpop_radioAtivoSchema>;

export type RadpopRadioBuscaPotencia = z.infer<
	typeof radpop_radioBuscaPotenciaSchema
>;

export type RadpopRadioConexao = z.infer<typeof radpop_radioConexaoSchema>;

export type RadpopRadioFabricanteModelo = z.infer<
	typeof radpop_radioFabricanteModeloSchema
>;

export type RadpopRadioUsaSmart = z.infer<typeof radpop_radioUsaSmartSchema>;
