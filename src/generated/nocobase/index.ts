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

export const FFUNCIONARIOS_ATIVO_LABELS = {
	Sim: "Sim",
	Nao: "Não",
} as const;

export const FFUNCIONARIOS_CHECKLISTADMISSIONAL_LABELS = {
	AsoAdmissional: "ASO Admissional",
	rg: "RG",
	ECnh: "e-CNH",
	ComprovanteResidencia: "Comprovante de Residência",
	CertidaoCasamentoUniaoEstavel: "Certidão de Casamento / União Estável",
	ETituloEleitoral: "e-Título Eleitoral",
	CertificadoDeReservista: "Certificado de Reservista",
	RgCertidaoNascimentoFilhos:
		"RG ou Certidão de Nascimento dos filhos menores de 21 anos",
	Nr10Nr35: "Certificado NR 10 e NR 35 (Opcional)",
	TermosResponsabilidade: "Termos de Responsabilidade",
} as const;

export const FFUNCIONARIOS_EMPRESA_LABELS = {
	ATPlus: "ATPlus",
	Platon: "Platon",
} as const;

export const FFUNCIONARIOS_EPICALCADO_LABELS = {
	"35": "35",
	"36": "36",
	"37": "37",
	"38": "38",
	"39": "39",
	"40": "40",
	"41": "41",
	"42": "42",
	"43": "43",
	"44": "44",
} as const;

export const FFUNCIONARIOS_ESCOLARIDADE_LABELS = {
	EnsinoMedio: "Ensino Médio",
	Superior: "Superior",
	PosMba: "Pós, MBA",
	Mestrado: "Mestrado",
	Doutorado: "Doutorado",
} as const;

export const FFUNCIONARIOS_ESTADOCIVIL_LABELS = {
	Solteiro: "Solteiro",
	Casado: "Casado",
	UniaoEstavel: "União Estável",
	Viuvo: "Viúvo",
	Divorciado: "Divorciado",
	Separado: "Separado",
} as const;

export const FFUNCIONARIOS_GENERO_LABELS = {
	Masculino: "Masculino",
	Feminino: "Feminino",
} as const;

export const FFUNCIONARIOS_MOBILIDADE_LABELS = {
	ValeTransporteTransul: "Vale Transporte (Transul)",
	MobilidadeCartaoBeneficios: "Mobilidade (Cartão Benefícios)",
} as const;

export const FFUNCIONARIOS_PCD_LABELS = {
	Sim: "Sim",
	Nao: "Não",
} as const;

export const FFUNCIONARIOS_RESERVISTA_LABELS = {
	Sim: "Sim",
	Nao: "Não",
} as const;

export const FFUNCIONARIOS_SITUACAOESCOLARIDADE_LABELS = {
	Completo: "Completo",
	Cursando: "Cursando",
	Trancado: "Trancado",
} as const;

export const FFUNCIONARIOS_TERCEIRO_LABELS = {
	Sim: "Sim",
	Nao: "Não",
} as const;

export const FFUNCIONARIOS_TIPOCONTRATO_LABELS = {
	CLT: "CLT",
	PrestadorDeServicos: "Prestador de Serviços",
	Estagiario: "Estagiário",
	JovemAprendiz: "Jovem Aprendiz",
	Socio: "Sócio",
	Temporario: "Temporário",
	CltComissao: "CLT + Comissão",
} as const;

export const FFUNCIONARIOS_UNIDADE_LABELS = {
	Matriz: "Matriz",
	LojaCentroLages: "Loja Centro Lages",
	LojaCuritibanos: "Loja Curitibanos",
	Platon: "Platon",
} as const;

export const FFUNCIONARIOS_UNIVERSIDADE_LABELS = {
	IFSC: "IFSC",
	UNIPLAC: "UNIPLAC",
	CIEE: "CIEE",
	UNIFACVEST: "UNIFACVEST",
	Outros: "Outros",
} as const;

export const FFUNCIONARIOS_VINCULOCOMCOLABORADOR_LABELS = {
	Pais: "Pais",
	FilhoAOuEnteadoA: "Filho(a) ou Enteado(a)",
	Avos: "Avós",
	Conjuge: "Conjuge",
} as const;

export type FFuncionariosAtivo = keyof typeof FFUNCIONARIOS_ATIVO_LABELS;

export type FFuncionariosChecklistAdmissional =
	keyof typeof FFUNCIONARIOS_CHECKLISTADMISSIONAL_LABELS;

export type FFuncionariosEmpresa = keyof typeof FFUNCIONARIOS_EMPRESA_LABELS;

export type FFuncionariosEpiCalcado =
	keyof typeof FFUNCIONARIOS_EPICALCADO_LABELS;

export type FFuncionariosEscolaridade =
	keyof typeof FFUNCIONARIOS_ESCOLARIDADE_LABELS;

export type FFuncionariosEstadoCivil =
	keyof typeof FFUNCIONARIOS_ESTADOCIVIL_LABELS;

export type FFuncionariosGenero = keyof typeof FFUNCIONARIOS_GENERO_LABELS;

export type FFuncionariosMobilidade =
	keyof typeof FFUNCIONARIOS_MOBILIDADE_LABELS;

export type FFuncionariosPcd = keyof typeof FFUNCIONARIOS_PCD_LABELS;

export type FFuncionariosReservista =
	keyof typeof FFUNCIONARIOS_RESERVISTA_LABELS;

export type FFuncionariosSituacaoEscolaridade =
	keyof typeof FFUNCIONARIOS_SITUACAOESCOLARIDADE_LABELS;

export type FFuncionariosTerceiro = keyof typeof FFUNCIONARIOS_TERCEIRO_LABELS;

export type FFuncionariosTipoContrato =
	keyof typeof FFUNCIONARIOS_TIPOCONTRATO_LABELS;

export type FFuncionariosUnidade = keyof typeof FFUNCIONARIOS_UNIDADE_LABELS;

export type FFuncionariosUniversidade =
	keyof typeof FFUNCIONARIOS_UNIVERSIDADE_LABELS;

