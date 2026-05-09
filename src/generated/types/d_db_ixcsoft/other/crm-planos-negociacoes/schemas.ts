/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_planos_negociacoesAtivoSchema,
	crm_planos_negociacoesAutenticacaoSchema,
	crm_planos_negociacoesInserirAcessoSchema,
	crm_planos_negociacoesInserirAtendimentoSchema,
	crm_planos_negociacoesInserirContratoSchema,
	crm_planos_negociacoesInserirTarefaSchema,
	crm_planos_negociacoesPrioridadeSchema,
	crm_planos_negociacoesTipoConexaoMapaSchema,
	crm_planos_negociacoesViabilidadePorCaixaSchema,
} from "./labels";

export const CRM_PLANOS_NEGOCIACOES_TABLE_NAME = "crm_planos_negociacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_planos_negociacoesBaseSchema = z.object({
	id: z.number(),
	ativo: crm_planos_negociacoesAtivoSchema,
	autenticacao: crm_planos_negociacoesAutenticacaoSchema,
	contem_no_plano: z.string(),
	cor_mapa: z.string(),
	desconto_fidelidade: z.number(),
	descricao: z.string(),
	fidelidade: z.number(),
	id_assunto: z.number(),
	id_campanha: z.number(),
	id_estagio: z.number(),
	id_filial: z.number(),
	id_funil: z.number(),
	id_grupo: z.number(),
	id_modelo_contrato: z.number(),
	id_plano: z.number(),
	id_tipo_agendamento: z.number(),
	id_tipo_cobranca: z.number(),
	id_wfl_processo: z.number(),
	inserir_acesso: crm_planos_negociacoesInserirAcessoSchema,
	inserir_atendimento: crm_planos_negociacoesInserirAtendimentoSchema,
	inserir_contrato: crm_planos_negociacoesInserirContratoSchema,
	inserir_tarefa: crm_planos_negociacoesInserirTarefaSchema,
	menssagem: z.string(),
	modelo_email: z.number(),
	nao_contem_no_plano: z.string(),
	ordem: z.number(),
	prioridade: crm_planos_negociacoesPrioridadeSchema,
	tipo_conexao_mapa: crm_planos_negociacoesTipoConexaoMapaSchema,
	ultima_atualizacao: z.string(),
	valor_fixo: z.number(),
	valor_mensal: z.number(),
	velocidade: z.number(),
	viabilidade_por_caixa: crm_planos_negociacoesViabilidadePorCaixaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_planos_negociacoesSchema = crm_planos_negociacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_planos_negociacoesCreateSchema =
	crm_planos_negociacoesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_planos_negociacoesUpdateSchema =
	crm_planos_negociacoesCreateSchema.partial();
