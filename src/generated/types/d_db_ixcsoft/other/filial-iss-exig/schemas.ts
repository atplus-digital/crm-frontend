/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FILIAL_ISS_EXIG_TABLE_NAME = "filial_iss_exig";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const filial_iss_exigBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const filial_iss_exigSchema = filial_iss_exigBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const filial_iss_exigCreateSchema = filial_iss_exigSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const filial_iss_exigUpdateSchema =
	filial_iss_exigCreateSchema.partial();
