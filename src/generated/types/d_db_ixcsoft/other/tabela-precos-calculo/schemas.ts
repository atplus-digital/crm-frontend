/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TABELA_PRECOS_CALCULO_TABLE_NAME = "tabela_precos_calculo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tabela_precos_calculoBaseSchema = z.object({
	id: z.number(),
	atualizar_preco: z.string(),
	custo_medio: z.number(),
	id_produto: z.number(),
	id_tabela: z.number(),
	lucro: z.number(),
	margem_produto: z.number(),
	margem_subgrupo: z.number(),
	novo_valor: z.number(),
	ultima_compra: z.number(),
	valor_antigo: z.number(),
	valor_base: z.number(),
	valor_tabela: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tabela_precos_calculoSchema = tabela_precos_calculoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tabela_precos_calculoCreateSchema =
	tabela_precos_calculoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tabela_precos_calculoUpdateSchema =
	tabela_precos_calculoCreateSchema.partial();
