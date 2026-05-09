/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	usuariosAcessoWebserviceSchema,
	usuariosAdministradorKanbanSchema,
	usuariosCrmFiltraVendedorSchema,
	usuariosDescParcAtrasoSchema,
	usuariosEnviarMonitoramentoHostSchema,
	usuariosEnviarNotificacaoBackupSchema,
	usuariosFiltraColaboradorQuadroKanbanSchema,
	usuariosFiltraDepartamentoTicketSchema,
	usuariosFiltraFuncionarioSchema,
	usuariosFiltraFuncionarioTicketSchema,
	usuariosFiltraSetorSchema,
	usuariosFinalizarOsOutroSetorSchema,
	usuariosHelpmodeEnabledSchema,
	usuariosInmapFiltraVendedorSchema,
	usuariosLancamentosDiaAtualSchema,
	usuariosLanguageSchema,
	usuariosModeDensitySchema,
	usuariosMostrarOsSemFuncionarioSchema,
	usuariosMostrarTicketSemFuncionarioSchema,
	usuariosPagamentosDiaAtualSchema,
	usuariosPermiteAcessoIxcMobileSchema,
	usuariosPermiteAlterarComunicacaoFnApagarSchema,
	usuariosPermiteInutilizarPatrimonioSchema,
	usuariosPermiteVerDiferencaSchema,
	usuariosPermitirAlterarVersaoChavesSchema,
	usuariosRecebimentosDiaAtualSchema,
	usuariosSecretActiveSchema,
	usuariosStatusSchema,
	usuariosTemplateSchema,
	usuariosTipoAcessoSchema,
	usuariosTipoAlcadaSchema,
	usuariosUserCallcenterSchema,
	usuariosVersaoFiberdocsSchema,
} from "./labels";

export const USUARIOS_TABLE_NAME = "usuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuariosBaseSchema = z.object({
	id: z.number(),
	acesso_webservice: usuariosAcessoWebserviceSchema,
	administrador_kanban: usuariosAdministradorKanbanSchema,
	alter_passwd_date: z.string(),
	caixa_fn_receber: z.number(),
	callcenter: z.string(),
	crm_filtra_vendedor: usuariosCrmFiltraVendedorSchema,
	desc_max_monetario: z.number(),
	desc_max_recebimento: z.number(),
	desc_max_renegociacao: z.number(),
	desc_max_venda: z.number(),
	desc_parc_atraso: usuariosDescParcAtrasoSchema,
	email: z.string(),
	email_verified: z.number(),
	enviar_monitoramento_host: usuariosEnviarMonitoramentoHostSchema,
	enviar_notificacao_backup: usuariosEnviarNotificacaoBackupSchema,
	filtra_colaborador_quadro_kanban: usuariosFiltraColaboradorQuadroKanbanSchema,
	filtra_departamento_ticket: usuariosFiltraDepartamentoTicketSchema,
	filtra_funcionario: usuariosFiltraFuncionarioSchema,
	filtra_funcionario_ticket: usuariosFiltraFuncionarioTicketSchema,
	filtra_setor: usuariosFiltraSetorSchema,
	filtrar_plano_venda_filial_contrato: z.string(),
	finalizar_os_outro_setor: usuariosFinalizarOsOutroSetorSchema,
	funcionario: z.number(),
	helpmode_enabled: usuariosHelpmodeEnabledSchema,
	id_caixa: z.number(),
	id_grupo: z.number(),
	imagem: z.string(),
	inmap_filtra_vendedor: usuariosInmapFiltraVendedorSchema,
	is_valid_tfa: z.number(),
	lancamentos_dia_atual: usuariosLancamentosDiaAtualSchema,
	language: usuariosLanguageSchema,
	mode_density: usuariosModeDensitySchema,
	mostrar_os_sem_funcionario: usuariosMostrarOsSemFuncionarioSchema,
	mostrar_ticket_sem_funcionario: usuariosMostrarTicketSemFuncionarioSchema,
	nome: z.string(),
	pagamentos_dia_atual: usuariosPagamentosDiaAtualSchema,
	permite_acesso_ixc_mobile: usuariosPermiteAcessoIxcMobileSchema,
	permite_alterar_comunicacao_fn_apagar:
		usuariosPermiteAlterarComunicacaoFnApagarSchema,
	permite_inutilizar_patrimonio: usuariosPermiteInutilizarPatrimonioSchema,
	permite_ver_diferenca: usuariosPermiteVerDiferencaSchema,
	permitir_alterar_versao_chaves: usuariosPermitirAlterarVersaoChavesSchema,
	qtde_liberacoes: z.number(),
	recebimentos_dia_atual: usuariosRecebimentosDiaAtualSchema,
	recovery_email: z.string(),
	scheme: z.string(),
	secret_active: usuariosSecretActiveSchema,
	secret_code: z.string(),
	secret_url: z.string(),
	senha: z.string(),
	sms_verified: z.number(),
	status: usuariosStatusSchema,
	telefone: z.string(),
	template: usuariosTemplateSchema,
	timeline_click_count: z.number(),
	tipo_acesso: usuariosTipoAcessoSchema,
	tipo_alcada: usuariosTipoAlcadaSchema,
	token_inmapservice: z.string(),
	token_looker_generated_at: z.string(),
	token_push: z.string(),
	token_verified: z.string(),
	token_webservice: z.string(),
	user_callcenter: usuariosUserCallcenterSchema,
	vendedor_padrao: z.number(),
	versao_fiberdocs: usuariosVersaoFiberdocsSchema,
	workflow_click_count: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuariosSchema = usuariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuariosCreateSchema = usuariosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuariosUpdateSchema = usuariosCreateSchema.partial();
