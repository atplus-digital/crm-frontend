/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	prov_snmpAuthenticationProtocolSchema,
	prov_snmpEncryptionProtocolSchema,
	prov_snmpSecurityLevelSchema,
	prov_snmpVersionSchema,
} from "./labels";

export const PROV_SNMP_TABLE_NAME = "prov_snmp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const prov_snmpBaseSchema = z.object({
	id: z.number(),
	authentication_key: z.string(),
	authentication_protocol: prov_snmpAuthenticationProtocolSchema,
	community: z.string(),
	descricao: z.string(),
	encryption_key: z.string(),
	encryption_protocol: prov_snmpEncryptionProtocolSchema,
	porta: z.number(),
	security_level: prov_snmpSecurityLevelSchema,
	version: prov_snmpVersionSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const prov_snmpSchema = prov_snmpBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const prov_snmpCreateSchema = prov_snmpSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const prov_snmpUpdateSchema = prov_snmpCreateSchema.partial();
