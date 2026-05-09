/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { logs_alteracoes_manuaisExecutouSchema } from "./labels";

export const LOGS_ALTERACOES_MANUAIS_TABLE_NAME = "logs_alteracoes_manuais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_alteracoes_manuaisBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	descricao_plano_antigo: z.string(),
	descricao_plano_novo: z.string(),
	executou: logs_alteracoes_manuaisExecutouSchema,
	id_contrato: z.number(),
	id_plano_antigo: z.number(),
	id_plano_novo: z.number(),
	operador: z.number(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_alteracoes_manuaisSchema = logs_alteracoes_manuaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_alteracoes_manuaisCreateSchema =
	logs_alteracoes_manuaisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_alteracoes_manuaisUpdateSchema =
	logs_alteracoes_manuaisCreateSchema.partial();
