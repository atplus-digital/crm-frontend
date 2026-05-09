/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VD_SAIDA_PEDIDO_VENDA_TABLE_NAME = "vd_saida_pedido_venda";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vd_saida_pedido_vendaBaseSchema = z.object({
	id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vd_saida_pedido_vendaSchema = vd_saida_pedido_vendaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vd_saida_pedido_vendaCreateSchema =
	vd_saida_pedido_vendaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vd_saida_pedido_vendaUpdateSchema =
	vd_saida_pedido_vendaCreateSchema.partial();
