/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_coresPadraoEstiloSchema } from "./labels";

export const CRM_CORES_TABLE_NAME = "crm_cores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_coresBaseSchema = z.object({
	id: z.number(),
	agendamento_atrasado: z.string(),
	agendamento_hoje: z.string(),
	agendamento_padrao: z.string(),
	agendamento_sem_agendamento: z.string(),
	agendamento_uma_semana: z.string(),
	ativo: z.string(),
	autenticacao_hotspot: z.string(),
	autenticacao_ipoe: z.string(),
	autenticacao_ipxmac: z.string(),
	autenticacao_pppoe: z.string(),
	autenticacao_vlan: z.string(),
	cadastro_hoje: z.string(),
	cadastro_mais_uma_semana_atras: z.string(),
	cadastro_ontem: z.string(),
	cadastro_ultimos_quinze_dias: z.string(),
	cadastro_uma_semana_atras: z.string(),
	contrato_ativo: z.string(),
	contrato_desistiu: z.string(),
	contrato_inativo: z.string(),
	contrato_maior_um: z.string(),
	contrato_negativo: z.string(),
	contrato_pre_contrato: z.string(),
	contrato_sem_contrato: z.string(),
	contrato_status_aguardando_assinatura: z.string(),
	contrato_status_ativo: z.string(),
	contrato_status_bloequeado: z.string(),
	contrato_status_desativado: z.string(),
	contrato_status_financeiro_atraso: z.string(),
	contrato_todos_inativos: z.string(),
	financeiro_bloqueio: z.string(),
	financeiro_financeiro_atrasado: z.string(),
	financeiro_financeiro_em_dia: z.string(),
	financeiro_sem_financeiro: z.string(),
	inativo: z.string(),
	lead_nao: z.string(),
	lead_sim: z.string(),
	nome_estilo: z.string(),
	nove_a_x_portas_disp: z.string(),
	offline: z.string(),
	online: z.string(),
	origem_sistema: z.string(),
	origem_sistema_negociacao: z.string(),
	origem_sistema_prospect: z.string(),
	origem_site: z.string(),
	origem_viabilidade_negociacao: z.string(),
	origem_viabilidade_prospect: z.string(),
	padrao_estilo: crm_coresPadraoEstiloSchema,
	pessoa_estrangeira: z.string(),
	pessoa_fisica: z.string(),
	pessoa_juridica: z.string(),
	quatro_a_oito_portas_disp: z.string(),
	status_abortamos: z.string(),
	status_acesso_assinatura: z.string(),
	status_acesso_ativo: z.string(),
	status_acesso_atraso: z.string(),
	status_acesso_bloqueio: z.string(),
	status_acesso_desativado: z.string(),
	status_apresentacao: z.string(),
	status_negociacao: z.string(),
	status_novo: z.string(),
	status_perdemos: z.string(),
	status_sem_porta_disponivel: z.string(),
	status_sem_viabilidade: z.string(),
	status_sondagem: z.string(),
	status_vencemos: z.string(),
	tecnologia_24: z.string(),
	tecnologia_58: z.string(),
	tecnologia_adsl: z.string(),
	tecnologia_cabo: z.string(),
	tecnologia_fibra: z.string(),
	tipo_cliente: z.string(),
	tipo_prospeccao: z.string(),
	todas_portas_disp: z.string(),
	um_a_tres_portas_disp: z.string(),
	viabilidade_nao: z.string(),
	viabilidade_sim: z.string(),
	zero_portas_disp: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_coresSchema = crm_coresBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_coresCreateSchema = crm_coresSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_coresUpdateSchema = crm_coresCreateSchema.partial();
