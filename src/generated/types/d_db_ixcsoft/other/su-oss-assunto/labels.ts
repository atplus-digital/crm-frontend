/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUOSSASSUNTO_FIELD_LABELS = {
	assunto: "assunto",
	ativo: "ativo",
	card_data_reservada: "card_data_reservada",
	conceder_desconto_login_regiao_manutencao:
		"conceder_desconto_login_regiao_manutencao",
	considerar_sla: "considerar_sla",
	conta_limite_os_viab: "conta_limite_os_viab",
	contrato_obrigatorio: "contrato_obrigatorio",
	cor_marcador: "cor_marcador",
	descricao: "descricao",
	diagnostico_obrigatorio_finalizacao_os:
		"diagnostico_obrigatorio_finalizacao_os",
	endereco_padrao: "endereco_padrao",
	equipe_obrigatoria_finalizacao_os: "equipe_obrigatoria_finalizacao_os",
	exige_comodato_finalizar_os: "exige_comodato_finalizar_os",
	exige_fotos_finalizacao_os: "exige_fotos_finalizacao_os",
	exige_produto_finalizar_os: "exige_produto_finalizar_os",
	fat_somente_finalizada: "fat_somente_finalizada",
	finalidade: "finalidade",
	formato_endereco: "formato_endereco",
	habilita_assinatura_cliente: "habilita_assinatura_cliente",
	habilitar_mini_projeto: "habilitar_mini_projeto",
	horario_tempo_assunto: "horario_tempo_assunto",
	id: "id",
	id_checklist: "id_checklist",
	id_cond_pag_patrimonio_venda: "id_cond_pag_patrimonio_venda",
	id_cond_pag_produto: "id_cond_pag_produto",
	id_cond_pag_servico: "id_cond_pag_servico",
	id_feedback: "id_feedback",
	id_msg_omnichannel_deslocamento: "id_msg_omnichannel_deslocamento",
	id_oss_kit: "id_oss_kit",
	id_processo: "id_processo",
	id_questionario: "id_questionario",
	id_questionario_analise_risco: "id_questionario_analise_risco",
	id_resposta_padrao: "id_resposta_padrao",
	id_resposta_padrao_finalizacao: "id_resposta_padrao_finalizacao",
	id_sms_deslocamento: "id_sms_deslocamento",
	id_tipo_doc_comodato: "id_tipo_doc_comodato",
	id_tipo_doc_patrimonio_venda: "id_tipo_doc_patrimonio_venda",
	id_tipo_doc_pedido: "id_tipo_doc_pedido",
	id_tipo_doc_servico: "id_tipo_doc_servico",
	id_vendedor_faturamento: "id_vendedor_faturamento",
	imprimir_prod_serv: "imprimir_prod_serv",
	imprimir_produto: "imprimir_produto",
	imprimir_servico: "imprimir_servico",
	integracao_assinatura_digital: "integracao_assinatura_digital",
	layout_impressao: "layout_impressao",
	localizacao_obrigatoria_cliente_finalizacao_os:
		"localizacao_obrigatoria_cliente_finalizacao_os",
	localizacao_obrigatoria_login_finalizacao_os:
		"localizacao_obrigatoria_login_finalizacao_os",
	login_obrigatorio: "login_obrigatorio",
	mesclar_mini_projetos_ao_finalizar_os:
		"mesclar_mini_projetos_ao_finalizar_os",
	meta_horas_abertura: "meta_horas_abertura",
	meta_horas_agendamento: "meta_horas_agendamento",
	metas_horas_abertura_ticket: "metas_horas_abertura_ticket",
	modelo_email: "modelo_email",
	mostra_hotsite: "mostra_hotsite",
	mostrar_checklist_analise_risco: "mostrar_checklist_analise_risco",
	mostrar_no_service: "mostrar_no_service",
	msg_regiao_manutencao: "msg_regiao_manutencao",
	numero_de_vias: "numero_de_vias",
	obrigar_preenchimento_canal_atendimento:
		"obrigar_preenchimento_canal_atendimento",
	obrigar_processo_atendimento: "obrigar_processo_atendimento",
	obrigatorio_status_complementar: "obrigatorio_status_complementar",
	permite_abrir_cliente_atraso: "permite_abrir_cliente_atraso",
	prioridade_padrao: "prioridade_padrao",
	quantidade_equipamentos: "quantidade_equipamentos",
	quantidade_fotos_finalizacao_os: "quantidade_fotos_finalizacao_os",
	quantidade_produtos: "quantidade_produtos",
	service_mobile_max_parc_adic_serv: "service_mobile_max_parc_adic_serv",
	setor_su_oss_chamado: "setor_su_oss_chamado",
	sla_apenas_dias_uteis: "sla_apenas_dias_uteis",
	su_oss_modelo_impressao: "su_oss_modelo_impressao",
	tipo: "tipo",
	tipo_cobranca: "tipo_cobranca",
	tipo_comissao: "tipo_comissao",
	ultima_atualizacao: "ultima_atualizacao",
	validar_choque_horarios_agendamento_os:
		"validar_choque_horarios_agendamento_os",
	valor_comissao: "valor_comissao",
	wiz_arquivos: "wiz_arquivos",
	wiz_assinatura: "wiz_assinatura",
	wiz_assinatura_obrig: "wiz_assinatura_obrig",
	wiz_autorizar_ONU: "wiz_autorizar_ONU",
	wiz_comodato: "wiz_comodato",
	wiz_dados_tecnicos: "wiz_dados_tecnicos",
	wiz_localizacao: "wiz_localizacao",
	wiz_mensalidade: "wiz_mensalidade",
	wiz_produtos: "wiz_produtos",
	wiz_resumo_os: "wiz_resumo_os",
	wiz_service_mobile_adicionais: "wiz_service_mobile_adicionais",
	wiz_service_mobile_anexos: "wiz_service_mobile_anexos",
	wiz_service_mobile_checklist: "wiz_service_mobile_checklist",
	wiz_service_mobile_config_dispositivo:
		"wiz_service_mobile_config_dispositivo",
	wiz_service_mobile_enviar_sms_deslocamento:
		"wiz_service_mobile_enviar_sms_deslocamento",
	wiz_service_mobile_loc: "wiz_service_mobile_loc",
	wiz_service_mobile_onu: "wiz_service_mobile_onu",
	wiz_service_mobile_prod_imobilizados: "wiz_service_mobile_prod_imobilizados",
	wiz_service_mobile_prod_outros: "wiz_service_mobile_prod_outros",
	wiz_servico: "wiz_servico",
} as const;

