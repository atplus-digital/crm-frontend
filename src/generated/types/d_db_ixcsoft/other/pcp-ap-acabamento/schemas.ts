/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PCP_AP_ACABAMENTO_TABLE_NAME = "pcp_ap_acabamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pcp_ap_acabamentoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	filial_id: z.number(),
	id_funcionario: z.number(),
	id_item_pedido: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pcp_ap_acabamentoSchema = pcp_ap_acabamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pcp_ap_acabamentoCreateSchema = pcp_ap_acabamentoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pcp_ap_acabamentoUpdateSchema =
	pcp_ap_acabamentoCreateSchema.partial();
