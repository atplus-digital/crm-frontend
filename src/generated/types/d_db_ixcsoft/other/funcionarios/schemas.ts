/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	funcionariosAtivoSchema,
	funcionariosCamisetaSchema,
	funcionariosCnhSelecionaSchema,
	funcionariosCorRacaSchema,
	funcionariosCpfSelecionaSchema,
	funcionariosCtpsSelecionaSchema,
	funcionariosEnviaEmailOsSchema,
	funcionariosEnviaSmsOsSchema,
	funcionariosEnviaTelegramOsSchema,
	funcionariosEstadoCivilSchema,
	funcionariosEstagioEscolaridadeSchema,
	funcionariosExibirColaboradorInmapSchema,
	funcionariosFeriasColaboradorSchema,
	funcionariosGrauEscolaridadeSchema,
	funcionariosIntegracaoCalendarioSchema,
	funcionariosMostrarNoQuadroKanbanSchema,
	funcionariosObrigarMarcarQuilometragemSchema,
	funcionariosPeriodoEscolaridadeSchema,
	funcionariosPisSelecionaSchema,
	funcionariosPossuiDeficienciaSchema,
	funcionariosRastreadorTipoSchema,
	funcionariosRegraCentroRateioSchema,
	funcionariosRgSelecionaSchema,
	funcionariosTipoChavePixSchema,
	funcionariosTipoDeficienciaSchema,
	funcionariosTipoDocumentoIdentificacaoColSchema,
	funcionariosTipoRecebimentoSchema,
	funcionariosTituloEleitoralSelecionaSchema,
	funcionariosVinculoConfigRoteirizacaoSchema,
} from "./labels";

export const FUNCIONARIOS_TABLE_NAME = "funcionarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const funcionariosBaseSchema = z.object({
	id: z.number(),
	agencia: z.string(),
	agencia_dv: z.string(),
	ativo: funcionariosAtivoSchema,
	bairro: z.string(),
	banco: z.string(),
	camara_centralizadora: z.string(),
	camiseta: funcionariosCamisetaSchema,
	cep: z.string(),
	chave_pix: z.string(),
	cidade: z.number(),
	cnh_numero: z.string(),
	cnh_seleciona: funcionariosCnhSelecionaSchema,
	cnh_vencimento: z.string(),
	cod_integracao_folha: z.number(),
	coeficiente: z.number(),
	complemento: z.string(),
	conta: z.string(),
	cor_mapa: z.string(),
	cor_raca: funcionariosCorRacaSchema,
	cpf_cnpj: z.string(),
	cpf_conjuge: z.string(),
	cpf_seleciona: funcionariosCpfSelecionaSchema,
	ctps_cidade_emissao: z.number(),
	ctps_data_emissao: z.string(),
	ctps_numero: z.string(),
	ctps_seleciona: funcionariosCtpsSelecionaSchema,
	ctps_serie: z.string(),
	data_admissao: z.string(),
	data_demissao: z.string(),
	data_nascimento: z.string(),
	dep_dois_cpf: z.string(),
	dep_dois_nome: z.string(),
	dep_dois_rg: z.string(),
	dep_tres_cpf: z.string(),
	dep_tres_nome: z.string(),
	dep_tres_rg: z.string(),
	dep_um_cpf: z.string(),
	dep_um_nome: z.string(),
	dep_um_rg: z.string(),
	dependentes_ir: z.number(),
	email: z.string(),
	endereco: z.string(),
	envia_email_os: funcionariosEnviaEmailOsSchema,
	envia_sms_os: funcionariosEnviaSmsOsSchema,
	envia_telegram_os: funcionariosEnviaTelegramOsSchema,
	estado_civil: funcionariosEstadoCivilSchema,
	estagio_escolaridade: funcionariosEstagioEscolaridadeSchema,
	exibir_colaborador_inmap: funcionariosExibirColaboradorInmapSchema,
	falar_com: z.string(),
	ferias_colaborador: funcionariosFeriasColaboradorSchema,
	filial_id: z.number(),
	fone: z.string(),
	fone_celular: z.string(),
	fone_emergencia: z.string(),
	funcionario: z.string(),
	gps_time: z.string(),
	grau_escolaridade: funcionariosGrauEscolaridadeSchema,
	id_centro_custo_categoria_filtro: z.number(),
	id_centro_custo_criterio_rateio: z.number(),
	id_centro_custo_rel_centro_custo_categoria: z.number(),
	id_chat_telegram_funcionario: z.number(),
	id_conta: z.number(),
	id_conta_decimo: z.number(),
	id_conta_salario: z.number(),
	id_departamento: z.number(),
	id_email_smtp: z.number(),
	id_funcao: z.number(),
	id_perfil_jornada_trabalho: z.number(),
	id_setor_padrao: z.number(),
	id_veiculo_padrao: z.number(),
	ie_identidade: z.string(),
	img_assinatura: z.string(),
	integracao_calendario: funcionariosIntegracaoCalendarioSchema,
	last_location_update: z.string(),
	maximo_os_dia: z.number(),
	mostrar_no_quadro_kanban: funcionariosMostrarNoQuadroKanbanSchema,
	nacionalidade: z.string(),
	nome_conjuge: z.string(),
	nome_mae: z.string(),
	nome_pai: z.string(),
	num_dependentes: z.number(),
	num_manequim: z.number(),
	numero: z.string(),
	numero_conta_dv: z.string(),
	obrigar_marcar_quilometragem: funcionariosObrigarMarcarQuilometragemSchema,
	obs: z.string(),
	percen_max_desc_areceber: z.number(),
	periodo_escolaridade: funcionariosPeriodoEscolaridadeSchema,
	pipe_id_usuario: z.number(),
	pis_data: z.string(),
	pis_numero: z.string(),
	pis_seleciona: funcionariosPisSelecionaSchema,
	possui_deficiencia: funcionariosPossuiDeficienciaSchema,
	prj_custo_hora_adicionais: z.number(),
	prj_custo_hora_base: z.number(),
	ramal: z.number(),
	rastreador: z.string(),
	rastreador_tipo: funcionariosRastreadorTipoSchema,
	referencia: z.string(),
	regra_centro_rateio: funcionariosRegraCentroRateioSchema,
	rg_conjuge: z.string(),
	rg_data_emissao: z.string(),
	rg_orgao_emissor: z.string(),
	rg_seleciona: funcionariosRgSelecionaSchema,
	salario: z.number(),
	telefone_comercial: z.string(),
	telegram_chat_id_funcionario: z.string(),
	tipo_chave_pix: funcionariosTipoChavePixSchema,
	tipo_deficiencia: funcionariosTipoDeficienciaSchema,
	tipo_documento_identificacao_col:
		funcionariosTipoDocumentoIdentificacaoColSchema,
	tipo_recebimento: funcionariosTipoRecebimentoSchema,
	titulo_eleitoral_seleciona: funcionariosTituloEleitoralSelecionaSchema,
	titulo_numero: z.string(),
	titulo_secao: z.string(),
	titulo_zona: z.string(),
	uf: z.number(),
	ultima_atualizacao: z.string(),
	ultima_latitude: z.string(),
	ultima_longitude: z.string(),
	vinculo_config_roteirizacao: funcionariosVinculoConfigRoteirizacaoSchema,
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const funcionariosRelationSchema = z.object({
	f_funcionarios_arquivos: z.number().array(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const funcionariosSchema = funcionariosBaseSchema.extend(
	funcionariosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const funcionariosCreateSchema = funcionariosSchema.omit({
	f_funcionarios_arquivos: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const funcionariosUpdateSchema = funcionariosCreateSchema.partial();
