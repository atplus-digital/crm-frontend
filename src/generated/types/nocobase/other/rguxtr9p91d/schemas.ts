/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_RGUXTR9P91D_TABLE_NAME = "t_rguxtr9p91d";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rguxtr9p91dBaseSchema = z.object({
	f_fk_ponta_a_interface: z.number(),
	f_fk_ponta_a_interface2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rguxtr9p91dSchema = rguxtr9p91dBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rguxtr9p91dCreateSchema = rguxtr9p91dSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rguxtr9p91dUpdateSchema = rguxtr9p91dCreateSchema.partial();
