/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VIEW_VALOR_PRODUTOS_CONTRATO_COMPOSICAO_TABLE_NAME =
	"view_valor_produtos_contrato_composicao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const view_valor_produtos_contrato_composicaoBaseSchema = z.object({
	cidade_nome: z.string(),
	cliente_cep: z.string(),
	cliente_contrato_contrato: z.string(),
	cliente_contrato_data_ativacao: z.string(),
	cliente_contrato_id: z.number(),
	cliente_contrato_id_filial: z.number(),
	cliente_contrato_status: z.string(),
	cliente_contrato_status_internet: z.string(),
	cliente_endereco: z.string(),
	cliente_id: z.number(),
	cliente_numero: z.string(),
	cliente_razao: z.string(),
	id_vd_contratos_produtos: z.number(),
	tipo_vinculo_produto_contrato: z.string(),
	uf_sigla: z.string(),
	valorTotalAcrescimo: z.number(),
	valorTotalBruto: z.number(),
	valorTotalDesconto: z.number(),
	valorTotalLiquido: z.number(),
	vd_contratos_produtos_id_tipo_documento: z.number(),
	vd_contratos_produtos_logins_simultaneos: z.number(),
	vd_contratos_produtos_qtde: z.number(),
	vd_contratos_produtos_tipo_produto: z.string(),
	vd_contratos_produtos_valor_bruto: z.number(),
	vd_contratos_produtos_valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const view_valor_produtos_contrato_composicaoSchema =
	view_valor_produtos_contrato_composicaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const view_valor_produtos_contrato_composicaoCreateSchema =
	view_valor_produtos_contrato_composicaoSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const view_valor_produtos_contrato_composicaoUpdateSchema =
	view_valor_produtos_contrato_composicaoCreateSchema.partial();
