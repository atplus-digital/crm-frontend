/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNCARTEIRACOBRANCA_FIELD_LABELS = {
	access_token: "access_token",
	aceite: "aceite",
	adiciona_obs_descricao: "adiciona_obs_descricao",
	adiciona_remessa_auto_alt_data: "adiciona_remessa_auto_alt_data",
	adiciona_venc_descricao: "adiciona_venc_descricao",
	agrupar_produtos_por_descricao: "agrupar_produtos_por_descricao",
	ambiente_homologacao_gateway: "ambiente_homologacao_gateway",
	ambiente_teste: "ambiente_teste",
	arredondamento_caixa: "arredondamento_caixa",
	ativo: "ativo",
	atraso: "atraso",
	baixa_automatica: "baixa_automatica",
	baixa_automatica_dias: "baixa_automatica_dias",
	bloqueio_renegociado_n_dias: "bloqueio_renegociado_n_dias",
	boleto_capa: "boleto_capa",
	boleto_capa_cliente_referencia: "boleto_capa_cliente_referencia",
	boleto_capa_imagem: "boleto_capa_imagem",
	boleto_capa_local: "boleto_capa_local",
	boleto_capa_x: "boleto_capa_x",
	boleto_capa_y: "boleto_capa_y",
	boleto_local_atualiza: "boleto_local_atualiza",
	boletos_capa_contratos: "boletos_capa_contratos",
	c_cedente: "c_cedente",
	calcular_juros: "calcular_juros",
	carteira: "carteira",
	carteira_padrao_fatura: "carteira_padrao_fatura",
	carteira_widepay: "carteira_widepay",
	classe_funcoes: "classe_funcoes",
	codigo_edi7: "codigo_edi7",
	codigo_flash: "codigo_flash",
	considerar_modelo_nao_fiscal: "considerar_modelo_nao_fiscal",
	conta_cosmos: "conta_cosmos",
	conta_gateway_ativa: "conta_gateway_ativa",
	contabiliza_retorno_filial_emissao: "contabiliza_retorno_filial_emissao",
	contador_nn: "contador_nn",
	cor_fatura: "cor_fatura",
	credit_card_porcentagem_taxa: "credit_card_porcentagem_taxa",
	credit_card_repassar_taxa: "credit_card_repassar_taxa",
	credit_card_taxa_em_pagamentos: "credit_card_taxa_em_pagamentos",
	credit_card_tipo: "credit_card_tipo",
	credit_card_valor_taxa: "credit_card_valor_taxa",
	creditCard_ambiente: "creditCard_ambiente",
	creditCard_autenticar: "creditCard_autenticar",
	creditCard_autorizar: "creditCard_autorizar",
	creditcard_banceira_am: "creditcard_banceira_am",
	creditcard_banceira_au: "creditcard_banceira_au",
	creditcard_banceira_ca: "creditcard_banceira_ca",
	creditcard_banceira_dc: "creditcard_banceira_dc",
	creditcard_banceira_dn: "creditcard_banceira_dn",
	creditcard_banceira_el: "creditcard_banceira_el",
	creditcard_banceira_jc: "creditcard_banceira_jc",
	creditcard_banceira_ma: "creditcard_banceira_ma",
	creditcard_banceira_vi: "creditcard_banceira_vi",
	creditCard_capturar: "creditCard_capturar",
	creditCard_chave: "creditCard_chave",
	creditcard_gateway: "creditcard_gateway",
	creditCard_juro: "creditCard_juro",
	creditCard_local: "creditCard_local",
	creditCard_loja: "creditCard_loja",
	creditCard_Nparcelas: "creditCard_Nparcelas",
	creditCard_parcelamento: "creditCard_parcelamento",
	creditcard_senha: "creditcard_senha",
	creditcard_senhassl: "creditcard_senhassl",
	creditcard_sslcert: "creditcard_sslcert",
	creditcard_sslkey: "creditcard_sslkey",
	creditcard_user: "creditcard_user",
	data_credito_boleto: "data_credito_boleto",
	data_credito_pix: "data_credito_pix",
	data_ultima_atualizacao: "data_ultima_atualizacao",
	data_validade_condicional: "data_validade_condicional",
	debito_carteira_vinculada: "debito_carteira_vinculada",
	debito_classe: "debito_classe",
	debito_convenio: "debito_convenio",
	desconto_condicional_percentual: "desconto_condicional_percentual",
	desconto_condicional_valor: "desconto_condicional_valor",
	desconto_p: "desconto_p",
	desconto_proporcional: "desconto_proporcional",
	desconto_v: "desconto_v",
	descricao: "descricao",
	developer_application_key: "developer_application_key",
	dias_limite_pagamento_apos_vencimento:
		"dias_limite_pagamento_apos_vencimento",
	dias_vencimento_fatura: "dias_vencimento_fatura",
	email_carteira_cobranca: "email_carteira_cobranca",
	email_cobranca: "email_cobranca",
	endereco_envio_cobranca: "endereco_envio_cobranca",
	envia_email_ao_gerar_finan: "envia_email_ao_gerar_finan",
	envia_email_gerencia: "envia_email_gerencia",
	envia_push_ao_gerar_finan: "envia_push_ao_gerar_finan",
	enviar_cobranca_pix_whatsapp: "enviar_cobranca_pix_whatsapp",
	enviar_pedido_baixa_renegociados: "enviar_pedido_baixa_renegociados",
	enviar_pedido_baixa_renegociados_debito:
		"enviar_pedido_baixa_renegociados_debito",
	enviar_pedido_baixa_vencimento: "enviar_pedido_baixa_vencimento",
	especie: "especie",
	especie_doc: "especie_doc",
	expire_at: "expire_at",
	filial_id: "filial_id",
	filtra_inicio_nn: "filtra_inicio_nn",
	finalizar_cob_bf: "finalizar_cob_bf",
	fone_cliente_capa: "fone_cliente_capa",
	formato_detalhamento_fatura: "formato_detalhamento_fatura",
	galaxPayHash: "galaxPayHash",
	galaxPayId: "galaxPayId",
	gateway_nome: "gateway_nome",
	gateway_retorno: "gateway_retorno",
	gateway_tipo_impressao: "gateway_tipo_impressao",
	gateway_token: "gateway_token",
	gera_pix_gateway: "gera_pix_gateway",
	gerencia_client_id: "gerencia_client_id",
	gerencia_client_secret: "gerencia_client_secret",
	gerencia_identificador_conta: "gerencia_identificador_conta",
	gerencia_ip_callback: "gerencia_ip_callback",
	habilitar_recorrencia_cartao: "habilitar_recorrencia_cartao",
	id: "id",
	id_config_alt_pagamento: "id_config_alt_pagamento",
	id_conta: "id_conta",
	id_fn_areceber_modelo: "id_fn_areceber_modelo",
	id_plano_vindi: "id_plano_vindi",
	id_produto_cob_adicional: "id_produto_cob_adicional",
	imp_inst_proporcional: "imp_inst_proporcional",
	imp_inst_vencido: "imp_inst_vencido",
	imp_nome_beneficiario: "imp_nome_beneficiario",
	imp_nome_beneficiario_recibo: "imp_nome_beneficiario_recibo",
	imp_nome_sacador_avalista: "imp_nome_sacador_avalista",
	importado_gateway: "importado_gateway",
	imprime_endereco_boleto: "imprime_endereco_boleto",
	imprime_fone_fatura_d: "imprime_fone_fatura_d",
	imprime_ligacoes_voip: "imprime_ligacoes_voip",
	imprime_prod_val_zero: "imprime_prod_val_zero",
	imprime_tipo_resolucao_anatel: "imprime_tipo_resolucao_anatel",
	imprimir_beneficiario_gateway: "imprimir_beneficiario_gateway",
	imprimir_filial_conta: "imprimir_filial_conta",
	imprimir_filial_venda: "imprimir_filial_venda",
	informative_text: "informative_text",
	inicio_nosso_numero: "inicio_nosso_numero",
	instrucao1: "instrucao1",
	instrucao2: "instrucao2",
	instrucao3: "instrucao3",
	instrucao4: "instrucao4",
	instrucao5: "instrucao5",
	instrucao6: "instrucao6",
	instrucao7: "instrucao7",
	instrucao8: "instrucao8",
	jurop: "jurop",
	jurop_mes: "jurop_mes",
	juros_boleto_juno: "juros_boleto_juno",
	juros_boleto_widepay: "juros_boleto_widepay",
	jurov: "jurov",
	l_impressao: "l_impressao",
	l_remessa: "l_remessa",
	l_retorno: "l_retorno",
	lanca_tarifa_gateway: "lanca_tarifa_gateway",
	lanca_tarifa_pix: "lanca_tarifa_pix",
	lancamento_tarifa: "lancamento_tarifa",
	local_pagamento: "local_pagamento",
	mask_cpf_cnpj_impressao_boleto: "mask_cpf_cnpj_impressao_boleto",
	modalidade_cobranca: "modalidade_cobranca",
	mostra_cep_beneficiario_impressao: "mostra_cep_beneficiario_impressao",
	multap: "multap",
	multav: "multav",
	n_convenio: "n_convenio",
	n_convenio_credisis: "n_convenio_credisis",
	nosso_numero_const1: "nosso_numero_const1",
	nosso_numero_const2: "nosso_numero_const2",
	nosso_numero1: "nosso_numero1",
	nosso_numero2: "nosso_numero2",
	nova_api: "nova_api",
	nova_int_fortunus: "nova_int_fortunus",
	numero_conta_f2b: "numero_conta_f2b",
	obs_adicional_boleto: "obs_adicional_boleto",
	obs_anterior: "obs_anterior",
	obs_fn_areceber: "obs_fn_areceber",
	obs_posterior: "obs_posterior",
	operacao: "operacao",
	pedido_baixa_automatico: "pedido_baixa_automatico",
	pedido_baixa_automatico_rec_cartao: "pedido_baixa_automatico_rec_cartao",
	pedido_baixa_automatico_rec_manual: "pedido_baixa_automatico_rec_manual",
	pedido_baixa_automatico_rec_pix: "pedido_baixa_automatico_rec_pix",
	pedido_baixa_automatico_recorencia_cartao:
		"pedido_baixa_automatico_recorencia_cartao",
	permite_atualizar_boleto_apos_data_ixc:
		"permite_atualizar_boleto_apos_data_ixc",
	permite_pagamento_por_chave_pix: "permite_pagamento_por_chave_pix",
	permite_retentativas_pix_recorrente: "permite_retentativas_pix_recorrente",
	pix_ambiente: "pix_ambiente",
	pix_certificado: "pix_certificado",
	pix_chave: "pix_chave",
	pix_gateway: "pix_gateway",
	pix_modalidade: "pix_modalidade",
	pix_tempo_validade: "pix_tempo_validade",
	planejamento_tarifa: "planejamento_tarifa",
	protestar: "protestar",
	quem_distribui: "quem_distribui",
	quem_emite: "quem_emite",
	recebimento_parcial_gateway: "recebimento_parcial_gateway",
	registrado: "registrado",
	remessa_com_mensagem: "remessa_com_mensagem",
	reseller_authorization_code: "reseller_authorization_code",
	sicredi_byte: "sicredi_byte",
	sicredi_posto: "sicredi_posto",
	sigla_arquivo_remessa: "sigla_arquivo_remessa",
	substrair_tarifa: "substrair_tarifa",
	tamanho_quadro_endereco_x: "tamanho_quadro_endereco_x",
	tamanho_quadro_endereco_y: "tamanho_quadro_endereco_y",
	taxa: "taxa",
	timeout: "timeout",
	tipo: "tipo",
	tipo_baixa: "tipo_baixa",
	tipo_carteira: "tipo_carteira",
	tipo_chave_pix: "tipo_chave_pix",
	tipo_data_baixa: "tipo_data_baixa",
	tipo_recebimento: "tipo_recebimento",
	ultima_atualizacao: "ultima_atualizacao",
	url_callback: "url_callback",
	use_webhook_url_callback: "use_webhook_url_callback",
	utiliza_carne: "utiliza_carne",
	utiliza_pix_recorrente: "utiliza_pix_recorrente",
	utilizar_baixa_apos_vencimento: "utilizar_baixa_apos_vencimento",
	utliza_numero_parcela_fixo: "utliza_numero_parcela_fixo",
	validar_clientes_bloqueados: "validar_clientes_bloqueados",
	validar_clientes_negativados_remessa: "validar_clientes_negativados_remessa",
	validar_juros_multa: "validar_juros_multa",
	validar_recebidos_remessa: "validar_recebidos_remessa",
	validar_vencidos_remessa: "validar_vencidos_remessa",
	valor_tarifa: "valor_tarifa",
	valor_tarifa_gateway: "valor_tarifa_gateway",
	valor_tarifa_pix: "valor_tarifa_pix",
	variacao_carteira: "variacao_carteira",
	versao_api: "versao_api",
	versao_integracao_banrisul: "versao_integracao_banrisul",
	webhook_id: "webhook_id",
	webhook_secret_key: "webhook_secret_key",
	webhook_url_callback: "webhook_url_callback",
	workspace_id: "workspace_id",
} as const;