export type FFuncionariosVinculoComColaborador =
	keyof typeof FFUNCIONARIOS_VINCULOCOMCOLABORADOR_LABELS;

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

export const ACESSOS_TIPO_LABELS = {
	"1": "Ponta A",
	"2": "Ponta B",
	"3": "Entrega",
} as const;

export type AcessosTipo = keyof typeof ACESSOS_TIPO_LABELS;

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

export const AEGIS_STATUSDESBLOQUEIOCONFIACA_LABELS = {
	success: "Desbloqueio de Confiança Efetuado por 2 Dias",
	error: "Erro ao Realizar Desbloqueio de Confiança",
} as const;

export const AEGIS_STATUSLOGIN_LABELS = {
	success: "Sucesso ao Desconectar Login",
	error: "Erro ao Desconectar Login",
} as const;

export const AEGIS_STATUSMAC_LABELS = {
	success: "Sucesso ao Limpar MAC",
	error: "Erro ao Limpar MAC",
} as const;

export type AegisStatusdesbloqueioconfiaca =
	keyof typeof AEGIS_STATUSDESBLOQUEIOCONFIACA_LABELS;

export type AegisStatuslogin = keyof typeof AEGIS_STATUSLOGIN_LABELS;

export type AegisStatusmac = keyof typeof AEGIS_STATUSMAC_LABELS;

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

export const ANIVERSARIOS_STATUS_LABELS = {
	novo: "Novo",
	EmProcesso: "Em processo",
	concluido: "Concluído",
	erro: "Erro",
} as const;

export type AniversariosStatus = keyof typeof ANIVERSARIOS_STATUS_LABELS;

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

export const ATENDIMENTOSIXC_ASSUNTO_LABELS = {
	"88": "Reparo",
	"89": "Serviço",
	"90": "Manutenção Preventiva",
	"78": "Atendimento Financeiro",
} as const;

export const ATENDIMENTOSIXC_DIAGNOSTICOS_LABELS = {
	"95": "1000 - Defeito Rede interna do cliente",
	"96": "1001 - Defeito no equipamento do cliente",
	"97": "1002 - Defeito em outra operadora",
	"99": "1004 - Falha Massiva",
	"100": "1005 - Encaminhado para agendamento",
	"101": "1006 - Encontrado OK",
	"105": "1010 - Configuração ONT/Roteador",
	"106": "1011 - SVA - Plataformas",
	"107": "1012 - Outros",
	"110": "1013 - Encaminhado para N2",
	"111": "1014 - Reboot na ONT/Roteador",
	"246": "1015 - Sem contato com o cliente",
	"248": "1016 - Abertura indevida",
	"147": "1017 - Encaminhado para CS",
	"264": "1100 - Executado",
	"265": "1101 - Pendência",
	"266": "1102 - Cancelamento",
	"255": "1200 - Defeito Rede interna do cliente",
	"267": "1201 - Defeito no equipamento do cliente",
	"268": "1202 - Defeito em outra operadora",
	"269": "1204 - Falha Massiva",
	"270": "1205 - Encaminhado para agendamento",
	"271": "1206 - Encontrado OK",
	"272": "1210 - Configuração ONT/Roteador",
	"273": "1211 - SVA - Plataformas",
	"274": "1212 - Outros",
} as const;

export const ATENDIMENTOSIXC_PRIORIDADE_LABELS = {
	B: "Baixa",
	N: "Normal",
	A: "Alta",
	C: "Crítica",
} as const;

export const ATENDIMENTOSIXC_PROCESSO_LABELS = {
	"33": "Reparo",
	"36": "Serviço",
	"34": "Manutenção Preventiva",
	"40": "Atendimento Financeiro",
} as const;

export const ATENDIMENTOSIXC_TAREFAS_LABELS = {
	"158": "REPARO - Encaminhar O.S para Agendamento",
	"159": "REPARO - Encaminhar O.S para o Customer Success",
	"160": "REPARO - Escalona O.S para SN2 - Banda Larga",
	"164": "REPARO - Escalona O.S para SN2 - Telefonia",
	"382": "REPARO - Encaminhar O.S para Financeiro",
	"412": "REPARO - Escalona O.S para SN2 - MVNO",
	"305": "SERVIÇO - Encaminhar O.S para Agendamento",
	"306": "SERVIÇO - Encaminhar O.S para Customer Success",
	"307": "SERVIÇO - Escalona O.S para SN2 - Banda Larga",
	"311": "SERVIÇO - Escalona O.S para SN2 - Telefonia",
	"393": "SERVIÇO - Encaminhar O.S para Financeiro",
	"316": "SERVIÇO (2) - Encaminhar O.S para Agendamento",
	"317": "SERVIÇO (2) - Encaminhar O.S para Customer Success",
	"320": "SERVIÇO (2) - Escalona O.S para SN2 - Banda Larga",
	"321": "SERVIÇO (2) - Escalona O.S para SN2 - Telefonia",
	"395": "SERVIÇO (2) - Encaminhar O.S para Financeiro",
	"170": "REPARO (2) - Encaminhar O.S para Agendamento",
	"171": "REPARO (2) - Encaminhar O.S para o Customer Success",
	"174": "REPARO (2) - Escalona O.S para SN2 - Banda Larga",
	"175": "REPARO (2) - Escalona O.S para SN2 - Telefonia",
	"375": "REPARO (2) - Encaminhar O.S para Financeiro",
	"414": "REPARO (2) - Escalona O.S para SN2 - MVNO",
	"228": "MANUN. PREV. - Encaminhar O.S para Agendamento",
	"229": "MANUN. PREV. - Encaminhar O.S para Customer Success",
	"230": "MANUN. PREV. - Escalona O.S para SN2 - Banda Larga",
	"234": "MANUN. PREV. - Escalona O.S para SN2 - Telefonia",
	"384": "MANUN. PREV. - Encaminhar O.S para Financeiro",
	"240": "MANUN. PREV. (2) - Encaminhar O.S para Agendamento",
	"241": "MANUN. PREV. (2) - Encaminhar O.S para Customer Success",
	"244": "MANUN. PREV. (2) - Escalona O.S para SN2 - Banda Larga",
	"245": "MANUN. PREV. (2) - Escalona O.S para SN2 - Telefonia",
	"386": "MANUN. PREV. (2) - Encaminhar O.S para Financeiro",
} as const;

