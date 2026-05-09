/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PCP_AP_PRODUCAO_TABLE_NAME = "pcp_ap_producao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pcp_ap_producaoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	filial_id: z.number(),
	id_itens_pedido: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pcp_ap_producaoSchema = pcp_ap_producaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pcp_ap_producaoCreateSchema = pcp_ap_producaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pcp_ap_producaoUpdateSchema =
	pcp_ap_producaoCreateSchema.partial();
