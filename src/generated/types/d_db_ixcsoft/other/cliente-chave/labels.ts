/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
