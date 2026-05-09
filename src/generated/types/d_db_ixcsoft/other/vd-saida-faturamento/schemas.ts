/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VD_SAIDA_FATURAMENTO_TABLE_NAME = "vd_saida_faturamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vd_saida_faturamentoBaseSchema = z.object({
	id: z.number(),
	filial_id: z.number(),
	id_itens_pedido: z.number(),
	id_vd_saida: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vd_saida_faturamentoSchema = vd_saida_faturamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vd_saida_faturamentoCreateSchema = vd_saida_faturamentoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vd_saida_faturamentoUpdateSchema =
	vd_saida_faturamentoCreateSchema.partial();
