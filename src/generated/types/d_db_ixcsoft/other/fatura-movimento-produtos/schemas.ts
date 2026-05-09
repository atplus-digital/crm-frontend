/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fatura_movimento_produtosEstoqueSchema,
	fatura_movimento_produtosTipoFiscalPlanoSchema,
	fatura_movimento_produtosTipoSchema,
} from "./labels";

export const FATURA_MOVIMENTO_PRODUTOS_TABLE_NAME = "fatura_movimento_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fatura_movimento_produtosBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	data_cotacao_diaria: z.string(),
	descricao: z.string(),
	estoque: fatura_movimento_produtosEstoqueSchema,
	filial_id: z.number(),
	id_almox: z.number(),
	id_cliente_contrato_servicos: z.number(),
	id_contrato: z.number(),
	id_fatura: z.number(),
	id_produto: z.number(),
	id_tipo_documento: z.number(),
	id_unidade: z.number(),
	id_vd_contratos_produtos: z.number(),
	moeda_simbolo: z.string(),
	qtde: z.number(),
	tipo: fatura_movimento_produtosTipoSchema,
	tipo_fiscal_plano: fatura_movimento_produtosTipoFiscalPlanoSchema,
	unidade_sigla: z.string(),
	vacrescimo: z.number(),
	valor_ate_vencimento: z.number(),
	valor_cotacao_diaria: z.number(),
	valor_moeda_original: z.number(),
	valor_total: z.number(),
	valor_unitario: z.number(),
	vdesconto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fatura_movimento_produtosSchema =
	fatura_movimento_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fatura_movimento_produtosCreateSchema =
	fatura_movimento_produtosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fatura_movimento_produtosUpdateSchema =
	fatura_movimento_produtosCreateSchema.partial();
