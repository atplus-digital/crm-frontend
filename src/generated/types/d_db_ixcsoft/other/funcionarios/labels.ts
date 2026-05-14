/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FUNCIONARIOS_FIELD_LABELS = {
	agencia: "agencia",
	agencia_dv: "agencia_dv",
	ativo: "ativo",
	bairro: "bairro",
	banco: "banco",
	camara_centralizadora: "camara_centralizadora",
	camiseta: "camiseta",
	cep: "cep",
	chave_pix: "chave_pix",
	cidade: "cidade",
	cnh_numero: "cnh_numero",
	cnh_seleciona: "cnh_seleciona",
	cnh_vencimento: "cnh_vencimento",
	cod_integracao_folha: "cod_integracao_folha",
	coeficiente: "coeficiente",
	complemento: "complemento",
	conta: "conta",
	cor_mapa: "cor_mapa",
	cor_raca: "cor_raca",
	cpf_cnpj: "cpf_cnpj",
	cpf_conjuge: "cpf_conjuge",
	cpf_seleciona: "cpf_seleciona",
	ctps_cidade_emissao: "ctps_cidade_emissao",
	ctps_data_emissao: "ctps_data_emissao",
	ctps_numero: "ctps_numero",
	ctps_seleciona: "ctps_seleciona",
	ctps_serie: "ctps_serie",
	data_admissao: "data_admissao",
	data_demissao: "data_demissao",
	data_nascimento: "data_nascimento",
	dep_dois_cpf: "dep_dois_cpf",
	dep_dois_nome: "dep_dois_nome",
	dep_dois_rg: "dep_dois_rg",
	dep_tres_cpf: "dep_tres_cpf",
	dep_tres_nome: "dep_tres_nome",
	dep_tres_rg: "dep_tres_rg",
	dep_um_cpf: "dep_um_cpf",
	dep_um_nome: "dep_um_nome",
	dep_um_rg: "dep_um_rg",
	dependentes_ir: "dependentes_ir",
	email: "email",
	endereco: "endereco",
	envia_email_os: "envia_email_os",
	envia_sms_os: "envia_sms_os",
	envia_telegram_os: "envia_telegram_os",
	estado_civil: "estado_civil",
	estagio_escolaridade: "estagio_escolaridade",
	exibir_colaborador_inmap: "exibir_colaborador_inmap",
	f_funcionarios_arquivos: "NC Funcionarios Arquivos",
	falar_com: "falar_com",
	ferias_colaborador: "ferias_colaborador",
	filial_id: "filial_id",
	fone: "fone",
	fone_celular: "fone_celular",
	fone_emergencia: "fone_emergencia",
	funcionario: "funcionario",
	gps_time: "gps_time",
	grau_escolaridade: "grau_escolaridade",
	id: "id",
	id_centro_custo_categoria_filtro: "id_centro_custo_categoria_filtro",
	id_centro_custo_criterio_rateio: "id_centro_custo_criterio_rateio",
	id_centro_custo_rel_centro_custo_categoria:
		"id_centro_custo_rel_centro_custo_categoria",
	id_chat_telegram_funcionario: "id_chat_telegram_funcionario",
	id_conta: "id_conta",
	id_conta_decimo: "id_conta_decimo",
	id_conta_salario: "id_conta_salario",
	id_departamento: "id_departamento",
	id_email_smtp: "id_email_smtp",
	id_funcao: "id_funcao",
	id_perfil_jornada_trabalho: "id_perfil_jornada_trabalho",
	id_setor_padrao: "id_setor_padrao",
	id_veiculo_padrao: "id_veiculo_padrao",
	ie_identidade: "ie_identidade",
	img_assinatura: "img_assinatura",
	integracao_calendario: "integracao_calendario",
	last_location_update: "last_location_update",
	maximo_os_dia: "maximo_os_dia",
	mostrar_no_quadro_kanban: "mostrar_no_quadro_kanban",
	nacionalidade: "nacionalidade",
	nome_conjuge: "nome_conjuge",
	nome_mae: "nome_mae",
	nome_pai: "nome_pai",
	num_dependentes: "num_dependentes",
	num_manequim: "num_manequim",
	numero: "numero",
	numero_conta_dv: "numero_conta_dv",
	obrigar_marcar_quilometragem: "obrigar_marcar_quilometragem",
	obs: "obs",
	percen_max_desc_areceber: "percen_max_desc_areceber",
	periodo_escolaridade: "periodo_escolaridade",
	pipe_id_usuario: "pipe_id_usuario",
	pis_data: "pis_data",
	pis_numero: "pis_numero",
	pis_seleciona: "pis_seleciona",
	possui_deficiencia: "possui_deficiencia",
	prj_custo_hora_adicionais: "prj_custo_hora_adicionais",
	prj_custo_hora_base: "prj_custo_hora_base",
	ramal: "ramal",
	rastreador: "rastreador",
	rastreador_tipo: "rastreador_tipo",
	referencia: "referencia",
	regra_centro_rateio: "regra_centro_rateio",
	rg_conjuge: "rg_conjuge",
	rg_data_emissao: "rg_data_emissao",
	rg_orgao_emissor: "rg_orgao_emissor",
	rg_seleciona: "rg_seleciona",
	salario: "salario",
	telefone_comercial: "telefone_comercial",
	telegram_chat_id_funcionario: "telegram_chat_id_funcionario",
	tipo_chave_pix: "tipo_chave_pix",
	tipo_deficiencia: "tipo_deficiencia",
	tipo_documento_identificacao_col: "tipo_documento_identificacao_col",
	tipo_recebimento: "tipo_recebimento",
	titulo_eleitoral_seleciona: "titulo_eleitoral_seleciona",
	titulo_numero: "titulo_numero",
	titulo_secao: "titulo_secao",
	titulo_zona: "titulo_zona",
	uf: "uf",
	ultima_atualizacao: "ultima_atualizacao",
	ultima_latitude: "ultima_latitude",
	ultima_longitude: "ultima_longitude",
	vinculo_config_roteirizacao: "vinculo_config_roteirizacao",
} as const;

