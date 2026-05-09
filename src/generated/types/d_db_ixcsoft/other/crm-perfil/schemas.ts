/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_PERFIL_TABLE_NAME = "crm_perfil";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_perfilBaseSchema = z.object({
	id: z.number(),
	cor_mapa: z.string(),
	descricao: z.string(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_perfilSchema = crm_perfilBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_perfilCreateSchema = crm_perfilSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_perfilUpdateSchema = crm_perfilCreateSchema.partial();
