/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	alt_plano_log_tituloOpcoesSchema,
	alt_plano_log_tituloStatusSchema,
	alt_plano_log_tituloTipoSchema,
} from "./labels";

export const ALT_PLANO_LOG_TITULO_TABLE_NAME = "alt_plano_log_titulo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const alt_plano_log_tituloBaseSchema = z.object({
	id: z.number(),
	data_emissao: z.string(),
	data_vencimento: z.string(),
	id_cliente_contrato_alt_plano: z.number(),
	obs: z.string(),
	opcoes: alt_plano_log_tituloOpcoesSchema,
	status: alt_plano_log_tituloStatusSchema,
	tipo: alt_plano_log_tituloTipoSchema,
	valor: z.number(),
	valor_atual: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const alt_plano_log_tituloSchema = alt_plano_log_tituloBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const alt_plano_log_tituloCreateSchema = alt_plano_log_tituloSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const alt_plano_log_tituloUpdateSchema =
	alt_plano_log_tituloCreateSchema.partial();