export const FUNCIONARIOS_ATIVO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const FUNCIONARIOS_CAMISETA_LABELS = {
	P: "P",
	PP: "PP",
	M: "M",
	G: "G",
	GG: "GG",
	O: "O",
} as const;

export const FUNCIONARIOS_CNHSELECIONA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_CORRACA_LABELS = {
	A: "A",
	B: "B",
	I: "I",
	P: "P",
	N: "N",
	O: "O",
} as const;

export const FUNCIONARIOS_CPFSELECIONA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_CTPSSELECIONA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_ENVIAEMAILOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_ENVIASMSOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_ENVIATELEGRAMOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_ESTADOCIVIL_LABELS = {
	S: "S",
	C: "C",
	UE: "UE",
	D: "D",
	V: "V",
	SE: "SE",
} as const;

export const FUNCIONARIOS_ESTAGIOESCOLARIDADE_LABELS = {
	C: "C",
	CR: "CR",
	I: "I",
} as const;

export const FUNCIONARIOS_EXIBIRCOLABORADORINMAP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_FERIASCOLABORADOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_GRAUESCOLARIDADE_LABELS = {
	EF: "EF",
	EM: "EM",
	ES: "ES",
	PG: "PG",
	M: "M",
	D: "D",
} as const;

export const FUNCIONARIOS_INTEGRACAOCALENDARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_MOSTRARNOQUADROKANBAN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_OBRIGARMARCARQUILOMETRAGEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_PERIODOESCOLARIDADE_LABELS = {
	M: "M",
	V: "V",
	N: "N",
} as const;

export const FUNCIONARIOS_PISSELECIONA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_POSSUIDEFICIENCIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_RASTREADORTIPO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_REGRACENTRORATEIO_LABELS = {
	CE: "CE",
	CR: "CR",
} as const;

export const FUNCIONARIOS_RGSELECIONA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_TIPOCHAVEPIX_LABELS = {
	cpf_cnpj: "cpf_cnpj",
	celular: "celular",
	email: "email",
	aleatoria: "aleatoria",
	codigo_copia_cola: "codigo_copia_cola",
} as const;

export const FUNCIONARIOS_TIPODEFICIENCIA_LABELS = {
	F: "F",
	A: "A",
	V: "V",
	M: "M",
	MR: "MR",
} as const;

export const FUNCIONARIOS_TIPODOCUMENTOIDENTIFICACAOCOL_LABELS = {
	11: "11",
	12: "12",
	13: "13",
	21: "21",
	22: "22",
	31: "31",
	41: "41",
	42: "42",
	47: "47",
	50: "50",
	91: "91",
	CI: "CI",
	RUC: "RUC",
	NUIT: "NUIT",
} as const;

