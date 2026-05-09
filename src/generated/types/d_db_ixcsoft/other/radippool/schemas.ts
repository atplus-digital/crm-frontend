/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { radippoolStatusSchema } from "./labels";

export const RADIPPOOL_TABLE_NAME = "radippool";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radippoolBaseSchema = z.object({
	id: z.number(),
	CalledStationId: z.string(),
	CallingStationID: z.string(),
	expiry_time: z.string(),
	FramedIPAddress: z.string(),
	id_pool: z.number(),
	NASIPAddress: z.string(),
	pool_key: z.string(),
	pool_name: z.string(),
	status: radippoolStatusSchema,
	ultima_atualizacao: z.string(),
	username: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radippoolSchema = radippoolBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radippoolCreateSchema = radippoolSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radippoolUpdateSchema = radippoolCreateSchema.partial();
