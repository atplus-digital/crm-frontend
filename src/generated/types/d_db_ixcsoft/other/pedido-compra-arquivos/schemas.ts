/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PEDIDO_COMPRA_ARQUIVOS_TABLE_NAME = "pedido_compra_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pedido_compra_arquivosBaseSchema = z.object({
	id: z.number(),
	data_envio: z.string(),
	descricao: z.string(),
	id_pedido_compra: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pedido_compra_arquivosSchema = pedido_compra_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pedido_compra_arquivosCreateSchema =
	pedido_compra_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pedido_compra_arquivosUpdateSchema =
	pedido_compra_arquivosCreateSchema.partial();
