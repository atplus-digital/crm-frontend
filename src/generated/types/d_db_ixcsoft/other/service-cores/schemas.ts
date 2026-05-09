/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SERVICE_CORES_TABLE_NAME = "service_cores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const service_coresBaseSchema = z.object({
	id: z.number(),
	agendamento_atrasado: z.string(),
	agendamento_hoje: z.string(),
	agendamento_mais_uma_semana: z.string(),
	agendamento_sem_agendamento: z.string(),
	agendamento_uma_semana: z.string(),
	ativo_ativo: z.string(),
	ativo_inativo: z.string(),
	autenticacao_hotspot: z.string(),
	autenticacao_ipoe: z.string(),
	autenticacao_ipxmac: z.string(),
	autenticacao_pppoe: z.string(),
	autenticacao_vlan: z.string(),
	contrato_sem_contrato: z.string(),
	contrato_todos_inativos: z.string(),
	contrato_um_mais_ativos: z.string(),
	desconexoes_dia_ate_duas_desconexoes: z.string(),
	desconexoes_dia_entre_seis_e_dez_desconexoes: z.string(),
	desconexoes_dia_entre_tres_e_cinco_desconexoes: z.string(),
	desconexoes_dia_mais_dez_desconexoes: z.string(),
	desconexoes_dia_todos_status: z.string(),
	financeiro_atrasado: z.string(),
	financeiro_em_dia: z.string(),
	financeiro_sem_financeiro: z.string(),
	melhor_horario_manha: z.string(),
	melhor_horario_noite: z.string(),
	melhor_horario_qualquer: z.string(),
	melhor_horario_tarde: z.string(),
	negociacao_abortamos: z.string(),
	negociacao_apresentacao: z.string(),
	negociacao_negociando: z.string(),
	negociacao_novo: z.string(),
	negociacao_perdemos: z.string(),
	negociacao_sem_porta: z.string(),
	negociacao_sem_viabilidade: z.string(),
	negociacao_sondagem: z.string(),
	negociacao_vencemos: z.string(),
	online_offline: z.string(),
	online_online: z.string(),
	online_sem_status: z.string(),
	prioridade_alta: z.string(),
	prioridade_baixa: z.string(),
	prioridade_critica: z.string(),
	prioridade_normal: z.string(),
	sem_acesso_com_conexao: z.string(),
	sem_acesso_hoje: z.string(),
	sem_acesso_mais_duas_semanas: z.string(),
	sem_acesso_ontem: z.string(),
	sem_acesso_ultima_semana: z.string(),
	sem_acesso_ultimas_duas_semanas: z.string(),
	sem_acesso_ultimos_tres_dias: z.string(),
	sla_atencao: z.string(),
	sla_estourado: z.string(),
	sla_no_prazo: z.string(),
	sla_perto_fim_prazo: z.string(),
	sla_quase_estourado: z.string(),
	status_aberto: z.string(),
	status_agendado: z.string(),
	status_analise: z.string(),
	status_assumida: z.string(),
	status_contratos_aguardando_assinatura: z.string(),
	status_contratos_ativo: z.string(),
	status_contratos_bloqueio: z.string(),
	status_contratos_desativado: z.string(),
	status_contratos_financeiro_atraso: z.string(),
	status_deslocamento: z.string(),
	status_encaminhada: z.string(),
	status_execucao: z.string(),
	status_finalizado: z.string(),
	status_reagendar: z.string(),
	tempo_reconexao_ate_um_minuto: z.string(),
	tempo_reconexao_de_tres_a_oito_minutos: z.string(),
	tempo_reconexao_de_um_a_tres_minutos: z.string(),
	tempo_reconexao_mais_oito_minutos: z.string(),
	tempo_reconexao_sem_reconexao: z.string(),
	tipo_pessoa_estrangeiro: z.string(),
	tipo_pessoa_fisica: z.string(),
	tipo_pessoa_juridica: z.string(),
	transmissao_24: z.string(),
	transmissao_58: z.string(),
	transmissao_adsl: z.string(),
	transmissao_cabo: z.string(),
	transmissao_fibra: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const service_coresSchema = service_coresBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const service_coresCreateSchema = service_coresSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const service_coresUpdateSchema = service_coresCreateSchema.partial();
