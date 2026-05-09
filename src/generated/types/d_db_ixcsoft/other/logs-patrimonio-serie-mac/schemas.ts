/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { logs_patrimonio_serie_macStatusSchema } from "./labels";

export const LOGS_PATRIMONIO_SERIE_MAC_TABLE_NAME = "logs_patrimonio_serie_mac";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_patrimonio_serie_macBaseSchema = z.object({
	id: z.number(),
	id_entrada: z.number(),
	id_patrimonio: z.number(),
	mac: z.string(),
	nro_serie: z.string(),
	status: logs_patrimonio_serie_macStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_patrimonio_serie_macSchema =
	logs_patrimonio_serie_macBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_patrimonio_serie_macCreateSchema =
	logs_patrimonio_serie_macSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_patrimonio_serie_macUpdateSchema =
	logs_patrimonio_serie_macCreateSchema.partial();
