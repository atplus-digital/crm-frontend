/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	geracao_lote_assinaturasFiltroFormaRecFinanceiroSchema,
	geracao_lote_assinaturasFiltroStatusFinanceiroSchema,
	geracao_lote_assinaturasFiltroTipoPessoaSchema,
	geracao_lote_assinaturasModeloNfGeracaoSchema,
	geracao_lote_assinaturasStatusSchema,
} from "./labels";

export const GERACAO_LOTE_ASSINATURAS_TABLE_NAME = "geracao_lote_assinaturas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const geracao_lote_assinaturasBaseSchema = z.object({
	id: z.number(),
	data_emissao_nf_geracao: z.string(),
	descricao_filtro: z.string(),
	filtro_forma_rec_financeiro:
		geracao_lote_assinaturasFiltroFormaRecFinanceiroSchema,
	filtro_id_assinatura_final: z.number(),
	filtro_id_assinatura_inicial: z.number(),
	filtro_id_filial: z.number(),
	filtro_mes_ano_referencia_nf: z.string(),
	filtro_status_financeiro:
		geracao_lote_assinaturasFiltroStatusFinanceiroSchema,
	filtro_tipo_pessoa: geracao_lote_assinaturasFiltroTipoPessoaSchema,
	filtro_venc_final_financeiro: z.string(),
	filtro_venc_inicial_financeiro: z.string(),
	media_segundos_nota: z.number(),
	modelo_nf_geracao: geracao_lote_assinaturasModeloNfGeracaoSchema,
	momento_fin_geracao: z.string(),
	momento_ini_geracao: z.string(),
	status: geracao_lote_assinaturasStatusSchema,
	total_erros_ultima_geracao: z.number(),
	total_notas_geradas: z.number(),
	total_valor_gerado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const geracao_lote_assinaturasSchema =
	geracao_lote_assinaturasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const geracao_lote_assinaturasCreateSchema =
	geracao_lote_assinaturasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const geracao_lote_assinaturasUpdateSchema =
	geracao_lote_assinaturasCreateSchema.partial();
