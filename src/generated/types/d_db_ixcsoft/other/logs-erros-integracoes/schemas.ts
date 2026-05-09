/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	logs_erros_integracoesStatusSchema,
	logs_erros_integracoesTipoIntegracaoSchema,
} from "./labels";

export const LOGS_ERROS_INTEGRACOES_TABLE_NAME = "logs_erros_integracoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_erros_integracoesBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	id_assinatura_cliente_produto: z.number(),
	id_contrato: z.number(),
	id_sva_usuarios_lote: z.number(),
	id_usuario_integracao: z.number(),
	mensagem_erro: z.string(),
	status: logs_erros_integracoesStatusSchema,
	tipo_integracao: logs_erros_integracoesTipoIntegracaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_erros_integracoesSchema = logs_erros_integracoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_erros_integracoesCreateSchema =
	logs_erros_integracoesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_erros_integracoesUpdateSchema =
	logs_erros_integracoesCreateSchema.partial();
