/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECHAVE_FIELD_LABELS = {
	ativo: "ativo",
	banda_atual: "banda_atual",
	bkp_arquivo: "bkp_arquivo",
	bkp_data_arquivo: "bkp_data_arquivo",
	bkp_quant_files: "bkp_quant_files",
	bkp_tamanho_arquivo: "bkp_tamanho_arquivo",
	chave: "chave",
	chave_clientes_ativos: "chave_clientes_ativos",
	chave_contratos_importados: "chave_contratos_importados",
	chave_crm_ativos: "chave_crm_ativos",
	chave_leds_ativos: "chave_leds_ativos",
	chave_logins_ativos: "chave_logins_ativos",
	chave_logins_importados: "chave_logins_importados",
	cli_ativo: "cli_ativo",
	cnpj_cpf: "cnpj_cpf",
	data_atualizacao: "data_atualizacao",
	data_atualizacao_automatica: "data_atualizacao_automatica",
	data_atualizacao_sistema: "data_atualizacao_sistema",
	data_compilacao: "data_compilacao",
	data_insert: "data_insert",
	descricao: "descricao",
	disco_livre: "disco_livre",
	disco_total: "disco_total",
	disco_usado: "disco_usado",
	distro: "distro",
	elastic_host: "elastic_host",
	elastic_password: "elastic_password",
	elastic_porta: "elastic_porta",
	elastic_protocol: "elastic_protocol",
	elastic_user: "elastic_user",
	ftp_porta: "ftp_porta",
	ftp_senha: "ftp_senha",
	ftp_servidor: "ftp_servidor",
	ftp_usuario: "ftp_usuario",
	hs_tipo_login: "hs_tipo_login",
	id: "id",
	id_autenticacao_suporte_opa: "id_autenticacao_suporte_opa",
	id_cliente: "id_cliente",
	id_contrato: "id_contrato",
	id_plano: "id_plano",
	id_serial: "id_serial",
	ip_local: "ip_local",
	ip_sistema: "ip_sistema",
	location: "location",
	mega_senha: "mega_senha",
	mega_usuario: "mega_usuario",
	memoria_buffers: "memoria_buffers",
	memoria_cache: "memoria_cache",
	memoria_livre: "memoria_livre",
	memoria_swap_livre: "memoria_swap_livre",
	memoria_swap_total: "memoria_swap_total",
	memoria_total: "memoria_total",
	n_logins_simultaneos: "n_logins_simultaneos",
	observacao: "observacao",
	percentual_uso_disco_raiz: "percentual_uso_disco_raiz",
	porta_ssh_sistema: "porta_ssh_sistema",
	porta_web: "porta_web",
	qtde_cpu: "qtde_cpu",
	rclone_config: "rclone_config",
	release_type: "release_type",
	senha_banco_dados: "senha_banco_dados",
	senha_root: "senha_root",
	serial: "serial",
	serv_arquivos_inseguros: "serv_arquivos_inseguros",
	serv_config_filtro_ssh: "serv_config_filtro_ssh",
	servico_apache: "servico_apache",
	servico_asterisk: "servico_asterisk",
	servico_elastic: "servico_elastic",
	servico_fail2ban: "servico_fail2ban",
	servico_freeradius: "servico_freeradius",
	servico_memcached: "servico_memcached",
	servico_mysql: "servico_mysql",
	servico_nginx: "servico_nginx",
	servico_pm2: "servico_pm2",
	servico_pm2_ssl: "servico_pm2_ssl",
	servico_ssh: "servico_ssh",
	servidor_banco: "servidor_banco",
	sis_antingo: "sis_antingo",
	status_acesso_A: "status_acesso_A",
	status_acesso_CA: "status_acesso_CA",
	status_acesso_CM: "status_acesso_CM",
	status_acesso_FA: "status_acesso_FA",
	status_ultimo_bkp: "status_ultimo_bkp",
	tb_engine_crm_email: "tb_engine_crm_email",
	tb_engine_ixc_logs: "tb_engine_ixc_logs",
	tb_engine_radacct: "tb_engine_radacct",
	tb_index_crm_email: "tb_index_crm_email",
	tb_index_ixc_logs: "tb_index_ixc_logs",
	tb_index_radacct: "tb_index_radacct",
	tb_size_crm_email: "tb_size_crm_email",
	tb_size_ixc_logs: "tb_size_ixc_logs",
	tb_size_radacct: "tb_size_radacct",
	tipo_chave: "tipo_chave",
	total_contratos: "total_contratos",
	ultima_atualizacao: "ultima_atualizacao",
	url_sistema: "url_sistema",
	uso_cpu: "uso_cpu",
	usuario_banco: "usuario_banco",
	versao: "versao",
	versao_atualizacao: "versao_atualizacao",
	versao_viab: "versao_viab",
	virt_ip: "virt_ip",
	virt_login: "virt_login",
	virt_porta: "virt_porta",
	virt_senha: "virt_senha",
} as const;

