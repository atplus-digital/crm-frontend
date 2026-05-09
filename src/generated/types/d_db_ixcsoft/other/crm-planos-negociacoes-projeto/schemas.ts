/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_PLANOS_NEGOCIACOES_PROJETO_TABLE_NAME =
	"crm_planos_negociacoes_projeto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_planos_negociacoes_projetoBaseSchema = z.object({
	id: z.number(),
	id_plano: z.number(),
	id_projeto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_planos_negociacoes_projetoSchema =
	crm_planos_negociacoes_projetoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_planos_negociacoes_projetoCreateSchema =
	crm_planos_negociacoes_projetoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_planos_negociacoes_projetoUpdateSchema =
	crm_planos_negociacoes_projetoCreateSchema.partial();