export type AtendimentosIxcAssunto =
	keyof typeof ATENDIMENTOSIXC_ASSUNTO_LABELS;

export type AtendimentosIxcDiagnosticos =
	keyof typeof ATENDIMENTOSIXC_DIAGNOSTICOS_LABELS;

export type AtendimentosIxcPrioridade =
	keyof typeof ATENDIMENTOSIXC_PRIORIDADE_LABELS;

export type AtendimentosIxcProcesso =
	keyof typeof ATENDIMENTOSIXC_PROCESSO_LABELS;

export type AtendimentosIxcTarefas =
	keyof typeof ATENDIMENTOSIXC_TAREFAS_LABELS;

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

export const CONFIGURACOES_ESCOPO_LABELS = {
	IXC: "IXCSoft",
	GERAL: "GERAL",
	SPC: "SPCBRASIL",
	ZAPSIGN: "ZAPSIGN",
} as const;

export type ConfiguracoesEscopo = keyof typeof CONFIGURACOES_ESCOPO_LABELS;

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

export const CONSULTASPF_STATUSCONSULTA_LABELS = {
	"1": "Aprovado",
	"2": "Aprovado com Alertas",
	"9": "Negado",
} as const;

export type ConsultasPfStatusConsulta =
	keyof typeof CONSULTASPF_STATUSCONSULTA_LABELS;

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

export const CONSULTASPJ_STATUSCONSULTA_LABELS = {
	"1": "Aprovado",
	"2": "Aprovado com Alertas",
	"9": "Negado",
} as const;

export type ConsultasPjStatusConsulta =
	keyof typeof CONSULTASPJ_STATUSCONSULTA_LABELS;

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

export const CUPONSDESCONTO_STATUS_LABELS = {
	"0": "Inativo",
	"1": "Ativo",
} as const;

export const CUPONSDESCONTO_TIPO_LABELS = {
	"1": "Baseado no Endereço",
	"2": "Geral",
	"3": "Upgrade para para contratos abaixo de R$ 100",
	"4": "Contratação de Segundo Plano",
} as const;

export const CUPONSDESCONTO_TIPONEGOCIACAO_LABELS = {
	"1": "Upgrade",
	"2": "Venda Nova",
	S: "Segunda Contratação",
} as const;

export type CuponsDescontoStatus = keyof typeof CUPONSDESCONTO_STATUS_LABELS;

export type CuponsDescontoTipo = keyof typeof CUPONSDESCONTO_TIPO_LABELS;

export type CuponsDescontoTipoNegociacao =
	keyof typeof CUPONSDESCONTO_TIPONEGOCIACAO_LABELS;

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

export const DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS = {
	carne: "Carnê",
	boleto: "Boleto",
	recorrencia: "Recorrência",
} as const;

export const DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS = {
	trabalho: "Trabalho",
	estudo: "Estudo",
	jogos: "Jogos",
	streaming: "Streaming",
	pesquisa: "Pesquisa (Google)",
} as const;

export type DadosAdicionaisClienteContratoFormaDePagamento =
	keyof typeof DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS;

export type DadosAdicionaisClienteContratoPerfilDeUso =
	keyof typeof DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS;

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

export const DATACENTERMEMORIAS_CAPACIDADE_LABELS = {
	"2": "2 GB",
	"4": "4 GB",
	"8": "8 GB",
	"16": "16 GB",
	"32": "32 GB",
	"64": "64 GB",
	"128": "128 GB",
} as const;

export const DATACENTERMEMORIAS_STATUS_LABELS = {
	"0": "Descartado",
	"1": "Disponivel",
	"2": "Alocado para Servidor",
	"3": "Manutenção",
} as const;

export const DATACENTERMEMORIAS_TIPO_LABELS = {
	"3": "DDR 3",
	"4": "DDR 4",
	"2": "DDR 2",
} as const;

export type DatacenterMemoriasCapacidade =
	keyof typeof DATACENTERMEMORIAS_CAPACIDADE_LABELS;

export type DatacenterMemoriasStatus =
	keyof typeof DATACENTERMEMORIAS_STATUS_LABELS;

export type DatacenterMemoriasTipo =
	keyof typeof DATACENTERMEMORIAS_TIPO_LABELS;

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

export const DCSERVIDORES_FABRICANTE_LABELS = {
	"1": "DELL",
	"2": "HPE",
	"3": "IBM",
	"4": "Supermicro",
	"5": "Outro",
} as const;

export const DCSERVIDORES_STATUS_LABELS = {
	"1": "Disponivel",
	"2": "Alocado para Cliente",
	"3": "Manutenção",
	"4": "Descartado",
} as const;

export type DcServidoresFabricante =
	keyof typeof DCSERVIDORES_FABRICANTE_LABELS;

export type DcServidoresStatus = keyof typeof DCSERVIDORES_STATUS_LABELS;

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

export const DEMANDASVIABILIDADES_FORMAATENDIMENTO_LABELS = {
	"1": "Rede Própria",
	"2": "Ultima Milha de Terceiros",
} as const;

export const DEMANDASVIABILIDADES_SERVICOPRETENDIDO_LABELS = {
	"1": "Link Dedicado",
	"2": "E-Line",
} as const;

export const DEMANDASVIABILIDADES_STATUS_LABELS = {
	"1": "Aguardando",
	"2": "Viável",
	"3": "Não Viável",
} as const;

export type DemandasViabilidadesFormaAtendimento =
	keyof typeof DEMANDASVIABILIDADES_FORMAATENDIMENTO_LABELS;

export type DemandasViabilidadesServicoPretendido =
	keyof typeof DEMANDASVIABILIDADES_SERVICOPRETENDIDO_LABELS;

