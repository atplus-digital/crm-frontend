/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fiberdocs_usuario_configDescricaoCaixaEmendaSchema,
	fiberdocs_usuario_configDirecaoCaboSchema,
	fiberdocs_usuario_configDirecaoCaixaAtendimentoSchema,
	fiberdocs_usuario_configExibirNotificacaoElementosQuebradosSchema,
	fiberdocs_usuario_configExibirNotificacaoLoginsSemProjetoSchema,
	fiberdocs_usuario_configExibirNotificacaoOnusSemProjetoSchema,
	fiberdocs_usuario_configFerramentaAgrupamentoSchema,
	fiberdocs_usuario_configFerramentaImaSchema,
	fiberdocs_usuario_configLoginsSemProjetoSchema,
	fiberdocs_usuario_configMenuInicialSchema,
	fiberdocs_usuario_configOverlayExibicaoSchema,
	fiberdocs_usuario_configRenderizacaoDeElementosSchema,
} from "./labels";

export const FIBERDOCS_USUARIO_CONFIG_TABLE_NAME = "fiberdocs_usuario_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fiberdocs_usuario_configBaseSchema = z.object({
	id: z.number(),
	descricao_caixa_emenda: fiberdocs_usuario_configDescricaoCaixaEmendaSchema,
	direcao_cabo: fiberdocs_usuario_configDirecaoCaboSchema,
	direcao_caixa_atendimento:
		fiberdocs_usuario_configDirecaoCaixaAtendimentoSchema,
	exibir_notificacao_elementos_quebrados:
		fiberdocs_usuario_configExibirNotificacaoElementosQuebradosSchema,
	exibir_notificacao_logins_sem_projeto:
		fiberdocs_usuario_configExibirNotificacaoLoginsSemProjetoSchema,
	exibir_notificacao_onus_sem_projeto:
		fiberdocs_usuario_configExibirNotificacaoOnusSemProjetoSchema,
	ferramenta_agrupamento: fiberdocs_usuario_configFerramentaAgrupamentoSchema,
	ferramenta_ima: fiberdocs_usuario_configFerramentaImaSchema,
	json_dicas: z.string(),
	json_novidades: z.string(),
	json_novidades_contextuais: z.string(),
	json_tutoriais: z.string(),
	logins_sem_projeto: fiberdocs_usuario_configLoginsSemProjetoSchema,
	menu_inicial: fiberdocs_usuario_configMenuInicialSchema,
	overlay_exibicao: fiberdocs_usuario_configOverlayExibicaoSchema,
	projetos_fixados: z.string(),
	renderizacao_de_elementos:
		fiberdocs_usuario_configRenderizacaoDeElementosSchema,
	tempo_atualizacao_logins: z.number(),
	ultima_melhoria_vista: z.number(),
	user_id: z.number(),
	versao_update_estilos_padrao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fiberdocs_usuario_configSchema =
	fiberdocs_usuario_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fiberdocs_usuario_configCreateSchema =
	fiberdocs_usuario_configSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fiberdocs_usuario_configUpdateSchema =
	fiberdocs_usuario_configCreateSchema.partial();