export const SUOSSASSUNTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_CARDDATARESERVADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_CONCEDERDESCONTOLOGINREGIAOMANUTENCAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_CONSIDERARSLA_LABELS = {
	AB: "AB",
	AG: "AG",
} as const;

export const SUOSSASSUNTO_CONTALIMITEOSVIAB_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_CONTRATOOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_DIAGNOSTICOOBRIGATORIOFINALIZACAOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_ENDERECOPADRAO_LABELS = {
	C: "C",
	L: "L",
	CC: "CC",
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_EQUIPEOBRIGATORIAFINALIZACAOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_EXIGECOMODATOFINALIZAROS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_EXIGEFOTOSFINALIZACAOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_EXIGEPRODUTOFINALIZAROS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_FATSOMENTEFINALIZADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_FINALIDADE_LABELS = {
	OS: "OS",
	AT: "AT",
	AM: "AM",
} as const;

export const SUOSSASSUNTO_HABILITAASSINATURACLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_HABILITARMINIPROJETO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_IMPRIMIRPRODSERV_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_IMPRIMIRPRODUTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_IMPRIMIRSERVICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_INTEGRACAOASSINATURADIGITAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_LOCALIZACAOOBRIGATORIACLIENTEFINALIZACAOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_LOCALIZACAOOBRIGATORIALOGINFINALIZACAOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_LOGINOBRIGATORIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_MESCLARMINIPROJETOSAOFINALIZAROS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_MOSTRAHOTSITE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_MOSTRARCHECKLISTANALISERISCO_LABELS = {
	i: "i",
	F: "F",
	N: "N",
} as const;

export const SUOSSASSUNTO_MOSTRARNOSERVICE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_OBRIGARPREENCHIMENTOCANALATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_OBRIGARPROCESSOATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_OBRIGATORIOSTATUSCOMPLEMENTAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_PERMITEABRIRCLIENTEATRASO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const SUOSSASSUNTO_PRIORIDADEPADRAO_LABELS = {
	B: "B",
	N: "N",
	A: "A",
	C: "C",
} as const;

export const SUOSSASSUNTO_SLAAPENASDIASUTEIS_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const SUOSSASSUNTO_TIPO_LABELS = {
	C: "C",
	E: "E",
	A: "A",
} as const;

export const SUOSSASSUNTO_TIPOCOBRANCA_LABELS = {
	FAT: "FAT",
	AM: "AM",
	GAR: "GAR",
	NENHUM: "NENHUM",
} as const;

export const SUOSSASSUNTO_TIPOCOMISSAO_LABELS = {
	F: "F",
	H: "H",
} as const;

export const SUOSSASSUNTO_VALIDARCHOQUEHORARIOSAGENDAMENTOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_WIZARQUIVOS_LABELS = {
	M: "M",
	E: "E",
	O: "O",
} as const;

export const SUOSSASSUNTO_WIZASSINATURA_LABELS = {
	M: "M",
	E: "E",
	O: "O",
} as const;

export const SUOSSASSUNTO_WIZASSINATURAOBRIG_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSASSUNTO_WIZAUTORIZARONU_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZCOMODATO_LABELS = {
	M: "M",
	E: "E",
	O: "O",
} as const;

export const SUOSSASSUNTO_WIZDADOSTECNICOS_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZLOCALIZACAO_LABELS = {
	M: "M",
	E: "E",
	O: "O",
} as const;

export const SUOSSASSUNTO_WIZMENSALIDADE_LABELS = {
	M: "M",
	E: "E",
	O: "O",
} as const;

export const SUOSSASSUNTO_WIZPRODUTOS_LABELS = {
	M: "M",
	E: "E",
	O: "O",
} as const;

export const SUOSSASSUNTO_WIZRESUMOOS_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILEADICIONAIS_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILEANEXOS_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILECHECKLIST_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILECONFIGDISPOSITIVO_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILEENVIARSMSDESLOCAMENTO_LABELS = {
	S: "S",
	N: "N",
	O: "O",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILELOC_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILEONU_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILEPRODIMOBILIZADOS_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICEMOBILEPRODOUTROS_LABELS = {
	M: "M",
	E: "E",
} as const;

export const SUOSSASSUNTO_WIZSERVICO_LABELS = {
	M: "M",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_oss_assuntoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const su_oss_assuntoCardDataReservadaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "card_data_reservada: valores válidos são [S, N]" }),
});

