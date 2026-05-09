/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VOIPQUEUES_ANNOUNCETOFIRSTUSER_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_AUTOFILL_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_AUTOPAUSE_LABELS = {
	yes: "yes",
	no: "no",
	all: "all",
} as const;

export const VOIPQUEUES_AUTOPAUSEBUSY_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_AUTOPAUSEUNAVAIL_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_RANDOMPERIODICANNOUNCE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_RELATIVEPERIODICANNOUNCE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_REPORTHOLDTIME_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_RINGINUSE_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_SETINTERFACEVAR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_SETQUEUEENTRYVAR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_SETQUEUEVAR_LABELS = {
	yes: "yes",
	no: "no",
} as const;

export const VOIPQUEUES_STRATEGY_LABELS = {
	ringall: "ringall",
	leastrecent: "leastrecent",
	fewestcalls: "fewestcalls",
	random: "random",
	rrmemory: "rrmemory",
	linear: "linear",
	wrandom: "wrandom",
	rrordered: "rrordered",
} as const;

export const VOIPQUEUES_TIMEOUTRESTART_LABELS = {
	yes: "yes",
	no: "no",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const voip_queuesAnnounceToFirstUserSchema = z.enum(["yes", "no"], {
	error: () => ({
		message: "announce_to_first_user: valores válidos são [yes, no]",
	}),
});

export const voip_queuesAutofillSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "autofill: valores válidos são [yes, no]" }),
});

export const voip_queuesAutopauseSchema = z.enum(["yes", "no", "all"], {
	error: () => ({ message: "autopause: valores válidos são [yes, no, all]" }),
});

export const voip_queuesAutopausebusySchema = z.enum(["yes", "no"], {
	error: () => ({ message: "autopausebusy: valores válidos são [yes, no]" }),
});

export const voip_queuesAutopauseunavailSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "autopauseunavail: valores válidos são [yes, no]" }),
});

export const voip_queuesRandomPeriodicAnnounceSchema = z.enum(["yes", "no"], {
	error: () => ({
		message: "random_periodic_announce: valores válidos são [yes, no]",
	}),
});

export const voip_queuesRelativePeriodicAnnounceSchema = z.enum(["yes", "no"], {
	error: () => ({
		message: "relative_periodic_announce: valores válidos são [yes, no]",
	}),
});

export const voip_queuesReportholdtimeSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "reportholdtime: valores válidos são [yes, no]" }),
});

export const voip_queuesRinginuseSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "ringinuse: valores válidos são [yes, no]" }),
});

export const voip_queuesSetinterfacevarSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "setinterfacevar: valores válidos são [yes, no]" }),
});

export const voip_queuesSetqueueentryvarSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "setqueueentryvar: valores válidos são [yes, no]" }),
});

export const voip_queuesSetqueuevarSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "setqueuevar: valores válidos são [yes, no]" }),
});

export const voip_queuesStrategySchema = z.enum(
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

export const voip_queuesTimeoutrestartSchema = z.enum(["yes", "no"], {
	error: () => ({ message: "timeoutrestart: valores válidos são [yes, no]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VoipQueuesAnnounceToFirstUser = z.infer<
	typeof voip_queuesAnnounceToFirstUserSchema
>;

export type VoipQueuesAutofill = z.infer<typeof voip_queuesAutofillSchema>;

export type VoipQueuesAutopause = z.infer<typeof voip_queuesAutopauseSchema>;

export type VoipQueuesAutopausebusy = z.infer<
	typeof voip_queuesAutopausebusySchema
>;

export type VoipQueuesAutopauseunavail = z.infer<
	typeof voip_queuesAutopauseunavailSchema
>;

export type VoipQueuesRandomPeriodicAnnounce = z.infer<
	typeof voip_queuesRandomPeriodicAnnounceSchema
>;

export type VoipQueuesRelativePeriodicAnnounce = z.infer<
	typeof voip_queuesRelativePeriodicAnnounceSchema
>;

export type VoipQueuesReportholdtime = z.infer<
	typeof voip_queuesReportholdtimeSchema
>;

export type VoipQueuesRinginuse = z.infer<typeof voip_queuesRinginuseSchema>;

export type VoipQueuesSetinterfacevar = z.infer<
	typeof voip_queuesSetinterfacevarSchema
>;

export type VoipQueuesSetqueueentryvar = z.infer<
	typeof voip_queuesSetqueueentryvarSchema
>;

export type VoipQueuesSetqueuevar = z.infer<
	typeof voip_queuesSetqueuevarSchema
>;

export type VoipQueuesStrategy = z.infer<typeof voip_queuesStrategySchema>;

export type VoipQueuesTimeoutrestart = z.infer<
	typeof voip_queuesTimeoutrestartSchema
>;
