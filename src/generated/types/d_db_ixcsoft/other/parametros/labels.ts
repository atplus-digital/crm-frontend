/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PARAMETROS_FIELD_LABELS = {
	abrir_venda_boleto_em_remessa: "abrir_venda_boleto_em_remessa",
	aceita_cliente_duplicado: "aceita_cliente_duplicado",
	aceita_fornecedor_duplicado: "aceita_fornecedor_duplicado",
	adiantamento_clientes: "adiantamento_clientes",
	adiantamento_fornecedores: "adiantamento_fornecedores",
	adiciona_titulos_comunicados: "adiciona_titulos_comunicados",
	alterar_plano_sem_cancelar: "alterar_plano_sem_cancelar",
	ambiente: "ambiente",
	aplica_desconto_padrao: "aplica_desconto_padrao",
	aplica_desconto_tempo_bloqueio: "aplica_desconto_tempo_bloqueio",
	ativa_2fa: "ativa_2fa",
	ativa_status_contrato: "ativa_status_contrato",
	ativar_contrato: "ativar_contrato",
	ativar_regua_cobranca: "ativar_regua_cobranca",
	atualizar_endereco_localizacao: "atualizar_endereco_localizacao",
	atualizar_feriados_automaticamente: "atualizar_feriados_automaticamente",
	atualizar_status_contrato_com_pendencia:
		"atualizar_status_contrato_com_pendencia",
	aviso_expiracao: "aviso_expiracao",
	bkp_autenticacao: "bkp_autenticacao",
	bkp_email: "bkp_email",
	bkp_email_recebe: "bkp_email_recebe",
	bkp_email_senha: "bkp_email_senha",
	bkp_porta: "bkp_porta",
	bkp_quant_files: "bkp_quant_files",
	bkp_serv_saida: "bkp_serv_saida",
	bkp_ssl: "bkp_ssl",
	bkp_tempo_arquivo: "bkp_tempo_arquivo",
	bloquear_contrato_sem_ativacao: "bloquear_contrato_sem_ativacao",
	bloqueio_parcial_mvno: "bloqueio_parcial_mvno",
	bloqueio_total_mvno: "bloqueio_total_mvno",
	boleto_permitir_alterar_layout: "boleto_permitir_alterar_layout",
	boleto_permitir_alterar_ordenacao: "boleto_permitir_alterar_ordenacao",
	boletos_capa_contratos: "boletos_capa_contratos",
	calculo_diario_renegociacao: "calculo_diario_renegociacao",
	cancel_finan_valor_igual: "cancel_finan_valor_igual",
	cancelar_finan_ao_cancelar_contrato: "cancelar_finan_ao_cancelar_contrato",
	cancelar_financeiro_rot_cancela_contrato:
		"cancelar_financeiro_rot_cancela_contrato",
	cancelar_notas_lote: "cancelar_notas_lote",
	cancelar_venda_ao_cancelar_titulo: "cancelar_venda_ao_cancelar_titulo",
	carteira_cobranca_filtra: "carteira_cobranca_filtra",
	classe_financeira: "classe_financeira",
	classe_financeira_acrescimo_pagamentos:
		"classe_financeira_acrescimo_pagamentos",
	classe_financeira_acrescimo_recebimentos:
		"classe_financeira_acrescimo_recebimentos",
	classe_financeira_desconto_pagamentos:
		"classe_financeira_desconto_pagamentos",
	classe_financeira_desconto_recebimentos:
		"classe_financeira_desconto_recebimentos",
	cliente_exibir_prospeccao: "cliente_exibir_prospeccao",
	cliente_novo_ativo: "cliente_novo_ativo",
	cobranca_dia_util: "cobranca_dia_util",
	cobranca_padrao: "cobranca_padrao",
	cobranca_repete_passo_dia: "cobranca_repete_passo_dia",
	comportamento_contrato_atualizar_informacoes:
		"comportamento_contrato_atualizar_informacoes",
	cond_pagamento_vencidos_padrao: "cond_pagamento_vencidos_padrao",
	config_nfcom: "config_nfcom",
	considerar_valor_comodato: "considerar_valor_comodato",
	contabilizar_comodato_movimentacao_interna:
		"contabilizar_comodato_movimentacao_interna",
	contrato_ass_digital: "contrato_ass_digital",
	contrato_carteira_permite_filial_diferente:
		"contrato_carteira_permite_filial_diferente",
	contrato_dias_lib_temp: "contrato_dias_lib_temp",
	contrato_hotsite_imp: "contrato_hotsite_imp",
	contrato_permite_alterar_data_canc: "contrato_permite_alterar_data_canc",
	contrato_renovacao_meses: "contrato_renovacao_meses",
	contrato_valida_comodatos: "contrato_valida_comodatos",
	controlar_patrimonio: "controlar_patrimonio",
	controle_estoque: "controle_estoque",
	controle_impressao: "controle_impressao",
	converte_cliente_fornecedor: "converte_cliente_fornecedor",
	cpf_cliente_obrigatorio: "cpf_cliente_obrigatorio",
	cpf_fornecedor_obrigatorio: "cpf_fornecedor_obrigatorio",
	crm_candidato_celular_obrigatorio: "crm_candidato_celular_obrigatorio",
	crm_candidato_cpf_obrigatorio: "crm_candidato_cpf_obrigatorio",
	crm_candidato_email_obrigatorio: "crm_candidato_email_obrigatorio",
	crm_preencher_filial: "crm_preencher_filial",
	dashboard2: "dashboard2",
	data_alteracao_personalizada: "data_alteracao_personalizada",
	data_fechamento: "data_fechamento",
	data_nascimento_cliente_obrigatorio: "data_nascimento_cliente_obrigatorio",
	debug_dbclass: "debug_dbclass",
	delete_invoice_files_after_expiration_days:
		"delete_invoice_files_after_expiration_days",
	desbloqueio_dias: "desbloqueio_dias",
	desbloqueio_liberar_dias: "desbloqueio_liberar_dias",
	desbolqueio_confianca: "desbolqueio_confianca",
	desc_max_recebimento: "desc_max_recebimento",
	desc_max_venda: "desc_max_venda",
	desc_parc_atraso: "desc_parc_atraso",
	descontos_concedidos: "descontos_concedidos",
	descontos_recebidos: "descontos_recebidos",
	descricao: "descricao",
	dfe_entrada_cod_tipo_doc: "dfe_entrada_cod_tipo_doc",
	dia_tarefa_expiracao: "dia_tarefa_expiracao",
	diagnostico_detalhado: "diagnostico_detalhado",
	dias_aviso_encerramento_suspensao: "dias_aviso_encerramento_suspensao",
	dias_bloqueio_parcial_mvno: "dias_bloqueio_parcial_mvno",
	dias_bloqueio_total_mvno: "dias_bloqueio_total_mvno",
	dias_desfazer_renegociacao: "dias_desfazer_renegociacao",
	dias_inadimplentes_rot_cancela_contrato:
		"dias_inadimplentes_rot_cancela_contrato",
	dias_liberar_botao_libera_parc: "dias_liberar_botao_libera_parc",
	distancia_viabilidade: "distancia_viabilidade",
	drive_nomes: "drive_nomes",
	editor_version: "editor_version",
	email_auto_viabilidade: "email_auto_viabilidade",
	email_cobranca_cliente_obrigatorio: "email_cobranca_cliente_obrigatorio",
	email_destino_expiracao: "email_destino_expiracao",
	email_envio_contrato_assinado: "email_envio_contrato_assinado",
	email_notificacao_renegociacao: "email_notificacao_renegociacao",
	emite_nf_21_filial_anatel: "emite_nf_21_filial_anatel",
	emitir_nf_transferencia: "emitir_nf_transferencia",
	endereco_conprovante_pag: "endereco_conprovante_pag",
	endereco_duplicado: "endereco_duplicado",
	entrada_dfe_condicoes_pagamento: "entrada_dfe_condicoes_pagamento",
	entrada_pedido_id_email: "entrada_pedido_id_email",
	entradas_compra_rateio: "entradas_compra_rateio",
	envia_anexo_ativacao_contrato: "envia_anexo_ativacao_contrato",
	envia_email_assinatura_digital_contrato:
		"envia_email_assinatura_digital_contrato",
	envia_email_cancelamento_renegociacao:
		"envia_email_cancelamento_renegociacao",
	enviar_nfse_segundo_plano: "enviar_nfse_segundo_plano",
	enviar_xml_pdf_nfse_automaticamente: "enviar_xml_pdf_nfse_automaticamente",
	estoque_minimo: "estoque_minimo",
	exige_avalista1_cliente: "exige_avalista1_cliente",
	exige_avalista2_cliente: "exige_avalista2_cliente",
	exige_fotos_finalizacao_os: "exige_fotos_finalizacao_os",
	exige_info_foto_marca_dagua_anexos: "exige_info_foto_marca_dagua_anexos",
	exige_logo_filial_marca_dagua_anexos: "exige_logo_filial_marca_dagua_anexos",
	fila_email_gera_anexo: "fila_email_gera_anexo",
	filial_anatel: "filial_anatel",
	filial_atendimento: "filial_atendimento",
	filial_nota_emitida: "filial_nota_emitida",
	filial_pagamento_cpa: "filial_pagamento_cpa",
	filial_recebimento_cre: "filial_recebimento_cre",
	filtra_cliente_ativo_sms_email: "filtra_cliente_ativo_sms_email",
	fin_email: "fin_email",
	fin_email_senha: "fin_email_senha",
	fin_email_texto: "fin_email_texto",
	fin_email_titulo: "fin_email_titulo",
	fin_mot_canc_padrao: "fin_mot_canc_padrao",
	finan_atraso: "finan_atraso",
	finan_atraso_liberacao: "finan_atraso_liberacao",
	forca_envio_boleto_email_massa: "forca_envio_boleto_email_massa",
	formata_mac: "formata_mac",
	formata_serial: "formata_serial",
	formato: "formato",
	formato_imp_nfe: "formato_imp_nfe",
	fornecedor_padrao_gerar_etiqueta: "fornecedor_padrao_gerar_etiqueta",
	frequencia_atualizar_localizacao: "frequencia_atualizar_localizacao",
	ftp_host: "ftp_host",
	ftp_pasta: "ftp_pasta",
	ftp_porta: "ftp_porta",
	ftp_senha: "ftp_senha",
	ftp_tempo_arquivo: "ftp_tempo_arquivo",
	ftp_user: "ftp_user",
	funcao_gera_financeiro: "funcao_gera_financeiro",
	gateway_omnichannel_default: "gateway_omnichannel_default",
	gera_finan_pre_assinatura_digital: "gera_finan_pre_assinatura_digital",
	gera_mil_seiscentos_um_registro: "gera_mil_seiscentos_um_registro",
	gera_por_tipo_doc_produtos: "gera_por_tipo_doc_produtos",
	gera_senha_chars: "gera_senha_chars",
	gera_senha_lenght: "gera_senha_lenght",
	geracao_por_fatura: "geracao_por_fatura",
	gerar_etiquetas_ao_devolver_comodato: "gerar_etiquetas_ao_devolver_comodato",
	gerar_finan_qualquer_tipo: "gerar_finan_qualquer_tipo",
	gerar_financeiro_agrupado: "gerar_financeiro_agrupado",
	gerar_prorata_serv_adic: "gerar_prorata_serv_adic",
	gerar_saida_cli_bloqueado: "gerar_saida_cli_bloqueado",
	hotsite_obrigatorio: "hotsite_obrigatorio",
	id: "id",
	id_almox_padrao: "id_almox_padrao",
	id_atendimento_desativar_contrato_retirada:
		"id_atendimento_desativar_contrato_retirada",
	id_atendimento_prospeccao: "id_atendimento_prospeccao",
	id_centro_custo_rel_centro_custo_categoria_cancelamento_venda:
		"id_centro_custo_rel_centro_custo_categoria_cancelamento_venda",
	id_centro_custo_rel_centro_custo_categoria_descontos_concedidos:
		"id_centro_custo_rel_centro_custo_categoria_descontos_concedidos",
	id_centro_custo_rel_centro_custo_categoria_juros_pagos:
		"id_centro_custo_rel_centro_custo_categoria_juros_pagos",
	id_centro_resultado_rel_centro_custo_categoria_descontos_receb:
		"id_centro_resultado_rel_centro_custo_categoria_descontos_receb",
	id_centro_resultado_rel_centro_custo_categoria_juros_recebidos:
		"id_centro_resultado_rel_centro_custo_categoria_juros_recebidos",
	id_centro_resultado_rel_centro_custo_categoria_renegociacao:
		"id_centro_resultado_rel_centro_custo_categoria_renegociacao",
	id_cond_pag_gera_nf21: "id_cond_pag_gera_nf21",
	id_conta_adto_salario: "id_conta_adto_salario",
	id_conta_cofins_retido: "id_conta_cofins_retido",
	id_conta_csll_retido: "id_conta_csll_retido",
	id_conta_despesa_cambio: "id_conta_despesa_cambio",
	id_conta_inss_retido: "id_conta_inss_retido",
	id_conta_irrf_retido: "id_conta_irrf_retido",
	id_conta_iss_retido: "id_conta_iss_retido",
	id_conta_pis_retido: "id_conta_pis_retido",
	id_conta_receita_cambio: "id_conta_receita_cambio",
	id_conta_receita_voip: "id_conta_receita_voip",
	id_email_aniversario_cliente: "id_email_aniversario_cliente",
	id_email_aniversario_pessoa_juridica: "id_email_aniversario_pessoa_juridica",
	id_email_atendimento_aberto: "id_email_atendimento_aberto",
	id_email_atendimento_execucao: "id_email_atendimento_execucao",
	id_email_atendimento_fianalizado: "id_email_atendimento_fianalizado",
	id_email_atendimento_respondido: "id_email_atendimento_respondido",
	id_email_ativacao_contrato: "id_email_ativacao_contrato",
	id_email_franquia_0: "id_email_franquia_0",
	id_email_franquia_100: "id_email_franquia_100",
	id_email_franquia_50: "id_email_franquia_50",
	id_email_franquia_80: "id_email_franquia_80",
	id_email_os_aberta: "id_email_os_aberta",
	id_email_os_agendada: "id_email_os_agendada",
	id_email_os_em_execucao: "id_email_os_em_execucao",
	id_estagio_obrigatorio: "id_estagio_obrigatorio",
	id_estagio_padrao_negociacao: "id_estagio_padrao_negociacao",
	id_forn_salarios_apagar: "id_forn_salarios_apagar",
	id_funil_padrao_negociacao: "id_funil_padrao_negociacao",
	id_gateway_sms_os: "id_gateway_sms_os",
	id_mensagem_sms_aniversario_cliente: "id_mensagem_sms_aniversario_cliente",
	id_mensagem_sms_aniversario_pessoa_juridica:
		"id_mensagem_sms_aniversario_pessoa_juridica",
	id_modelo_recibo_personalizado: "id_modelo_recibo_personalizado",
	id_mot_cancel_temp_bloq: "id_mot_cancel_temp_bloq",
	id_omnichannel_msg_aniversario: "id_omnichannel_msg_aniversario",
	id_omnichannel_msg_aniversario_pj: "id_omnichannel_msg_aniversario_pj",
	id_oss_desativar_contrato_retirada: "id_oss_desativar_contrato_retirada",
	id_plan_cancelamento_venda: "id_plan_cancelamento_venda",
	id_plan_iss_recolher: "id_plan_iss_recolher",
	id_plan_troco: "id_plan_troco",
	id_planejamento_analitico: "id_planejamento_analitico",
	id_planejamento_analitico_renegociacao:
		"id_planejamento_analitico_renegociacao",
	id_prod_temp_bloq: "id_prod_temp_bloq",
	id_servidor_email: "id_servidor_email",
	id_servidor_email_renegociacao: "id_servidor_email_renegociacao",
	id_servidor_sms: "id_servidor_sms",
	id_smpt_alteracao_carteira_tipo_fatura:
		"id_smpt_alteracao_carteira_tipo_fatura",
	id_smpt_expiracao: "id_smpt_expiracao",
	id_sms_ativacao_contrato: "id_sms_ativacao_contrato",
	id_sms_envio_boleto: "id_sms_envio_boleto",
	id_sms_franquia_0: "id_sms_franquia_0",
	id_sms_franquia_100: "id_sms_franquia_100",
	id_sms_franquia_50: "id_sms_franquia_50",
	id_sms_franquia_80: "id_sms_franquia_80",
	id_smtp_backup: "id_smtp_backup",
	id_smtp_boletos_faturas: "id_smtp_boletos_faturas",
	id_smtp_boletos_faturas_varias: "id_smtp_boletos_faturas_varias",
	id_smtp_comprovante_cartao: "id_smtp_comprovante_cartao",
	id_smtp_fatura_telefone: "id_smtp_fatura_telefone",
	id_smtp_financeiro: "id_smtp_financeiro",
	id_smtp_nfse: "id_smtp_nfse",
	id_smtp_os: "id_smtp_os",
	id_smtp_pix: "id_smtp_pix",
	id_smtp_ticket: "id_smtp_ticket",
	ignorar_areceber_desativar_contrato: "ignorar_areceber_desativar_contrato",
	ignorar_redes_permitidas: "ignorar_redes_permitidas",
	inativa_cadastro_cliente: "inativa_cadastro_cliente",
	incluir_vendedor_negociacao_fat_contrato:
		"incluir_vendedor_negociacao_fat_contrato",
	inserir_responsavel_prospect_negociacao:
		"inserir_responsavel_prospect_negociacao",
	integracao_assinatura_digital: "integracao_assinatura_digital",
	intervalo_dias_consulta_serasa: "intervalo_dias_consulta_serasa",
	intervalo_entre_suspensao: "intervalo_entre_suspensao",
	juros_pagos: "juros_pagos",
	juros_recebidos: "juros_recebidos",
	libera_susp_parc_padrao: "libera_susp_parc_padrao",
	liberacao_bloqueio_manual: "liberacao_bloqueio_manual",
	liberar_pedido_compra: "liberar_pedido_compra",
	liberar_requisicao_compra: "liberar_requisicao_compra",
	liberar_transferencias_confirmacao: "liberar_transferencias_confirmacao",
	limit_consult_nfse: "limit_consult_nfse",
	limit_curl_nfse: "limit_curl_nfse",
	limite_atendimentos_data_reservada: "limite_atendimentos_data_reservada",
	limite_boletos_lote_retorno: "limite_boletos_lote_retorno",
	linguagem: "linguagem",
	login_tipo_transm_24: "login_tipo_transm_24",
	login_tipo_transm_58: "login_tipo_transm_58",
	login_tipo_transm_adsl: "login_tipo_transm_adsl",
	login_tipo_transm_cabo: "login_tipo_transm_cabo",
	login_tipo_transm_fibra: "login_tipo_transm_fibra",
	login_tipo_transm_ldd: "login_tipo_transm_ldd",
	login_tipo_transm_lte: "login_tipo_transm_lte",
	logo_impressao_etiqueta_patrimonio: "logo_impressao_etiqueta_patrimonio",
	manter_vinc_login_contrato_desativado:
		"manter_vinc_login_contrato_desativado",
	maps_azure_key: "maps_azure_key",
	maps_bing_key: "maps_bing_key",
	maps_google_key: "maps_google_key",
	maps_here_key: "maps_here_key",
	maps_here_key_id: "maps_here_key_id",
	maps_map_api: "maps_map_api",
	maps_mapbox_key: "maps_mapbox_key",
	maps_search_api: "maps_search_api",
	marcar_endereco_padrao_cliente: "marcar_endereco_padrao_cliente",
	mascara_planejamento_analitico_finan: "mascara_planejamento_analitico_finan",
	mascara_planejamento_contabil: "mascara_planejamento_contabil",
	mega_deleta_dias: "mega_deleta_dias",
	mega_pasta: "mega_pasta",
	mega_senha: "mega_senha",
	mega_user: "mega_user",
	meta_horas_fechamento_sla: "meta_horas_fechamento_sla",
	metodo_envio_notificacao_suspensao: "metodo_envio_notificacao_suspensao",
	modelo_email_confirmacao_pagamento: "modelo_email_confirmacao_pagamento",
	modelo_email_confirmacao_pagamento_fn_apagar:
		"modelo_email_confirmacao_pagamento_fn_apagar",
	modelo_impressao_etiqueta: "modelo_impressao_etiqueta",
	modelo_sms_confirmacao_pagamento: "modelo_sms_confirmacao_pagamento",
	modelo_sms_confirmacao_pagamento_fn_apagar:
		"modelo_sms_confirmacao_pagamento_fn_apagar",
	modo_execucao_os: "modo_execucao_os",
	moeda: "moeda",
	mostra_atendimento_contrato_i: "mostra_atendimento_contrato_i",
	mostra_central_assinante: "mostra_central_assinante",
	mostra_loop_planejamento: "mostra_loop_planejamento",
	mostrar_acres_proxima_parcela: "mostrar_acres_proxima_parcela",
	mostrar_nao_cobrar: "mostrar_nao_cobrar",
	mostrar_parcela_avulsa: "mostrar_parcela_avulsa",
	mostrar_parcela_unica: "mostrar_parcela_unica",
	motivo_alteracao_plano: "motivo_alteracao_plano",
	motivo_cancelamento: "motivo_cancelamento",
	motivo_cancelamento_padrao: "motivo_cancelamento_padrao",
	motivo_cancelamento_padrao_libera_periodo:
		"motivo_cancelamento_padrao_libera_periodo",
	motivo_cancelamento_padrao_renegociacao:
		"motivo_cancelamento_padrao_renegociacao",
	motivo_cancelamento_tarefa: "motivo_cancelamento_tarefa",
	motivo_inclusao_obrigatorio: "motivo_inclusao_obrigatorio",
	movimenta_comodato_cancelamento_venda:
		"movimenta_comodato_cancelamento_venda",
	msg_configuracao_desbloqueio: "msg_configuracao_desbloqueio",
	msg_confirm_desb_conf: "msg_confirm_desb_conf",
	msg_confirm_libera_susp_parc: "msg_confirm_libera_susp_parc",
	msg_feriado: "msg_feriado",
	msg_padrao_desbloq_conf: "msg_padrao_desbloq_conf",
	msg_restricao_desbloqueio: "msg_restricao_desbloqueio",
	msg_restricao_libera_susp_parc: "msg_restricao_libera_susp_parc",
	msg_suspensao_ativacao: "msg_suspensao_ativacao",
	msg_suspensao_finalizada: "msg_suspensao_finalizada",
	msg_suspensao_pre_encerramento: "msg_suspensao_pre_encerramento",
	new_class_imprime_boleto: "new_class_imprime_boleto",
	nf21_consumo: "nf21_consumo",
	nfce_csc: "nfce_csc",
	nfce_id_token: "nfce_id_token",
	nfce_imprime_produtos: "nfce_imprime_produtos",
	nfe_canhoto: "nfe_canhoto",
	nfe_certificado: "nfe_certificado",
	nfe_chave: "nfe_chave",
	nfe_email: "nfe_email",
	nfe_email_senha: "nfe_email_senha",
	nfe_indsinc: "nfe_indsinc",
	nfe_logo: "nfe_logo",
	nfe_mostrar_debug: "nfe_mostrar_debug",
	nfe_papel: "nfe_papel",
	num_contrato_nf: "num_contrato_nf",
	num_dias_atraso_cob: "num_dias_atraso_cob",
	num_dias_aviso_renovacao_contrato: "num_dias_aviso_renovacao_contrato",
	num_dias_libera_parc: "num_dias_libera_parc",
	numero_lote_ixc: "numero_lote_ixc",
	obriga_whatsapp: "obriga_whatsapp",
	obrigatorio_assunto_atendimento: "obrigatorio_assunto_atendimento",
	origem_endereco_os: "origem_endereco_os",
	os_abrir: "os_abrir",
	os_alterar_setor: "os_alterar_setor",
	os_analise: "os_analise",
	os_assumido: "os_assumido",
	os_carrega_func_auto: "os_carrega_func_auto",
	os_duracao_calendario: "os_duracao_calendario",
	os_execucao: "os_execucao",
	os_finalizada_data_execucao: "os_finalizada_data_execucao",
	os_finalizar: "os_finalizar",
	os_ignorar_filtro_setor_externo: "os_ignorar_filtro_setor_externo",
	os_imp: "os_imp",
	os_permite_abrir_cliente_atraso: "os_permite_abrir_cliente_atraso",
	os_reabrir: "os_reabrir",
	os_reagendamento: "os_reagendamento",
	os_reagendar: "os_reagendar",
	os_reg_mensagem: "os_reg_mensagem",
	padrao_tipo_produtos_plano: "padrao_tipo_produtos_plano",
	pagar_modelo_historico: "pagar_modelo_historico",
	param_libera_temp_quant_dias_apos: "param_libera_temp_quant_dias_apos",
	param_libera_temp_quant_dias_liberado:
		"param_libera_temp_quant_dias_liberado",
	param_libera_temporariamente: "param_libera_temporariamente",
	param_mensagens_atendimento: "param_mensagens_atendimento",
	perm_gerar_nf_cont_cance: "perm_gerar_nf_cont_cance",
	permite_alteracao_data_base: "permite_alteracao_data_base",
	permite_anexar_imagem_galeria: "permite_anexar_imagem_galeria",
	permite_custo_medio_zero: "permite_custo_medio_zero",
	permite_editar_patrimonio: "permite_editar_patrimonio",
	permite_inativar_produto_com_saldo: "permite_inativar_produto_com_saldo",
	permite_informar_filial: "permite_informar_filial",
	permite_num_serie_duplicado: "permite_num_serie_duplicado",
	permite_transf_automatica_filial: "permite_transf_automatica_filial",
	permite_transferencia_automatica: "permite_transferencia_automatica",
	permitir_assumir_prospect_outro_colaborador:
		"permitir_assumir_prospect_outro_colaborador",
	permitir_ativar_bloqueio_automatico_pelas_rotinas:
		"permitir_ativar_bloqueio_automatico_pelas_rotinas",
	permitir_reabrir_atendimento: "permitir_reabrir_atendimento",
	permitir_transf_filial_diferente: "permitir_transf_filial_diferente",
	permitir_vender_patrimonio: "permitir_vender_patrimonio",
	pipe_campo_id_negocios: "pipe_campo_id_negocios",
	pipe_campo_id_organizacoes: "pipe_campo_id_organizacoes",
	pipe_campo_id_pessoas: "pipe_campo_id_pessoas",
	pipe_token: "pipe_token",
	plan_alteracao_contrato: "plan_alteracao_contrato",
	plan_cli_conta: "plan_cli_conta",
	plan_cli_tipo: "plan_cli_tipo",
	plan_forn_conta: "plan_forn_conta",
	plan_forn_tipo: "plan_forn_tipo",
	plan_frete_compra: "plan_frete_compra",
	plan_ipi_compra: "plan_ipi_compra",
	plan_outros_acrescimos: "plan_outros_acrescimos",
	plan_outros_descontos: "plan_outros_descontos",
	plan_prod_tipo: "plan_prod_tipo",
	plan_st_compra: "plan_st_compra",
	planejamento_analitico_nf_transferencia:
		"planejamento_analitico_nf_transferencia",
	porta_ssh: "porta_ssh",
	preco_padrao: "preco_padrao",
	preencher_conta_padrao_usuario_automaticamente:
		"preencher_conta_padrao_usuario_automaticamente",
	preencher_filial_os: "preencher_filial_os",
	preencher_responsavel_atendimento_vencemos:
		"preencher_responsavel_atendimento_vencemos",
	previsao_contas_areceber: "previsao_contas_areceber",
	previsao_saidas: "previsao_saidas",
	prolonga_fidelidade_tempo_suspensao: "prolonga_fidelidade_tempo_suspensao",
	pula_fds_gerar_finan: "pula_fds_gerar_finan",
	quantidade_fotos_finalizacao_os: "quantidade_fotos_finalizacao_os",
	rclone_arquivo_conf: "rclone_arquivo_conf",
	rclone_dir_envio: "rclone_dir_envio",
	rclone_quant_files: "rclone_quant_files",
	rclone_tempo_arquivo: "rclone_tempo_arquivo",
	receita_venda_contratos: "receita_venda_contratos",
	recuperacao_2fa_email: "recuperacao_2fa_email",
	recuperacao_2fa_sms: "recuperacao_2fa_sms",
	regua_cobranca_considera: "regua_cobranca_considera",
	regua_cobranca_envio_dias_uteis: "regua_cobranca_envio_dias_uteis",
	regua_cobranca_notificacao_inativo: "regua_cobranca_notificacao_inativo",
	respeita_bloqueio_automatico: "respeita_bloqueio_automatico",
	retirar_validacao_prop_lote: "retirar_validacao_prop_lote",
	saida_pedido_id_email: "saida_pedido_id_email",
	saidas_sn_fornecedor: "saidas_sn_fornecedor",
	saidas_sn_fpagamento: "saidas_sn_fpagamento",
	saidas_sn_planejamento: "saidas_sn_planejamento",
	salario_base: "salario_base",
	senha_user_voip_obrigatoria: "senha_user_voip_obrigatoria",
	sessao_tempo_limite_segundos: "sessao_tempo_limite_segundos",
	sici_iem1_a: "sici_iem1_a",
	sici_iem1_b: "sici_iem1_b",
	sici_iem1_c: "sici_iem1_c",
	sici_iem1_d: "sici_iem1_d",
	sici_iem1_e: "sici_iem1_e",
	sici_iem1_f: "sici_iem1_f",
	sici_iem1_g: "sici_iem1_g",
	sici_iem2_a: "sici_iem2_a",
	sici_iem2_b: "sici_iem2_b",
	sici_iem2_c: "sici_iem2_c",
	sici_ipl1_a: "sici_ipl1_a",
	sici_ipl1_b: "sici_ipl1_b",
	sici_ipl1_c: "sici_ipl1_c",
	sici_ipl1_d: "sici_ipl1_d",
	sici_ipl2_a: "sici_ipl2_a",
	sici_ipl2_b: "sici_ipl2_b",
	sici_ipl2_c: "sici_ipl2_c",
	sici_ipl2_d: "sici_ipl2_d",
	sla_apenas_dias_uteis: "sla_apenas_dias_uteis",
	smtp_codificacao_utf8: "smtp_codificacao_utf8",
	smtp_envio_email_assinatura_contrato_digital:
		"smtp_envio_email_assinatura_contrato_digital",
	smtp_parametros: "smtp_parametros",
	substatus_obrigatorio_negociacao: "substatus_obrigatorio_negociacao",
	suporte_acesso: "suporte_acesso",
	suporte_atualizar: "suporte_atualizar",
	suspensao_temporaria: "suspensao_temporaria",
	tabela_padrao: "tabela_padrao",
	taxas_ativacao_obrigatorio: "taxas_ativacao_obrigatorio",
	telefone_celular_cliente_obrigatorio: "telefone_celular_cliente_obrigatorio",
	telefone_residencial_cliente_obrigatorio:
		"telefone_residencial_cliente_obrigatorio",
	tempo_max_suspensao: "tempo_max_suspensao",
	tempo_min_suspensao: "tempo_min_suspensao",
	termo_ativa_contrato: "termo_ativa_contrato",
	texto_caixaalta: "texto_caixaalta",
	ticket_aceita_editar_protocolo: "ticket_aceita_editar_protocolo",
	ticket_env_mail_cli: "ticket_env_mail_cli",
	ticket_env_mail_cli_contato: "ticket_env_mail_cli_contato",
	ticket_env_mail_cli_hotsite: "ticket_env_mail_cli_hotsite",
	tipo_cliente_obrigatorio: "tipo_cliente_obrigatorio",
	tipo_del_produto: "tipo_del_produto",
	tipo_doc_prod_obrigatorio: "tipo_doc_prod_obrigatorio",
	tipo_documento_nf_transferencia: "tipo_documento_nf_transferencia",
	tipo_documento_nota_entrada: "tipo_documento_nota_entrada",
	tipo_documento_nota_saida: "tipo_documento_nota_saida",
	tipo_filtro_msg_cliente_aniversariante:
		"tipo_filtro_msg_cliente_aniversariante",
	tipo_filtro_msg_pessoa_juridica: "tipo_filtro_msg_pessoa_juridica",
	tipo_rastreamento: "tipo_rastreamento",
	tipo_retirada_equipamento: "tipo_retirada_equipamento",
	tipo_visualizacao_os_agenda_servicos: "tipo_visualizacao_os_agenda_servicos",
	transferencia_automatica_produto_os: "transferencia_automatica_produto_os",
	ultima_atualizacao: "ultima_atualizacao",
	usa_auditoria_contas_a_pagar: "usa_auditoria_contas_a_pagar",
	usar_contrato_existente_negociacao: "usar_contrato_existente_negociacao",
	usar_contrato_negociacao: "usar_contrato_negociacao",
	use_tax_calculator: "use_tax_calculator",
	utiliza_alerta_expiracao_contrato: "utiliza_alerta_expiracao_contrato",
	utiliza_cobranca_auto: "utiliza_cobranca_auto",
	utiliza_integracao_serasa: "utiliza_integracao_serasa",
	utilizar_circuito: "utilizar_circuito",
	utilizar_tipo_documento_plano_venda: "utilizar_tipo_documento_plano_venda",
	utilizar_utf8_sms: "utilizar_utf8_sms",
	utilizar_utf8_sms_pessoa_juridica: "utilizar_utf8_sms_pessoa_juridica",
	valida_endereco_prospect_vencemos: "valida_endereco_prospect_vencemos",
	validar_choque_horario_agend_compromisso:
		"validar_choque_horario_agend_compromisso",
	validar_os_pendente_desativar_func: "validar_os_pendente_desativar_func",
	validar_periodo_trabalho: "validar_periodo_trabalho",
	valor_movimentacao_produto: "valor_movimentacao_produto",
	vencimento_26_a_31: "vencimento_26_a_31",
	versao_nfe: "versao_nfe",
	voip_dia_base_fatura: "voip_dia_base_fatura",
	voip_id_condicao_pagamento: "voip_id_condicao_pagamento",
	voip_id_produto: "voip_id_produto",
	voip_id_smtp_nota: "voip_id_smtp_nota",
	voip_id_tipo_documento: "voip_id_tipo_documento",
	voip_id_tipo_documento_juridica: "voip_id_tipo_documento_juridica",
	voip_id_vendedor: "voip_id_vendedor",
} as const;

