/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { ajuste_inventarioInventarioAntigoSchema } from "./labels";

export const AJUSTE_INVENTARIO_TABLE_NAME = "ajuste_inventario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ajuste_inventarioBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	documento: z.string(),
	filial_id: z.number(),
	historico: z.string(),
	id_almox: z.number(),
	inventario_antigo: ajuste_inventarioInventarioAntigoSchema,
	observacao: z.string(),
	operador: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ajuste_inventarioSchema = ajuste_inventarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ajuste_inventarioCreateSchema = ajuste_inventarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ajuste_inventarioUpdateSchema =
	ajuste_inventarioCreateSchema.partial();