export const FNCARTEIRACOBRANCA_ADICIONAOBSDESCRICAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_ADICIONAREMESSAAUTOALTDATA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_ADICIONAVENCDESCRICAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_AGRUPARPRODUTOSPORDESCRICAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_AMBIENTEHOMOLOGACAOGATEWAY_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_AMBIENTETESTE_LABELS = {
	P: "P",
	H: "H",
} as const;

export const FNCARTEIRACOBRANCA_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_BAIXAAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
	C: "C",
} as const;

export const FNCARTEIRACOBRANCA_BOLETOCAPA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_BOLETOCAPACLIENTEREFERENCIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_BOLETOCAPALOCAL_LABELS = {
	I: "I",
	F: "F",
} as const;

export const FNCARTEIRACOBRANCA_BOLETOLOCALATUALIZA_LABELS = {
	S: "S",
	B: "B",
} as const;

export const FNCARTEIRACOBRANCA_BOLETOSCAPACONTRATOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CALCULARJUROS_LABELS = {
	D: "D",
	V: "V",
} as const;

export const FNCARTEIRACOBRANCA_CONSIDERARMODELONAOFISCAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CONTAGATEWAYATIVA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CONTABILIZARETORNOFILIALEMISSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDREPASSARTAXA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDTAXAEMPAGAMENTOS_LABELS = {
	I: "I",
	R: "R",
	A: "A",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDTIPO_LABELS = {
	A: "A",
	D: "D",
	C: "C",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDAMBIENTE_LABELS = {
	T: "T",
	P: "P",
	H: "H",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDAUTENTICAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRAAM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRAAU_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRACA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRADC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRADN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRAEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRAJC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRAMA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDBANCEIRAVI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDCAPTURAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDLOCAL_LABELS = {
	L: "L",
	C: "C",
} as const;

export const FNCARTEIRACOBRANCA_CREDITCARDPARCELAMENTO_LABELS = {
	L: "L",
	C: "C",
} as const;

export const FNCARTEIRACOBRANCA_DESCONTOPROPORCIONAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_ENDERECOENVIOCOBRANCA_LABELS = {
	1: "1",
	2: "2",
} as const;

export const FNCARTEIRACOBRANCA_ENVIAEMAILAOGERARFINAN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_ENVIAEMAILGERENCIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_ENVIARCOBRANCAPIXWHATSAPP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_ENVIARPEDIDOBAIXARENEGOCIADOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_ENVIARPEDIDOBAIXARENEGOCIADOSDEBITO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_FILTRAINICIONN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_FINALIZARCOBBF_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_FONECLIENTECAPA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_FORMATODETALHAMENTOFATURA_LABELS = {
	plano: "plano",
	produto: "produto",
} as const;

export const FNCARTEIRACOBRANCA_GERAPIXGATEWAY_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPNOMEBENEFICIARIO_LABELS = {
	R: "R",
	F: "F",
} as const;

export const FNCARTEIRACOBRANCA_IMPNOMEBENEFICIARIORECIBO_LABELS = {
	R: "R",
	F: "F",
} as const;

export const FNCARTEIRACOBRANCA_IMPNOMESACADORAVALISTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPORTADOGATEWAY_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPRIMEENDERECOBOLETO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPRIMEFONEFATURAD_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPRIMELIGACOESVOIP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPRIMEPRODVALZERO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPRIMETIPORESOLUCAOANATEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPRIMIRBENEFICIARIOGATEWAY_LABELS = {
	C: "C",
	G: "G",
	A: "A",
	N: "N",
	F: "F",
} as const;

export const FNCARTEIRACOBRANCA_IMPRIMIRFILIALCONTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_IMPRIMIRFILIALVENDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_LANCATARIFAGATEWAY_LABELS = {
	N: "N",
	I: "I",
	R: "R",
} as const;

export const FNCARTEIRACOBRANCA_LANCATARIFAPIX_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_LANCAMENTOTARIFA_LABELS = {
	L: "L",
	C: "C",
} as const;

export const FNCARTEIRACOBRANCA_MASKCPFCNPJIMPRESSAOBOLETO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_MOSTRACEPBENEFICIARIOIMPRESSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_NOVAAPI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_NOVAINTFORTUNUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_OBSFNARECEBER_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PEDIDOBAIXAAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PEDIDOBAIXAAUTOMATICORECCARTAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PEDIDOBAIXAAUTOMATICORECMANUAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PEDIDOBAIXAAUTOMATICORECPIX_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PEDIDOBAIXAAUTOMATICORECORENCIACARTAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PERMITEATUALIZARBOLETOAPOSDATAIXC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PERMITEPAGAMENTOPORCHAVEPIX_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PERMITERETENTATIVASPIXRECORRENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_PIXAMBIENTE_LABELS = {
	P: "P",
	H: "H",
} as const;

export const FNCARTEIRACOBRANCA_PROTESTAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_QUEMDISTRIBUI_LABELS = {
	1: "1",
	2: "2",
} as const;

export const FNCARTEIRACOBRANCA_QUEMEMITE_LABELS = {
	1: "1",
	2: "2",
} as const;

export const FNCARTEIRACOBRANCA_RECEBIMENTOPARCIALGATEWAY_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_REGISTRADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_REMESSACOMMENSAGEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_SUBSTRAIRTARIFA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_TIPO_LABELS = {
	B: "B",
} as const;

export const FNCARTEIRACOBRANCA_TIPOBAIXA_LABELS = {
	D: "D",
	P: "P",
	B: "B",
} as const;

export const FNCARTEIRACOBRANCA_TIPOCARTEIRA_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
} as const;

export const FNCARTEIRACOBRANCA_TIPOCHAVEPIX_LABELS = {
	CPF_CNPJ: "CPF_CNPJ",
	CELULAR: "CELULAR",
	EMAIL: "EMAIL",
	ALEATORIA: "ALEATORIA",
	COPIA_E_COLA: "COPIA_E_COLA",
} as const;

export const FNCARTEIRACOBRANCA_TIPODATABAIXA_LABELS = {
	DC: "DC",
	DO: "DO",
} as const;

export const FNCARTEIRACOBRANCA_TIPORECEBIMENTO_LABELS = {
	Boleto: "Boleto",
	Cheque: "Cheque",
	Cartão: "Cartão",
	Dinheiro: "Dinheiro",
	Depósito: "Depósito",
	Gateway: "Gateway",
	Débito: "Débito",
	Fatura: "Fatura",
	ArrecadacaoRecebimento: "ArrecadacaoRecebimento",
	Pix: "Pix",
} as const;

export const FNCARTEIRACOBRANCA_USEWEBHOOKURLCALLBACK_LABELS = {
	N: "N",
	S: "S",
} as const;

export const FNCARTEIRACOBRANCA_UTILIZACARNE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_UTILIZAPIXRECORRENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_UTILIZARBAIXAAPOSVENCIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_UTLIZANUMEROPARCELAFIXO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_VALIDARCLIENTESBLOQUEADOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_VALIDARCLIENTESNEGATIVADOSREMESSA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_VALIDARJUROSMULTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_VALIDARRECEBIDOSREMESSA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_VALIDARVENCIDOSREMESSA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCARTEIRACOBRANCA_VERSAOAPI_LABELS = {
	v1: "v1",
	v2: "v2",
	v3: "v3",
} as const;

export const FNCARTEIRACOBRANCA_VERSAOINTEGRACAOBANRISUL_LABELS = {
	v1: "v1",
	v2: "v2",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_carteira_cobrancaAdicionaObsDescricaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "adiciona_obs_descricao: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaAdicionaRemessaAutoAltDataSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "adiciona_remessa_auto_alt_data: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaAdicionaVencDescricaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "adiciona_venc_descricao: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaAgruparProdutosPorDescricaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "agrupar_produtos_por_descricao: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaAmbienteHomologacaoGatewaySchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "ambiente_homologacao_gateway: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaAmbienteTesteSchema = z.enum(["P", "H"], {
	error: () => ({ message: "ambiente_teste: valores válidos são [P, H]" }),
});

export const fn_carteira_cobrancaAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaBaixaAutomaticaSchema = z.enum(
	["S", "N", "C"],
	{
		error: () => ({
			message: "baixa_automatica: valores válidos são [S, N, C]",
		}),
	},
);

export const fn_carteira_cobrancaBoletoCapaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "boleto_capa: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaBoletoCapaClienteReferenciaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "boleto_capa_cliente_referencia: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaBoletoCapaLocalSchema = z.enum(["I", "F"], {
	error: () => ({ message: "boleto_capa_local: valores válidos são [I, F]" }),
});

export const fn_carteira_cobrancaBoletoLocalAtualizaSchema = z.enum(
	["S", "B"],
	{
		error: () => ({
			message: "boleto_local_atualiza: valores válidos são [S, B]",
		}),
	},
);

export const fn_carteira_cobrancaBoletosCapaContratosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "boletos_capa_contratos: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCalcularJurosSchema = z.enum(["D", "V"], {
	error: () => ({ message: "calcular_juros: valores válidos são [D, V]" }),
});

