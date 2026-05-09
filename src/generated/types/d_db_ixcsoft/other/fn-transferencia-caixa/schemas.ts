/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_transferencia_caixaTipoRecebimentoSchema } from "./labels";

export const FN_TRANSFERENCIA_CAIXA_TABLE_NAME = "fn_transferencia_caixa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_transferencia_caixaBaseSchema = z.object({
	id: z.number(),
	conta_destino: z.string(),
	conta_origem: z.string(),
	contas_id_destino: z.number(),
	contas_id_origem: z.number(),
	create_time: z.string(),
	data_transferencia: z.string(),
	historico: z.string(),
	id_conta_destino: z.number(),
	id_conta_origem: z.number(),
	id_operador: z.number(),
	tipo_recebimento: fn_transferencia_caixaTipoRecebimentoSchema,
	update_time: z.string(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_transferencia_caixaSchema = fn_transferencia_caixaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_transferencia_caixaCreateSchema =
	fn_transferencia_caixaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_transferencia_caixaUpdateSchema =
	fn_transferencia_caixaCreateSchema.partial();
