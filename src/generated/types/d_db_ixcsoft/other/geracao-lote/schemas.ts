/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	geracao_loteBaseGeracaoPorTipoDocSchema,
	geracao_loteComunicacaoUnicaSchema,
	geracao_loteConsultarSeparadamenteSchema,
	geracao_loteDataGeracaoSchema,
	geracao_loteGerarNfBoletoRecParcialSchema,
	geracao_loteGerarNfContratoCancSchema,
	geracao_loteGerarNfPreContratoSchema,
	geracao_loteGerarNfPropAvulsoSchema,
	geracao_loteGerarNfRecebidosAnterioresSchema,
	geracao_loteTipoClienteScmSchema,
} from "./labels";

export const GERACAO_LOTE_TABLE_NAME = "geracao_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const geracao_loteBaseSchema = z.object({
	id: z.number(),
	base_geracao_por_tipo_doc: geracao_loteBaseGeracaoPorTipoDocSchema,
	buscar_produtos_por: z.number(),
	comunicacao_unica: geracao_loteComunicacaoUnicaSchema,
	condicao_pagamento: z.number(),
	consultar_separadamente: geracao_loteConsultarSeparadamenteSchema,
	data_emissao_nf: z.string(),
	data_emissao_nf_voip: z.string(),
	data_final_ligacoes_voip: z.string(),
	data_final_venciemnto_voip: z.string(),
	data_geracao: geracao_loteDataGeracaoSchema,
	data_inicial_ligacoes_voip: z.string(),
	data_inicial_venciemnto_voip: z.string(),
	data_lancamento_voip: z.number(),
	data_limite_inicio_contrato_nf: z.string(),
	data_limite_rec_anteriores: z.string(),
	desc_filtro_lote: z.string(),
	filial_id: z.number(),
	forma_recebimento_financeiro: z.string(),
	gerar_nf_boleto_rec_parcial: geracao_loteGerarNfBoletoRecParcialSchema,
	gerar_nf_cli_bloqueado: z.string(),
	gerar_nf_contrato_canc: geracao_loteGerarNfContratoCancSchema,
	gerar_nf_pre_contrato: geracao_loteGerarNfPreContratoSchema,
	gerar_nf_prop_avulso: geracao_loteGerarNfPropAvulsoSchema,
	gerar_nf_recebidos_anteriores: geracao_loteGerarNfRecebidosAnterioresSchema,
	gerar_nf_voip: z.number(),
	id_base_geracao_nf: z.number(),
	id_carteira_cobranca: z.number(),
	id_condicao_pagamento_voip: z.number(),
	id_contrato_final_nf: z.number(),
	id_contrato_inicial_nf: z.number(),
	id_tipo_cliente: z.number(),
	id_vd_contrato: z.number(),
	media_segundos_nota: z.number(),
	mes_ano_referencia_nf: z.string(),
	modelo_nf: z.string(),
	modelo_nf_geracao: z.number(),
	momento_fin_geracao: z.string(),
	momento_ini_geracao: z.string(),
	motivo_cancelamento_lote: z.string(),
	numero_lote_cancelar: z.number(),
	ramal_voip: z.number(),
	recebimento_final_financeiro: z.string(),
	recebimento_inicial_financeiro: z.string(),
	status_geracao_nf: z.number(),
	status_nf_financeiro: z.string(),
	tipo_cliente_scm: geracao_loteTipoClienteScmSchema,
	tipo_documento_opcional_nf: z.number(),
	tipo_geracao_lote: z.number(),
	tipo_pessoa_nf: z.string(),
	total_erros_ultima_geracao: z.number(),
	total_notas_geradas: z.number(),
	total_valor_gerado: z.number(),
	vencimento_final_financeiro: z.string(),
	vencimento_inicial_financeiro: z.string(),
	vencimento_pos_pago_voip: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const geracao_loteSchema = geracao_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const geracao_loteCreateSchema = geracao_loteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const geracao_loteUpdateSchema = geracao_loteCreateSchema.partial();
