/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Empresas } from "./empresas";
import type { Negociacoes } from "./negociacoes";
import type { Pessoas } from "./pessoas";
import type { Users } from "./users";

export interface ColaboradoresDoSetor {
	f_fk_colaboradores_setor_1: number;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresDoSetorRelations = Record<string, never>;

export type ColaboradoresDoSetorRelationKey =
	keyof ColaboradoresDoSetorRelations;

export interface ColaboradoresXSetor {
	f_fk_colaboradores_setor_1: number;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresXSetorRelations = Record<string, never>;

export type ColaboradoresXSetorRelationKey = keyof ColaboradoresXSetorRelations;

export interface Departments {
	id: number;
	sort: number;
	isLeaf: boolean;
	title: string;
	updatedById: number | null;
	createdById: number | null;
}

export interface DepartmentsRelations {
	children?: Departments[];
	createdBy?: Users | null;
	members?: Users[];
	owners?: Users[];
	parent?: Departments | null;
	roles?: Roles[];
	updatedBy?: Users | null;
}

export type DepartmentsRelationKey = keyof DepartmentsRelations;

export interface EventosDemanda {
	f_fk1_eventos_demanda: number;
	f_fk2_eventos_demanda: number;
}

export type EventosDemandaRelations = Record<string, never>;

export type EventosDemandaRelationKey = keyof EventosDemandaRelations;

export interface FContatos {
	id: number;
	f_contato: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface FContatosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type FContatosRelationKey = keyof FContatosRelations;

export interface FFkOrigemTipos {
	f_fk1_origem_tipo: number;
	f_fk2_origem_tipo: number;
}

export type FFkOrigemTiposRelations = Record<string, never>;

export type FFkOrigemTiposRelationKey = keyof FFkOrigemTiposRelations;

export enum FFuncionariosAtivo {
	Sim = "Sim",
	Nao = "Não",
}

export enum FFuncionariosChecklistAdmissional {
	AsoAdmissional = "aso-admissional",
	Rg = "rg",
	ECnh = "e-cnh",
	ComprovanteResidencia = "comprovante-residencia",
	CertidaoCasamentoUniaoEstavel = "certidao-casamento-uniao-estavel",
	ETituloEleitoral = "e-titulo-eleitoral",
	CertificadoDeReservista = "certificado-de-reservista",
	RgCertidaoNascimentoFilhos = "rg-certidao-nascimento-filhos",
	Nr10Nr35 = "nr10-nr35",
	TermosResponsabilidade = "termos-responsabilidade",
}

export enum FFuncionariosEmpresa {
	Atplus = "ATPlus",
	Platon = "Platon",
}

export enum FFuncionariosEpiCalcado {
	Value35 = "35",
	Value36 = "36",
	Value37 = "37",
	Value38 = "38",
	Value39 = "39",
	Value40 = "40",
	Value41 = "41",
	Value42 = "42",
	Value43 = "43",
	Value44 = "44",
}

export enum FFuncionariosEscolaridade {
	EnsinoMedio = "Ensino Médio",
	Superior = "Superior",
	PosMba = "Pós, MBA",
	Mestrado = "Mestrado",
	Doutorado = "Doutorado",
}

export enum FFuncionariosEstadoCivil {
	Solteiro = "Solteiro",
	Casado = "Casado",
	UniaoEstavel = "União Estável",
	Viuvo = "Viúvo",
	Divorciado = "Divorciado",
	Separado = "Separado",
}

export enum FFuncionariosGenero {
	Masculino = "Masculino",
	Feminino = "Feminino",
}

export enum FFuncionariosMobilidade {
	ValeTransporteTransul = "Vale Transporte (Transul)",
	MobilidadeCartaoBeneficios = "Mobilidade (Cartão Benefícios)",
}

export enum FFuncionariosPcd {
	Sim = "Sim",
	Nao = "Não",
}

export enum FFuncionariosReservista {
	Sim = "Sim",
	Nao = "Não",
}

export enum FFuncionariosSituacaoEscolaridade {
	Completo = "Completo",
	Cursando = "Cursando",
	Trancado = "Trancado",
}

export enum FFuncionariosTerceiro {
	Sim = "Sim",
	Nao = "Não",
}

export enum FFuncionariosTipoContrato {
	Clt = "CLT",
	PrestadorDeServicos = "Prestador de Serviços",
	Estagiario = "Estagiário",
	JovemAprendiz = "Jovem Aprendiz",
	Socio = "Sócio",
	Temporario = "Temporário",
	CltComissao = "CLT + Comissão",
}

export enum FFuncionariosUnidade {
	Matriz = "Matriz",
	LojaCentroLages = "Loja Centro Lages",
	LojaCuritibanos = "Loja Curitibanos",
	Platon = "Platon",
}

export enum FFuncionariosUniversidade {
	Ifsc = "IFSC",
	Uniplac = "UNIPLAC",
	Ciee = "CIEE",
	Unifacvest = "UNIFACVEST",
	Outros = "Outros",
}

export enum FFuncionariosVinculoComColaborador {
	Pais = "Pais",
	FilhoAOuEnteadoA = "Filho(a) ou Enteado(a)",
	Avos = "Avós",
	Conjuge = "Conjuge",
}

export interface FFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	f_fk_funcionarios2: number;
	f_fk_setor: number;
	f_fk_turnos: number;
	f_id_tecnico_ixc: number;
	f_ativo: FFuncionariosAtivo;
	f_bairro: string;
	f_celular: string;
	f_cep: string;
	f_checklist_admissional: FFuncionariosChecklistAdmissional;
	f_cnh: string;
	f_cnpj: string;
	f_conta_salario_pix: string;
	f_cpf: string;
	f_curso: string;
	f_data_admissao: string;
	f_data_demissao: string;
	f_data_nascimento: string;
	f_email_corporativo: string;
	f_email_pessoal: string;
	f_empresa: FFuncionariosEmpresa;
	f_endereco: string;
	f_endereco_cidade: string;
	f_endereco_cnpj: string;
	f_endereco_complemento: string;
	f_endereco_estado: string;
	f_endereco_numero: string;
	f_endereco_referencia: string;
	f_epi_calca: string;
	f_epi_calcado: FFuncionariosEpiCalcado;
	f_epi_jaleco: string;
	f_escolaridade: FFuncionariosEscolaridade;
	f_estado_civil: FFuncionariosEstadoCivil;
	f_genero: FFuncionariosGenero;
	f_mes_nascimento: string;
	f_mobilidade: FFuncionariosMobilidade;
	f_motivo_demissao: string;
	f_nacionalidade: string;
	f_naturalidade: string;
	f_nome: string;
	f_nome_contato_emergencia: string;
	f_orgao_expedidor: string;
	f_pcd: FFuncionariosPcd;
	f_razao_social: string;
	f_reservista: FFuncionariosReservista;
	f_rg: string;
	f_secao_eleitoral: string;
	f_situacao_escolaridade: FFuncionariosSituacaoEscolaridade;
	f_telefone_emergencia: string;
	f_terceiro: FFuncionariosTerceiro;
	f_tipo_contrato: FFuncionariosTipoContrato;
	f_tipo_deficiencia: string;
	f_titulo_eleitor: string;
	f_unidade: FFuncionariosUnidade;
	f_universidade: FFuncionariosUniversidade;
	f_valor_rescisao: number;
	f_vencimento_contrato: string;
	f_vinculo_com_colaborador: FFuncionariosVinculoComColaborador;
	f_zona_eleitoral: string;
	updatedAt: string;
	createdAt: string;
}

export interface FFuncionariosRelations {
	createdBy?: Users | null;
	f_aniversarios?: Aniversarios[];
	f_arquivos_funcionarios?: ArquivosFuncionarios[];
	f_asos?: Asos[];
	f_cargo?: Cargos | null;
	f_chip_corporativo?: LinhaCorporativa[];
	f_departamento?: Departamentos | null;
	f_foto_funcionarios?: FotoFuncionarios[];
	f_info_arquivos?: InfoArquivos[];
	f_info_aso?: InfoAso[];
	f_logs_cargos?: LogsCargos[];
	f_parentesco?: Parentesco[];
	f_patrimonio_funcionarios?: Patrimonio[];
	f_periodos_ferias?: PeriodosFerias[];
	f_qualirun_processos?: QualirunProcessos[];
	f_turnos?: Turnos | null;
	t_qualirun_info_adicionais?: QualirunInfoAdicionais[];
	updatedBy?: Users | null;
}

export type FFuncionariosRelationKey = keyof FFuncionariosRelations;

export const FFUNCIONARIOS_ATIVO_LABELS: Record<FFuncionariosAtivo, string> = {
	[FFuncionariosAtivo.Sim]: "Sim",
	[FFuncionariosAtivo.Nao]: "Não",
};

export const FFUNCIONARIOS_CHECKLISTADMISSIONAL_LABELS: Record<
	FFuncionariosChecklistAdmissional,
	string
> = {
	[FFuncionariosChecklistAdmissional.AsoAdmissional]: "ASO Admissional",
	[FFuncionariosChecklistAdmissional.Rg]: "RG",
	[FFuncionariosChecklistAdmissional.ECnh]: "e-CNH",
	[FFuncionariosChecklistAdmissional.ComprovanteResidencia]:
		"Comprovante de Residência",
	[FFuncionariosChecklistAdmissional.CertidaoCasamentoUniaoEstavel]:
		"Certidão de Casamento / União Estável",
	[FFuncionariosChecklistAdmissional.ETituloEleitoral]: "e-Título Eleitoral",
	[FFuncionariosChecklistAdmissional.CertificadoDeReservista]:
		"Certificado de Reservista",
	[FFuncionariosChecklistAdmissional.RgCertidaoNascimentoFilhos]:
		"RG ou Certidão de Nascimento dos filhos menores de 21 anos",
	[FFuncionariosChecklistAdmissional.Nr10Nr35]:
		"Certificado NR 10 e NR 35 (Opcional)",
	[FFuncionariosChecklistAdmissional.TermosResponsabilidade]:
		"Termos de Responsabilidade",
};

export const FFUNCIONARIOS_EMPRESA_LABELS: Record<
	FFuncionariosEmpresa,
	string
> = {
	[FFuncionariosEmpresa.Atplus]: "ATPlus",
	[FFuncionariosEmpresa.Platon]: "Platon",
};

export const FFUNCIONARIOS_EPICALCADO_LABELS: Record<
	FFuncionariosEpiCalcado,
	string
> = {
	[FFuncionariosEpiCalcado.Value35]: "35",
	[FFuncionariosEpiCalcado.Value36]: "36",
	[FFuncionariosEpiCalcado.Value37]: "37",
	[FFuncionariosEpiCalcado.Value38]: "38",
	[FFuncionariosEpiCalcado.Value39]: "39",
	[FFuncionariosEpiCalcado.Value40]: "40",
	[FFuncionariosEpiCalcado.Value41]: "41",
	[FFuncionariosEpiCalcado.Value42]: "42",
	[FFuncionariosEpiCalcado.Value43]: "43",
	[FFuncionariosEpiCalcado.Value44]: "44",
};

export const FFUNCIONARIOS_ESCOLARIDADE_LABELS: Record<
	FFuncionariosEscolaridade,
	string
> = {
	[FFuncionariosEscolaridade.EnsinoMedio]: "Ensino Médio",
	[FFuncionariosEscolaridade.Superior]: "Superior",
	[FFuncionariosEscolaridade.PosMba]: "Pós, MBA",
	[FFuncionariosEscolaridade.Mestrado]: "Mestrado",
	[FFuncionariosEscolaridade.Doutorado]: "Doutorado",
};

export const FFUNCIONARIOS_ESTADOCIVIL_LABELS: Record<
	FFuncionariosEstadoCivil,
	string
> = {
	[FFuncionariosEstadoCivil.Solteiro]: "Solteiro",
	[FFuncionariosEstadoCivil.Casado]: "Casado",
	[FFuncionariosEstadoCivil.UniaoEstavel]: "União Estável",
	[FFuncionariosEstadoCivil.Viuvo]: "Viúvo",
	[FFuncionariosEstadoCivil.Divorciado]: "Divorciado",
	[FFuncionariosEstadoCivil.Separado]: "Separado",
};

export const FFUNCIONARIOS_GENERO_LABELS: Record<FFuncionariosGenero, string> =
	{
		[FFuncionariosGenero.Masculino]: "Masculino",
		[FFuncionariosGenero.Feminino]: "Feminino",
	};

export const FFUNCIONARIOS_MOBILIDADE_LABELS: Record<
	FFuncionariosMobilidade,
	string
> = {
	[FFuncionariosMobilidade.ValeTransporteTransul]: "Vale Transporte (Transul)",
	[FFuncionariosMobilidade.MobilidadeCartaoBeneficios]:
		"Mobilidade (Cartão Benefícios)",
};

export const FFUNCIONARIOS_PCD_LABELS: Record<FFuncionariosPcd, string> = {
	[FFuncionariosPcd.Sim]: "Sim",
	[FFuncionariosPcd.Nao]: "Não",
};

export const FFUNCIONARIOS_RESERVISTA_LABELS: Record<
	FFuncionariosReservista,
	string
> = {
	[FFuncionariosReservista.Sim]: "Sim",
	[FFuncionariosReservista.Nao]: "Não",
};

export const FFUNCIONARIOS_SITUACAOESCOLARIDADE_LABELS: Record<
	FFuncionariosSituacaoEscolaridade,
	string
> = {
	[FFuncionariosSituacaoEscolaridade.Completo]: "Completo",
	[FFuncionariosSituacaoEscolaridade.Cursando]: "Cursando",
	[FFuncionariosSituacaoEscolaridade.Trancado]: "Trancado",
};

export const FFUNCIONARIOS_TERCEIRO_LABELS: Record<
	FFuncionariosTerceiro,
	string
> = {
	[FFuncionariosTerceiro.Sim]: "Sim",
	[FFuncionariosTerceiro.Nao]: "Não",
};

export const FFUNCIONARIOS_TIPOCONTRATO_LABELS: Record<
	FFuncionariosTipoContrato,
	string
> = {
	[FFuncionariosTipoContrato.Clt]: "CLT",
	[FFuncionariosTipoContrato.PrestadorDeServicos]: "Prestador de Serviços",
	[FFuncionariosTipoContrato.Estagiario]: "Estagiário",
	[FFuncionariosTipoContrato.JovemAprendiz]: "Jovem Aprendiz",
	[FFuncionariosTipoContrato.Socio]: "Sócio",
	[FFuncionariosTipoContrato.Temporario]: "Temporário",
	[FFuncionariosTipoContrato.CltComissao]: "CLT + Comissão",
};

export const FFUNCIONARIOS_UNIDADE_LABELS: Record<
	FFuncionariosUnidade,
	string
> = {
	[FFuncionariosUnidade.Matriz]: "Matriz",
	[FFuncionariosUnidade.LojaCentroLages]: "Loja Centro Lages",
	[FFuncionariosUnidade.LojaCuritibanos]: "Loja Curitibanos",
	[FFuncionariosUnidade.Platon]: "Platon",
};

export const FFUNCIONARIOS_UNIVERSIDADE_LABELS: Record<
	FFuncionariosUniversidade,
	string
> = {
	[FFuncionariosUniversidade.Ifsc]: "IFSC",
	[FFuncionariosUniversidade.Uniplac]: "UNIPLAC",
	[FFuncionariosUniversidade.Ciee]: "CIEE",
	[FFuncionariosUniversidade.Unifacvest]: "UNIFACVEST",
	[FFuncionariosUniversidade.Outros]: "Outros",
};

export const FFUNCIONARIOS_VINCULOCOMCOLABORADOR_LABELS: Record<
	FFuncionariosVinculoComColaborador,
	string
> = {
	[FFuncionariosVinculoComColaborador.Pais]: "Pais",
	[FFuncionariosVinculoComColaborador.FilhoAOuEnteadoA]:
		"Filho(a) ou Enteado(a)",
	[FFuncionariosVinculoComColaborador.Avos]: "Avós",
	[FFuncionariosVinculoComColaborador.Conjuge]: "Conjuge",
};

export interface FRecursosFilho {
	f_7q4zyk2d0kz: number;
	f_cn2m4i1kpqo: number;
}

export type FRecursosFilhoRelations = Record<string, never>;

export type FRecursosFilhoRelationKey = keyof FRecursosFilhoRelations;

export interface InterfacesEquipamentos {
	f_fk_equipamentos_interfaces_1: number;
	f_fk_equipamentos_interfaces_2: number;
}

export type InterfacesEquipamentosRelations = Record<string, never>;

export type InterfacesEquipamentosRelationKey =
	keyof InterfacesEquipamentosRelations;

export interface LinksIndicadoresUsuarios {
	f_fk_links_usuarios_1: number;
	f_fk_links_usuarios_2: number;
}

export type LinksIndicadoresUsuariosRelations = Record<string, never>;

export type LinksIndicadoresUsuariosRelationKey =
	keyof LinksIndicadoresUsuariosRelations;

export interface OrigemXTipos {
	f_fk_origem_tipo_1: number;
	f_fk_origem_tipo_2: number;
}

export type OrigemXTiposRelations = Record<string, never>;

export type OrigemXTiposRelationKey = keyof OrigemXTiposRelations;

export interface Roles {
	sort: number;
	allowConfigure: boolean;
	allowNewMenu: boolean;
	allowNewMobileMenu: boolean;
	default: boolean;
	description: string;
	hidden: boolean;
	name: string;
	snippets: unknown[];
	strategy: Record<string, unknown>;
	title: string;
}

export interface RolesRelations {
	menuUiSchemas?: unknown[];
	mobileRoutes?: unknown[];
	resources?: unknown[];
	users?: Users[];
}

export type RolesRelationKey = keyof RolesRelations;

export interface _3advfk0gv0z {
	f_fk_insumos_servicos: number;
	f_fk_servicos_insumos: number;
}

export type _3advfk0gv0zRelations = Record<string, never>;

export type _3advfk0gv0zRelationKey = keyof _3advfk0gv0zRelations;

export interface _902ctke5dhq {
	id: number;
	updatedAt: string;
	createdAt: string;
}

export interface _902ctke5dhqRelations {
	createdBy?: Users | null;
	f_bmu9tsi11d4?: P10scfhrhkw | null;
	updatedBy?: Users | null;
}

export type _902ctke5dhqRelationKey = keyof _902ctke5dhqRelations;

export enum AcessosTipo {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export interface Acessos {
	id: number;
	f_fk_servicos_x_acessos: number;
	f_fk_site: number;
	f_tipo: AcessosTipo;
	f_x7w60fv71f9: number;
	updatedAt: string;
	createdAt: string;
}

export interface AcessosRelations {
	createdBy?: Users | null;
	f_equipamento?: Equipamentos | null;
	f_insumos?: Servicos[];
	f_interface?: TelecomInterfaces | null;
	f_site?: Sites | null;
	f_xzuv9d6zkhr?: Servicos | null;
	updatedBy?: Users | null;
}

export type AcessosRelationKey = keyof AcessosRelations;

export const ACESSOS_TIPO_LABELS: Record<AcessosTipo, string> = {
	[AcessosTipo.Value1]: "Ponta A",
	[AcessosTipo.Value2]: "Ponta B",
	[AcessosTipo.Value3]: "Entrega",
};

export enum AegisStatusdesbloqueioconfiaca {
	Success = "success",
	Error = "error",
}

export enum AegisStatuslogin {
	Success = "success",
	Error = "error",
}

export enum AegisStatusmac {
	Success = "success",
	Error = "error",
}

export interface Aegis {
	id: number;
	f_idlogin: string;
	f_notas: string;
	f_notas_cliente: string;
	f_statusdesbloqueioconfiaca: AegisStatusdesbloqueioconfiaca;
	f_statuslogin: AegisStatuslogin;
	f_statusmac: AegisStatusmac;
	updatedAt: string;
	createdAt: string;
}

export interface AegisRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type AegisRelationKey = keyof AegisRelations;

export const AEGIS_STATUSDESBLOQUEIOCONFIACA_LABELS: Record<
	AegisStatusdesbloqueioconfiaca,
	string
> = {
	[AegisStatusdesbloqueioconfiaca.Success]:
		"Desbloqueio de Confiança Efetuado por 2 Dias",
	[AegisStatusdesbloqueioconfiaca.Error]:
		"Erro ao Realizar Desbloqueio de Confiança",
};

export const AEGIS_STATUSLOGIN_LABELS: Record<AegisStatuslogin, string> = {
	[AegisStatuslogin.Success]: "Sucesso ao Desconectar Login",
	[AegisStatuslogin.Error]: "Erro ao Desconectar Login",
};

export const AEGIS_STATUSMAC_LABELS: Record<AegisStatusmac, string> = {
	[AegisStatusmac.Success]: "Sucesso ao Limpar MAC",
	[AegisStatusmac.Error]: "Erro ao Limpar MAC",
};

export interface AnexosNegociacoes {
	id: number;
	extname: string;
	f_anexos_fk: number;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface AnexosNegociacoesRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AnexosNegociacoesRelationKey = keyof AnexosNegociacoesRelations;

export interface AnexosTrocaTitularidade {
	id: number;
	extname: string;
	f_anexos_fk: number;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface AnexosTrocaTitularidadeRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AnexosTrocaTitularidadeRelationKey =
	keyof AnexosTrocaTitularidadeRelations;

export enum AniversariosStatus {
	Novo = "novo",
	EmProcesso = "em-processo",
	Concluido = "concluido",
	Erro = "erro",
}

export interface Aniversarios {
	id: number;
	f_fk_funcionarios: number;
	f_data_execucao: string;
	f_dia_mes: string;
	f_status: AniversariosStatus;
	updatedAt: string;
	createdAt: string;
}

export interface AniversariosRelations {
	createdBy?: Users | null;
	f_foto_aniversario?: FotoAniversario | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type AniversariosRelationKey = keyof AniversariosRelations;

export const ANIVERSARIOS_STATUS_LABELS: Record<AniversariosStatus, string> = {
	[AniversariosStatus.Novo]: "Novo",
	[AniversariosStatus.EmProcesso]: "Em processo",
	[AniversariosStatus.Concluido]: "Concluído",
	[AniversariosStatus.Erro]: "Erro",
};

export interface ArquivosFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	f_fk_info_arquivos: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface ArquivosFuncionariosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_info_arquivos?: InfoArquivos | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type ArquivosFuncionariosRelationKey =
	keyof ArquivosFuncionariosRelations;

export interface Asos {
	id: number;
	f_fk_funcionarios: number;
	f_fk_infos_aso: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface AsosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_info_aso?: InfoAso | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AsosRelationKey = keyof AsosRelations;

export enum AtendimentosIxcAssunto {
	Value88 = "88",
	Value89 = "89",
	Value90 = "90",
	Value78 = "78",
}

export enum AtendimentosIxcDiagnosticos {
	Value95 = "95",
	Value96 = "96",
	Value97 = "97",
	Value99 = "99",
	Value100 = "100",
	Value101 = "101",
	Value105 = "105",
	Value106 = "106",
	Value107 = "107",
	Value110 = "110",
	Value111 = "111",
	Value246 = "246",
	Value248 = "248",
	Value147 = "147",
	Value264 = "264",
	Value265 = "265",
	Value266 = "266",
	Value255 = "255",
	Value267 = "267",
	Value268 = "268",
	Value269 = "269",
	Value270 = "270",
	Value271 = "271",
	Value272 = "272",
	Value273 = "273",
	Value274 = "274",
}

export enum AtendimentosIxcPrioridade {
	B = "B",
	N = "N",
	A = "A",
	C = "C",
}

export enum AtendimentosIxcProcesso {
	Value33 = "33",
	Value36 = "36",
	Value34 = "34",
	Value40 = "40",
}

export enum AtendimentosIxcTarefas {
	Value158 = "158",
	Value159 = "159",
	Value160 = "160",
	Value164 = "164",
	Value382 = "382",
	Value412 = "412",
	Value305 = "305",
	Value306 = "306",
	Value307 = "307",
	Value311 = "311",
	Value393 = "393",
	Value316 = "316",
	Value317 = "317",
	Value320 = "320",
	Value321 = "321",
	Value395 = "395",
	Value170 = "170",
	Value171 = "171",
	Value174 = "174",
	Value175 = "175",
	Value375 = "375",
	Value414 = "414",
	Value228 = "228",
	Value229 = "229",
	Value230 = "230",
	Value234 = "234",
	Value384 = "384",
	Value240 = "240",
	Value241 = "241",
	Value244 = "244",
	Value245 = "245",
	Value386 = "386",
}

export interface AtendimentosIxc {
	id: number;
	f_assunto: AtendimentosIxcAssunto;
	f_cliente: string;
	f_contrato: string;
	f_datafim: string;
	f_datainicio: string;
	f_departamento: string;
	f_descricao: string;
	f_diagnosticos: AtendimentosIxcDiagnosticos;
	f_finalizaatendimento: boolean;
	f_id_login: string;
	f_idatendimento: string;
	f_idcliente: string;
	f_idos: string;
	f_prioridade: AtendimentosIxcPrioridade;
	f_processo: AtendimentosIxcProcesso;
	f_responsavel: string;
	f_tarefas: AtendimentosIxcTarefas;
	f_usuario: string;
	updatedAt: string;
	createdAt: string;
}

export interface AtendimentosIxcRelations {
	createdBy?: Users | null;
	f_templates_atendimentos?: TemplatesAtendimentoN1[];
	updatedBy?: Users | null;
}

export type AtendimentosIxcRelationKey = keyof AtendimentosIxcRelations;

export const ATENDIMENTOSIXC_ASSUNTO_LABELS: Record<
	AtendimentosIxcAssunto,
	string
> = {
	[AtendimentosIxcAssunto.Value88]: "Reparo",
	[AtendimentosIxcAssunto.Value89]: "Serviço",
	[AtendimentosIxcAssunto.Value90]: "Manutenção Preventiva",
	[AtendimentosIxcAssunto.Value78]: "Atendimento Financeiro",
};

export const ATENDIMENTOSIXC_DIAGNOSTICOS_LABELS: Record<
	AtendimentosIxcDiagnosticos,
	string
> = {
	[AtendimentosIxcDiagnosticos.Value95]:
		"1000 - Defeito Rede interna do cliente",
	[AtendimentosIxcDiagnosticos.Value96]:
		"1001 - Defeito no equipamento do cliente",
	[AtendimentosIxcDiagnosticos.Value97]: "1002 - Defeito em outra operadora",
	[AtendimentosIxcDiagnosticos.Value99]: "1004 - Falha Massiva",
	[AtendimentosIxcDiagnosticos.Value100]: "1005 - Encaminhado para agendamento",
	[AtendimentosIxcDiagnosticos.Value101]: "1006 - Encontrado OK",
	[AtendimentosIxcDiagnosticos.Value105]: "1010 - Configuração ONT/Roteador",
	[AtendimentosIxcDiagnosticos.Value106]: "1011 - SVA - Plataformas",
	[AtendimentosIxcDiagnosticos.Value107]: "1012 - Outros",
	[AtendimentosIxcDiagnosticos.Value110]: "1013 - Encaminhado para N2",
	[AtendimentosIxcDiagnosticos.Value111]: "1014 - Reboot na ONT/Roteador",
	[AtendimentosIxcDiagnosticos.Value246]: "1015 - Sem contato com o cliente",
	[AtendimentosIxcDiagnosticos.Value248]: "1016 - Abertura indevida",
	[AtendimentosIxcDiagnosticos.Value147]: "1017 - Encaminhado para CS",
	[AtendimentosIxcDiagnosticos.Value264]: "1100 - Executado",
	[AtendimentosIxcDiagnosticos.Value265]: "1101 - Pendência",
	[AtendimentosIxcDiagnosticos.Value266]: "1102 - Cancelamento",
	[AtendimentosIxcDiagnosticos.Value255]:
		"1200 - Defeito Rede interna do cliente",
	[AtendimentosIxcDiagnosticos.Value267]:
		"1201 - Defeito no equipamento do cliente",
	[AtendimentosIxcDiagnosticos.Value268]: "1202 - Defeito em outra operadora",
	[AtendimentosIxcDiagnosticos.Value269]: "1204 - Falha Massiva",
	[AtendimentosIxcDiagnosticos.Value270]: "1205 - Encaminhado para agendamento",
	[AtendimentosIxcDiagnosticos.Value271]: "1206 - Encontrado OK",
	[AtendimentosIxcDiagnosticos.Value272]: "1210 - Configuração ONT/Roteador",
	[AtendimentosIxcDiagnosticos.Value273]: "1211 - SVA - Plataformas",
	[AtendimentosIxcDiagnosticos.Value274]: "1212 - Outros",
};

export const ATENDIMENTOSIXC_PRIORIDADE_LABELS: Record<
	AtendimentosIxcPrioridade,
	string
> = {
	[AtendimentosIxcPrioridade.B]: "Baixa",
	[AtendimentosIxcPrioridade.N]: "Normal",
	[AtendimentosIxcPrioridade.A]: "Alta",
	[AtendimentosIxcPrioridade.C]: "Crítica",
};

export const ATENDIMENTOSIXC_PROCESSO_LABELS: Record<
	AtendimentosIxcProcesso,
	string
> = {
	[AtendimentosIxcProcesso.Value33]: "Reparo",
	[AtendimentosIxcProcesso.Value36]: "Serviço",
	[AtendimentosIxcProcesso.Value34]: "Manutenção Preventiva",
	[AtendimentosIxcProcesso.Value40]: "Atendimento Financeiro",
};

export const ATENDIMENTOSIXC_TAREFAS_LABELS: Record<
	AtendimentosIxcTarefas,
	string
> = {
	[AtendimentosIxcTarefas.Value158]: "REPARO - Encaminhar O.S para Agendamento",
	[AtendimentosIxcTarefas.Value159]:
		"REPARO - Encaminhar O.S para o Customer Success",
	[AtendimentosIxcTarefas.Value160]:
		"REPARO - Escalona O.S para SN2 - Banda Larga",
	[AtendimentosIxcTarefas.Value164]:
		"REPARO - Escalona O.S para SN2 - Telefonia",
	[AtendimentosIxcTarefas.Value382]: "REPARO - Encaminhar O.S para Financeiro",
	[AtendimentosIxcTarefas.Value412]: "REPARO - Escalona O.S para SN2 - MVNO",
	[AtendimentosIxcTarefas.Value305]:
		"SERVIÇO - Encaminhar O.S para Agendamento",
	[AtendimentosIxcTarefas.Value306]:
		"SERVIÇO - Encaminhar O.S para Customer Success",
	[AtendimentosIxcTarefas.Value307]:
		"SERVIÇO - Escalona O.S para SN2 - Banda Larga",
	[AtendimentosIxcTarefas.Value311]:
		"SERVIÇO - Escalona O.S para SN2 - Telefonia",
	[AtendimentosIxcTarefas.Value393]: "SERVIÇO - Encaminhar O.S para Financeiro",
	[AtendimentosIxcTarefas.Value316]:
		"SERVIÇO (2) - Encaminhar O.S para Agendamento",
	[AtendimentosIxcTarefas.Value317]:
		"SERVIÇO (2) - Encaminhar O.S para Customer Success",
	[AtendimentosIxcTarefas.Value320]:
		"SERVIÇO (2) - Escalona O.S para SN2 - Banda Larga",
	[AtendimentosIxcTarefas.Value321]:
		"SERVIÇO (2) - Escalona O.S para SN2 - Telefonia",
	[AtendimentosIxcTarefas.Value395]:
		"SERVIÇO (2) - Encaminhar O.S para Financeiro",
	[AtendimentosIxcTarefas.Value170]:
		"REPARO (2) - Encaminhar O.S para Agendamento",
	[AtendimentosIxcTarefas.Value171]:
		"REPARO (2) - Encaminhar O.S para o Customer Success",
	[AtendimentosIxcTarefas.Value174]:
		"REPARO (2) - Escalona O.S para SN2 - Banda Larga",
	[AtendimentosIxcTarefas.Value175]:
		"REPARO (2) - Escalona O.S para SN2 - Telefonia",
	[AtendimentosIxcTarefas.Value375]:
		"REPARO (2) - Encaminhar O.S para Financeiro",
	[AtendimentosIxcTarefas.Value414]:
		"REPARO (2) - Escalona O.S para SN2 - MVNO",
	[AtendimentosIxcTarefas.Value228]:
		"MANUN. PREV. - Encaminhar O.S para Agendamento",
	[AtendimentosIxcTarefas.Value229]:
		"MANUN. PREV. - Encaminhar O.S para Customer Success",
	[AtendimentosIxcTarefas.Value230]:
		"MANUN. PREV. - Escalona O.S para SN2 - Banda Larga",
	[AtendimentosIxcTarefas.Value234]:
		"MANUN. PREV. - Escalona O.S para SN2 - Telefonia",
	[AtendimentosIxcTarefas.Value384]:
		"MANUN. PREV. - Encaminhar O.S para Financeiro",
	[AtendimentosIxcTarefas.Value240]:
		"MANUN. PREV. (2) - Encaminhar O.S para Agendamento",
	[AtendimentosIxcTarefas.Value241]:
		"MANUN. PREV. (2) - Encaminhar O.S para Customer Success",
	[AtendimentosIxcTarefas.Value244]:
		"MANUN. PREV. (2) - Escalona O.S para SN2 - Banda Larga",
	[AtendimentosIxcTarefas.Value245]:
		"MANUN. PREV. (2) - Escalona O.S para SN2 - Telefonia",
	[AtendimentosIxcTarefas.Value386]:
		"MANUN. PREV. (2) - Encaminhar O.S para Financeiro",
};

export interface AuditoriaAutomatica {
	id: number;
	f_conferencia: boolean;
	f_id_negociacao: number;
	f_titulo_negociacao: string;
	f_valor_mensal: number;
	updatedAt: string;
	createdAt: string;
}

export interface AuditoriaAutomaticaRelations {
	createdBy?: Users | null;
	f_negociacoes?: Negociacoes | null;
	updatedBy?: Users | null;
}

export type AuditoriaAutomaticaRelationKey = keyof AuditoriaAutomaticaRelations;

export interface Cargos {
	id: number;
	f_fk_funcionarios: number;
	f_atividades: string;
	f_cbo: string;
	f_descricao: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface CargosRelations {
	createdBy?: Users | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type CargosRelationKey = keyof CargosRelations;

export interface ComentarioViagem {
	id: number;
	f_comentario: string;
	f_comentario_viagem: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComentarioViagemRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComentarioViagemRelationKey = keyof ComentarioViagemRelations;

export interface ComentariosCompras {
	id: number;
	f_comentarios: string;
	f_comentarios_compras: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComentariosComprasRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComentariosComprasRelationKey = keyof ComentariosComprasRelations;

export interface ComentariosSuspensaoDeContrato {
	id: number;
	f_fk_suspensao: number;
	f_comentario: string;
	updatedAt: string;
	createdAt: string;
}

export interface ComentariosSuspensaoDeContratoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComentariosSuspensaoDeContratoRelationKey =
	keyof ComentariosSuspensaoDeContratoRelations;

export interface ComprasFornecedores {
	id: number;
	f_contato: string;
	f_nome: string;
	f_site: string;
	updatedAt: string;
	createdAt: string;
}

export interface ComprasFornecedoresRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComprasFornecedoresRelationKey = keyof ComprasFornecedoresRelations;

export interface ComprasProdutos {
	id: number;
	f_834gi7nhict: number;
	f_link_produto: string;
	f_produto: string;
	f_quantidade: number;
	f_sub_total: string;
	f_valor_uni: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComprasProdutosRelations {
	createdBy?: Users | null;
	f_fk_produtos_solicitacao_compra?: SolicitacaoCompras | null;
	updatedBy?: Users | null;
}

export type ComprasProdutosRelationKey = keyof ComprasProdutosRelations;

export enum ConfiguracoesEscopo {
	Ixc = "IXC",
	Geral = "GERAL",
	Spc = "SPC",
	Zapsign = "ZAPSIGN",
}

export interface Configuracoes {
	id: number;
	f_chave: string;
	f_descricao: string;
	f_escopo: ConfiguracoesEscopo;
	f_nome: string;
	f_valor: string;
	updatedAt: string;
	createdAt: string;
}

export interface ConfiguracoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ConfiguracoesRelationKey = keyof ConfiguracoesRelations;

export const CONFIGURACOES_ESCOPO_LABELS: Record<ConfiguracoesEscopo, string> =
	{
		[ConfiguracoesEscopo.Ixc]: "IXCSoft",
		[ConfiguracoesEscopo.Geral]: "GERAL",
		[ConfiguracoesEscopo.Spc]: "SPCBRASIL",
		[ConfiguracoesEscopo.Zapsign]: "ZAPSIGN",
	};

export enum ConsultasPfStatusConsulta {
	Value1 = "1",
	Value2 = "2",
	Value9 = "9",
}

export interface ConsultasPf {
	id: number;
	f_id_pessoa_fk: number;
	f_justificativa: string;
	f_retorno_spc: string;
	f_status_consulta: ConsultasPfStatusConsulta;
	updatedAt: string;
	createdAt: string;
}

export interface ConsultasPfRelations {
	createdBy?: Users | null;
	f_id_pessoa?: Pessoas | null;
	updatedBy?: Users | null;
}

export type ConsultasPfRelationKey = keyof ConsultasPfRelations;

export const CONSULTASPF_STATUSCONSULTA_LABELS: Record<
	ConsultasPfStatusConsulta,
	string
> = {
	[ConsultasPfStatusConsulta.Value1]: "Aprovado",
	[ConsultasPfStatusConsulta.Value2]: "Aprovado com Alertas",
	[ConsultasPfStatusConsulta.Value9]: "Negado",
};

export enum ConsultasPjStatusConsulta {
	Value1 = "1",
	Value2 = "2",
	Value9 = "9",
}

export interface ConsultasPj {
	id: number;
	f_id_pessoa_fk: number;
	f_justificativa: string;
	f_retorno_spc: string;
	f_status_consulta: ConsultasPjStatusConsulta;
	updatedAt: string;
	createdAt: string;
}

export interface ConsultasPjRelations {
	createdBy?: Users | null;
	f_id_pessoa?: Empresas | null;
	updatedBy?: Users | null;
}

export type ConsultasPjRelationKey = keyof ConsultasPjRelations;

export const CONSULTASPJ_STATUSCONSULTA_LABELS: Record<
	ConsultasPjStatusConsulta,
	string
> = {
	[ConsultasPjStatusConsulta.Value1]: "Aprovado",
	[ConsultasPjStatusConsulta.Value2]: "Aprovado com Alertas",
	[ConsultasPjStatusConsulta.Value9]: "Negado",
};

export interface ContratoIxcItens {
	id: number;
	f_fk_itens_contrato_ixc: number;
	f_id_produto_contrato_ixc: string;
	f_mensalidade: string;
	f_produto: string;
	f_quantidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface ContratoIxcItensRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ContratoIxcItensRelationKey = keyof ContratoIxcItensRelations;

export interface Contratos {
	id: number;
	f_fk_negociacao_contrato: number;
	f_fk_suspensao: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface ContratosRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type ContratosRelationKey = keyof ContratosRelations;

export interface ContratosIxc {
	id: number;
	f_descricao: string;
	f_expiracao: string;
	f_vencimento: string;
	updatedAt: string;
	createdAt: string;
}

export interface ContratosIxcRelations {
	createdBy?: Users | null;
	f_itens_contrato?: ContratoIxcItens[];
	updatedBy?: Users | null;
}

export type ContratosIxcRelationKey = keyof ContratosIxcRelations;

export enum CuponsDescontoStatus {
	Value0 = "0",
	Value1 = "1",
}

export enum CuponsDescontoTipo {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
}

export enum CuponsDescontoTipoNegociacao {
	Value1 = "1",
	Value2 = "2",
	S = "S",
}

export interface CuponsDesconto {
	id: number;
	f_fk_pacotes_desconto: number;
	f_fk_vendedor_desconto: number;
	f_cep: string;
	f_codigo: string;
	f_data_fim: string;
	f_data_inicio: string;
	f_endereco: string;
	f_endereco_numero: string;
	f_nome: string;
	f_status: CuponsDescontoStatus;
	f_tipo: CuponsDescontoTipo;
	f_tipo_negociacao: CuponsDescontoTipoNegociacao;
	f_utilizacoes: number;
	f_valor: number;
	f_valor_renovacao: number;
	updatedAt: string;
	createdAt: string;
}

export interface CuponsDescontoRelations {
	createdBy?: Users | null;
	f_pacotes?: Pacotes[];
	f_vendedor?: Users[];
	updatedBy?: Users | null;
}

export type CuponsDescontoRelationKey = keyof CuponsDescontoRelations;

export const CUPONSDESCONTO_STATUS_LABELS: Record<
	CuponsDescontoStatus,
	string
> = {
	[CuponsDescontoStatus.Value0]: "Inativo",
	[CuponsDescontoStatus.Value1]: "Ativo",
};

export const CUPONSDESCONTO_TIPO_LABELS: Record<CuponsDescontoTipo, string> = {
	[CuponsDescontoTipo.Value1]: "Baseado no Endereço",
	[CuponsDescontoTipo.Value2]: "Geral",
	[CuponsDescontoTipo.Value3]: "Upgrade para para contratos abaixo de R$ 100",
	[CuponsDescontoTipo.Value4]: "Contratação de Segundo Plano",
};

export const CUPONSDESCONTO_TIPONEGOCIACAO_LABELS: Record<
	CuponsDescontoTipoNegociacao,
	string
> = {
	[CuponsDescontoTipoNegociacao.Value1]: "Upgrade",
	[CuponsDescontoTipoNegociacao.Value2]: "Venda Nova",
	[CuponsDescontoTipoNegociacao.S]: "Segunda Contratação",
};

export enum DadosAdicionaisClienteContratoFormaDePagamento {
	Carne = "carne",
	Boleto = "boleto",
	Recorrencia = "recorrencia",
}

export enum DadosAdicionaisClienteContratoPerfilDeUso {
	Trabalho = "trabalho",
	Estudo = "estudo",
	Jogos = "jogos",
	Streaming = "streaming",
	Pesquisa = "pesquisa",
}

export interface DadosAdicionaisClienteContrato {
	id: number;
	f_forma_de_pagamento: DadosAdicionaisClienteContratoFormaDePagamento;
	f_id_cliente_contrato: number;
	f_origem_cliente: string;
	f_perfil_de_uso: DadosAdicionaisClienteContratoPerfilDeUso;
	f_pessoas_na_residencia: number;
	updatedAt: string;
	createdAt: string;
}

export interface DadosAdicionaisClienteContratoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DadosAdicionaisClienteContratoRelationKey =
	keyof DadosAdicionaisClienteContratoRelations;

export const DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS: Record<
	DadosAdicionaisClienteContratoFormaDePagamento,
	string
> = {
	[DadosAdicionaisClienteContratoFormaDePagamento.Carne]: "Carnê",
	[DadosAdicionaisClienteContratoFormaDePagamento.Boleto]: "Boleto",
	[DadosAdicionaisClienteContratoFormaDePagamento.Recorrencia]: "Recorrência",
};

export const DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS: Record<
	DadosAdicionaisClienteContratoPerfilDeUso,
	string
> = {
	[DadosAdicionaisClienteContratoPerfilDeUso.Trabalho]: "Trabalho",
	[DadosAdicionaisClienteContratoPerfilDeUso.Estudo]: "Estudo",
	[DadosAdicionaisClienteContratoPerfilDeUso.Jogos]: "Jogos",
	[DadosAdicionaisClienteContratoPerfilDeUso.Streaming]: "Streaming",
	[DadosAdicionaisClienteContratoPerfilDeUso.Pesquisa]: "Pesquisa (Google)",
};

export enum DatacenterMemoriasCapacidade {
	Value2 = "2",
	Value4 = "4",
	Value8 = "8",
	Value16 = "16",
	Value32 = "32",
	Value64 = "64",
	Value128 = "128",
}

export enum DatacenterMemoriasStatus {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export enum DatacenterMemoriasTipo {
	Value3 = "3",
	Value4 = "4",
	Value2 = "2",
}

export interface DatacenterMemorias {
	id: number;
	f_fk_memorias: number;
	f_capacidade: DatacenterMemoriasCapacidade;
	f_fabricante: string;
	f_sn: string;
	f_status: DatacenterMemoriasStatus;
	f_tipo: DatacenterMemoriasTipo;
	f_valor_locacao: number;
	updatedAt: string;
	createdAt: string;
}

export interface DatacenterMemoriasRelations {
	createdBy?: Users | null;
	f_fk_servidor?: DcServidores | null;
	updatedBy?: Users | null;
}

export type DatacenterMemoriasRelationKey = keyof DatacenterMemoriasRelations;

export const DATACENTERMEMORIAS_CAPACIDADE_LABELS: Record<
	DatacenterMemoriasCapacidade,
	string
> = {
	[DatacenterMemoriasCapacidade.Value2]: "2 GB",
	[DatacenterMemoriasCapacidade.Value4]: "4 GB",
	[DatacenterMemoriasCapacidade.Value8]: "8 GB",
	[DatacenterMemoriasCapacidade.Value16]: "16 GB",
	[DatacenterMemoriasCapacidade.Value32]: "32 GB",
	[DatacenterMemoriasCapacidade.Value64]: "64 GB",
	[DatacenterMemoriasCapacidade.Value128]: "128 GB",
};

export const DATACENTERMEMORIAS_STATUS_LABELS: Record<
	DatacenterMemoriasStatus,
	string
> = {
	[DatacenterMemoriasStatus.Value0]: "Descartado",
	[DatacenterMemoriasStatus.Value1]: "Disponivel",
	[DatacenterMemoriasStatus.Value2]: "Alocado para Servidor",
	[DatacenterMemoriasStatus.Value3]: "Manutenção",
};

export const DATACENTERMEMORIAS_TIPO_LABELS: Record<
	DatacenterMemoriasTipo,
	string
> = {
	[DatacenterMemoriasTipo.Value3]: "DDR 3",
	[DatacenterMemoriasTipo.Value4]: "DDR 4",
	[DatacenterMemoriasTipo.Value2]: "DDR 2",
};

export enum DcServidoresFabricante {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
}

export enum DcServidoresStatus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
}

export interface DcServidores {
	id: number;
	f_fk_discos: number;
	f_fabricante: DcServidoresFabricante;
	f_memoria: string;
	f_modelo: string;
	f_obs: string;
	f_processador: string;
	f_sn: string;
	f_status: DcServidoresStatus;
	updatedAt: string;
	createdAt: string;
}

export interface DcServidoresRelations {
	createdBy?: Users | null;
	f_discos?: Discos[];
	f_memorias?: DatacenterMemorias[];
	updatedBy?: Users | null;
}

export type DcServidoresRelationKey = keyof DcServidoresRelations;

export const DCSERVIDORES_FABRICANTE_LABELS: Record<
	DcServidoresFabricante,
	string
> = {
	[DcServidoresFabricante.Value1]: "DELL",
	[DcServidoresFabricante.Value2]: "HPE",
	[DcServidoresFabricante.Value3]: "IBM",
	[DcServidoresFabricante.Value4]: "Supermicro",
	[DcServidoresFabricante.Value5]: "Outro",
};

export const DCSERVIDORES_STATUS_LABELS: Record<DcServidoresStatus, string> = {
	[DcServidoresStatus.Value1]: "Disponivel",
	[DcServidoresStatus.Value2]: "Alocado para Cliente",
	[DcServidoresStatus.Value3]: "Manutenção",
	[DcServidoresStatus.Value4]: "Descartado",
};

export enum DemandasViabilidadesFormaAtendimento {
	Value1 = "1",
	Value2 = "2",
}

export enum DemandasViabilidadesServicoPretendido {
	Value1 = "1",
	Value2 = "2",
}

export enum DemandasViabilidadesStatus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export interface DemandasViabilidades {
	id: number;
	f_fk_viabilidades: number;
	f_custo_recorrente: number;
	f_endereco: string;
	f_forma_atendimento: DemandasViabilidadesFormaAtendimento;
	f_localizacao: string;
	f_servico_pretendido: DemandasViabilidadesServicoPretendido;
	f_status: DemandasViabilidadesStatus;
	f_valor_investimento: number;
	f_velocidade_pretendida: string;
	updatedAt: string;
	createdAt: string;
}

export interface DemandasViabilidadesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DemandasViabilidadesRelationKey =
	keyof DemandasViabilidadesRelations;

export const DEMANDASVIABILIDADES_FORMAATENDIMENTO_LABELS: Record<
	DemandasViabilidadesFormaAtendimento,
	string
> = {
	[DemandasViabilidadesFormaAtendimento.Value1]: "Rede Própria",
	[DemandasViabilidadesFormaAtendimento.Value2]: "Ultima Milha de Terceiros",
};

export const DEMANDASVIABILIDADES_SERVICOPRETENDIDO_LABELS: Record<
	DemandasViabilidadesServicoPretendido,
	string
> = {
	[DemandasViabilidadesServicoPretendido.Value1]: "Link Dedicado",
	[DemandasViabilidadesServicoPretendido.Value2]: "E-Line",
};

export const DEMANDASVIABILIDADES_STATUS_LABELS: Record<
	DemandasViabilidadesStatus,
	string
> = {
	[DemandasViabilidadesStatus.Value1]: "Aguardando",
	[DemandasViabilidadesStatus.Value2]: "Viável",
	[DemandasViabilidadesStatus.Value3]: "Não Viável",
};

export interface Departamentos {
	id: number;
	f_fk_funcionarios: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface DepartamentosRelations {
	createdBy?: Users | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type DepartamentosRelationKey = keyof DepartamentosRelations;

export enum DiscosCapacidade {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
}

export enum DiscosTipo {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
}

export interface Discos {
	id: number;
	f_fk_discos: number;
	f_capacidade: DiscosCapacidade;
	f_data_aquisicao: string;
	f_fornecedor: string;
	f_modelo: string;
	f_preco_compra: number;
	f_preco_venda_locacao: number;
	f_SN: string;
	f_tipo: DiscosTipo;
	updatedAt: string;
	createdAt: string;
}

export interface DiscosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DiscosRelationKey = keyof DiscosRelations;

export const DISCOS_CAPACIDADE_LABELS: Record<DiscosCapacidade, string> = {
	[DiscosCapacidade.Value1]: "480 GB",
	[DiscosCapacidade.Value2]: "960 GB",
	[DiscosCapacidade.Value3]: "240 GB",
	[DiscosCapacidade.Value4]: "1920 GB",
	[DiscosCapacidade.Value5]: "3840 GB",
	[DiscosCapacidade.Value6]: "7868 GB",
	[DiscosCapacidade.Value7]: "120 GB",
	[DiscosCapacidade.Value8]: "100 GB",
	[DiscosCapacidade.Value9]: "500 GB",
	[DiscosCapacidade.Value10]: "1000 GB",
	[DiscosCapacidade.Value11]: "2000 GB",
	[DiscosCapacidade.Value12]: "4000 GB",
};

export const DISCOS_TIPO_LABELS: Record<DiscosTipo, string> = {
	[DiscosTipo.Value1]: "SSD SATA",
	[DiscosTipo.Value2]: "SSD SAS",
	[DiscosTipo.Value3]: "HDD SAS 10k",
	[DiscosTipo.Value4]: "HDD SAS 15k",
	[DiscosTipo.Value5]: "HDD NLSAS",
	[DiscosTipo.Value6]: "HDD SATA",
};

export interface Equipamentos {
	id: number;
	f_fk_ativo_rack: number;
	f_fk_equipamentos_anexos: number;
	f_fk_equipamentos_interfaces: number;
	f_34u76klwxoj: number;
	f_modelo: string;
	f_nome: string;
	f_observacoes: string;
	f_sigla: string;
	f_sn: string;
	updatedAt: string;
	createdAt: string;
}

export interface EquipamentosRelations {
	createdBy?: Users | null;
	f_fwvce6bqigw?: TelecomAnexos[];
	f_hcqrd9qhcid?: Acessos[];
	f_interfaces?: TelecomInterfaces[];
	f_rack?: TelecomRacks | null;
	f_recurso_equipamento_a?: TelecomRecursos[];
	f_site?: Sites | null;
	updatedBy?: Users | null;
}

export type EquipamentosRelationKey = keyof EquipamentosRelations;

export interface EquipamentosEmPredios {
	id: number;
	f_contato_sindico: string;
	f_endereco: string;
	f_modelo_equipamento: string;
	f_nome_predio: string;
	f_observacao: string;
	f_sn: string;
	f_tipo_equipamento: string;
	updatedAt: string;
	createdAt: string;
}

export interface EquipamentosEmPrediosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type EquipamentosEmPrediosRelationKey =
	keyof EquipamentosEmPrediosRelations;

export interface Facilidade {
	id: number;
	f_descricao: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface FacilidadeRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type FacilidadeRelationKey = keyof FacilidadeRelations;

export interface FornecedoresTelecom {
	id: number;
	f_fk_cliente_circuiro: number;
	f_fk_fornecedor_circuito: number;
	f_instrucoes: string;
	f_nome_fantasia: string;
	f_razao_social: string;
	updatedAt: string;
	createdAt: string;
}

export interface FornecedoresTelecomRelations {
	createdBy?: Users | null;
	f_fk_cliente_contrato?: TelecomContratos[];
	f_fk_contrato_fornecedor?: TelecomContratos[];
	f_fk_recurso_cliente?: TelecomRecursos[];
	f_fk_recurso_fornecedor?: TelecomRecursos[];
	updatedBy?: Users | null;
}

export type FornecedoresTelecomRelationKey = keyof FornecedoresTelecomRelations;

export interface FotoAniversario {
	id: number;
	f_fk_aniversarios: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface FotoAniversarioRelations {
	createdBy?: Users | null;
	f_aniversarios?: Aniversarios | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type FotoAniversarioRelationKey = keyof FotoAniversarioRelations;

export interface FotoFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface FotoFuncionariosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type FotoFuncionariosRelationKey = keyof FotoFuncionariosRelations;

export interface Ij93gv1hx9m {
	f_fk_equipamentos_interfaces: number;
	f_fk_interfaces_equipamentos: number;
}

export type Ij93gv1hx9mRelations = Record<string, never>;

export type Ij93gv1hx9mRelationKey = keyof Ij93gv1hx9mRelations;

export enum InfoArquivosArquivoExterno {
	Sim = "sim",
	Nao = "não",
}

export interface InfoArquivos {
	id: number;
	f_fk_funcionarios: number;
	f_arquivo_externo: InfoArquivosArquivoExterno;
	f_titulo: string;
	updatedAt: string;
	createdAt: string;
}

export interface InfoArquivosRelations {
	createdBy?: Users | null;
	f_arquivos?: ArquivosFuncionarios | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type InfoArquivosRelationKey = keyof InfoArquivosRelations;

export const INFOARQUIVOS_ARQUIVOEXTERNO_LABELS: Record<
	InfoArquivosArquivoExterno,
	string
> = {
	[InfoArquivosArquivoExterno.Sim]: "Sim",
	[InfoArquivosArquivoExterno.Nao]: "Não",
};

export enum InfoAsoInformado {
	Nao = "nao",
	Sim = "sim",
}

export enum InfoAsoTipoExame {
	ExameAdmissional = "exame-admissional",
	ExamePeriodico = "exame-periodico",
	AtestadoMedico = "atestado-medico",
	RetornoTrabalho = "retorno-trabalho",
	MudancaFuncao = "mudanca-funcao",
	Outros = "outros",
}

export interface InfoAso {
	id: number;
	f_fk_funcionarios: number;
	f_apto: boolean;
	f_data_exame: string;
	f_data_prox_exame: string;
	f_dias_afastamento: string;
	f_informado: InfoAsoInformado;
	f_obs: string;
	f_tipo_exame: InfoAsoTipoExame;
	updatedAt: string;
	createdAt: string;
}

export interface InfoAsoRelations {
	createdBy?: Users | null;
	f_aso?: Asos | null;
	f_funcionarios_2?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type InfoAsoRelationKey = keyof InfoAsoRelations;

export const INFOASO_INFORMADO_LABELS: Record<InfoAsoInformado, string> = {
	[InfoAsoInformado.Nao]: "Não",
	[InfoAsoInformado.Sim]: "Sim",
};

export const INFOASO_TIPOEXAME_LABELS: Record<InfoAsoTipoExame, string> = {
	[InfoAsoTipoExame.ExameAdmissional]: "Exame Admissional",
	[InfoAsoTipoExame.ExamePeriodico]: "Exame Periódico",
	[InfoAsoTipoExame.AtestadoMedico]: "Atestado Médico",
	[InfoAsoTipoExame.RetornoTrabalho]: "Retorno ao Trabalho",
	[InfoAsoTipoExame.MudancaFuncao]: "Mudança de Função",
	[InfoAsoTipoExame.Outros]: "Outros",
};

export enum ItensPacotesTipoIxc {
	I = "I",
	Smp = "SMP",
	Tv = "TV",
	S = "S",
	T = "T",
	Sva = "SVA",
}

export enum ItensPacotesTipoProduto {
	Sva = "SVA",
	Internet = "INTERNET",
	Stfc = "STFC",
	Mvno = "MVNO",
	Tv = "TV",
}

export interface ItensPacotes {
	id: number;
	f_ch3bjzt4zr7: number;
	f_fk1: number;
	f_fk2: number;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_do_produto: string;
	f_tipo_ixc: ItensPacotesTipoIxc;
	f_tipo_produto: ItensPacotesTipoProduto;
	f_vna9rme0f5j: number;
	updatedAt: string;
	createdAt: string;
}

export interface ItensPacotesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ItensPacotesRelationKey = keyof ItensPacotesRelations;

export const ITENSPACOTES_TIPOIXC_LABELS: Record<ItensPacotesTipoIxc, string> =
	{
		[ItensPacotesTipoIxc.I]: "INTERNET",
		[ItensPacotesTipoIxc.Smp]: "MVNO/SMP",
		[ItensPacotesTipoIxc.Tv]: "TV/STREAMING",
		[ItensPacotesTipoIxc.S]: "SERVICO",
		[ItensPacotesTipoIxc.T]: "STFC/TELEFONE",
		[ItensPacotesTipoIxc.Sva]: "SVA",
	};

export const ITENSPACOTES_TIPOPRODUTO_LABELS: Record<
	ItensPacotesTipoProduto,
	string
> = {
	[ItensPacotesTipoProduto.Sva]: "SVA",
	[ItensPacotesTipoProduto.Internet]: "INTERNET",
	[ItensPacotesTipoProduto.Stfc]: "STFC",
	[ItensPacotesTipoProduto.Mvno]: "MVNO",
	[ItensPacotesTipoProduto.Tv]: "TV",
};

export enum LancamentosFeriasStatus {
	Cancelada = "cancelada",
	Planejada = "planejada",
	EmAndamento = "em-andamento",
	Aprovada = "aprovada",
	Concluida = "concluida",
}

export interface LancamentosFerias {
	id: number;
	f_fk_periodos_ferias: number;
	f_data_retorno: string;
	f_data_saida: string;
	f_dias_gozados: number;
	f_dias_vendidos: number;
	f_observacoes: string;
	f_status: LancamentosFeriasStatus;
	updatedAt: string;
	createdAt: string;
}

export interface LancamentosFeriasRelations {
	createdBy?: Users | null;
	f_periodos_ferias?: PeriodosFerias | null;
	updatedBy?: Users | null;
}

export type LancamentosFeriasRelationKey = keyof LancamentosFeriasRelations;

export const LANCAMENTOSFERIAS_STATUS_LABELS: Record<
	LancamentosFeriasStatus,
	string
> = {
	[LancamentosFeriasStatus.Cancelada]: "Cancelada",
	[LancamentosFeriasStatus.Planejada]: "Planejada",
	[LancamentosFeriasStatus.EmAndamento]: "Em andamento",
	[LancamentosFeriasStatus.Aprovada]: "Aprovada",
	[LancamentosFeriasStatus.Concluida]: "Concluída",
};

export enum LinhaCorporativaTipo {
	Value1 = "1",
	Value2 = "2",
}

export interface LinhaCorporativa {
	id: number;
	f_fk_funcionarios: number;
	f_iccid_corporativo: string;
	f_numero_movel_corporativo: string;
	f_tipo: LinhaCorporativaTipo;
	updatedAt: string;
	createdAt: string;
}

export interface LinhaCorporativaRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type LinhaCorporativaRelationKey = keyof LinhaCorporativaRelations;

export const LINHACORPORATIVA_TIPO_LABELS: Record<
	LinhaCorporativaTipo,
	string
> = {
	[LinhaCorporativaTipo.Value1]: "Chip Corporativo",
	[LinhaCorporativaTipo.Value2]: "DID Fixo",
};

export enum LogsLogLevel {
	Info = "info",
	Warning = "warning",
	Alert = "alert",
	Error = "error",
}

export interface Logs {
	id: number;
	f_log_data: Record<string, unknown>;
	f_log_level: LogsLogLevel;
	f_log_message: string;
	updatedAt: string;
	createdAt: string;
}

export interface LogsRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type LogsRelationKey = keyof LogsRelations;

export const LOGS_LOGLEVEL_LABELS: Record<LogsLogLevel, string> = {
	[LogsLogLevel.Info]: "Info",
	[LogsLogLevel.Warning]: "Warning",
	[LogsLogLevel.Alert]: "Alert",
	[LogsLogLevel.Error]: "Error",
};

export interface LogsCargos {
	id: number;
	f_fk_funcionarios: number;
	CBO: string;
	f_atividades: string;
	f_cargo_anterior: string;
	f_data_inicio_cargo: string;
	f_descricao: string;
	f_nome_cargo: string;
	updatedAt: string;
	createdAt: string;
}

export interface LogsCargosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type LogsCargosRelationKey = keyof LogsCargosRelations;

export interface Muu3vsavv3h {
	f_fk_1_setor_x_colaborador: number;
	f_fk_2_setor_x_colaborador: number;
}

export type Muu3vsavv3hRelations = Record<string, never>;

export type Muu3vsavv3hRelationKey = keyof Muu3vsavv3hRelations;

export interface Na4eifobesz {
	f_fk_pacote_adicional_negociacao: number;
	f_fk_pacote_adicional_pacote: number;
}

export type Na4eifobeszRelations = Record<string, never>;

export type Na4eifobeszRelationKey = keyof Na4eifobeszRelations;

export enum NegociacoesComentariosInsereAtendimentoIxc {
	Value0 = "0",
	Value1 = "1",
}

export enum NegociacoesComentariosSetorParaObs {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
}

export interface NegociacoesComentarios {
	id: number;
	f_fk_comentarios_negociacoes: number;
	f_comentario: string;
	f_insere_atendimento_ixc: NegociacoesComentariosInsereAtendimentoIxc;
	f_setor_para_obs: NegociacoesComentariosSetorParaObs;
	updatedAt: string;
	createdAt: string;
}

export interface NegociacoesComentariosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type NegociacoesComentariosRelationKey =
	keyof NegociacoesComentariosRelations;

export const NEGOCIACOESCOMENTARIOS_INSEREATENDIMENTOIXC_LABELS: Record<
	NegociacoesComentariosInsereAtendimentoIxc,
	string
> = {
	[NegociacoesComentariosInsereAtendimentoIxc.Value0]: "Não",
	[NegociacoesComentariosInsereAtendimentoIxc.Value1]: "Sim",
};

export const NEGOCIACOESCOMENTARIOS_SETORPARAOBS_LABELS: Record<
	NegociacoesComentariosSetorParaObs,
	string
> = {
	[NegociacoesComentariosSetorParaObs.Value1]: "Equipe de Campo",
	[NegociacoesComentariosSetorParaObs.Value2]: "Suporte Nível 1",
	[NegociacoesComentariosSetorParaObs.Value3]: "Suporte Nível 2",
	[NegociacoesComentariosSetorParaObs.Value4]:
		"Telefonia (Ativações e/ou Portabilidades)",
};

export enum NegociacoesItensRelacao {
	Combo = "COMBO",
	Adicional = "ADICIONAL",
}

export enum NegociacoesItensTipoProduto {
	Sva = "SVA",
	Internet = "INTERNET",
	Stfc = "STFC",
	Mvno = "MVNO",
	Tv = "TV",
}

export interface NegociacoesItens {
	id: number;
	f_fk_id_negociacao: number;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_produto: string;
	f_observacoes: string;
	f_observacoes_atendimento: string;
	f_relacao: NegociacoesItensRelacao;
	f_tipo_ixc: string;
	f_tipo_produto: NegociacoesItensTipoProduto;
	updatedAt: string;
	createdAt: string;
}

export interface NegociacoesItensRelations {
	createdBy?: Users | null;
	f_opcoes_smp?: OpcoesSmp | null;
	f_opcoes_stfc?: OpcoesStfc | null;
	updatedBy?: Users | null;
}

export type NegociacoesItensRelationKey = keyof NegociacoesItensRelations;

export const NEGOCIACOESITENS_RELACAO_LABELS: Record<
	NegociacoesItensRelacao,
	string
> = {
	[NegociacoesItensRelacao.Combo]: "COMBO",
	[NegociacoesItensRelacao.Adicional]: "ADICIONAL",
};

export const NEGOCIACOESITENS_TIPOPRODUTO_LABELS: Record<
	NegociacoesItensTipoProduto,
	string
> = {
	[NegociacoesItensTipoProduto.Sva]: "SVA",
	[NegociacoesItensTipoProduto.Internet]: "INTERNET",
	[NegociacoesItensTipoProduto.Stfc]: "STFC",
	[NegociacoesItensTipoProduto.Mvno]: "MVNO",
	[NegociacoesItensTipoProduto.Tv]: "TV",
};

export interface Nukww9tmq83 {
	f_fk1_setor_tipos: number;
	f_fk2_setor_tipos: number;
}

export type Nukww9tmq83Relations = Record<string, never>;

export type Nukww9tmq83RelationKey = keyof Nukww9tmq83Relations;

export enum OeQualirunProcedimento {
	Value1776052314044ff9B78615a4b0d7a3e2 = "17760523-1404-4ff9-b786-15a4b0d7a3e2",
}

export enum OeQualirunStatus {
	Cancelado = "cancelado",
	Novo = "novo",
	Pendente = "pendente",
	Concluido = "concluido",
}

export interface OeQualirun {
	id: number;
	f_fk_negociacoes: number;
	f_id_externo: string;
	f_link_externo: string;
	f_procedimento: OeQualirunProcedimento;
	f_status: OeQualirunStatus;
	updatedAt: string;
	createdAt: string;
}

export interface OeQualirunRelations {
	createdBy?: Users | null;
	f_negociacoes?: Negociacoes | null;
	updatedBy?: Users | null;
}

export type OeQualirunRelationKey = keyof OeQualirunRelations;

export const OEQUALIRUN_PROCEDIMENTO_LABELS: Record<
	OeQualirunProcedimento,
	string
> = {
	[OeQualirunProcedimento.Value1776052314044ff9B78615a4b0d7a3e2]:
		"Assinatura via GOV",
};

export const OEQUALIRUN_STATUS_LABELS: Record<OeQualirunStatus, string> = {
	[OeQualirunStatus.Cancelado]: "Cancelado",
	[OeQualirunStatus.Novo]: "Novo",
	[OeQualirunStatus.Pendente]: "Pendente",
	[OeQualirunStatus.Concluido]: "Concluído",
};

export enum OpcoesSmpPortabilidade {
	Value0 = "0",
	Value1 = "1",
}

export interface OpcoesSmp {
	id: number;
	f_fk_prod_negociacao_opcoes_smp: number;
	f_bonus: string;
	f_franquia_dados: string;
	f_minutos: string;
	f_nome_do_plano: string;
	f_portabilidade: OpcoesSmpPortabilidade;
	f_sms: string;
	f_sva_incluso: string;
	f_terminal: string;
	f_valor_smp: number;
	f_valor_sva: number;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesSmpRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesSmpRelationKey = keyof OpcoesSmpRelations;

export const OPCOESSMP_PORTABILIDADE_LABELS: Record<
	OpcoesSmpPortabilidade,
	string
> = {
	[OpcoesSmpPortabilidade.Value0]: "NÃO",
	[OpcoesSmpPortabilidade.Value1]: "SIM",
};

export interface OpcoesSmpTemplate {
	id: number;
	f_fk_smp_produtos: number;
	f_bonus: string;
	f_franquia_dados: string;
	f_minutos: string;
	f_nome_plano: string;
	f_sms: string;
	f_sva_incluso: string;
	f_valor_smp: number;
	f_valor_sva: number;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesSmpTemplateRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesSmpTemplateRelationKey = keyof OpcoesSmpTemplateRelations;

export enum OpcoesStfcPortabilidade {
	Sim = "SIM",
	Nao = "NAO",
}

export interface OpcoesStfc {
	id: number;
	f_fk_opcoes_stfc: number;
	f_canais: string;
	f_franquia: string;
	f_nome_do_plano: string;
	f_portabilidade: OpcoesStfcPortabilidade;
	f_terminais: string;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesStfcRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesStfcRelationKey = keyof OpcoesStfcRelations;

export const OPCOESSTFC_PORTABILIDADE_LABELS: Record<
	OpcoesStfcPortabilidade,
	string
> = {
	[OpcoesStfcPortabilidade.Sim]: "SIM",
	[OpcoesStfcPortabilidade.Nao]: "NÃO",
};

export enum OpcoesStfcTemplatePortabilidade {
	Value0 = "0",
	Value1 = "1",
}

export interface OpcoesStfcTemplate {
	id: number;
	f_fk_opcoes_stfc_template: number;
	f_canais: number;
	f_franquia: string;
	f_nome_do_plano: string;
	f_portabilidade: OpcoesStfcTemplatePortabilidade;
	f_terminais: string;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesStfcTemplateRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesStfcTemplateRelationKey = keyof OpcoesStfcTemplateRelations;

export const OPCOESSTFCTEMPLATE_PORTABILIDADE_LABELS: Record<
	OpcoesStfcTemplatePortabilidade,
	string
> = {
	[OpcoesStfcTemplatePortabilidade.Value0]: "NÃO",
	[OpcoesStfcTemplatePortabilidade.Value1]: "SIM",
};

export interface P10scfhrhkw {
	id: number;
	f_m7vet8zixc9: number;
	updatedAt: string;
	createdAt: string;
}

export interface P10scfhrhkwRelations {
	createdBy?: Users | null;
	f_ytw8yxxeul0?: _902ctke5dhq | null;
	updatedBy?: Users | null;
}

export type P10scfhrhkwRelationKey = keyof P10scfhrhkwRelations;

export enum PacotesAbreAtendimento {
	Value0 = "0",
	Value1 = "1",
}

export enum PacotesPacoteAdicional {
	Value0 = "0",
	Value1 = "1",
}

export enum PacotesPacotePrincipal {
	Value0 = "0",
	Value1 = "1",
}

export enum PacotesStatus {
	Value1 = "1",
	Value2 = "2",
}

export enum PacotesVenderPara {
	Pf = "PF",
	Pj = "PJ",
}

export interface Pacotes {
	id: number;
	f_fk_desconto_pacotes: number;
	f_fk_id_pacote: number;
	f_abre_atendimento: PacotesAbreAtendimento;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_pacote: string;
	f_pacote_adicional: PacotesPacoteAdicional;
	f_pacote_principal: PacotesPacotePrincipal;
	f_status: PacotesStatus;
	f_vender_para: PacotesVenderPara;
	updatedAt: string;
	createdAt: string;
}

export interface PacotesRelations {
	createdBy?: Users | null;
	f_itens_do_pacote?: Produtos[];
	updatedBy?: Users | null;
}

export type PacotesRelationKey = keyof PacotesRelations;

export const PACOTES_ABREATENDIMENTO_LABELS: Record<
	PacotesAbreAtendimento,
	string
> = {
	[PacotesAbreAtendimento.Value0]: "NAO",
	[PacotesAbreAtendimento.Value1]: "SIM",
};

export const PACOTES_PACOTEADICIONAL_LABELS: Record<
	PacotesPacoteAdicional,
	string
> = {
	[PacotesPacoteAdicional.Value0]: "NAO",
	[PacotesPacoteAdicional.Value1]: "SIM",
};

export const PACOTES_PACOTEPRINCIPAL_LABELS: Record<
	PacotesPacotePrincipal,
	string
> = {
	[PacotesPacotePrincipal.Value0]: "NAO",
	[PacotesPacotePrincipal.Value1]: "SIM",
};

export const PACOTES_STATUS_LABELS: Record<PacotesStatus, string> = {
	[PacotesStatus.Value1]: "Ativo",
	[PacotesStatus.Value2]: "Inativo",
};

export const PACOTES_VENDERPARA_LABELS: Record<PacotesVenderPara, string> = {
	[PacotesVenderPara.Pf]: "Pessoa Física",
	[PacotesVenderPara.Pj]: "Pessoa Jurídica",
};

export interface Parentesco {
	id: number;
	f_fk_funcionarios: number;
	f_cpf: string;
	f_nome: string;
	f_vinculo_colaborador: string;
	updatedAt: string;
	createdAt: string;
}

export interface ParentescoRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type ParentescoRelationKey = keyof ParentescoRelations;

export enum PatrimonioEstadoUso {
	Novo = "NOVO",
	UsadoEmEstadoDeNovo = "USADO, EM ESTADO DE NOVO",
	UsadoComMarcasDeUso = "USADO, COM MARCAS DE USO",
}

export enum PatrimonioTipoPatrimonio {
	Value1 = "1",
}

export interface Patrimonio {
	id: number;
	f_fk_funcionarios: number;
	f_id_tecnico_ixc: number;
	f_armazenamento: string;
	f_estado_uso: PatrimonioEstadoUso;
	f_modelo: string;
	f_nome_patrimonio: string;
	f_numero_serie: string;
	f_processador: string;
	f_quantidade: number;
	f_ram: string;
	f_so: string;
	f_tipo_patrimonio: PatrimonioTipoPatrimonio;
	f_valor_patrimonio: number;
	updatedAt: string;
	createdAt: string;
}

export interface PatrimonioRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type PatrimonioRelationKey = keyof PatrimonioRelations;

export const PATRIMONIO_ESTADOUSO_LABELS: Record<PatrimonioEstadoUso, string> =
	{
		[PatrimonioEstadoUso.Novo]: "NOVO",
		[PatrimonioEstadoUso.UsadoEmEstadoDeNovo]: "USADO, EM ESTADO DE NOVO",
		[PatrimonioEstadoUso.UsadoComMarcasDeUso]: "USADO, COM MARCAS DE USO",
	};

export const PATRIMONIO_TIPOPATRIMONIO_LABELS: Record<
	PatrimonioTipoPatrimonio,
	string
> = {
	[PatrimonioTipoPatrimonio.Value1]: "Equipamento",
};

export enum PeriodosFeriasStatusPeriodo {
	Cancelada = "cancelada",
	Planejada = "planejada",
	EmAndamento = "em-andamento",
	Aprovada = "aprovada",
	Concluida = "concluida",
}

export interface PeriodosFerias {
	id: number;
	f_fk_funcionarios: number;
	f_dias_direito: number;
	f_periodo_aquisitivo_fim: string;
	f_periodo_aquisitivo_inicio: string;
	f_periodo_concessivo_fim: string;
	f_periodo_concessivo_inicio: string;
	f_status_periodo: PeriodosFeriasStatusPeriodo;
	updatedAt: string;
	createdAt: string;
}

export interface PeriodosFeriasRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_lancamentos_ferias?: LancamentosFerias[];
	updatedBy?: Users | null;
}

export type PeriodosFeriasRelationKey = keyof PeriodosFeriasRelations;

export const PERIODOSFERIAS_STATUSPERIODO_LABELS: Record<
	PeriodosFeriasStatusPeriodo,
	string
> = {
	[PeriodosFeriasStatusPeriodo.Cancelada]: "Cancelada",
	[PeriodosFeriasStatusPeriodo.Planejada]: "Planejada",
	[PeriodosFeriasStatusPeriodo.EmAndamento]: "Em andamento",
	[PeriodosFeriasStatusPeriodo.Aprovada]: "Aprovada",
	[PeriodosFeriasStatusPeriodo.Concluida]: "Concluída",
};

export enum ProdutosTipoIxc {
	I = "I",
	Smp = "SMP",
	Tv = "TV",
	S = "S",
	T = "T",
	Sva = "SVA",
}

export enum ProdutosTipoProduto {
	Sva = "SVA",
	Internet = "INTERNET",
	Stfc = "STFC",
	Mvno = "MVNO",
	Tv = "TV",
}

export interface Produtos {
	id: number;
	f_descricao_produto: string;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_produto: string;
	f_tipo_ixc: ProdutosTipoIxc;
	f_tipo_produto: ProdutosTipoProduto;
	updatedAt: string;
	createdAt: string;
}

export interface ProdutosRelations {
	createdBy?: Users | null;
	f_opcoes_smp_template?: OpcoesSmpTemplate | null;
	f_opcoes_STFC?: OpcoesStfcTemplate | null;
	updatedBy?: Users | null;
}

export type ProdutosRelationKey = keyof ProdutosRelations;

export const PRODUTOS_TIPOIXC_LABELS: Record<ProdutosTipoIxc, string> = {
	[ProdutosTipoIxc.I]: "INTERNET",
	[ProdutosTipoIxc.Smp]: "SMP/MVNO",
	[ProdutosTipoIxc.Tv]: "TV/STREAMING",
	[ProdutosTipoIxc.S]: "SERVICO",
	[ProdutosTipoIxc.T]: "STFC/TELEFONE",
	[ProdutosTipoIxc.Sva]: "SVA",
};

export const PRODUTOS_TIPOPRODUTO_LABELS: Record<ProdutosTipoProduto, string> =
	{
		[ProdutosTipoProduto.Sva]: "SVA",
		[ProdutosTipoProduto.Internet]: "INTERNET",
		[ProdutosTipoProduto.Stfc]: "STFC",
		[ProdutosTipoProduto.Mvno]: "MVNO",
		[ProdutosTipoProduto.Tv]: "TV",
	};

export interface QualirunAssinaturaGov {
	id: number;
	f_fk_negociacoes: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunAssinaturaGovRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type QualirunAssinaturaGovRelationKey =
	keyof QualirunAssinaturaGovRelations;

export enum QualirunInfoAdicionaisGrauEscolaridade {
	EnsinoMedio = "Ensino Médio",
	Superior = "Superior",
	PosMba = "Pós, MBA",
	Mestrado = "Mestrado",
	Doutorado = "Doutorado",
}

export enum QualirunInfoAdicionaisSituacaoCurso {
	Trancado = "Trancado",
	Cursando = "Cursando",
	Completo = "Completo",
}

export enum QualirunInfoAdicionaisStatus {
	Recusado = "recusado",
	Aprovado = "aprovado",
	Aguardando = "aguardando",
}

export enum QualirunInfoAdicionaisVinculoContatoEmergencia {
	Pais = "Pais",
	FilhoAOuEnteadoA = "Filho(a) ou Enteado(a)",
	Avos = "Avós",
	Conjuge = "Conjuge",
}

export interface QualirunInfoAdicionais {
	id: number;
	f_fk_funcionarios: number;
	f_2fxykekjpk2: string;
	f_contato_emergencia: string;
	f_curso: string;
	f_grau_escolaridade: QualirunInfoAdicionaisGrauEscolaridade;
	f_id_externo: string;
	f_parentesco_cpf: string;
	f_parentesco_nome: string;
	f_parentesco_vinculo: string;
	f_situacao_curso: QualirunInfoAdicionaisSituacaoCurso;
	f_sqt1x7ndy5j: string;
	f_status: QualirunInfoAdicionaisStatus;
	f_telefone_contato_emergencia: string;
	f_tkxxh3xi2zw: string;
	f_vinculo_contato_emergencia: QualirunInfoAdicionaisVinculoContatoEmergencia;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunInfoAdicionaisRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type QualirunInfoAdicionaisRelationKey =
	keyof QualirunInfoAdicionaisRelations;

export const QUALIRUNINFOADICIONAIS_GRAUESCOLARIDADE_LABELS: Record<
	QualirunInfoAdicionaisGrauEscolaridade,
	string
> = {
	[QualirunInfoAdicionaisGrauEscolaridade.EnsinoMedio]: "Ensino Médio",
	[QualirunInfoAdicionaisGrauEscolaridade.Superior]: "Superior",
	[QualirunInfoAdicionaisGrauEscolaridade.PosMba]: "Pós, MBA",
	[QualirunInfoAdicionaisGrauEscolaridade.Mestrado]: "Mestrado",
	[QualirunInfoAdicionaisGrauEscolaridade.Doutorado]: "Doutorado",
};

export const QUALIRUNINFOADICIONAIS_SITUACAOCURSO_LABELS: Record<
	QualirunInfoAdicionaisSituacaoCurso,
	string
> = {
	[QualirunInfoAdicionaisSituacaoCurso.Trancado]: "Trancado",
	[QualirunInfoAdicionaisSituacaoCurso.Cursando]: "Cursando",
	[QualirunInfoAdicionaisSituacaoCurso.Completo]: "Completo",
};

export const QUALIRUNINFOADICIONAIS_STATUS_LABELS: Record<
	QualirunInfoAdicionaisStatus,
	string
> = {
	[QualirunInfoAdicionaisStatus.Recusado]: "Recusado",
	[QualirunInfoAdicionaisStatus.Aprovado]: "Aprovado",
	[QualirunInfoAdicionaisStatus.Aguardando]: "Aguardando",
};

export const QUALIRUNINFOADICIONAIS_VINCULOCONTATOEMERGENCIA_LABELS: Record<
	QualirunInfoAdicionaisVinculoContatoEmergencia,
	string
> = {
	[QualirunInfoAdicionaisVinculoContatoEmergencia.Pais]: "Pais",
	[QualirunInfoAdicionaisVinculoContatoEmergencia.FilhoAOuEnteadoA]:
		"Filho(a) ou Enteado(a)",
	[QualirunInfoAdicionaisVinculoContatoEmergencia.Avos]: "Avós",
	[QualirunInfoAdicionaisVinculoContatoEmergencia.Conjuge]: "Conjuge",
};

export enum QualirunProcessosDetalhesProcedimento {
	Value1 = "1",
	Value2 = "2",
}

export enum QualirunProcessosIdProcedimentoQualirun {
	C03f166dA4d742b7Ae73A4c287e171ac = "c03f166d-a4d7-42b7-ae73-a4c287e171ac",
	Value0a3d75b429084bc285a664667ec60477 = "0a3d75b4-2908-4bc2-85a6-64667ec60477",
}

export enum QualirunProcessosProcedimento {
	ComplementoInformacoesDocumentos = "complemento-informacoes-documentos",
	ConfidencialidadeLgpdVozImagem = "confidencialidade-lgpd-voz-imagem",
}

export enum QualirunProcessosStatus {
	Novo = "novo",
	Pendente = "pendente",
	Concluido = "concluido",
	Cancelado = "cancelado",
}

export interface QualirunProcessos {
	id: number;
	f_fk_funcionarios: number;
	f_detalhes_procedimento: QualirunProcessosDetalhesProcedimento;
	f_id_externo: string;
	f_id_procedimento_qualirun: QualirunProcessosIdProcedimentoQualirun;
	f_link_externo: string;
	f_procedimento: QualirunProcessosProcedimento;
	f_status: QualirunProcessosStatus;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunProcessosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type QualirunProcessosRelationKey = keyof QualirunProcessosRelations;

export const QUALIRUNPROCESSOS_DETALHESPROCEDIMENTO_LABELS: Record<
	QualirunProcessosDetalhesProcedimento,
	string
> = {
	[QualirunProcessosDetalhesProcedimento.Value1]:
		"Utilizado para novos colaboradores preencherem os dados e a documentação de admissão, que serão utilizados no CRM, aba de Colaboradores.",
	[QualirunProcessosDetalhesProcedimento.Value2]:
		"Utilizado para novos colaboradores assinarem os termos de Confidencialidade, LGPD e Uso Voz e Imagem.",
};

export const QUALIRUNPROCESSOS_IDPROCEDIMENTOQUALIRUN_LABELS: Record<
	QualirunProcessosIdProcedimentoQualirun,
	string
> = {
	[QualirunProcessosIdProcedimentoQualirun.C03f166dA4d742b7Ae73A4c287e171ac]:
		"Complemento de Informações e Documentos",
	[QualirunProcessosIdProcedimentoQualirun.Value0a3d75b429084bc285a664667ec60477]:
		"Assinatura com Identidade Verificada",
};

export const QUALIRUNPROCESSOS_PROCEDIMENTO_LABELS: Record<
	QualirunProcessosProcedimento,
	string
> = {
	[QualirunProcessosProcedimento.ComplementoInformacoesDocumentos]:
		"Complemento de Informações e Documentos",
	[QualirunProcessosProcedimento.ConfidencialidadeLgpdVozImagem]:
		"Assinatura de Termos (LGPD, Voz e Imagem e Confidencialidade)",
};

export const QUALIRUNPROCESSOS_STATUS_LABELS: Record<
	QualirunProcessosStatus,
	string
> = {
	[QualirunProcessosStatus.Novo]: "Novo",
	[QualirunProcessosStatus.Pendente]: "Pendente",
	[QualirunProcessosStatus.Concluido]: "Concluído",
	[QualirunProcessosStatus.Cancelado]: "Cancelado",
};

export enum RecursosViagemDestinoViagem {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export enum RecursosViagemMeioTransporte {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
}

export interface RecursosViagem {
	id: number;
	f_fk_recursos_viagem: number;
	f_destino_viagem: RecursosViagemDestinoViagem;
	f_km_percorrido: number;
	f_meio_transporte: RecursosViagemMeioTransporte;
	f_observacoes: string;
	updatedAt: string;
	createdAt: string;
}

export interface RecursosViagemRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type RecursosViagemRelationKey = keyof RecursosViagemRelations;

export const RECURSOSVIAGEM_DESTINOVIAGEM_LABELS: Record<
	RecursosViagemDestinoViagem,
	string
> = {
	[RecursosViagemDestinoViagem.Value1]: "Curitibanos",
	[RecursosViagemDestinoViagem.Value2]: "Florianópolis",
	[RecursosViagemDestinoViagem.Value3]: "Florianópolis",
};

export const RECURSOSVIAGEM_MEIOTRANSPORTE_LABELS: Record<
	RecursosViagemMeioTransporte,
	string
> = {
	[RecursosViagemMeioTransporte.Value1]: "Kwid ATPlus",
	[RecursosViagemMeioTransporte.Value2]: "Fiorino ATPlus",
	[RecursosViagemMeioTransporte.Value3]: "Carro Particular",
	[RecursosViagemMeioTransporte.Value4]: "Outro",
};

export interface Rguxtr9p91d {
	f_fk_ponta_a_interface: number;
	f_fk_ponta_a_interface2: number;
}

export type Rguxtr9p91dRelations = Record<string, never>;

export type Rguxtr9p91dRelationKey = keyof Rguxtr9p91dRelations;

export enum ServicosStatus {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
}

export enum ServicosTipo {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
}

export interface Servicos {
	id: number;
	f_fk_servico_x_contrato: number;
	f_id_contrato_ixc: string;
	f_id_servico_ixc: string;
	f_caracteristicas: string;
	f_descricao: string;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_propriedades: string;
	f_status: ServicosStatus;
	f_tipo: ServicosTipo;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface ServicosRelations {
	createdBy?: Users | null;
	f_acessos?: Acessos[];
	f_arquivos?: TelecomAnexos[];
	f_kyyzn4kut6e?: TelecomContratos | null;
	f_rj1pckkkeqi?: Servicos[];
	f_servicos_relacionados?: Servicos[];
	updatedBy?: Users | null;
}

export type ServicosRelationKey = keyof ServicosRelations;

export const SERVICOS_STATUS_LABELS: Record<ServicosStatus, string> = {
	[ServicosStatus.Value0]: "Cancelado",
	[ServicosStatus.Value1]: "Aguardando Ativação",
	[ServicosStatus.Value2]: "Ativo",
};

export const SERVICOS_TIPO_LABELS: Record<ServicosTipo, string> = {
	[ServicosTipo.Value1]: "Link IP",
	[ServicosTipo.Value2]: "PTP",
	[ServicosTipo.Value3]: "PTMP",
	[ServicosTipo.Value4]: "OUTRO",
	[ServicosTipo.Value5]: "Lastmile",
	[ServicosTipo.Value6]: "Colocation",
};

export interface ServicosXServicos {
	f_8n72gqelvp5: number;
	f_d40asyeldtp: number;
}

export type ServicosXServicosRelations = Record<string, never>;

export type ServicosXServicosRelationKey = keyof ServicosXServicosRelations;

export interface Setor {
	id: number;
	f_fk_funcionarios: unknown[];
	f_fk_sistemas_acessos: unknown[];
	f_nome_setor: string;
	updatedAt: string;
	createdAt: string;
}

export interface SetorRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	f_funcionarios_1?: FFuncionarios[];
	f_sistemas_acessos?: SistemasAcessos[];
	updatedBy?: Users | null;
}

export type SetorRelationKey = keyof SetorRelations;

export interface SistemasAcessos {
	id: number;
	f_fk_funcionarios: unknown[];
	f_sistemas_acessos: string;
	f_url: string;
	updatedAt: string;
	createdAt: string;
}

export interface SistemasAcessosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	updatedBy?: Users | null;
}

export type SistemasAcessosRelationKey = keyof SistemasAcessosRelations;

export enum SitesStatus {
	Repnmsclnb8 = "repnmsclnb8",
	X2lk2z9p2ds = "x2lk2z9p2ds",
	Qw3vjvimoae = "qw3vjvimoae",
}

export enum SitesTipo {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export interface Sites {
	id: number;
	f_fk_telecom_contatos: number;
	f_bairro: string;
	f_cep: string;
	f_cidade: string;
	f_complemento: string;
	f_dados_acesso: string;
	f_endereco: string;
	f_nome: string;
	f_numero: string;
	f_sigla: string;
	f_status: SitesStatus;
	f_tipo: SitesTipo;
	f_uf: string;
	updatedAt: string;
	createdAt: string;
}

export interface SitesRelations {
	createdBy?: Users | null;
	f_anexos?: TelecomAnexos[];
	f_contatos?: FContatos | null;
	f_fk_sites_equipamentos?: Equipamentos[];
	f_racks?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type SitesRelationKey = keyof SitesRelations;

export const SITES_STATUS_LABELS: Record<SitesStatus, string> = {
	[SitesStatus.Repnmsclnb8]: "Planejado",
	[SitesStatus.X2lk2z9p2ds]: "Ativo",
	[SitesStatus.Qw3vjvimoae]: "Desativado",
};

export const SITES_TIPO_LABELS: Record<SitesTipo, string> = {
	[SitesTipo.Value1]: "ATPLUS",
	[SitesTipo.Value2]: "FORNECEDOR",
	[SitesTipo.Value3]: "CLIENTE",
};

export interface Siurxeb1juy {
	f_stgjevi19lg: number;
	f_vazo5n0bhe5: number;
}

export type Siurxeb1juyRelations = Record<string, never>;

export type Siurxeb1juyRelationKey = keyof Siurxeb1juyRelations;

export enum SolicitacaoComprasCategoria {
	Produto = "Produto",
	Servico = "Serviço",
}

export enum SolicitacaoComprasDepartamento {
	Almox = "Almox",
	Comercial = "Comercial",
	Financeiro = "Financeiro",
	Infraestrutura = "Infraestrutura",
	LaboratorioTecnico = "Laboratório Técnico",
	Marketing = "Marketing",
	Noc = "NOC",
	Operacional = "Operacional",
	Platon = "Platon",
	Processos = "Processos",
	Projetos = "Projetos",
	Rh = "RH",
	ServicosGerais = "Serviços Gerais",
}

export enum SolicitacaoComprasMetodoDePagamento {
	ADefinir = "Á definir",
	Pix = "Pix",
	Boleto = "Boleto",
	Cartao = "Cartão",
}

export enum SolicitacaoComprasPrazo {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
	Value14 = "14",
}

export enum SolicitacaoComprasStatus {
	CaixaDeEntrada = "Caixa de Entrada",
	AprovacaoDaGestao = "Aprovação da Gestão",
	PedidoDeCompra = "Pedido de Compra",
	ProcessamentoFinanceiro = "Processamento Financeiro",
	FilaDeEntrega = "Fila de Entrega",
	Concluido = "Concluído",
	Rejeitado = "Rejeitado",
	Standby = "Standby",
}

export enum SolicitacaoComprasTipo {
	Value1 = "1",
	Value2 = "2",
}

export interface SolicitacaoCompras {
	id: number;
	f_0i82r8a2t99: number;
	f_categoria: SolicitacaoComprasCategoria;
	f_departamento: SolicitacaoComprasDepartamento;
	f_justificativa: string;
	f_link: string;
	f_metodo_de_pagamento: SolicitacaoComprasMetodoDePagamento;
	f_motivo_arquivamento: string;
	f_observacoes_finais: string;
	f_prazo: SolicitacaoComprasPrazo;
	f_prazo_de_entrega: string;
	f_servico: string;
	f_status: SolicitacaoComprasStatus;
	f_tipo: SolicitacaoComprasTipo;
	f_titulo: string;
	f_valor_total: number;
	f_xm95ss7u5xw: number;
	fk_demandas_solicitacao_compras: number;
	fk_solicitacao_compras: number;
	updatedAt: string;
	createdAt: string;
}

export interface SolicitacaoComprasRelations {
	createdBy?: Users | null;
	f_anexos?: unknown[];
	f_fornecedor?: ComprasFornecedores | null;
	f_produtos?: ComprasProdutos[];
	updatedBy?: Users | null;
}

export type SolicitacaoComprasRelationKey = keyof SolicitacaoComprasRelations;

export const SOLICITACAOCOMPRAS_CATEGORIA_LABELS: Record<
	SolicitacaoComprasCategoria,
	string
> = {
	[SolicitacaoComprasCategoria.Produto]: "Produto",
	[SolicitacaoComprasCategoria.Servico]: "Serviço",
};

export const SOLICITACAOCOMPRAS_DEPARTAMENTO_LABELS: Record<
	SolicitacaoComprasDepartamento,
	string
> = {
	[SolicitacaoComprasDepartamento.Almox]: "Almox",
	[SolicitacaoComprasDepartamento.Comercial]: "Comercial",
	[SolicitacaoComprasDepartamento.Financeiro]: "Financeiro",
	[SolicitacaoComprasDepartamento.Infraestrutura]: "Infraestrutura",
	[SolicitacaoComprasDepartamento.LaboratorioTecnico]: "Laboratório Técnico",
	[SolicitacaoComprasDepartamento.Marketing]: "Marketing",
	[SolicitacaoComprasDepartamento.Noc]: "NOC",
	[SolicitacaoComprasDepartamento.Operacional]: "Operacional",
	[SolicitacaoComprasDepartamento.Platon]: "Platon",
	[SolicitacaoComprasDepartamento.Processos]: "Processos",
	[SolicitacaoComprasDepartamento.Projetos]: "Projetos",
	[SolicitacaoComprasDepartamento.Rh]: "RH",
	[SolicitacaoComprasDepartamento.ServicosGerais]: "Serviços Gerais",
};

export const SOLICITACAOCOMPRAS_METODODEPAGAMENTO_LABELS: Record<
	SolicitacaoComprasMetodoDePagamento,
	string
> = {
	[SolicitacaoComprasMetodoDePagamento.ADefinir]: "Á definir",
	[SolicitacaoComprasMetodoDePagamento.Pix]: "Pix",
	[SolicitacaoComprasMetodoDePagamento.Boleto]: "Boleto",
	[SolicitacaoComprasMetodoDePagamento.Cartao]: "Cartão",
};

export const SOLICITACAOCOMPRAS_PRAZO_LABELS: Record<
	SolicitacaoComprasPrazo,
	string
> = {
	[SolicitacaoComprasPrazo.Value1]: "Á definir",
	[SolicitacaoComprasPrazo.Value2]: "Á vista",
	[SolicitacaoComprasPrazo.Value3]: "1x",
	[SolicitacaoComprasPrazo.Value4]: "2x",
	[SolicitacaoComprasPrazo.Value5]: "3x",
	[SolicitacaoComprasPrazo.Value6]: "4x",
	[SolicitacaoComprasPrazo.Value7]: "5x",
	[SolicitacaoComprasPrazo.Value8]: "6x",
	[SolicitacaoComprasPrazo.Value9]: "7x",
	[SolicitacaoComprasPrazo.Value10]: "8x",
	[SolicitacaoComprasPrazo.Value11]: "9x",
	[SolicitacaoComprasPrazo.Value12]: "10x",
	[SolicitacaoComprasPrazo.Value13]: "11x",
	[SolicitacaoComprasPrazo.Value14]: "12x",
};

export const SOLICITACAOCOMPRAS_STATUS_LABELS: Record<
	SolicitacaoComprasStatus,
	string
> = {
	[SolicitacaoComprasStatus.CaixaDeEntrada]: "Caixa de Entrada",
	[SolicitacaoComprasStatus.AprovacaoDaGestao]: "Aprovação da Gestão",
	[SolicitacaoComprasStatus.PedidoDeCompra]: "Pedido de Compra",
	[SolicitacaoComprasStatus.ProcessamentoFinanceiro]:
		"Processamento Financeiro",
	[SolicitacaoComprasStatus.FilaDeEntrega]: "Fila de Entrega",
	[SolicitacaoComprasStatus.Concluido]: "Concluído",
	[SolicitacaoComprasStatus.Rejeitado]: "Rejeitado",
	[SolicitacaoComprasStatus.Standby]: "Standby",
};

export const SOLICITACAOCOMPRAS_TIPO_LABELS: Record<
	SolicitacaoComprasTipo,
	string
> = {
	[SolicitacaoComprasTipo.Value1]: "Pedido de Compra",
	[SolicitacaoComprasTipo.Value2]: "Cotação",
};

export enum SuspensaoContratoStatus {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
}

export interface SuspensaoContrato {
	id: number;
	f_fk_pessoas: number;
	f_fk_pessoas_pj: number;
	f_fk_responsavel: number;
	f_cpf: string;
	f_dias_suspensao: string;
	f_email: string;
	f_final_suspensao: string;
	f_id_contrato: string;
	f_inicio_suspensao: string;
	f_link_assinatura: string;
	f_status: SuspensaoContratoStatus;
	f_telefone: string;
	f_teste: number;
	f_titulo: string;
	updatedAt: string;
	createdAt: string;
}

export interface SuspensaoContratoRelations {
	createdBy?: Users | null;
	f_comentarios?: ComentariosSuspensaoDeContrato[];
	f_contratos?: Contratos[];
	f_pessoas?: Pessoas | null;
	f_pessoas_pj?: Empresas | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type SuspensaoContratoRelationKey = keyof SuspensaoContratoRelations;

export const SUSPENSAOCONTRATO_STATUS_LABELS: Record<
	SuspensaoContratoStatus,
	string
> = {
	[SuspensaoContratoStatus.Value0]: "Nova Solicitação",
	[SuspensaoContratoStatus.Value1]: "Aguardando Assinatura",
	[SuspensaoContratoStatus.Value2]: "Assinatura Concluída",
	[SuspensaoContratoStatus.Value3]: "Concluído",
	[SuspensaoContratoStatus.Value4]: "Cancelado",
};

export interface TabelaGeral {
	id: number;
	updatedAt: string;
	createdAt: string;
}

export interface TabelaGeralRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TabelaGeralRelationKey = keyof TabelaGeralRelations;

export interface TelecomAnexos {
	id: number;
	extname: string;
	f_6j2u7ptvn88: number;
	f_88kxg6s8bb8: number;
	f_wo3wzgdoyoa: number;
	f_ycsq6mkkvk7: number;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomAnexosRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type TelecomAnexosRelationKey = keyof TelecomAnexosRelations;

export enum TelecomColocationOpcoesEnergia {
	Value0nqbw68srah = "0nqbw68srah",
	E5b3lklfpq4 = "e5b3lklfpq4",
	Mra46p506xo = "mra46p506xo",
}

export interface TelecomColocationOpcoes {
	id: number;
	f_6c1tv6gt1ey: number;
	f_designacao_rack: string;
	f_energia: TelecomColocationOpcoesEnergia;
	f_espaco_rack: string;
	fk_opcoes_colocation: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomColocationOpcoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomColocationOpcoesRelationKey =
	keyof TelecomColocationOpcoesRelations;

export const TELECOMCOLOCATIONOPCOES_ENERGIA_LABELS: Record<
	TelecomColocationOpcoesEnergia,
	string
> = {
	[TelecomColocationOpcoesEnergia.Value0nqbw68srah]: "AC 220",
	[TelecomColocationOpcoesEnergia.E5b3lklfpq4]: "AC 110",
	[TelecomColocationOpcoesEnergia.Mra46p506xo]: "DC -48",
};

export interface TelecomContratos {
	id: number;
	f_fk_cliente: number;
	f_fk_fornecedor: number;
	f_descricao: string;
	f_o6r7bgwk9bb: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomContratosRelations {
	createdBy?: Users | null;
	f_cliente?: FornecedoresTelecom | null;
	f_fornecedor?: FornecedoresTelecom | null;
	f_servicos?: Servicos[];
	updatedBy?: Users | null;
}

export type TelecomContratosRelationKey = keyof TelecomContratosRelations;

export interface TelecomFila {
	id: number;
	f_fk_fila: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomFilaRelations {
	createdBy?: Users | null;
	f_fk_fila_rack?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type TelecomFilaRelationKey = keyof TelecomFilaRelations;

export enum TelecomInterfacesConfiguracao {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export enum TelecomInterfacesTipo {
	Value1 = "1",
	Value3 = "3",
	Value2 = "2",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
}

export interface TelecomInterfaces {
	id: number;
	f_configuracao: TelecomInterfacesConfiguracao;
	f_descricao: string;
	f_interface: string;
	f_p9gxrkh5utl: number;
	f_tipo: TelecomInterfacesTipo;
	parentId: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomInterfacesRelations {
	children?: TelecomInterfaces[];
	createdBy?: Users | null;
	f_fk_equipamento?: Equipamentos[];
	f_fk_interfaces_equipamentos?: Equipamentos[];
	f_fk_recurso_interface_ponta_a?: TelecomRecursos[];
	f_fk_recurso_interface_ponta_b?: TelecomRecursos[];
	f_s3gs1jjkqzm?: Acessos | null;
	parent?: TelecomInterfaces | null;
	updatedBy?: Users | null;
}

export type TelecomInterfacesRelationKey = keyof TelecomInterfacesRelations;

export const TELECOMINTERFACES_CONFIGURACAO_LABELS: Record<
	TelecomInterfacesConfiguracao,
	string
> = {
	[TelecomInterfacesConfiguracao.Value1]: "Acesso",
	[TelecomInterfacesConfiguracao.Value2]: "Tronco",
	[TelecomInterfacesConfiguracao.Value3]: "Hibrida",
};

export const TELECOMINTERFACES_TIPO_LABELS: Record<
	TelecomInterfacesTipo,
	string
> = {
	[TelecomInterfacesTipo.Value1]: "SFP",
	[TelecomInterfacesTipo.Value3]: "METALICA",
	[TelecomInterfacesTipo.Value2]: "SFP+",
	[TelecomInterfacesTipo.Value4]: "QSFP",
	[TelecomInterfacesTipo.Value5]: "VLAN",
	[TelecomInterfacesTipo.Value6]: "VPN",
	[TelecomInterfacesTipo.Value7]: "ETH-TRUNK (LAG)",
};

export enum TelecomIpsFixosPossuiIpFixo {
	Value0 = "0",
	Value1 = "1",
}

export interface TelecomIpsFixos {
	id: number;
	f_contrato_ixc: string;
	f_controle: string;
	f_ip: string;
	f_login: string;
	f_possui_ip_fixo: TelecomIpsFixosPossuiIpFixo;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomIpsFixosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomIpsFixosRelationKey = keyof TelecomIpsFixosRelations;

export const TELECOMIPSFIXOS_POSSUIIPFIXO_LABELS: Record<
	TelecomIpsFixosPossuiIpFixo,
	string
> = {
	[TelecomIpsFixosPossuiIpFixo.Value0]: "Não",
	[TelecomIpsFixosPossuiIpFixo.Value1]: "Sim",
};

export interface TelecomOpcoesL2l {
	id: number;
	f_rmfqnk0k53u: number;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomOpcoesL2lRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomOpcoesL2lRelationKey = keyof TelecomOpcoesL2lRelations;

export interface TelecomRacks {
	id: number;
	f_fk_rack_fila: number;
	f_fk_rack_sala: number;
	f_fk_site_racks: number;
	f_rack: string;
	f_sigla: string;
	parentId: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomRacksRelations {
	children?: TelecomRacks[];
	createdBy?: Users | null;
	f_fila?: TelecomFila | null;
	f_fk_rack_a_recursos?: TelecomRecursos[];
	f_fk_rack_ativos?: Equipamentos[];
	f_fk_rack_sites?: Sites | null;
	f_fk_recursos_rack_b?: TelecomRecursos[];
	f_sala?: TelecomSalas | null;
	parent?: TelecomRacks | null;
	updatedBy?: Users | null;
}

export type TelecomRacksRelationKey = keyof TelecomRacksRelations;

export enum TelecomRecursosFinalidade {
	Value3 = "3",
	Value2 = "2",
	Value4 = "4",
	Value1 = "1",
}

export enum TelecomRecursosStatus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export enum TelecomRecursosTipo {
	Value1 = "1",
	Value13 = "13",
	Value6 = "6",
	Value4 = "4",
	Value2 = "2",
	Value7 = "7",
	Value5 = "5",
	Value8 = "8",
	Value3 = "3",
	Value9 = "9",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value14 = "14",
}

export interface TelecomRecursos {
	id: number;
	f_fk_anexos_recursos: number;
	f_fk_cliente_recurso: number;
	f_fk_fornecedor_recurso: number;
	f_fk_rack_a: number;
	f_fk_rack_b: number;
	f_fk_site_a: number;
	f_fk_site_b: number;
	f_2ew016ynyo6: number;
	f_contrato_ixc: number;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_detalhes: string;
	f_finalidade: TelecomRecursosFinalidade;
	f_id_produto: string;
	f_nome: string;
	f_status: TelecomRecursosStatus;
	f_tipo: TelecomRecursosTipo;
	parentId: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomRecursosRelations {
	children?: TelecomRecursos[];
	createdBy?: Users | null;
	f_anexos?: TelecomAnexos[];
	f_cliente?: FornecedoresTelecom | null;
	f_equipamento_a?: Equipamentos | null;
	f_fornecedor?: FornecedoresTelecom | null;
	f_interface_ponta_a?: TelecomInterfaces[];
	f_interface_ponta_b?: TelecomInterfaces[];
	f_opcoes_colocation?: TelecomColocationOpcoes | null;
	f_opcoes_l2l?: TelecomOpcoesL2l | null;
	f_opcoes_link_ip?: TelecomTransitoOpcoes | null;
	f_rack_a?: TelecomRacks | null;
	f_rack_b?: TelecomRacks | null;
	f_site_a?: Sites | null;
	f_site_b?: Sites | null;
	parent?: TelecomRecursos | null;
	updatedBy?: Users | null;
}

export type TelecomRecursosRelationKey = keyof TelecomRecursosRelations;

export const TELECOMRECURSOS_FINALIDADE_LABELS: Record<
	TelecomRecursosFinalidade,
	string
> = {
	[TelecomRecursosFinalidade.Value3]: "Insumo para Serviço",
	[TelecomRecursosFinalidade.Value2]: "Serviço",
	[TelecomRecursosFinalidade.Value4]: "Facilidade",
	[TelecomRecursosFinalidade.Value1]: "Acesso",
};

export const TELECOMRECURSOS_STATUS_LABELS: Record<
	TelecomRecursosStatus,
	string
> = {
	[TelecomRecursosStatus.Value1]: "Planejado",
	[TelecomRecursosStatus.Value2]: "Ativo",
	[TelecomRecursosStatus.Value3]: "Desativado",
};

export const TELECOMRECURSOS_TIPO_LABELS: Record<TelecomRecursosTipo, string> =
	{
		[TelecomRecursosTipo.Value1]: "L2 - PTP",
		[TelecomRecursosTipo.Value13]: "L3 - PTP",
		[TelecomRecursosTipo.Value6]: "L2 - P2MP",
		[TelecomRecursosTipo.Value4]: "L2 - Last Mile",
		[TelecomRecursosTipo.Value2]: "L3 - Link IP",
		[TelecomRecursosTipo.Value7]: "L3 - Banda Larga",
		[TelecomRecursosTipo.Value5]: "L1 - Fibra Apagada",
		[TelecomRecursosTipo.Value8]: "L1 - Canal DWDM",
		[TelecomRecursosTipo.Value3]: "Colocation",
		[TelecomRecursosTipo.Value9]: "VPN",
		[TelecomRecursosTipo.Value10]: "Trunk Flex",
		[TelecomRecursosTipo.Value11]: "Transito IP Internet ",
		[TelecomRecursosTipo.Value12]: "Transito IP CDN",
		[TelecomRecursosTipo.Value14]: "Contrato",
	};

export interface TelecomSalas {
	id: number;
	f_fk_salas: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomSalasRelations {
	createdBy?: Users | null;
	f_fk_sala_racks?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type TelecomSalasRelationKey = keyof TelecomSalasRelations;

export interface TelecomTransitoOpcoes {
	id: number;
	f_1eu8gjcf9js: number;
	f_ips: string;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomTransitoOpcoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomTransitoOpcoesRelationKey =
	keyof TelecomTransitoOpcoesRelations;

export enum TemplatesAtendimentoN1AcessaPelaRedeDaAtplus {
	Sim = "Sim",
	Nao = "Não",
}

export enum TemplatesAtendimentoN1Alteracoes {
	SomenteONome = "Somente o nome",
	SomenteASenha = "Somente a senha",
	NomeESenha = "Nome e senha",
}

export enum TemplatesAtendimentoN1Aplicativo {
	Deezer = "Deezer",
	WatchBr = "Watch BR",
	Paramount = "Paramount+",
	HboMax = "HBO Max",
	ViaLivros = "Via Livros",
	OleTv = "Olé TV",
	TodosOsAplicativos = "Todos os aplicativos",
}

export enum TemplatesAtendimentoN1AplicativoEspecifico {
	Sim = "Sim",
	Nao = "Não",
}

export enum TemplatesAtendimentoN1ApnPreenchida {
	Sim = "Sim",
	Nao = "Não",
	NaoSoubeDizer = "Não soube dizer",
}

export enum TemplatesAtendimentoN1Fabricante {
	Samsung = "Samsung",
	Apple = "Apple",
	Motorola = "Motorola",
	Xiomi = "Xiomi",
	Asus = "Asus",
	Outro = "Outro",
}

export enum TemplatesAtendimentoN1Los {
	Sim = "Sim",
	Nao = "Não",
}

export enum TemplatesAtendimentoN1QualApnConfigurada {
	EaiBr = "eai.br",
	M2mArqiaBr = "m2m.arqia.br",
	InternetBr = "internet.br",
}

export enum TemplatesAtendimentoN1QuantidadeDeDispositivos {
	UmDispositivo = "Um dispositivo",
	TodosOsDispositivos = "Todos os dispositivos",
}

export enum TemplatesAtendimentoN1StatusDoCircuito {
	Online = "Online",
	Offline = "Offline",
}

export enum TemplatesAtendimentoN1TelefoniaTipoDeProblema {
	NaoRecebeLigacoes = "Não recebe ligações",
	NaoEfetuaLigacoes = "Não efetua ligações",
	QuedasNasLigacoes = "Quedas nas ligações",
	ChiadoVozRobotica = "Chiado / Voz robótica",
	MudoSemTom = "Mudo / Sem tom",
}

export enum TemplatesAtendimentoN1TipoDeAtendimento {
	Lentidao = "Lentidão",
	SemConexao = "Sem conexão",
	SiteEspecifico = "Site específico",
	Telefonia = "Telefonia",
	AberturaDePortas = "Abertura de portas",
	TrocaDeNomeSenha = "Troca de nome/senha",
	Sva = "SVA",
	Mvno = "MVNO",
	Outro = "Outro",
}

export enum TemplatesAtendimentoN1TipoDeConexaoDoDispositivo {
	WiFi = "Wi-Fi",
	CaboDeRede = "Cabo de rede",
}

export enum TemplatesAtendimentoN1TipoDeProblemaMvno {
	NaoRecebeLigacoes = "Não recebe ligações",
	NaoEfetuaLigacoes = "Não efetua ligações",
	DadosMoveisNaoFuncionam = "Dados móveis não funcionam",
}

export enum TemplatesAtendimentoN1TorreRede {
	ComSinal = "Com sinal",
	SemSinal = "Sem sinal",
}

export interface TemplatesAtendimentoN1 {
	id: number;
	f_fk_templates_atendimentos: number;
	f_acessa_pela_rede_da_atplus: TemplatesAtendimentoN1AcessaPelaRedeDaAtplus;
	f_alteracoes: TemplatesAtendimentoN1Alteracoes;
	f_aplicativo: TemplatesAtendimentoN1Aplicativo;
	f_aplicativo_especifico: TemplatesAtendimentoN1AplicativoEspecifico;
	f_apn_preenchida: TemplatesAtendimentoN1ApnPreenchida;
	f_descricao_do_cliente: string;
	"f_e-mail": string;
	f_endereco_do_site: string;
	f_fabricante: TemplatesAtendimentoN1Fabricante;
	f_ip_fixo: string;
	f_ip_interno_para_liberacao: string;
	f_login_pppoe: string;
	f_los: TemplatesAtendimentoN1Los;
	f_melhor_horario_retorno: string;
	f_nome: string;
	f_nome_do_solicitante: string;
	f_nome_rede_wifi: string;
	f_numero_de_A: string;
	f_numero_de_B: string;
	f_numero_para_contato: string;
	f_portas_a_serem_liberadas: string;
	f_protocolo_do_atendimento: string;
	f_qual_aplicativo: string;
	f_qual_apn_configurada: TemplatesAtendimentoN1QualApnConfigurada;
	f_qual_fabricante: string;
	f_quantidade_de_dispositivos: TemplatesAtendimentoN1QuantidadeDeDispositivos;
	f_senha_da_rede_wifi: string;
	f_status_do_circuito: TemplatesAtendimentoN1StatusDoCircuito;
	f_telefonia_tipo_de_problema: TemplatesAtendimentoN1TelefoniaTipoDeProblema;
	f_tipo_de_atendimento: TemplatesAtendimentoN1TipoDeAtendimento;
	f_tipo_de_conexao_do_dispositivo: TemplatesAtendimentoN1TipoDeConexaoDoDispositivo;
	f_tipo_de_problema_mvno: TemplatesAtendimentoN1TipoDeProblemaMvno;
	f_torre_rede: TemplatesAtendimentoN1TorreRede;
	updatedAt: string;
	createdAt: string;
}

export interface TemplatesAtendimentoN1Relations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TemplatesAtendimentoN1RelationKey =
	keyof TemplatesAtendimentoN1Relations;

export const TEMPLATESATENDIMENTON1_ACESSAPELAREDEDAATPLUS_LABELS: Record<
	TemplatesAtendimentoN1AcessaPelaRedeDaAtplus,
	string
> = {
	[TemplatesAtendimentoN1AcessaPelaRedeDaAtplus.Sim]: "Sim",
	[TemplatesAtendimentoN1AcessaPelaRedeDaAtplus.Nao]: "Nao",
};

export const TEMPLATESATENDIMENTON1_ALTERACOES_LABELS: Record<
	TemplatesAtendimentoN1Alteracoes,
	string
> = {
	[TemplatesAtendimentoN1Alteracoes.SomenteONome]: "Somente o nome",
	[TemplatesAtendimentoN1Alteracoes.SomenteASenha]: "Somente a senha",
	[TemplatesAtendimentoN1Alteracoes.NomeESenha]: "Nome e senha",
};

export const TEMPLATESATENDIMENTON1_APLICATIVO_LABELS: Record<
	TemplatesAtendimentoN1Aplicativo,
	string
> = {
	[TemplatesAtendimentoN1Aplicativo.Deezer]: "Deezer",
	[TemplatesAtendimentoN1Aplicativo.WatchBr]: "Watch BR",
	[TemplatesAtendimentoN1Aplicativo.Paramount]: "Paramount+",
	[TemplatesAtendimentoN1Aplicativo.HboMax]: "HBO Max",
	[TemplatesAtendimentoN1Aplicativo.ViaLivros]: "Via Livros",
	[TemplatesAtendimentoN1Aplicativo.OleTv]: "Olé TV",
	[TemplatesAtendimentoN1Aplicativo.TodosOsAplicativos]: "Todos os aplicativos",
};

export const TEMPLATESATENDIMENTON1_APLICATIVOESPECIFICO_LABELS: Record<
	TemplatesAtendimentoN1AplicativoEspecifico,
	string
> = {
	[TemplatesAtendimentoN1AplicativoEspecifico.Sim]: "Sim",
	[TemplatesAtendimentoN1AplicativoEspecifico.Nao]: "Não",
};

export const TEMPLATESATENDIMENTON1_APNPREENCHIDA_LABELS: Record<
	TemplatesAtendimentoN1ApnPreenchida,
	string
> = {
	[TemplatesAtendimentoN1ApnPreenchida.Sim]: "Sim",
	[TemplatesAtendimentoN1ApnPreenchida.Nao]: "Não",
	[TemplatesAtendimentoN1ApnPreenchida.NaoSoubeDizer]: "Não soube dizer",
};

export const TEMPLATESATENDIMENTON1_FABRICANTE_LABELS: Record<
	TemplatesAtendimentoN1Fabricante,
	string
> = {
	[TemplatesAtendimentoN1Fabricante.Samsung]: "Samsung",
	[TemplatesAtendimentoN1Fabricante.Apple]: "Apple",
	[TemplatesAtendimentoN1Fabricante.Motorola]: "Motorola",
	[TemplatesAtendimentoN1Fabricante.Xiomi]: "Xiomi",
	[TemplatesAtendimentoN1Fabricante.Asus]: "Asus",
	[TemplatesAtendimentoN1Fabricante.Outro]: "Outro",
};

export const TEMPLATESATENDIMENTON1_LOS_LABELS: Record<
	TemplatesAtendimentoN1Los,
	string
> = {
	[TemplatesAtendimentoN1Los.Sim]: "Sim",
	[TemplatesAtendimentoN1Los.Nao]: "Não",
};

export const TEMPLATESATENDIMENTON1_QUALAPNCONFIGURADA_LABELS: Record<
	TemplatesAtendimentoN1QualApnConfigurada,
	string
> = {
	[TemplatesAtendimentoN1QualApnConfigurada.EaiBr]: "eai.br",
	[TemplatesAtendimentoN1QualApnConfigurada.M2mArqiaBr]: "m2m.arqia.br",
	[TemplatesAtendimentoN1QualApnConfigurada.InternetBr]: "internet.br",
};

export const TEMPLATESATENDIMENTON1_QUANTIDADEDEDISPOSITIVOS_LABELS: Record<
	TemplatesAtendimentoN1QuantidadeDeDispositivos,
	string
> = {
	[TemplatesAtendimentoN1QuantidadeDeDispositivos.UmDispositivo]:
		"Um dispositivo",
	[TemplatesAtendimentoN1QuantidadeDeDispositivos.TodosOsDispositivos]:
		"Todos os dispositivos",
};

export const TEMPLATESATENDIMENTON1_STATUSDOCIRCUITO_LABELS: Record<
	TemplatesAtendimentoN1StatusDoCircuito,
	string
> = {
	[TemplatesAtendimentoN1StatusDoCircuito.Online]: "Online",
	[TemplatesAtendimentoN1StatusDoCircuito.Offline]: "Offline",
};

export const TEMPLATESATENDIMENTON1_TELEFONIATIPODEPROBLEMA_LABELS: Record<
	TemplatesAtendimentoN1TelefoniaTipoDeProblema,
	string
> = {
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.NaoRecebeLigacoes]:
		"Não recebe ligações",
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.NaoEfetuaLigacoes]:
		"Não efetua ligações",
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.QuedasNasLigacoes]:
		"Quedas nas ligações",
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.ChiadoVozRobotica]:
		"Chiado / Voz robótica",
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.MudoSemTom]: "Mudo / Sem tom",
};

export const TEMPLATESATENDIMENTON1_TIPODEATENDIMENTO_LABELS: Record<
	TemplatesAtendimentoN1TipoDeAtendimento,
	string
> = {
	[TemplatesAtendimentoN1TipoDeAtendimento.Lentidao]: "Lentidão/Quedas",
	[TemplatesAtendimentoN1TipoDeAtendimento.SemConexao]: "Sem conexão",
	[TemplatesAtendimentoN1TipoDeAtendimento.SiteEspecifico]: "Site específico",
	[TemplatesAtendimentoN1TipoDeAtendimento.Telefonia]: "Telefonia",
	[TemplatesAtendimentoN1TipoDeAtendimento.AberturaDePortas]:
		"Abertura de portas",
	[TemplatesAtendimentoN1TipoDeAtendimento.TrocaDeNomeSenha]:
		"Troca de nome/senha",
	[TemplatesAtendimentoN1TipoDeAtendimento.Sva]: "SVA",
	[TemplatesAtendimentoN1TipoDeAtendimento.Mvno]: "MVNO",
	[TemplatesAtendimentoN1TipoDeAtendimento.Outro]: "Outro",
};

export const TEMPLATESATENDIMENTON1_TIPODECONEXAODODISPOSITIVO_LABELS: Record<
	TemplatesAtendimentoN1TipoDeConexaoDoDispositivo,
	string
> = {
	[TemplatesAtendimentoN1TipoDeConexaoDoDispositivo.WiFi]: "Wi-Fi",
	[TemplatesAtendimentoN1TipoDeConexaoDoDispositivo.CaboDeRede]: "Cabo de rede",
};

export const TEMPLATESATENDIMENTON1_TIPODEPROBLEMAMVNO_LABELS: Record<
	TemplatesAtendimentoN1TipoDeProblemaMvno,
	string
> = {
	[TemplatesAtendimentoN1TipoDeProblemaMvno.NaoRecebeLigacoes]:
		"Não recebe ligações",
	[TemplatesAtendimentoN1TipoDeProblemaMvno.NaoEfetuaLigacoes]:
		"Não efetua ligações",
	[TemplatesAtendimentoN1TipoDeProblemaMvno.DadosMoveisNaoFuncionam]:
		"Dados móveis não funcionam",
};

export const TEMPLATESATENDIMENTON1_TORREREDE_LABELS: Record<
	TemplatesAtendimentoN1TorreRede,
	string
> = {
	[TemplatesAtendimentoN1TorreRede.ComSinal]: "Com sinal",
	[TemplatesAtendimentoN1TorreRede.SemSinal]: "Sem sinal",
};

export enum TrocaEnderecoStatus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value0 = "0",
}

export enum TrocaEnderecoTaxaInstalacao {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
}

export interface TrocaEndereco {
	id: number;
	f_bairro: string;
	f_cep: string;
	f_cliente: string;
	f_endereco: string;
	f_endereco_cidade: string;
	f_endereco_complemento: string;
	f_endereco_estado: string;
	f_endereco_numero: string;
	f_endereco_referencia: string;
	f_id_atendimento: string;
	f_id_contrato: string;
	f_obs: string;
	f_status: TrocaEnderecoStatus;
	f_taxa_instalacao: TrocaEnderecoTaxaInstalacao;
	f_telefone_contato: string;
	updatedAt: string;
	createdAt: string;
}

export interface TrocaEnderecoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TrocaEnderecoRelationKey = keyof TrocaEnderecoRelations;

export const TROCAENDERECO_STATUS_LABELS: Record<TrocaEnderecoStatus, string> =
	{
		[TrocaEnderecoStatus.Value1]: "Atendimento Gerado",
		[TrocaEnderecoStatus.Value2]: "Atendimento Concluído",
		[TrocaEnderecoStatus.Value3]: "Atendimento para Campo",
		[TrocaEnderecoStatus.Value4]: "Atendimento para CR",
		[TrocaEnderecoStatus.Value0]: "Erro na Integração",
	};

export const TROCAENDERECO_TAXAINSTALACAO_LABELS: Record<
	TrocaEnderecoTaxaInstalacao,
	string
> = {
	[TrocaEnderecoTaxaInstalacao.Value0]: "Não",
	[TrocaEnderecoTaxaInstalacao.Value1]: "R$ 80,00 à vista",
	[TrocaEnderecoTaxaInstalacao.Value2]: "R$ 80,00 em 2 vezes",
};

export interface TrocasdetitularidadeComentarios {
	id: number;
	f_comentario: string;
	f_comentario_troca_de_titularidade: number;
	updatedAt: string;
	createdAt: string;
}

export interface TrocasdetitularidadeComentariosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TrocasdetitularidadeComentariosRelationKey =
	keyof TrocasdetitularidadeComentariosRelations;

export interface Turnos {
	id: number;
	f_turno: string;
	updatedAt: string;
	createdAt: string;
}

export interface TurnosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	updatedBy?: Users | null;
}

export type TurnosRelationKey = keyof TurnosRelations;

export enum ViagemSolicitacaoDestinoViagem {
	BocainaDoSul = "Bocaina do Sul",
	CampoBeloDoSul = "Campo Belo do Sul",
	CapaoAlto = "Capão Alto",
	CerroNegro = "Cerro Negro",
	CorreiaPinto = "Correia Pinto",
	Curitibanos = "Curitibanos",
	Florianopolis = "Florianópolis",
	Painel = "Painel",
	Outros = "Outros",
}

export enum ViagemSolicitacaoDiaria {
	Value5 = "5",
	Value10 = "10",
}

export enum ViagemSolicitacaoFase {
	CaixaDeEntrada = "Caixa de Entrada",
	ProcessamentoFinanceiro = "Processamento Financeiro",
	Concluido = "Concluído",
	Arquivado = "Arquivado",
}

export enum ViagemSolicitacaoMeioTransporte {
	KwidAtplus = "Kwid ATPlus",
	FiorinoAtplus = "Fiorino ATPlus",
	FiorinoFhortec = "Fiorino Fhortec",
	UnoAtplus = "Uno ATPlus",
	CarroParticular = "Carro Particular",
	Outro = "Outro",
}

export interface ViagemSolicitacao {
	id: number;
	f_fk_solicitacao_viagem: number;
	f_colaborador_beneficiado: string;
	f_data_retorno: string;
	f_data_viagem: string;
	f_destino_viagem: ViagemSolicitacaoDestinoViagem;
	f_diaria: ViagemSolicitacaoDiaria;
	f_fase: ViagemSolicitacaoFase;
	f_kaban_viagem: number;
	f_meio_transporte: ViagemSolicitacaoMeioTransporte;
	f_observacoes: string;
	f_percorrido: number;
	f_quantidade_dias: string;
	f_sub_total: string;
	f_total_pagar: number;
	f_valor_cobrado: number;
	f_valor_diaria: number;
	f_valor_pedagio: number;
	updatedAt: string;
	createdAt: string;
}

export interface ViagemSolicitacaoRelations {
	createdBy?: Users | null;
	f_anexos?: unknown[];
	updatedBy?: Users | null;
}

export type ViagemSolicitacaoRelationKey = keyof ViagemSolicitacaoRelations;

export const VIAGEMSOLICITACAO_DESTINOVIAGEM_LABELS: Record<
	ViagemSolicitacaoDestinoViagem,
	string
> = {
	[ViagemSolicitacaoDestinoViagem.BocainaDoSul]: "Bocaina do Sul",
	[ViagemSolicitacaoDestinoViagem.CampoBeloDoSul]: "Campo Belo do Sul",
	[ViagemSolicitacaoDestinoViagem.CapaoAlto]: "Capão Alto",
	[ViagemSolicitacaoDestinoViagem.CerroNegro]: "Cerro Negro",
	[ViagemSolicitacaoDestinoViagem.CorreiaPinto]: "Correia Pinto",
	[ViagemSolicitacaoDestinoViagem.Curitibanos]: "Curitibanos",
	[ViagemSolicitacaoDestinoViagem.Florianopolis]: "Florianópolis",
	[ViagemSolicitacaoDestinoViagem.Painel]: "Painel",
	[ViagemSolicitacaoDestinoViagem.Outros]: "Outros",
};

export const VIAGEMSOLICITACAO_DIARIA_LABELS: Record<
	ViagemSolicitacaoDiaria,
	string
> = {
	[ViagemSolicitacaoDiaria.Value5]: "8h",
	[ViagemSolicitacaoDiaria.Value10]: "Acima de 8h",
};

export const VIAGEMSOLICITACAO_FASE_LABELS: Record<
	ViagemSolicitacaoFase,
	string
> = {
	[ViagemSolicitacaoFase.CaixaDeEntrada]: "Caixa de Entrada",
	[ViagemSolicitacaoFase.ProcessamentoFinanceiro]: "Processamento Financeiro",
	[ViagemSolicitacaoFase.Concluido]: "Concluído",
	[ViagemSolicitacaoFase.Arquivado]: "Arquivado",
};

export const VIAGEMSOLICITACAO_MEIOTRANSPORTE_LABELS: Record<
	ViagemSolicitacaoMeioTransporte,
	string
> = {
	[ViagemSolicitacaoMeioTransporte.KwidAtplus]: "Kwid ATPlus",
	[ViagemSolicitacaoMeioTransporte.FiorinoAtplus]: "Fiorino ATPlus",
	[ViagemSolicitacaoMeioTransporte.FiorinoFhortec]: "Fiorino Fhortec",
	[ViagemSolicitacaoMeioTransporte.UnoAtplus]: "Uno ATPlus",
	[ViagemSolicitacaoMeioTransporte.CarroParticular]: "Carro Particular",
	[ViagemSolicitacaoMeioTransporte.Outro]: "Outro",
};

export interface VlanTags {
	id: number;
	f_tag: string;
	updatedAt: string;
	createdAt: string;
}

export interface VlanTagsRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type VlanTagsRelationKey = keyof VlanTagsRelations;

export interface Ynltolqbwj1 {
	fk_interface_ponta_b: number;
	fk_interface_ponta_b2: number;
}

export type Ynltolqbwj1Relations = Record<string, never>;

export type Ynltolqbwj1RelationKey = keyof Ynltolqbwj1Relations;

export interface Zapsign {
	id: number;
	f_data_de_encerramento: string;
	f_nome_do_plano: string;
	f_numero_de_creditos: string;
	f_periodo: string;
	f_status: string;
	updatedAt: string;
	createdAt: string;
}

export interface ZapsignRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ZapsignRelationKey = keyof ZapsignRelations;

export interface TemplatesXOrdensDeServico {
	f_fk_template_os_1: number;
	f_fk_template_os_2: number;
}

export type TemplatesXOrdensDeServicoRelations = Record<string, never>;

export type TemplatesXOrdensDeServicoRelationKey =
	keyof TemplatesXOrdensDeServicoRelations;

export interface TipoXTemplates {
	f_fk_tipo_template_1: number;
	f_fk_tipo_template_2: number;
}

export type TipoXTemplatesRelations = Record<string, never>;

export type TipoXTemplatesRelationKey = keyof TipoXTemplatesRelations;

export interface VendedorCupons {
	f_fk_vendedor_cupom_1: number;
	f_fk_vendedor_cupom_2: number;
}

export type VendedorCuponsRelations = Record<string, never>;

export type VendedorCuponsRelationKey = keyof VendedorCuponsRelations;

export interface VwMermaidPorServico {
	mermaid_text: string;
	servico_id: number;
}

export type VwMermaidPorServicoRelations = Record<string, never>;

export type VwMermaidPorServicoRelationKey = keyof VwMermaidPorServicoRelations;
