/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TVUSUARIOSTMP_FIELD_LABELS = {
	account_id: "account_id",
	account_number: "account_number",
	birthday: "birthday",
	connection_type_tv: "connection_type_tv",
	controle_dos_pais: "controle_dos_pais",
	device_limit_id: "device_limit_id",
	id: "id",
	id_assinatura_cliente: "id_assinatura_cliente",
	id_assinatura_cliente_produto: "id_assinatura_cliente_produto",
	id_contrato: "id_contrato",
	id_dealer: "id_dealer",
	id_login_plataforma: "id_login_plataforma",
	id_plano_por_contrato: "id_plano_por_contrato",
	id_portal: "id_portal",
	id_vd_contratos_produtos: "id_vd_contratos_produtos",
	ip: "ip",
	login: "login",
	mac_devices: "mac_devices",
	online: "online",
	pin: "pin",
	plataforma: "plataforma",
	profile_name: "profile_name",
	senha: "senha",
	status_assinante_watch: "status_assinante_watch",
	tariff_plan: "tariff_plan",
	token_assinante_watch: "token_assinante_watch",
	usar_email_principal: "usar_email_principal",
	version: "version",
} as const;

export const TVUSUARIOSTMP_CONNECTIONTYPETV_LABELS = {
	DTH: "DTH",
	MMDS: "MMDS",
	SAT: "SAT",
	IPTV: "IPTV",
	OTT: "OTT",
	STR: "STR",
	VOD: "VOD",
} as const;

export const TVUSUARIOSTMP_CONTROLEDOSPAIS_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVUSUARIOSTMP_USAREMAILPRINCIPAL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tv_usuarios_tmpConnectionTypeTvSchema = z.enum(
	["DTH", "MMDS", "SAT", "IPTV", "OTT", "STR", "VOD"],
	{
		error: () => ({
			message:
				"connection_type_tv: valores válidos são [DTH, MMDS, SAT, IPTV, OTT, STR, VOD]",
		}),
	},
);

export const tv_usuarios_tmpControleDosPaisSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "controle_dos_pais: valores válidos são [Y, N]" }),
});

export const tv_usuarios_tmpUsarEmailPrincipalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "usar_email_principal: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TvUsuariosTmpConnectionTypeTv = z.infer<
	typeof tv_usuarios_tmpConnectionTypeTvSchema
>;

export type TvUsuariosTmpControleDosPais = z.infer<
	typeof tv_usuarios_tmpControleDosPaisSchema
>;

export type TvUsuariosTmpUsarEmailPrincipal = z.infer<
	typeof tv_usuarios_tmpUsarEmailPrincipalSchema
>;
