/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { logs_alteracao_vencimento_massaStatusSchema } from "./labels";

export const LOGS_ALTERACAO_VENCIMENTO_MASSA_TABLE_NAME =
	"logs_alteracao_vencimento_massa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_alteracao_vencimento_massaBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	id_areceber: z.number(),
	id_cliente: z.number(),
	id_lote: z.number(),
	id_operador: z.number(),
	log: z.string(),
	novo_vencimento: z.string(),
	operador: z.string(),
	status: logs_alteracao_vencimento_massaStatusSchema,
	vencimento_antigo: z.string(),
	vencimento_novo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_alteracao_vencimento_massaSchema =
	logs_alteracao_vencimento_massaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_alteracao_vencimento_massaCreateSchema =
	logs_alteracao_vencimento_massaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_alteracao_vencimento_massaUpdateSchema =
	logs_alteracao_vencimento_massaCreateSchema.partial();
