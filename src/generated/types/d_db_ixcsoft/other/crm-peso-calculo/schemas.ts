/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_peso_calculoBloqueioDeEnderecoSchema,
	crm_peso_calculoFeriadosFdsDispAgendamentoSchema,
	crm_peso_calculoHabilitaCalculoVelocidadeSchema,
	crm_peso_calculoInserirFiltrosPadraoSchema,
	crm_peso_calculoPadraoCelularFrequenciaSchema,
	crm_peso_calculoPadraoComputadorFrequenciaSchema,
	crm_peso_calculoPadraoConsoleFrequenciaSchema,
	crm_peso_calculoPadraoPessoaFrequenciaSchema,
	crm_peso_calculoPadraoTvFrequenciaSchema,
	crm_peso_calculoPodeUtilizarV1Schema,
	crm_peso_calculoVersaoViabilidadeSchema,
} from "./labels";

export const CRM_PESO_CALCULO_TABLE_NAME = "crm_peso_calculo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_peso_calculoBaseSchema = z.object({
	id: z.number(),
	assunto_negociacao: z.number(),
	bloqueio_de_endereco: crm_peso_calculoBloqueioDeEnderecoSchema,
	celular_diario: z.string(),
	celular_peso: z.string(),
	celular_raro: z.string(),
	celular_semanal: z.string(),
	computador_diario: z.string(),
	computador_peso: z.string(),
	computador_raro: z.string(),
	computador_semanal: z.string(),
	console_diario: z.string(),
	console_peso: z.string(),
	console_raro: z.string(),
	console_semanal: z.string(),
	cor_botoes: z.string(),
	cor_topo: z.string(),
	email_comercial: z.string(),
	feriados_fds_disp_agendamento:
		crm_peso_calculoFeriadosFdsDispAgendamentoSchema,
	google_tag_manager: z.string(),
	habilita_calculo_velocidade: crm_peso_calculoHabilitaCalculoVelocidadeSchema,
	horario_manha: z.string(),
	horario_noite: z.string(),
	horario_tarde: z.string(),
	id_filial_viabilidade: z.number(),
	id_smtp: z.number(),
	inserir_filtros_padrao: crm_peso_calculoInserirFiltrosPadraoSchema,
	limite_os_dia: z.number(),
	limite_os_noite: z.number(),
	limite_os_tarde: z.number(),
	link_messenger: z.string(),
	link_wpp: z.string(),
	logotipo_marca: z.string(),
	mensagem_padrao_contato: z.string(),
	numero_telefone: z.string(),
	padrao_celular: z.string(),
	padrao_celular_frequencia: crm_peso_calculoPadraoCelularFrequenciaSchema,
	padrao_computador: z.string(),
	padrao_computador_frequencia:
		crm_peso_calculoPadraoComputadorFrequenciaSchema,
	padrao_console: z.string(),
	padrao_console_frequencia: crm_peso_calculoPadraoConsoleFrequenciaSchema,
	padrao_pessoa: z.string(),
	padrao_pessoa_frequencia: crm_peso_calculoPadraoPessoaFrequenciaSchema,
	padrao_tv: z.string(),
	padrao_tv_frequencia: crm_peso_calculoPadraoTvFrequenciaSchema,
	pessoa_diario: z.string(),
	pessoa_peso: z.string(),
	pessoa_raro: z.string(),
	pessoa_semanal: z.string(),
	pode_utilizar_v1: crm_peso_calculoPodeUtilizarV1Schema,
	politica_privacidade: z.string(),
	processo_negociacao: z.number(),
	qtd_dias_disponiveis_agendamento: z.number(),
	quantidade_visitas: z.number(),
	site_direcionamento: z.string(),
	tv_diario: z.string(),
	tv_peso: z.string(),
	tv_raro: z.string(),
	tv_semanal: z.string(),
	url_servidor_viabilidade: z.string(),
	utiliza_servidor_externo: z.number(),
	versao_viabilidade: crm_peso_calculoVersaoViabilidadeSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_peso_calculoSchema = crm_peso_calculoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_peso_calculoCreateSchema = crm_peso_calculoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_peso_calculoUpdateSchema =
	crm_peso_calculoCreateSchema.partial();
