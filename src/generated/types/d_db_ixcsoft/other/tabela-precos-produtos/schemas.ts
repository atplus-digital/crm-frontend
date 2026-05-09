/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TABELA_PRECOS_PRODUTOS_TABLE_NAME = "tabela_precos_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tabela_precos_produtosBaseSchema = z.object({
	id: z.number(),
	id_produto: z.number(),
	id_tabela: z.number(),
	percentual_desconto: z.number(),
	ultima_atualizacao: z.string(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tabela_precos_produtosSchema = tabela_precos_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tabela_precos_produtosCreateSchema =
	tabela_precos_produtosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tabela_precos_produtosUpdateSchema =
	tabela_precos_produtosCreateSchema.partial();
