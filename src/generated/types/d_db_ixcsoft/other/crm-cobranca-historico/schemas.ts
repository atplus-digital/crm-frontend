/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_cobranca_historicoEtapaConcluidaSchema,
	crm_cobranca_historicoTipoExecucaoSchema,
} from "./labels";

export const CRM_COBRANCA_HISTORICO_TABLE_NAME = "crm_cobranca_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_cobranca_historicoBaseSchema = z.object({
	id: z.number(),
	acao: z.string(),
	data_hora: z.string(),
	descricao: z.string(),
	etapa_concluida: crm_cobranca_historicoEtapaConcluidaSchema,
	id_crm_cobranca: z.number(),
	id_operador: z.number(),
	retorno_comunicacao: z.string(),
	tipo_contato: z.string(),
	tipo_execucao: crm_cobranca_historicoTipoExecucaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_cobranca_historicoSchema = crm_cobranca_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_cobranca_historicoCreateSchema =
	crm_cobranca_historicoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_cobranca_historicoUpdateSchema =
	crm_cobranca_historicoCreateSchema.partial();
