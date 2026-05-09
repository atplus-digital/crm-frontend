/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_negociacoesAcessoAutomaticoCentralSchema,
	crm_negociacoesAlertaSchema,
	crm_negociacoesAssinaturaDigitalSchema,
	crm_negociacoesAutenticacaoSchema,
	crm_negociacoesAutoViabilidadeSchema,
	crm_negociacoesConsideraEnderecoClienteSchema,
	crm_negociacoesInserirAcessoSchema,
	crm_negociacoesInserirAtendimentoSchema,
	crm_negociacoesInserirContratoSchema,
	crm_negociacoesInserirTarefaSchema,
	crm_negociacoesMelhorHorarioReservaSchema,
	crm_negociacoesMoradiaNegociacaoSchema,
	crm_negociacoesOrigemSchema,
	crm_negociacoesPrioridadeFalhaSchema,
	crm_negociacoesPrioridadeSchema,
	crm_negociacoesStatusSchema,
	crm_negociacoesTipoConexaoMapaSchema,
	crm_negociacoesTipoLocalidadeNegociacaoSchema,
} from "./labels";

export const CRM_NEGOCIACOES_TABLE_NAME = "crm_negociacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_negociacoesBaseSchema = z.object({
	id: z.number(),
	acesso_automatico_central: crm_negociacoesAcessoAutomaticoCentralSchema,
	alerta: crm_negociacoesAlertaSchema,
	apartamento_negociacao: z.string(),
	assinatura_digital: crm_negociacoesAssinaturaDigitalSchema,
	autenticacao: crm_negociacoesAutenticacaoSchema,
	auto_viabilidade: crm_negociacoesAutoViabilidadeSchema,
	bairro_negociacao: z.string(),
	bloco_negociacao: z.string(),
	cep_negociacao: z.string(),
	cidade_negociacao: z.number(),
	cif_negociacao: z.string(),
	complemento_negociacao: z.string(),
	considera_endereco_cliente: crm_negociacoesConsideraEnderecoClienteSchema,
	criado_por: z.number(),
	data_fechamento: z.string(),
	data_inicio: z.string(),
	data_pausado_ate: z.string(),
	data_pausado_em: z.string(),
	data_perdemos: z.string(),
	data_reservada: z.string(),
	data_vencemos: z.string(),
	descricao: z.string(),
	endereco_negociacao: z.string(),
	fidelidade: z.number(),
	hora_inicio: z.string(),
	hotsite_acesso: z.number(),
	hotsite_email: z.string(),
	hotsite_senha: z.string(),
	id_assunto: z.number(),
	id_assunto_falha: z.number(),
	id_caixa_ftth: z.number(),
	id_campanha: z.number(),
	id_canal_origem: z.number(),
	id_cliente: z.number(),
	id_concorrente: z.number(),
	id_condicoes_pagamento: z.number(),
	id_condominio_negociacao: z.number(),
	id_contato: z.number(),
	id_contrato: z.number(),
	id_contrato_prospect: z.number(),
	id_estagio: z.number(),
	id_estagio_anterior: z.number(),
	id_filial: z.number(),
	id_funil: z.number(),
	id_grupo: z.number(),
	id_integracao: z.number(),
	id_login: z.number(),
	id_modelo_contrato: z.number(),
	id_oss_chamado: z.number(),
	id_perfil: z.number(),
	id_plano: z.number(),
	id_plano_negocio: z.number(),
	id_responsavel: z.number(),
	id_responsavel_atendimento: z.number(),
	id_responsavel_atendimento_falha: z.number(),
	id_segmento: z.number(),
	id_tipo_agendamento: z.number(),
	id_tipo_cobranca: z.number(),
	id_vendedor_ativ: z.number(),
	id_wfl_processo: z.number(),
	id_wfl_processo_falha: z.number(),
	inserir_acesso: crm_negociacoesInserirAcessoSchema,
	inserir_atendimento: crm_negociacoesInserirAtendimentoSchema,
	inserir_contrato: crm_negociacoesInserirContratoSchema,
	inserir_tarefa: crm_negociacoesInserirTarefaSchema,
	latitude_negociacao: z.string(),
	login: z.string(),
	longitude_negociacao: z.string(),
	melhor_horario_reserva: crm_negociacoesMelhorHorarioReservaSchema,
	mensagem_falha: z.string(),
	menssagem: z.string(),
	moradia_negociacao: crm_negociacoesMoradiaNegociacaoSchema,
	numero_negociacao: z.string(),
	obs: z.string(),
	operador_neutro: z.number(),
	ordem_kanban: z.number(),
	origem: crm_negociacoesOrigemSchema,
	pacote_integracao: z.string(),
	pipe_id: z.number(),
	porcentagem_ativacao_empresa: z.number(),
	porcentagem_ativacao_parceiro: z.number(),
	porta_ftth: z.number(),
	previsao_fechamento: z.string(),
	prioridade: crm_negociacoesPrioridadeSchema,
	prioridade_falha: crm_negociacoesPrioridadeFalhaSchema,
	referencia_negociacao: z.string(),
	senha: z.string(),
	service_type: z.string(),
	status: crm_negociacoesStatusSchema,
	substatus: z.number(),
	tipo_cliente: z.number(),
	tipo_conexao_mapa: crm_negociacoesTipoConexaoMapaSchema,
	tipo_localidade_negociacao: crm_negociacoesTipoLocalidadeNegociacaoSchema,
	uf_negociacao: z.number(),
	ultima_atualizacao: z.string(),
	valor_ativacao_empresa: z.number(),
	valor_ativacao_parceiro: z.number(),
	valor_fixo: z.number(),
	valor_mensal: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_negociacoesSchema = crm_negociacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_negociacoesCreateSchema = crm_negociacoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_negociacoesUpdateSchema =
	crm_negociacoesCreateSchema.partial();