export const su_oss_assuntoConcederDescontoLoginRegiaoManutencaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"conceder_desconto_login_regiao_manutencao: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoConsiderarSlaSchema = z.enum(["AB", "AG"], {
	error: () => ({ message: "considerar_sla: valores válidos são [AB, AG]" }),
});

export const su_oss_assuntoContaLimiteOsViabSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "conta_limite_os_viab: valores válidos são [S, N]",
	}),
});

export const su_oss_assuntoContratoObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "contrato_obrigatorio: valores válidos são [S, N]",
	}),
});

export const su_oss_assuntoDiagnosticoObrigatorioFinalizacaoOsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"diagnostico_obrigatorio_finalizacao_os: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoEnderecoPadraoSchema = z.enum(
	["C", "L", "CC", "M", "E"],
	{
		error: () => ({
			message: "endereco_padrao: valores válidos são [C, L, CC, M, E]",
		}),
	},
);

export const su_oss_assuntoEquipeObrigatoriaFinalizacaoOsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "equipe_obrigatoria_finalizacao_os: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoExigeComodatoFinalizarOsSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exige_comodato_finalizar_os: valores válidos são [S, N]",
	}),
});

export const su_oss_assuntoExigeFotosFinalizacaoOsSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exige_fotos_finalizacao_os: valores válidos são [S, N]",
	}),
});

export const su_oss_assuntoExigeProdutoFinalizarOsSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exige_produto_finalizar_os: valores válidos são [S, N]",
	}),
});

export const su_oss_assuntoFatSomenteFinalizadaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "fat_somente_finalizada: valores válidos são [S, N]",
	}),
});

export const su_oss_assuntoFinalidadeSchema = z.enum(["OS", "AT", "AM"], {
	error: () => ({ message: "finalidade: valores válidos são [OS, AT, AM]" }),
});

export const su_oss_assuntoHabilitaAssinaturaClienteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "habilita_assinatura_cliente: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoHabilitarMiniProjetoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "habilitar_mini_projeto: valores válidos são [S, N]",
	}),
});

export const su_oss_assuntoImprimirProdServSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imprimir_prod_serv: valores válidos são [S, N]" }),
});

export const su_oss_assuntoImprimirProdutoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imprimir_produto: valores válidos são [S, N]" }),
});

export const su_oss_assuntoImprimirServicoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imprimir_servico: valores válidos são [S, N]" }),
});

export const su_oss_assuntoIntegracaoAssinaturaDigitalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "integracao_assinatura_digital: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoLocalizacaoObrigatoriaClienteFinalizacaoOsSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"localizacao_obrigatoria_cliente_finalizacao_os: valores válidos são [S, N]",
		}),
	});

export const su_oss_assuntoLocalizacaoObrigatoriaLoginFinalizacaoOsSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"localizacao_obrigatoria_login_finalizacao_os: valores válidos são [S, N]",
		}),
	});

export const su_oss_assuntoLoginObrigatorioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "login_obrigatorio: valores válidos são [S, N]" }),
});

export const su_oss_assuntoMesclarMiniProjetosAoFinalizarOsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"mesclar_mini_projetos_ao_finalizar_os: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoMostraHotsiteSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mostra_hotsite: valores válidos são [S, N]" }),
});

export const su_oss_assuntoMostrarChecklistAnaliseRiscoSchema = z.enum(
	["i", "F", "N"],
	{
		error: () => ({
			message: "mostrar_checklist_analise_risco: valores válidos são [i, F, N]",
		}),
	},
);

export const su_oss_assuntoMostrarNoServiceSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mostrar_no_service: valores válidos são [S, N]" }),
});

export const su_oss_assuntoObrigarPreenchimentoCanalAtendimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"obrigar_preenchimento_canal_atendimento: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoObrigarProcessoAtendimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "obrigar_processo_atendimento: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoObrigatorioStatusComplementarSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "obrigatorio_status_complementar: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoPermiteAbrirClienteAtrasoSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "permite_abrir_cliente_atraso: valores válidos são [S, N, P]",
		}),
	},
);

export const su_oss_assuntoPrioridadePadraoSchema = z.enum(
	["B", "N", "A", "C"],
	{
		error: () => ({
			message: "prioridade_padrao: valores válidos são [B, N, A, C]",
		}),
	},
);

export const su_oss_assuntoSlaApenasDiasUteisSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "sla_apenas_dias_uteis: valores válidos são [S, N, P]",
	}),
});

export const su_oss_assuntoTipoSchema = z.enum(["C", "E", "A"], {
	error: () => ({ message: "tipo: valores válidos são [C, E, A]" }),
});

export const su_oss_assuntoTipoCobrancaSchema = z.enum(
	["FAT", "AM", "GAR", "NENHUM"],
	{
		error: () => ({
			message: "tipo_cobranca: valores válidos são [FAT, AM, GAR, NENHUM]",
		}),
	},
);

export const su_oss_assuntoTipoComissaoSchema = z.enum(["F", "H"], {
	error: () => ({ message: "tipo_comissao: valores válidos são [F, H]" }),
});

export const su_oss_assuntoValidarChoqueHorariosAgendamentoOsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"validar_choque_horarios_agendamento_os: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_assuntoWizArquivosSchema = z.enum(["M", "E", "O"], {
	error: () => ({ message: "wiz_arquivos: valores válidos são [M, E, O]" }),
});

export const su_oss_assuntoWizAssinaturaSchema = z.enum(["M", "E", "O"], {
	error: () => ({ message: "wiz_assinatura: valores válidos são [M, E, O]" }),
});

export const su_oss_assuntoWizAssinaturaObrigSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "wiz_assinatura_obrig: valores válidos são [S, N]",
	}),
});

