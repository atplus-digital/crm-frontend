/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CNF_NFE_INUTILIZADA_TABLE_NAME = "cnf_nfe_inutilizada";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_nfe_inutilizadaBaseSchema = z.object({
	id: z.number(),
	data_inutilizada: z.string(),
	id_filial: z.number(),
	justificativa: z.string(),
	modelo: z.number(),
	numero_fin: z.number(),
	numero_ini: z.number(),
	serie: z.number(),
	status: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_nfe_inutilizadaSchema = cnf_nfe_inutilizadaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_nfe_inutilizadaCreateSchema = cnf_nfe_inutilizadaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_nfe_inutilizadaUpdateSchema =
	cnf_nfe_inutilizadaCreateSchema.partial();