export const FUNCIONARIOS_TIPORECEBIMENTO_LABELS = {
	C: "C",
	B: "B",
	D: "D",
} as const;

export const FUNCIONARIOS_TITULOELEITORALSELECIONA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FUNCIONARIOS_VINCULOCONFIGROTEIRIZACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const funcionariosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [Sim, Não]" }),
});

export const funcionariosCamisetaSchema = z.enum(
	["P", "PP", "M", "G", "GG", "O"],
	{
		error: () => ({
			message: "camiseta: valores válidos são [P, PP, M, G, GG, O]",
		}),
	},
);

export const funcionariosCnhSelecionaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cnh_seleciona: valores válidos são [S, N]" }),
});

export const funcionariosCorRacaSchema = z.enum(
	["A", "B", "I", "P", "N", "O"],
	{
		error: () => ({
			message: "cor_raca: valores válidos são [A, B, I, P, N, O]",
		}),
	},
);

export const funcionariosCpfSelecionaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cpf_seleciona: valores válidos são [S, N]" }),
});

export const funcionariosCtpsSelecionaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ctps_seleciona: valores válidos são [S, N]" }),
});

export const funcionariosEnviaEmailOsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "envia_email_os: valores válidos são [S, N]" }),
});

export const funcionariosEnviaSmsOsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "envia_sms_os: valores válidos são [S, N]" }),
});

export const funcionariosEnviaTelegramOsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "envia_telegram_os: valores válidos são [S, N]" }),
});

export const funcionariosEstadoCivilSchema = z.enum(
	["S", "C", "UE", "D", "V", "SE"],
	{
		error: () => ({
			message: "estado_civil: valores válidos são [S, C, UE, D, V, SE]",
		}),
	},
);

export const funcionariosEstagioEscolaridadeSchema = z.enum(["C", "CR", "I"], {
	error: () => ({
		message: "estagio_escolaridade: valores válidos são [C, CR, I]",
	}),
});

export const funcionariosExibirColaboradorInmapSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exibir_colaborador_inmap: valores válidos são [S, N]",
	}),
});

export const funcionariosFeriasColaboradorSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ferias_colaborador: valores válidos são [S, N]" }),
});

export const funcionariosGrauEscolaridadeSchema = z.enum(
	["EF", "EM", "ES", "PG", "M", "D"],
	{
		error: () => ({
			message: "grau_escolaridade: valores válidos são [EF, EM, ES, PG, M, D]",
		}),
	},
);

export const funcionariosIntegracaoCalendarioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "integracao_calendario: valores válidos são [S, N]",
	}),
});

export const funcionariosMostrarNoQuadroKanbanSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_no_quadro_kanban: valores válidos são [S, N]",
	}),
});

export const funcionariosObrigarMarcarQuilometragemSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "obrigar_marcar_quilometragem: valores válidos são [S, N]",
	}),
});

export const funcionariosPeriodoEscolaridadeSchema = z.enum(["M", "V", "N"], {
	error: () => ({
		message: "periodo_escolaridade: valores válidos são [M, V, N]",
	}),
});

export const funcionariosPisSelecionaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pis_seleciona: valores válidos são [S, N]" }),
});

export const funcionariosPossuiDeficienciaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "possui_deficiencia: valores válidos são [S, N]" }),
});

export const funcionariosRastreadorTipoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "rastreador_tipo: valores válidos são [S, N]" }),
});

export const funcionariosRegraCentroRateioSchema = z.enum(["CE", "CR"], {
	error: () => ({
		message: "regra_centro_rateio: valores válidos são [CE, CR]",
	}),
});

export const funcionariosRgSelecionaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "rg_seleciona: valores válidos são [S, N]" }),
});

export const funcionariosTipoChavePixSchema = z.enum(
	["cpf_cnpj", "celular", "email", "aleatoria", "codigo_copia_cola"],
	{
		error: () => ({
			message:
				"tipo_chave_pix: valores válidos são [cpf_cnpj, celular, email, aleatoria, codigo_copia_cola]",
		}),
	},
);

export const funcionariosTipoDeficienciaSchema = z.enum(
	["F", "A", "V", "M", "MR"],
	{
		error: () => ({
			message: "tipo_deficiencia: valores válidos são [F, A, V, M, MR]",
		}),
	},
);

