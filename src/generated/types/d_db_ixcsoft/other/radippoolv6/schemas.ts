/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { radippoolv6StatusSchema } from "./labels";

export const RADIPPOOLV6_TABLE_NAME = "radippoolv6";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radippoolv6BaseSchema = z.object({
	id: z.number(),
	called_station_id: z.string(),
	calling_station_id: z.string(),
	expiry_time: z.string(),
	framed_ip_address: z.string(),
	id_pool: z.number(),
	nas_ip_address: z.string(),
	pool_key: z.string(),
	pool_name: z.string(),
	status: radippoolv6StatusSchema,
	username: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radippoolv6Schema = radippoolv6BaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radippoolv6CreateSchema = radippoolv6Schema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radippoolv6UpdateSchema = radippoolv6CreateSchema.partial();
