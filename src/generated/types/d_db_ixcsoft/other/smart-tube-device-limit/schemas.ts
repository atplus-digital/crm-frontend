/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { smart_tube_device_limitPadraoSchema } from "./labels";

export const SMART_TUBE_DEVICE_LIMIT_TABLE_NAME = "smart_tube_device_limit";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const smart_tube_device_limitBaseSchema = z.object({
	id: z.number(),
	codigo_plataforma: z.string(),
	id_integracao: z.number(),
	padrao: smart_tube_device_limitPadraoSchema,
	quantidade_devices: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const smart_tube_device_limitSchema = smart_tube_device_limitBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const smart_tube_device_limitCreateSchema =
	smart_tube_device_limitSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const smart_tube_device_limitUpdateSchema =
	smart_tube_device_limitCreateSchema.partial();
