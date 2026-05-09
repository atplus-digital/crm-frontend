/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_servicosIncluidoPorProrataSchema,
	cliente_contrato_servicosOrigemMovimentoSchema,
	cliente_contrato_servicosOrigemSchema,
	cliente_contrato_servicosRepetirSchema,
	cliente_contrato_servicosStatusNf21Schema,
	cliente_contrato_servicosStatusSchema,
	cliente_contrato_servicosTipoAcresDescSchema,
	cliente_contrato_servicosTipoSchema,
} from "./labels";

export const CLIENTE_CONTRATO_SERVICOS_TABLE_NAME = "cliente_contrato_servicos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_servicosBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	data_final_ligacoes: z.string(),
	data_inicial_ligacoes: z.string(),
	data_validade: z.string(),
	descricao: z.string(),
	execucoes: z.number(),
	execucoes_nf21: z.number(),
	id_almox: z.number(),
	id_areceber: z.number(),
	id_contrato: z.number(),
	id_contrato_aluguel: z.number(),
	id_im_imovel: z.number(),
	id_im_lanc_mensal: z.number(),
	id_login_tv: z.number(),
	id_lote: z.number(),
	id_lote_importacao: z.number(),
	id_lote_rotina: z.number(),
	id_oss_chamado: z.number(),
	id_oss_mensagem: z.number(),
	id_produto: z.number(),
	id_produto_contrato_vinc: z.number(),
	id_sip: z.number(),
	id_tipo_documento: z.number(),
	id_unidade: z.number(),
	id_vd_contrato_produtos: z.number(),
	incluido_por_prorata: cliente_contrato_servicosIncluidoPorProrataSchema,
	observacao: z.string(),
	origem: cliente_contrato_servicosOrigemSchema,
	origem_movimento: cliente_contrato_servicosOrigemMovimentoSchema,
	pdesconto: z.number(),
	quantidade: z.number(),
	repetir: cliente_contrato_servicosRepetirSchema,
	repetir_qtde: z.number(),
	status: cliente_contrato_servicosStatusSchema,
	status_nf21: cliente_contrato_servicosStatusNf21Schema,
	tipo: cliente_contrato_servicosTipoSchema,
	tipo_acres_desc: cliente_contrato_servicosTipoAcresDescSchema,
	ultima_execucao: z.string(),
	ultima_execucao_nf21: z.string(),
	valor_total: z.number(),
	valor_unitario: z.number(),
	vdesconto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_servicosSchema =
	cliente_contrato_servicosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_servicosCreateSchema =
	cliente_contrato_servicosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_servicosUpdateSchema =
	cliente_contrato_servicosCreateSchema.partial();
