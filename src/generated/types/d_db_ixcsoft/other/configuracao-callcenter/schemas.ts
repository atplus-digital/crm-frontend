/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	configuracao_callcenterAnnounceToFirstUserSchema,
	configuracao_callcenterAutofillSchema,
	configuracao_callcenterAutopausebusySchema,
	configuracao_callcenterAutopauseSchema,
	configuracao_callcenterAutopauseunavailSchema,
	configuracao_callcenterRandomPeriodicAnnounceSchema,
	configuracao_callcenterRelativePeriodicAnnounceSchema,
	configuracao_callcenterReportholdtimeSchema,
	configuracao_callcenterRinginuseSchema,
	configuracao_callcenterSetinterfacevarSchema,
	configuracao_callcenterSetqueueentryvarSchema,
	configuracao_callcenterSetqueuevarSchema,
	configuracao_callcenterStrategySchema,
	configuracao_callcenterTimeoutrestartSchema,
} from "./labels";

export const CONFIGURACAO_CALLCENTER_TABLE_NAME = "configuracao_callcenter";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const configuracao_callcenterBaseSchema = z.object({
	id: z.number(),
	announce: z.string(),
	announce_frequency: z.number(),
	announce_holdtime: z.string(),
	announce_position: z.string(),
	announce_position_limit: z.number(),
	announce_round_seconds: z.number(),
	announce_to_first_user: configuracao_callcenterAnnounceToFirstUserSchema,
	autofill: configuracao_callcenterAutofillSchema,
	autopause: configuracao_callcenterAutopauseSchema,
	autopausebusy: configuracao_callcenterAutopausebusySchema,
	autopausedelay: z.number(),
	autopauseunavail: configuracao_callcenterAutopauseunavailSchema,
	context: z.string(),
	defaultrule: z.string(),
	joinempty: z.string(),
	leavewhenempty: z.string(),
	maxlen: z.number(),
	memberdelay: z.number(),
	membergosub: z.string(),
	membermacro: z.string(),
	min_announce_frequency: z.number(),
	monitor_format: z.string(),
	monitor_type: z.string(),
	musiconhold: z.string(),
	name: z.string(),
	penaltymemberslimit: z.number(),
	periodic_announce: z.string(),
	periodic_announce_frequency: z.number(),
	queue_callerannounce: z.string(),
	queue_callswaiting: z.string(),
	queue_holdtime: z.string(),
	queue_minute: z.string(),
	queue_minutes: z.string(),
	queue_quantity1: z.string(),
	queue_quantity2: z.string(),
	queue_reporthold: z.string(),
	queue_seconds: z.string(),
	queue_thankyou: z.string(),
	queue_thereare: z.string(),
	queue_youarenext: z.string(),
	random_periodic_announce: configuracao_callcenterRandomPeriodicAnnounceSchema,
	relative_periodic_announce:
		configuracao_callcenterRelativePeriodicAnnounceSchema,
	reportholdtime: configuracao_callcenterReportholdtimeSchema,
	retry: z.number(),
	ringinuse: configuracao_callcenterRinginuseSchema,
	servicelevel: z.number(),
	setinterfacevar: configuracao_callcenterSetinterfacevarSchema,
	setqueueentryvar: configuracao_callcenterSetqueueentryvarSchema,
	setqueuevar: configuracao_callcenterSetqueuevarSchema,
	strategy: configuracao_callcenterStrategySchema,
	timeout: z.number(),
	timeoutpriority: z.string(),
	timeoutrestart: configuracao_callcenterTimeoutrestartSchema,
	weight: z.number(),
	wrapuptime: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const configuracao_callcenterSchema = configuracao_callcenterBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const configuracao_callcenterCreateSchema =
	configuracao_callcenterSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const configuracao_callcenterUpdateSchema =
	configuracao_callcenterCreateSchema.partial();
