/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_geracao_financeiroAgendadoSchema,
	cliente_contrato_geracao_financeiroDataSaidaSchema,
	cliente_contrato_geracao_financeiroEnviarEmailSchema,
	cliente_contrato_geracao_financeiroGeraAdicionalSchema,
	cliente_contrato_geracao_financeiroGeraCanceladosSchema,
	cliente_contrato_geracao_financeiroGeraFinanAaSchema,
	cliente_contrato_geracao_financeiroOrdemSchema,
	cliente_contrato_geracao_financeiroSomenteSipSchema,
	cliente_contrato_geracao_financeiroStatusSchema,
	cliente_contrato_geracao_financeiroTipoContratoSchema,
	cliente_contrato_geracao_financeiroTipoPessoaSchema,
	cliente_contrato_geracao_financeiroTipoTipoCobrancaSchema,
} from "./labels";

export const CLIENTE_CONTRATO_GERACAO_FINANCEIRO_TABLE_NAME =
	"cliente_contrato_geracao_financeiro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_geracao_financeiroBaseSchema = z.object({
	id: z.number(),
	agendado: cliente_contrato_geracao_financeiroAgendadoSchema,
	data_saida: cliente_contrato_geracao_financeiroDataSaidaSchema,
	data_venc_fin: z.string(),
	data_venc_ini: z.string(),
	enviar_email: cliente_contrato_geracao_financeiroEnviarEmailSchema,
	gera_adicional: cliente_contrato_geracao_financeiroGeraAdicionalSchema,
	gera_adicional_data: z.string(),
	gera_cancelados: cliente_contrato_geracao_financeiroGeraCanceladosSchema,
	gera_finan_aa: cliente_contrato_geracao_financeiroGeraFinanAaSchema,
	id_carteira_cobranca: z.number(),
	id_cidade: z.number(),
	id_contrato_final: z.number(),
	id_contrato_inicial: z.number(),
	id_filial: z.number(),
	id_tipo_cliente: z.number(),
	id_tipo_cobranca: z.number(),
	media_segundos_contrato: z.number(),
	mes_repeticoes_geracao_lote: z.string(),
	momento_fin_geracao: z.string(),
	momento_ini_geracao: z.string(),
	ordem: cliente_contrato_geracao_financeiroOrdemSchema,
	qtde_repeticoes_geracao_lote: z.number(),
	somente_sip: cliente_contrato_geracao_financeiroSomenteSipSchema,
	status: cliente_contrato_geracao_financeiroStatusSchema,
	tipo_contrato: cliente_contrato_geracao_financeiroTipoContratoSchema,
	tipo_doc_fatura: z.number(),
	tipo_pessoa: cliente_contrato_geracao_financeiroTipoPessoaSchema,
	tipo_tipo_cobranca: cliente_contrato_geracao_financeiroTipoTipoCobrancaSchema,
	total_parcelas_geradas: z.number(),
	total_valor_gerado: z.number(),
	total_vendas_geradas: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_geracao_financeiroSchema =
	cliente_contrato_geracao_financeiroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_geracao_financeiroCreateSchema =
	cliente_contrato_geracao_financeiroSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_geracao_financeiroUpdateSchema =
	cliente_contrato_geracao_financeiroCreateSchema.partial();
