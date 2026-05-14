/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NAS_FIELD_LABELS = {
	alterar_nome_concentrador: "alterar_nome_concentrador",
	ativa_sv_regra: "ativa_sv_regra",
	ativo: "ativo",
	cliente_publicidade: "cliente_publicidade",
	coletar_ipv6_pd: "coletar_ipv6_pd",
	coletar_ipv6_profiles_mk: "coletar_ipv6_profiles_mk",
	community: "community",
	delimitador_dominio_huawei: "delimitador_dominio_huawei",
	desconexao_dominio_huawei: "desconexao_dominio_huawei",
	description: "description",
	direcionar_assinatura: "direcionar_assinatura",
	direcionar_aviso: "direcionar_aviso",
	direcionar_bloqueio: "direcionar_bloqueio",
	dns_primario: "dns_primario",
	dns_secundario: "dns_secundario",
	dominio: "dominio",
	dominio_bloqueio: "dominio_bloqueio",
	email_destino: "email_destino",
	enviar_notificacao_app: "enviar_notificacao_app",
	hora_backup: "hora_backup",
	id: "id",
	id_cache: "id_cache",
	id_mensagem_sms: "id_mensagem_sms",
	id_prov_snmp: "id_prov_snmp",
	id_pv_grupo_backup: "id_pv_grupo_backup",
	id_rad_dns: "id_rad_dns",
	id_radpop: "id_radpop",
	id_smtp: "id_smtp",
	id_smtp_bkp: "id_smtp_bkp",
	id_telegram_token: "id_telegram_token",
	interface_wan: "interface_wan",
	intervalo_aviso: "intervalo_aviso",
	ip_radius_vpn: "ip_radius_vpn",
	ip_sv_bloqueio: "ip_sv_bloqueio",
	login: "login",
	mascarar_cache: "mascarar_cache",
	mascarar_redes_prevadas: "mascarar_redes_prevadas",
	nasname: "nasname",
	netwacth: "netwacth",
	ntp_primario: "ntp_primario",
	numero_destino: "numero_destino",
	pool_concentrador: "pool_concentrador",
	pool_radius: "pool_radius",
	porta_api: "porta_api",
	porta_http: "porta_http",
	porta_incoming: "porta_incoming",
	porta_ssh: "porta_ssh",
	porta_sv_assinatura: "porta_sv_assinatura",
	porta_sv_aviso: "porta_sv_aviso",
	porta_sv_bloqueio: "porta_sv_bloqueio",
	porta_sv_manutencao: "porta_sv_manutencao",
	porta_telnet: "porta_telnet",
	ports: "ports",
	prefix_tamanho_ipv6: "prefix_tamanho_ipv6",
	radius_server_name: "radius_server_name",
	radius_timeout: "radius_timeout",
	rede_assinatura: "rede_assinatura",
	rede_aviso: "rede_aviso",
	rede_bloqueio: "rede_bloqueio",
	rede_ipv6: "rede_ipv6",
	rede_manutencao: "rede_manutencao",
	regra_assinatura: "regra_assinatura",
	regra_aviso: "regra_aviso",
	regra_aviso_e_cache: "regra_aviso_e_cache",
	regra_backup: "regra_backup",
	regra_bloqueio: "regra_bloqueio",
	regra_bloqueio_dominio: "regra_bloqueio_dominio",
	regra_cache: "regra_cache",
	regra_ipv6: "regra_ipv6",
	regra_manutencao: "regra_manutencao",
	regra_mascaramento: "regra_mascaramento",
	regra_radius: "regra_radius",
	regras_firewall: "regras_firewall",
	secret: "secret",
	senha: "senha",
	server: "server",
	shortname: "shortname",
	smtp_destino: "smtp_destino",
	sntp_client: "sntp_client",
	src_address_radius: "src_address_radius",
	tarefas_alteracao_velocidade: "tarefas_alteracao_velocidade",
	tarefas_reduzir_velocidade: "tarefas_reduzir_velocidade",
	telegran_chat_id: "telegran_chat_id",
	tipo: "tipo",
	tipo_acesso_aviso: "tipo_acesso_aviso",
	tipo_aviso: "tipo_aviso",
	token_script_pd: "token_script_pd",
	type: "type",
	ultima_atualizacao: "ultima_atualizacao",
	url_redirect: "url_redirect",
	usa_pptp: "usa_pptp",
} as const;