export const fn_carteira_cobrancaConsiderarModeloNaoFiscalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "considerar_modelo_nao_fiscal: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaContaGatewayAtivaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "conta_gateway_ativa: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaContabilizaRetornoFilialEmissaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "contabiliza_retorno_filial_emissao: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditCardRepassarTaxaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "credit_card_repassar_taxa: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditCardTaxaEmPagamentosSchema = z.enum(
	["I", "R", "A"],
	{
		error: () => ({
			message: "credit_card_taxa_em_pagamentos: valores válidos são [I, R, A]",
		}),
	},
);

export const fn_carteira_cobrancaCreditCardTipoSchema = z.enum(
	["A", "D", "C"],
	{
		error: () => ({
			message: "credit_card_tipo: valores válidos são [A, D, C]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardAmbienteSchema = z.enum(
	["T", "P", "H"],
	{
		error: () => ({
			message: "creditCard_ambiente: valores válidos são [T, P, H]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardAutenticarSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditCard_autenticar: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraAmSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_am: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraAuSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_au: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraCaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_ca: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraDcSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_dc: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraDnSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_dn: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraElSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_el: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraJcSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_jc: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraMaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_ma: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardBanceiraViSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "creditcard_banceira_vi: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaCreditcardCapturarSchema = z.enum(["S", "N"], {
	error: () => ({ message: "creditCard_capturar: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaCreditcardLocalSchema = z.enum(["L", "C"], {
	error: () => ({ message: "creditCard_local: valores válidos são [L, C]" }),
});

export const fn_carteira_cobrancaCreditcardParcelamentoSchema = z.enum(
	["L", "C"],
	{
		error: () => ({
			message: "creditCard_parcelamento: valores válidos são [L, C]",
		}),
	},
);

export const fn_carteira_cobrancaDescontoProporcionalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "desconto_proporcional: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaEnderecoEnvioCobrancaSchema = z.enum(
	["1", "2"],
	{
		error: () => ({
			message: "endereco_envio_cobranca: valores válidos são [1, 2]",
		}),
	},
);

export const fn_carteira_cobrancaEnviaEmailAoGerarFinanSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "envia_email_ao_gerar_finan: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaEnviaEmailGerenciaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "envia_email_gerencia: valores válidos são [S, N]",
	}),
});

export const fn_carteira_cobrancaEnviarCobrancaPixWhatsappSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enviar_cobranca_pix_whatsapp: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaEnviarPedidoBaixaRenegociadosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enviar_pedido_baixa_renegociados: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaEnviarPedidoBaixaRenegociadosDebitoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"enviar_pedido_baixa_renegociados_debito: valores válidos são [S, N]",
		}),
	});

