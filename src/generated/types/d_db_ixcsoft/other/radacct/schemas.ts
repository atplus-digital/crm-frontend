/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADACCT_TABLE_NAME = "radacct";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radacctBaseSchema = z.object({
	acctauthentic: z.string(),
	acctinputoctets: z.number(),
	acctinterval: z.number(),
	acctoutputoctets: z.number(),
	acctsessionid: z.string(),
	acctsessiontime: z.number(),
	acctstartdelay: z.number(),
	acctstarttime: z.string(),
	acctstopdelay: z.number(),
	acctstoptime: z.string(),
	acctterminatecause: z.string(),
	acctuniqueid: z.string(),
	acctupdatetime: z.string(),
	calledstationid: z.string(),
	callingstationid: z.string(),
	cliente: z.number(),
	connectinfo_start: z.string(),
	connectinfo_stop: z.string(),
	delegatedipv6prefix: z.string(),
	framedipaddress: z.string(),
	framedipv6prefix: z.string(),
	framedprotocol: z.string(),
	groupname: z.string(),
	nasipaddress: z.string(),
	nasipv6address: z.string(),
	nasportid: z.string(),
	nasporttype: z.string(),
	radacctid: z.number(),
	realm: z.string(),
	servicetype: z.string(),
	username: z.string(),
	xascendsessionsvrkey: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radacctSchema = radacctBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radacctCreateSchema = radacctSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radacctUpdateSchema = radacctCreateSchema.partial();