export const su_oss_assuntoWizAutorizarOnuSchema = z.enum(["M", "E"], {
	error: () => ({ message: "wiz_autorizar_ONU: valores válidos são [M, E]" }),
});

export const su_oss_assuntoWizComodatoSchema = z.enum(["M", "E", "O"], {
	error: () => ({ message: "wiz_comodato: valores válidos são [M, E, O]" }),
});

export const su_oss_assuntoWizDadosTecnicosSchema = z.enum(["M", "E"], {
	error: () => ({ message: "wiz_dados_tecnicos: valores válidos são [M, E]" }),
});

export const su_oss_assuntoWizLocalizacaoSchema = z.enum(["M", "E", "O"], {
	error: () => ({ message: "wiz_localizacao: valores válidos são [M, E, O]" }),
});

export const su_oss_assuntoWizMensalidadeSchema = z.enum(["M", "E", "O"], {
	error: () => ({ message: "wiz_mensalidade: valores válidos são [M, E, O]" }),
});

export const su_oss_assuntoWizProdutosSchema = z.enum(["M", "E", "O"], {
	error: () => ({ message: "wiz_produtos: valores válidos são [M, E, O]" }),
});

export const su_oss_assuntoWizResumoOsSchema = z.enum(["M", "E"], {
	error: () => ({ message: "wiz_resumo_os: valores válidos são [M, E]" }),
});

export const su_oss_assuntoWizServiceMobileAdicionaisSchema = z.enum(
	["M", "E"],
	{
		error: () => ({
			message: "wiz_service_mobile_adicionais: valores válidos são [M, E]",
		}),
	},
);

export const su_oss_assuntoWizServiceMobileAnexosSchema = z.enum(["M", "E"], {
	error: () => ({
		message: "wiz_service_mobile_anexos: valores válidos são [M, E]",
	}),
});

export const su_oss_assuntoWizServiceMobileChecklistSchema = z.enum(
	["M", "E"],
	{
		error: () => ({
			message: "wiz_service_mobile_checklist: valores válidos são [M, E]",
		}),
	},
);

export const su_oss_assuntoWizServiceMobileConfigDispositivoSchema = z.enum(
	["M", "E"],
	{
		error: () => ({
			message:
				"wiz_service_mobile_config_dispositivo: valores válidos são [M, E]",
		}),
	},
);

export const su_oss_assuntoWizServiceMobileEnviarSmsDeslocamentoSchema = z.enum(
	["S", "N", "O"],
	{
		error: () => ({
			message:
				"wiz_service_mobile_enviar_sms_deslocamento: valores válidos são [S, N, O]",
		}),
	},
);

export const su_oss_assuntoWizServiceMobileLocSchema = z.enum(["M", "E"], {
	error: () => ({
		message: "wiz_service_mobile_loc: valores válidos são [M, E]",
	}),
});

export const su_oss_assuntoWizServiceMobileOnuSchema = z.enum(["M", "E"], {
	error: () => ({
		message: "wiz_service_mobile_onu: valores válidos são [M, E]",
	}),
});

export const su_oss_assuntoWizServiceMobileProdImobilizadosSchema = z.enum(
	["M", "E"],
	{
		error: () => ({
			message:
				"wiz_service_mobile_prod_imobilizados: valores válidos são [M, E]",
		}),
	},
);

export const su_oss_assuntoWizServiceMobileProdOutrosSchema = z.enum(
	["M", "E"],
	{
		error: () => ({
			message: "wiz_service_mobile_prod_outros: valores válidos são [M, E]",
		}),
	},
);