export const funcionariosTipoDocumentoIdentificacaoColSchema = z.enum(
	[
		"11",
		"12",
		"13",
		"21",
		"22",
		"31",
		"41",
		"42",
		"47",
		"50",
		"91",
		"CI",
		"RUC",
		"NUIT",
	],
	{
		error: () => ({
			message:
				"tipo_documento_identificacao_col: valores válidos são [11, 12, 13, 21, 22, 31, 41, 42, 47, 50, 91, CI, RUC, NUIT]",
		}),
	},
);

export const funcionariosTipoRecebimentoSchema = z.enum(["C", "B", "D"], {
	error: () => ({ message: "tipo_recebimento: valores válidos são [C, B, D]" }),
});

export const funcionariosTituloEleitoralSelecionaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "titulo_eleitoral_seleciona: valores válidos são [S, N]",
	}),
});

export const funcionariosVinculoConfigRoteirizacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "vinculo_config_roteirizacao: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FuncionariosAtivo = z.infer<typeof funcionariosAtivoSchema>;

export type FuncionariosCamiseta = z.infer<typeof funcionariosCamisetaSchema>;

export type FuncionariosCnhSeleciona = z.infer<
	typeof funcionariosCnhSelecionaSchema
>;

export type FuncionariosCorRaca = z.infer<typeof funcionariosCorRacaSchema>;

export type FuncionariosCpfSeleciona = z.infer<
	typeof funcionariosCpfSelecionaSchema
>;

export type FuncionariosCtpsSeleciona = z.infer<
	typeof funcionariosCtpsSelecionaSchema
>;

export type FuncionariosEnviaEmailOs = z.infer<
	typeof funcionariosEnviaEmailOsSchema
>;

export type FuncionariosEnviaSmsOs = z.infer<
	typeof funcionariosEnviaSmsOsSchema
>;

export type FuncionariosEnviaTelegramOs = z.infer<
	typeof funcionariosEnviaTelegramOsSchema
>;

export type FuncionariosEstadoCivil = z.infer<
	typeof funcionariosEstadoCivilSchema
>;

export type FuncionariosEstagioEscolaridade = z.infer<
	typeof funcionariosEstagioEscolaridadeSchema
>;

export type FuncionariosExibirColaboradorInmap = z.infer<
	typeof funcionariosExibirColaboradorInmapSchema
>;

export type FuncionariosFeriasColaborador = z.infer<
	typeof funcionariosFeriasColaboradorSchema
>;

export type FuncionariosGrauEscolaridade = z.infer<
	typeof funcionariosGrauEscolaridadeSchema
>;

export type FuncionariosIntegracaoCalendario = z.infer<
	typeof funcionariosIntegracaoCalendarioSchema
>;

export type FuncionariosMostrarNoQuadroKanban = z.infer<
	typeof funcionariosMostrarNoQuadroKanbanSchema
>;

export type FuncionariosObrigarMarcarQuilometragem = z.infer<
	typeof funcionariosObrigarMarcarQuilometragemSchema
>;

export type FuncionariosPeriodoEscolaridade = z.infer<
	typeof funcionariosPeriodoEscolaridadeSchema
>;

export type FuncionariosPisSeleciona = z.infer<
	typeof funcionariosPisSelecionaSchema
>;

export type FuncionariosPossuiDeficiencia = z.infer<
	typeof funcionariosPossuiDeficienciaSchema
>;

export type FuncionariosRastreadorTipo = z.infer<
	typeof funcionariosRastreadorTipoSchema
>;

export type FuncionariosRegraCentroRateio = z.infer<
	typeof funcionariosRegraCentroRateioSchema
>;

export type FuncionariosRgSeleciona = z.infer<
	typeof funcionariosRgSelecionaSchema
>;

export type FuncionariosTipoChavePix = z.infer<
	typeof funcionariosTipoChavePixSchema
>;

export type FuncionariosTipoDeficiencia = z.infer<
	typeof funcionariosTipoDeficienciaSchema
>;

export type FuncionariosTipoDocumentoIdentificacaoCol = z.infer<
	typeof funcionariosTipoDocumentoIdentificacaoColSchema
>;

export type FuncionariosTipoRecebimento = z.infer<
	typeof funcionariosTipoRecebimentoSchema
>;

export type FuncionariosTituloEleitoralSeleciona = z.infer<
	typeof funcionariosTituloEleitoralSelecionaSchema
>;

export type FuncionariosVinculoConfigRoteirizacao = z.infer<
	typeof funcionariosVinculoConfigRoteirizacaoSchema
>;
