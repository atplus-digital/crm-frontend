/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	df_configColorirCaixaAtendimentoPortasDispSchema,
	df_configExibirDescricaoCaixaAtendimentoSchema,
	df_configExibirDescricaoCaixaEmendaSchema,
	df_configExibirNotificacaoCaixasDeAtendimentoSchema,
	df_configExibirNotificacaoClientesSemCoordenadaSchema,
	df_configExibirNotificacaoFeedbackAppSchema,
	df_configExibirNotificacaoLoginsSemCoordenadaSchema,
	df_configExibirNotificacaoOnuSemCoordenadaSchema,
	df_configFiltroClienteAtivoSchema,
	df_configFiltroClienteOnlineSchema,
	df_configFiltroClienteSemCoordenadaSchema,
	df_configFiltroClienteSemProjetoSchema,
	df_configFiltroExibirDirecaoFibraSchema,
	df_configFiltroExibirFuncionariosSchema,
	df_configFiltroOnuEstruturaSchema,
	df_configFiltroTipoMapaSchema,
	df_configFiltroTransmissorSchema,
	df_configMapModeSalesSchema,
	df_configMapModeSchema,
	df_configMapModeServiceSchema,
	df_configVersaoFiberSchema,
} from "./labels";

export const DF_CONFIG_TABLE_NAME = "df_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_configBaseSchema = z.object({
	id: z.number(),
	colorir_caixa_atendimento_portas_disp:
		df_configColorirCaixaAtendimentoPortasDispSchema,
	delay_update_mapa: z.number(),
	exibir_descricao_caixa_atendimento:
		df_configExibirDescricaoCaixaAtendimentoSchema,
	exibir_descricao_caixa_emenda: df_configExibirDescricaoCaixaEmendaSchema,
	exibir_notificacao_caixas_de_atendimento:
		df_configExibirNotificacaoCaixasDeAtendimentoSchema,
	exibir_notificacao_clientes_sem_coordenada:
		df_configExibirNotificacaoClientesSemCoordenadaSchema,
	exibir_notificacao_feedback_app: df_configExibirNotificacaoFeedbackAppSchema,
	exibir_notificacao_logins_sem_coordenada:
		df_configExibirNotificacaoLoginsSemCoordenadaSchema,
	exibir_notificacao_onu_sem_coordenada:
		df_configExibirNotificacaoOnuSemCoordenadaSchema,
	filtro_cliente_ativo: df_configFiltroClienteAtivoSchema,
	filtro_cliente_online: df_configFiltroClienteOnlineSchema,
	filtro_cliente_sem_coordenada: df_configFiltroClienteSemCoordenadaSchema,
	filtro_cliente_sem_projeto: df_configFiltroClienteSemProjetoSchema,
	filtro_exibir_direcao_fibra: df_configFiltroExibirDirecaoFibraSchema,
	filtro_exibir_funcionarios: df_configFiltroExibirFuncionariosSchema,
	filtro_onu_estrutura: df_configFiltroOnuEstruturaSchema,
	filtro_potencia_onu: z.string(),
	filtro_tipo_mapa: df_configFiltroTipoMapaSchema,
	filtro_transmissor: df_configFiltroTransmissorSchema,
	id_tipo_emenda_padrao: z.number(),
	id_user: z.number(),
	layer: z.string(),
	layer_sales: z.string(),
	layer_service: z.string(),
	map_mode: df_configMapModeSchema,
	map_mode_sales: df_configMapModeSalesSchema,
	map_mode_service: df_configMapModeServiceSchema,
	versao_fiber: df_configVersaoFiberSchema,
	versao_update_categoria: z.string(),
	versao_update_estilo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_configSchema = df_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_configCreateSchema = df_configSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_configUpdateSchema = df_configCreateSchema.partial();
