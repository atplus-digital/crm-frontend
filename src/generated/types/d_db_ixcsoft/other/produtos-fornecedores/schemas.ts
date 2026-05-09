/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_FORNECEDORES_TABLE_NAME = "produtos_fornecedores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_fornecedoresBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	data: z.string(),
	id_entrada: z.number(),
	id_fornecedor: z.number(),
	id_movimento_produtos: z.number(),
	id_produto: z.number(),
	produto: z.string(),
	unidade: z.number(),
	valor: z.number(),
	valor_custo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_fornecedoresSchema = produtos_fornecedoresBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_fornecedoresCreateSchema =
	produtos_fornecedoresSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_fornecedoresUpdateSchema =
	produtos_fornecedoresCreateSchema.partial();
