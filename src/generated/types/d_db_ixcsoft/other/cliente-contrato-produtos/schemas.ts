/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_PRODUTOS_TABLE_NAME = "cliente_contrato_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_produtosBaseSchema = z.object({
	id: z.number(),
	id_cliente_contrato: z.number(),
	id_produto: z.number(),
	qtde: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_produtosSchema =
	cliente_contrato_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_produtosCreateSchema =
	cliente_contrato_produtosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_produtosUpdateSchema =
	cliente_contrato_produtosCreateSchema.partial();
