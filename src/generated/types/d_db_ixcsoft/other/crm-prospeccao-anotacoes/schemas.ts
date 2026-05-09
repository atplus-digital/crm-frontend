/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_PROSPECCAO_ANOTACOES_TABLE_NAME = "crm_prospeccao_anotacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_prospeccao_anotacoesBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	id_cliente: z.number(),
	id_negociacao: z.number(),
	id_responsavel: z.number(),
	ultima_atualizacao: z.string(),
	ultima_atualizacao_original: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_prospeccao_anotacoesSchema =
	crm_prospeccao_anotacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_prospeccao_anotacoesCreateSchema =
	crm_prospeccao_anotacoesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_prospeccao_anotacoesUpdateSchema =
	crm_prospeccao_anotacoesCreateSchema.partial();
