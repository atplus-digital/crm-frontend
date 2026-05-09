/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VEICULOS_MDFE_CONDUTOR_TABLE_NAME = "veiculos_mdfe_condutor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_mdfe_condutorBaseSchema = z.object({
	id: z.number(),
	condutor: z.number(),
	mdfe: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_mdfe_condutorSchema = veiculos_mdfe_condutorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_mdfe_condutorCreateSchema =
	veiculos_mdfe_condutorSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_mdfe_condutorUpdateSchema =
	veiculos_mdfe_condutorCreateSchema.partial();
