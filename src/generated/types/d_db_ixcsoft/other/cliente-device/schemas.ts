/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_DEVICE_TABLE_NAME = "cliente_device";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_deviceBaseSchema = z.object({
	id: z.number(),
	device_app: z.string(),
	firebase_device_token: z.string(),
	id_cliente: z.number(),
	token_device: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_deviceSchema = cliente_deviceBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_deviceCreateSchema = cliente_deviceSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_deviceUpdateSchema = cliente_deviceCreateSchema.partial();
