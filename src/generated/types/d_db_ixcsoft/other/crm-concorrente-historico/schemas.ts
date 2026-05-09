/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_CONCORRENTE_HISTORICO_TABLE_NAME = "crm_concorrente_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_concorrente_historicoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	id_contato: z.number(),
	id_crm_concorrente: z.number(),
	plano_valor: z.number(),
	plano_velocidade: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_concorrente_historicoSchema =
	crm_concorrente_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_concorrente_historicoCreateSchema =
	crm_concorrente_historicoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_concorrente_historicoUpdateSchema =
	crm_concorrente_historicoCreateSchema.partial();
