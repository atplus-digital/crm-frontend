/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	radpop_radioAtivoSchema,
	radpop_radioBuscaPotenciaSchema,
	radpop_radioConexaoSchema,
	radpop_radioFabricanteModeloSchema,
	radpop_radioUsaSmartSchema,
} from "./labels";

export const RADPOP_RADIO_TABLE_NAME = "radpop_radio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radioBaseSchema = z.object({
	id: z.number(),
	ack: z.number(),
	apmac: z.string(),
	ativo: radpop_radioAtivoSchema,
	autosave: z.string(),
	busca_potencia: radpop_radioBuscaPotenciaSchema,
	canal: z.string(),
	ccq: z.number(),
	chains: z.string(),
	channel: z.string(),
	chwidth: z.number(),
	conexao: radpop_radioConexaoSchema,
	conexoes_ulltima_data: z.string(),
	conexoes_ultima: z.number(),
	cor_mapa: z.string(),
	countrycode: z.number(),
	cpu_load: z.string(),
	current_firmware: z.string(),
	descricao: z.string(),
	dfs: z.string(),
	distance: z.string(),
	fabricante_modelo: radpop_radioFabricanteModeloSchema,
	free_memory: z.string(),
	fwversion: z.string(),
	gabinete: z.number(),
	httpd_port: z.number(),
	id_olt: z.string(),
	id_olt_conscius: z.number(),
	id_olt_externo: z.number(),
	id_olt_unms: z.string(),
	id_padrao_cores: z.number(),
	id_pop: z.number(),
	id_prov_snmp: z.number(),
	id_pv_grupo_backup: z.number(),
	id_servidor_unms: z.number(),
	ip: z.string(),
	ip_anm: z.string(),
	login: z.string(),
	login_anm: z.string(),
	login_hw: z.string(),
	mode: z.string(),
	modelo: z.string(),
	netrole: z.string(),
	noisef: z.number(),
	operador_neutro: z.number(),
	opmode: z.string(),
	perfil_fibra_padrao: z.number(),
	perfil_neutro_bridge: z.number(),
	perfil_neutro_router: z.number(),
	pico_conexoes: z.number(),
	pico_conexoes_data: z.string(),
	pico_conexoes_dia: z.number(),
	pico_conexoes_dia_data: z.string(),
	porta_api: z.number(),
	porta_ssh: z.number(),
	porta_telnet: z.number(),
	porta_telnet_tl1: z.number(),
	rssi: z.number(),
	rstatus: z.number(),
	rxrate: z.number(),
	security: z.string(),
	senha: z.string(),
	senha_anm: z.string(),
	senha_hw: z.string(),
	sinal: z.number(),
	speed_lan: z.number(),
	speed_wlan: z.number(),
	ssid: z.string(),
	subrack: z.number(),
	temperatura: z.string(),
	time: z.string(),
	timeout: z.number(),
	total_memory: z.string(),
	txrate: z.number(),
	upgrade_firmware: z.string(),
	uptime: z.string(),
	usa_smart: radpop_radioUsaSmartSchema,
	usa_vpn: z.number(),
	voltagem: z.string(),
	wds: z.string(),
	wpa_psk: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radioSchema = radpop_radioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radioCreateSchema = radpop_radioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radioUpdateSchema = radpop_radioCreateSchema.partial();
