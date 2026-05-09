/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_NEGOCIACOES_ESTAGIOS_TABLE_NAME = "crm_negociacoes_estagios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_negociacoes_estagiosBaseSchema = z.object({
	id: z.number(),
	cor_mapa: z.string(),
	estagio: z.string(),
	id_funil: z.number(),
	ordem: z.number(),
	pipe_id_estagio: z.number(),
	tempo_condicao_1: z.number(),
	tempo_condicao_2: z.number(),
	tempo_condicao_3: z.number(),
	tempo_condicao_4: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_negociacoes_estagiosSchema =
	crm_negociacoes_estagiosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_negociacoes_estagiosCreateSchema =
	crm_negociacoes_estagiosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_negociacoes_estagiosUpdateSchema =
	crm_negociacoes_estagiosCreateSchema.partial();