export const PARAMETROS_ABRIRVENDABOLETOEMREMESSA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ACEITACLIENTEDUPLICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ACEITAFORNECEDORDUPLICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ADICIONATITULOSCOMUNICADOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ALTERARPLANOSEMCANCELAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_AMBIENTE_LABELS = {
	P: "P",
	H: "H",
	1: "1",
	2: "2",
} as const;

export const PARAMETROS_APLICADESCONTOPADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_APLICADESCONTOTEMPOBLOQUEIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ATIVA2FA_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const PARAMETROS_ATIVASTATUSCONTRATO_LABELS = {
	M: "M",
	V: "V",
} as const;

export const PARAMETROS_ATIVARCONTRATO_LABELS = {
	A: "A",
	N: "N",
} as const;

export const PARAMETROS_ATIVARREGUACOBRANCA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ATUALIZARENDERECOLOCALIZACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ATUALIZARSTATUSCONTRATOCOMPENDENCIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_AVISOEXPIRACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_BKPAUTENTICACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_BKPSSL_LABELS = {
	S: "S",
	T: "T",
	N: "N",
} as const;

export const PARAMETROS_BLOQUEIOPARCIALMVNO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_BLOQUEIOTOTALMVNO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_BOLETOPERMITIRALTERARLAYOUT_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_BOLETOPERMITIRALTERARORDENACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_BOLETOSCAPACONTRATOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CALCULODIARIORENEGOCIACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CANCELFINANVALORIGUAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CANCELARFINANAOCANCELARCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CANCELARFINANCEIROROTCANCELACONTRATO_LABELS = {
	S: "S",
	N: "N",
	SV: "SV",
} as const;

