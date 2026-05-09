/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { pcp_ap_assistenciaStatusSchema } from "./labels";

export const PCP_AP_ASSISTENCIA_TABLE_NAME = "pcp_ap_assistencia";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pcp_ap_assistenciaBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	data_coleta: z.string(),
	data_concerto: z.string(),
	data_devolucao: z.string(),
	descricao: z.string(),
	filial_id: z.number(),
	id_cliente: z.number(),
	id_itens_pedido: z.number(),
	laudo: z.string(),
	previsao_coleta: z.string(),
	solicitante: z.string(),
	status: pcp_ap_assistenciaStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pcp_ap_assistenciaSchema = pcp_ap_assistenciaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pcp_ap_assistenciaCreateSchema = pcp_ap_assistenciaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pcp_ap_assistenciaUpdateSchema =
	pcp_ap_assistenciaCreateSchema.partial();
