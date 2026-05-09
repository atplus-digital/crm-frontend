/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_SECRETARIA_TABLE_NAME = "crm_secretaria";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_secretariaBaseSchema = z.object({
	id: z.number(),
	palavras_chave: z.string(),
	pergunta: z.string(),
	resposta: z.string(),
	sounds_chave: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_secretariaSchema = crm_secretariaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_secretariaCreateSchema = crm_secretariaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_secretariaUpdateSchema = crm_secretariaCreateSchema.partial();