export const NAS_ALTERARNOMECONCENTRADOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_COLETARIPV6PD_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_DELIMITADORDOMINIOHUAWEI_LABELS = {
	"\\": "\\",
} as const;

export const NAS_DESCONEXAODOMINIOHUAWEI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_DIRECIONARASSINATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_DIRECIONARAVISO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_DIRECIONARBLOQUEIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_ENVIARNOTIFICACAOAPP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_MASCARARCACHE_LABELS = {
	N: "N",
	S: "S",
} as const;

export const NAS_MASCARARREDESPREVADAS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_NETWACTH_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRAASSINATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRAAVISO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRAAVISOECACHE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRABACKUP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRABLOQUEIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRABLOQUEIODOMINIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRACACHE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRAMANUTENCAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRAMASCARAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRARADIUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_REGRASFIREWALL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_SNTPCLIENT_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_TAREFASALTERACAOVELOCIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_TAREFASREDUZIRVELOCIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const NAS_TIPOACESSOAVISO_LABELS = {
	P: "P",
	T: "T",
} as const;

export const NAS_TIPOAVISO_LABELS = {
	I: "I",
	L: "L",
} as const;

export const NAS_USAPPTP_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const nasAlterarNomeConcentradorSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "alterar_nome_concentrador: valores válidos são [S, N]",
	}),
});

export const nasAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const nasColetarIpv6PdSchema = z.enum(["S", "N"], {
	error: () => ({ message: "coletar_ipv6_pd: valores válidos são [S, N]" }),
});

export const nasDelimitadorDominioHuaweiSchema = z.enum(
	["\\\\", "/", ":", "<", ">", "|", "@", "%"],
	{
		error: () => ({
			message:
				"delimitador_dominio_huawei: valores válidos são [\\\\, /, :, <, >, |, @, %]",
		}),
	},
);

export const nasDesconexaoDominioHuaweiSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "desconexao_dominio_huawei: valores válidos são [S, N]",
	}),
});

export const nasDirecionarAssinaturaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "direcionar_assinatura: valores válidos são [S, N]",
	}),
});

export const nasDirecionarAvisoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "direcionar_aviso: valores válidos são [S, N]" }),
});

export const nasDirecionarBloqueioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "direcionar_bloqueio: valores válidos são [S, N]" }),
});

export const nasEnviarNotificacaoAppSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "enviar_notificacao_app: valores válidos são [S, N]",
	}),
});

export const nasMascararCacheSchema = z.enum(["N", "S"], {
	error: () => ({ message: "mascarar_cache: valores válidos são [N, S]" }),
});

export const nasMascararRedesPrevadasSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mascarar_redes_prevadas: valores válidos são [S, N]",
	}),
});

export const nasNetwacthSchema = z.enum(["S", "N"], {
	error: () => ({ message: "netwacth: valores válidos são [S, N]" }),
});

export const nasRegraAssinaturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_assinatura: valores válidos são [S, N]" }),
});

export const nasRegraAvisoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_aviso: valores válidos são [S, N]" }),
});

export const nasRegraAvisoECacheSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_aviso_e_cache: valores válidos são [S, N]" }),
});

export const nasRegraBackupSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_backup: valores válidos são [S, N]" }),
});

export const nasRegraBloqueioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_bloqueio: valores válidos são [S, N]" }),
});

export const nasRegraBloqueioDominioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "regra_bloqueio_dominio: valores válidos são [S, N]",
	}),
});

export const nasRegraCacheSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_cache: valores válidos são [S, N]" }),
});

export const nasRegraManutencaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_manutencao: valores válidos são [S, N]" }),
});

