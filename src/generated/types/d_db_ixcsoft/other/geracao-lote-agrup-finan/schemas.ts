/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	geracao_lote_agrup_finanConsultarSeparadamenteSchema,
	geracao_lote_agrup_finanFiltrarFilialPorSchema,
	geracao_lote_agrup_finanTipoClienteScmSchema,
	geracao_lote_agrup_finanTipoPessoaNfSchema,
} from "./labels";

export const GERACAO_LOTE_AGRUP_FINAN_TABLE_NAME = "geracao_lote_agrup_finan";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const geracao_lote_agrup_finanBaseSchema = z.object({
	id: z.number(),
	consultar_separadamente: geracao_lote_agrup_finanConsultarSeparadamenteSchema,
	data_emissao_nf: z.string(),
	data_fim_emissao: z.string(),
	data_fim_vencimento: z.string(),
	data_inicio_emissao: z.string(),
	data_inicio_vencimento: z.string(),
	desc_filtro_lote: z.string(),
	filtrar_filial_por: geracao_lote_agrup_finanFiltrarFilialPorSchema,
	forma_recebimento_financeiro: z.number(),
	id_cliente_fim: z.number(),
	id_cliente_inicio: z.number(),
	id_filial: z.number(),
	id_filial_tipo_doc: z.number(),
	id_lote_financeiro: z.number(),
	id_tipo_cliente: z.number(),
	media_segundos_nota: z.number(),
	mes_ano_referencia_nf: z.string(),
	modelo_nf_especifico: z.string(),
	modelo_nf_geracao: z.number(),
	momento_fin_geracao: z.string(),
	momento_ini_geracao: z.string(),
	motivo_cancelamento_lote: z.string(),
	status_fatura: z.number(),
	status_geracao_nf: z.number(),
	tipo_cliente_scm: geracao_lote_agrup_finanTipoClienteScmSchema,
	tipo_pessoa_nf: geracao_lote_agrup_finanTipoPessoaNfSchema,
	total_erros_ultima_geracao: z.number(),
	total_notas_geradas: z.number(),
	total_valor_gerado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const geracao_lote_agrup_finanSchema =
	geracao_lote_agrup_finanBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const geracao_lote_agrup_finanCreateSchema =
	geracao_lote_agrup_finanSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const geracao_lote_agrup_finanUpdateSchema =
	geracao_lote_agrup_finanCreateSchema.partial();
