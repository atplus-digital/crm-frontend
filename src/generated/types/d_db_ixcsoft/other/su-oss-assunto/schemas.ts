/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	su_oss_assuntoAtivoSchema,
	su_oss_assuntoCardDataReservadaSchema,
	su_oss_assuntoConcederDescontoLoginRegiaoManutencaoSchema,
	su_oss_assuntoConsiderarSlaSchema,
	su_oss_assuntoContaLimiteOsViabSchema,
	su_oss_assuntoContratoObrigatorioSchema,
	su_oss_assuntoDiagnosticoObrigatorioFinalizacaoOsSchema,
	su_oss_assuntoEnderecoPadraoSchema,
	su_oss_assuntoEquipeObrigatoriaFinalizacaoOsSchema,
	su_oss_assuntoExigeComodatoFinalizarOsSchema,
	su_oss_assuntoExigeFotosFinalizacaoOsSchema,
	su_oss_assuntoExigeProdutoFinalizarOsSchema,
	su_oss_assuntoFatSomenteFinalizadaSchema,
	su_oss_assuntoFinalidadeSchema,
	su_oss_assuntoHabilitaAssinaturaClienteSchema,
	su_oss_assuntoHabilitarMiniProjetoSchema,
	su_oss_assuntoImprimirProdServSchema,
	su_oss_assuntoImprimirProdutoSchema,
	su_oss_assuntoImprimirServicoSchema,
	su_oss_assuntoIntegracaoAssinaturaDigitalSchema,
	su_oss_assuntoLocalizacaoObrigatoriaClienteFinalizacaoOsSchema,
	su_oss_assuntoLocalizacaoObrigatoriaLoginFinalizacaoOsSchema,
	su_oss_assuntoLoginObrigatorioSchema,
	su_oss_assuntoMesclarMiniProjetosAoFinalizarOsSchema,
	su_oss_assuntoMostraHotsiteSchema,
	su_oss_assuntoMostrarChecklistAnaliseRiscoSchema,
	su_oss_assuntoMostrarNoServiceSchema,
	su_oss_assuntoObrigarPreenchimentoCanalAtendimentoSchema,
	su_oss_assuntoObrigarProcessoAtendimentoSchema,
	su_oss_assuntoObrigatorioStatusComplementarSchema,
	su_oss_assuntoPermiteAbrirClienteAtrasoSchema,
	su_oss_assuntoPrioridadePadraoSchema,
	su_oss_assuntoSlaApenasDiasUteisSchema,
	su_oss_assuntoTipoCobrancaSchema,
	su_oss_assuntoTipoComissaoSchema,
	su_oss_assuntoTipoSchema,
	su_oss_assuntoValidarChoqueHorariosAgendamentoOsSchema,
	su_oss_assuntoWizArquivosSchema,
	su_oss_assuntoWizAssinaturaObrigSchema,
	su_oss_assuntoWizAssinaturaSchema,
	su_oss_assuntoWizAutorizarOnuSchema,
	su_oss_assuntoWizComodatoSchema,
	su_oss_assuntoWizDadosTecnicosSchema,
	su_oss_assuntoWizLocalizacaoSchema,
	su_oss_assuntoWizMensalidadeSchema,
	su_oss_assuntoWizProdutosSchema,
	su_oss_assuntoWizResumoOsSchema,
	su_oss_assuntoWizServiceMobileAdicionaisSchema,
	su_oss_assuntoWizServiceMobileAnexosSchema,
	su_oss_assuntoWizServiceMobileChecklistSchema,
	su_oss_assuntoWizServiceMobileConfigDispositivoSchema,
	su_oss_assuntoWizServiceMobileEnviarSmsDeslocamentoSchema,
	su_oss_assuntoWizServiceMobileLocSchema,
	su_oss_assuntoWizServiceMobileOnuSchema,
	su_oss_assuntoWizServiceMobileProdImobilizadosSchema,
	su_oss_assuntoWizServiceMobileProdOutrosSchema,
	su_oss_assuntoWizServicoSchema,
} from "./labels";