export type DemandasViabilidadesStatus =
	keyof typeof DEMANDASVIABILIDADES_STATUS_LABELS;

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

export const DISCOS_CAPACIDADE_LABELS = {
	"1": "480 GB",
	"2": "960 GB",
	"3": "240 GB",
	"4": "1920 GB",
	"5": "3840 GB",
	"6": "7868 GB",
	"7": "120 GB",
	"8": "100 GB",
	"9": "500 GB",
	"10": "1000 GB",
	"11": "2000 GB",
	"12": "4000 GB",
} as const;

export const DISCOS_TIPO_LABELS = {
	"1": "SSD SATA",
	"2": "SSD SAS",
	"3": "HDD SAS 10k",
	"4": "HDD SAS 15k",
	"5": "HDD NLSAS",
	"6": "HDD SATA",
} as const;

export type DiscosCapacidade = keyof typeof DISCOS_CAPACIDADE_LABELS;

export type DiscosTipo = keyof typeof DISCOS_TIPO_LABELS;

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

export const INFOARQUIVOS_ARQUIVOEXTERNO_LABELS = {
	sim: "Sim",
	Nao: "Não",
} as const;

export type InfoArquivosArquivoExterno =
	keyof typeof INFOARQUIVOS_ARQUIVOEXTERNO_LABELS;

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

export const INFOASO_INFORMADO_LABELS = {
	nao: "Não",
	sim: "Sim",
} as const;

export const INFOASO_TIPOEXAME_LABELS = {
	ExameAdmissional: "Exame Admissional",
	ExamePeriodico: "Exame Periódico",
	AtestadoMedico: "Atestado Médico",
	RetornoTrabalho: "Retorno ao Trabalho",
	MudancaFuncao: "Mudança de Função",
	outros: "Outros",
} as const;

export type InfoAsoInformado = keyof typeof INFOASO_INFORMADO_LABELS;

export type InfoAsoTipoExame = keyof typeof INFOASO_TIPOEXAME_LABELS;

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

export const ITENSPACOTES_TIPOIXC_LABELS = {
	I: "INTERNET",
	SMP: "MVNO/SMP",
	TV: "TV/STREAMING",
	S: "SERVICO",
	T: "STFC/TELEFONE",
	SVA: "SVA",
} as const;

export const ITENSPACOTES_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

export type ItensPacotesTipoIxc = keyof typeof ITENSPACOTES_TIPOIXC_LABELS;

export type ItensPacotesTipoProduto =
	keyof typeof ITENSPACOTES_TIPOPRODUTO_LABELS;

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

export const LANCAMENTOSFERIAS_STATUS_LABELS = {
	cancelada: "Cancelada",
	planejada: "Planejada",
	EmAndamento: "Em andamento",
	aprovada: "Aprovada",
	concluida: "Concluída",
} as const;

export type LancamentosFeriasStatus =
	keyof typeof LANCAMENTOSFERIAS_STATUS_LABELS;

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

export const LINHACORPORATIVA_TIPO_LABELS = {
	"1": "Chip Corporativo",
	"2": "DID Fixo",
} as const;

export type LinhaCorporativaTipo = keyof typeof LINHACORPORATIVA_TIPO_LABELS;

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

export const LOGS_LOGLEVEL_LABELS = {
	info: "Info",
	warning: "Warning",
	alert: "Alert",
	error: "Error",
} as const;

export type LogsLogLevel = keyof typeof LOGS_LOGLEVEL_LABELS;

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

export const NEGOCIACOESCOMENTARIOS_INSEREATENDIMENTOIXC_LABELS = {
	"0": "Não",
	"1": "Sim",
} as const;

export const NEGOCIACOESCOMENTARIOS_SETORPARAOBS_LABELS = {
	"1": "Equipe de Campo",
	"2": "Suporte Nível 1",
	"3": "Suporte Nível 2",
	"4": "Telefonia (Ativações e/ou Portabilidades)",
} as const;

export type NegociacoesComentariosInsereAtendimentoIxc =
	keyof typeof NEGOCIACOESCOMENTARIOS_INSEREATENDIMENTOIXC_LABELS;

export type NegociacoesComentariosSetorParaObs =
	keyof typeof NEGOCIACOESCOMENTARIOS_SETORPARAOBS_LABELS;

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

export const NEGOCIACOESITENS_RELACAO_LABELS = {
	COMBO: "COMBO",
	ADICIONAL: "ADICIONAL",
} as const;

export const NEGOCIACOESITENS_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

export type NegociacoesItensRelacao =
	keyof typeof NEGOCIACOESITENS_RELACAO_LABELS;

export type NegociacoesItensTipoProduto =
	keyof typeof NEGOCIACOESITENS_TIPOPRODUTO_LABELS;

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

export interface Nukww9tmq83 {
	f_fk1_setor_tipos: number;
	f_fk2_setor_tipos: number;
}

export type Nukww9tmq83Relations = Record<string, never>;

export type Nukww9tmq83RelationKey = keyof Nukww9tmq83Relations;

export const OEQUALIRUN_PROCEDIMENTO_LABELS = {
	Value1776052314044ff9B78615a4b0d7a3e2: "Assinatura via GOV",
} as const;

export const OEQUALIRUN_STATUS_LABELS = {
	cancelado: "Cancelado",
	novo: "Novo",
	pendente: "Pendente",
	concluido: "Concluído",
} as const;

export type OeQualirunProcedimento =
	keyof typeof OEQUALIRUN_PROCEDIMENTO_LABELS;

export type OeQualirunStatus = keyof typeof OEQUALIRUN_STATUS_LABELS;

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

export const OPCOESSMP_PORTABILIDADE_LABELS = {
	"0": "NÃO",
	"1": "SIM",
} as const;

export type OpcoesSmpPortabilidade =
	keyof typeof OPCOESSMP_PORTABILIDADE_LABELS;

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

export const OPCOESSTFC_PORTABILIDADE_LABELS = {
	SIM: "SIM",
	NAO: "NÃO",
} as const;

