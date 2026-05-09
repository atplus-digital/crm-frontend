/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_vd_contratos_produtosAtivoSchema,
	relatorio_vd_contratos_produtosAvisoAtrasoSchema,
	relatorio_vd_contratos_produtosBloqueioAutomaticoSchema,
	relatorio_vd_contratos_produtosContratoSuspensoSchema,
	relatorio_vd_contratos_produtosDesbloqueioConfiancaAtivoSchema,
	relatorio_vd_contratos_produtosForcaStatusAcessoSchema,
	relatorio_vd_contratos_produtosMotivoCancelamentoSchema,
	relatorio_vd_contratos_produtosOrigemCancelamentoSchema,
	relatorio_vd_contratos_produtosProdutoAtivoSchema,
	relatorio_vd_contratos_produtosRenovacaoAutomaticaSchema,
	relatorio_vd_contratos_produtosRestricaoAutoBloqueioSchema,
	relatorio_vd_contratos_produtosStatusVelocidadeSchema,
	relatorio_vd_contratos_produtosTipoCobrancaSchema,
	relatorio_vd_contratos_produtosTipoCondicaoPagamentoSchema,
	relatorio_vd_contratos_produtosTipoDataAtivacaoSchema,
	relatorio_vd_contratos_produtosTipoDataBaseSchema,
	relatorio_vd_contratos_produtosTipoDataBloqueioSchema,
	relatorio_vd_contratos_produtosTipoDataCadastroSchema,
	relatorio_vd_contratos_produtosTipoDataCancelamentoSchema,
	relatorio_vd_contratos_produtosTipoDataDesistenciaSchema,
	relatorio_vd_contratos_produtosTipoDataExpiracaoSchema,
	relatorio_vd_contratos_produtosTipoDataNegativacaoSchema,
	relatorio_vd_contratos_produtosTipoDataRenovacaoSchema,
	relatorio_vd_contratos_produtosTipoVencimentoSchema,
	relatorio_vd_contratos_produtosUtilizandoAutoLiberacaoSchema,
	relatorio_vd_contratos_produtosUtilizandoBloqueioConfiancaSchema,
} from "./labels";

export const RELATORIO_VD_CONTRATOS_PRODUTOS_TABLE_NAME =
	"relatorio_vd_contratos_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_vd_contratos_produtosBaseSchema = z.object({
	id: z.number(),
	ativo: relatorio_vd_contratos_produtosAtivoSchema,
	aviso_atraso: relatorio_vd_contratos_produtosAvisoAtrasoSchema,
	bairro: z.string(),
	bloqueio_automatico: relatorio_vd_contratos_produtosBloqueioAutomaticoSchema,
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
	contrato_suspenso: relatorio_vd_contratos_produtosContratoSuspensoSchema,
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
	data_bloqueio_inicial: z.string(),
	data_bloqueio_periodo: z.string(),
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
		relatorio_vd_contratos_produtosDesbloqueioConfiancaAtivoSchema,
	dfv_final: z.string(),
	dfv_inicial: z.string(),
	dia_fixo_vencimento: z.number(),
	dia_vencimento_final: z.number(),
	dia_vencimento_inicial: z.number(),
	endereco: z.string(),
	forca_status_acesso: relatorio_vd_contratos_produtosForcaStatusAcessoSchema,
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
	id_produto: z.number(),
	id_subgrupo: z.number(),
	id_tipo_cobranca: z.number(),
	id_tipo_contrato: z.number(),
	id_tipo_documento: z.number(),
	id_vd_contrato: z.number(),
	id_vendedor: z.number(),
	id_vendedor_ativacao: z.number(),
	impresso_por: z.number(),
	indicado_atraves: z.number(),
	modelo: z.string(),
	motivo_cancelamento: relatorio_vd_contratos_produtosMotivoCancelamentoSchema,
	nome: z.string(),
	origem_cancelamento: relatorio_vd_contratos_produtosOrigemCancelamentoSchema,
	produto_ativo: relatorio_vd_contratos_produtosProdutoAtivoSchema,
	relatorio: z.string(),
	renovacao_automatica:
		relatorio_vd_contratos_produtosRenovacaoAutomaticaSchema,
	restricao_auto_bloqueio:
		relatorio_vd_contratos_produtosRestricaoAutoBloqueioSchema,
	status: z.string(),
	status_velocidade: relatorio_vd_contratos_produtosStatusVelocidadeSchema,
	tipo_cliente: z.number(),
	tipo_cobranca: relatorio_vd_contratos_produtosTipoCobrancaSchema,
	tipo_condicao_pagamento:
		relatorio_vd_contratos_produtosTipoCondicaoPagamentoSchema,
	tipo_data_ativacao: relatorio_vd_contratos_produtosTipoDataAtivacaoSchema,
	tipo_data_base: relatorio_vd_contratos_produtosTipoDataBaseSchema,
	tipo_data_bloqueio: relatorio_vd_contratos_produtosTipoDataBloqueioSchema,
	tipo_data_cadastro: relatorio_vd_contratos_produtosTipoDataCadastroSchema,
	tipo_data_cancelamento:
		relatorio_vd_contratos_produtosTipoDataCancelamentoSchema,
	tipo_data_desistencia:
		relatorio_vd_contratos_produtosTipoDataDesistenciaSchema,
	tipo_data_expiracao: relatorio_vd_contratos_produtosTipoDataExpiracaoSchema,
	tipo_data_negativacao:
		relatorio_vd_contratos_produtosTipoDataNegativacaoSchema,
	tipo_data_renovacao: relatorio_vd_contratos_produtosTipoDataRenovacaoSchema,
	tipo_documento_fatura: z.number(),
	tipo_documento_opcional: z.number(),
	tipo_pagamento: z.string(),
	tipo_pessoa: z.string(),
	tipo_vencimento: relatorio_vd_contratos_produtosTipoVencimentoSchema,
	utilizando_auto_liberacao:
		relatorio_vd_contratos_produtosUtilizandoAutoLiberacaoSchema,
	utilizando_bloqueio_confianca:
		relatorio_vd_contratos_produtosUtilizandoBloqueioConfiancaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_vd_contratos_produtosSchema =
	relatorio_vd_contratos_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_vd_contratos_produtosCreateSchema =
	relatorio_vd_contratos_produtosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_vd_contratos_produtosUpdateSchema =
	relatorio_vd_contratos_produtosCreateSchema.partial();
