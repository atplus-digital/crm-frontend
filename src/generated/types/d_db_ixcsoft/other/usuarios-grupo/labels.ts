/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSGRUPO_FIELD_LABELS = {
	acesso_avancado_querybuilder: "acesso_avancado_querybuilder",
	acesso_querybuilder: "acesso_querybuilder",
	acesso_upvoty_ixc: "acesso_upvoty_ixc",
	ativo: "ativo",
	config_totp_access: "config_totp_access",
	dash_acessos: "dash_acessos",
	dash_atendimento: "dash_atendimento",
	dash_cliente_chave: "dash_cliente_chave",
	dash_cobrancas: "dash_cobrancas",
	dash_contas_a_pagar: "dash_contas_a_pagar",
	dash_contas_a_receber: "dash_contas_a_receber",
	dash_contratos: "dash_contratos",
	dash_crm: "dash_crm",
	dash_crm_corporativo: "dash_crm_corporativo",
	dash_crm_pessoa_fisica: "dash_crm_pessoa_fisica",
	dash_crm_user: "dash_crm_user",
	dash_faturas: "dash_faturas",
	dash_financeiro: "dash_financeiro",
	dash_monitoramento_fibra: "dash_monitoramento_fibra",
	dash_negociacoes: "dash_negociacoes",
	dash_ordem_servico: "dash_ordem_servico",
	dash_ordem_servico_user: "dash_ordem_servico_user",
	dash_principal: "dash_principal",
	dash_radius: "dash_radius",
	dash_serverinfo: "dash_serverinfo",
	dashboard_padrao: "dashboard_padrao",
	descricao: "descricao",
	enable_totp_group: "enable_totp_group",
	expire_password: "expire_password",
	exporta_xls: "exporta_xls",
	fiberdocs_filtro_filial: "fiberdocs_filtro_filial",
	filtra_grid_filial: "filtra_grid_filial",
	filtrar_filiais: "filtrar_filiais",
	filtrar_grid_os_cliente: "filtrar_grid_os_cliente",
	filtrar_requisicao_material: "filtrar_requisicao_material",
	filtrar_transferencia_material_confirmacao:
		"filtrar_transferencia_material_confirmacao",
	grupo: "grupo",
	habilitar_barra_pesquisa: "habilitar_barra_pesquisa",
	horarios: "horarios",
	id: "id",
	mostrar_requisicao_material: "mostrar_requisicao_material",
	permissao_bt_form: "permissao_bt_form",
	permissao_campo_form: "permissao_campo_form",
	permissao_retrospectiva: "permissao_retrospectiva",
	permissao_tipo: "permissao_tipo",
	permite_alteracao_data_base_grupo: "permite_alteracao_data_base_grupo",
	permite_atualizar: "permite_atualizar",
	permite_chamar_suporte: "permite_chamar_suporte",
	permite_listar_caixas: "permite_listar_caixas",
	permite_listar_caixas_usuario: "permite_listar_caixas_usuario",
	poermissao_bt_grid: "poermissao_bt_grid",
	qtde_liberacoes: "qtde_liberacoes",
	redes: "redes",
	tempo_limite_sessao_minutos: "tempo_limite_sessao_minutos",
	tipo_alcada: "tipo_alcada",
	visualizar_auditoria: "visualizar_auditoria",
	visualizar_retro: "visualizar_retro",
	visualizar_visoes_querybuilder: "visualizar_visoes_querybuilder",
} as const;

export const USUARIOSGRUPO_ACESSOAVANCADOQUERYBUILDER_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_ACESSOQUERYBUILDER_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_ACESSOUPVOTYIXC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_CONFIGTOTPACCESS_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const USUARIOSGRUPO_DASHACESSOS_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHATENDIMENTO_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCLIENTECHAVE_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCOBRANCAS_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCONTASAPAGAR_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCONTASARECEBER_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCONTRATOS_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCRM_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCRMCORPORATIVO_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCRMPESSOAFISICA_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHCRMUSER_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHFATURAS_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHFINANCEIRO_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHMONITORAMENTOFIBRA_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHNEGOCIACOES_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHORDEMSERVICO_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHORDEMSERVICOUSER_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHPRINCIPAL_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHRADIUS_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_DASHSERVERINFO_LABELS = {
	P: "P",
	M: "M",
	E: "E",
} as const;

