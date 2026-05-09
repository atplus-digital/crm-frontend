/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	rel_cliente_contratoAtivoSchema,
	rel_cliente_contratoAvisoAtrasoSchema,
	rel_cliente_contratoBloqueioAutomaticoSchema,
	rel_cliente_contratoContratoIsentoSchema,
	rel_cliente_contratoContratoSuspensoSchema,
	rel_cliente_contratoDesbloqueioConfiancaAtivoSchema,
	rel_cliente_contratoForcaStatusAcessoSchema,
	rel_cliente_contratoMotivoCancelamentoSchema,
	rel_cliente_contratoOrigemCancelamentoSchema,
	rel_cliente_contratoRenovacaoAutomaticaSchema,
	rel_cliente_contratoRestricaoAutoBloqueioSchema,
	rel_cliente_contratoStatusVelocidadeSchema,
	rel_cliente_contratoTipoCobrancaSchema,
	rel_cliente_contratoTipoCondicaoPagamentoSchema,
	rel_cliente_contratoTipoDataAtivacaoSchema,
	rel_cliente_contratoTipoDataBaseSchema,
	rel_cliente_contratoTipoDataBloqueioAutoSchema,
	rel_cliente_contratoTipoDataBloqueioManualSchema,
	rel_cliente_contratoTipoDataBloqueioSchema,
	rel_cliente_contratoTipoDataCadastroSchema,
	rel_cliente_contratoTipoDataCancelamentoSchema,
	rel_cliente_contratoTipoDataDesistenciaSchema,
	rel_cliente_contratoTipoDataExpiracaoSchema,
	rel_cliente_contratoTipoDataNegativacaoSchema,
	rel_cliente_contratoTipoDataRenovacaoSchema,
	rel_cliente_contratoTipoVencimentoSchema,
	rel_cliente_contratoUtilizandoAutoLiberacaoSchema,
	rel_cliente_contratoUtilizandoBloqueioConfiancaSchema,
} from "./labels";

