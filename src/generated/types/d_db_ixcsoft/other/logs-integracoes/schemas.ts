/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	logs_integracoesMetodoSchema,
	logs_integracoesTipoIntegracaoSchema,
} from "./labels";

export const LOGS_INTEGRACOES_TABLE_NAME = "logs_integracoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_integracoesBaseSchema = z.object({
	id: z.number(),
	data_requisicao: z.string(),
	id_integracao: z.number(),
	id_registro: z.number(),
	metodo: logs_integracoesMetodoSchema,
	request_body: z.string(),
	response: z.string(),
	status_code: z.number(),
	tempo_resposta_ms: z.number(),
	tipo_integracao: logs_integracoesTipoIntegracaoSchema,
	url_request: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_integracoesSchema = logs_integracoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_integracoesCreateSchema = logs_integracoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_integracoesUpdateSchema =
	logs_integracoesCreateSchema.partial();
