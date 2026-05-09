/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_RADACCT_TABLE_NAME = "radauth_radacct";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_radacctBaseSchema = z.object({
	acctauthentic: z.string(),
	acctinputoctets: z.number(),
	acctinterval: z.number(),
	acctoutputoctets: z.number(),
	acctsessionid: z.string(),
	acctsessiontime: z.number(),
	acctstarttime: z.string(),
	acctstoptime: z.string(),
	acctterminatecause: z.string(),
	acctuniqueid: z.string(),
	acctupdatetime: z.string(),
	calledstationid: z.string(),
	callingstationid: z.string(),
	connectinfo_start: z.string(),
	connectinfo_stop: z.string(),
	delegatedipv6address: z.string(),
	delegatedipv6prefix: z.string(),
	framedipaddress: z.string(),
	framedipv6address: z.string(),
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
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radauth_radacctSchema = radauth_radacctBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_radacctCreateSchema = radauth_radacctSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_radacctUpdateSchema =
	radauth_radacctCreateSchema.partial();
