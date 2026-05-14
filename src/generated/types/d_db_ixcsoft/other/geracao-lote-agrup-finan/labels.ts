/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOLOTEAGRUPFINAN_FIELD_LABELS = {
	consultar_separadamente: "consultar_separadamente",
	data_emissao_nf: "data_emissao_nf",
	data_fim_emissao: "data_fim_emissao",
	data_fim_vencimento: "data_fim_vencimento",
	data_inicio_emissao: "data_inicio_emissao",
	data_inicio_vencimento: "data_inicio_vencimento",
	desc_filtro_lote: "desc_filtro_lote",
	filtrar_filial_por: "filtrar_filial_por",
	forma_recebimento_financeiro: "forma_recebimento_financeiro",
	id: "id",
	id_cliente_fim: "id_cliente_fim",
	id_cliente_inicio: "id_cliente_inicio",
	id_filial: "id_filial",
	id_filial_tipo_doc: "id_filial_tipo_doc",
	id_lote_financeiro: "id_lote_financeiro",
	id_tipo_cliente: "id_tipo_cliente",
	media_segundos_nota: "media_segundos_nota",
	mes_ano_referencia_nf: "mes_ano_referencia_nf",
	modelo_nf_especifico: "modelo_nf_especifico",
	modelo_nf_geracao: "modelo_nf_geracao",
	momento_fin_geracao: "momento_fin_geracao",
	momento_ini_geracao: "momento_ini_geracao",
	motivo_cancelamento_lote: "motivo_cancelamento_lote",
	status_fatura: "status_fatura",
	status_geracao_nf: "status_geracao_nf",
	tipo_cliente_scm: "tipo_cliente_scm",
	tipo_pessoa_nf: "tipo_pessoa_nf",
	total_erros_ultima_geracao: "total_erros_ultima_geracao",
	total_notas_geradas: "total_notas_geradas",
	total_valor_gerado: "total_valor_gerado",
} as const;

export const GERACAOLOTEAGRUPFINAN_CONSULTARSEPARADAMENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTEAGRUPFINAN_FILTRARFILIALPOR_LABELS = {
	F: "F",
	D: "D",
} as const;

export const GERACAOLOTEAGRUPFINAN_TIPOCLIENTESCM_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
	"08": "08",
	99: "99",
} as const;

export const GERACAOLOTEAGRUPFINAN_TIPOPESSOANF_LABELS = {
	F: "F",
	J: "J",
	E: "E",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const geracao_lote_agrup_finanConsultarSeparadamenteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "consultar_separadamente: valores válidos são [S, N]",
		}),
	},
);

export const geracao_lote_agrup_finanFiltrarFilialPorSchema = z.enum(
	["F", "D"],
	{
		error: () => ({
			message: "filtrar_filial_por: valores válidos são [F, D]",
		}),
	},
);

export const geracao_lote_agrup_finanTipoClienteScmSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07", "08", "99"],
	{
		error: () => ({
			message:
				"tipo_cliente_scm: valores válidos são [01, 02, 03, 04, 05, 06, 07, 08, 99]",
		}),
	},
);

export const geracao_lote_agrup_finanTipoPessoaNfSchema = z.enum(
	["F", "J", "E", "T"],
	{
		error: () => ({
			message: "tipo_pessoa_nf: valores válidos são [F, J, E, T]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GeracaoLoteAgrupFinanConsultarSeparadamente = z.infer<
	typeof geracao_lote_agrup_finanConsultarSeparadamenteSchema
>;

export type GeracaoLoteAgrupFinanFiltrarFilialPor = z.infer<
	typeof geracao_lote_agrup_finanFiltrarFilialPorSchema
>;

export type GeracaoLoteAgrupFinanTipoClienteScm = z.infer<
	typeof geracao_lote_agrup_finanTipoClienteScmSchema
>;

export type GeracaoLoteAgrupFinanTipoPessoaNf = z.infer<
	typeof geracao_lote_agrup_finanTipoPessoaNfSchema
>;
