/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	usuarios_grupoAcessoAvancadoQuerybuilderSchema,
	usuarios_grupoAcessoQuerybuilderSchema,
	usuarios_grupoAcessoUpvotyIxcSchema,
	usuarios_grupoAtivoSchema,
	usuarios_grupoConfigTotpAccessSchema,
	usuarios_grupoDashAcessosSchema,
	usuarios_grupoDashAtendimentoSchema,
	usuarios_grupoDashClienteChaveSchema,
	usuarios_grupoDashCobrancasSchema,
	usuarios_grupoDashContasAPagarSchema,
	usuarios_grupoDashContasAReceberSchema,
	usuarios_grupoDashContratosSchema,
	usuarios_grupoDashCrmCorporativoSchema,
	usuarios_grupoDashCrmPessoaFisicaSchema,
	usuarios_grupoDashCrmSchema,
	usuarios_grupoDashCrmUserSchema,
	usuarios_grupoDashFaturasSchema,
	usuarios_grupoDashFinanceiroSchema,
	usuarios_grupoDashMonitoramentoFibraSchema,
	usuarios_grupoDashNegociacoesSchema,
	usuarios_grupoDashOrdemServicoSchema,
	usuarios_grupoDashOrdemServicoUserSchema,
	usuarios_grupoDashPrincipalSchema,
	usuarios_grupoDashRadiusSchema,
	usuarios_grupoDashServerinfoSchema,
	usuarios_grupoExpirePasswordSchema,
	usuarios_grupoExportaXlsSchema,
	usuarios_grupoFiberdocsFiltroFilialSchema,
	usuarios_grupoFiltraGridFilialSchema,
	usuarios_grupoFiltrarFiliaisSchema,
	usuarios_grupoFiltrarGridOsClienteSchema,
	usuarios_grupoFiltrarRequisicaoMaterialSchema,
	usuarios_grupoFiltrarTransferenciaMaterialConfirmacaoSchema,
	usuarios_grupoHabilitarBarraPesquisaSchema,
	usuarios_grupoPermissaoBtFormSchema,
	usuarios_grupoPermissaoCampoFormSchema,
	usuarios_grupoPermissaoRetrospectivaSchema,
	usuarios_grupoPermissaoTipoSchema,
	usuarios_grupoPermiteAlteracaoDataBaseGrupoSchema,
	usuarios_grupoPermiteAtualizarSchema,
	usuarios_grupoPermiteChamarSuporteSchema,
	usuarios_grupoPermiteListarCaixasSchema,
	usuarios_grupoPermiteListarCaixasUsuarioSchema,
	usuarios_grupoPoermissaoBtGridSchema,
	usuarios_grupoTipoAlcadaSchema,
	usuarios_grupoVisualizarAuditoriaSchema,
	usuarios_grupoVisualizarRetroSchema,
	usuarios_grupoVisualizarVisoesQuerybuilderSchema,
} from "./labels";

export const USUARIOS_GRUPO_TABLE_NAME = "usuarios_grupo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_grupoBaseSchema = z.object({
	id: z.number(),
	acesso_avancado_querybuilder: usuarios_grupoAcessoAvancadoQuerybuilderSchema,
	acesso_querybuilder: usuarios_grupoAcessoQuerybuilderSchema,
	acesso_upvoty_ixc: usuarios_grupoAcessoUpvotyIxcSchema,
	ativo: usuarios_grupoAtivoSchema,
	config_totp_access: usuarios_grupoConfigTotpAccessSchema,
	dash_acessos: usuarios_grupoDashAcessosSchema,
	dash_atendimento: usuarios_grupoDashAtendimentoSchema,
	dash_cliente_chave: usuarios_grupoDashClienteChaveSchema,
	dash_cobrancas: usuarios_grupoDashCobrancasSchema,
	dash_contas_a_pagar: usuarios_grupoDashContasAPagarSchema,
	dash_contas_a_receber: usuarios_grupoDashContasAReceberSchema,
	dash_contratos: usuarios_grupoDashContratosSchema,
	dash_crm: usuarios_grupoDashCrmSchema,
	dash_crm_corporativo: usuarios_grupoDashCrmCorporativoSchema,
	dash_crm_pessoa_fisica: usuarios_grupoDashCrmPessoaFisicaSchema,
	dash_crm_user: usuarios_grupoDashCrmUserSchema,
	dash_faturas: usuarios_grupoDashFaturasSchema,
	dash_financeiro: usuarios_grupoDashFinanceiroSchema,
	dash_monitoramento_fibra: usuarios_grupoDashMonitoramentoFibraSchema,
	dash_negociacoes: usuarios_grupoDashNegociacoesSchema,
	dash_ordem_servico: usuarios_grupoDashOrdemServicoSchema,
	dash_ordem_servico_user: usuarios_grupoDashOrdemServicoUserSchema,
	dash_principal: usuarios_grupoDashPrincipalSchema,
	dash_radius: usuarios_grupoDashRadiusSchema,
	dash_serverinfo: usuarios_grupoDashServerinfoSchema,
	dashboard_padrao: z.string(),
	descricao: z.string(),
	enable_totp_group: z.number(),
	expire_password: usuarios_grupoExpirePasswordSchema,
	exporta_xls: usuarios_grupoExportaXlsSchema,
	fiberdocs_filtro_filial: usuarios_grupoFiberdocsFiltroFilialSchema,
	filtra_grid_filial: usuarios_grupoFiltraGridFilialSchema,
	filtrar_filiais: usuarios_grupoFiltrarFiliaisSchema,
	filtrar_grid_os_cliente: usuarios_grupoFiltrarGridOsClienteSchema,
	filtrar_requisicao_material: usuarios_grupoFiltrarRequisicaoMaterialSchema,
	filtrar_transferencia_material_confirmacao:
		usuarios_grupoFiltrarTransferenciaMaterialConfirmacaoSchema,
	grupo: z.string(),
	habilitar_barra_pesquisa: usuarios_grupoHabilitarBarraPesquisaSchema,
	horarios: z.string(),
	mostrar_requisicao_material: z.number(),
	permissao_bt_form: usuarios_grupoPermissaoBtFormSchema,
	permissao_campo_form: usuarios_grupoPermissaoCampoFormSchema,
	permissao_retrospectiva: usuarios_grupoPermissaoRetrospectivaSchema,
	permissao_tipo: usuarios_grupoPermissaoTipoSchema,
	permite_alteracao_data_base_grupo:
		usuarios_grupoPermiteAlteracaoDataBaseGrupoSchema,
	permite_atualizar: usuarios_grupoPermiteAtualizarSchema,
	permite_chamar_suporte: usuarios_grupoPermiteChamarSuporteSchema,
	permite_listar_caixas: usuarios_grupoPermiteListarCaixasSchema,
	permite_listar_caixas_usuario: usuarios_grupoPermiteListarCaixasUsuarioSchema,
	poermissao_bt_grid: usuarios_grupoPoermissaoBtGridSchema,
	qtde_liberacoes: z.number(),
	redes: z.string(),
	tempo_limite_sessao_minutos: z.number(),
	tipo_alcada: usuarios_grupoTipoAlcadaSchema,
	visualizar_auditoria: usuarios_grupoVisualizarAuditoriaSchema,
	visualizar_retro: usuarios_grupoVisualizarRetroSchema,
	visualizar_visoes_querybuilder:
		usuarios_grupoVisualizarVisoesQuerybuilderSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_grupoSchema = usuarios_grupoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_grupoCreateSchema = usuarios_grupoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_grupoUpdateSchema = usuarios_grupoCreateSchema.partial();
