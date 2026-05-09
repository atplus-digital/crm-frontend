/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_PROSPECCAO_PROPOSTAS_ARQUIVOS_TABLE_NAME =
	"crm_prospeccao_propostas_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_prospeccao_propostas_arquivosBaseSchema = z.object({
	id: z.number(),
	data_envio: z.string(),
	descricao: z.string(),
	id_proposta: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_prospeccao_propostas_arquivosSchema =
	crm_prospeccao_propostas_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_prospeccao_propostas_arquivosCreateSchema =
	crm_prospeccao_propostas_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_prospeccao_propostas_arquivosUpdateSchema =
	crm_prospeccao_propostas_arquivosCreateSchema.partial();