export const CLIENTECHAVE_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECHAVE_LOCATION_LABELS = {
	BRA: "BRA",
	COL: "COL",
} as const;

export const CLIENTECHAVE_RELEASETYPE_LABELS = {
	release: "release",
	"release-candidate": "release-candidate",
} as const;

export const CLIENTECHAVE_SERVICOAPACHE_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOASTERISK_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOELASTIC_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOFAIL2BAN_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOFREERADIUS_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOMEMCACHED_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOMYSQL_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICONGINX_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOPM2_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOPM2SSL_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_SERVICOSSH_LABELS = {
	ON: "ON",
	OFF: "OFF",
} as const;

export const CLIENTECHAVE_TIPOCHAVE_LABELS = {
	P: "P",
	R: "R",
	T: "T",
	WL: "WL",
} as const;

export const CLIENTECHAVE_VERSAOATUALIZACAO_LABELS = {
	B: "B",
	E: "E",
	RC: "RC",
} as const;

export const CLIENTECHAVE_VERSAOVIAB_LABELS = {
	D: "D",
	1: "1",
	2: "2",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_chaveAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const cliente_chaveLocationSchema = z.enum(["BRA", "COL"], {
	error: () => ({ message: "location: valores válidos são [BRA, COL]" }),
});

export const cliente_chaveReleaseTypeSchema = z.enum(
	["release", "release-candidate"],
	{
		error: () => ({
			message: "release_type: valores válidos são [release, release-candidate]",
		}),
	},
);

export const cliente_chaveServicoApacheSchema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_apache: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveServicoAsteriskSchema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_asterisk: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveServicoElasticSchema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_elastic: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveServicoFail2banSchema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_fail2ban: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveServicoFreeradiusSchema = z.enum(["ON", "OFF"], {
	error: () => ({
		message: "servico_freeradius: valores válidos são [ON, OFF]",
	}),
});

export const cliente_chaveServicoMemcachedSchema = z.enum(["ON", "OFF"], {
	error: () => ({
		message: "servico_memcached: valores válidos são [ON, OFF]",
	}),
});

export const cliente_chaveServicoMysqlSchema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_mysql: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveServicoNginxSchema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_nginx: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveServicoPm2Schema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_pm2: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveServicoPm2SslSchema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_pm2_ssl: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveServicoSshSchema = z.enum(["ON", "OFF"], {
	error: () => ({ message: "servico_ssh: valores válidos são [ON, OFF]" }),
});

export const cliente_chaveTipoChaveSchema = z.enum(["P", "R", "T", "WL"], {
	error: () => ({ message: "tipo_chave: valores válidos são [P, R, T, WL]" }),
});

export const cliente_chaveVersaoAtualizacaoSchema = z.enum(["B", "E", "RC"], {
	error: () => ({
		message: "versao_atualizacao: valores válidos são [B, E, RC]",
	}),
});

export const cliente_chaveVersaoViabSchema = z.enum(["D", "1", "2"], {
	error: () => ({ message: "versao_viab: valores válidos são [D, 1, 2]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteChaveAtivo = z.infer<typeof cliente_chaveAtivoSchema>;

export type ClienteChaveLocation = z.infer<typeof cliente_chaveLocationSchema>;

export type ClienteChaveReleaseType = z.infer<
	typeof cliente_chaveReleaseTypeSchema
>;

export type ClienteChaveServicoApache = z.infer<
	typeof cliente_chaveServicoApacheSchema
>;

export type ClienteChaveServicoAsterisk = z.infer<
	typeof cliente_chaveServicoAsteriskSchema
>;

export type ClienteChaveServicoElastic = z.infer<
	typeof cliente_chaveServicoElasticSchema
>;

export type ClienteChaveServicoFail2ban = z.infer<
	typeof cliente_chaveServicoFail2banSchema
>;

export type ClienteChaveServicoFreeradius = z.infer<
	typeof cliente_chaveServicoFreeradiusSchema
>;

export type ClienteChaveServicoMemcached = z.infer<
	typeof cliente_chaveServicoMemcachedSchema
>;

export type ClienteChaveServicoMysql = z.infer<
	typeof cliente_chaveServicoMysqlSchema
>;

export type ClienteChaveServicoNginx = z.infer<
	typeof cliente_chaveServicoNginxSchema
>;

export type ClienteChaveServicoPm2 = z.infer<
	typeof cliente_chaveServicoPm2Schema
>;

export type ClienteChaveServicoPm2Ssl = z.infer<
	typeof cliente_chaveServicoPm2SslSchema
>;

export type ClienteChaveServicoSsh = z.infer<
	typeof cliente_chaveServicoSshSchema
>;

export type ClienteChaveTipoChave = z.infer<
	typeof cliente_chaveTipoChaveSchema
>;

export type ClienteChaveVersaoAtualizacao = z.infer<
	typeof cliente_chaveVersaoAtualizacaoSchema
>;

export type ClienteChaveVersaoViab = z.infer<
	typeof cliente_chaveVersaoViabSchema
>;