export type OpcoesStfcPortabilidade =
	keyof typeof OPCOESSTFC_PORTABILIDADE_LABELS;

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

export const OPCOESSTFCTEMPLATE_PORTABILIDADE_LABELS = {
	"0": "NÃO",
	"1": "SIM",
} as const;

export type OpcoesStfcTemplatePortabilidade =
	keyof typeof OPCOESSTFCTEMPLATE_PORTABILIDADE_LABELS;

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

export const PACOTES_ABREATENDIMENTO_LABELS = {
	"0": "NAO",
	"1": "SIM",
} as const;

export const PACOTES_PACOTEADICIONAL_LABELS = {
	"0": "NAO",
	"1": "SIM",
} as const;

export const PACOTES_PACOTEPRINCIPAL_LABELS = {
	"0": "NAO",
	"1": "SIM",
} as const;

export const PACOTES_STATUS_LABELS = {
	"1": "Ativo",
	"2": "Inativo",
} as const;

export const PACOTES_VENDERPARA_LABELS = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
} as const;

export type PacotesAbreAtendimento =
	keyof typeof PACOTES_ABREATENDIMENTO_LABELS;

export type PacotesPacoteAdicional =
	keyof typeof PACOTES_PACOTEADICIONAL_LABELS;

export type PacotesPacotePrincipal =
	keyof typeof PACOTES_PACOTEPRINCIPAL_LABELS;

export type PacotesStatus = keyof typeof PACOTES_STATUS_LABELS;

export type PacotesVenderPara = keyof typeof PACOTES_VENDERPARA_LABELS;

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

export const PATRIMONIO_ESTADOUSO_LABELS = {
	NOVO: "NOVO",
	UsadoEmEstadoDeNovo: "USADO, EM ESTADO DE NOVO",
	UsadoComMarcasDeUso: "USADO, COM MARCAS DE USO",
} as const;

export const PATRIMONIO_TIPOPATRIMONIO_LABELS = {
	"1": "Equipamento",
} as const;

export type PatrimonioEstadoUso = keyof typeof PATRIMONIO_ESTADOUSO_LABELS;

export type PatrimonioTipoPatrimonio =
	keyof typeof PATRIMONIO_TIPOPATRIMONIO_LABELS;

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

export const PERIODOSFERIAS_STATUSPERIODO_LABELS = {
	cancelada: "Cancelada",
	planejada: "Planejada",
	EmAndamento: "Em andamento",
	aprovada: "Aprovada",
	concluida: "Concluída",
} as const;

export type PeriodosFeriasStatusPeriodo =
	keyof typeof PERIODOSFERIAS_STATUSPERIODO_LABELS;

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

export const PRODUTOS_TIPOIXC_LABELS = {
	I: "INTERNET",
	SMP: "SMP/MVNO",
	TV: "TV/STREAMING",
	S: "SERVICO",
	T: "STFC/TELEFONE",
	SVA: "SVA",
} as const;

export const PRODUTOS_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

export type ProdutosTipoIxc = keyof typeof PRODUTOS_TIPOIXC_LABELS;

export type ProdutosTipoProduto = keyof typeof PRODUTOS_TIPOPRODUTO_LABELS;

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

export const QUALIRUNINFOADICIONAIS_GRAUESCOLARIDADE_LABELS = {
	EnsinoMedio: "Ensino Médio",
	Superior: "Superior",
	PosMba: "Pós, MBA",
	Mestrado: "Mestrado",
	Doutorado: "Doutorado",
} as const;

export const QUALIRUNINFOADICIONAIS_SITUACAOCURSO_LABELS = {
	Trancado: "Trancado",
	Cursando: "Cursando",
	Completo: "Completo",
} as const;

export const QUALIRUNINFOADICIONAIS_STATUS_LABELS = {
	recusado: "Recusado",
	aprovado: "Aprovado",
	aguardando: "Aguardando",
} as const;

export const QUALIRUNINFOADICIONAIS_VINCULOCONTATOEMERGENCIA_LABELS = {
	Pais: "Pais",
	FilhoAOuEnteadoA: "Filho(a) ou Enteado(a)",
	Avos: "Avós",
	Conjuge: "Conjuge",
} as const;

export type QualirunInfoAdicionaisGrauEscolaridade =
	keyof typeof QUALIRUNINFOADICIONAIS_GRAUESCOLARIDADE_LABELS;

export type QualirunInfoAdicionaisSituacaoCurso =
	keyof typeof QUALIRUNINFOADICIONAIS_SITUACAOCURSO_LABELS;

export type QualirunInfoAdicionaisStatus =
	keyof typeof QUALIRUNINFOADICIONAIS_STATUS_LABELS;

export type QualirunInfoAdicionaisVinculoContatoEmergencia =
	keyof typeof QUALIRUNINFOADICIONAIS_VINCULOCONTATOEMERGENCIA_LABELS;

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

export const QUALIRUNPROCESSOS_DETALHESPROCEDIMENTO_LABELS = {
	"1": "Utilizado para novos colaboradores preencherem os dados e a documentação de admissão, que serão utilizados no CRM, aba de Colaboradores.",
	"2": "Utilizado para novos colaboradores assinarem os termos de Confidencialidade, LGPD e Uso Voz e Imagem.",
} as const;

export const QUALIRUNPROCESSOS_IDPROCEDIMENTOQUALIRUN_LABELS = {
	C03f166dA4d742b7Ae73A4c287e171ac: "Complemento de Informações e Documentos",
	Value0a3d75b429084bc285a664667ec60477: "Assinatura com Identidade Verificada",
} as const;

export const QUALIRUNPROCESSOS_PROCEDIMENTO_LABELS = {
	ComplementoInformacoesDocumentos: "Complemento de Informações e Documentos",
	ConfidencialidadeLgpdVozImagem:
		"Assinatura de Termos (LGPD, Voz e Imagem e Confidencialidade)",
} as const;

export const QUALIRUNPROCESSOS_STATUS_LABELS = {
	novo: "Novo",
	pendente: "Pendente",
	concluido: "Concluído",
	cancelado: "Cancelado",
} as const;

