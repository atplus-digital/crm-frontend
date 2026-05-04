/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INTERFACES_EQUIPAMENTOS_TABLE_NAME = "interfaces_equipamentos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const interfaces_equipamentosBaseSchema = z.object({
	f_fk_equipamentos_interfaces_1: z.number(),
	f_fk_equipamentos_interfaces_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const interfaces_equipamentosSchema = interfaces_equipamentosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const interfaces_equipamentosCreateSchema =
	interfaces_equipamentosSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const interfaces_equipamentosUpdateSchema =
	interfaces_equipamentosCreateSchema.partial();
