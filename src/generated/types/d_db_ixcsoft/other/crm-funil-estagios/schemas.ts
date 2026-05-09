/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_FUNIL_ESTAGIOS_TABLE_NAME = "crm_funil_estagios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_funil_estagiosBaseSchema = z.object({
	id: z.number(),
	dias: z.number(),
	estagio: z.string(),
	expectativa: z.number(),
	id_crm_funil: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_funil_estagiosSchema = crm_funil_estagiosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_funil_estagiosCreateSchema = crm_funil_estagiosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_funil_estagiosUpdateSchema =
	crm_funil_estagiosCreateSchema.partial();
