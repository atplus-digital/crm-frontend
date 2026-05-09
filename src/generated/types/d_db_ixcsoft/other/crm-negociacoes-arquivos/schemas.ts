/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_NEGOCIACOES_ARQUIVOS_TABLE_NAME = "crm_negociacoes_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_negociacoes_arquivosBaseSchema = z.object({
	id: z.number(),
	anexar_arquivo: z.string(),
	data_envio: z.string(),
	descricao: z.string(),
	id_negociacao: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_negociacoes_arquivosSchema =
	crm_negociacoes_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_negociacoes_arquivosCreateSchema =
	crm_negociacoes_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_negociacoes_arquivosUpdateSchema =
	crm_negociacoes_arquivosCreateSchema.partial();
