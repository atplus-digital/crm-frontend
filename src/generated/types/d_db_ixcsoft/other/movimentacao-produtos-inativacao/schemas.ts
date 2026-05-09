/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	movimentacao_produtos_inativacaoTipoMovimentacaoSchema,
	movimentacao_produtos_inativacaoTipoSchema,
} from "./labels";

export const MOVIMENTACAO_PRODUTOS_INATIVACAO_TABLE_NAME =
	"movimentacao_produtos_inativacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const movimentacao_produtos_inativacaoBaseSchema = z.object({
	id: z.number(),
	atualizado_em: z.string(),
	atualizado_por: z.number(),
	data: z.string(),
	descricao_produto: z.string(),
	descricao_servico: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_produto: z.number(),
	inativo_em: z.string(),
	inativo_por: z.number(),
	inserido_em: z.string(),
	inserido_por: z.number(),
	motivo_inativacao: z.number(),
	obs: z.string(),
	obs_inativacao: z.string(),
	plano: z.string(),
	qtde: z.number(),
	tipo: movimentacao_produtos_inativacaoTipoSchema,
	tipo_movimentacao: movimentacao_produtos_inativacaoTipoMovimentacaoSchema,
	valor: z.number(),
	valor_acrescimo: z.number(),
	valor_ate_vencimento: z.number(),
	valor_desconto: z.number(),
	valor_liquido: z.number(),
	valor_unit: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const movimentacao_produtos_inativacaoSchema =
	movimentacao_produtos_inativacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const movimentacao_produtos_inativacaoCreateSchema =
	movimentacao_produtos_inativacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const movimentacao_produtos_inativacaoUpdateSchema =
	movimentacao_produtos_inativacaoCreateSchema.partial();
