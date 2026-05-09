/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONFIGURACAOCALLCENTER_ANNOUNCETOFIRSTUSER_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_AUTOFILL_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_AUTOPAUSE_LABELS = {
	yes: "yes",
	no: "no",
	all: "all",
} as const;

export const CONFIGURACAOCALLCENTER_AUTOPAUSEBUSY_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_AUTOPAUSEUNAVAIL_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_RANDOMPERIODICANNOUNCE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_RELATIVEPERIODICANNOUNCE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_REPORTHOLDTIME_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_RINGINUSE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_SETINTERFACEVAR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_SETQUEUEENTRYVAR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_SETQUEUEVAR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const CONFIGURACAOCALLCENTER_STRATEGY_LABELS = {
	ringall: "ringall",
	leastrecent: "leastrecent",
	fewestcalls: "fewestcalls",
	random: "random",
	rrmemory: "rrmemory",
	linear: "linear",
	wrandom: "wrandom",
	rrordered: "rrordered",
} as const;

export const CONFIGURACAOCALLCENTER_TIMEOUTRESTART_LABELS = {
	yes: "yes",
	no: "no",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const configuracao_callcenterAnnounceToFirstUserSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "announce_to_first_user: valores válidos são [yes, no]",
		}),
	},
);

export const configuracao_callcenterAutofillSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "autofill: valores válidos são [yes, no]" }),
});

export const configuracao_callcenterAutopauseSchema = z.enum(
	["yes", "no", "all"],
	{
		error: () => ({ message: "autopause: valores válidos são [yes, no, all]" }),
	},
);

export const configuracao_callcenterAutopausebusySchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "autopausebusy: valores válidos são [yes, no]" }),
	},
);

export const configuracao_callcenterAutopauseunavailSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "autopauseunavail: valores válidos são [yes, no]",
		}),
	},
);

export const configuracao_callcenterRandomPeriodicAnnounceSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "random_periodic_announce: valores válidos são [yes, no]",
		}),
	},
);

export const configuracao_callcenterRelativePeriodicAnnounceSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "relative_periodic_announce: valores válidos são [yes, no]",
		}),
	},
);

export const configuracao_callcenterReportholdtimeSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "reportholdtime: valores válidos são [yes, no]" }),
	},
);

export const configuracao_callcenterRinginuseSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "ringinuse: valores válidos são [yes, no]" }),
});

export const configuracao_callcenterSetinterfacevarSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "setinterfacevar: valores válidos são [yes, no]",
		}),
	},
);

export const configuracao_callcenterSetqueueentryvarSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({
			message: "setqueueentryvar: valores válidos são [yes, no]",
		}),
	},
);

export const configuracao_callcenterSetqueuevarSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "setqueuevar: valores válidos são [yes, no]" }),
});

export const configuracao_callcenterStrategySchema = z.enum(
	[
		"ringall",
		"leastrecent",
		"fewestcalls",
		"random",
		"rrmemory",
		"linear",
		"wrandom",
		"rrordered",
	],
	{
		error: () => ({
			message:
				"strategy: valores válidos são [ringall, leastrecent, fewestcalls, random, rrmemory, linear, wrandom, rrordered]",
		}),
	},
);

export const configuracao_callcenterTimeoutrestartSchema = z.enum(
	["yes", "no"],
	{
		error: () => ({ message: "timeoutrestart: valores válidos são [yes, no]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConfiguracaoCallcenterAnnounceToFirstUser = z.infer<
	typeof configuracao_callcenterAnnounceToFirstUserSchema
>;

export type ConfiguracaoCallcenterAutofill = z.infer<
	typeof configuracao_callcenterAutofillSchema
>;

export type ConfiguracaoCallcenterAutopause = z.infer<
	typeof configuracao_callcenterAutopauseSchema
>;

export type ConfiguracaoCallcenterAutopausebusy = z.infer<
	typeof configuracao_callcenterAutopausebusySchema
>;

export type ConfiguracaoCallcenterAutopauseunavail = z.infer<
	typeof configuracao_callcenterAutopauseunavailSchema
>;

export type ConfiguracaoCallcenterRandomPeriodicAnnounce = z.infer<
	typeof configuracao_callcenterRandomPeriodicAnnounceSchema
>;

export type ConfiguracaoCallcenterRelativePeriodicAnnounce = z.infer<
	typeof configuracao_callcenterRelativePeriodicAnnounceSchema
>;

export type ConfiguracaoCallcenterReportholdtime = z.infer<
	typeof configuracao_callcenterReportholdtimeSchema
>;

export type ConfiguracaoCallcenterRinginuse = z.infer<
	typeof configuracao_callcenterRinginuseSchema
>;

export type ConfiguracaoCallcenterSetinterfacevar = z.infer<
	typeof configuracao_callcenterSetinterfacevarSchema
>;

export type ConfiguracaoCallcenterSetqueueentryvar = z.infer<
	typeof configuracao_callcenterSetqueueentryvarSchema
>;

export type ConfiguracaoCallcenterSetqueuevar = z.infer<
	typeof configuracao_callcenterSetqueuevarSchema
>;

export type ConfiguracaoCallcenterStrategy = z.infer<
	typeof configuracao_callcenterStrategySchema
>;

export type ConfiguracaoCallcenterTimeoutrestart = z.infer<
	typeof configuracao_callcenterTimeoutrestartSchema
>;