export const PARAMETROS_CANCELARNOTASLOTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CANCELARVENDAAOCANCELARTITULO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CARTEIRACOBRANCAFILTRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CLASSEFINANCEIRA_LABELS = {
	S: "S",
	N: "N",
	O: "O",
} as const;

export const PARAMETROS_CLIENTEEXIBIRPROSPECCAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CLIENTENOVOATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_COBRANCADIAUTIL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_COBRANCAPADRAO_LABELS = {
	I: "I",
	E: "E",
} as const;

export const PARAMETROS_COBRANCAREPETEPASSODIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_COMPORTAMENTOCONTRATOATUALIZARINFORMACOES_LABELS = {
	M: "M",
	A: "A",
} as const;

export const PARAMETROS_CONFIGNFCOM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CONSIDERARVALORCOMODATO_LABELS = {
	B: "B",
	E: "E",
} as const;

export const PARAMETROS_CONTABILIZARCOMODATOMOVIMENTACAOINTERNA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CONTRATOASSDIGITAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CONTRATOCARTEIRAPERMITEFILIALDIFERENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CONTRATOHOTSITEIMP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CONTRATOPERMITEALTERARDATACANC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CONTRATOVALIDACOMODATOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CONTROLEESTOQUE_LABELS = {
	N: "N",
	B: "B",
	A: "A",
	L: "L",
} as const;

export const PARAMETROS_CONVERTECLIENTEFORNECEDOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CPFCLIENTEOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CPFFORNECEDOROBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CRMCANDIDATOCELULAROBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CRMCANDIDATOCPFOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CRMCANDIDATOEMAILOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_CRMPREENCHERFILIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_DASHBOARD2_LABELS = {
	N: "N",
	S: "S",
} as const;

export const PARAMETROS_DATAALTERACAOPERSONALIZADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_DATANASCIMENTOCLIENTEOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_DESBOLQUEIOCONFIANCA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_DESCPARCATRASO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const PARAMETROS_DIAGNOSTICODETALHADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EDITORVERSION_LABELS = {
	4: "4",
	5: "5",
} as const;

export const PARAMETROS_EMAILAUTOVIABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EMAILCOBRANCACLIENTEOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EMITENF21FILIALANATEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EMITIRNFTRANSFERENCIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ENDERECOCONPROVANTEPAG_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ENDERECODUPLICADO_LABELS = {
	N: "N",
	I: "I",
	A: "A",
} as const;

export const PARAMETROS_ENTRADASCOMPRARATEIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ENVIAANEXOATIVACAOCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ENVIAEMAILASSINATURADIGITALCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ENVIAEMAILCANCELAMENTORENEGOCIACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ENVIARNFSESEGUNDOPLANO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EXIGEAVALISTA1CLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EXIGEAVALISTA2CLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EXIGEFOTOSFINALIZACAOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EXIGEINFOFOTOMARCADAGUAANEXOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_EXIGELOGOFILIALMARCADAGUAANEXOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_FILAEMAILGERAANEXO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_FILIALATENDIMENTO_LABELS = {
	P: "P",
	C: "C",
} as const;

export const PARAMETROS_FILIALNOTAEMITIDA_LABELS = {
	DOC: "DOC",
	COM: "COM",
	DEF: "DEF",
} as const;

export const PARAMETROS_FILIALPAGAMENTOCPA_LABELS = {
	P: "P",
	O: "O",
	C: "C",
} as const;

export const PARAMETROS_FILIALRECEBIMENTOCRE_LABELS = {
	P: "P",
	O: "O",
	C: "C",
} as const;

export const PARAMETROS_FILTRACLIENTEATIVOSMSEMAIL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_FORCAENVIOBOLETOEMAILMASSA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_FORMATAMAC_LABELS = {
	P: "P",
	C: "C",
	N: "N",
} as const;

export const PARAMETROS_FORMATASERIAL_LABELS = {
	C: "C",
	N: "N",
} as const;

export const PARAMETROS_FORMATO_LABELS = {
	R: "R",
	P: "P",
} as const;

export const PARAMETROS_FORMATOIMPNFE_LABELS = {
	1: "1",
	2: "2",
	P: "P",
	L: "L",
} as const;

export const PARAMETROS_FUNCAOGERAFINANCEIRO_LABELS = {
	F: "F",
	C: "C",
} as const;

export const PARAMETROS_GERAFINANPREASSINATURADIGITAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_GERAMILSEISCENTOSUMREGISTRO_LABELS = {
	comp: "comp",
	caixa: "caixa",
} as const;

