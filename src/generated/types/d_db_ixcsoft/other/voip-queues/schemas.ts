/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	voip_queuesAnnounceToFirstUserSchema,
	voip_queuesAutofillSchema,
	voip_queuesAutopausebusySchema,
	voip_queuesAutopauseSchema,
	voip_queuesAutopauseunavailSchema,
	voip_queuesRandomPeriodicAnnounceSchema,
	voip_queuesRelativePeriodicAnnounceSchema,
	voip_queuesReportholdtimeSchema,
	voip_queuesRinginuseSchema,
	voip_queuesSetinterfacevarSchema,
	voip_queuesSetqueueentryvarSchema,
	voip_queuesSetqueuevarSchema,
	voip_queuesStrategySchema,
	voip_queuesTimeoutrestartSchema,
} from "./labels";

export const VOIP_QUEUES_TABLE_NAME = "voip_queues";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_queuesBaseSchema = z.object({
	id: z.number(),
	announce: z.string(),
	announce_frequency: z.number(),
	announce_holdtime: z.string(),
	announce_position: z.string(),
	announce_position_limit: z.number(),
	announce_round_seconds: z.number(),
	announce_to_first_user: voip_queuesAnnounceToFirstUserSchema,
	autofill: voip_queuesAutofillSchema,
	autopause: voip_queuesAutopauseSchema,
	autopausebusy: voip_queuesAutopausebusySchema,
	autopausedelay: z.number(),
	autopauseunavail: voip_queuesAutopauseunavailSchema,
	context: z.string(),
	defaultrule: z.string(),
	id_rules: z.number(),
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
	random_periodic_announce: voip_queuesRandomPeriodicAnnounceSchema,
	relative_periodic_announce: voip_queuesRelativePeriodicAnnounceSchema,
	reportholdtime: voip_queuesReportholdtimeSchema,
	retry: z.number(),
	ringinuse: voip_queuesRinginuseSchema,
	servicelevel: z.number(),
	setinterfacevar: voip_queuesSetinterfacevarSchema,
	setqueueentryvar: voip_queuesSetqueueentryvarSchema,
	setqueuevar: voip_queuesSetqueuevarSchema,
	strategy: voip_queuesStrategySchema,
	timeout: z.number(),
	timeoutpriority: z.string(),
	timeoutrestart: voip_queuesTimeoutrestartSchema,
	weight: z.number(),
	wrapuptime: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_queuesSchema = voip_queuesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_queuesCreateSchema = voip_queuesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_queuesUpdateSchema = voip_queuesCreateSchema.partial();