export const fn_carteira_cobrancaFiltraInicioNnSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtra_inicio_nn: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaFinalizarCobBfSchema = z.enum(["S", "N"], {
	error: () => ({ message: "finalizar_cob_bf: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaFoneClienteCapaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "fone_cliente_capa: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaFormatoDetalhamentoFaturaSchema = z.enum(
	["plano", "produto"],
	{
		error: () => ({
			message:
				"formato_detalhamento_fatura: valores válidos são [plano, produto]",
		}),
	},
);

export const fn_carteira_cobrancaGeraPixGatewaySchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_pix_gateway: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaImpNomeBeneficiarioSchema = z.enum(
	["R", "F"],
	{
		error: () => ({
			message: "imp_nome_beneficiario: valores válidos são [R, F]",
		}),
	},
);

export const fn_carteira_cobrancaImpNomeBeneficiarioReciboSchema = z.enum(
	["R", "F"],
	{
		error: () => ({
			message: "imp_nome_beneficiario_recibo: valores válidos são [R, F]",
		}),
	},
);

export const fn_carteira_cobrancaImpNomeSacadorAvalistaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "imp_nome_sacador_avalista: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaImportadoGatewaySchema = z.enum(["S", "N"], {
	error: () => ({ message: "importado_gateway: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaImprimeEnderecoBoletoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "imprime_endereco_boleto: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaImprimeFoneFaturaDSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "imprime_fone_fatura_d: valores válidos são [S, N]",
	}),
});

export const fn_carteira_cobrancaImprimeLigacoesVoipSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "imprime_ligacoes_voip: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaImprimeProdValZeroSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "imprime_prod_val_zero: valores válidos são [S, N]",
	}),
});

