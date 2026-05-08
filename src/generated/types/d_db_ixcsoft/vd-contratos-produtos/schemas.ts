/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	vd_contratos_produtosFixarIpSchema,
	vd_contratos_produtosRepetirSchema,
	vd_contratos_produtosTipoDescontoSchema,
	vd_contratos_produtosTipoSchema,
} from "./labels";

export const VD_CONTRATOS_PRODUTOS_TABLE_NAME = "vd_contratos_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vd_contratos_produtosBaseSchema = z.object({
	id: z.number(),
	atualizado_por: z.string(),
	desconto_percentual: z.string(),
	desconto_proporcional: z.string(),
	descricao: z.string(),
	descricao_plano_valor_1: z.string(),
	descricao_plano_valor_2: z.string(),
	fixar_ip: vd_contratos_produtosFixarIpSchema,
	id_contrato: z.string(),
	id_contrato_produto_plano: z.string(),
	id_plano: z.number(),
	id_produto: z.number(),
	id_tipo_documento: z.number(),
	id_unidade: z.string(),
	id_vd_contrato: z.number(),
	inserido_em: z.string(),
	inserido_por: z.string(),
	limite_pacote: z.string(),
	logins_simultaneos: z.string(),
	obs: z.string(),
	qtde: z.number(),
	qtde_repeticoes_desconto_produto: z.string(),
	repetir: vd_contratos_produtosRepetirSchema,
	repetir_qtde: z.string(),
	tipo: vd_contratos_produtosTipoSchema,
	tipo_desconto: vd_contratos_produtosTipoDescontoSchema,
	tv_pacotes_canais: z.string(),
	ultima_atualizacao: z.string(),
	valor_adicional_pacote: z.string(),
	valor_ate_vencimento: z.string(),
	valor_desconto_produto: z.string(),
	valor_unit: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const vd_contratos_produtosRelationSchema = z.object({
	f_classificacao: z.number().nullable(),
	f_grupo: z.number().nullable(),
	f_plano: z.number().nullable(),
	f_produto: z.number().nullable(),
	f_subgrupo: z.number().nullable(),
	f_tipo_documento: z.number().nullable(),
	f_unidade: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vd_contratos_produtosSchema =
	vd_contratos_produtosBaseSchema.extend(
		vd_contratos_produtosRelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vd_contratos_produtosCreateSchema =
	vd_contratos_produtosSchema.omit({
		f_classificacao: true,
		f_grupo: true,
		f_plano: true,
		f_produto: true,
		f_subgrupo: true,
		f_tipo_documento: true,
		f_unidade: true,
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vd_contratos_produtosUpdateSchema =
	vd_contratos_produtosCreateSchema.partial();
