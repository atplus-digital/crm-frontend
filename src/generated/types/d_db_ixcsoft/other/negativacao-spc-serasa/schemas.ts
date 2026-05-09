/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	negativacao_spc_serasaFormaNegativacaoSchema,
	negativacao_spc_serasaFormaRemocaoSchema,
} from "./labels";

export const NEGATIVACAO_SPC_SERASA_TABLE_NAME = "negativacao_spc_serasa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const negativacao_spc_serasaBaseSchema = z.object({
	id: z.number(),
	codigo_restricao_cnm: z.string(),
	data_negativacao: z.string(),
	forma_negativacao: negativacao_spc_serasaFormaNegativacaoSchema,
	forma_remocao: negativacao_spc_serasaFormaRemocaoSchema,
	id_cliente: z.number(),
	id_codigo_restricao: z.number(),
	id_finan: z.number(),
	id_integracao: z.number(),
	msg_negativacao: z.string(),
	status: z.number(),
	unique_id: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const negativacao_spc_serasaSchema = negativacao_spc_serasaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const negativacao_spc_serasaCreateSchema =
	negativacao_spc_serasaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const negativacao_spc_serasaUpdateSchema =
	negativacao_spc_serasaCreateSchema.partial();