export const fn_carteira_cobrancaImprimeTipoResolucaoAnatelSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "imprime_tipo_resolucao_anatel: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaImprimirBeneficiarioGatewaySchema = z.enum(
	["C", "G", "A", "N", "F"],
	{
		error: () => ({
			message:
				"imprimir_beneficiario_gateway: valores válidos são [C, G, A, N, F]",
		}),
	},
);

export const fn_carteira_cobrancaImprimirFilialContaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "imprimir_filial_conta: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaImprimirFilialVendaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "imprimir_filial_venda: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaLancaTarifaGatewaySchema = z.enum(
	["N", "I", "R"],
	{
		error: () => ({
			message: "lanca_tarifa_gateway: valores válidos são [N, I, R]",
		}),
	},
);

export const fn_carteira_cobrancaLancaTarifaPixSchema = z.enum(["S", "N"], {
	error: () => ({ message: "lanca_tarifa_pix: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaLancamentoTarifaSchema = z.enum(["L", "C"], {
	error: () => ({ message: "lancamento_tarifa: valores válidos são [L, C]" }),
});

export const fn_carteira_cobrancaMaskCpfCnpjImpressaoBoletoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "mask_cpf_cnpj_impressao_boleto: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaMostraCepBeneficiarioImpressaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "mostra_cep_beneficiario_impressao: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaNovaApiSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nova_api: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaNovaIntFortunusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nova_int_fortunus: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaObsFnAreceberSchema = z.enum(["S", "N"], {
	error: () => ({ message: "obs_fn_areceber: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaPedidoBaixaAutomaticoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "pedido_baixa_automatico: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaPedidoBaixaAutomaticoRecCartaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "pedido_baixa_automatico_rec_cartao: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaPedidoBaixaAutomaticoRecManualSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "pedido_baixa_automatico_rec_manual: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaPedidoBaixaAutomaticoRecPixSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "pedido_baixa_automatico_rec_pix: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaPedidoBaixaAutomaticoRecorenciaCartaoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"pedido_baixa_automatico_recorencia_cartao: valores válidos são [S, N]",
		}),
	});

export const fn_carteira_cobrancaPermiteAtualizarBoletoAposDataIxcSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"permite_atualizar_boleto_apos_data_ixc: valores válidos são [S, N]",
		}),
	});

export const fn_carteira_cobrancaPermitePagamentoPorChavePixSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permite_pagamento_por_chave_pix: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaPermiteRetentativasPixRecorrenteSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"permite_retentativas_pix_recorrente: valores válidos são [S, N]",
		}),
	});

export const fn_carteira_cobrancaPixAmbienteSchema = z.enum(["P", "H"], {
	error: () => ({ message: "pix_ambiente: valores válidos são [P, H]" }),
});

export const fn_carteira_cobrancaProtestarSchema = z.enum(["S", "N"], {
	error: () => ({ message: "protestar: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaQuemDistribuiSchema = z.enum(["1", "2"], {
	error: () => ({ message: "quem_distribui: valores válidos são [1, 2]" }),
});

export const fn_carteira_cobrancaQuemEmiteSchema = z.enum(["1", "2"], {
	error: () => ({ message: "quem_emite: valores válidos são [1, 2]" }),
});

export const fn_carteira_cobrancaRecebimentoParcialGatewaySchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "recebimento_parcial_gateway: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaRegistradoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "registrado: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaRemessaComMensagemSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "remessa_com_mensagem: valores válidos são [S, N]",
	}),
});

export const fn_carteira_cobrancaSubstrairTarifaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "substrair_tarifa: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaTipoSchema = z.enum(["B"], {
	error: () => ({ message: "tipo: valores válidos são [B]" }),
});

export const fn_carteira_cobrancaTipoBaixaSchema = z.enum(["D", "P", "B"], {
	error: () => ({ message: "tipo_baixa: valores válidos são [D, P, B]" }),
});

export const fn_carteira_cobrancaTipoCarteiraSchema = z.enum(
	["1", "2", "3", "4", "5"],
	{
		error: () => ({
			message: "tipo_carteira: valores válidos são [1, 2, 3, 4, 5]",
		}),
	},
);