export const USUARIOSGRUPO_EXPIREPASSWORD_LABELS = {
	0: "0",
	3: "3",
	6: "6",
	9: "9",
	12: "12",
} as const;

export const USUARIOSGRUPO_EXPORTAXLS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_FIBERDOCSFILTROFILIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_FILTRAGRIDFILIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_FILTRARFILIAIS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_FILTRARGRIDOSCLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_FILTRARREQUISICAOMATERIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_FILTRARTRANSFERENCIAMATERIALCONFIRMACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_HABILITARBARRAPESQUISA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_PERMISSAOBTFORM_LABELS = {
	L: "L",
	H: "H",
	S: "S",
	E: "E",
} as const;

export const USUARIOSGRUPO_PERMISSAOCAMPOFORM_LABELS = {
	L: "L",
	H: "H",
	S: "S",
	E: "E",
} as const;

export const USUARIOSGRUPO_PERMISSAORETROSPECTIVA_LABELS = {
	P: "P",
	H: "H",
	E: "E",
} as const;

export const USUARIOSGRUPO_PERMISSAOTIPO_LABELS = {
	L: "L",
	B: "B",
} as const;

export const USUARIOSGRUPO_PERMITEALTERACAODATABASEGRUPO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_PERMITEATUALIZAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_PERMITECHAMARSUPORTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_PERMITELISTARCAIXAS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_PERMITELISTARCAIXASUSUARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_POERMISSAOBTGRID_LABELS = {
	L: "L",
	H: "H",
	S: "S",
	E: "E",
} as const;

export const USUARIOSGRUPO_TIPOALCADA_LABELS = {
	ADM: "ADM",
	SUP: "SUP",
	OP: "OP",
} as const;

export const USUARIOSGRUPO_VISUALIZARAUDITORIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_VISUALIZARRETRO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPO_VISUALIZARVISOESQUERYBUILDER_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_grupoAcessoAvancadoQuerybuilderSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "acesso_avancado_querybuilder: valores válidos são [S, N]",
		}),
	},
);

export const usuarios_grupoAcessoQuerybuilderSchema = z.enum(["S", "N"], {
	error: () => ({ message: "acesso_querybuilder: valores válidos são [S, N]" }),
});

export const usuarios_grupoAcessoUpvotyIxcSchema = z.enum(["S", "N"], {
	error: () => ({ message: "acesso_upvoty_ixc: valores válidos são [S, N]" }),
});

export const usuarios_grupoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const usuarios_grupoConfigTotpAccessSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "config_totp_access: valores válidos são [S, N, P]",
	}),
});

export const usuarios_grupoDashAcessosSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_acessos: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashAtendimentoSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_atendimento: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashClienteChaveSchema = z.enum(["P", "M", "E"], {
	error: () => ({
		message: "dash_cliente_chave: valores válidos são [P, M, E]",
	}),
});

export const usuarios_grupoDashCobrancasSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_cobrancas: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashContasAPagarSchema = z.enum(["P", "M", "E"], {
	error: () => ({
		message: "dash_contas_a_pagar: valores válidos são [P, M, E]",
	}),
});

export const usuarios_grupoDashContasAReceberSchema = z.enum(["P", "M", "E"], {
	error: () => ({
		message: "dash_contas_a_receber: valores válidos são [P, M, E]",
	}),
});

export const usuarios_grupoDashContratosSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_contratos: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashCrmSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_crm: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashCrmCorporativoSchema = z.enum(["P", "M", "E"], {
	error: () => ({
		message: "dash_crm_corporativo: valores válidos são [P, M, E]",
	}),
});