export const SU_OSS_ASSUNTO_TABLE_NAME = "su_oss_assunto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_assuntoBaseSchema = z.object({
	id: z.number(),
	assunto: z.string(),
	ativo: su_oss_assuntoAtivoSchema,
	card_data_reservada: su_oss_assuntoCardDataReservadaSchema,
	conceder_desconto_login_regiao_manutencao:
		su_oss_assuntoConcederDescontoLoginRegiaoManutencaoSchema,
	considerar_sla: su_oss_assuntoConsiderarSlaSchema,
	conta_limite_os_viab: su_oss_assuntoContaLimiteOsViabSchema,
	contrato_obrigatorio: su_oss_assuntoContratoObrigatorioSchema,
	cor_marcador: z.string(),
	descricao: z.string(),
	diagnostico_obrigatorio_finalizacao_os:
		su_oss_assuntoDiagnosticoObrigatorioFinalizacaoOsSchema,
	endereco_padrao: su_oss_assuntoEnderecoPadraoSchema,
	equipe_obrigatoria_finalizacao_os:
		su_oss_assuntoEquipeObrigatoriaFinalizacaoOsSchema,
	exige_comodato_finalizar_os: su_oss_assuntoExigeComodatoFinalizarOsSchema,
	exige_fotos_finalizacao_os: su_oss_assuntoExigeFotosFinalizacaoOsSchema,
	exige_produto_finalizar_os: su_oss_assuntoExigeProdutoFinalizarOsSchema,
	fat_somente_finalizada: su_oss_assuntoFatSomenteFinalizadaSchema,
	finalidade: su_oss_assuntoFinalidadeSchema,
	formato_endereco: z.string(),
	habilita_assinatura_cliente: su_oss_assuntoHabilitaAssinaturaClienteSchema,
	habilitar_mini_projeto: su_oss_assuntoHabilitarMiniProjetoSchema,
	horario_tempo_assunto: z.number(),
	id_checklist: z.number(),
	id_cond_pag_patrimonio_venda: z.number(),
	id_cond_pag_produto: z.number(),
	id_cond_pag_servico: z.number(),
	id_feedback: z.number(),
	id_msg_omnichannel_deslocamento: z.number(),
	id_oss_kit: z.number(),
	id_processo: z.number(),
	id_questionario: z.number(),
	id_questionario_analise_risco: z.number(),
	id_resposta_padrao: z.number(),
	id_resposta_padrao_finalizacao: z.number(),
	id_sms_deslocamento: z.number(),
	id_tipo_doc_comodato: z.number(),
	id_tipo_doc_patrimonio_venda: z.number(),
	id_tipo_doc_pedido: z.number(),
	id_tipo_doc_servico: z.number(),
	id_vendedor_faturamento: z.number(),
	imprimir_prod_serv: su_oss_assuntoImprimirProdServSchema,
	imprimir_produto: su_oss_assuntoImprimirProdutoSchema,
	imprimir_servico: su_oss_assuntoImprimirServicoSchema,
	integracao_assinatura_digital:
		su_oss_assuntoIntegracaoAssinaturaDigitalSchema,
	layout_impressao: z.number(),
	localizacao_obrigatoria_cliente_finalizacao_os:
		su_oss_assuntoLocalizacaoObrigatoriaClienteFinalizacaoOsSchema,
	localizacao_obrigatoria_login_finalizacao_os:
		su_oss_assuntoLocalizacaoObrigatoriaLoginFinalizacaoOsSchema,
	login_obrigatorio: su_oss_assuntoLoginObrigatorioSchema,
	mesclar_mini_projetos_ao_finalizar_os:
		su_oss_assuntoMesclarMiniProjetosAoFinalizarOsSchema,
	meta_horas_abertura: z.number(),
	meta_horas_agendamento: z.number(),
	metas_horas_abertura_ticket: z.number(),
	modelo_email: z.number(),
	mostra_hotsite: su_oss_assuntoMostraHotsiteSchema,
	mostrar_checklist_analise_risco:
		su_oss_assuntoMostrarChecklistAnaliseRiscoSchema,
	mostrar_no_service: su_oss_assuntoMostrarNoServiceSchema,
	msg_regiao_manutencao: z.string(),
	numero_de_vias: z.number(),
	obrigar_preenchimento_canal_atendimento:
		su_oss_assuntoObrigarPreenchimentoCanalAtendimentoSchema,
	obrigar_processo_atendimento: su_oss_assuntoObrigarProcessoAtendimentoSchema,
	obrigatorio_status_complementar:
		su_oss_assuntoObrigatorioStatusComplementarSchema,
	permite_abrir_cliente_atraso: su_oss_assuntoPermiteAbrirClienteAtrasoSchema,
	prioridade_padrao: su_oss_assuntoPrioridadePadraoSchema,
	quantidade_equipamentos: z.number(),
	quantidade_fotos_finalizacao_os: z.number(),
	quantidade_produtos: z.number(),
	service_mobile_max_parc_adic_serv: z.number(),
	setor_su_oss_chamado: z.number(),
	sla_apenas_dias_uteis: su_oss_assuntoSlaApenasDiasUteisSchema,
	su_oss_modelo_impressao: z.number(),
	tipo: su_oss_assuntoTipoSchema,
	tipo_cobranca: su_oss_assuntoTipoCobrancaSchema,
	tipo_comissao: su_oss_assuntoTipoComissaoSchema,
	ultima_atualizacao: z.string(),
	validar_choque_horarios_agendamento_os:
		su_oss_assuntoValidarChoqueHorariosAgendamentoOsSchema,
	valor_comissao: z.number(),
	wiz_arquivos: su_oss_assuntoWizArquivosSchema,
	wiz_assinatura: su_oss_assuntoWizAssinaturaSchema,
	wiz_assinatura_obrig: su_oss_assuntoWizAssinaturaObrigSchema,
	wiz_autorizar_ONU: su_oss_assuntoWizAutorizarOnuSchema,
	wiz_comodato: su_oss_assuntoWizComodatoSchema,
	wiz_dados_tecnicos: su_oss_assuntoWizDadosTecnicosSchema,
	wiz_localizacao: su_oss_assuntoWizLocalizacaoSchema,
	wiz_mensalidade: su_oss_assuntoWizMensalidadeSchema,
	wiz_produtos: su_oss_assuntoWizProdutosSchema,
	wiz_resumo_os: su_oss_assuntoWizResumoOsSchema,
	wiz_service_mobile_adicionais: su_oss_assuntoWizServiceMobileAdicionaisSchema,
	wiz_service_mobile_anexos: su_oss_assuntoWizServiceMobileAnexosSchema,
	wiz_service_mobile_checklist: su_oss_assuntoWizServiceMobileChecklistSchema,
	wiz_service_mobile_config_dispositivo:
		su_oss_assuntoWizServiceMobileConfigDispositivoSchema,
	wiz_service_mobile_enviar_sms_deslocamento:
		su_oss_assuntoWizServiceMobileEnviarSmsDeslocamentoSchema,
	wiz_service_mobile_loc: su_oss_assuntoWizServiceMobileLocSchema,
	wiz_service_mobile_onu: su_oss_assuntoWizServiceMobileOnuSchema,
	wiz_service_mobile_prod_imobilizados:
		su_oss_assuntoWizServiceMobileProdImobilizadosSchema,
	wiz_service_mobile_prod_outros:
		su_oss_assuntoWizServiceMobileProdOutrosSchema,
	wiz_servico: su_oss_assuntoWizServicoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_assuntoSchema = su_oss_assuntoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_assuntoCreateSchema = su_oss_assuntoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_assuntoUpdateSchema = su_oss_assuntoCreateSchema.partial();