export const fn_carteira_cobrancaTipoChavePixSchema = z.enum(
	["CPF_CNPJ", "CELULAR", "EMAIL", "ALEATORIA", "COPIA_E_COLA"],
	{
		error: () => ({
			message:
				"tipo_chave_pix: valores válidos são [CPF_CNPJ, CELULAR, EMAIL, ALEATORIA, COPIA_E_COLA]",
		}),
	},
);

export const fn_carteira_cobrancaTipoDataBaixaSchema = z.enum(["DC", "DO"], {
	error: () => ({ message: "tipo_data_baixa: valores válidos são [DC, DO]" }),
});

export const fn_carteira_cobrancaTipoRecebimentoSchema = z.enum(
	[
		"Boleto",
		"Cheque",
		"Cartão",
		"Dinheiro",
		"Depósito",
		"Gateway",
		"Débito",
		"Fatura",
		"ArrecadacaoRecebimento",
		"Pix",
	],
	{
		error: () => ({
			message:
				"tipo_recebimento: valores válidos são [Boleto, Cheque, Cartão, Dinheiro, Depósito, Gateway, Débito, Fatura, ArrecadacaoRecebimento, Pix]",
		}),
	},
);

export const fn_carteira_cobrancaUseWebhookUrlCallbackSchema = z.enum(
	["N", "S"],
	{
		error: () => ({
			message: "use_webhook_url_callback: valores válidos são [N, S]",
		}),
	},
);

export const fn_carteira_cobrancaUtilizaCarneSchema = z.enum(["S", "N"], {
	error: () => ({ message: "utiliza_carne: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaUtilizaPixRecorrenteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utiliza_pix_recorrente: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaUtilizarBaixaAposVencimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utilizar_baixa_apos_vencimento: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaUtlizaNumeroParcelaFixoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utliza_numero_parcela_fixo: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaValidarClientesBloqueadosSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "validar_clientes_bloqueados: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaValidarClientesNegativadosRemessaSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"validar_clientes_negativados_remessa: valores válidos são [S, N]",
		}),
	});

export const fn_carteira_cobrancaValidarJurosMultaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "validar_juros_multa: valores válidos são [S, N]" }),
});

export const fn_carteira_cobrancaValidarRecebidosRemessaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "validar_recebidos_remessa: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaValidarVencidosRemessaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "validar_vencidos_remessa: valores válidos são [S, N]",
		}),
	},
);

export const fn_carteira_cobrancaVersaoApiSchema = z.enum(["v1", "v2", "v3"], {
	error: () => ({ message: "versao_api: valores válidos são [v1, v2, v3]" }),
});

