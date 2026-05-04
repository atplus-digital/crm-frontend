/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_MUU3VSAVV3H_TABLE_NAME = "t_muu3vsavv3h";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const muu3vsavv3hBaseSchema = z.object({
	f_fk_1_setor_x_colaborador: z.number(),
	f_fk_2_setor_x_colaborador: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const muu3vsavv3hSchema = muu3vsavv3hBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const muu3vsavv3hCreateSchema = muu3vsavv3hSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const muu3vsavv3hUpdateSchema = muu3vsavv3hCreateSchema.partial();
