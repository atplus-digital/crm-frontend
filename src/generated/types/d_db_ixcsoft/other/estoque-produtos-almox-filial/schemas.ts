/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	estoque_produtos_almox_filialAlmoxAtivoSchema,
	estoque_produtos_almox_filialProdutoAtivoSchema,
	estoque_produtos_almox_filialProdutoControlaEstoqueSchema,
	estoque_produtos_almox_filialProdutoTipoSchema,
} from "./labels";

export const ESTOQUE_PRODUTOS_ALMOX_FILIAL_TABLE_NAME =
	"estoque_produtos_almox_filial";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const estoque_produtos_almox_filialBaseSchema = z.object({
	id: z.number(),
	almox_ativo: estoque_produtos_almox_filialAlmoxAtivoSchema,
	almox_descricao: z.string(),
	create_time: z.string(),
	id_almox: z.number(),
	id_filial: z.number(),
	id_produto: z.number(),
	produto_ativo: estoque_produtos_almox_filialProdutoAtivoSchema,
	produto_controla_estoque:
		estoque_produtos_almox_filialProdutoControlaEstoqueSchema,
	produto_descricao: z.string(),
	produto_id_class_fiscal: z.number(),
	produto_pcomissao: z.number(),
	produto_preco_base: z.number(),
	produto_tipo: estoque_produtos_almox_filialProdutoTipoSchema,
	produto_unidade: z.number(),
	saldo: z.number(),
	update_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const estoque_produtos_almox_filialSchema =
	estoque_produtos_almox_filialBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const estoque_produtos_almox_filialCreateSchema =
	estoque_produtos_almox_filialSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const estoque_produtos_almox_filialUpdateSchema =
	estoque_produtos_almox_filialCreateSchema.partial();