export type QualirunProcessosDetalhesProcedimento =
	keyof typeof QUALIRUNPROCESSOS_DETALHESPROCEDIMENTO_LABELS;

export type QualirunProcessosIdProcedimentoQualirun =
	keyof typeof QUALIRUNPROCESSOS_IDPROCEDIMENTOQUALIRUN_LABELS;

export type QualirunProcessosProcedimento =
	keyof typeof QUALIRUNPROCESSOS_PROCEDIMENTO_LABELS;

export type QualirunProcessosStatus =
	keyof typeof QUALIRUNPROCESSOS_STATUS_LABELS;

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

export const RECURSOSVIAGEM_DESTINOVIAGEM_LABELS = {
	"1": "Curitibanos",
	"2": "Florianópolis",
	"3": "Florianópolis",
} as const;

export const RECURSOSVIAGEM_MEIOTRANSPORTE_LABELS = {
	"1": "Kwid ATPlus",
	"2": "Fiorino ATPlus",
	"3": "Carro Particular",
	"4": "Outro",
} as const;

export type RecursosViagemDestinoViagem =
	keyof typeof RECURSOSVIAGEM_DESTINOVIAGEM_LABELS;

export type RecursosViagemMeioTransporte =
	keyof typeof RECURSOSVIAGEM_MEIOTRANSPORTE_LABELS;

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

export interface Rguxtr9p91d {
	f_fk_ponta_a_interface: number;
	f_fk_ponta_a_interface2: number;
}

export type Rguxtr9p91dRelations = Record<string, never>;

export type Rguxtr9p91dRelationKey = keyof Rguxtr9p91dRelations;

export const SERVICOS_STATUS_LABELS = {
	"0": "Cancelado",
	"1": "Aguardando Ativação",
	"2": "Ativo",
} as const;

export const SERVICOS_TIPO_LABELS = {
	"1": "Link IP",
	"2": "PTP",
	"3": "PTMP",
	"4": "OUTRO",
	"5": "Lastmile",
	"6": "Colocation",
} as const;

export type ServicosStatus = keyof typeof SERVICOS_STATUS_LABELS;

export type ServicosTipo = keyof typeof SERVICOS_TIPO_LABELS;

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

export const SITES_STATUS_LABELS = {
	repnmsclnb8: "Planejado",
	x2lk2z9p2ds: "Ativo",
	qw3vjvimoae: "Desativado",
} as const;

export const SITES_TIPO_LABELS = {
	"1": "ATPLUS",
	"2": "FORNECEDOR",
	"3": "CLIENTE",
} as const;

export type SitesStatus = keyof typeof SITES_STATUS_LABELS;

export type SitesTipo = keyof typeof SITES_TIPO_LABELS;

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

export interface Siurxeb1juy {
	f_stgjevi19lg: number;
	f_vazo5n0bhe5: number;
}

export type Siurxeb1juyRelations = Record<string, never>;

export type Siurxeb1juyRelationKey = keyof Siurxeb1juyRelations;

export const SOLICITACAOCOMPRAS_CATEGORIA_LABELS = {
	Produto: "Produto",
	Servico: "Serviço",
} as const;

export const SOLICITACAOCOMPRAS_DEPARTAMENTO_LABELS = {
	Almox: "Almox",
	Comercial: "Comercial",
	Financeiro: "Financeiro",
	Infraestrutura: "Infraestrutura",
	LaboratorioTecnico: "Laboratório Técnico",
	Marketing: "Marketing",
	NOC: "NOC",
	Operacional: "Operacional",
	Platon: "Platon",
	Processos: "Processos",
	Projetos: "Projetos",
	RH: "RH",
	ServicosGerais: "Serviços Gerais",
} as const;

export const SOLICITACAOCOMPRAS_METODODEPAGAMENTO_LABELS = {
	ADefinir: "Á definir",
	Pix: "Pix",
	Boleto: "Boleto",
	Cartao: "Cartão",
} as const;

export const SOLICITACAOCOMPRAS_PRAZO_LABELS = {
	"1": "Á definir",
	"2": "Á vista",
	"3": "1x",
	"4": "2x",
	"5": "3x",
	"6": "4x",
	"7": "5x",
	"8": "6x",
	"9": "7x",
	"10": "8x",
	"11": "9x",
	"12": "10x",
	"13": "11x",
	"14": "12x",
} as const;

export const SOLICITACAOCOMPRAS_STATUS_LABELS = {
	CaixaDeEntrada: "Caixa de Entrada",
	AprovacaoDaGestao: "Aprovação da Gestão",
	PedidoDeCompra: "Pedido de Compra",
	ProcessamentoFinanceiro: "Processamento Financeiro",
	FilaDeEntrega: "Fila de Entrega",
	Concluido: "Concluído",
	Rejeitado: "Rejeitado",
	Standby: "Standby",
} as const;

export const SOLICITACAOCOMPRAS_TIPO_LABELS = {
	"1": "Pedido de Compra",
	"2": "Cotação",
} as const;

export type SolicitacaoComprasCategoria =
	keyof typeof SOLICITACAOCOMPRAS_CATEGORIA_LABELS;

export type SolicitacaoComprasDepartamento =
	keyof typeof SOLICITACAOCOMPRAS_DEPARTAMENTO_LABELS;

export type SolicitacaoComprasMetodoDePagamento =
	keyof typeof SOLICITACAOCOMPRAS_METODODEPAGAMENTO_LABELS;

export type SolicitacaoComprasPrazo =
	keyof typeof SOLICITACAOCOMPRAS_PRAZO_LABELS;

export type SolicitacaoComprasStatus =
	keyof typeof SOLICITACAOCOMPRAS_STATUS_LABELS;

export type SolicitacaoComprasTipo =
	keyof typeof SOLICITACAOCOMPRAS_TIPO_LABELS;

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

export const SUSPENSAOCONTRATO_STATUS_LABELS = {
	"0": "Nova Solicitação",
	"1": "Aguardando Assinatura",
	"2": "Assinatura Concluída",
	"3": "Concluído",
	"4": "Cancelado",
} as const;