export const su_oss_assuntoWizServicoSchema = z.enum(["M", "E"], {
	error: () => ({ message: "wiz_servico: valores válidos são [M, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuOssAssuntoAtivo = z.infer<typeof su_oss_assuntoAtivoSchema>;

export type SuOssAssuntoCardDataReservada = z.infer<
	typeof su_oss_assuntoCardDataReservadaSchema
>;

export type SuOssAssuntoConcederDescontoLoginRegiaoManutencao = z.infer<
	typeof su_oss_assuntoConcederDescontoLoginRegiaoManutencaoSchema
>;

export type SuOssAssuntoConsiderarSla = z.infer<
	typeof su_oss_assuntoConsiderarSlaSchema
>;

export type SuOssAssuntoContaLimiteOsViab = z.infer<
	typeof su_oss_assuntoContaLimiteOsViabSchema
>;

export type SuOssAssuntoContratoObrigatorio = z.infer<
	typeof su_oss_assuntoContratoObrigatorioSchema
>;

export type SuOssAssuntoDiagnosticoObrigatorioFinalizacaoOs = z.infer<
	typeof su_oss_assuntoDiagnosticoObrigatorioFinalizacaoOsSchema
>;

export type SuOssAssuntoEnderecoPadrao = z.infer<
	typeof su_oss_assuntoEnderecoPadraoSchema
>;

export type SuOssAssuntoEquipeObrigatoriaFinalizacaoOs = z.infer<
	typeof su_oss_assuntoEquipeObrigatoriaFinalizacaoOsSchema
>;

export type SuOssAssuntoExigeComodatoFinalizarOs = z.infer<
	typeof su_oss_assuntoExigeComodatoFinalizarOsSchema
>;

export type SuOssAssuntoExigeFotosFinalizacaoOs = z.infer<
	typeof su_oss_assuntoExigeFotosFinalizacaoOsSchema
>;

export type SuOssAssuntoExigeProdutoFinalizarOs = z.infer<
	typeof su_oss_assuntoExigeProdutoFinalizarOsSchema
>;

export type SuOssAssuntoFatSomenteFinalizada = z.infer<
	typeof su_oss_assuntoFatSomenteFinalizadaSchema
>;

export type SuOssAssuntoFinalidade = z.infer<
	typeof su_oss_assuntoFinalidadeSchema
>;

export type SuOssAssuntoHabilitaAssinaturaCliente = z.infer<
	typeof su_oss_assuntoHabilitaAssinaturaClienteSchema
>;

export type SuOssAssuntoHabilitarMiniProjeto = z.infer<
	typeof su_oss_assuntoHabilitarMiniProjetoSchema
>;

export type SuOssAssuntoImprimirProdServ = z.infer<
	typeof su_oss_assuntoImprimirProdServSchema
>;

export type SuOssAssuntoImprimirProduto = z.infer<
	typeof su_oss_assuntoImprimirProdutoSchema
>;

export type SuOssAssuntoImprimirServico = z.infer<
	typeof su_oss_assuntoImprimirServicoSchema
>;

export type SuOssAssuntoIntegracaoAssinaturaDigital = z.infer<
	typeof su_oss_assuntoIntegracaoAssinaturaDigitalSchema
>;

export type SuOssAssuntoLocalizacaoObrigatoriaClienteFinalizacaoOs = z.infer<
	typeof su_oss_assuntoLocalizacaoObrigatoriaClienteFinalizacaoOsSchema
>;

export type SuOssAssuntoLocalizacaoObrigatoriaLoginFinalizacaoOs = z.infer<
	typeof su_oss_assuntoLocalizacaoObrigatoriaLoginFinalizacaoOsSchema
>;

export type SuOssAssuntoLoginObrigatorio = z.infer<
	typeof su_oss_assuntoLoginObrigatorioSchema
>;

export type SuOssAssuntoMesclarMiniProjetosAoFinalizarOs = z.infer<
	typeof su_oss_assuntoMesclarMiniProjetosAoFinalizarOsSchema
>;

export type SuOssAssuntoMostraHotsite = z.infer<
	typeof su_oss_assuntoMostraHotsiteSchema
>;

export type SuOssAssuntoMostrarChecklistAnaliseRisco = z.infer<
	typeof su_oss_assuntoMostrarChecklistAnaliseRiscoSchema
>;

export type SuOssAssuntoMostrarNoService = z.infer<
	typeof su_oss_assuntoMostrarNoServiceSchema
>;

export type SuOssAssuntoObrigarPreenchimentoCanalAtendimento = z.infer<
	typeof su_oss_assuntoObrigarPreenchimentoCanalAtendimentoSchema
>;

export type SuOssAssuntoObrigarProcessoAtendimento = z.infer<
	typeof su_oss_assuntoObrigarProcessoAtendimentoSchema
>;

export type SuOssAssuntoObrigatorioStatusComplementar = z.infer<
	typeof su_oss_assuntoObrigatorioStatusComplementarSchema
>;

export type SuOssAssuntoPermiteAbrirClienteAtraso = z.infer<
	typeof su_oss_assuntoPermiteAbrirClienteAtrasoSchema
>;

export type SuOssAssuntoPrioridadePadrao = z.infer<
	typeof su_oss_assuntoPrioridadePadraoSchema
>;

export type SuOssAssuntoSlaApenasDiasUteis = z.infer<
	typeof su_oss_assuntoSlaApenasDiasUteisSchema
>;

export type SuOssAssuntoTipo = z.infer<typeof su_oss_assuntoTipoSchema>;

export type SuOssAssuntoTipoCobranca = z.infer<
	typeof su_oss_assuntoTipoCobrancaSchema
>;

export type SuOssAssuntoTipoComissao = z.infer<
	typeof su_oss_assuntoTipoComissaoSchema
>;

export type SuOssAssuntoValidarChoqueHorariosAgendamentoOs = z.infer<
	typeof su_oss_assuntoValidarChoqueHorariosAgendamentoOsSchema
>;

export type SuOssAssuntoWizArquivos = z.infer<
	typeof su_oss_assuntoWizArquivosSchema
>;

export type SuOssAssuntoWizAssinatura = z.infer<
	typeof su_oss_assuntoWizAssinaturaSchema
>;

export type SuOssAssuntoWizAssinaturaObrig = z.infer<
	typeof su_oss_assuntoWizAssinaturaObrigSchema
>;

export type SuOssAssuntoWizAutorizarOnu = z.infer<
	typeof su_oss_assuntoWizAutorizarOnuSchema
>;

export type SuOssAssuntoWizComodato = z.infer<
	typeof su_oss_assuntoWizComodatoSchema
>;

export type SuOssAssuntoWizDadosTecnicos = z.infer<
	typeof su_oss_assuntoWizDadosTecnicosSchema
>;

export type SuOssAssuntoWizLocalizacao = z.infer<
	typeof su_oss_assuntoWizLocalizacaoSchema
>;

export type SuOssAssuntoWizMensalidade = z.infer<
	typeof su_oss_assuntoWizMensalidadeSchema
>;

export type SuOssAssuntoWizProdutos = z.infer<
	typeof su_oss_assuntoWizProdutosSchema
>;

export type SuOssAssuntoWizResumoOs = z.infer<
	typeof su_oss_assuntoWizResumoOsSchema
>;

export type SuOssAssuntoWizServiceMobileAdicionais = z.infer<
	typeof su_oss_assuntoWizServiceMobileAdicionaisSchema
>;

export type SuOssAssuntoWizServiceMobileAnexos = z.infer<
	typeof su_oss_assuntoWizServiceMobileAnexosSchema
>;

export type SuOssAssuntoWizServiceMobileChecklist = z.infer<
	typeof su_oss_assuntoWizServiceMobileChecklistSchema
>;

export type SuOssAssuntoWizServiceMobileConfigDispositivo = z.infer<
	typeof su_oss_assuntoWizServiceMobileConfigDispositivoSchema
>;

export type SuOssAssuntoWizServiceMobileEnviarSmsDeslocamento = z.infer<
	typeof su_oss_assuntoWizServiceMobileEnviarSmsDeslocamentoSchema
>;

export type SuOssAssuntoWizServiceMobileLoc = z.infer<
	typeof su_oss_assuntoWizServiceMobileLocSchema
>;

export type SuOssAssuntoWizServiceMobileOnu = z.infer<
	typeof su_oss_assuntoWizServiceMobileOnuSchema
>;

export type SuOssAssuntoWizServiceMobileProdImobilizados = z.infer<
	typeof su_oss_assuntoWizServiceMobileProdImobilizadosSchema
>;

export type SuOssAssuntoWizServiceMobileProdOutros = z.infer<
	typeof su_oss_assuntoWizServiceMobileProdOutrosSchema
>;

export type SuOssAssuntoWizServico = z.infer<
	typeof su_oss_assuntoWizServicoSchema
>;
