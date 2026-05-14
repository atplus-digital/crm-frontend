/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMCORES_FIELD_LABELS = {
	agendamento_atrasado: "agendamento_atrasado",
	agendamento_hoje: "agendamento_hoje",
	agendamento_padrao: "agendamento_padrao",
	agendamento_sem_agendamento: "agendamento_sem_agendamento",
	agendamento_uma_semana: "agendamento_uma_semana",
	ativo: "ativo",
	autenticacao_hotspot: "autenticacao_hotspot",
	autenticacao_ipoe: "autenticacao_ipoe",
	autenticacao_ipxmac: "autenticacao_ipxmac",
	autenticacao_pppoe: "autenticacao_pppoe",
	autenticacao_vlan: "autenticacao_vlan",
	cadastro_hoje: "cadastro_hoje",
	cadastro_mais_uma_semana_atras: "cadastro_mais_uma_semana_atras",
	cadastro_ontem: "cadastro_ontem",
	cadastro_ultimos_quinze_dias: "cadastro_ultimos_quinze_dias",
	cadastro_uma_semana_atras: "cadastro_uma_semana_atras",
	contrato_ativo: "contrato_ativo",
	contrato_desistiu: "contrato_desistiu",
	contrato_inativo: "contrato_inativo",
	contrato_maior_um: "contrato_maior_um",
	contrato_negativo: "contrato_negativo",
	contrato_pre_contrato: "contrato_pre_contrato",
	contrato_sem_contrato: "contrato_sem_contrato",
	contrato_status_aguardando_assinatura:
		"contrato_status_aguardando_assinatura",
	contrato_status_ativo: "contrato_status_ativo",
	contrato_status_bloequeado: "contrato_status_bloequeado",
	contrato_status_desativado: "contrato_status_desativado",
	contrato_status_financeiro_atraso: "contrato_status_financeiro_atraso",
	contrato_todos_inativos: "contrato_todos_inativos",
	financeiro_bloqueio: "financeiro_bloqueio",
	financeiro_financeiro_atrasado: "financeiro_financeiro_atrasado",
	financeiro_financeiro_em_dia: "financeiro_financeiro_em_dia",
	financeiro_sem_financeiro: "financeiro_sem_financeiro",
	id: "id",
	inativo: "inativo",
	lead_nao: "lead_nao",
	lead_sim: "lead_sim",
	nome_estilo: "nome_estilo",
	nove_a_x_portas_disp: "nove_a_x_portas_disp",
	offline: "offline",
	online: "online",
	origem_sistema: "origem_sistema",
	origem_sistema_negociacao: "origem_sistema_negociacao",
	origem_sistema_prospect: "origem_sistema_prospect",
	origem_site: "origem_site",
	origem_viabilidade_negociacao: "origem_viabilidade_negociacao",
	origem_viabilidade_prospect: "origem_viabilidade_prospect",
	padrao_estilo: "padrao_estilo",
	pessoa_estrangeira: "pessoa_estrangeira",
	pessoa_fisica: "pessoa_fisica",
	pessoa_juridica: "pessoa_juridica",
	quatro_a_oito_portas_disp: "quatro_a_oito_portas_disp",
	status_abortamos: "status_abortamos",
	status_acesso_assinatura: "status_acesso_assinatura",
	status_acesso_ativo: "status_acesso_ativo",
	status_acesso_atraso: "status_acesso_atraso",
	status_acesso_bloqueio: "status_acesso_bloqueio",
	status_acesso_desativado: "status_acesso_desativado",
	status_apresentacao: "status_apresentacao",
	status_negociacao: "status_negociacao",
	status_novo: "status_novo",
	status_perdemos: "status_perdemos",
	status_sem_porta_disponivel: "status_sem_porta_disponivel",
	status_sem_viabilidade: "status_sem_viabilidade",
	status_sondagem: "status_sondagem",
	status_vencemos: "status_vencemos",
	tecnologia_24: "tecnologia_24",
	tecnologia_58: "tecnologia_58",
	tecnologia_adsl: "tecnologia_adsl",
	tecnologia_cabo: "tecnologia_cabo",
	tecnologia_fibra: "tecnologia_fibra",
	tipo_cliente: "tipo_cliente",
	tipo_prospeccao: "tipo_prospeccao",
	todas_portas_disp: "todas_portas_disp",
	um_a_tres_portas_disp: "um_a_tres_portas_disp",
	viabilidade_nao: "viabilidade_nao",
	viabilidade_sim: "viabilidade_sim",
	zero_portas_disp: "zero_portas_disp",
} as const;

export const CRMCORES_PADRAOESTILO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_coresPadraoEstiloSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao_estilo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmCoresPadraoEstilo = z.infer<typeof crm_coresPadraoEstiloSchema>;
