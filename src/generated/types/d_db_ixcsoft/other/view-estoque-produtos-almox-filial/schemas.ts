/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	view_estoque_produtos_almox_filialAlmoxAtivoSchema,
	view_estoque_produtos_almox_filialProdutoAtivoSchema,
	view_estoque_produtos_almox_filialProdutoControlaEstoqueSchema,
	view_estoque_produtos_almox_filialProdutoTipoSchema,
} from "./labels";

export const VIEW_ESTOQUE_PRODUTOS_ALMOX_FILIAL_TABLE_NAME =
	"view_estoque_produtos_almox_filial";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_estoque_produtos_almox_filialBaseSchema = z.object({
	id: z.number(),
	almox_ativo: view_estoque_produtos_almox_filialAlmoxAtivoSchema,
	almox_descricao: z.string(),
	almox_id: z.number(),
	filial_id: z.number(),
	produto_ativo: view_estoque_produtos_almox_filialProdutoAtivoSchema,
	produto_controla_estoque:
		view_estoque_produtos_almox_filialProdutoControlaEstoqueSchema,
	produto_descricao: z.string(),
	produto_id_class_fiscal: z.number(),
	produto_pcomissao: z.number(),
	produto_preco_base: z.number(),
	produto_tipo: view_estoque_produtos_almox_filialProdutoTipoSchema,
	produto_unidade: z.number(),
	saldo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_estoque_produtos_almox_filialSchema =
	view_estoque_produtos_almox_filialBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_estoque_produtos_almox_filialCreateSchema =
	view_estoque_produtos_almox_filialSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_estoque_produtos_almox_filialUpdateSchema =
	view_estoque_produtos_almox_filialCreateSchema.partial();
