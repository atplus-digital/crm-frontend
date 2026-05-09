/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_HISTORICO_TABLE_NAME = "crm_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_historicoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	descricao: z.string(),
	id_cliente: z.number(),
	id_negociacao: z.number(),
	responsavel: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_historicoSchema = crm_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_historicoCreateSchema = crm_historicoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_historicoUpdateSchema = crm_historicoCreateSchema.partial();