export type SuspensaoContratoStatus =
	keyof typeof SUSPENSAOCONTRATO_STATUS_LABELS;

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

export const TELECOMCOLOCATIONOPCOES_ENERGIA_LABELS = {
	Value0nqbw68srah: "AC 220",
	e5b3lklfpq4: "AC 110",
	mra46p506xo: "DC -48",
} as const;

export type TelecomColocationOpcoesEnergia =
	keyof typeof TELECOMCOLOCATIONOPCOES_ENERGIA_LABELS;

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

export const TELECOMINTERFACES_CONFIGURACAO_LABELS = {
	"1": "Acesso",
	"2": "Tronco",
	"3": "Hibrida",
} as const;

export const TELECOMINTERFACES_TIPO_LABELS = {
	"1": "SFP",
	"3": "METALICA",
	"2": "SFP+",
	"4": "QSFP",
	"5": "VLAN",
	"6": "VPN",
	"7": "ETH-TRUNK (LAG)",
} as const;

export type TelecomInterfacesConfiguracao =
	keyof typeof TELECOMINTERFACES_CONFIGURACAO_LABELS;

export type TelecomInterfacesTipo = keyof typeof TELECOMINTERFACES_TIPO_LABELS;

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

export const TELECOMIPSFIXOS_POSSUIIPFIXO_LABELS = {
	"0": "Não",
	"1": "Sim",
} as const;

export type TelecomIpsFixosPossuiIpFixo =
	keyof typeof TELECOMIPSFIXOS_POSSUIIPFIXO_LABELS;

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

export const TELECOMRECURSOS_FINALIDADE_LABELS = {
	"3": "Insumo para Serviço",
	"2": "Serviço",
	"4": "Facilidade",
	"1": "Acesso",
} as const;

export const TELECOMRECURSOS_STATUS_LABELS = {
	"1": "Planejado",
	"2": "Ativo",
	"3": "Desativado",
} as const;

export const TELECOMRECURSOS_TIPO_LABELS = {
	"1": "L2 - PTP",
	"13": "L3 - PTP",
	"6": "L2 - P2MP",
	"4": "L2 - Last Mile",
	"2": "L3 - Link IP",
	"7": "L3 - Banda Larga",
	"5": "L1 - Fibra Apagada",
	"8": "L1 - Canal DWDM",
	"3": "Colocation",
	"9": "VPN",
	"10": "Trunk Flex",
	"11": "Transito IP Internet ",
	"12": "Transito IP CDN",
	"14": "Contrato",
} as const;

export type TelecomRecursosFinalidade =
	keyof typeof TELECOMRECURSOS_FINALIDADE_LABELS;

export type TelecomRecursosStatus = keyof typeof TELECOMRECURSOS_STATUS_LABELS;

export type TelecomRecursosTipo = keyof typeof TELECOMRECURSOS_TIPO_LABELS;

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

export const TEMPLATESATENDIMENTON1_ACESSAPELAREDEDAATPLUS_LABELS = {
	Sim: "Sim",
	Nao: "Nao",
} as const;

export const TEMPLATESATENDIMENTON1_ALTERACOES_LABELS = {
	SomenteONome: "Somente o nome",
	SomenteASenha: "Somente a senha",
	NomeESenha: "Nome e senha",
} as const;

export const TEMPLATESATENDIMENTON1_APLICATIVO_LABELS = {
	Deezer: "Deezer",
	WatchBr: "Watch BR",
	Paramount: "Paramount+",
	HboMax: "HBO Max",
	ViaLivros: "Via Livros",
	OleTv: "Olé TV",
	TodosOsAplicativos: "Todos os aplicativos",
} as const;

export const TEMPLATESATENDIMENTON1_APLICATIVOESPECIFICO_LABELS = {
	Sim: "Sim",
	Nao: "Não",
} as const;

export const TEMPLATESATENDIMENTON1_APNPREENCHIDA_LABELS = {
	Sim: "Sim",
	Nao: "Não",
	NaoSoubeDizer: "Não soube dizer",
} as const;

export const TEMPLATESATENDIMENTON1_FABRICANTE_LABELS = {
	Samsung: "Samsung",
	Apple: "Apple",
	Motorola: "Motorola",
	Xiomi: "Xiomi",
	Asus: "Asus",
	Outro: "Outro",
} as const;

export const TEMPLATESATENDIMENTON1_LOS_LABELS = {
	Sim: "Sim",
	Nao: "Não",
} as const;

export const TEMPLATESATENDIMENTON1_QUALAPNCONFIGURADA_LABELS = {
	EaiBr: "eai.br",
	M2mArqiaBr: "m2m.arqia.br",
	InternetBr: "internet.br",
} as const;

export const TEMPLATESATENDIMENTON1_QUANTIDADEDEDISPOSITIVOS_LABELS = {
	UmDispositivo: "Um dispositivo",
	TodosOsDispositivos: "Todos os dispositivos",
} as const;

export const TEMPLATESATENDIMENTON1_STATUSDOCIRCUITO_LABELS = {
	Online: "Online",
	Offline: "Offline",
} as const;

export const TEMPLATESATENDIMENTON1_TELEFONIATIPODEPROBLEMA_LABELS = {
	NaoRecebeLigacoes: "Não recebe ligações",
	NaoEfetuaLigacoes: "Não efetua ligações",
	QuedasNasLigacoes: "Quedas nas ligações",
	ChiadoVozRobotica: "Chiado / Voz robótica",
	MudoSemTom: "Mudo / Sem tom",
} as const;

export const TEMPLATESATENDIMENTON1_TIPODEATENDIMENTO_LABELS = {
	Lentidao: "Lentidão/Quedas",
	SemConexao: "Sem conexão",
	SiteEspecifico: "Site específico",
	Telefonia: "Telefonia",
	AberturaDePortas: "Abertura de portas",
	TrocaDeNomeSenha: "Troca de nome/senha",
	SVA: "SVA",
	MVNO: "MVNO",
	Outro: "Outro",
} as const;