export const PARAMETROS_GERAPORTIPODOCPRODUTOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_GERACAOPORFATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_GERARETIQUETASAODEVOLVERCOMODATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_GERARFINANQUALQUERTIPO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_GERARFINANCEIROAGRUPADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_GERARPRORATASERVADIC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_GERARSAIDACLIBLOQUEADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_HOTSITEOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_IDESTAGIOOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_IGNORARARECEBERDESATIVARCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_IGNORARREDESPERMITIDAS_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const PARAMETROS_INATIVACADASTROCLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_INCLUIRVENDEDORNEGOCIACAOFATCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_INSERIRRESPONSAVELPROSPECTNEGOCIACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_INTEGRACAOASSINATURADIGITAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LIBERASUSPPARCPADRAO_LABELS = {
	H: "H",
	D: "D",
} as const;

export const PARAMETROS_LIBERACAOBLOQUEIOMANUAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LIBERARPEDIDOCOMPRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LIBERARREQUISICAOCOMPRA_LABELS = {
	N: "N",
	S: "S",
} as const;

export const PARAMETROS_LIBERARTRANSFERENCIASCONFIRMACAO_LABELS = {
	S: "S",
	C: "C",
} as const;

export const PARAMETROS_LOGINTIPOTRANSM24_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LOGINTIPOTRANSM58_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LOGINTIPOTRANSMADSL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LOGINTIPOTRANSMCABO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LOGINTIPOTRANSMFIBRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LOGINTIPOTRANSMLDD_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_LOGINTIPOTRANSMLTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MANTERVINCLOGINCONTRATODESATIVADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MARCARENDERECOPADRAOCLIENTE_LABELS = {
	S: "S",
	N: "N",
	C: "C",
} as const;

export const PARAMETROS_MODOEXECUCAOOS_LABELS = {
	V: "V",
	U: "U",
} as const;

export const PARAMETROS_MOSTRAATENDIMENTOCONTRATOI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MOSTRACENTRALASSINANTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MOSTRALOOPPLANEJAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MOSTRARACRESPROXIMAPARCELA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MOSTRARNAOCOBRAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MOSTRARPARCELAAVULSA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MOSTRARPARCELAUNICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MOTIVOINCLUSAOOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MOVIMENTACOMODATOCANCELAMENTOVENDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_MSGFERIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_NEWCLASSIMPRIMEBOLETO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_NF21CONSUMO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_NFCEIMPRIMEPRODUTOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_NFECANHOTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_NFEINDSINC_LABELS = {
	S: "S",
	A: "A",
} as const;

export const PARAMETROS_NFEMOSTRARDEBUG_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_NUMCONTRATONF_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_OBRIGAWHATSAPP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_OBRIGATORIOASSUNTOATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_ORIGEMENDERECOOS_LABELS = {
	AT: "AT",
	AS: "AS",
} as const;

export const PARAMETROS_OSCARREGAFUNCAUTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_OSFINALIZADADATAEXECUCAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_OSIGNORARFILTROSETOREXTERNO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_OSPERMITEABRIRCLIENTEATRASO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PADRAOTIPOPRODUTOSPLANO_LABELS = {
	PLA: "PLA",
	PRO: "PRO",
} as const;

export const PARAMETROS_PARAMLIBERATEMPORARIAMENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PARAMMENSAGENSATENDIMENTO_LABELS = {
	PU: "PU",
	PR: "PR",
} as const;

export const PARAMETROS_PERMGERARNFCONTCANCE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITEALTERACAODATABASE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITEANEXARIMAGEMGALERIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITECUSTOMEDIOZERO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITEEDITARPATRIMONIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITEINATIVARPRODUTOCOMSALDO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITEINFORMARFILIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITENUMSERIEDUPLICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITETRANSFAUTOMATICAFILIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITETRANSFERENCIAAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITIRASSUMIRPROSPECTOUTROCOLABORADOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITIRATIVARBLOQUEIOAUTOMATICOPELASROTINAS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITIRREABRIRATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITIRTRANSFFILIALDIFERENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PERMITIRVENDERPATRIMONIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PRECOPADRAO_LABELS = {
	B: "B",
	T: "T",
} as const;

export const PARAMETROS_PREENCHERCONTAPADRAOUSUARIOAUTOMATICAMENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PREENCHERFILIALOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PREENCHERRESPONSAVELATENDIMENTOVENCEMOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PREVISAOCONTASARECEBER_LABELS = {
	N: "N",
	S: "S",
	M: "M",
} as const;

export const PARAMETROS_PREVISAOSAIDAS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PROLONGAFIDELIDADETEMPOSUSPENSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_PULAFDSGERARFINAN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_REGUACOBRANCACONSIDERA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_REGUACOBRANCAENVIODIASUTEIS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_REGUACOBRANCANOTIFICACAOINATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_RESPEITABLOQUEIOAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_RETIRARVALIDACAOPROPLOTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_SENHAUSERVOIPOBRIGATORIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_SLAAPENASDIASUTEIS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_SMTPCODIFICACAOUTF8_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_SUBSTATUSOBRIGATORIONEGOCIACAO_LABELS = {
	V: "V",
	P: "P",
	A: "A",
	N: "N",
} as const;

export const PARAMETROS_SUPORTEACESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_SUPORTEATUALIZAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_SUSPENSAOTEMPORARIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TAXASATIVACAOOBRIGATORIO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const PARAMETROS_TELEFONECELULARCLIENTEOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TELEFONERESIDENCIALCLIENTEOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TERMOATIVACONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TEXTOCAIXAALTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TICKETACEITAEDITARPROTOCOLO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TICKETENVMAILCLI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TICKETENVMAILCLICONTATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TICKETENVMAILCLIHOTSITE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TIPOCLIENTEOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TIPODELPRODUTO_LABELS = {
	I: "I",
	D: "D",
} as const;

export const PARAMETROS_TIPODOCPRODOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_TIPOFILTROMSGCLIENTEANIVERSARIANTE_LABELS = {
	A: "A",
	P: "P",
} as const;

export const PARAMETROS_TIPOFILTROMSGPESSOAJURIDICA_LABELS = {
	A: "A",
	P: "P",
} as const;

export const PARAMETROS_TIPORASTREAMENTO_LABELS = {
	T: "T",
	U: "U",
} as const;

export const PARAMETROS_TIPORETIRADAEQUIPAMENTO_LABELS = {
	O: "O",
	A: "A",
} as const;

export const PARAMETROS_TIPOVISUALIZACAOOSAGENDASERVICOS_LABELS = {
	E: "E",
	R: "R",
	L: "L",
	A: "A",
} as const;

export const PARAMETROS_USAAUDITORIACONTASAPAGAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_USARCONTRATOEXISTENTENEGOCIACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_USARCONTRATONEGOCIACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_USETAXCALCULATOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_UTILIZAALERTAEXPIRACAOCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_UTILIZACOBRANCAAUTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_UTILIZAINTEGRACAOSERASA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_UTILIZARCIRCUITO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_UTILIZARTIPODOCUMENTOPLANOVENDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_UTILIZARUTF8SMS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_UTILIZARUTF8SMSPESSOAJURIDICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_VALIDAENDERECOPROSPECTVENCEMOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_VALIDARCHOQUEHORARIOAGENDCOMPROMISSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_VALIDAROSPENDENTEDESATIVARFUNC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_VALIDARPERIODOTRABALHO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PARAMETROS_VALORMOVIMENTACAOPRODUTO_LABELS = {
	P: "P",
	C: "C",
	T: "T",
} as const;

export const PARAMETROS_VENCIMENTO26A31_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const parametrosAbrirVendaBoletoEmRemessaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "abrir_venda_boleto_em_remessa: valores válidos são [S, N]",
	}),
});

export const parametrosAceitaClienteDuplicadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "aceita_cliente_duplicado: valores válidos são [S, N]",
	}),
});

export const parametrosAceitaFornecedorDuplicadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "aceita_fornecedor_duplicado: valores válidos são [S, N]",
	}),
});

export const parametrosAdicionaTitulosComunicadosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "adiciona_titulos_comunicados: valores válidos são [S, N]",
	}),
});

export const parametrosAlterarPlanoSemCancelarSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "alterar_plano_sem_cancelar: valores válidos são [S, N]",
	}),
});

export const parametrosAmbienteSchema = z.enum(["P", "H", "1", "2"], {
	error: () => ({ message: "ambiente: valores válidos são [P, H, 1, 2]" }),
});

export const parametrosAplicaDescontoPadraoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "aplica_desconto_padrao: valores válidos são [S, N]",
	}),
});

export const parametrosAplicaDescontoTempoBloqueioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "aplica_desconto_tempo_bloqueio: valores válidos são [S, N]",
	}),
});

export const parametrosAtiva2faSchema = z.enum(["S", "N", "P"], {
	error: () => ({ message: "ativa_2fa: valores válidos são [S, N, P]" }),
});

export const parametrosAtivaStatusContratoSchema = z.enum(["M", "V"], {
	error: () => ({
		message: "ativa_status_contrato: valores válidos são [M, V]",
	}),
});

export const parametrosAtivarContratoSchema = z.enum(["A", "N"], {
	error: () => ({ message: "ativar_contrato: valores válidos são [A, N]" }),
});

export const parametrosAtivarReguaCobrancaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "ativar_regua_cobranca: valores válidos são [S, N]",
	}),
});

export const parametrosAtualizarEnderecoLocalizacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "atualizar_endereco_localizacao: valores válidos são [S, N]",
	}),
});

export const parametrosAtualizarStatusContratoComPendenciaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"atualizar_status_contrato_com_pendencia: valores válidos são [S, N]",
		}),
	},
);

export const parametrosAvisoExpiracaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aviso_expiracao: valores válidos são [S, N]" }),
});

export const parametrosBkpAutenticacaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "bkp_autenticacao: valores válidos são [S, N]" }),
});

export const parametrosBkpSslSchema = z.enum(["S", "T", "N"], {
	error: () => ({ message: "bkp_ssl: valores válidos são [S, T, N]" }),
});

export const parametrosBloqueioParcialMvnoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloqueio_parcial_mvno: valores válidos são [S, N]",
	}),
});

export const parametrosBloqueioTotalMvnoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "bloqueio_total_mvno: valores válidos são [S, N]" }),
});

export const parametrosBoletoPermitirAlterarLayoutSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "boleto_permitir_alterar_layout: valores válidos são [S, N]",
	}),
});

export const parametrosBoletoPermitirAlterarOrdenacaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "boleto_permitir_alterar_ordenacao: valores válidos são [S, N]",
		}),
	},
);

export const parametrosBoletosCapaContratosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "boletos_capa_contratos: valores válidos são [S, N]",
	}),
});

export const parametrosCalculoDiarioRenegociacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "calculo_diario_renegociacao: valores válidos são [S, N]",
	}),
});

export const parametrosCancelFinanValorIgualSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cancel_finan_valor_igual: valores válidos são [S, N]",
	}),
});

export const parametrosCancelarFinanAoCancelarContratoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"cancelar_finan_ao_cancelar_contrato: valores válidos são [S, N]",
		}),
	},
);

export const parametrosCancelarFinanceiroRotCancelaContratoSchema = z.enum(
	["S", "N", "SV"],
	{
		error: () => ({
			message:
				"cancelar_financeiro_rot_cancela_contrato: valores válidos são [S, N, SV]",
		}),
	},
);

export const parametrosCancelarNotasLoteSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cancelar_notas_lote: valores válidos são [S, N]" }),
});

export const parametrosCancelarVendaAoCancelarTituloSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "cancelar_venda_ao_cancelar_titulo: valores válidos são [S, N]",
		}),
	},
);

export const parametrosCarteiraCobrancaFiltraSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "carteira_cobranca_filtra: valores válidos são [S, N]",
	}),
});

export const parametrosClasseFinanceiraSchema = z.enum(["S", "N", "O"], {
	error: () => ({
		message: "classe_financeira: valores válidos são [S, N, O]",
	}),
});

export const parametrosClienteExibirProspeccaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cliente_exibir_prospeccao: valores válidos são [S, N]",
	}),
});

export const parametrosClienteNovoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cliente_novo_ativo: valores válidos são [S, N]" }),
});

export const parametrosCobrancaDiaUtilSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cobranca_dia_util: valores válidos são [S, N]" }),
});

export const parametrosCobrancaPadraoSchema = z.enum(["I", "E"], {
	error: () => ({ message: "cobranca_padrao: valores válidos são [I, E]" }),
});

export const parametrosCobrancaRepetePassoDiaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cobranca_repete_passo_dia: valores válidos são [S, N]",
	}),
});

export const parametrosComportamentoContratoAtualizarInformacoesSchema = z.enum(
	["M", "A"],
	{
		error: () => ({
			message:
				"comportamento_contrato_atualizar_informacoes: valores válidos são [M, A]",
		}),
	},
);

export const parametrosConfigNfcomSchema = z.enum(["S", "N"], {
	error: () => ({ message: "config_nfcom: valores válidos são [S, N]" }),
});

export const parametrosConsiderarValorComodatoSchema = z.enum(["B", "E"], {
	error: () => ({
		message: "considerar_valor_comodato: valores válidos são [B, E]",
	}),
});

export const parametrosContabilizarComodatoMovimentacaoInternaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"contabilizar_comodato_movimentacao_interna: valores válidos são [S, N]",
		}),
	},
);

export const parametrosContratoAssDigitalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "contrato_ass_digital: valores válidos são [S, N]",
	}),
});

export const parametrosContratoCarteiraPermiteFilialDiferenteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"contrato_carteira_permite_filial_diferente: valores válidos são [S, N]",
		}),
	},
);

export const parametrosContratoHotsiteImpSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "contrato_hotsite_imp: valores válidos são [S, N]",
	}),
});

export const parametrosContratoPermiteAlterarDataCancSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "contrato_permite_alterar_data_canc: valores válidos são [S, N]",
		}),
	},
);

export const parametrosContratoValidaComodatosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "contrato_valida_comodatos: valores válidos são [S, N]",
	}),
});

