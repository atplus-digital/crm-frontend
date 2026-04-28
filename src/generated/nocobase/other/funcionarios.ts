/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Aniversarios } from "../other/aniversarios";
import type { ArquivosFuncionarios } from "../other/arquivos-funcionarios";
import type { Asos } from "../other/asos";
import type { Cargos } from "../other/cargos";
import type { Departamentos } from "../other/departamentos";
import type { FotoFuncionarios } from "../other/foto-funcionarios";
import type { InfoArquivos } from "../other/info-arquivos";
import type { InfoAso } from "../other/info-aso";
import type { LinhaCorporativa } from "../other/linha-corporativa";
import type { LogsCargos } from "../other/logs-cargos";
import type { Parentesco } from "../other/parentesco";
import type { Patrimonio } from "../other/patrimonio";
import type { PeriodosFerias } from "../other/periodos-ferias";
import type { QualirunInfoAdicionais } from "../other/qualirun-info-adicionais";
import type { QualirunProcessos } from "../other/qualirun-processos";
import type { Turnos } from "../other/turnos";
import type { Users } from "../users";

export const F_FUNCIONARIOS_TABLE_NAME = "f_funcionarios";

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