export const TEMPLATESATENDIMENTON1_TIPODECONEXAODODISPOSITIVO_LABELS = {
	WiFi: "Wi-Fi",
	CaboDeRede: "Cabo de rede",
} as const;

export const TEMPLATESATENDIMENTON1_TIPODEPROBLEMAMVNO_LABELS = {
	NaoRecebeLigacoes: "Não recebe ligações",
	NaoEfetuaLigacoes: "Não efetua ligações",
	DadosMoveisNaoFuncionam: "Dados móveis não funcionam",
} as const;

export const TEMPLATESATENDIMENTON1_TORREREDE_LABELS = {
	ComSinal: "Com sinal",
	SemSinal: "Sem sinal",
} as const;

export type TemplatesAtendimentoN1AcessaPelaRedeDaAtplus =
	keyof typeof TEMPLATESATENDIMENTON1_ACESSAPELAREDEDAATPLUS_LABELS;

export type TemplatesAtendimentoN1Alteracoes =
	keyof typeof TEMPLATESATENDIMENTON1_ALTERACOES_LABELS;

export type TemplatesAtendimentoN1Aplicativo =
	keyof typeof TEMPLATESATENDIMENTON1_APLICATIVO_LABELS;

export type TemplatesAtendimentoN1AplicativoEspecifico =
	keyof typeof TEMPLATESATENDIMENTON1_APLICATIVOESPECIFICO_LABELS;

export type TemplatesAtendimentoN1ApnPreenchida =
	keyof typeof TEMPLATESATENDIMENTON1_APNPREENCHIDA_LABELS;

export type TemplatesAtendimentoN1Fabricante =
	keyof typeof TEMPLATESATENDIMENTON1_FABRICANTE_LABELS;

export type TemplatesAtendimentoN1Los =
	keyof typeof TEMPLATESATENDIMENTON1_LOS_LABELS;

export type TemplatesAtendimentoN1QualApnConfigurada =
	keyof typeof TEMPLATESATENDIMENTON1_QUALAPNCONFIGURADA_LABELS;

export type TemplatesAtendimentoN1QuantidadeDeDispositivos =
	keyof typeof TEMPLATESATENDIMENTON1_QUANTIDADEDEDISPOSITIVOS_LABELS;

export type TemplatesAtendimentoN1StatusDoCircuito =
	keyof typeof TEMPLATESATENDIMENTON1_STATUSDOCIRCUITO_LABELS;

export type TemplatesAtendimentoN1TelefoniaTipoDeProblema =
	keyof typeof TEMPLATESATENDIMENTON1_TELEFONIATIPODEPROBLEMA_LABELS;

export type TemplatesAtendimentoN1TipoDeAtendimento =
	keyof typeof TEMPLATESATENDIMENTON1_TIPODEATENDIMENTO_LABELS;

export type TemplatesAtendimentoN1TipoDeConexaoDoDispositivo =
	keyof typeof TEMPLATESATENDIMENTON1_TIPODECONEXAODODISPOSITIVO_LABELS;

export type TemplatesAtendimentoN1TipoDeProblemaMvno =
	keyof typeof TEMPLATESATENDIMENTON1_TIPODEPROBLEMAMVNO_LABELS;

export type TemplatesAtendimentoN1TorreRede =
	keyof typeof TEMPLATESATENDIMENTON1_TORREREDE_LABELS;

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

export const TROCAENDERECO_STATUS_LABELS = {
	"1": "Atendimento Gerado",
	"2": "Atendimento Concluído",
	"3": "Atendimento para Campo",
	"4": "Atendimento para CR",
	"0": "Erro na Integração",
} as const;

export const TROCAENDERECO_TAXAINSTALACAO_LABELS = {
	"0": "Não",
	"1": "R$ 80,00 à vista",
	"2": "R$ 80,00 em 2 vezes",
} as const;

export type TrocaEnderecoStatus = keyof typeof TROCAENDERECO_STATUS_LABELS;

export type TrocaEnderecoTaxaInstalacao =
	keyof typeof TROCAENDERECO_TAXAINSTALACAO_LABELS;

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

export const VIAGEMSOLICITACAO_DESTINOVIAGEM_LABELS = {
	BocainaDoSul: "Bocaina do Sul",
	CampoBeloDoSul: "Campo Belo do Sul",
	CapaoAlto: "Capão Alto",
	CerroNegro: "Cerro Negro",
	CorreiaPinto: "Correia Pinto",
	Curitibanos: "Curitibanos",
	Florianopolis: "Florianópolis",
	Painel: "Painel",
	Outros: "Outros",
} as const;

export const VIAGEMSOLICITACAO_DIARIA_LABELS = {
	"5": "8h",
	"10": "Acima de 8h",
} as const;

export const VIAGEMSOLICITACAO_FASE_LABELS = {
	CaixaDeEntrada: "Caixa de Entrada",
	ProcessamentoFinanceiro: "Processamento Financeiro",
	Concluido: "Concluído",
	Arquivado: "Arquivado",
} as const;

export const VIAGEMSOLICITACAO_MEIOTRANSPORTE_LABELS = {
	KwidAtplus: "Kwid ATPlus",
	FiorinoAtplus: "Fiorino ATPlus",
	FiorinoFhortec: "Fiorino Fhortec",
	UnoAtplus: "Uno ATPlus",
	CarroParticular: "Carro Particular",
	Outro: "Outro",
} as const;

export type ViagemSolicitacaoDestinoViagem =
	keyof typeof VIAGEMSOLICITACAO_DESTINOVIAGEM_LABELS;

export type ViagemSolicitacaoDiaria =
	keyof typeof VIAGEMSOLICITACAO_DIARIA_LABELS;

export type ViagemSolicitacaoFase = keyof typeof VIAGEMSOLICITACAO_FASE_LABELS;

export type ViagemSolicitacaoMeioTransporte =
	keyof typeof VIAGEMSOLICITACAO_MEIOTRANSPORTE_LABELS;

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