export const parametrosControleEstoqueSchema = z.enum(["N", "B", "A", "L"], {
	error: () => ({
		message: "controle_estoque: valores válidos são [N, B, A, L]",
	}),
});

export const parametrosConverteClienteFornecedorSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "converte_cliente_fornecedor: valores válidos são [S, N]",
	}),
});

export const parametrosCpfClienteObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cpf_cliente_obrigatorio: valores válidos são [S, N]",
	}),
});

export const parametrosCpfFornecedorObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cpf_fornecedor_obrigatorio: valores válidos são [S, N]",
	}),
});

export const parametrosCrmCandidatoCelularObrigatorioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "crm_candidato_celular_obrigatorio: valores válidos são [S, N]",
		}),
	},
);

export const parametrosCrmCandidatoCpfObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "crm_candidato_cpf_obrigatorio: valores válidos são [S, N]",
	}),
});

export const parametrosCrmCandidatoEmailObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "crm_candidato_email_obrigatorio: valores válidos são [S, N]",
	}),
});

export const parametrosCrmPreencherFilialSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "crm_preencher_filial: valores válidos são [S, N]",
	}),
});

export const parametrosDashboard2Schema = z.enum(["N", "S"], {
	error: () => ({ message: "dashboard2: valores válidos são [N, S]" }),
});

export const parametrosDataAlteracaoPersonalizadaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "data_alteracao_personalizada: valores válidos são [S, N]",
	}),
});

export const parametrosDataNascimentoClienteObrigatorioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"data_nascimento_cliente_obrigatorio: valores válidos são [S, N]",
		}),
	},
);

export const parametrosDesbolqueioConfiancaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "desbolqueio_confianca: valores válidos são [S, N]",
	}),
});

export const parametrosDescParcAtrasoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "desc_parc_atraso: valores válidos são [N, S]" }),
});

export const parametrosDiagnosticoDetalhadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "diagnostico_detalhado: valores válidos são [S, N]",
	}),
});

export const parametrosEditorVersionSchema = z.enum(["4", "5"], {
	error: () => ({ message: "editor_version: valores válidos são [4, 5]" }),
});

export const parametrosEmailAutoViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "email_auto_viabilidade: valores válidos são [S, N]",
	}),
});

export const parametrosEmailCobrancaClienteObrigatorioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "email_cobranca_cliente_obrigatorio: valores válidos são [S, N]",
		}),
	},
);

export const parametrosEmiteNf21FilialAnatelSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "emite_nf_21_filial_anatel: valores válidos são [S, N]",
	}),
});

export const parametrosEmitirNfTransferenciaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "emitir_nf_transferencia: valores válidos são [S, N]",
	}),
});

export const parametrosEnderecoConprovantePagSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "endereco_conprovante_pag: valores válidos são [S, N]",
	}),
});

export const parametrosEnderecoDuplicadoSchema = z.enum(["N", "I", "A"], {
	error: () => ({
		message: "endereco_duplicado: valores válidos são [N, I, A]",
	}),
});

export const parametrosEntradasCompraRateioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "entradas_compra_rateio: valores válidos são [S, N]",
	}),
});

export const parametrosEnviaAnexoAtivacaoContratoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "envia_anexo_ativacao_contrato: valores válidos são [S, N]",
	}),
});

export const parametrosEnviaEmailAssinaturaDigitalContratoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"envia_email_assinatura_digital_contrato: valores válidos são [S, N]",
		}),
	},
);

export const parametrosEnviaEmailCancelamentoRenegociacaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"envia_email_cancelamento_renegociacao: valores válidos são [S, N]",
		}),
	},
);

export const parametrosEnviarNfseSegundoPlanoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "enviar_nfse_segundo_plano: valores válidos são [S, N]",
	}),
});

export const parametrosExigeAvalista1ClienteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exige_avalista1_cliente: valores válidos são [S, N]",
	}),
});

export const parametrosExigeAvalista2ClienteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exige_avalista2_cliente: valores válidos são [S, N]",
	}),
});

export const parametrosExigeFotosFinalizacaoOsSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exige_fotos_finalizacao_os: valores válidos são [S, N]",
	}),
});

export const parametrosExigeInfoFotoMarcaDaguaAnexosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "exige_info_foto_marca_dagua_anexos: valores válidos são [S, N]",
		}),
	},
);

export const parametrosExigeLogoFilialMarcaDaguaAnexosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"exige_logo_filial_marca_dagua_anexos: valores válidos são [S, N]",
		}),
	},
);

export const parametrosFilaEmailGeraAnexoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "fila_email_gera_anexo: valores válidos são [S, N]",
	}),
});

export const parametrosFilialAtendimentoSchema = z.enum(["P", "C"], {
	error: () => ({ message: "filial_atendimento: valores válidos são [P, C]" }),
});

export const parametrosFilialNotaEmitidaSchema = z.enum(["DOC", "COM", "DEF"], {
	error: () => ({
		message: "filial_nota_emitida: valores válidos são [DOC, COM, DEF]",
	}),
});

export const parametrosFilialPagamentoCpaSchema = z.enum(["P", "O", "C"], {
	error: () => ({
		message: "filial_pagamento_cpa: valores válidos são [P, O, C]",
	}),
});

export const parametrosFilialRecebimentoCreSchema = z.enum(["P", "O", "C"], {
	error: () => ({
		message: "filial_recebimento_cre: valores válidos são [P, O, C]",
	}),
});

export const parametrosFiltraClienteAtivoSmsEmailSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "filtra_cliente_ativo_sms_email: valores válidos são [S, N]",
	}),
});

export const parametrosForcaEnvioBoletoEmailMassaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "forca_envio_boleto_email_massa: valores válidos são [S, N]",
	}),
});

export const parametrosFormataMacSchema = z.enum(["P", "C", "N"], {
	error: () => ({ message: "formata_mac: valores válidos são [P, C, N]" }),
});

export const parametrosFormataSerialSchema = z.enum(["C", "N"], {
	error: () => ({ message: "formata_serial: valores válidos são [C, N]" }),
});

export const parametrosFormatoSchema = z.enum(["R", "P"], {
	error: () => ({ message: "formato: valores válidos são [R, P]" }),
});

export const parametrosFormatoImpNfeSchema = z.enum(["1", "2", "P", "L"], {
	error: () => ({
		message: "formato_imp_nfe: valores válidos são [1, 2, P, L]",
	}),
});

export const parametrosFuncaoGeraFinanceiroSchema = z.enum(["F", "C"], {
	error: () => ({
		message: "funcao_gera_financeiro: valores válidos são [F, C]",
	}),
});

export const parametrosGeraFinanPreAssinaturaDigitalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "gera_finan_pre_assinatura_digital: valores válidos são [S, N]",
		}),
	},
);

export const parametrosGeraMilSeiscentosUmRegistroSchema = z.enum(
	["comp", "caixa"],
	{
		error: () => ({
			message:
				"gera_mil_seiscentos_um_registro: valores válidos são [comp, caixa]",
		}),
	},
);

export const parametrosGeraPorTipoDocProdutosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gera_por_tipo_doc_produtos: valores válidos são [S, N]",
	}),
});

export const parametrosGeracaoPorFaturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "geracao_por_fatura: valores válidos são [S, N]" }),
});

export const parametrosGerarEtiquetasAoDevolverComodatoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"gerar_etiquetas_ao_devolver_comodato: valores válidos são [S, N]",
		}),
	},
);

export const parametrosGerarFinanQualquerTipoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_finan_qualquer_tipo: valores válidos são [S, N]",
	}),
});

export const parametrosGerarFinanceiroAgrupadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_financeiro_agrupado: valores válidos são [S, N]",
	}),
});

export const parametrosGerarProrataServAdicSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_prorata_serv_adic: valores válidos são [S, N]",
	}),
});

export const parametrosGerarSaidaCliBloqueadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_saida_cli_bloqueado: valores válidos são [S, N]",
	}),
});

export const parametrosHotsiteObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "hotsite_obrigatorio: valores válidos são [S, N]" }),
});

export const parametrosIdEstagioObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "id_estagio_obrigatorio: valores válidos são [S, N]",
	}),
});

export const parametrosIgnorarAreceberDesativarContratoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"ignorar_areceber_desativar_contrato: valores válidos são [S, N]",
		}),
	},
);

export const parametrosIgnorarRedesPermitidasSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "ignorar_redes_permitidas: valores válidos são [S, N, P]",
	}),
});

export const parametrosInativaCadastroClienteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "inativa_cadastro_cliente: valores válidos são [S, N]",
	}),
});

export const parametrosIncluirVendedorNegociacaoFatContratoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"incluir_vendedor_negociacao_fat_contrato: valores válidos são [S, N]",
		}),
	},
);

export const parametrosInserirResponsavelProspectNegociacaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"inserir_responsavel_prospect_negociacao: valores válidos são [S, N]",
		}),
	},
);

export const parametrosIntegracaoAssinaturaDigitalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "integracao_assinatura_digital: valores válidos são [S, N]",
	}),
});

export const parametrosLiberaSuspParcPadraoSchema = z.enum(["H", "D"], {
	error: () => ({
		message: "libera_susp_parc_padrao: valores válidos são [H, D]",
	}),
});

export const parametrosLiberacaoBloqueioManualSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "liberacao_bloqueio_manual: valores válidos são [S, N]",
	}),
});

export const parametrosLiberarPedidoCompraSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "liberar_pedido_compra: valores válidos são [S, N]",
	}),
});

export const parametrosLiberarRequisicaoCompraSchema = z.enum(["N", "S"], {
	error: () => ({
		message: "liberar_requisicao_compra: valores válidos são [N, S]",
	}),
});

export const parametrosLiberarTransferenciasConfirmacaoSchema = z.enum(
	["S", "C"],
	{
		error: () => ({
			message: "liberar_transferencias_confirmacao: valores válidos são [S, C]",
		}),
	},
);

export const parametrosLoginTipoTransm24Schema = z.enum(["S", "N"], {
	error: () => ({
		message: "login_tipo_transm_24: valores válidos são [S, N]",
	}),
});

export const parametrosLoginTipoTransm58Schema = z.enum(["S", "N"], {
	error: () => ({
		message: "login_tipo_transm_58: valores válidos são [S, N]",
	}),
});

export const parametrosLoginTipoTransmAdslSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "login_tipo_transm_adsl: valores válidos são [S, N]",
	}),
});

export const parametrosLoginTipoTransmCaboSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "login_tipo_transm_cabo: valores válidos são [S, N]",
	}),
});

export const parametrosLoginTipoTransmFibraSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "login_tipo_transm_fibra: valores válidos são [S, N]",
	}),
});

export const parametrosLoginTipoTransmLddSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "login_tipo_transm_ldd: valores válidos são [S, N]",
	}),
});

export const parametrosLoginTipoTransmLteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "login_tipo_transm_lte: valores válidos são [S, N]",
	}),
});

export const parametrosManterVincLoginContratoDesativadoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"manter_vinc_login_contrato_desativado: valores válidos são [S, N]",
		}),
	},
);

export const parametrosMarcarEnderecoPadraoClienteSchema = z.enum(
	["S", "N", "C"],
	{
		error: () => ({
			message: "marcar_endereco_padrao_cliente: valores válidos são [S, N, C]",
		}),
	},
);

export const parametrosModoExecucaoOsSchema = z.enum(["V", "U"], {
	error: () => ({ message: "modo_execucao_os: valores válidos são [V, U]" }),
});

export const parametrosMostraAtendimentoContratoISchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostra_atendimento_contrato_i: valores válidos são [S, N]",
	}),
});

export const parametrosMostraCentralAssinanteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostra_central_assinante: valores válidos são [S, N]",
	}),
});

export const parametrosMostraLoopPlanejamentoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostra_loop_planejamento: valores válidos são [S, N]",
	}),
});

export const parametrosMostrarAcresProximaParcelaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_acres_proxima_parcela: valores válidos são [S, N]",
	}),
});

export const parametrosMostrarNaoCobrarSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mostrar_nao_cobrar: valores válidos são [S, N]" }),
});

export const parametrosMostrarParcelaAvulsaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_parcela_avulsa: valores válidos são [S, N]",
	}),
});

export const parametrosMostrarParcelaUnicaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_parcela_unica: valores válidos são [S, N]",
	}),
});

export const parametrosMotivoInclusaoObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "motivo_inclusao_obrigatorio: valores válidos são [S, N]",
	}),
});

export const parametrosMovimentaComodatoCancelamentoVendaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"movimenta_comodato_cancelamento_venda: valores válidos são [S, N]",
		}),
	},
);

export const parametrosMsgFeriadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "msg_feriado: valores válidos são [S, N]" }),
});

export const parametrosNewClassImprimeBoletoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "new_class_imprime_boleto: valores válidos são [S, N]",
	}),
});

export const parametrosNf21ConsumoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nf21_consumo: valores válidos são [S, N]" }),
});

export const parametrosNfceImprimeProdutosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "nfce_imprime_produtos: valores válidos são [S, N]",
	}),
});

export const parametrosNfeCanhotoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nfe_canhoto: valores válidos são [S, N]" }),
});

export const parametrosNfeIndsincSchema = z.enum(["S", "A"], {
	error: () => ({ message: "nfe_indsinc: valores válidos são [S, A]" }),
});

export const parametrosNfeMostrarDebugSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nfe_mostrar_debug: valores válidos são [S, N]" }),
});

export const parametrosNumContratoNfSchema = z.enum(["S", "N"], {
	error: () => ({ message: "num_contrato_nf: valores válidos são [S, N]" }),
});

export const parametrosObrigaWhatsappSchema = z.enum(["S", "N"], {
	error: () => ({ message: "obriga_whatsapp: valores válidos são [S, N]" }),
});

export const parametrosObrigatorioAssuntoAtendimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "obrigatorio_assunto_atendimento: valores válidos são [S, N]",
		}),
	},
);

export const parametrosOrigemEnderecoOsSchema = z.enum(["AT", "AS"], {
	error: () => ({
		message: "origem_endereco_os: valores válidos são [AT, AS]",
	}),
});

export const parametrosOsCarregaFuncAutoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "os_carrega_func_auto: valores válidos são [S, N]",
	}),
});

export const parametrosOsFinalizadaDataExecucaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "os_finalizada_data_execucao: valores válidos são [S, N]",
	}),
});

export const parametrosOsIgnorarFiltroSetorExternoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "os_ignorar_filtro_setor_externo: valores válidos são [S, N]",
	}),
});

export const parametrosOsPermiteAbrirClienteAtrasoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "os_permite_abrir_cliente_atraso: valores válidos são [S, N]",
	}),
});

export const parametrosPadraoTipoProdutosPlanoSchema = z.enum(["PLA", "PRO"], {
	error: () => ({
		message: "padrao_tipo_produtos_plano: valores válidos são [PLA, PRO]",
	}),
});

export const parametrosParamLiberaTemporariamenteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "param_libera_temporariamente: valores válidos são [S, N]",
	}),
});

export const parametrosParamMensagensAtendimentoSchema = z.enum(["PU", "PR"], {
	error: () => ({
		message: "param_mensagens_atendimento: valores válidos são [PU, PR]",
	}),
});

export const parametrosPermGerarNfContCanceSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "perm_gerar_nf_cont_cance: valores válidos são [S, N]",
	}),
});

export const parametrosPermiteAlteracaoDataBaseSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_alteracao_data_base: valores válidos são [S, N]",
	}),
});

export const parametrosPermiteAnexarImagemGaleriaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_anexar_imagem_galeria: valores válidos são [S, N]",
	}),
});

export const parametrosPermiteCustoMedioZeroSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_custo_medio_zero: valores válidos são [S, N]",
	}),
});

export const parametrosPermiteEditarPatrimonioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_editar_patrimonio: valores válidos são [S, N]",
	}),
});

export const parametrosPermiteInativarProdutoComSaldoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permite_inativar_produto_com_saldo: valores válidos são [S, N]",
		}),
	},
);

export const parametrosPermiteInformarFilialSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_informar_filial: valores válidos são [S, N]",
	}),
});

export const parametrosPermiteNumSerieDuplicadoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_num_serie_duplicado: valores válidos são [S, N]",
	}),
});

export const parametrosPermiteTransfAutomaticaFilialSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permite_transf_automatica_filial: valores válidos são [S, N]",
		}),
	},
);

export const parametrosPermiteTransferenciaAutomaticaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permite_transferencia_automatica: valores válidos são [S, N]",
		}),
	},
);

export const parametrosPermitirAssumirProspectOutroColaboradorSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"permitir_assumir_prospect_outro_colaborador: valores válidos são [S, N]",
		}),
	},
);

export const parametrosPermitirAtivarBloqueioAutomaticoPelasRotinasSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"permitir_ativar_bloqueio_automatico_pelas_rotinas: valores válidos são [S, N]",
		}),
	});

export const parametrosPermitirReabrirAtendimentoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permitir_reabrir_atendimento: valores válidos são [S, N]",
	}),
});

export const parametrosPermitirTransfFilialDiferenteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permitir_transf_filial_diferente: valores válidos são [S, N]",
		}),
	},
);

export const parametrosPermitirVenderPatrimonioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permitir_vender_patrimonio: valores válidos são [S, N]",
	}),
});

export const parametrosPrecoPadraoSchema = z.enum(["B", "T"], {
	error: () => ({ message: "preco_padrao: valores válidos são [B, T]" }),
});

export const parametrosPreencherContaPadraoUsuarioAutomaticamenteSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"preencher_conta_padrao_usuario_automaticamente: valores válidos são [S, N]",
		}),
	});

export const parametrosPreencherFilialOsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "preencher_filial_os: valores válidos são [S, N]" }),
});

export const parametrosPreencherResponsavelAtendimentoVencemosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"preencher_responsavel_atendimento_vencemos: valores válidos são [S, N]",
		}),
	},
);

export const parametrosPrevisaoContasAreceberSchema = z.enum(["N", "S", "M"], {
	error: () => ({
		message: "previsao_contas_areceber: valores válidos são [N, S, M]",
	}),
});

export const parametrosPrevisaoSaidasSchema = z.enum(["S", "N"], {
	error: () => ({ message: "previsao_saidas: valores válidos são [S, N]" }),
});

export const parametrosProlongaFidelidadeTempoSuspensaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"prolonga_fidelidade_tempo_suspensao: valores válidos são [S, N]",
		}),
	},
);

export const parametrosPulaFdsGerarFinanSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "pula_fds_gerar_finan: valores válidos são [S, N]",
	}),
});

export const parametrosReguaCobrancaConsideraSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "regua_cobranca_considera: valores válidos são [S, N]",
	}),
});

export const parametrosReguaCobrancaEnvioDiasUteisSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "regua_cobranca_envio_dias_uteis: valores válidos são [S, N]",
	}),
});

export const parametrosReguaCobrancaNotificacaoInativoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "regua_cobranca_notificacao_inativo: valores válidos são [S, N]",
		}),
	},
);

export const parametrosRespeitaBloqueioAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "respeita_bloqueio_automatico: valores válidos são [S, N]",
	}),
});

export const parametrosRetirarValidacaoPropLoteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "retirar_validacao_prop_lote: valores válidos são [S, N]",
	}),
});

export const parametrosSenhaUserVoipObrigatoriaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "senha_user_voip_obrigatoria: valores válidos são [S, N]",
	}),
});

export const parametrosSlaApenasDiasUteisSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "sla_apenas_dias_uteis: valores válidos são [S, N]",
	}),
});

export const parametrosSmtpCodificacaoUtf8Schema = z.enum(["S", "N"], {
	error: () => ({
		message: "smtp_codificacao_utf8: valores válidos são [S, N]",
	}),
});

export const parametrosSubstatusObrigatorioNegociacaoSchema = z.enum(
	["V", "P", "A", "N"],
	{
		error: () => ({
			message:
				"substatus_obrigatorio_negociacao: valores válidos são [V, P, A, N]",
		}),
	},
);

export const parametrosSuporteAcessoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "suporte_acesso: valores válidos são [S, N]" }),
});

export const parametrosSuporteAtualizarSchema = z.enum(["S", "N"], {
	error: () => ({ message: "suporte_atualizar: valores válidos são [S, N]" }),
});

export const parametrosSuspensaoTemporariaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "suspensao_temporaria: valores válidos são [S, N]",
	}),
});

export const parametrosTaxasAtivacaoObrigatorioSchema = z.enum(["N", "S"], {
	error: () => ({
		message: "taxas_ativacao_obrigatorio: valores válidos são [N, S]",
	}),
});

export const parametrosTelefoneCelularClienteObrigatorioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"telefone_celular_cliente_obrigatorio: valores válidos são [S, N]",
		}),
	},
);

export const parametrosTelefoneResidencialClienteObrigatorioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"telefone_residencial_cliente_obrigatorio: valores válidos são [S, N]",
		}),
	},
);

export const parametrosTermoAtivaContratoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "termo_ativa_contrato: valores válidos são [S, N]",
	}),
});

export const parametrosTextoCaixaaltaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "texto_caixaalta: valores válidos são [S, N]" }),
});

export const parametrosTicketAceitaEditarProtocoloSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "ticket_aceita_editar_protocolo: valores válidos são [S, N]",
	}),
});

export const parametrosTicketEnvMailCliSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ticket_env_mail_cli: valores válidos são [S, N]" }),
});

export const parametrosTicketEnvMailCliContatoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "ticket_env_mail_cli_contato: valores válidos são [S, N]",
	}),
});

export const parametrosTicketEnvMailCliHotsiteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "ticket_env_mail_cli_hotsite: valores válidos são [S, N]",
	}),
});

export const parametrosTipoClienteObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "tipo_cliente_obrigatorio: valores válidos são [S, N]",
	}),
});

export const parametrosTipoDelProdutoSchema = z.enum(["I", "D"], {
	error: () => ({ message: "tipo_del_produto: valores válidos são [I, D]" }),
});

export const parametrosTipoDocProdObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "tipo_doc_prod_obrigatorio: valores válidos são [S, N]",
	}),
});

export const parametrosTipoFiltroMsgClienteAniversarianteSchema = z.enum(
	["A", "P"],
	{
		error: () => ({
			message:
				"tipo_filtro_msg_cliente_aniversariante: valores válidos são [A, P]",
		}),
	},
);

export const parametrosTipoFiltroMsgPessoaJuridicaSchema = z.enum(["A", "P"], {
	error: () => ({
		message: "tipo_filtro_msg_pessoa_juridica: valores válidos são [A, P]",
	}),
});

export const parametrosTipoRastreamentoSchema = z.enum(["T", "U"], {
	error: () => ({ message: "tipo_rastreamento: valores válidos são [T, U]" }),
});

export const parametrosTipoRetiradaEquipamentoSchema = z.enum(["O", "A"], {
	error: () => ({
		message: "tipo_retirada_equipamento: valores válidos são [O, A]",
	}),
});

export const parametrosTipoVisualizacaoOsAgendaServicosSchema = z.enum(
	["E", "R", "L", "A"],
	{
		error: () => ({
			message:
				"tipo_visualizacao_os_agenda_servicos: valores válidos são [E, R, L, A]",
		}),
	},
);

export const parametrosUsaAuditoriaContasAPagarSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "usa_auditoria_contas_a_pagar: valores válidos são [S, N]",
	}),
});

export const parametrosUsarContratoExistenteNegociacaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "usar_contrato_existente_negociacao: valores válidos são [S, N]",
		}),
	},
);

export const parametrosUsarContratoNegociacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "usar_contrato_negociacao: valores válidos são [S, N]",
	}),
});

export const parametrosUseTaxCalculatorSchema = z.enum(["S", "N"], {
	error: () => ({ message: "use_tax_calculator: valores válidos são [S, N]" }),
});

export const parametrosUtilizaAlertaExpiracaoContratoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utiliza_alerta_expiracao_contrato: valores válidos são [S, N]",
		}),
	},
);

export const parametrosUtilizaCobrancaAutoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "utiliza_cobranca_auto: valores válidos são [S, N]",
	}),
});

export const parametrosUtilizaIntegracaoSerasaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "utiliza_integracao_serasa: valores válidos são [S, N]",
	}),
});

export const parametrosUtilizarCircuitoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "utilizar_circuito: valores válidos são [S, N]" }),
});

export const parametrosUtilizarTipoDocumentoPlanoVendaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"utilizar_tipo_documento_plano_venda: valores válidos são [S, N]",
		}),
	},
);

export const parametrosUtilizarUtf8SmsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "utilizar_utf8_sms: valores válidos são [S, N]" }),
});

export const parametrosUtilizarUtf8SmsPessoaJuridicaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utilizar_utf8_sms_pessoa_juridica: valores válidos são [S, N]",
		}),
	},
);

export const parametrosValidaEnderecoProspectVencemosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "valida_endereco_prospect_vencemos: valores válidos são [S, N]",
		}),
	},
);

export const parametrosValidarChoqueHorarioAgendCompromissoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"validar_choque_horario_agend_compromisso: valores válidos são [S, N]",
		}),
	},
);

export const parametrosValidarOsPendenteDesativarFuncSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "validar_os_pendente_desativar_func: valores válidos são [S, N]",
		}),
	},
);

export const parametrosValidarPeriodoTrabalhoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "validar_periodo_trabalho: valores válidos são [S, N]",
	}),
});

export const parametrosValorMovimentacaoProdutoSchema = z.enum(
	["P", "C", "T"],
	{
		error: () => ({
			message: "valor_movimentacao_produto: valores válidos são [P, C, T]",
		}),
	},
);

