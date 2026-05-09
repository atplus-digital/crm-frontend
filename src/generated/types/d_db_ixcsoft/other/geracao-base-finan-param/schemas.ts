/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	geracao_base_finan_paramIndicardorDevolucaoSchema,
	geracao_base_finan_paramProcessoJudicialSchema,
	geracao_base_finan_paramRelacaoCofaturamentoSchema,
	geracao_base_finan_paramTipoClienteScmSchema,
	geracao_base_finan_paramTipoProcessoSchema,
	geracao_base_finan_paramTipoRessarcimentoSchema,
	geracao_base_finan_paramTpFaturamentoNfcomSchema,
} from "./labels";

export const GERACAO_BASE_FINAN_PARAM_TABLE_NAME = "geracao_base_finan_param";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const geracao_base_finan_paramBaseSchema = z.object({
	id: z.number(),
	aliquota_icms: z.number(),
	base_calculo_icms: z.number(),
	chave_acesso_nfcom_op: z.string(),
	cnpj_op_longa_distancia: z.string(),
	cod_classificacao_servico: z.string(),
	data_referencia: z.string(),
	id_saida: z.number(),
	indicardor_devolucao: geracao_base_finan_paramIndicardorDevolucaoSchema,
	inf_adicionais_prod: z.string(),
	numero_processo: z.string(),
	numero_processo_ressarcimento: z.string(),
	numero_protocolo_reclamacao: z.string(),
	obs: z.string(),
	outras_despesas_acessoria: z.number(),
	processo_judicial: geracao_base_finan_paramProcessoJudicialSchema,
	quant_fatura: z.number(),
	relacao_cofaturamento: geracao_base_finan_paramRelacaoCofaturamentoSchema,
	tipo_cliente_scm: geracao_base_finan_paramTipoClienteScmSchema,
	tipo_processo: geracao_base_finan_paramTipoProcessoSchema,
	tipo_ressarcimento: geracao_base_finan_paramTipoRessarcimentoSchema,
	tp_faturamento_nfcom: geracao_base_finan_paramTpFaturamentoNfcomSchema,
	valor_cofins: z.number(),
	valor_desc: z.number(),
	valor_icms: z.number(),
	valor_pis: z.number(),
	valor_total_item: z.number(),
	valor_un_item: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const geracao_base_finan_paramSchema =
	geracao_base_finan_paramBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const geracao_base_finan_paramCreateSchema =
	geracao_base_finan_paramSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const geracao_base_finan_paramUpdateSchema =
	geracao_base_finan_paramCreateSchema.partial();
