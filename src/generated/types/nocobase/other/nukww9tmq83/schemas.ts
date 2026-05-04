/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_NUKWW9TMQ83_TABLE_NAME = "t_nukww9tmq83";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nukww9tmq83BaseSchema = z.object({
	f_fk1_setor_tipos: z.number(),
	f_fk2_setor_tipos: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nukww9tmq83Schema = nukww9tmq83BaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nukww9tmq83CreateSchema = nukww9tmq83Schema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nukww9tmq83UpdateSchema = nukww9tmq83CreateSchema.partial();