export const parametrosVencimento26A31Schema = z.enum(["N", "S"], {
	error: () => ({ message: "vencimento_26_a_31: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ParametrosAbrirVendaBoletoEmRemessa = z.infer<
	typeof parametrosAbrirVendaBoletoEmRemessaSchema
>;

export type ParametrosAceitaClienteDuplicado = z.infer<
	typeof parametrosAceitaClienteDuplicadoSchema
>;

export type ParametrosAceitaFornecedorDuplicado = z.infer<
	typeof parametrosAceitaFornecedorDuplicadoSchema
>;

export type ParametrosAdicionaTitulosComunicados = z.infer<
	typeof parametrosAdicionaTitulosComunicadosSchema
>;

export type ParametrosAlterarPlanoSemCancelar = z.infer<
	typeof parametrosAlterarPlanoSemCancelarSchema
>;

export type ParametrosAmbiente = z.infer<typeof parametrosAmbienteSchema>;

export type ParametrosAplicaDescontoPadrao = z.infer<
	typeof parametrosAplicaDescontoPadraoSchema
>;

export type ParametrosAplicaDescontoTempoBloqueio = z.infer<
	typeof parametrosAplicaDescontoTempoBloqueioSchema
>;

export type ParametrosAtiva2fa = z.infer<typeof parametrosAtiva2faSchema>;

export type ParametrosAtivaStatusContrato = z.infer<
	typeof parametrosAtivaStatusContratoSchema
>;

export type ParametrosAtivarContrato = z.infer<
	typeof parametrosAtivarContratoSchema
>;

export type ParametrosAtivarReguaCobranca = z.infer<
	typeof parametrosAtivarReguaCobrancaSchema
>;

export type ParametrosAtualizarEnderecoLocalizacao = z.infer<
	typeof parametrosAtualizarEnderecoLocalizacaoSchema
>;

export type ParametrosAtualizarStatusContratoComPendencia = z.infer<
	typeof parametrosAtualizarStatusContratoComPendenciaSchema
>;

export type ParametrosAvisoExpiracao = z.infer<
	typeof parametrosAvisoExpiracaoSchema
>;

export type ParametrosBkpAutenticacao = z.infer<
	typeof parametrosBkpAutenticacaoSchema
>;

export type ParametrosBkpSsl = z.infer<typeof parametrosBkpSslSchema>;

export type ParametrosBloqueioParcialMvno = z.infer<
	typeof parametrosBloqueioParcialMvnoSchema
>;

export type ParametrosBloqueioTotalMvno = z.infer<
	typeof parametrosBloqueioTotalMvnoSchema
>;

export type ParametrosBoletoPermitirAlterarLayout = z.infer<
	typeof parametrosBoletoPermitirAlterarLayoutSchema
>;

export type ParametrosBoletoPermitirAlterarOrdenacao = z.infer<
	typeof parametrosBoletoPermitirAlterarOrdenacaoSchema
>;

export type ParametrosBoletosCapaContratos = z.infer<
	typeof parametrosBoletosCapaContratosSchema
>;

export type ParametrosCalculoDiarioRenegociacao = z.infer<
	typeof parametrosCalculoDiarioRenegociacaoSchema
>;

export type ParametrosCancelFinanValorIgual = z.infer<
	typeof parametrosCancelFinanValorIgualSchema
>;

export type ParametrosCancelarFinanAoCancelarContrato = z.infer<
	typeof parametrosCancelarFinanAoCancelarContratoSchema
>;

export type ParametrosCancelarFinanceiroRotCancelaContrato = z.infer<
	typeof parametrosCancelarFinanceiroRotCancelaContratoSchema
>;

export type ParametrosCancelarNotasLote = z.infer<
	typeof parametrosCancelarNotasLoteSchema
>;

export type ParametrosCancelarVendaAoCancelarTitulo = z.infer<
	typeof parametrosCancelarVendaAoCancelarTituloSchema
>;

export type ParametrosCarteiraCobrancaFiltra = z.infer<
	typeof parametrosCarteiraCobrancaFiltraSchema
>;

export type ParametrosClasseFinanceira = z.infer<
	typeof parametrosClasseFinanceiraSchema
>;

export type ParametrosClienteExibirProspeccao = z.infer<
	typeof parametrosClienteExibirProspeccaoSchema
>;

export type ParametrosClienteNovoAtivo = z.infer<
	typeof parametrosClienteNovoAtivoSchema
>;

export type ParametrosCobrancaDiaUtil = z.infer<
	typeof parametrosCobrancaDiaUtilSchema
>;

export type ParametrosCobrancaPadrao = z.infer<
	typeof parametrosCobrancaPadraoSchema
>;

export type ParametrosCobrancaRepetePassoDia = z.infer<
	typeof parametrosCobrancaRepetePassoDiaSchema
>;

export type ParametrosComportamentoContratoAtualizarInformacoes = z.infer<
	typeof parametrosComportamentoContratoAtualizarInformacoesSchema
>;

export type ParametrosConfigNfcom = z.infer<typeof parametrosConfigNfcomSchema>;

export type ParametrosConsiderarValorComodato = z.infer<
	typeof parametrosConsiderarValorComodatoSchema
>;

export type ParametrosContabilizarComodatoMovimentacaoInterna = z.infer<
	typeof parametrosContabilizarComodatoMovimentacaoInternaSchema
>;

export type ParametrosContratoAssDigital = z.infer<
	typeof parametrosContratoAssDigitalSchema
>;

export type ParametrosContratoCarteiraPermiteFilialDiferente = z.infer<
	typeof parametrosContratoCarteiraPermiteFilialDiferenteSchema
>;

export type ParametrosContratoHotsiteImp = z.infer<
	typeof parametrosContratoHotsiteImpSchema
>;

export type ParametrosContratoPermiteAlterarDataCanc = z.infer<
	typeof parametrosContratoPermiteAlterarDataCancSchema
>;

export type ParametrosContratoValidaComodatos = z.infer<
	typeof parametrosContratoValidaComodatosSchema
>;

export type ParametrosControleEstoque = z.infer<
	typeof parametrosControleEstoqueSchema
>;

export type ParametrosConverteClienteFornecedor = z.infer<
	typeof parametrosConverteClienteFornecedorSchema
>;

export type ParametrosCpfClienteObrigatorio = z.infer<
	typeof parametrosCpfClienteObrigatorioSchema
>;

export type ParametrosCpfFornecedorObrigatorio = z.infer<
	typeof parametrosCpfFornecedorObrigatorioSchema
>;

export type ParametrosCrmCandidatoCelularObrigatorio = z.infer<
	typeof parametrosCrmCandidatoCelularObrigatorioSchema
>;

export type ParametrosCrmCandidatoCpfObrigatorio = z.infer<
	typeof parametrosCrmCandidatoCpfObrigatorioSchema
>;

export type ParametrosCrmCandidatoEmailObrigatorio = z.infer<
	typeof parametrosCrmCandidatoEmailObrigatorioSchema
>;

export type ParametrosCrmPreencherFilial = z.infer<
	typeof parametrosCrmPreencherFilialSchema
>;

export type ParametrosDashboard2 = z.infer<typeof parametrosDashboard2Schema>;

export type ParametrosDataAlteracaoPersonalizada = z.infer<
	typeof parametrosDataAlteracaoPersonalizadaSchema
>;

export type ParametrosDataNascimentoClienteObrigatorio = z.infer<
	typeof parametrosDataNascimentoClienteObrigatorioSchema
>;

export type ParametrosDesbolqueioConfianca = z.infer<
	typeof parametrosDesbolqueioConfiancaSchema
>;

export type ParametrosDescParcAtraso = z.infer<
	typeof parametrosDescParcAtrasoSchema
>;

export type ParametrosDiagnosticoDetalhado = z.infer<
	typeof parametrosDiagnosticoDetalhadoSchema
>;

export type ParametrosEditorVersion = z.infer<
	typeof parametrosEditorVersionSchema
>;

export type ParametrosEmailAutoViabilidade = z.infer<
	typeof parametrosEmailAutoViabilidadeSchema
>;

export type ParametrosEmailCobrancaClienteObrigatorio = z.infer<
	typeof parametrosEmailCobrancaClienteObrigatorioSchema
>;

export type ParametrosEmiteNf21FilialAnatel = z.infer<
	typeof parametrosEmiteNf21FilialAnatelSchema
>;

export type ParametrosEmitirNfTransferencia = z.infer<
	typeof parametrosEmitirNfTransferenciaSchema
>;

export type ParametrosEnderecoConprovantePag = z.infer<
	typeof parametrosEnderecoConprovantePagSchema
>;

export type ParametrosEnderecoDuplicado = z.infer<
	typeof parametrosEnderecoDuplicadoSchema
>;

export type ParametrosEntradasCompraRateio = z.infer<
	typeof parametrosEntradasCompraRateioSchema
>;

export type ParametrosEnviaAnexoAtivacaoContrato = z.infer<
	typeof parametrosEnviaAnexoAtivacaoContratoSchema
>;

export type ParametrosEnviaEmailAssinaturaDigitalContrato = z.infer<
	typeof parametrosEnviaEmailAssinaturaDigitalContratoSchema
>;

export type ParametrosEnviaEmailCancelamentoRenegociacao = z.infer<
	typeof parametrosEnviaEmailCancelamentoRenegociacaoSchema
>;

export type ParametrosEnviarNfseSegundoPlano = z.infer<
	typeof parametrosEnviarNfseSegundoPlanoSchema
>;

export type ParametrosExigeAvalista1Cliente = z.infer<
	typeof parametrosExigeAvalista1ClienteSchema
>;

export type ParametrosExigeAvalista2Cliente = z.infer<
	typeof parametrosExigeAvalista2ClienteSchema
>;

export type ParametrosExigeFotosFinalizacaoOs = z.infer<
	typeof parametrosExigeFotosFinalizacaoOsSchema
>;

export type ParametrosExigeInfoFotoMarcaDaguaAnexos = z.infer<
	typeof parametrosExigeInfoFotoMarcaDaguaAnexosSchema
>;

export type ParametrosExigeLogoFilialMarcaDaguaAnexos = z.infer<
	typeof parametrosExigeLogoFilialMarcaDaguaAnexosSchema
>;

export type ParametrosFilaEmailGeraAnexo = z.infer<
	typeof parametrosFilaEmailGeraAnexoSchema
>;

export type ParametrosFilialAtendimento = z.infer<
	typeof parametrosFilialAtendimentoSchema
>;

export type ParametrosFilialNotaEmitida = z.infer<
	typeof parametrosFilialNotaEmitidaSchema
>;

export type ParametrosFilialPagamentoCpa = z.infer<
	typeof parametrosFilialPagamentoCpaSchema
>;

export type ParametrosFilialRecebimentoCre = z.infer<
	typeof parametrosFilialRecebimentoCreSchema
>;

export type ParametrosFiltraClienteAtivoSmsEmail = z.infer<
	typeof parametrosFiltraClienteAtivoSmsEmailSchema
>;

export type ParametrosForcaEnvioBoletoEmailMassa = z.infer<
	typeof parametrosForcaEnvioBoletoEmailMassaSchema
>;

export type ParametrosFormataMac = z.infer<typeof parametrosFormataMacSchema>;

export type ParametrosFormataSerial = z.infer<
	typeof parametrosFormataSerialSchema
>;

export type ParametrosFormato = z.infer<typeof parametrosFormatoSchema>;

export type ParametrosFormatoImpNfe = z.infer<
	typeof parametrosFormatoImpNfeSchema
>;

export type ParametrosFuncaoGeraFinanceiro = z.infer<
	typeof parametrosFuncaoGeraFinanceiroSchema
>;

export type ParametrosGeraFinanPreAssinaturaDigital = z.infer<
	typeof parametrosGeraFinanPreAssinaturaDigitalSchema
>;

export type ParametrosGeraMilSeiscentosUmRegistro = z.infer<
	typeof parametrosGeraMilSeiscentosUmRegistroSchema
>;

export type ParametrosGeraPorTipoDocProdutos = z.infer<
	typeof parametrosGeraPorTipoDocProdutosSchema
>;

export type ParametrosGeracaoPorFatura = z.infer<
	typeof parametrosGeracaoPorFaturaSchema
>;

export type ParametrosGerarEtiquetasAoDevolverComodato = z.infer<
	typeof parametrosGerarEtiquetasAoDevolverComodatoSchema
>;

export type ParametrosGerarFinanQualquerTipo = z.infer<
	typeof parametrosGerarFinanQualquerTipoSchema
>;

export type ParametrosGerarFinanceiroAgrupado = z.infer<
	typeof parametrosGerarFinanceiroAgrupadoSchema
>;

export type ParametrosGerarProrataServAdic = z.infer<
	typeof parametrosGerarProrataServAdicSchema
>;

export type ParametrosGerarSaidaCliBloqueado = z.infer<
	typeof parametrosGerarSaidaCliBloqueadoSchema
>;

export type ParametrosHotsiteObrigatorio = z.infer<
	typeof parametrosHotsiteObrigatorioSchema
>;

export type ParametrosIdEstagioObrigatorio = z.infer<
	typeof parametrosIdEstagioObrigatorioSchema
>;

export type ParametrosIgnorarAreceberDesativarContrato = z.infer<
	typeof parametrosIgnorarAreceberDesativarContratoSchema
>;

export type ParametrosIgnorarRedesPermitidas = z.infer<
	typeof parametrosIgnorarRedesPermitidasSchema
>;

export type ParametrosInativaCadastroCliente = z.infer<
	typeof parametrosInativaCadastroClienteSchema
>;

export type ParametrosIncluirVendedorNegociacaoFatContrato = z.infer<
	typeof parametrosIncluirVendedorNegociacaoFatContratoSchema
>;

export type ParametrosInserirResponsavelProspectNegociacao = z.infer<
	typeof parametrosInserirResponsavelProspectNegociacaoSchema
>;

export type ParametrosIntegracaoAssinaturaDigital = z.infer<
	typeof parametrosIntegracaoAssinaturaDigitalSchema
>;

export type ParametrosLiberaSuspParcPadrao = z.infer<
	typeof parametrosLiberaSuspParcPadraoSchema
>;

export type ParametrosLiberacaoBloqueioManual = z.infer<
	typeof parametrosLiberacaoBloqueioManualSchema
>;

export type ParametrosLiberarPedidoCompra = z.infer<
	typeof parametrosLiberarPedidoCompraSchema
>;

export type ParametrosLiberarRequisicaoCompra = z.infer<
	typeof parametrosLiberarRequisicaoCompraSchema
>;

export type ParametrosLiberarTransferenciasConfirmacao = z.infer<
	typeof parametrosLiberarTransferenciasConfirmacaoSchema
>;

export type ParametrosLoginTipoTransm24 = z.infer<
	typeof parametrosLoginTipoTransm24Schema
>;

export type ParametrosLoginTipoTransm58 = z.infer<
	typeof parametrosLoginTipoTransm58Schema
>;

export type ParametrosLoginTipoTransmAdsl = z.infer<
	typeof parametrosLoginTipoTransmAdslSchema
>;

export type ParametrosLoginTipoTransmCabo = z.infer<
	typeof parametrosLoginTipoTransmCaboSchema
>;

export type ParametrosLoginTipoTransmFibra = z.infer<
	typeof parametrosLoginTipoTransmFibraSchema
>;

export type ParametrosLoginTipoTransmLdd = z.infer<
	typeof parametrosLoginTipoTransmLddSchema
>;

export type ParametrosLoginTipoTransmLte = z.infer<
	typeof parametrosLoginTipoTransmLteSchema
>;

export type ParametrosManterVincLoginContratoDesativado = z.infer<
	typeof parametrosManterVincLoginContratoDesativadoSchema
>;

export type ParametrosMarcarEnderecoPadraoCliente = z.infer<
	typeof parametrosMarcarEnderecoPadraoClienteSchema
>;

export type ParametrosModoExecucaoOs = z.infer<
	typeof parametrosModoExecucaoOsSchema
>;

export type ParametrosMostraAtendimentoContratoI = z.infer<
	typeof parametrosMostraAtendimentoContratoISchema
>;

export type ParametrosMostraCentralAssinante = z.infer<
	typeof parametrosMostraCentralAssinanteSchema
>;

export type ParametrosMostraLoopPlanejamento = z.infer<
	typeof parametrosMostraLoopPlanejamentoSchema
>;

export type ParametrosMostrarAcresProximaParcela = z.infer<
	typeof parametrosMostrarAcresProximaParcelaSchema
>;

export type ParametrosMostrarNaoCobrar = z.infer<
	typeof parametrosMostrarNaoCobrarSchema
>;

export type ParametrosMostrarParcelaAvulsa = z.infer<
	typeof parametrosMostrarParcelaAvulsaSchema
>;

export type ParametrosMostrarParcelaUnica = z.infer<
	typeof parametrosMostrarParcelaUnicaSchema
>;

export type ParametrosMotivoInclusaoObrigatorio = z.infer<
	typeof parametrosMotivoInclusaoObrigatorioSchema
>;

export type ParametrosMovimentaComodatoCancelamentoVenda = z.infer<
	typeof parametrosMovimentaComodatoCancelamentoVendaSchema
>;

export type ParametrosMsgFeriado = z.infer<typeof parametrosMsgFeriadoSchema>;

export type ParametrosNewClassImprimeBoleto = z.infer<
	typeof parametrosNewClassImprimeBoletoSchema
>;

export type ParametrosNf21Consumo = z.infer<typeof parametrosNf21ConsumoSchema>;

export type ParametrosNfceImprimeProdutos = z.infer<
	typeof parametrosNfceImprimeProdutosSchema
>;

export type ParametrosNfeCanhoto = z.infer<typeof parametrosNfeCanhotoSchema>;

export type ParametrosNfeIndsinc = z.infer<typeof parametrosNfeIndsincSchema>;

export type ParametrosNfeMostrarDebug = z.infer<
	typeof parametrosNfeMostrarDebugSchema
>;

export type ParametrosNumContratoNf = z.infer<
	typeof parametrosNumContratoNfSchema
>;

export type ParametrosObrigaWhatsapp = z.infer<
	typeof parametrosObrigaWhatsappSchema
>;

export type ParametrosObrigatorioAssuntoAtendimento = z.infer<
	typeof parametrosObrigatorioAssuntoAtendimentoSchema
>;

export type ParametrosOrigemEnderecoOs = z.infer<
	typeof parametrosOrigemEnderecoOsSchema
>;

export type ParametrosOsCarregaFuncAuto = z.infer<
	typeof parametrosOsCarregaFuncAutoSchema
>;

export type ParametrosOsFinalizadaDataExecucao = z.infer<
	typeof parametrosOsFinalizadaDataExecucaoSchema
>;

export type ParametrosOsIgnorarFiltroSetorExterno = z.infer<
	typeof parametrosOsIgnorarFiltroSetorExternoSchema
>;

export type ParametrosOsPermiteAbrirClienteAtraso = z.infer<
	typeof parametrosOsPermiteAbrirClienteAtrasoSchema
>;

export type ParametrosPadraoTipoProdutosPlano = z.infer<
	typeof parametrosPadraoTipoProdutosPlanoSchema
>;

export type ParametrosParamLiberaTemporariamente = z.infer<
	typeof parametrosParamLiberaTemporariamenteSchema
>;

export type ParametrosParamMensagensAtendimento = z.infer<
	typeof parametrosParamMensagensAtendimentoSchema
>;

export type ParametrosPermGerarNfContCance = z.infer<
	typeof parametrosPermGerarNfContCanceSchema
>;

export type ParametrosPermiteAlteracaoDataBase = z.infer<
	typeof parametrosPermiteAlteracaoDataBaseSchema
>;

export type ParametrosPermiteAnexarImagemGaleria = z.infer<
	typeof parametrosPermiteAnexarImagemGaleriaSchema
>;

export type ParametrosPermiteCustoMedioZero = z.infer<
	typeof parametrosPermiteCustoMedioZeroSchema
>;

export type ParametrosPermiteEditarPatrimonio = z.infer<
	typeof parametrosPermiteEditarPatrimonioSchema
>;

export type ParametrosPermiteInativarProdutoComSaldo = z.infer<
	typeof parametrosPermiteInativarProdutoComSaldoSchema
>;

export type ParametrosPermiteInformarFilial = z.infer<
	typeof parametrosPermiteInformarFilialSchema
>;

export type ParametrosPermiteNumSerieDuplicado = z.infer<
	typeof parametrosPermiteNumSerieDuplicadoSchema
>;

export type ParametrosPermiteTransfAutomaticaFilial = z.infer<
	typeof parametrosPermiteTransfAutomaticaFilialSchema
>;

export type ParametrosPermiteTransferenciaAutomatica = z.infer<
	typeof parametrosPermiteTransferenciaAutomaticaSchema
>;

export type ParametrosPermitirAssumirProspectOutroColaborador = z.infer<
	typeof parametrosPermitirAssumirProspectOutroColaboradorSchema
>;

export type ParametrosPermitirAtivarBloqueioAutomaticoPelasRotinas = z.infer<
	typeof parametrosPermitirAtivarBloqueioAutomaticoPelasRotinasSchema
>;

export type ParametrosPermitirReabrirAtendimento = z.infer<
	typeof parametrosPermitirReabrirAtendimentoSchema
>;

export type ParametrosPermitirTransfFilialDiferente = z.infer<
	typeof parametrosPermitirTransfFilialDiferenteSchema
>;

export type ParametrosPermitirVenderPatrimonio = z.infer<
	typeof parametrosPermitirVenderPatrimonioSchema
>;

export type ParametrosPrecoPadrao = z.infer<typeof parametrosPrecoPadraoSchema>;

export type ParametrosPreencherContaPadraoUsuarioAutomaticamente = z.infer<
	typeof parametrosPreencherContaPadraoUsuarioAutomaticamenteSchema
>;

export type ParametrosPreencherFilialOs = z.infer<
	typeof parametrosPreencherFilialOsSchema
>;

export type ParametrosPreencherResponsavelAtendimentoVencemos = z.infer<
	typeof parametrosPreencherResponsavelAtendimentoVencemosSchema
>;

export type ParametrosPrevisaoContasAreceber = z.infer<
	typeof parametrosPrevisaoContasAreceberSchema
>;

export type ParametrosPrevisaoSaidas = z.infer<
	typeof parametrosPrevisaoSaidasSchema
>;

export type ParametrosProlongaFidelidadeTempoSuspensao = z.infer<
	typeof parametrosProlongaFidelidadeTempoSuspensaoSchema
>;

export type ParametrosPulaFdsGerarFinan = z.infer<
	typeof parametrosPulaFdsGerarFinanSchema
>;

export type ParametrosReguaCobrancaConsidera = z.infer<
	typeof parametrosReguaCobrancaConsideraSchema
>;

export type ParametrosReguaCobrancaEnvioDiasUteis = z.infer<
	typeof parametrosReguaCobrancaEnvioDiasUteisSchema
>;

export type ParametrosReguaCobrancaNotificacaoInativo = z.infer<
	typeof parametrosReguaCobrancaNotificacaoInativoSchema
>;

export type ParametrosRespeitaBloqueioAutomatico = z.infer<
	typeof parametrosRespeitaBloqueioAutomaticoSchema
>;

export type ParametrosRetirarValidacaoPropLote = z.infer<
	typeof parametrosRetirarValidacaoPropLoteSchema
>;

export type ParametrosSenhaUserVoipObrigatoria = z.infer<
	typeof parametrosSenhaUserVoipObrigatoriaSchema
>;

export type ParametrosSlaApenasDiasUteis = z.infer<
	typeof parametrosSlaApenasDiasUteisSchema
>;

export type ParametrosSmtpCodificacaoUtf8 = z.infer<
	typeof parametrosSmtpCodificacaoUtf8Schema
>;

export type ParametrosSubstatusObrigatorioNegociacao = z.infer<
	typeof parametrosSubstatusObrigatorioNegociacaoSchema
>;

export type ParametrosSuporteAcesso = z.infer<
	typeof parametrosSuporteAcessoSchema
>;

export type ParametrosSuporteAtualizar = z.infer<
	typeof parametrosSuporteAtualizarSchema
>;

export type ParametrosSuspensaoTemporaria = z.infer<
	typeof parametrosSuspensaoTemporariaSchema
>;

export type ParametrosTaxasAtivacaoObrigatorio = z.infer<
	typeof parametrosTaxasAtivacaoObrigatorioSchema
>;

export type ParametrosTelefoneCelularClienteObrigatorio = z.infer<
	typeof parametrosTelefoneCelularClienteObrigatorioSchema
>;

export type ParametrosTelefoneResidencialClienteObrigatorio = z.infer<
	typeof parametrosTelefoneResidencialClienteObrigatorioSchema
>;

export type ParametrosTermoAtivaContrato = z.infer<
	typeof parametrosTermoAtivaContratoSchema
>;

export type ParametrosTextoCaixaalta = z.infer<
	typeof parametrosTextoCaixaaltaSchema
>;

export type ParametrosTicketAceitaEditarProtocolo = z.infer<
	typeof parametrosTicketAceitaEditarProtocoloSchema
>;

export type ParametrosTicketEnvMailCli = z.infer<
	typeof parametrosTicketEnvMailCliSchema
>;

export type ParametrosTicketEnvMailCliContato = z.infer<
	typeof parametrosTicketEnvMailCliContatoSchema
>;

export type ParametrosTicketEnvMailCliHotsite = z.infer<
	typeof parametrosTicketEnvMailCliHotsiteSchema
>;

export type ParametrosTipoClienteObrigatorio = z.infer<
	typeof parametrosTipoClienteObrigatorioSchema
>;

export type ParametrosTipoDelProduto = z.infer<
	typeof parametrosTipoDelProdutoSchema
>;

export type ParametrosTipoDocProdObrigatorio = z.infer<
	typeof parametrosTipoDocProdObrigatorioSchema
>;

export type ParametrosTipoFiltroMsgClienteAniversariante = z.infer<
	typeof parametrosTipoFiltroMsgClienteAniversarianteSchema
>;

export type ParametrosTipoFiltroMsgPessoaJuridica = z.infer<
	typeof parametrosTipoFiltroMsgPessoaJuridicaSchema
>;

export type ParametrosTipoRastreamento = z.infer<
	typeof parametrosTipoRastreamentoSchema
>;

export type ParametrosTipoRetiradaEquipamento = z.infer<
	typeof parametrosTipoRetiradaEquipamentoSchema
>;

export type ParametrosTipoVisualizacaoOsAgendaServicos = z.infer<
	typeof parametrosTipoVisualizacaoOsAgendaServicosSchema
>;

export type ParametrosUsaAuditoriaContasAPagar = z.infer<
	typeof parametrosUsaAuditoriaContasAPagarSchema
>;

export type ParametrosUsarContratoExistenteNegociacao = z.infer<
	typeof parametrosUsarContratoExistenteNegociacaoSchema
>;

export type ParametrosUsarContratoNegociacao = z.infer<
	typeof parametrosUsarContratoNegociacaoSchema
>;

export type ParametrosUseTaxCalculator = z.infer<
	typeof parametrosUseTaxCalculatorSchema
>;

export type ParametrosUtilizaAlertaExpiracaoContrato = z.infer<
	typeof parametrosUtilizaAlertaExpiracaoContratoSchema
>;

export type ParametrosUtilizaCobrancaAuto = z.infer<
	typeof parametrosUtilizaCobrancaAutoSchema
>;

export type ParametrosUtilizaIntegracaoSerasa = z.infer<
	typeof parametrosUtilizaIntegracaoSerasaSchema
>;

export type ParametrosUtilizarCircuito = z.infer<
	typeof parametrosUtilizarCircuitoSchema
>;

export type ParametrosUtilizarTipoDocumentoPlanoVenda = z.infer<
	typeof parametrosUtilizarTipoDocumentoPlanoVendaSchema
>;

export type ParametrosUtilizarUtf8Sms = z.infer<
	typeof parametrosUtilizarUtf8SmsSchema
>;

export type ParametrosUtilizarUtf8SmsPessoaJuridica = z.infer<
	typeof parametrosUtilizarUtf8SmsPessoaJuridicaSchema
>;

export type ParametrosValidaEnderecoProspectVencemos = z.infer<
	typeof parametrosValidaEnderecoProspectVencemosSchema
>;

export type ParametrosValidarChoqueHorarioAgendCompromisso = z.infer<
	typeof parametrosValidarChoqueHorarioAgendCompromissoSchema
>;

export type ParametrosValidarOsPendenteDesativarFunc = z.infer<
	typeof parametrosValidarOsPendenteDesativarFuncSchema
>;

export type ParametrosValidarPeriodoTrabalho = z.infer<
	typeof parametrosValidarPeriodoTrabalhoSchema
>;

export type ParametrosValorMovimentacaoProduto = z.infer<
	typeof parametrosValorMovimentacaoProdutoSchema
>;

export type ParametrosVencimento26A31 = z.infer<
	typeof parametrosVencimento26A31Schema
>;