export const REL_CLIENTE_CONTRATO_TABLE_NAME = "rel_cliente_contrato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rel_cliente_contratoBaseSchema = z.object({
	id: z.number(),
	ativo: rel_cliente_contratoAtivoSchema,
	aviso_atraso: rel_cliente_contratoAvisoAtrasoSchema,
	bairro: z.string(),
	bloqueio_automatico: rel_cliente_contratoBloqueioAutomaticoSchema,
	campos: z.number(),
	campos_adicionais_carteira_de_cobranca: z.string(),
	campos_adicionais_cidades: z.string(),
	campos_adicionais_cliente: z.string(),
	campos_adicionais_contrato: z.string(),
	campos_adicionais_filiais: z.string(),
	campos_adicionais_plano_de_venda: z.string(),
	campos_adicionais_tipo_de_cobranca: z.string(),
	campos_adicionais_tipo_de_documento: z.string(),
	cep: z.string(),
	cidade: z.number(),
	cliente_final: z.number(),
	cliente_inicial: z.number(),
	com_motivo_desistiu: z.number(),
	condominio_apartamento: z.string(),
	condominio_bloco: z.string(),
	contrato_final: z.number(),
	contrato_inicial: z.number(),
	contrato_isento: rel_cliente_contratoContratoIsentoSchema,
	contrato_suspenso: rel_cliente_contratoContratoSuspensoSchema,
	creation_date: z.string(),
	creation_user: z.string(),
	creator_date: z.string(),
	data_ativacao_final: z.string(),
	data_ativacao_inicial: z.string(),
	data_ativacao_periodo: z.string(),
	data_base_final: z.string(),
	data_base_inicial: z.string(),
	data_base_periodo: z.string(),
	data_bloqueio_final: z.string(),
	data_bloqueio_final_auto: z.string(),
	data_bloqueio_inicial: z.string(),
	data_bloqueio_inicial_auto: z.string(),
	data_bloqueio_periodo: z.string(),
	data_bloqueio_periodo_auto: z.string(),
	data_cadastro_final: z.string(),
	data_cadastro_inicial: z.string(),
	data_cadastro_periodo: z.string(),
	data_cancelamento_final: z.string(),
	data_cancelamento_inicial: z.string(),
	data_cancelamento_periodo: z.string(),
	data_desistencia_final: z.string(),
	data_desistencia_inicial: z.string(),
	data_desistencia_periodo: z.string(),
	data_expiracao_final: z.string(),
	data_expiracao_inicial: z.string(),
	data_expiracao_periodo: z.string(),
	data_negativacao_final: z.string(),
	data_negativacao_inicial: z.string(),
	data_negativacao_periodo: z.string(),
	data_renovacao_final: z.string(),
	data_renovacao_inicial: z.string(),
	data_renovacao_periodo: z.string(),
	data_ultima_impres: z.string(),
	desbloqueio_confianca_ativo:
		rel_cliente_contratoDesbloqueioConfiancaAtivoSchema,
	dfv_final: z.string(),
	dfv_inicial: z.string(),
	dia_fixo_vencimento: z.number(),
	dia_vencimento_final: z.number(),
	dia_vencimento_inicial: z.number(),
	endereco: z.string(),
	forca_status_acesso: rel_cliente_contratoForcaStatusAcessoSchema,
	id_carteira_cobranca: z.number(),
	id_cidade: z.string(),
	id_condominio: z.number(),
	id_contrato: z.number(),
	id_filial: z.number(),
	id_instalador: z.number(),
	id_modelo_impressao: z.number(),
	id_motivo_cancelamento: z.number(),
	id_motivo_inclusao: z.number(),
	id_motivo_negativacao: z.number(),
	id_tipo_cobranca: z.number(),
	id_tipo_contrato: z.number(),
	id_tipo_documento: z.number(),
	id_vd_contrato: z.number(),
	id_vendedor: z.number(),
	id_vendedor_ativacao: z.number(),
	impresso_por: z.number(),
	indicado_atraves: z.number(),
	modelo: z.string(),
	motivo_cancelamento: rel_cliente_contratoMotivoCancelamentoSchema,
	nome: z.string(),
	origem_cancelamento: rel_cliente_contratoOrigemCancelamentoSchema,
	relatorio: z.string(),
	renovacao_automatica: rel_cliente_contratoRenovacaoAutomaticaSchema,
	restricao_auto_bloqueio: rel_cliente_contratoRestricaoAutoBloqueioSchema,
	status: z.string(),
	status_velocidade: rel_cliente_contratoStatusVelocidadeSchema,
	tipo_cliente: z.number(),
	tipo_cobranca: rel_cliente_contratoTipoCobrancaSchema,
	tipo_condicao_pagamento: rel_cliente_contratoTipoCondicaoPagamentoSchema,
	tipo_data_ativacao: rel_cliente_contratoTipoDataAtivacaoSchema,
	tipo_data_base: rel_cliente_contratoTipoDataBaseSchema,
	tipo_data_bloqueio: rel_cliente_contratoTipoDataBloqueioSchema,
	tipo_data_bloqueio_auto: rel_cliente_contratoTipoDataBloqueioAutoSchema,
	tipo_data_bloqueio_manual: rel_cliente_contratoTipoDataBloqueioManualSchema,
	tipo_data_cadastro: rel_cliente_contratoTipoDataCadastroSchema,
	tipo_data_cancelamento: rel_cliente_contratoTipoDataCancelamentoSchema,
	tipo_data_desistencia: rel_cliente_contratoTipoDataDesistenciaSchema,
	tipo_data_expiracao: rel_cliente_contratoTipoDataExpiracaoSchema,
	tipo_data_negativacao: rel_cliente_contratoTipoDataNegativacaoSchema,
	tipo_data_renovacao: rel_cliente_contratoTipoDataRenovacaoSchema,
	tipo_documento_fatura: z.number(),
	tipo_documento_opcional: z.number(),
	tipo_pagamento: z.string(),
	tipo_pessoa: z.string(),
	tipo_vencimento: rel_cliente_contratoTipoVencimentoSchema,
	utilizando_auto_liberacao: rel_cliente_contratoUtilizandoAutoLiberacaoSchema,
	utilizando_bloqueio_confianca:
		rel_cliente_contratoUtilizandoBloqueioConfiancaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rel_cliente_contratoSchema = rel_cliente_contratoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rel_cliente_contratoCreateSchema = rel_cliente_contratoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rel_cliente_contratoUpdateSchema =
	rel_cliente_contratoCreateSchema.partial();
