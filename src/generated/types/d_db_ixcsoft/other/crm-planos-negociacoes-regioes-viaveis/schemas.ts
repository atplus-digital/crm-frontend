/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_PLANOS_NEGOCIACOES_REGIOES_VIAVEIS_TABLE_NAME =
	"crm_planos_negociacoes_regioes_viaveis";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_planos_negociacoes_regioes_viaveisBaseSchema = z.object({
	id: z.number(),
	id_df_tipo_elemento: z.number(),
	id_plano_negociacao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_planos_negociacoes_regioes_viaveisSchema =
	crm_planos_negociacoes_regioes_viaveisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_planos_negociacoes_regioes_viaveisCreateSchema =
	crm_planos_negociacoes_regioes_viaveisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_planos_negociacoes_regioes_viaveisUpdateSchema =
	crm_planos_negociacoes_regioes_viaveisCreateSchema.partial();