export const usuarios_grupoDashCrmPessoaFisicaSchema = z.enum(["P", "M", "E"], {
	error: () => ({
		message: "dash_crm_pessoa_fisica: valores válidos são [P, M, E]",
	}),
});

export const usuarios_grupoDashCrmUserSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_crm_user: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashFaturasSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_faturas: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashFinanceiroSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_financeiro: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashMonitoramentoFibraSchema = z.enum(
	["P", "M", "E"],
	{
		error: () => ({
			message: "dash_monitoramento_fibra: valores válidos são [P, M, E]",
		}),
	},
);

export const usuarios_grupoDashNegociacoesSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_negociacoes: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashOrdemServicoSchema = z.enum(["P", "M", "E"], {
	error: () => ({
		message: "dash_ordem_servico: valores válidos são [P, M, E]",
	}),
});

export const usuarios_grupoDashOrdemServicoUserSchema = z.enum(
	["P", "M", "E"],
	{
		error: () => ({
			message: "dash_ordem_servico_user: valores válidos são [P, M, E]",
		}),
	},
);

export const usuarios_grupoDashPrincipalSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_principal: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashRadiusSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_radius: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoDashServerinfoSchema = z.enum(["P", "M", "E"], {
	error: () => ({ message: "dash_serverinfo: valores válidos são [P, M, E]" }),
});

export const usuarios_grupoExpirePasswordSchema = z.enum(
	["0", "3", "6", "9", "12"],
	{
		error: () => ({
			message: "expire_password: valores válidos são [0, 3, 6, 9, 12]",
		}),
	},
);

export const usuarios_grupoExportaXlsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "exporta_xls: valores válidos são [S, N]" }),
});

export const usuarios_grupoFiberdocsFiltroFilialSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "fiberdocs_filtro_filial: valores válidos são [S, N]",
	}),
});

export const usuarios_grupoFiltraGridFilialSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtra_grid_filial: valores válidos são [S, N]" }),
});

export const usuarios_grupoFiltrarFiliaisSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtrar_filiais: valores válidos são [S, N]" }),
});

export const usuarios_grupoFiltrarGridOsClienteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "filtrar_grid_os_cliente: valores válidos são [S, N]",
	}),
});

export const usuarios_grupoFiltrarRequisicaoMaterialSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "filtrar_requisicao_material: valores válidos são [S, N]",
		}),
	},
);

export const usuarios_grupoFiltrarTransferenciaMaterialConfirmacaoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message:
				"filtrar_transferencia_material_confirmacao: valores válidos são [S, N]",
		}),
	});

export const usuarios_grupoHabilitarBarraPesquisaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "habilitar_barra_pesquisa: valores válidos são [S, N]",
	}),
});

export const usuarios_grupoPermissaoBtFormSchema = z.enum(
	["L", "H", "S", "E"],
	{
		error: () => ({
			message: "permissao_bt_form: valores válidos são [L, H, S, E]",
		}),
	},
);

export const usuarios_grupoPermissaoCampoFormSchema = z.enum(
	["L", "H", "S", "E"],
	{
		error: () => ({
			message: "permissao_campo_form: valores válidos são [L, H, S, E]",
		}),
	},
);

export const usuarios_grupoPermissaoRetrospectivaSchema = z.enum(
	["P", "H", "E"],
	{
		error: () => ({
			message: "permissao_retrospectiva: valores válidos são [P, H, E]",
		}),
	},
);

export const usuarios_grupoPermissaoTipoSchema = z.enum(["L", "B"], {
	error: () => ({ message: "permissao_tipo: valores válidos são [L, B]" }),
});

export const usuarios_grupoPermiteAlteracaoDataBaseGrupoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permite_alteracao_data_base_grupo: valores válidos são [S, N]",
		}),
	},
);

export const usuarios_grupoPermiteAtualizarSchema = z.enum(["S", "N"], {
	error: () => ({ message: "permite_atualizar: valores válidos são [S, N]" }),
});

export const usuarios_grupoPermiteChamarSuporteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_chamar_suporte: valores válidos são [S, N]",
	}),
});

export const usuarios_grupoPermiteListarCaixasSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_listar_caixas: valores válidos são [S, N]",
	}),
});

export const usuarios_grupoPermiteListarCaixasUsuarioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "permite_listar_caixas_usuario: valores válidos são [S, N]",
		}),
	},
);

export const usuarios_grupoPoermissaoBtGridSchema = z.enum(
	["L", "H", "S", "E"],
	{
		error: () => ({
			message: "poermissao_bt_grid: valores válidos são [L, H, S, E]",
		}),
	},
);

export const usuarios_grupoTipoAlcadaSchema = z.enum(["ADM", "SUP", "OP"], {
	error: () => ({ message: "tipo_alcada: valores válidos são [ADM, SUP, OP]" }),
});

export const usuarios_grupoVisualizarAuditoriaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "visualizar_auditoria: valores válidos são [S, N]",
	}),
});

export const usuarios_grupoVisualizarRetroSchema = z.enum(["S", "N"], {
	error: () => ({ message: "visualizar_retro: valores válidos são [S, N]" }),
});

export const usuarios_grupoVisualizarVisoesQuerybuilderSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "visualizar_visoes_querybuilder: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosGrupoAcessoAvancadoQuerybuilder = z.infer<
	typeof usuarios_grupoAcessoAvancadoQuerybuilderSchema
>;

export type UsuariosGrupoAcessoQuerybuilder = z.infer<
	typeof usuarios_grupoAcessoQuerybuilderSchema
>;

export type UsuariosGrupoAcessoUpvotyIxc = z.infer<
	typeof usuarios_grupoAcessoUpvotyIxcSchema
>;

export type UsuariosGrupoAtivo = z.infer<typeof usuarios_grupoAtivoSchema>;

export type UsuariosGrupoConfigTotpAccess = z.infer<
	typeof usuarios_grupoConfigTotpAccessSchema
>;

export type UsuariosGrupoDashAcessos = z.infer<
	typeof usuarios_grupoDashAcessosSchema
>;

export type UsuariosGrupoDashAtendimento = z.infer<
	typeof usuarios_grupoDashAtendimentoSchema
>;

export type UsuariosGrupoDashClienteChave = z.infer<
	typeof usuarios_grupoDashClienteChaveSchema
>;

export type UsuariosGrupoDashCobrancas = z.infer<
	typeof usuarios_grupoDashCobrancasSchema
>;

export type UsuariosGrupoDashContasAPagar = z.infer<
	typeof usuarios_grupoDashContasAPagarSchema
>;

export type UsuariosGrupoDashContasAReceber = z.infer<
	typeof usuarios_grupoDashContasAReceberSchema
>;

export type UsuariosGrupoDashContratos = z.infer<
	typeof usuarios_grupoDashContratosSchema
>;

export type UsuariosGrupoDashCrm = z.infer<typeof usuarios_grupoDashCrmSchema>;

export type UsuariosGrupoDashCrmCorporativo = z.infer<
	typeof usuarios_grupoDashCrmCorporativoSchema
>;

export type UsuariosGrupoDashCrmPessoaFisica = z.infer<
	typeof usuarios_grupoDashCrmPessoaFisicaSchema
>;

export type UsuariosGrupoDashCrmUser = z.infer<
	typeof usuarios_grupoDashCrmUserSchema
>;

export type UsuariosGrupoDashFaturas = z.infer<
	typeof usuarios_grupoDashFaturasSchema
>;

export type UsuariosGrupoDashFinanceiro = z.infer<
	typeof usuarios_grupoDashFinanceiroSchema
>;

export type UsuariosGrupoDashMonitoramentoFibra = z.infer<
	typeof usuarios_grupoDashMonitoramentoFibraSchema
>;

export type UsuariosGrupoDashNegociacoes = z.infer<
	typeof usuarios_grupoDashNegociacoesSchema
>;

export type UsuariosGrupoDashOrdemServico = z.infer<
	typeof usuarios_grupoDashOrdemServicoSchema
