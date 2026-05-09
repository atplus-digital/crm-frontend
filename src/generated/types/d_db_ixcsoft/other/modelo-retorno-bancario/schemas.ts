/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const MODELO_RETORNO_BANCARIO_TABLE_NAME = "modelo_retorno_bancario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const modelo_retorno_bancarioBaseSchema = z.object({
	id: z.number(),
	coluna_data_vencimento: z.string(),
	coluna_documento_cliente: z.string(),
	coluna_tipo_recebimento: z.string(),
	coluna_valor: z.string(),
	ignora_primeira_linha: z.number(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const modelo_retorno_bancarioSchema = modelo_retorno_bancarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const modelo_retorno_bancarioCreateSchema =
	modelo_retorno_bancarioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const modelo_retorno_bancarioUpdateSchema =
	modelo_retorno_bancarioCreateSchema.partial();