export const nasRegraMascaramentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_mascaramento: valores válidos são [S, N]" }),
});

export const nasRegraRadiusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regra_radius: valores válidos são [S, N]" }),
});

export const nasRegrasFirewallSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regras_firewall: valores válidos são [S, N]" }),
});

export const nasSntpClientSchema = z.enum(["S", "N"], {
	error: () => ({ message: "sntp_client: valores válidos são [S, N]" }),
});

export const nasTarefasAlteracaoVelocidadeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "tarefas_alteracao_velocidade: valores válidos são [S, N]",
	}),
});

export const nasTarefasReduzirVelocidadeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "tarefas_reduzir_velocidade: valores válidos são [S, N]",
	}),
});

export const nasTipoAcessoAvisoSchema = z.enum(["P", "T"], {
	error: () => ({ message: "tipo_acesso_aviso: valores válidos são [P, T]" }),
});

export const nasTipoAvisoSchema = z.enum(["I", "L"], {
	error: () => ({ message: "tipo_aviso: valores válidos são [I, L]" }),
});

export const nasUsaPptpSchema = z.enum(["N", "S"], {
	error: () => ({ message: "usa_pptp: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NasAlterarNomeConcentrador = z.infer<
	typeof nasAlterarNomeConcentradorSchema
>;

export type NasAtivo = z.infer<typeof nasAtivoSchema>;

export type NasColetarIpv6Pd = z.infer<typeof nasColetarIpv6PdSchema>;

export type NasDelimitadorDominioHuawei = z.infer<
	typeof nasDelimitadorDominioHuaweiSchema
>;

export type NasDesconexaoDominioHuawei = z.infer<
	typeof nasDesconexaoDominioHuaweiSchema
>;

export type NasDirecionarAssinatura = z.infer<
	typeof nasDirecionarAssinaturaSchema
>;

export type NasDirecionarAviso = z.infer<typeof nasDirecionarAvisoSchema>;

export type NasDirecionarBloqueio = z.infer<typeof nasDirecionarBloqueioSchema>;

export type NasEnviarNotificacaoApp = z.infer<
	typeof nasEnviarNotificacaoAppSchema
>;

export type NasMascararCache = z.infer<typeof nasMascararCacheSchema>;

export type NasMascararRedesPrevadas = z.infer<
	typeof nasMascararRedesPrevadasSchema
>;

export type NasNetwacth = z.infer<typeof nasNetwacthSchema>;

export type NasRegraAssinatura = z.infer<typeof nasRegraAssinaturaSchema>;

export type NasRegraAviso = z.infer<typeof nasRegraAvisoSchema>;

export type NasRegraAvisoECache = z.infer<typeof nasRegraAvisoECacheSchema>;

export type NasRegraBackup = z.infer<typeof nasRegraBackupSchema>;

export type NasRegraBloqueio = z.infer<typeof nasRegraBloqueioSchema>;

export type NasRegraBloqueioDominio = z.infer<
	typeof nasRegraBloqueioDominioSchema
>;

export type NasRegraCache = z.infer<typeof nasRegraCacheSchema>;

export type NasRegraManutencao = z.infer<typeof nasRegraManutencaoSchema>;

export type NasRegraMascaramento = z.infer<typeof nasRegraMascaramentoSchema>;

export type NasRegraRadius = z.infer<typeof nasRegraRadiusSchema>;

export type NasRegrasFirewall = z.infer<typeof nasRegrasFirewallSchema>;

export type NasSntpClient = z.infer<typeof nasSntpClientSchema>;

export type NasTarefasAlteracaoVelocidade = z.infer<
	typeof nasTarefasAlteracaoVelocidadeSchema
>;

export type NasTarefasReduzirVelocidade = z.infer<
	typeof nasTarefasReduzirVelocidadeSchema
>;

export type NasTipoAcessoAviso = z.infer<typeof nasTipoAcessoAvisoSchema>;

export type NasTipoAviso = z.infer<typeof nasTipoAvisoSchema>;

export type NasUsaPptp = z.infer<typeof nasUsaPptpSchema>;
