/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_OLT_SLOT_TABLE_NAME = "radpop_olt_slot";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_olt_slotBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_transmissor: z.number(),
	numero_slot: z.number(),
	portas: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_olt_slotSchema = radpop_olt_slotBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_olt_slotCreateSchema = radpop_olt_slotSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_olt_slotUpdateSchema =
	radpop_olt_slotCreateSchema.partial();
