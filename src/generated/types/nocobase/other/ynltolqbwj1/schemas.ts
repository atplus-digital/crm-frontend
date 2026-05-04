/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_YNLTOLQBWJ1_TABLE_NAME = "t_ynltolqbwj1";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ynltolqbwj1BaseSchema = z.object({
	fk_interface_ponta_b: z.number(),
	fk_interface_ponta_b2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ynltolqbwj1Schema = ynltolqbwj1BaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ynltolqbwj1CreateSchema = ynltolqbwj1Schema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ynltolqbwj1UpdateSchema = ynltolqbwj1CreateSchema.partial();
