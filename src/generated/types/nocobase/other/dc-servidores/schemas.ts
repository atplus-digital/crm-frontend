/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	dc_servidoresFabricanteSchema,
	dc_servidoresStatusSchema,
} from "./labels";

export const T_DC_SERVIDORES_TABLE_NAME = "t_dc_servidores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const dc_servidoresBaseSchema = z.object({
	id: z.number(),
	f_fk_discos: z.number(),
	f_fabricante: dc_servidoresFabricanteSchema,
	f_memoria: z.string(),
	f_modelo: z.string(),
	f_obs: z.string(),
	f_processador: z.string(),
	f_sn: z.string(),
	f_status: dc_servidoresStatusSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const dc_servidoresRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_discos: z.number().array(),
	f_memorias: z.number().array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const dc_servidoresSchema = dc_servidoresBaseSchema.merge(
	dc_servidoresRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const dc_servidoresCreateSchema = dc_servidoresSchema.omit({
	createdAt: true,
	createdBy: true,
	f_discos: true,
	f_memorias: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const dc_servidoresUpdateSchema = dc_servidoresCreateSchema.partial();