>;

export type UsuariosGrupoDashOrdemServicoUser = z.infer<
	typeof usuarios_grupoDashOrdemServicoUserSchema
>;

export type UsuariosGrupoDashPrincipal = z.infer<
	typeof usuarios_grupoDashPrincipalSchema
>;

export type UsuariosGrupoDashRadius = z.infer<
	typeof usuarios_grupoDashRadiusSchema
>;

export type UsuariosGrupoDashServerinfo = z.infer<
	typeof usuarios_grupoDashServerinfoSchema
>;

export type UsuariosGrupoExpirePassword = z.infer<
	typeof usuarios_grupoExpirePasswordSchema
>;

export type UsuariosGrupoExportaXls = z.infer<
	typeof usuarios_grupoExportaXlsSchema
>;

export type UsuariosGrupoFiberdocsFiltroFilial = z.infer<
	typeof usuarios_grupoFiberdocsFiltroFilialSchema
>;

export type UsuariosGrupoFiltraGridFilial = z.infer<
	typeof usuarios_grupoFiltraGridFilialSchema
>;

export type UsuariosGrupoFiltrarFiliais = z.infer<
	typeof usuarios_grupoFiltrarFiliaisSchema
>;

export type UsuariosGrupoFiltrarGridOsCliente = z.infer<
	typeof usuarios_grupoFiltrarGridOsClienteSchema
>;

export type UsuariosGrupoFiltrarRequisicaoMaterial = z.infer<
	typeof usuarios_grupoFiltrarRequisicaoMaterialSchema
>;

export type UsuariosGrupoFiltrarTransferenciaMaterialConfirmacao = z.infer<
	typeof usuarios_grupoFiltrarTransferenciaMaterialConfirmacaoSchema
>;

export type UsuariosGrupoHabilitarBarraPesquisa = z.infer<
	typeof usuarios_grupoHabilitarBarraPesquisaSchema
>;

export type UsuariosGrupoPermissaoBtForm = z.infer<
	typeof usuarios_grupoPermissaoBtFormSchema
>;

export type UsuariosGrupoPermissaoCampoForm = z.infer<
	typeof usuarios_grupoPermissaoCampoFormSchema
>;

export type UsuariosGrupoPermissaoRetrospectiva = z.infer<
	typeof usuarios_grupoPermissaoRetrospectivaSchema
>;

export type UsuariosGrupoPermissaoTipo = z.infer<
	typeof usuarios_grupoPermissaoTipoSchema
>;

export type UsuariosGrupoPermiteAlteracaoDataBaseGrupo = z.infer<
	typeof usuarios_grupoPermiteAlteracaoDataBaseGrupoSchema
>;

export type UsuariosGrupoPermiteAtualizar = z.infer<
	typeof usuarios_grupoPermiteAtualizarSchema
>;

export type UsuariosGrupoPermiteChamarSuporte = z.infer<
	typeof usuarios_grupoPermiteChamarSuporteSchema
>;

export type UsuariosGrupoPermiteListarCaixas = z.infer<
	typeof usuarios_grupoPermiteListarCaixasSchema
>;

export type UsuariosGrupoPermiteListarCaixasUsuario = z.infer<
	typeof usuarios_grupoPermiteListarCaixasUsuarioSchema
>;

export type UsuariosGrupoPoermissaoBtGrid = z.infer<
	typeof usuarios_grupoPoermissaoBtGridSchema
>;

export type UsuariosGrupoTipoAlcada = z.infer<
	typeof usuarios_grupoTipoAlcadaSchema
>;

export type UsuariosGrupoVisualizarAuditoria = z.infer<
	typeof usuarios_grupoVisualizarAuditoriaSchema
>;

export type UsuariosGrupoVisualizarRetro = z.infer<
	typeof usuarios_grupoVisualizarRetroSchema
>;

export type UsuariosGrupoVisualizarVisoesQuerybuilder = z.infer<
	typeof usuarios_grupoVisualizarVisoesQuerybuilderSchema
>;