export const fn_carteira_cobrancaVersaoIntegracaoBanrisulSchema = z.enum(
	["v1", "v2"],
	{
		error: () => ({
			message: "versao_integracao_banrisul: valores válidos são [v1, v2]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnCarteiraCobrancaAdicionaObsDescricao = z.infer<
	typeof fn_carteira_cobrancaAdicionaObsDescricaoSchema
>;

export type FnCarteiraCobrancaAdicionaRemessaAutoAltData = z.infer<
	typeof fn_carteira_cobrancaAdicionaRemessaAutoAltDataSchema
>;

export type FnCarteiraCobrancaAdicionaVencDescricao = z.infer<
	typeof fn_carteira_cobrancaAdicionaVencDescricaoSchema
>;

export type FnCarteiraCobrancaAgruparProdutosPorDescricao = z.infer<
	typeof fn_carteira_cobrancaAgruparProdutosPorDescricaoSchema
>;

export type FnCarteiraCobrancaAmbienteHomologacaoGateway = z.infer<
	typeof fn_carteira_cobrancaAmbienteHomologacaoGatewaySchema
>;

export type FnCarteiraCobrancaAmbienteTeste = z.infer<
	typeof fn_carteira_cobrancaAmbienteTesteSchema
>;

export type FnCarteiraCobrancaAtivo = z.infer<
	typeof fn_carteira_cobrancaAtivoSchema
>;

export type FnCarteiraCobrancaBaixaAutomatica = z.infer<
	typeof fn_carteira_cobrancaBaixaAutomaticaSchema
>;

export type FnCarteiraCobrancaBoletoCapa = z.infer<
	typeof fn_carteira_cobrancaBoletoCapaSchema
>;

export type FnCarteiraCobrancaBoletoCapaClienteReferencia = z.infer<
	typeof fn_carteira_cobrancaBoletoCapaClienteReferenciaSchema
>;

export type FnCarteiraCobrancaBoletoCapaLocal = z.infer<
	typeof fn_carteira_cobrancaBoletoCapaLocalSchema
>;

export type FnCarteiraCobrancaBoletoLocalAtualiza = z.infer<
	typeof fn_carteira_cobrancaBoletoLocalAtualizaSchema
>;

export type FnCarteiraCobrancaBoletosCapaContratos = z.infer<
	typeof fn_carteira_cobrancaBoletosCapaContratosSchema
>;

export type FnCarteiraCobrancaCalcularJuros = z.infer<
	typeof fn_carteira_cobrancaCalcularJurosSchema
>;

export type FnCarteiraCobrancaConsiderarModeloNaoFiscal = z.infer<
	typeof fn_carteira_cobrancaConsiderarModeloNaoFiscalSchema
>;

export type FnCarteiraCobrancaContaGatewayAtiva = z.infer<
	typeof fn_carteira_cobrancaContaGatewayAtivaSchema
>;

export type FnCarteiraCobrancaContabilizaRetornoFilialEmissao = z.infer<
	typeof fn_carteira_cobrancaContabilizaRetornoFilialEmissaoSchema
>;

export type FnCarteiraCobrancaCreditCardRepassarTaxa = z.infer<
	typeof fn_carteira_cobrancaCreditCardRepassarTaxaSchema
>;

export type FnCarteiraCobrancaCreditCardTaxaEmPagamentos = z.infer<
	typeof fn_carteira_cobrancaCreditCardTaxaEmPagamentosSchema
>;

export type FnCarteiraCobrancaCreditCardTipo = z.infer<
	typeof fn_carteira_cobrancaCreditCardTipoSchema
>;

export type FnCarteiraCobrancaCreditcardAmbiente = z.infer<
	typeof fn_carteira_cobrancaCreditcardAmbienteSchema
>;

export type FnCarteiraCobrancaCreditcardAutenticar = z.infer<
	typeof fn_carteira_cobrancaCreditcardAutenticarSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraAm = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraAmSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraAu = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraAuSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraCa = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraCaSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraDc = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraDcSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraDn = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraDnSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraEl = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraElSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraJc = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraJcSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraMa = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraMaSchema
>;

export type FnCarteiraCobrancaCreditcardBanceiraVi = z.infer<
	typeof fn_carteira_cobrancaCreditcardBanceiraViSchema
>;

export type FnCarteiraCobrancaCreditcardCapturar = z.infer<
	typeof fn_carteira_cobrancaCreditcardCapturarSchema
>;

export type FnCarteiraCobrancaCreditcardLocal = z.infer<
	typeof fn_carteira_cobrancaCreditcardLocalSchema
>;

export type FnCarteiraCobrancaCreditcardParcelamento = z.infer<
	typeof fn_carteira_cobrancaCreditcardParcelamentoSchema
>;

export type FnCarteiraCobrancaDescontoProporcional = z.infer<
	typeof fn_carteira_cobrancaDescontoProporcionalSchema
>;

export type FnCarteiraCobrancaEnderecoEnvioCobranca = z.infer<
	typeof fn_carteira_cobrancaEnderecoEnvioCobrancaSchema
>;

export type FnCarteiraCobrancaEnviaEmailAoGerarFinan = z.infer<
	typeof fn_carteira_cobrancaEnviaEmailAoGerarFinanSchema
>;

export type FnCarteiraCobrancaEnviaEmailGerencia = z.infer<
	typeof fn_carteira_cobrancaEnviaEmailGerenciaSchema
>;

export type FnCarteiraCobrancaEnviarCobrancaPixWhatsapp = z.infer<
	typeof fn_carteira_cobrancaEnviarCobrancaPixWhatsappSchema
>;

export type FnCarteiraCobrancaEnviarPedidoBaixaRenegociados = z.infer<
	typeof fn_carteira_cobrancaEnviarPedidoBaixaRenegociadosSchema
>;

export type FnCarteiraCobrancaEnviarPedidoBaixaRenegociadosDebito = z.infer<
	typeof fn_carteira_cobrancaEnviarPedidoBaixaRenegociadosDebitoSchema
>;

export type FnCarteiraCobrancaFiltraInicioNn = z.infer<
	typeof fn_carteira_cobrancaFiltraInicioNnSchema
>;

export type FnCarteiraCobrancaFinalizarCobBf = z.infer<
	typeof fn_carteira_cobrancaFinalizarCobBfSchema
>;

export type FnCarteiraCobrancaFoneClienteCapa = z.infer<
	typeof fn_carteira_cobrancaFoneClienteCapaSchema
>;

export type FnCarteiraCobrancaFormatoDetalhamentoFatura = z.infer<
	typeof fn_carteira_cobrancaFormatoDetalhamentoFaturaSchema
>;

export type FnCarteiraCobrancaGeraPixGateway = z.infer<
	typeof fn_carteira_cobrancaGeraPixGatewaySchema
>;

export type FnCarteiraCobrancaImpNomeBeneficiario = z.infer<
	typeof fn_carteira_cobrancaImpNomeBeneficiarioSchema
>;

export type FnCarteiraCobrancaImpNomeBeneficiarioRecibo = z.infer<
	typeof fn_carteira_cobrancaImpNomeBeneficiarioReciboSchema
>;

export type FnCarteiraCobrancaImpNomeSacadorAvalista = z.infer<
	typeof fn_carteira_cobrancaImpNomeSacadorAvalistaSchema
>;

export type FnCarteiraCobrancaImportadoGateway = z.infer<
	typeof fn_carteira_cobrancaImportadoGatewaySchema
>;

export type FnCarteiraCobrancaImprimeEnderecoBoleto = z.infer<
	typeof fn_carteira_cobrancaImprimeEnderecoBoletoSchema
>;

export type FnCarteiraCobrancaImprimeFoneFaturaD = z.infer<
	typeof fn_carteira_cobrancaImprimeFoneFaturaDSchema
>;

export type FnCarteiraCobrancaImprimeLigacoesVoip = z.infer<
	typeof fn_carteira_cobrancaImprimeLigacoesVoipSchema
>;

export type FnCarteiraCobrancaImprimeProdValZero = z.infer<
	typeof fn_carteira_cobrancaImprimeProdValZeroSchema
>;

export type FnCarteiraCobrancaImprimeTipoResolucaoAnatel = z.infer<
	typeof fn_carteira_cobrancaImprimeTipoResolucaoAnatelSchema
>;

export type FnCarteiraCobrancaImprimirBeneficiarioGateway = z.infer<
	typeof fn_carteira_cobrancaImprimirBeneficiarioGatewaySchema
>;

export type FnCarteiraCobrancaImprimirFilialConta = z.infer<
	typeof fn_carteira_cobrancaImprimirFilialContaSchema
>;

export type FnCarteiraCobrancaImprimirFilialVenda = z.infer<
	typeof fn_carteira_cobrancaImprimirFilialVendaSchema
>;

export type FnCarteiraCobrancaLancaTarifaGateway = z.infer<
	typeof fn_carteira_cobrancaLancaTarifaGatewaySchema
>;

export type FnCarteiraCobrancaLancaTarifaPix = z.infer<
	typeof fn_carteira_cobrancaLancaTarifaPixSchema
>;

export type FnCarteiraCobrancaLancamentoTarifa = z.infer<
	typeof fn_carteira_cobrancaLancamentoTarifaSchema
>;

export type FnCarteiraCobrancaMaskCpfCnpjImpressaoBoleto = z.infer<
	typeof fn_carteira_cobrancaMaskCpfCnpjImpressaoBoletoSchema
>;

export type FnCarteiraCobrancaMostraCepBeneficiarioImpressao = z.infer<
	typeof fn_carteira_cobrancaMostraCepBeneficiarioImpressaoSchema
>;

export type FnCarteiraCobrancaNovaApi = z.infer<
	typeof fn_carteira_cobrancaNovaApiSchema
>;

export type FnCarteiraCobrancaNovaIntFortunus = z.infer<
	typeof fn_carteira_cobrancaNovaIntFortunusSchema
>;

export type FnCarteiraCobrancaObsFnAreceber = z.infer<
	typeof fn_carteira_cobrancaObsFnAreceberSchema
>;

export type FnCarteiraCobrancaPedidoBaixaAutomatico = z.infer<
	typeof fn_carteira_cobrancaPedidoBaixaAutomaticoSchema
>;

export type FnCarteiraCobrancaPedidoBaixaAutomaticoRecCartao = z.infer<
	typeof fn_carteira_cobrancaPedidoBaixaAutomaticoRecCartaoSchema
>;

export type FnCarteiraCobrancaPedidoBaixaAutomaticoRecManual = z.infer<
	typeof fn_carteira_cobrancaPedidoBaixaAutomaticoRecManualSchema
>;

export type FnCarteiraCobrancaPedidoBaixaAutomaticoRecPix = z.infer<
	typeof fn_carteira_cobrancaPedidoBaixaAutomaticoRecPixSchema
>;

export type FnCarteiraCobrancaPedidoBaixaAutomaticoRecorenciaCartao = z.infer<
	typeof fn_carteira_cobrancaPedidoBaixaAutomaticoRecorenciaCartaoSchema
>;

export type FnCarteiraCobrancaPermiteAtualizarBoletoAposDataIxc = z.infer<
	typeof fn_carteira_cobrancaPermiteAtualizarBoletoAposDataIxcSchema
>;

export type FnCarteiraCobrancaPermitePagamentoPorChavePix = z.infer<
	typeof fn_carteira_cobrancaPermitePagamentoPorChavePixSchema
>;

export type FnCarteiraCobrancaPermiteRetentativasPixRecorrente = z.infer<
	typeof fn_carteira_cobrancaPermiteRetentativasPixRecorrenteSchema
>;

export type FnCarteiraCobrancaPixAmbiente = z.infer<
	typeof fn_carteira_cobrancaPixAmbienteSchema
>;

export type FnCarteiraCobrancaProtestar = z.infer<
	typeof fn_carteira_cobrancaProtestarSchema
>;

export type FnCarteiraCobrancaQuemDistribui = z.infer<
	typeof fn_carteira_cobrancaQuemDistribuiSchema
>;

export type FnCarteiraCobrancaQuemEmite = z.infer<
	typeof fn_carteira_cobrancaQuemEmiteSchema
>;

export type FnCarteiraCobrancaRecebimentoParcialGateway = z.infer<
	typeof fn_carteira_cobrancaRecebimentoParcialGatewaySchema
>;

export type FnCarteiraCobrancaRegistrado = z.infer<
	typeof fn_carteira_cobrancaRegistradoSchema
>;

export type FnCarteiraCobrancaRemessaComMensagem = z.infer<
	typeof fn_carteira_cobrancaRemessaComMensagemSchema
>;

export type FnCarteiraCobrancaSubstrairTarifa = z.infer<
	typeof fn_carteira_cobrancaSubstrairTarifaSchema
>;

export type FnCarteiraCobrancaTipo = z.infer<
	typeof fn_carteira_cobrancaTipoSchema
>;

export type FnCarteiraCobrancaTipoBaixa = z.infer<
	typeof fn_carteira_cobrancaTipoBaixaSchema
>;

export type FnCarteiraCobrancaTipoCarteira = z.infer<
	typeof fn_carteira_cobrancaTipoCarteiraSchema
>;

export type FnCarteiraCobrancaTipoChavePix = z.infer<
	typeof fn_carteira_cobrancaTipoChavePixSchema
>;

export type FnCarteiraCobrancaTipoDataBaixa = z.infer<
	typeof fn_carteira_cobrancaTipoDataBaixaSchema
>;

export type FnCarteiraCobrancaTipoRecebimento = z.infer<
	typeof fn_carteira_cobrancaTipoRecebimentoSchema
>;

export type FnCarteiraCobrancaUseWebhookUrlCallback = z.infer<
	typeof fn_carteira_cobrancaUseWebhookUrlCallbackSchema
>;

export type FnCarteiraCobrancaUtilizaCarne = z.infer<
	typeof fn_carteira_cobrancaUtilizaCarneSchema
>;

export type FnCarteiraCobrancaUtilizaPixRecorrente = z.infer<
	typeof fn_carteira_cobrancaUtilizaPixRecorrenteSchema
>;

export type FnCarteiraCobrancaUtilizarBaixaAposVencimento = z.infer<
	typeof fn_carteira_cobrancaUtilizarBaixaAposVencimentoSchema
>;

export type FnCarteiraCobrancaUtlizaNumeroParcelaFixo = z.infer<
	typeof fn_carteira_cobrancaUtlizaNumeroParcelaFixoSchema
>;

export type FnCarteiraCobrancaValidarClientesBloqueados = z.infer<
	typeof fn_carteira_cobrancaValidarClientesBloqueadosSchema
>;

export type FnCarteiraCobrancaValidarClientesNegativadosRemessa = z.infer<
	typeof fn_carteira_cobrancaValidarClientesNegativadosRemessaSchema
>;

export type FnCarteiraCobrancaValidarJurosMulta = z.infer<
	typeof fn_carteira_cobrancaValidarJurosMultaSchema
>;

export type FnCarteiraCobrancaValidarRecebidosRemessa = z.infer<
	typeof fn_carteira_cobrancaValidarRecebidosRemessaSchema
>;

export type FnCarteiraCobrancaValidarVencidosRemessa = z.infer<
	typeof fn_carteira_cobrancaValidarVencidosRemessaSchema
>;

export type FnCarteiraCobrancaVersaoApi = z.infer<
	typeof fn_carteira_cobrancaVersaoApiSchema
>;

export type FnCarteiraCobrancaVersaoIntegracaoBanrisul = z.infer<
	typeof fn_carteira_cobrancaVersaoIntegracaoBanrisulSchema
>;
