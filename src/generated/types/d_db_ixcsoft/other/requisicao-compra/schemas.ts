/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	requisicao_compraStatusLiberacaoCompraSchema,
	requisicao_compraStatusSchema,
} from "./labels";

export const REQUISICAO_COMPRA_TABLE_NAME = "requisicao_compra";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const requisicao_compraBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	descricao: z.string(),
	descricao_cancelamento: z.string(),
	filial_id: z.number(),
	funcionario: z.number(),
	id_setor: z.number(),
	necessito_ate: z.string(),
	obs: z.string(),
	status: requisicao_compraStatusSchema,
	status_liberacao_compra: requisicao_compraStatusLiberacaoCompraSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const requisicao_compraSchema = requisicao_compraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const requisicao_compraCreateSchema = requisicao_compraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const requisicao_compraUpdateSchema =
	requisicao_compraCreateSchema.partial();
