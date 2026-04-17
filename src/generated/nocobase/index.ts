/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Empresas } from "./empresas";
import type { Negociacoes } from "./negociacoes";
import type { Pessoas } from "./pessoas";
import type { Users } from "./users";

export enum ColaboradoresDoSetorFkColaboradoresSetor1 {
	Value1 = "1",
	Value10 = "10",
	Value12 = "12",
	Value13 = "13",
	Value14 = "14",
	Value15 = "15",
	Value17 = "17",
	Value18 = "18",
	Value2 = "2",
	Value20 = "20",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
}

export interface ColaboradoresDoSetor {
	f_fk_colaboradores_setor_1: ColaboradoresDoSetorFkColaboradoresSetor1;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresDoSetorRelations = Record<string, never>;

export type ColaboradoresDoSetorRelationKey =
	keyof ColaboradoresDoSetorRelations;

export const COLABORADORESDOSETOR_FKCOLABORADORESSETOR1_LABELS: Record<
	ColaboradoresDoSetorFkColaboradoresSetor1,
	string
> = {
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value1]: "Ativo",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value10]: "Código 10",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value12]: "Código 12",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value13]: "Código 13",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value14]: "Código 14",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value15]: "Código 15",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value17]: "Código 17",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value18]: "Código 18",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value2]: "Código 2",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value20]: "Código 20",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value3]: "Código 3",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value4]: "Código 4",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value5]: "Código 5",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value6]: "Código 6",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value7]: "Código 7",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value8]: "Código 8",
	[ColaboradoresDoSetorFkColaboradoresSetor1.Value9]: "Código 9",
};

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

export enum FFuncionariosCreatedat {
	Value20251030t184052292z = "2025-10-30T18:40:52.292Z",
	Value20251114t140814335z = "2025-11-14T14:08:14.335Z",
	Value20251201t132337519z = "2025-12-01T13:23:37.519Z",
	Value20251201t134032841z = "2025-12-01T13:40:32.841Z",
	Value20251201t180436112z = "2025-12-01T18:04:36.112Z",
	Value20260209t165558650z = "2026-02-09T16:55:58.650Z",
	Value20260209t175807526z = "2026-02-09T17:58:07.526Z",
	Value20260209t180606486z = "2026-02-09T18:06:06.486Z",
	Value20260209t182403789z = "2026-02-09T18:24:03.789Z",
	Value20260218t125041978z = "2026-02-18T12:50:41.978Z",
	Value20260218t144101172z = "2026-02-18T14:41:01.172Z",
	Value20260218t191602108z = "2026-02-18T19:16:02.108Z",
	Value20260227t144118063z = "2026-02-27T14:41:18.063Z",
	Value20260305t174029156z = "2026-03-05T17:40:29.156Z",
	Value20260320t175519792z = "2026-03-20T17:55:19.792Z",
	Value20260320t181135954z = "2026-03-20T18:11:35.954Z",
	Value20260402t183206361z = "2026-04-02T18:32:06.361Z",
	Value20260409t204308066z = "2026-04-09T20:43:08.066Z",
	Value20260416t210151400z = "2026-04-16T21:01:51.400Z",
}

export enum FFuncionariosAtivo {
	Sim = "Sim",
	NO = "Não",
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

export enum FFuncionariosCnpj {
	Value59556090000144 = "59.556.090/0001-44",
}

export enum FFuncionariosContaSalarioPix {
	Value000110923 = "00011092-3",
	Value000246218 = "00024621-8",
	Value010215082 = "01021508-2",
	Value244347 = "244347",
	Value262523 = "262523",
	Value382822 = "38282-2",
	Value395863 = "39586-3",
	Value533335 = "53333-5",
	Value592997 = "59299-7",
	Value762718604 = "76271860-4",
}

export enum FFuncionariosCurso {
	AdministraOUniplac = "Administração - Uniplac",
	CienciasDaComputaO = "Ciencias da Computação",
	CienciasDaComputaOFacvest = "Ciencias da Computação - Facvest",
	DireitoUniplac = "Direito - Uniplac",
	EstruturaEGestODeRedesEComputadoresMbaProcessosGerenciaisEDataProtectionOfficerDpo = "Estrutura e Gestão de Redes e Computadores, MBA - Processos Gerenciais e Data Protection Officer - DPO.",
	Teste = "Teste",
}

export enum FFuncionariosEmpresa {
	Atplus = "ATPlus",
	Platon = "Platon",
}

export enum FFuncionariosEnderecoCidade {
	Curitibanos = "Curitibanos",
	Lages = "Lages",
}

export enum FFuncionariosEnderecoCnpj {
	RuaAristidesWaltrick13Copacabana88504020LagesSc = "Rua Aristides Waltrick, 13, Copacabana - 88504-020 - Lages - SC",
}

export enum FFuncionariosEnderecoEstado {
	Sc = "SC",
}

export enum FFuncionariosEnderecoReferencia {
	CoqueirosNaFrente = "Coqueiros na Frente",
	Q15 = "Q 15",
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
	EnsinoMDio = "Ensino Médio",
	Superior = "Superior",
	PSMba = "Pós, MBA",
	Mestrado = "Mestrado",
	Doutorado = "Doutorado",
}

export enum FFuncionariosEstadoCivil {
	Solteiro = "Solteiro",
	Casado = "Casado",
	UniOEstVel = "União Estável",
	ViVo = "Viúvo",
	Divorciado = "Divorciado",
	Separado = "Separado",
}

export enum FFuncionariosFkFuncionarios2 {
	Value1 = "1",
	Value11 = "11",
	Value2 = "2",
	Value3 = "3",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
}

export enum FFuncionariosFkSetor {
	Value355511080845316 = "355511080845316",
	Value355511080845317 = "355511080845317",
	Value355511080845320 = "355511080845320",
	Value355511080845323 = "355511080845323",
}

export enum FFuncionariosFkTurnos {
	Value349920463683585 = "349920463683585",
	Value349920463683590 = "349920463683590",
}

export enum FFuncionariosGenero {
	Masculino = "Masculino",
	Feminino = "Feminino",
}

export enum FFuncionariosMesNascimento {
	Value1 = "1",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
}

export enum FFuncionariosMobilidade {
	ValeTransporteTransul = "Vale Transporte (Transul)",
	MobilidadeCartOBenefCios = "Mobilidade (Cartão Benefícios)",
}

export enum FFuncionariosNacionalidade {
	Brasileira = "Brasileira",
	Brasileiro = "Brasileiro",
}

export enum FFuncionariosNaturalidade {
	AlegreteRs = "Alegrete/RS",
	CamposNovos = "Campos Novos",
	CaxiasDoSulRs = "Caxias do Sul/RS",
	CriciMa = "Criciúma",
	CuritibaPr = "Curitiba/PR",
	CuritibanosSc = "Curitibanos/SC",
	JoaAbaSc = "Joaçaba/SC",
	Lages = "Lages",
	LagesSc = "Lages/SC",
	OtacLioCostaSc = "Otacílio Costa/SC",
	PiraDoSulPr = "Piraí do Sul/PR",
	RioDoSul = "Rio do Sul",
	SaleteSc = "Salete/SC",
	SOLeopoldoRs = "São Leopoldo/RS",
	TaioSc = "Taio/SC",
}

export enum FFuncionariosNomeContatoEmergencia {
	Mateus = "mateus",
	RosaMachado = "Rosa Machado",
}

export enum FFuncionariosOrgaoExpedidor {
	Ssp = "SSP",
}

export enum FFuncionariosPcd {
	Sim = "Sim",
	NO = "Não",
}

export enum FFuncionariosRazaoSocial {
	Value59556090MateusSalomaoDeBarrosNeto = "59.556.090 Mateus Salomao de Barros Neto",
}

export enum FFuncionariosReservista {
	Sim = "Sim",
	NO = "Não",
}

export enum FFuncionariosSituacaoEscolaridade {
	Completo = "Completo",
	Cursando = "Cursando",
	Trancado = "Trancado",
}

export enum FFuncionariosTerceiro {
	Sim = "Sim",
	NO = "Não",
}

export enum FFuncionariosTipoContrato {
	Clt = "CLT",
	PrestadorDeServiOs = "Prestador de Serviços",
	EstagiRio = "Estagiário",
	JovemAprendiz = "Jovem Aprendiz",
	SCio = "Sócio",
	TemporRio = "Temporário",
	CltComissO = "CLT + Comissão",
}

export enum FFuncionariosTipoDeficiencia {
	Tdah = "TDAH",
	Tea = "TEA",
	TeaCid116a020 = "TEA, CID 11 6A02.0",
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

export enum FFuncionariosVencimentoContrato {
	Value20171215t020000000z = "2017-12-15T02:00:00.000Z",
	Value20271215t030000000z = "2027-12-15T03:00:00.000Z",
}

export enum FFuncionariosVinculoComColaborador {
	Pais = "Pais",
	FilhoAOuEnteadoA = "Filho(a) ou Enteado(a)",
	AvS = "Avós",
	Conjuge = "Conjuge",
}

export enum FFuncionariosZonaEleitoral {
	Value100 = "100",
	Value104 = "104",
	Value11 = "11",
	Value169 = "169",
	Value21 = "21",
	Value5 = "5",
	Value54 = "54",
	Value57 = "57",
	Value58 = "58",
	Value93 = "93",
}

export interface FFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	f_fk_funcionarios2: FFuncionariosFkFuncionarios2;
	f_fk_setor: FFuncionariosFkSetor;
	f_fk_turnos: FFuncionariosFkTurnos;
	f_id_tecnico_ixc: number;
	f_ativo: FFuncionariosAtivo;
	f_bairro: string;
	f_celular: string;
	f_cep: string;
	f_checklist_admissional: FFuncionariosChecklistAdmissional;
	f_cnh: string;
	f_cnpj: FFuncionariosCnpj;
	f_conta_salario_pix: FFuncionariosContaSalarioPix;
	f_cpf: string;
	f_curso: FFuncionariosCurso;
	f_data_admissao: string;
	f_data_demissao: string;
	f_data_nascimento: string;
	f_email_corporativo: string;
	f_email_pessoal: string;
	f_empresa: FFuncionariosEmpresa;
	f_endereco: string;
	f_endereco_cidade: FFuncionariosEnderecoCidade;
	f_endereco_cnpj: FFuncionariosEnderecoCnpj;
	f_endereco_complemento: string;
	f_endereco_estado: FFuncionariosEnderecoEstado;
	f_endereco_numero: string;
	f_endereco_referencia: FFuncionariosEnderecoReferencia;
	f_epi_calca: string;
	f_epi_calcado: FFuncionariosEpiCalcado;
	f_epi_jaleco: string;
	f_escolaridade: FFuncionariosEscolaridade;
	f_estado_civil: FFuncionariosEstadoCivil;
	f_genero: FFuncionariosGenero;
	f_mes_nascimento: FFuncionariosMesNascimento;
	f_mobilidade: FFuncionariosMobilidade;
	f_motivo_demissao: string;
	f_nacionalidade: FFuncionariosNacionalidade;
	f_naturalidade: FFuncionariosNaturalidade;
	f_nome: string;
	f_nome_contato_emergencia: FFuncionariosNomeContatoEmergencia;
	f_orgao_expedidor: FFuncionariosOrgaoExpedidor;
	f_pcd: FFuncionariosPcd;
	f_razao_social: FFuncionariosRazaoSocial;
	f_reservista: FFuncionariosReservista;
	f_rg: string;
	f_secao_eleitoral: string;
	f_situacao_escolaridade: FFuncionariosSituacaoEscolaridade;
	f_telefone_emergencia: string;
	f_terceiro: FFuncionariosTerceiro;
	f_tipo_contrato: FFuncionariosTipoContrato;
	f_tipo_deficiencia: FFuncionariosTipoDeficiencia;
	f_titulo_eleitor: string;
	f_unidade: FFuncionariosUnidade;
	f_universidade: FFuncionariosUniversidade;
	f_valor_rescisao: number;
	f_vencimento_contrato: FFuncionariosVencimentoContrato;
	f_vinculo_com_colaborador: FFuncionariosVinculoComColaborador;
	f_zona_eleitoral: FFuncionariosZonaEleitoral;
	updatedAt: string;
	createdAt: FFuncionariosCreatedat;
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

export const FFUNCIONARIOS_CREATEDAT_LABELS: Record<
	FFuncionariosCreatedat,
	string
> = {
	[FFuncionariosCreatedat.Value20251030t184052292z]: "2025 10 30t18:40:52.292z",
	[FFuncionariosCreatedat.Value20251114t140814335z]: "2025 11 14t14:08:14.335z",
	[FFuncionariosCreatedat.Value20251201t132337519z]: "2025 12 01t13:23:37.519z",
	[FFuncionariosCreatedat.Value20251201t134032841z]: "2025 12 01t13:40:32.841z",
	[FFuncionariosCreatedat.Value20251201t180436112z]: "2025 12 01t18:04:36.112z",
	[FFuncionariosCreatedat.Value20260209t165558650z]: "2026 02 09t16:55:58.650z",
	[FFuncionariosCreatedat.Value20260209t175807526z]: "2026 02 09t17:58:07.526z",
	[FFuncionariosCreatedat.Value20260209t180606486z]: "2026 02 09t18:06:06.486z",
	[FFuncionariosCreatedat.Value20260209t182403789z]: "2026 02 09t18:24:03.789z",
	[FFuncionariosCreatedat.Value20260218t125041978z]: "2026 02 18t12:50:41.978z",
	[FFuncionariosCreatedat.Value20260218t144101172z]: "2026 02 18t14:41:01.172z",
	[FFuncionariosCreatedat.Value20260218t191602108z]: "2026 02 18t19:16:02.108z",
	[FFuncionariosCreatedat.Value20260227t144118063z]: "2026 02 27t14:41:18.063z",
	[FFuncionariosCreatedat.Value20260305t174029156z]: "2026 03 05t17:40:29.156z",
	[FFuncionariosCreatedat.Value20260320t175519792z]: "2026 03 20t17:55:19.792z",
	[FFuncionariosCreatedat.Value20260320t181135954z]: "2026 03 20t18:11:35.954z",
	[FFuncionariosCreatedat.Value20260402t183206361z]: "2026 04 02t18:32:06.361z",
	[FFuncionariosCreatedat.Value20260409t204308066z]: "2026 04 09t20:43:08.066z",
	[FFuncionariosCreatedat.Value20260416t210151400z]: "2026 04 16t21:01:51.400z",
};

export const FFUNCIONARIOS_ATIVO_LABELS: Record<FFuncionariosAtivo, string> = {
	[FFuncionariosAtivo.Sim]: "Sim",
	[FFuncionariosAtivo.NO]: "Não",
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

export const FFUNCIONARIOS_CNPJ_LABELS: Record<FFuncionariosCnpj, string> = {
	[FFuncionariosCnpj.Value59556090000144]: "59.556.090/0001 44",
};

export const FFUNCIONARIOS_CONTASALARIOPIX_LABELS: Record<
	FFuncionariosContaSalarioPix,
	string
> = {
	[FFuncionariosContaSalarioPix.Value000110923]: "00011092 3",
	[FFuncionariosContaSalarioPix.Value000246218]: "00024621 8",
	[FFuncionariosContaSalarioPix.Value010215082]: "01021508 2",
	[FFuncionariosContaSalarioPix.Value244347]: "244347",
	[FFuncionariosContaSalarioPix.Value262523]: "262523",
	[FFuncionariosContaSalarioPix.Value382822]: "38282 2",
	[FFuncionariosContaSalarioPix.Value395863]: "39586 3",
	[FFuncionariosContaSalarioPix.Value533335]: "53333 5",
	[FFuncionariosContaSalarioPix.Value592997]: "59299 7",
	[FFuncionariosContaSalarioPix.Value762718604]: "76271860 4",
};

export const FFUNCIONARIOS_CURSO_LABELS: Record<FFuncionariosCurso, string> = {
	[FFuncionariosCurso.AdministraOUniplac]: "Administração Uniplac",
	[FFuncionariosCurso.CienciasDaComputaO]: "Ciencias Da Computação",
	[FFuncionariosCurso.CienciasDaComputaOFacvest]:
		"Ciencias Da Computação Facvest",
	[FFuncionariosCurso.DireitoUniplac]: "Direito Uniplac",
	[FFuncionariosCurso.EstruturaEGestODeRedesEComputadoresMbaProcessosGerenciaisEDataProtectionOfficerDpo]:
		"Estrutura E Gestão De Redes E Computadores, MBA Processos Gerenciais E Data Protection Officer Dpo.",
	[FFuncionariosCurso.Teste]: "Teste",
};

export const FFUNCIONARIOS_EMPRESA_LABELS: Record<
	FFuncionariosEmpresa,
	string
> = {
	[FFuncionariosEmpresa.Atplus]: "ATPlus",
	[FFuncionariosEmpresa.Platon]: "Platon",
};

export const FFUNCIONARIOS_ENDERECOCIDADE_LABELS: Record<
	FFuncionariosEnderecoCidade,
	string
> = {
	[FFuncionariosEnderecoCidade.Curitibanos]: "Curitibanos",
	[FFuncionariosEnderecoCidade.Lages]: "Lages",
};

export const FFUNCIONARIOS_ENDERECOCNPJ_LABELS: Record<
	FFuncionariosEnderecoCnpj,
	string
> = {
	[FFuncionariosEnderecoCnpj.RuaAristidesWaltrick13Copacabana88504020LagesSc]:
		"Rua Aristides Waltrick, 13, Copacabana 88504 020 Lages SC",
};

export const FFUNCIONARIOS_ENDERECOESTADO_LABELS: Record<
	FFuncionariosEnderecoEstado,
	string
> = {
	[FFuncionariosEnderecoEstado.Sc]: "SC",
};

export const FFUNCIONARIOS_ENDERECOREFERENCIA_LABELS: Record<
	FFuncionariosEnderecoReferencia,
	string
> = {
	[FFuncionariosEnderecoReferencia.CoqueirosNaFrente]: "Coqueiros Na Frente",
	[FFuncionariosEnderecoReferencia.Q15]: "Q 15",
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
	[FFuncionariosEscolaridade.EnsinoMDio]: "Ensino Médio",
	[FFuncionariosEscolaridade.Superior]: "Superior",
	[FFuncionariosEscolaridade.PSMba]: "Pós, MBA",
	[FFuncionariosEscolaridade.Mestrado]: "Mestrado",
	[FFuncionariosEscolaridade.Doutorado]: "Doutorado",
};

export const FFUNCIONARIOS_ESTADOCIVIL_LABELS: Record<
	FFuncionariosEstadoCivil,
	string
> = {
	[FFuncionariosEstadoCivil.Solteiro]: "Solteiro",
	[FFuncionariosEstadoCivil.Casado]: "Casado",
	[FFuncionariosEstadoCivil.UniOEstVel]: "União Estável",
	[FFuncionariosEstadoCivil.ViVo]: "Viúvo",
	[FFuncionariosEstadoCivil.Divorciado]: "Divorciado",
	[FFuncionariosEstadoCivil.Separado]: "Separado",
};

export const FFUNCIONARIOS_FKFUNCIONARIOS2_LABELS: Record<
	FFuncionariosFkFuncionarios2,
	string
> = {
	[FFuncionariosFkFuncionarios2.Value1]: "Ativo",
	[FFuncionariosFkFuncionarios2.Value11]: "Código 11",
	[FFuncionariosFkFuncionarios2.Value2]: "Código 2",
	[FFuncionariosFkFuncionarios2.Value3]: "Código 3",
	[FFuncionariosFkFuncionarios2.Value6]: "Código 6",
	[FFuncionariosFkFuncionarios2.Value7]: "Código 7",
	[FFuncionariosFkFuncionarios2.Value8]: "Código 8",
	[FFuncionariosFkFuncionarios2.Value9]: "Código 9",
};

export const FFUNCIONARIOS_FKSETOR_LABELS: Record<
	FFuncionariosFkSetor,
	string
> = {
	[FFuncionariosFkSetor.Value355511080845316]: "355511080845316",
	[FFuncionariosFkSetor.Value355511080845317]: "355511080845317",
	[FFuncionariosFkSetor.Value355511080845320]: "355511080845320",
	[FFuncionariosFkSetor.Value355511080845323]: "355511080845323",
};

export const FFUNCIONARIOS_FKTURNOS_LABELS: Record<
	FFuncionariosFkTurnos,
	string
> = {
	[FFuncionariosFkTurnos.Value349920463683585]: "349920463683585",
	[FFuncionariosFkTurnos.Value349920463683590]: "349920463683590",
};

export const FFUNCIONARIOS_GENERO_LABELS: Record<FFuncionariosGenero, string> =
	{
		[FFuncionariosGenero.Masculino]: "Masculino",
		[FFuncionariosGenero.Feminino]: "Feminino",
	};

export const FFUNCIONARIOS_MESNASCIMENTO_LABELS: Record<
	FFuncionariosMesNascimento,
	string
> = {
	[FFuncionariosMesNascimento.Value1]: "Ativo",
	[FFuncionariosMesNascimento.Value10]: "Código 10",
	[FFuncionariosMesNascimento.Value11]: "Código 11",
	[FFuncionariosMesNascimento.Value12]: "Código 12",
	[FFuncionariosMesNascimento.Value2]: "Código 2",
	[FFuncionariosMesNascimento.Value3]: "Código 3",
	[FFuncionariosMesNascimento.Value4]: "Código 4",
	[FFuncionariosMesNascimento.Value5]: "Código 5",
	[FFuncionariosMesNascimento.Value6]: "Código 6",
	[FFuncionariosMesNascimento.Value7]: "Código 7",
	[FFuncionariosMesNascimento.Value8]: "Código 8",
	[FFuncionariosMesNascimento.Value9]: "Código 9",
};

export const FFUNCIONARIOS_MOBILIDADE_LABELS: Record<
	FFuncionariosMobilidade,
	string
> = {
	[FFuncionariosMobilidade.ValeTransporteTransul]: "Vale Transporte (Transul)",
	[FFuncionariosMobilidade.MobilidadeCartOBenefCios]:
		"Mobilidade (Cartão Benefícios)",
};

export const FFUNCIONARIOS_NACIONALIDADE_LABELS: Record<
	FFuncionariosNacionalidade,
	string
> = {
	[FFuncionariosNacionalidade.Brasileira]: "Brasileira",
	[FFuncionariosNacionalidade.Brasileiro]: "Brasileiro",
};

export const FFUNCIONARIOS_NATURALIDADE_LABELS: Record<
	FFuncionariosNaturalidade,
	string
> = {
	[FFuncionariosNaturalidade.AlegreteRs]: "Alegrete/rs",
	[FFuncionariosNaturalidade.CamposNovos]: "Campos Novos",
	[FFuncionariosNaturalidade.CaxiasDoSulRs]: "Caxias Do Sul/rs",
	[FFuncionariosNaturalidade.CriciMa]: "Criciúma",
	[FFuncionariosNaturalidade.CuritibaPr]: "Curitiba/pr",
	[FFuncionariosNaturalidade.CuritibanosSc]: "Curitibanos/sc",
	[FFuncionariosNaturalidade.JoaAbaSc]: "Joaçaba/sc",
	[FFuncionariosNaturalidade.Lages]: "Lages",
	[FFuncionariosNaturalidade.LagesSc]: "Lages/sc",
	[FFuncionariosNaturalidade.OtacLioCostaSc]: "Otacílio Costa/sc",
	[FFuncionariosNaturalidade.PiraDoSulPr]: "Piraí Do Sul/pr",
	[FFuncionariosNaturalidade.RioDoSul]: "Rio Do Sul",
	[FFuncionariosNaturalidade.SaleteSc]: "Salete/sc",
	[FFuncionariosNaturalidade.SOLeopoldoRs]: "São Leopoldo/rs",
	[FFuncionariosNaturalidade.TaioSc]: "Taio/sc",
};

export const FFUNCIONARIOS_NOMECONTATOEMERGENCIA_LABELS: Record<
	FFuncionariosNomeContatoEmergencia,
	string
> = {
	[FFuncionariosNomeContatoEmergencia.Mateus]: "Mateus",
	[FFuncionariosNomeContatoEmergencia.RosaMachado]: "Rosa Machado",
};

export const FFUNCIONARIOS_ORGAOEXPEDIDOR_LABELS: Record<
	FFuncionariosOrgaoExpedidor,
	string
> = {
	[FFuncionariosOrgaoExpedidor.Ssp]: "SSP",
};

export const FFUNCIONARIOS_PCD_LABELS: Record<FFuncionariosPcd, string> = {
	[FFuncionariosPcd.Sim]: "Sim",
	[FFuncionariosPcd.NO]: "Não",
};

export const FFUNCIONARIOS_RAZAOSOCIAL_LABELS: Record<
	FFuncionariosRazaoSocial,
	string
> = {
	[FFuncionariosRazaoSocial.Value59556090MateusSalomaoDeBarrosNeto]:
		"59.556.090 Mateus Salomao De Barros Neto",
};

export const FFUNCIONARIOS_RESERVISTA_LABELS: Record<
	FFuncionariosReservista,
	string
> = {
	[FFuncionariosReservista.Sim]: "Sim",
	[FFuncionariosReservista.NO]: "Não",
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
	[FFuncionariosTerceiro.NO]: "Não",
};

export const FFUNCIONARIOS_TIPOCONTRATO_LABELS: Record<
	FFuncionariosTipoContrato,
	string
> = {
	[FFuncionariosTipoContrato.Clt]: "CLT",
	[FFuncionariosTipoContrato.PrestadorDeServiOs]: "Prestador de Serviços",
	[FFuncionariosTipoContrato.EstagiRio]: "Estagiário",
	[FFuncionariosTipoContrato.JovemAprendiz]: "Jovem Aprendiz",
	[FFuncionariosTipoContrato.SCio]: "Sócio",
	[FFuncionariosTipoContrato.TemporRio]: "Temporário",
	[FFuncionariosTipoContrato.CltComissO]: "CLT + Comissão",
};

export const FFUNCIONARIOS_TIPODEFICIENCIA_LABELS: Record<
	FFuncionariosTipoDeficiencia,
	string
> = {
	[FFuncionariosTipoDeficiencia.Tdah]: "TDAH",
	[FFuncionariosTipoDeficiencia.Tea]: "TEA",
	[FFuncionariosTipoDeficiencia.TeaCid116a020]: "Tea, CID 11 6a02.0",
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

export const FFUNCIONARIOS_VENCIMENTOCONTRATO_LABELS: Record<
	FFuncionariosVencimentoContrato,
	string
> = {
	[FFuncionariosVencimentoContrato.Value20171215t020000000z]:
		"2017 12 15t02:00:00.000z",
	[FFuncionariosVencimentoContrato.Value20271215t030000000z]:
		"2027 12 15t03:00:00.000z",
};

export const FFUNCIONARIOS_VINCULOCOMCOLABORADOR_LABELS: Record<
	FFuncionariosVinculoComColaborador,
	string
> = {
	[FFuncionariosVinculoComColaborador.Pais]: "Pais",
	[FFuncionariosVinculoComColaborador.FilhoAOuEnteadoA]:
		"Filho(a) ou Enteado(a)",
	[FFuncionariosVinculoComColaborador.AvS]: "Avós",
	[FFuncionariosVinculoComColaborador.Conjuge]: "Conjuge",
};

export const FFUNCIONARIOS_ZONAELEITORAL_LABELS: Record<
	FFuncionariosZonaEleitoral,
	string
> = {
	[FFuncionariosZonaEleitoral.Value100]: "100",
	[FFuncionariosZonaEleitoral.Value104]: "104",
	[FFuncionariosZonaEleitoral.Value11]: "Código 11",
	[FFuncionariosZonaEleitoral.Value169]: "169",
	[FFuncionariosZonaEleitoral.Value21]: "Código 21",
	[FFuncionariosZonaEleitoral.Value5]: "Código 5",
	[FFuncionariosZonaEleitoral.Value54]: "Código 54",
	[FFuncionariosZonaEleitoral.Value57]: "Código 57",
	[FFuncionariosZonaEleitoral.Value58]: "Código 58",
	[FFuncionariosZonaEleitoral.Value93]: "Código 93",
};

export interface FRecursosFilho {
	f_7q4zyk2d0kz: number;
	f_cn2m4i1kpqo: number;
}

export type FRecursosFilhoRelations = Record<string, never>;

export type FRecursosFilhoRelationKey = keyof FRecursosFilhoRelations;

export enum InterfacesEquipamentosFkEquipamentosInterfaces1 {
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
}

export interface InterfacesEquipamentos {
	f_fk_equipamentos_interfaces_1: InterfacesEquipamentosFkEquipamentosInterfaces1;
	f_fk_equipamentos_interfaces_2: number;
}

export type InterfacesEquipamentosRelations = Record<string, never>;

export type InterfacesEquipamentosRelationKey =
	keyof InterfacesEquipamentosRelations;

export const INTERFACESEQUIPAMENTOS_FKEQUIPAMENTOSINTERFACES1_LABELS: Record<
	InterfacesEquipamentosFkEquipamentosInterfaces1,
	string
> = {
	[InterfacesEquipamentosFkEquipamentosInterfaces1.Value2]: "Código 2",
	[InterfacesEquipamentosFkEquipamentosInterfaces1.Value3]: "Código 3",
	[InterfacesEquipamentosFkEquipamentosInterfaces1.Value4]: "Código 4",
	[InterfacesEquipamentosFkEquipamentosInterfaces1.Value5]: "Código 5",
};

export enum LinksIndicadoresUsuariosFkLinksUsuarios2 {
	Value1 = "1",
	Value32 = "32",
}

export interface LinksIndicadoresUsuarios {
	f_fk_links_usuarios_1: number;
	f_fk_links_usuarios_2: LinksIndicadoresUsuariosFkLinksUsuarios2;
}

export type LinksIndicadoresUsuariosRelations = Record<string, never>;

export type LinksIndicadoresUsuariosRelationKey =
	keyof LinksIndicadoresUsuariosRelations;

export const LINKSINDICADORESUSUARIOS_FKLINKSUSUARIOS2_LABELS: Record<
	LinksIndicadoresUsuariosFkLinksUsuarios2,
	string
> = {
	[LinksIndicadoresUsuariosFkLinksUsuarios2.Value1]: "Ativo",
	[LinksIndicadoresUsuariosFkLinksUsuarios2.Value32]: "Código 32",
};

export enum OrigemXTiposFkOrigemTipo1 {
	Value2 = "2",
	Value6 = "6",
}

export enum OrigemXTiposFkOrigemTipo2 {
	Value1 = "1",
	Value18 = "18",
}

export interface OrigemXTipos {
	f_fk_origem_tipo_1: OrigemXTiposFkOrigemTipo1;
	f_fk_origem_tipo_2: OrigemXTiposFkOrigemTipo2;
}

export type OrigemXTiposRelations = Record<string, never>;

export type OrigemXTiposRelationKey = keyof OrigemXTiposRelations;

export const ORIGEMXTIPOS_FKORIGEMTIPO1_LABELS: Record<
	OrigemXTiposFkOrigemTipo1,
	string
> = {
	[OrigemXTiposFkOrigemTipo1.Value2]: "Código 2",
	[OrigemXTiposFkOrigemTipo1.Value6]: "Código 6",
};

export const ORIGEMXTIPOS_FKORIGEMTIPO2_LABELS: Record<
	OrigemXTiposFkOrigemTipo2,
	string
> = {
	[OrigemXTiposFkOrigemTipo2.Value1]: "Ativo",
	[OrigemXTiposFkOrigemTipo2.Value18]: "Código 18",
};

export enum RolesAllowconfigure {
	True = "true",
}

export enum RolesAllownewmenu {
	False = "false",
	True = "true",
}

export enum RolesAllownewmobilemenu {
	False = "false",
	True = "true",
}

export enum RolesDefault {
	False = "false",
	True = "true",
}

export enum RolesHidden {
	False = "false",
	True = "true",
}

export enum RolesSnippets {
	AppPmPmUi = "!app,!pm,!pm.*,!ui.*",
	PmPmUi = "!pm,!pm.*,!ui.*",
}

export enum RolesStrategy {
	ObjectObject = "[object Object]",
}

export interface Roles {
	sort: number;
	allowConfigure: RolesAllowconfigure;
	allowNewMenu: RolesAllownewmenu;
	allowNewMobileMenu: RolesAllownewmobilemenu;
	default: RolesDefault;
	description: string;
	hidden: RolesHidden;
	name: string;
	snippets: RolesSnippets;
	strategy: RolesStrategy;
	title: string;
}

export interface RolesRelations {
	menuUiSchemas?: unknown[];
	mobileRoutes?: unknown[];
	resources?: unknown[];
	users?: Users[];
}

export type RolesRelationKey = keyof RolesRelations;

export const ROLES_ALLOWCONFIGURE_LABELS: Record<RolesAllowconfigure, string> =
	{
		[RolesAllowconfigure.True]: "Sim",
	};

export const ROLES_ALLOWNEWMENU_LABELS: Record<RolesAllownewmenu, string> = {
	[RolesAllownewmenu.False]: "Não",
	[RolesAllownewmenu.True]: "Sim",
};

export const ROLES_ALLOWNEWMOBILEMENU_LABELS: Record<
	RolesAllownewmobilemenu,
	string
> = {
	[RolesAllownewmobilemenu.False]: "Não",
	[RolesAllownewmobilemenu.True]: "Sim",
};

export const ROLES_DEFAULT_LABELS: Record<RolesDefault, string> = {
	[RolesDefault.False]: "Não",
	[RolesDefault.True]: "Sim",
};

export const ROLES_HIDDEN_LABELS: Record<RolesHidden, string> = {
	[RolesHidden.False]: "Não",
	[RolesHidden.True]: "Sim",
};

export const ROLES_SNIPPETS_LABELS: Record<RolesSnippets, string> = {
	[RolesSnippets.AppPmPmUi]: "!app,!pm,!pm.*,!ui.*",
	[RolesSnippets.PmPmUi]: "!pm,!pm.*,!ui.*",
};

export const ROLES_STRATEGY_LABELS: Record<RolesStrategy, string> = {
	[RolesStrategy.ObjectObject]: "[object Object]",
};

export enum _3advfk0gv0zFkInsumosServicos {
	Value21 = "21",
}

export enum _3advfk0gv0zFkServicosInsumos {
	Value34 = "34",
}

export interface _3advfk0gv0z {
	f_fk_insumos_servicos: _3advfk0gv0zFkInsumosServicos;
	f_fk_servicos_insumos: _3advfk0gv0zFkServicosInsumos;
}

export type _3advfk0gv0zRelations = Record<string, never>;

export type _3advfk0gv0zRelationKey = keyof _3advfk0gv0zRelations;

export const _3ADVFK0GV0Z_FKINSUMOSSERVICOS_LABELS: Record<
	_3advfk0gv0zFkInsumosServicos,
	string
> = {
	[_3advfk0gv0zFkInsumosServicos.Value21]: "Código 21",
};

export const _3ADVFK0GV0Z_FKSERVICOSINSUMOS_LABELS: Record<
	_3advfk0gv0zFkServicosInsumos,
	string
> = {
	[_3advfk0gv0zFkServicosInsumos.Value34]: "Código 34",
};

export enum _902ctke5dhqCreatedat {
	Value20260113t185057400z = "2026-01-13T18:50:57.400Z",
	Value20260113t185058894z = "2026-01-13T18:50:58.894Z",
}

export enum _902ctke5dhqId {
	Value342478045446144 = "342478045446144",
	Value342478047543298 = "342478047543298",
}

export enum _902ctke5dhqUpdatedat {
	Value20260113t185057400z = "2026-01-13T18:50:57.400Z",
	Value20260113t185058894z = "2026-01-13T18:50:58.894Z",
}

export interface _902ctke5dhq {
	id: _902ctke5dhqId;
	updatedAt: _902ctke5dhqUpdatedat;
	createdAt: _902ctke5dhqCreatedat;
}

export interface _902ctke5dhqRelations {
	createdBy?: Users | null;
	f_bmu9tsi11d4?: P10scfhrhkw | null;
	updatedBy?: Users | null;
}

export type _902ctke5dhqRelationKey = keyof _902ctke5dhqRelations;

export const _902CTKE5DHQ_CREATEDAT_LABELS: Record<
	_902ctke5dhqCreatedat,
	string
> = {
	[_902ctke5dhqCreatedat.Value20260113t185057400z]: "2026 01 13t18:50:57.400z",
	[_902ctke5dhqCreatedat.Value20260113t185058894z]: "2026 01 13t18:50:58.894z",
};

export const _902CTKE5DHQ_ID_LABELS: Record<_902ctke5dhqId, string> = {
	[_902ctke5dhqId.Value342478045446144]: "342478045446144",
	[_902ctke5dhqId.Value342478047543298]: "342478047543298",
};

export const _902CTKE5DHQ_UPDATEDAT_LABELS: Record<
	_902ctke5dhqUpdatedat,
	string
> = {
	[_902ctke5dhqUpdatedat.Value20260113t185057400z]: "2026 01 13t18:50:57.400z",
	[_902ctke5dhqUpdatedat.Value20260113t185058894z]: "2026 01 13t18:50:58.894z",
};

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

export enum AegisNotas {
	EntrarEmContatoViaLigaOApSOHorRioComercial49991097407 = "Entrar em contato via ligação após o horário comercial\n\n(49) 99109-7407",
	LigarAs8h = "Ligar as 8h.",
	Teste = "teste",
	TesteMateus = "Teste Mateus",
}

export enum AegisNotasCliente {
	Value246363 = "246363",
	CentroDeFormaO = "CENTRO DE FORMAÇÃO",
	Lgs = "LGS",
	Psa = "PSA",
	RubiaAndreaCitadin = "RUBIA ANDREA CITADIN",
}

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
	f_notas: AegisNotas;
	f_notas_cliente: AegisNotasCliente;
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

export const AEGIS_NOTAS_LABELS: Record<AegisNotas, string> = {
	[AegisNotas.EntrarEmContatoViaLigaOApSOHorRioComercial49991097407]:
		"Entrar Em Contato Via Ligação Após O Horário Comercial (49) 99109 7407",
	[AegisNotas.LigarAs8h]: "Ligar As 8h.",
	[AegisNotas.Teste]: "Teste",
	[AegisNotas.TesteMateus]: "Teste Mateus",
};

export const AEGIS_NOTASCLIENTE_LABELS: Record<AegisNotasCliente, string> = {
	[AegisNotasCliente.Value246363]: "246363",
	[AegisNotasCliente.CentroDeFormaO]: "Centro DE Formação",
	[AegisNotasCliente.Lgs]: "LGS",
	[AegisNotasCliente.Psa]: "PSA",
	[AegisNotasCliente.RubiaAndreaCitadin]: "Rubia Andrea Citadin",
};

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

export enum AnexosNegociacoesExtname {
	Html = ".html",
	Jfif = ".jfif",
	Jpeg = ".jpeg",
	Jpg = ".jpg",
	Mp4 = ".mp4",
	Pdf = ".pdf",
	PdfFilename = ".pdf-filename_=",
	Png = ".png",
}

export enum AnexosNegociacoesMeta {
	ObjectObject = "[object Object]",
}

export enum AnexosNegociacoesMimetype {
	ApplicationOctetStream = "application/octet-stream",
	ApplicationPdf = "application/pdf",
	ImageJpeg = "image/jpeg",
	ImagePng = "image/png",
	TextHtml = "text/html",
	VideoMp4 = "video/mp4",
}

export enum AnexosNegociacoesStorageid {
	Value1 = "1",
}

export interface AnexosNegociacoes {
	id: number;
	extname: AnexosNegociacoesExtname;
	f_anexos_fk: number;
	filename: string;
	meta: AnexosNegociacoesMeta;
	mimetype: AnexosNegociacoesMimetype;
	path: string;
	preview: string;
	size: number;
	storageId: AnexosNegociacoesStorageid;
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

export const ANEXOSNEGOCIACOES_EXTNAME_LABELS: Record<
	AnexosNegociacoesExtname,
	string
> = {
	[AnexosNegociacoesExtname.Html]: ".html",
	[AnexosNegociacoesExtname.Jfif]: ".jfif",
	[AnexosNegociacoesExtname.Jpeg]: ".jpeg",
	[AnexosNegociacoesExtname.Jpg]: ".jpg",
	[AnexosNegociacoesExtname.Mp4]: ".mp4",
	[AnexosNegociacoesExtname.Pdf]: ".pdf",
	[AnexosNegociacoesExtname.PdfFilename]: ".pdf Filename =",
	[AnexosNegociacoesExtname.Png]: ".png",
};

export const ANEXOSNEGOCIACOES_META_LABELS: Record<
	AnexosNegociacoesMeta,
	string
> = {
	[AnexosNegociacoesMeta.ObjectObject]: "[object Object]",
};

export const ANEXOSNEGOCIACOES_MIMETYPE_LABELS: Record<
	AnexosNegociacoesMimetype,
	string
> = {
	[AnexosNegociacoesMimetype.ApplicationOctetStream]:
		"Application/octet Stream",
	[AnexosNegociacoesMimetype.ApplicationPdf]: "Application/pdf",
	[AnexosNegociacoesMimetype.ImageJpeg]: "Image/jpeg",
	[AnexosNegociacoesMimetype.ImagePng]: "Image/png",
	[AnexosNegociacoesMimetype.TextHtml]: "Text/html",
	[AnexosNegociacoesMimetype.VideoMp4]: "Video/mp4",
};

export const ANEXOSNEGOCIACOES_STORAGEID_LABELS: Record<
	AnexosNegociacoesStorageid,
	string
> = {
	[AnexosNegociacoesStorageid.Value1]: "Ativo",
};

export enum AnexosTrocaTitularidadeExtname {
	HtmlFilename = ".html-filename_=",
	Jpeg = ".jpeg",
	Jpg = ".jpg",
	Pdf = ".pdf",
	PdfFilename = ".pdf-filename_=",
	Png = ".png",
}

export enum AnexosTrocaTitularidadeMeta {
	ObjectObject = "[object Object]",
}

export enum AnexosTrocaTitularidadeMimetype {
	ApplicationOctetStream = "application/octet-stream",
	ApplicationPdf = "application/pdf",
	ImageJpeg = "image/jpeg",
	ImagePng = "image/png",
}

export enum AnexosTrocaTitularidadeStorageid {
	Value1 = "1",
}

export interface AnexosTrocaTitularidade {
	id: number;
	extname: AnexosTrocaTitularidadeExtname;
	f_anexos_fk: number;
	filename: string;
	meta: AnexosTrocaTitularidadeMeta;
	mimetype: AnexosTrocaTitularidadeMimetype;
	path: string;
	preview: string;
	size: number;
	storageId: AnexosTrocaTitularidadeStorageid;
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

export const ANEXOSTROCATITULARIDADE_EXTNAME_LABELS: Record<
	AnexosTrocaTitularidadeExtname,
	string
> = {
	[AnexosTrocaTitularidadeExtname.HtmlFilename]: ".html Filename =",
	[AnexosTrocaTitularidadeExtname.Jpeg]: ".jpeg",
	[AnexosTrocaTitularidadeExtname.Jpg]: ".jpg",
	[AnexosTrocaTitularidadeExtname.Pdf]: ".pdf",
	[AnexosTrocaTitularidadeExtname.PdfFilename]: ".pdf Filename =",
	[AnexosTrocaTitularidadeExtname.Png]: ".png",
};

export const ANEXOSTROCATITULARIDADE_META_LABELS: Record<
	AnexosTrocaTitularidadeMeta,
	string
> = {
	[AnexosTrocaTitularidadeMeta.ObjectObject]: "[object Object]",
};

export const ANEXOSTROCATITULARIDADE_MIMETYPE_LABELS: Record<
	AnexosTrocaTitularidadeMimetype,
	string
> = {
	[AnexosTrocaTitularidadeMimetype.ApplicationOctetStream]:
		"Application/octet Stream",
	[AnexosTrocaTitularidadeMimetype.ApplicationPdf]: "Application/pdf",
	[AnexosTrocaTitularidadeMimetype.ImageJpeg]: "Image/jpeg",
	[AnexosTrocaTitularidadeMimetype.ImagePng]: "Image/png",
};

export const ANEXOSTROCATITULARIDADE_STORAGEID_LABELS: Record<
	AnexosTrocaTitularidadeStorageid,
	string
> = {
	[AnexosTrocaTitularidadeStorageid.Value1]: "Ativo",
};

export enum AniversariosCreatedat {
	Value20260414t141848484z = "2026-04-14T14:18:48.484Z",
	Value20260414t141848686z = "2026-04-14T14:18:48.686Z",
}

export enum AniversariosDataExecucao {
	Value20260418 = "2026-04-18",
	Value20270213 = "2027-02-13",
}

export enum AniversariosDiaMes {
	Value1302 = "13/02",
	Value1804 = "18/04",
}

export enum AniversariosFkFuncionarios {
	Value8 = "8",
	Value83 = "83",
}

export enum AniversariosStatus {
	Novo = "novo",
	EmProcesso = "em-processo",
	Concluido = "concluido",
	Erro = "erro",
}

export enum AniversariosId {
	Value358932448018432 = "358932448018432",
	Value358932448018434 = "358932448018434",
}

export enum AniversariosUpdatedat {
	Value20260414t141848484z = "2026-04-14T14:18:48.484Z",
	Value20260414t141848686z = "2026-04-14T14:18:48.686Z",
}

export interface Aniversarios {
	id: AniversariosId;
	f_fk_funcionarios: AniversariosFkFuncionarios;
	f_data_execucao: AniversariosDataExecucao;
	f_dia_mes: AniversariosDiaMes;
	f_status: AniversariosStatus;
	updatedAt: AniversariosUpdatedat;
	createdAt: AniversariosCreatedat;
}

export interface AniversariosRelations {
	createdBy?: Users | null;
	f_foto_aniversario?: FotoAniversario | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type AniversariosRelationKey = keyof AniversariosRelations;

export const ANIVERSARIOS_CREATEDAT_LABELS: Record<
	AniversariosCreatedat,
	string
> = {
	[AniversariosCreatedat.Value20260414t141848484z]: "2026 04 14t14:18:48.484z",
	[AniversariosCreatedat.Value20260414t141848686z]: "2026 04 14t14:18:48.686z",
};

export const ANIVERSARIOS_DATAEXECUCAO_LABELS: Record<
	AniversariosDataExecucao,
	string
> = {
	[AniversariosDataExecucao.Value20260418]: "2026 04 18",
	[AniversariosDataExecucao.Value20270213]: "2027 02 13",
};

export const ANIVERSARIOS_DIAMES_LABELS: Record<AniversariosDiaMes, string> = {
	[AniversariosDiaMes.Value1302]: "13/02",
	[AniversariosDiaMes.Value1804]: "18/04",
};

export const ANIVERSARIOS_FKFUNCIONARIOS_LABELS: Record<
	AniversariosFkFuncionarios,
	string
> = {
	[AniversariosFkFuncionarios.Value8]: "Código 8",
	[AniversariosFkFuncionarios.Value83]: "Código 83",
};

export const ANIVERSARIOS_STATUS_LABELS: Record<AniversariosStatus, string> = {
	[AniversariosStatus.Novo]: "Novo",
	[AniversariosStatus.EmProcesso]: "Em processo",
	[AniversariosStatus.Concluido]: "Concluído",
	[AniversariosStatus.Erro]: "Erro",
};

export const ANIVERSARIOS_ID_LABELS: Record<AniversariosId, string> = {
	[AniversariosId.Value358932448018432]: "358932448018432",
	[AniversariosId.Value358932448018434]: "358932448018434",
};

export const ANIVERSARIOS_UPDATEDAT_LABELS: Record<
	AniversariosUpdatedat,
	string
> = {
	[AniversariosUpdatedat.Value20260414t141848484z]: "2026 04 14t14:18:48.484z",
	[AniversariosUpdatedat.Value20260414t141848686z]: "2026 04 14t14:18:48.686z",
};

export enum ArquivosFuncionariosExtname {
	Jpg = ".jpg",
	Png = ".png",
}

export enum ArquivosFuncionariosFkInfoArquivos {
	Value357470340907008 = "357470340907008",
	Value357470340907009 = "357470340907009",
	Value357470340907010 = "357470340907010",
	Value357470340907011 = "357470340907011",
}

export enum ArquivosFuncionariosMeta {
	ObjectObject = "[object Object]",
}

export enum ArquivosFuncionariosMimetype {
	ImageJpeg = "image/jpeg",
	ImagePng = "image/png",
}

export enum ArquivosFuncionariosSize {
	Value1047315 = "1047315",
	Value16183 = "16183",
	Value6901217 = "6901217",
	Value86921 = "86921",
}

export interface ArquivosFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	f_fk_info_arquivos: ArquivosFuncionariosFkInfoArquivos;
	extname: ArquivosFuncionariosExtname;
	filename: string;
	meta: ArquivosFuncionariosMeta;
	mimetype: ArquivosFuncionariosMimetype;
	path: string;
	preview: string;
	size: ArquivosFuncionariosSize;
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

export const ARQUIVOSFUNCIONARIOS_EXTNAME_LABELS: Record<
	ArquivosFuncionariosExtname,
	string
> = {
	[ArquivosFuncionariosExtname.Jpg]: ".jpg",
	[ArquivosFuncionariosExtname.Png]: ".png",
};

export const ARQUIVOSFUNCIONARIOS_FKINFOARQUIVOS_LABELS: Record<
	ArquivosFuncionariosFkInfoArquivos,
	string
> = {
	[ArquivosFuncionariosFkInfoArquivos.Value357470340907008]: "357470340907008",
	[ArquivosFuncionariosFkInfoArquivos.Value357470340907009]: "357470340907009",
	[ArquivosFuncionariosFkInfoArquivos.Value357470340907010]: "357470340907010",
	[ArquivosFuncionariosFkInfoArquivos.Value357470340907011]: "357470340907011",
};

export const ARQUIVOSFUNCIONARIOS_META_LABELS: Record<
	ArquivosFuncionariosMeta,
	string
> = {
	[ArquivosFuncionariosMeta.ObjectObject]: "[object Object]",
};

export const ARQUIVOSFUNCIONARIOS_MIMETYPE_LABELS: Record<
	ArquivosFuncionariosMimetype,
	string
> = {
	[ArquivosFuncionariosMimetype.ImageJpeg]: "Image/jpeg",
	[ArquivosFuncionariosMimetype.ImagePng]: "Image/png",
};

export const ARQUIVOSFUNCIONARIOS_SIZE_LABELS: Record<
	ArquivosFuncionariosSize,
	string
> = {
	[ArquivosFuncionariosSize.Value1047315]: "1047315",
	[ArquivosFuncionariosSize.Value16183]: "16183",
	[ArquivosFuncionariosSize.Value6901217]: "6901217",
	[ArquivosFuncionariosSize.Value86921]: "86921",
};

export enum AsosExtname {
	Jfif = ".jfif",
	Jpeg = ".jpeg",
	Pdf = ".pdf",
}

export enum AsosMeta {
	ObjectObject = "[object Object]",
}

export enum AsosMimetype {
	ApplicationPdf = "application/pdf",
	ImageJpeg = "image/jpeg",
}

export interface Asos {
	id: number;
	f_fk_funcionarios: number;
	f_fk_infos_aso: number;
	extname: AsosExtname;
	filename: string;
	meta: AsosMeta;
	mimetype: AsosMimetype;
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

export const ASOS_EXTNAME_LABELS: Record<AsosExtname, string> = {
	[AsosExtname.Jfif]: ".jfif",
	[AsosExtname.Jpeg]: ".jpeg",
	[AsosExtname.Pdf]: ".pdf",
};

export const ASOS_META_LABELS: Record<AsosMeta, string> = {
	[AsosMeta.ObjectObject]: "[object Object]",
};

export const ASOS_MIMETYPE_LABELS: Record<AsosMimetype, string> = {
	[AsosMimetype.ApplicationPdf]: "Application/pdf",
	[AsosMimetype.ImageJpeg]: "Image/jpeg",
};

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

export enum AuditoriaAutomaticaConferencia {
	True = "true",
}

export enum AuditoriaAutomaticaIdNegociacao {
	Value7152 = "7152",
}

export enum AuditoriaAutomaticaValorMensal {
	Value1079 = "107.9",
	Value1179 = "117.9",
	Value1299 = "129.9",
	Value1379 = "137.9",
	Value1778 = "177.8",
	Value999 = "99.9",
}

export interface AuditoriaAutomatica {
	id: number;
	f_conferencia: AuditoriaAutomaticaConferencia;
	f_id_negociacao: AuditoriaAutomaticaIdNegociacao;
	f_titulo_negociacao: string;
	f_valor_mensal: AuditoriaAutomaticaValorMensal;
	updatedAt: string;
	createdAt: string;
}

export interface AuditoriaAutomaticaRelations {
	createdBy?: Users | null;
	f_negociacoes?: Negociacoes | null;
	updatedBy?: Users | null;
}

export type AuditoriaAutomaticaRelationKey = keyof AuditoriaAutomaticaRelations;

export const AUDITORIAAUTOMATICA_CONFERENCIA_LABELS: Record<
	AuditoriaAutomaticaConferencia,
	string
> = {
	[AuditoriaAutomaticaConferencia.True]: "Sim",
};

export const AUDITORIAAUTOMATICA_IDNEGOCIACAO_LABELS: Record<
	AuditoriaAutomaticaIdNegociacao,
	string
> = {
	[AuditoriaAutomaticaIdNegociacao.Value7152]: "7152",
};

export const AUDITORIAAUTOMATICA_VALORMENSAL_LABELS: Record<
	AuditoriaAutomaticaValorMensal,
	string
> = {
	[AuditoriaAutomaticaValorMensal.Value1079]: "107.9",
	[AuditoriaAutomaticaValorMensal.Value1179]: "117.9",
	[AuditoriaAutomaticaValorMensal.Value1299]: "129.9",
	[AuditoriaAutomaticaValorMensal.Value1379]: "137.9",
	[AuditoriaAutomaticaValorMensal.Value1778]: "177.8",
	[AuditoriaAutomaticaValorMensal.Value999]: "99.9",
};

export enum CargosCreatedat {
	Value20251104t193252015z = "2025-11-04T19:32:52.015Z",
	Value20251114t200042493z = "2025-11-14T20:00:42.493Z",
	Value20260320t195054109z = "2026-03-20T19:50:54.109Z",
}

export enum CargosCbo {
	Value142205GerenteDeRecursosHumanos = "142205 - Gerente de recursos humanos",
	Value142505GerenteDeRede = "142505 - Gerente de rede",
	Value212410AnalistaDeRedesEDeComunicaODeDados = "212410 - Analista de redes e de comunicação de dados",
	Value212420AnalistaDeSuporteComputacional = "212420 - Analista de suporte computacional",
	Value252105Administrador = "252105 - Administrador",
	Value252405AnalistaDeRecursosHumanos = "252405 - Analista de recursos humanos",
	Value252545AnalistaFinanceiroInstituiEsFinanceiras = "252545 - Analista financeiro (instituições financeiras)",
	Value313310TCnicoDeRedeTelecomunicaEs = "313310 - Técnico de rede (telecomunicações)",
	Value317105ProgramadorDeInternet = "317105 - Programador de internet",
	Value317210TCnicoDeApoioAoUsuRioDeInformTicaHelpdesk = "317210 - Técnico de apoio ao usuário de informática (helpdesk)",
	Value354125AssistenteDeVendas = "354125 - Assistente de vendas",
	Value391145AnalistaDeControleTCnicoDeManutenO = "391145 - Analista de controle técnico de manutenção",
	Value411010AssistenteAdministrativo = "411010 - Assistente administrativo",
	Value414105Almoxarife = "414105 - Almoxarife",
	Value514320Faxineiro = "514320 - Faxineiro",
	Value521110VendedorDeComRcioVarejista = "521110 - Vendedor de comércio varejista",
	Value524105VendedorEmDomicLio = "524105 - Vendedor em domicílio",
	Value732130InstaladorReparadorDeRedesTelefNicasEDeComunicaODeDados = "732130 - Instalador-reparador de redes telefônicas e de comunicação de dados",
}

export enum CargosFkFuncionarios {
	Value1 = "1",
	Value15 = "15",
	Value17 = "17",
}

export interface Cargos {
	id: number;
	f_fk_funcionarios: CargosFkFuncionarios;
	f_atividades: string;
	f_cbo: CargosCbo;
	f_descricao: string;
	f_nome: string;
	updatedAt: string;
	createdAt: CargosCreatedat;
}

export interface CargosRelations {
	createdBy?: Users | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type CargosRelationKey = keyof CargosRelations;

export const CARGOS_CREATEDAT_LABELS: Record<CargosCreatedat, string> = {
	[CargosCreatedat.Value20251104t193252015z]: "2025 11 04t19:32:52.015z",
	[CargosCreatedat.Value20251114t200042493z]: "2025 11 14t20:00:42.493z",
	[CargosCreatedat.Value20260320t195054109z]: "2026 03 20t19:50:54.109z",
};

export const CARGOS_CBO_LABELS: Record<CargosCbo, string> = {
	[CargosCbo.Value142205GerenteDeRecursosHumanos]:
		"142205 Gerente De Recursos Humanos",
	[CargosCbo.Value142505GerenteDeRede]: "142505 Gerente De Rede",
	[CargosCbo.Value212410AnalistaDeRedesEDeComunicaODeDados]:
		"212410 Analista De Redes E De Comunicação De Dados",
	[CargosCbo.Value212420AnalistaDeSuporteComputacional]:
		"212420 Analista De Suporte Computacional",
	[CargosCbo.Value252105Administrador]: "252105 Administrador",
	[CargosCbo.Value252405AnalistaDeRecursosHumanos]:
		"252405 Analista De Recursos Humanos",
	[CargosCbo.Value252545AnalistaFinanceiroInstituiEsFinanceiras]:
		"252545 Analista Financeiro (instituições Financeiras)",
	[CargosCbo.Value313310TCnicoDeRedeTelecomunicaEs]:
		"313310 Técnico De Rede (telecomunicações)",
	[CargosCbo.Value317105ProgramadorDeInternet]:
		"317105 Programador De Internet",
	[CargosCbo.Value317210TCnicoDeApoioAoUsuRioDeInformTicaHelpdesk]:
		"317210 Técnico De Apoio Ao Usuário De Informática (helpdesk)",
	[CargosCbo.Value354125AssistenteDeVendas]: "354125 Assistente De Vendas",
	[CargosCbo.Value391145AnalistaDeControleTCnicoDeManutenO]:
		"391145 Analista De Controle Técnico De Manutenção",
	[CargosCbo.Value411010AssistenteAdministrativo]:
		"411010 Assistente Administrativo",
	[CargosCbo.Value414105Almoxarife]: "414105 Almoxarife",
	[CargosCbo.Value514320Faxineiro]: "514320 Faxineiro",
	[CargosCbo.Value521110VendedorDeComRcioVarejista]:
		"521110 Vendedor De Comércio Varejista",
	[CargosCbo.Value524105VendedorEmDomicLio]: "524105 Vendedor Em Domicílio",
	[CargosCbo.Value732130InstaladorReparadorDeRedesTelefNicasEDeComunicaODeDados]:
		"732130 Instalador Reparador De Redes Telefônicas E De Comunicação De Dados",
};

export const CARGOS_FKFUNCIONARIOS_LABELS: Record<
	CargosFkFuncionarios,
	string
> = {
	[CargosFkFuncionarios.Value1]: "Ativo",
	[CargosFkFuncionarios.Value15]: "Código 15",
	[CargosFkFuncionarios.Value17]: "Código 17",
};

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

export enum ConsultasPjCreatedat {
	Value20260417t172714839z = "2026-04-17T17:27:14.839Z",
	Value20260417t182353695z = "2026-04-17T18:23:53.695Z",
}

export enum ConsultasPjJustificativa {
	ScoreInicial1000TotalDeAjustes0ScoreFinal1000ResultadoAprovadoLimiar500 = "Score inicial 1000. Total de ajustes: 0. Score final: 1000. Resultado: APROVADO (limiar: 500).",
}

export enum ConsultasPjStatusConsulta {
	Value1 = "1",
	Value2 = "2",
	Value9 = "9",
}

export enum ConsultasPjId {
	Value359499740217344 = "359499740217344",
	Value359506868436994 = "359506868436994",
}

export enum ConsultasPjUpdatedat {
	Value20260417t182348504z = "2026-04-17T18:23:48.504Z",
	Value20260417t204407283z = "2026-04-17T20:44:07.283Z",
}

export interface ConsultasPj {
	id: ConsultasPjId;
	f_id_pessoa_fk: number;
	f_justificativa: ConsultasPjJustificativa;
	f_retorno_spc: string;
	f_status_consulta: ConsultasPjStatusConsulta;
	updatedAt: ConsultasPjUpdatedat;
	createdAt: ConsultasPjCreatedat;
}

export interface ConsultasPjRelations {
	createdBy?: Users | null;
	f_id_pessoa?: Empresas | null;
	updatedBy?: Users | null;
}

export type ConsultasPjRelationKey = keyof ConsultasPjRelations;

export const CONSULTASPJ_CREATEDAT_LABELS: Record<
	ConsultasPjCreatedat,
	string
> = {
	[ConsultasPjCreatedat.Value20260417t172714839z]: "2026 04 17t17:27:14.839z",
	[ConsultasPjCreatedat.Value20260417t182353695z]: "2026 04 17t18:23:53.695z",
};

export const CONSULTASPJ_JUSTIFICATIVA_LABELS: Record<
	ConsultasPjJustificativa,
	string
> = {
	[ConsultasPjJustificativa.ScoreInicial1000TotalDeAjustes0ScoreFinal1000ResultadoAprovadoLimiar500]:
		"Score Inicial 1000. Total De Ajustes: 0. Score Final: 1000. Resultado: Aprovado (limiar: 500).",
};

export const CONSULTASPJ_STATUSCONSULTA_LABELS: Record<
	ConsultasPjStatusConsulta,
	string
> = {
	[ConsultasPjStatusConsulta.Value1]: "Aprovado",
	[ConsultasPjStatusConsulta.Value2]: "Aprovado com Alertas",
	[ConsultasPjStatusConsulta.Value9]: "Negado",
};

export const CONSULTASPJ_ID_LABELS: Record<ConsultasPjId, string> = {
	[ConsultasPjId.Value359499740217344]: "359499740217344",
	[ConsultasPjId.Value359506868436994]: "359506868436994",
};

export const CONSULTASPJ_UPDATEDAT_LABELS: Record<
	ConsultasPjUpdatedat,
	string
> = {
	[ConsultasPjUpdatedat.Value20260417t182348504z]: "2026 04 17t18:23:48.504z",
	[ConsultasPjUpdatedat.Value20260417t204407283z]: "2026 04 17t20:44:07.283z",
};

export enum ContratoIxcItensCreatedat {
	Value20250315t204506335z = "2025-03-15T20:45:06.335Z",
}

export enum ContratoIxcItensMensalidade {
	String = "string",
}

export enum ContratoIxcItensProduto {
	String = "string",
}

export enum ContratoIxcItensQuantidade {
	String = "string",
}

export enum ContratoIxcItensId {
	Value1 = "1",
}

export enum ContratoIxcItensUpdatedat {
	Value20250315t204506335z = "2025-03-15T20:45:06.335Z",
}

export interface ContratoIxcItens {
	id: ContratoIxcItensId;
	f_fk_itens_contrato_ixc: number;
	f_id_produto_contrato_ixc: string;
	f_mensalidade: ContratoIxcItensMensalidade;
	f_produto: ContratoIxcItensProduto;
	f_quantidade: ContratoIxcItensQuantidade;
	updatedAt: ContratoIxcItensUpdatedat;
	createdAt: ContratoIxcItensCreatedat;
}

export interface ContratoIxcItensRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ContratoIxcItensRelationKey = keyof ContratoIxcItensRelations;

export const CONTRATOIXCITENS_CREATEDAT_LABELS: Record<
	ContratoIxcItensCreatedat,
	string
> = {
	[ContratoIxcItensCreatedat.Value20250315t204506335z]:
		"2025 03 15t20:45:06.335z",
};

export const CONTRATOIXCITENS_MENSALIDADE_LABELS: Record<
	ContratoIxcItensMensalidade,
	string
> = {
	[ContratoIxcItensMensalidade.String]: "String",
};

export const CONTRATOIXCITENS_PRODUTO_LABELS: Record<
	ContratoIxcItensProduto,
	string
> = {
	[ContratoIxcItensProduto.String]: "String",
};

export const CONTRATOIXCITENS_QUANTIDADE_LABELS: Record<
	ContratoIxcItensQuantidade,
	string
> = {
	[ContratoIxcItensQuantidade.String]: "String",
};

export const CONTRATOIXCITENS_ID_LABELS: Record<ContratoIxcItensId, string> = {
	[ContratoIxcItensId.Value1]: "Ativo",
};

export const CONTRATOIXCITENS_UPDATEDAT_LABELS: Record<
	ContratoIxcItensUpdatedat,
	string
> = {
	[ContratoIxcItensUpdatedat.Value20250315t204506335z]:
		"2025 03 15t20:45:06.335z",
};

export enum ContratosExtname {
	Pdf = ".pdf",
}

export enum ContratosMeta {
	ObjectObject = "[object Object]",
}

export enum ContratosMimetype {
	ApplicationPdf = "application/pdf",
}

export enum ContratosStorageid {
	Value1 = "1",
}

export interface Contratos {
	id: number;
	f_fk_negociacao_contrato: number;
	f_fk_suspensao: number;
	extname: ContratosExtname;
	filename: string;
	meta: ContratosMeta;
	mimetype: ContratosMimetype;
	path: string;
	preview: string;
	size: number;
	storageId: ContratosStorageid;
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

export const CONTRATOS_EXTNAME_LABELS: Record<ContratosExtname, string> = {
	[ContratosExtname.Pdf]: ".pdf",
};

export const CONTRATOS_META_LABELS: Record<ContratosMeta, string> = {
	[ContratosMeta.ObjectObject]: "[object Object]",
};

export const CONTRATOS_MIMETYPE_LABELS: Record<ContratosMimetype, string> = {
	[ContratosMimetype.ApplicationPdf]: "Application/pdf",
};

export const CONTRATOS_STORAGEID_LABELS: Record<ContratosStorageid, string> = {
	[ContratosStorageid.Value1]: "Ativo",
};

export enum ContratosIxcCreatedat {
	Value20250315t194534412z = "2025-03-15T19:45:34.412Z",
	Value20250316t152900948z = "2025-03-16T15:29:00.948Z",
	Value20250317t190348417z = "2025-03-17T19:03:48.417Z",
	Value20250317t190947913z = "2025-03-17T19:09:47.913Z",
	Value20250326t201330062z = "2025-03-26T20:13:30.062Z",
}

export enum ContratosIxcId {
	Value1 = "1",
	Value14588 = "14588",
	Value17416 = "17416",
	Value17566 = "17566",
	Value2 = "2",
}

export enum ContratosIxcUpdatedat {
	Value20250315t194534412z = "2025-03-15T19:45:34.412Z",
	Value20250316t152900948z = "2025-03-16T15:29:00.948Z",
	Value20250317t190348417z = "2025-03-17T19:03:48.417Z",
	Value20250317t190947913z = "2025-03-17T19:09:47.913Z",
	Value20250326t201330062z = "2025-03-26T20:13:30.062Z",
}

export interface ContratosIxc {
	id: ContratosIxcId;
	f_descricao: string;
	f_expiracao: string;
	f_vencimento: string;
	updatedAt: ContratosIxcUpdatedat;
	createdAt: ContratosIxcCreatedat;
}

export interface ContratosIxcRelations {
	createdBy?: Users | null;
	f_itens_contrato?: ContratoIxcItens[];
	updatedBy?: Users | null;
}

export type ContratosIxcRelationKey = keyof ContratosIxcRelations;

export const CONTRATOSIXC_CREATEDAT_LABELS: Record<
	ContratosIxcCreatedat,
	string
> = {
	[ContratosIxcCreatedat.Value20250315t194534412z]: "2025 03 15t19:45:34.412z",
	[ContratosIxcCreatedat.Value20250316t152900948z]: "2025 03 16t15:29:00.948z",
	[ContratosIxcCreatedat.Value20250317t190348417z]: "2025 03 17t19:03:48.417z",
	[ContratosIxcCreatedat.Value20250317t190947913z]: "2025 03 17t19:09:47.913z",
	[ContratosIxcCreatedat.Value20250326t201330062z]: "2025 03 26t20:13:30.062z",
};

export const CONTRATOSIXC_ID_LABELS: Record<ContratosIxcId, string> = {
	[ContratosIxcId.Value1]: "Ativo",
	[ContratosIxcId.Value14588]: "14588",
	[ContratosIxcId.Value17416]: "17416",
	[ContratosIxcId.Value17566]: "17566",
	[ContratosIxcId.Value2]: "Código 2",
};

export const CONTRATOSIXC_UPDATEDAT_LABELS: Record<
	ContratosIxcUpdatedat,
	string
> = {
	[ContratosIxcUpdatedat.Value20250315t194534412z]: "2025 03 15t19:45:34.412z",
	[ContratosIxcUpdatedat.Value20250316t152900948z]: "2025 03 16t15:29:00.948z",
	[ContratosIxcUpdatedat.Value20250317t190348417z]: "2025 03 17t19:03:48.417z",
	[ContratosIxcUpdatedat.Value20250317t190947913z]: "2025 03 17t19:09:47.913z",
	[ContratosIxcUpdatedat.Value20250326t201330062z]: "2025 03 26t20:13:30.062z",
};

export enum CuponsDescontoCep {
	Value88502325 = "88502325",
	Value88509518 = "88509518",
	Value88519400 = "88519400",
	Value88519540 = "88519540",
}

export enum CuponsDescontoDataFim {
	Value20260131 = "2026-01-31",
	Value20260228 = "2026-02-28",
	Value20260430 = "2026-04-30",
	Value20260831 = "2026-08-31",
	Value20261231 = "2026-12-31",
	Value20270331 = "2027-03-31",
}

export enum CuponsDescontoEndereco {
	AvenidaDomPedroIi = "Avenida Dom Pedro II",
	AvenidaJuscelinoKubitschekDeOliveira = "Avenida Juscelino Kubitschek de Oliveira",
	RuaJoORodriguesDaCosta = "Rua João Rodrigues da Costa",
	RuaPedroJosSilveira = "Rua Pedro José Silveira",
}

export enum CuponsDescontoEnderecoNumero {
	Value07 = "07",
	Value32 = "32",
	Value452 = "452",
	Value62 = "62",
}

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

export enum CuponsDescontoValor {
	Value10 = "10",
	Value12 = "12",
	Value13 = "13",
	Value15 = "15",
	Value18 = "18",
	Value279 = "27.9",
	Value8 = "8",
}

export enum CuponsDescontoValorRenovacao {
	Value100 = "100",
}

export interface CuponsDesconto {
	id: number;
	f_fk_pacotes_desconto: number;
	f_fk_vendedor_desconto: number;
	f_cep: CuponsDescontoCep;
	f_codigo: string;
	f_data_fim: CuponsDescontoDataFim;
	f_data_inicio: string;
	f_endereco: CuponsDescontoEndereco;
	f_endereco_numero: CuponsDescontoEnderecoNumero;
	f_nome: string;
	f_status: CuponsDescontoStatus;
	f_tipo: CuponsDescontoTipo;
	f_tipo_negociacao: CuponsDescontoTipoNegociacao;
	f_utilizacoes: number;
	f_valor: CuponsDescontoValor;
	f_valor_renovacao: CuponsDescontoValorRenovacao;
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

export const CUPONSDESCONTO_CEP_LABELS: Record<CuponsDescontoCep, string> = {
	[CuponsDescontoCep.Value88502325]: "88502325",
	[CuponsDescontoCep.Value88509518]: "88509518",
	[CuponsDescontoCep.Value88519400]: "88519400",
	[CuponsDescontoCep.Value88519540]: "88519540",
};

export const CUPONSDESCONTO_DATAFIM_LABELS: Record<
	CuponsDescontoDataFim,
	string
> = {
	[CuponsDescontoDataFim.Value20260131]: "2026 01 31",
	[CuponsDescontoDataFim.Value20260228]: "2026 02 28",
	[CuponsDescontoDataFim.Value20260430]: "2026 04 30",
	[CuponsDescontoDataFim.Value20260831]: "2026 08 31",
	[CuponsDescontoDataFim.Value20261231]: "2026 12 31",
	[CuponsDescontoDataFim.Value20270331]: "2027 03 31",
};

export const CUPONSDESCONTO_ENDERECO_LABELS: Record<
	CuponsDescontoEndereco,
	string
> = {
	[CuponsDescontoEndereco.AvenidaDomPedroIi]: "Avenida Dom Pedro II",
	[CuponsDescontoEndereco.AvenidaJuscelinoKubitschekDeOliveira]:
		"Avenida Juscelino Kubitschek De Oliveira",
	[CuponsDescontoEndereco.RuaJoORodriguesDaCosta]:
		"Rua João Rodrigues Da Costa",
	[CuponsDescontoEndereco.RuaPedroJosSilveira]: "Rua Pedro José Silveira",
};

export const CUPONSDESCONTO_ENDERECONUMERO_LABELS: Record<
	CuponsDescontoEnderecoNumero,
	string
> = {
	[CuponsDescontoEnderecoNumero.Value07]: "Código 07",
	[CuponsDescontoEnderecoNumero.Value32]: "Código 32",
	[CuponsDescontoEnderecoNumero.Value452]: "452",
	[CuponsDescontoEnderecoNumero.Value62]: "Código 62",
};

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

export const CUPONSDESCONTO_VALOR_LABELS: Record<CuponsDescontoValor, string> =
	{
		[CuponsDescontoValor.Value10]: "Código 10",
		[CuponsDescontoValor.Value12]: "Código 12",
		[CuponsDescontoValor.Value13]: "Código 13",
		[CuponsDescontoValor.Value15]: "Código 15",
		[CuponsDescontoValor.Value18]: "Código 18",
		[CuponsDescontoValor.Value279]: "27.9",
		[CuponsDescontoValor.Value8]: "Código 8",
	};

export const CUPONSDESCONTO_VALORRENOVACAO_LABELS: Record<
	CuponsDescontoValorRenovacao,
	string
> = {
	[CuponsDescontoValorRenovacao.Value100]: "100",
};

export enum DadosAdicionaisClienteContratoCreatedat {
	Value20260316t191148638z = "2026-03-16T19:11:48.638Z",
}

export enum DadosAdicionaisClienteContratoFormaDePagamento {
	Carne = "carne",
	Boleto = "boleto",
	Recorrencia = "recorrencia",
}

export enum DadosAdicionaisClienteContratoIdClienteContrato {
	Value23826 = "23826",
}

export enum DadosAdicionaisClienteContratoOrigemCliente {
	Facebook = "Facebook",
}

export enum DadosAdicionaisClienteContratoPerfilDeUso {
	Trabalho = "trabalho",
	Estudo = "estudo",
	Jogos = "jogos",
	Streaming = "streaming",
	Pesquisa = "pesquisa",
}

export enum DadosAdicionaisClienteContratoPessoasNaResidencia {
	Value3 = "3",
}

export enum DadosAdicionaisClienteContratoId {
	Value353714691899392 = "353714691899392",
}

export enum DadosAdicionaisClienteContratoUpdatedat {
	Value20260316t191220798z = "2026-03-16T19:12:20.798Z",
}

export interface DadosAdicionaisClienteContrato {
	id: DadosAdicionaisClienteContratoId;
	f_forma_de_pagamento: DadosAdicionaisClienteContratoFormaDePagamento;
	f_id_cliente_contrato: DadosAdicionaisClienteContratoIdClienteContrato;
	f_origem_cliente: DadosAdicionaisClienteContratoOrigemCliente;
	f_perfil_de_uso: DadosAdicionaisClienteContratoPerfilDeUso;
	f_pessoas_na_residencia: DadosAdicionaisClienteContratoPessoasNaResidencia;
	updatedAt: DadosAdicionaisClienteContratoUpdatedat;
	createdAt: DadosAdicionaisClienteContratoCreatedat;
}

export interface DadosAdicionaisClienteContratoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DadosAdicionaisClienteContratoRelationKey =
	keyof DadosAdicionaisClienteContratoRelations;

export const DADOSADICIONAISCLIENTECONTRATO_CREATEDAT_LABELS: Record<
	DadosAdicionaisClienteContratoCreatedat,
	string
> = {
	[DadosAdicionaisClienteContratoCreatedat.Value20260316t191148638z]:
		"2026 03 16t19:11:48.638z",
};

export const DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS: Record<
	DadosAdicionaisClienteContratoFormaDePagamento,
	string
> = {
	[DadosAdicionaisClienteContratoFormaDePagamento.Carne]: "Carnê",
	[DadosAdicionaisClienteContratoFormaDePagamento.Boleto]: "Boleto",
	[DadosAdicionaisClienteContratoFormaDePagamento.Recorrencia]: "Recorrência",
};

export const DADOSADICIONAISCLIENTECONTRATO_IDCLIENTECONTRATO_LABELS: Record<
	DadosAdicionaisClienteContratoIdClienteContrato,
	string
> = {
	[DadosAdicionaisClienteContratoIdClienteContrato.Value23826]: "23826",
};

export const DADOSADICIONAISCLIENTECONTRATO_ORIGEMCLIENTE_LABELS: Record<
	DadosAdicionaisClienteContratoOrigemCliente,
	string
> = {
	[DadosAdicionaisClienteContratoOrigemCliente.Facebook]: "Facebook",
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

export const DADOSADICIONAISCLIENTECONTRATO_PESSOASNARESIDENCIA_LABELS: Record<
	DadosAdicionaisClienteContratoPessoasNaResidencia,
	string
> = {
	[DadosAdicionaisClienteContratoPessoasNaResidencia.Value3]: "Código 3",
};

export const DADOSADICIONAISCLIENTECONTRATO_ID_LABELS: Record<
	DadosAdicionaisClienteContratoId,
	string
> = {
	[DadosAdicionaisClienteContratoId.Value353714691899392]: "353714691899392",
};

export const DADOSADICIONAISCLIENTECONTRATO_UPDATEDAT_LABELS: Record<
	DadosAdicionaisClienteContratoUpdatedat,
	string
> = {
	[DadosAdicionaisClienteContratoUpdatedat.Value20260316t191220798z]:
		"2026 03 16t19:12:20.798z",
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

export enum DcServidoresFkDiscos {
	Value1 = "1",
}

export enum DcServidoresMemoria {
	Value0 = "0",
	Value256Gb16X16gbDimDdr3 = "256 GB - 16 x 16GB DIM DDR3",
	Value256Gb16X16gbDimmDdr3 = "256 GB - 16 x 16GB DIMM DDR3",
	Value256gb16X16gbDimmDdr3 = "256GB - 16 x 16GB DIMM DDR3 \t",
	Value256gb16X16gbDimmDdr4 = "256GB - 16 x 16GB DIMM DDR4",
	Value64gb2x32gbDimmDdr4 = "64GB - 2x 32GB DIMM DDR4",
}

export enum DcServidoresModelo {
	ProliantBl460cGen8 = " ProLiant BL460c Gen8",
	ProliantBl460cSeriesGen10 = "ProLiant BL460c Series Gen10",
	ProliantBl460cSeriesGen8 = "ProLiant BL460c Series Gen8",
	ProliantBl460cSeriesGen9 = "ProLiant BL460c Series Gen9",
	ProliantDl160Gen9 = "ProLiant DL160 Gen9",
	ProliantDl360Gen9 = "Proliant DL360 Gen9",
}

export enum DcServidoresObs {
	PBladeP = "<p>Blade.</p>",
	PRackP = "<p>Rack.</p>",
}

export enum DcServidoresProcessador {
	Value2XIntelRXeonRCpuE52650V4022ghz48Cores = "2 x Intel(R) Xeon(R) CPU E5-2650 v4 0 @ 2.2GHz (48 Cores)",
	Value2XIntelRXeonRCpuE52660V3260ghz10Cores = "2 x Intel(R) Xeon(R) CPU E5-2660 v3 @ 2.60GHz (10 Cores)",
	Value2XIntelRXeonRCpuE526700260ghz8Cores = "2 x Intel(R) Xeon(R) CPU E5-2670 0 @ 2.60GHz (8 Cores)",
	Value2XIntelRXeonRCpuE52690V426ghz14Cores = "2 x Intel(R) Xeon(R) CPU E5-2690 v4 @ 2.6GHz (14 Cores)",
	Value2XIntelRXeonRCpuE52699V422ghz22Cores = "2 x Intel(R) Xeon(R) CPU E5-2699 v4 @ 2.2GHz (22 Cores)",
	Value2XIntelRXeonRGold6126Cpu260ghz12Cores = "2 x Intel(R) Xeon(R) Gold 6126 CPU @ 2.60GHz (12 Cores)",
}

export enum DcServidoresStatus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
}

export interface DcServidores {
	id: number;
	f_fk_discos: DcServidoresFkDiscos;
	f_fabricante: DcServidoresFabricante;
	f_memoria: DcServidoresMemoria;
	f_modelo: DcServidoresModelo;
	f_obs: DcServidoresObs;
	f_processador: DcServidoresProcessador;
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

export const DCSERVIDORES_FKDISCOS_LABELS: Record<
	DcServidoresFkDiscos,
	string
> = {
	[DcServidoresFkDiscos.Value1]: "Ativo",
};

export const DCSERVIDORES_MEMORIA_LABELS: Record<DcServidoresMemoria, string> =
	{
		[DcServidoresMemoria.Value0]: "Inativo",
		[DcServidoresMemoria.Value256Gb16X16gbDimDdr3]: "256 GB 16 X 16gb DIM Ddr3",
		[DcServidoresMemoria.Value256Gb16X16gbDimmDdr3]:
			"256 GB 16 X 16gb DIMM Ddr3",
		[DcServidoresMemoria.Value256gb16X16gbDimmDdr3]:
			"256gb 16 X 16gb DIMM Ddr3",
		[DcServidoresMemoria.Value256gb16X16gbDimmDdr4]:
			"256gb 16 X 16gb DIMM Ddr4",
		[DcServidoresMemoria.Value64gb2x32gbDimmDdr4]: "64gb 2x 32gb DIMM Ddr4",
	};

export const DCSERVIDORES_MODELO_LABELS: Record<DcServidoresModelo, string> = {
	[DcServidoresModelo.ProliantBl460cGen8]: "Proliant Bl460c Gen8",
	[DcServidoresModelo.ProliantBl460cSeriesGen10]:
		"Proliant Bl460c Series Gen10",
	[DcServidoresModelo.ProliantBl460cSeriesGen8]: "Proliant Bl460c Series Gen8",
	[DcServidoresModelo.ProliantBl460cSeriesGen9]: "Proliant Bl460c Series Gen9",
	[DcServidoresModelo.ProliantDl160Gen9]: "Proliant Dl160 Gen9",
	[DcServidoresModelo.ProliantDl360Gen9]: "Proliant Dl360 Gen9",
};

export const DCSERVIDORES_OBS_LABELS: Record<DcServidoresObs, string> = {
	[DcServidoresObs.PBladeP]: "<p>blade.</p>",
	[DcServidoresObs.PRackP]: "<p>rack.</p>",
};

export const DCSERVIDORES_PROCESSADOR_LABELS: Record<
	DcServidoresProcessador,
	string
> = {
	[DcServidoresProcessador.Value2XIntelRXeonRCpuE52650V4022ghz48Cores]:
		"2 X Intel(r) Xeon(r) CPU E5 2650 V4 0 @ 2.2ghz (48 Cores)",
	[DcServidoresProcessador.Value2XIntelRXeonRCpuE52660V3260ghz10Cores]:
		"2 X Intel(r) Xeon(r) CPU E5 2660 V3 @ 2.60ghz (10 Cores)",
	[DcServidoresProcessador.Value2XIntelRXeonRCpuE526700260ghz8Cores]:
		"2 X Intel(r) Xeon(r) CPU E5 2670 0 @ 2.60ghz (8 Cores)",
	[DcServidoresProcessador.Value2XIntelRXeonRCpuE52690V426ghz14Cores]:
		"2 X Intel(r) Xeon(r) CPU E5 2690 V4 @ 2.6ghz (14 Cores)",
	[DcServidoresProcessador.Value2XIntelRXeonRCpuE52699V422ghz22Cores]:
		"2 X Intel(r) Xeon(r) CPU E5 2699 V4 @ 2.2ghz (22 Cores)",
	[DcServidoresProcessador.Value2XIntelRXeonRGold6126Cpu260ghz12Cores]:
		"2 X Intel(r) Xeon(r) Gold 6126 CPU @ 2.60ghz (12 Cores)",
};

export const DCSERVIDORES_STATUS_LABELS: Record<DcServidoresStatus, string> = {
	[DcServidoresStatus.Value1]: "Disponivel",
	[DcServidoresStatus.Value2]: "Alocado para Cliente",
	[DcServidoresStatus.Value3]: "Manutenção",
	[DcServidoresStatus.Value4]: "Descartado",
};

export enum DemandasViabilidadesCreatedat {
	Value20251022t012539920z = "2025-10-22T01:25:39.920Z",
	Value20251022t122124406z = "2025-10-22T12:21:24.406Z",
	Value20251022t122254931z = "2025-10-22T12:22:54.931Z",
	Value20251023t133403079z = "2025-10-23T13:34:03.079Z",
	Value20251103t190454368z = "2025-11-03T19:04:54.368Z",
}

export enum DemandasViabilidadesEndereco {
	AvLuizDeCamEs1183CoralLagesScCep88523000 = "Av Luiz de Camões, 1183. Coral. Lages SC. CEP 88523000",
	Ewwewwwe = "ewwewwwe",
	Teste = "Teste",
}

export enum DemandasViabilidadesFormaAtendimento {
	Value1 = "1",
	Value2 = "2",
}

export enum DemandasViabilidadesLocalizacao {
	Value122062651511216637417887430052396 = "-122.0626515112166,37.417887430052396",
	Value5030558538009683627800062374719737 = "-50.305585380096836,-27.800062374719737",
	Value503056707596803827800194438475447 = "-50.30567075968038,-27.800194438475447",
	Value503056804652856227799987752950862 = "-50.30568046528562,-27.799987752950862",
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

export enum DemandasViabilidadesVelocidadePretendida {
	Value100m = "100m",
}

export enum DemandasViabilidadesId {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
}

export enum DemandasViabilidadesUpdatedat {
	Value20251022t012539920z = "2025-10-22T01:25:39.920Z",
	Value20251022t122124406z = "2025-10-22T12:21:24.406Z",
	Value20251022t122254931z = "2025-10-22T12:22:54.931Z",
	Value20251023t133403079z = "2025-10-23T13:34:03.079Z",
	Value20251104t140518735z = "2025-11-04T14:05:18.735Z",
}

export interface DemandasViabilidades {
	id: DemandasViabilidadesId;
	f_fk_viabilidades: number;
	f_custo_recorrente: number;
	f_endereco: DemandasViabilidadesEndereco;
	f_forma_atendimento: DemandasViabilidadesFormaAtendimento;
	f_localizacao: DemandasViabilidadesLocalizacao;
	f_servico_pretendido: DemandasViabilidadesServicoPretendido;
	f_status: DemandasViabilidadesStatus;
	f_valor_investimento: number;
	f_velocidade_pretendida: DemandasViabilidadesVelocidadePretendida;
	updatedAt: DemandasViabilidadesUpdatedat;
	createdAt: DemandasViabilidadesCreatedat;
}

export interface DemandasViabilidadesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DemandasViabilidadesRelationKey =
	keyof DemandasViabilidadesRelations;

export const DEMANDASVIABILIDADES_CREATEDAT_LABELS: Record<
	DemandasViabilidadesCreatedat,
	string
> = {
	[DemandasViabilidadesCreatedat.Value20251022t012539920z]:
		"2025 10 22t01:25:39.920z",
	[DemandasViabilidadesCreatedat.Value20251022t122124406z]:
		"2025 10 22t12:21:24.406z",
	[DemandasViabilidadesCreatedat.Value20251022t122254931z]:
		"2025 10 22t12:22:54.931z",
	[DemandasViabilidadesCreatedat.Value20251023t133403079z]:
		"2025 10 23t13:34:03.079z",
	[DemandasViabilidadesCreatedat.Value20251103t190454368z]:
		"2025 11 03t19:04:54.368z",
};

export const DEMANDASVIABILIDADES_ENDERECO_LABELS: Record<
	DemandasViabilidadesEndereco,
	string
> = {
	[DemandasViabilidadesEndereco.AvLuizDeCamEs1183CoralLagesScCep88523000]:
		"Av Luiz De Camões, 1183. Coral. Lages Sc. CEP 88523000",
	[DemandasViabilidadesEndereco.Ewwewwwe]: "Ewwewwwe",
	[DemandasViabilidadesEndereco.Teste]: "Teste",
};

export const DEMANDASVIABILIDADES_FORMAATENDIMENTO_LABELS: Record<
	DemandasViabilidadesFormaAtendimento,
	string
> = {
	[DemandasViabilidadesFormaAtendimento.Value1]: "Rede Própria",
	[DemandasViabilidadesFormaAtendimento.Value2]: "Ultima Milha de Terceiros",
};

export const DEMANDASVIABILIDADES_LOCALIZACAO_LABELS: Record<
	DemandasViabilidadesLocalizacao,
	string
> = {
	[DemandasViabilidadesLocalizacao.Value122062651511216637417887430052396]:
		"122.0626515112166,37.417887430052396",
	[DemandasViabilidadesLocalizacao.Value5030558538009683627800062374719737]:
		"50.305585380096836, 27.800062374719737",
	[DemandasViabilidadesLocalizacao.Value503056707596803827800194438475447]:
		"50.30567075968038, 27.800194438475447",
	[DemandasViabilidadesLocalizacao.Value503056804652856227799987752950862]:
		"50.30568046528562, 27.799987752950862",
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

export const DEMANDASVIABILIDADES_VELOCIDADEPRETENDIDA_LABELS: Record<
	DemandasViabilidadesVelocidadePretendida,
	string
> = {
	[DemandasViabilidadesVelocidadePretendida.Value100m]: "100m",
};

export const DEMANDASVIABILIDADES_ID_LABELS: Record<
	DemandasViabilidadesId,
	string
> = {
	[DemandasViabilidadesId.Value1]: "Ativo",
	[DemandasViabilidadesId.Value2]: "Código 2",
	[DemandasViabilidadesId.Value3]: "Código 3",
	[DemandasViabilidadesId.Value4]: "Código 4",
	[DemandasViabilidadesId.Value5]: "Código 5",
};

export const DEMANDASVIABILIDADES_UPDATEDAT_LABELS: Record<
	DemandasViabilidadesUpdatedat,
	string
> = {
	[DemandasViabilidadesUpdatedat.Value20251022t012539920z]:
		"2025 10 22t01:25:39.920z",
	[DemandasViabilidadesUpdatedat.Value20251022t122124406z]:
		"2025 10 22t12:21:24.406z",
	[DemandasViabilidadesUpdatedat.Value20251022t122254931z]:
		"2025 10 22t12:22:54.931z",
	[DemandasViabilidadesUpdatedat.Value20251023t133403079z]:
		"2025 10 23t13:34:03.079z",
	[DemandasViabilidadesUpdatedat.Value20251104t140518735z]:
		"2025 11 04t14:05:18.735z",
};

export enum DepartamentosCreatedat {
	Value20251104t195023028z = "2025-11-04T19:50:23.028Z",
}

export enum DepartamentosFkFuncionarios {
	Value1 = "1",
	Value15 = "15",
	Value24 = "24",
	Value30 = "30",
}

export interface Departamentos {
	id: number;
	f_fk_funcionarios: DepartamentosFkFuncionarios;
	f_nome: string;
	updatedAt: string;
	createdAt: DepartamentosCreatedat;
}

export interface DepartamentosRelations {
	createdBy?: Users | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type DepartamentosRelationKey = keyof DepartamentosRelations;

export const DEPARTAMENTOS_CREATEDAT_LABELS: Record<
	DepartamentosCreatedat,
	string
> = {
	[DepartamentosCreatedat.Value20251104t195023028z]: "2025 11 04t19:50:23.028z",
};

export const DEPARTAMENTOS_FKFUNCIONARIOS_LABELS: Record<
	DepartamentosFkFuncionarios,
	string
> = {
	[DepartamentosFkFuncionarios.Value1]: "Ativo",
	[DepartamentosFkFuncionarios.Value15]: "Código 15",
	[DepartamentosFkFuncionarios.Value24]: "Código 24",
	[DepartamentosFkFuncionarios.Value30]: "Código 30",
};

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

export enum DiscosDataAquisicao {
	Value20241002t030000000z = "2024-10-02T03:00:00.000Z",
	Value20241025t030000000z = "2024-10-25T03:00:00.000Z",
	Value20250428t030000000z = "2025-04-28T03:00:00.000Z",
	Value20250523t030000000z = "2025-05-23T03:00:00.000Z",
	Value20250526t030000000z = "2025-05-26T03:00:00.000Z",
}

export enum DiscosFkDiscos {
	Value10 = "10",
	Value12 = "12",
	Value13 = "13",
	Value14 = "14",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
}

export enum DiscosFornecedor {
	Desconhecido = "desconhecido",
	Pauta = "Pauta",
}

export enum DiscosModelo {
	Value00wg685 = "00WG685",
	Eg0300fcvbf = "EG0300FCVBF",
	Eg0900fblsk = "EG0900FBLSK",
	Eg0900fbvfq = "EG0900FBVFQ",
	Eg0900jehmb = "EG0900JEHMB",
	Eh0146farwd = "EH0146FARWD",
	Eh0146fawjb = "EH0146FAWJB",
	Eh0450jdytk = "EH0450JDYTK",
	Eh0450jedhd = "EH0450JEDHD",
	KingstonDc600m = "KINGSTON DC600M",
	SavvioSt9900805ss = "Savvio ST9900805SS",
	SeagateBarracuda = "Seagate Barracuda",
	SsdAdataSu650 = "SSD ADATA SU650",
	St1000nm0023 = "ST1000NM0023",
	Wd10spzx = "WD10SPZX",
	Wd5000aakx = "WD5000AAKX",
	Wd6001bkhg18d22v0 = "WD6001BKHG-18D22V0",
}

export enum DiscosPrecoCompra {
	Value100 = "100",
	Value1667 = "1667",
	Value330 = "330",
	Value5400 = "5400",
	Value934 = "934",
	Value96 = "96",
}

export enum DiscosPrecoVendaLocacao {
	Value100 = "100",
	Value171 = "171",
	Value18 = "18",
	Value20 = "20",
	Value55 = "55",
	Value550 = "550",
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
	f_fk_discos: DiscosFkDiscos;
	f_capacidade: DiscosCapacidade;
	f_data_aquisicao: DiscosDataAquisicao;
	f_fornecedor: DiscosFornecedor;
	f_modelo: DiscosModelo;
	f_preco_compra: DiscosPrecoCompra;
	f_preco_venda_locacao: DiscosPrecoVendaLocacao;
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

export const DISCOS_DATAAQUISICAO_LABELS: Record<DiscosDataAquisicao, string> =
	{
		[DiscosDataAquisicao.Value20241002t030000000z]: "2024 10 02t03:00:00.000z",
		[DiscosDataAquisicao.Value20241025t030000000z]: "2024 10 25t03:00:00.000z",
		[DiscosDataAquisicao.Value20250428t030000000z]: "2025 04 28t03:00:00.000z",
		[DiscosDataAquisicao.Value20250523t030000000z]: "2025 05 23t03:00:00.000z",
		[DiscosDataAquisicao.Value20250526t030000000z]: "2025 05 26t03:00:00.000z",
	};

export const DISCOS_FKDISCOS_LABELS: Record<DiscosFkDiscos, string> = {
	[DiscosFkDiscos.Value10]: "Código 10",
	[DiscosFkDiscos.Value12]: "Código 12",
	[DiscosFkDiscos.Value13]: "Código 13",
	[DiscosFkDiscos.Value14]: "Código 14",
	[DiscosFkDiscos.Value5]: "Código 5",
	[DiscosFkDiscos.Value6]: "Código 6",
	[DiscosFkDiscos.Value7]: "Código 7",
	[DiscosFkDiscos.Value8]: "Código 8",
};

export const DISCOS_FORNECEDOR_LABELS: Record<DiscosFornecedor, string> = {
	[DiscosFornecedor.Desconhecido]: "Desconhecido",
	[DiscosFornecedor.Pauta]: "Pauta",
};

export const DISCOS_MODELO_LABELS: Record<DiscosModelo, string> = {
	[DiscosModelo.Value00wg685]: "00wg685",
	[DiscosModelo.Eg0300fcvbf]: "Eg0300fcvbf",
	[DiscosModelo.Eg0900fblsk]: "Eg0900fblsk",
	[DiscosModelo.Eg0900fbvfq]: "Eg0900fbvfq",
	[DiscosModelo.Eg0900jehmb]: "Eg0900jehmb",
	[DiscosModelo.Eh0146farwd]: "Eh0146farwd",
	[DiscosModelo.Eh0146fawjb]: "Eh0146fawjb",
	[DiscosModelo.Eh0450jdytk]: "Eh0450jdytk",
	[DiscosModelo.Eh0450jedhd]: "Eh0450jedhd",
	[DiscosModelo.KingstonDc600m]: "Kingston Dc600m",
	[DiscosModelo.SavvioSt9900805ss]: "Savvio St9900805ss",
	[DiscosModelo.SeagateBarracuda]: "Seagate Barracuda",
	[DiscosModelo.SsdAdataSu650]: "SSD Adata Su650",
	[DiscosModelo.St1000nm0023]: "St1000nm0023",
	[DiscosModelo.Wd10spzx]: "Wd10spzx",
	[DiscosModelo.Wd5000aakx]: "Wd5000aakx",
	[DiscosModelo.Wd6001bkhg18d22v0]: "Wd6001bkhg 18d22v0",
};

export const DISCOS_PRECOCOMPRA_LABELS: Record<DiscosPrecoCompra, string> = {
	[DiscosPrecoCompra.Value100]: "100",
	[DiscosPrecoCompra.Value1667]: "1667",
	[DiscosPrecoCompra.Value330]: "330",
	[DiscosPrecoCompra.Value5400]: "5400",
	[DiscosPrecoCompra.Value934]: "934",
	[DiscosPrecoCompra.Value96]: "Código 96",
};

export const DISCOS_PRECOVENDALOCACAO_LABELS: Record<
	DiscosPrecoVendaLocacao,
	string
> = {
	[DiscosPrecoVendaLocacao.Value100]: "100",
	[DiscosPrecoVendaLocacao.Value171]: "171",
	[DiscosPrecoVendaLocacao.Value18]: "Código 18",
	[DiscosPrecoVendaLocacao.Value20]: "Código 20",
	[DiscosPrecoVendaLocacao.Value55]: "Código 55",
	[DiscosPrecoVendaLocacao.Value550]: "550",
};

export const DISCOS_TIPO_LABELS: Record<DiscosTipo, string> = {
	[DiscosTipo.Value1]: "SSD SATA",
	[DiscosTipo.Value2]: "SSD SAS",
	[DiscosTipo.Value3]: "HDD SAS 10k",
	[DiscosTipo.Value4]: "HDD SAS 15k",
	[DiscosTipo.Value5]: "HDD NLSAS",
	[DiscosTipo.Value6]: "HDD SATA",
};

export enum EquipamentosFkEquipamentosAnexos {
	Value2 = "2",
}

export enum EquipamentosFkEquipamentosInterfaces {
	Value8 = "8",
	Value9 = "9",
}

export enum EquipamentosObservacoes {
	P1020106P = "<p>10.20.10.6</p>",
	P172311206P = "<p>172.31.1.206</p>",
	P17231255204P = "<p>172.31.255.204</p>",
	P4522910448P = "<p>45.229.104.48</p>",
	P452291048829P = "<p>45.229.104.88/29</p>",
	PAcessoMk17231254226PPRadiusOnP = "<p>Acesso MK: 172.31.254.226</p><p>Radius: ON.</p>",
	PAlimentaOViaADisjuntor5P = "<p>Alimentação: VIA A DISJUNTOR 5</p>",
	PAmbulatRioP = "<p>Ambulatório.</p>",
	PConcentradorVpnSDedicadoP = "<p>Concentrador VPN´s Dedicado</p>",
	PContatoLocalDcCtaPPCarlos554191495431PPNbspAberturaDeChamadoAtravSDoEMailAcessoidcBrDigitalParaEquipeDoDatacenterP = "<p>Contato local DC - CTA:</p><p>Carlos: +55 41 9149-5431</p><p>&nbsp;Abertura de chamado através do e-mail acessoidc@br.digital para equipe do datacenter.</p>",
	PCpeInstaladoPelaBrdigitalParaAtenderLastmileGeogridmapsTroP = "<p>CPE Instalado pela BRDIGITAL para atender Lastmile Geogridmaps TRO</p>",
	PEquipamentoDaVivoInstaladoNoNossoRackParaProverLinkDeInterconexODeTelefoniaPPBrP = "<p>Equipamento da VIVO. instalado no nosso rack para prover link de interconexão de telefonia.</p><p><br></p>",
	PEquipamentoParticularP = "<p>Equipamento particular.</p>",
	PEsnOfSlot06r2450020982P = "<p>ESN of slot 0: 6R2450020982</p>",
	PHttpsAtplusSmartoltComOnuView23932P = "<p>https://atplus.smartolt.com/onu/view/23932</p>",
	PIp452291042024444P = "<p>IP: 45.229.104.202:4444</p>",
}

export interface Equipamentos {
	id: number;
	f_fk_ativo_rack: number;
	f_fk_equipamentos_anexos: EquipamentosFkEquipamentosAnexos;
	f_fk_equipamentos_interfaces: EquipamentosFkEquipamentosInterfaces;
	f_34u76klwxoj: number;
	f_modelo: string;
	f_nome: string;
	f_observacoes: EquipamentosObservacoes;
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

export const EQUIPAMENTOS_FKEQUIPAMENTOSANEXOS_LABELS: Record<
	EquipamentosFkEquipamentosAnexos,
	string
> = {
	[EquipamentosFkEquipamentosAnexos.Value2]: "Código 2",
};

export const EQUIPAMENTOS_FKEQUIPAMENTOSINTERFACES_LABELS: Record<
	EquipamentosFkEquipamentosInterfaces,
	string
> = {
	[EquipamentosFkEquipamentosInterfaces.Value8]: "Código 8",
	[EquipamentosFkEquipamentosInterfaces.Value9]: "Código 9",
};

export const EQUIPAMENTOS_OBSERVACOES_LABELS: Record<
	EquipamentosObservacoes,
	string
> = {
	[EquipamentosObservacoes.P1020106P]: "<p>10.20.10.6</p>",
	[EquipamentosObservacoes.P172311206P]: "<p>172.31.1.206</p>",
	[EquipamentosObservacoes.P17231255204P]: "<p>172.31.255.204</p>",
	[EquipamentosObservacoes.P4522910448P]: "<p>45.229.104.48</p>",
	[EquipamentosObservacoes.P452291048829P]: "<p>45.229.104.88/29</p>",
	[EquipamentosObservacoes.PAcessoMk17231254226PPRadiusOnP]:
		"<p>acesso Mk: 172.31.254.226</p><p>radius: On.</p>",
	[EquipamentosObservacoes.PAlimentaOViaADisjuntor5P]:
		"<p>alimentação: VIA A Disjuntor 5</p>",
	[EquipamentosObservacoes.PAmbulatRioP]: "<p>ambulatório.</p>",
	[EquipamentosObservacoes.PConcentradorVpnSDedicadoP]:
		"<p>concentrador Vpn´s Dedicado</p>",
	[EquipamentosObservacoes.PContatoLocalDcCtaPPCarlos554191495431PPNbspAberturaDeChamadoAtravSDoEMailAcessoidcBrDigitalParaEquipeDoDatacenterP]:
		"<p>contato Local DC Cta:</p><p>carlos: +55 41 9149 5431</p><p>&nbsp;abertura De Chamado Através Do E Mail Acessoidc@br.digital Para Equipe Do Datacenter.</p>",
	[EquipamentosObservacoes.PCpeInstaladoPelaBrdigitalParaAtenderLastmileGeogridmapsTroP]:
		"<p>cpe Instalado Pela Brdigital Para Atender Lastmile Geogridmaps Tro</p>",
	[EquipamentosObservacoes.PEquipamentoDaVivoInstaladoNoNossoRackParaProverLinkDeInterconexODeTelefoniaPPBrP]:
		"<p>equipamento Da Vivo. Instalado No Nosso Rack Para Prover Link De Interconexão De Telefonia.</p><p><br></p>",
	[EquipamentosObservacoes.PEquipamentoParticularP]:
		"<p>equipamento Particular.</p>",
	[EquipamentosObservacoes.PEsnOfSlot06r2450020982P]:
		"<p>esn Of Slot 0: 6r2450020982</p>",
	[EquipamentosObservacoes.PHttpsAtplusSmartoltComOnuView23932P]:
		"<p>https://atplus.smartolt.com/onu/view/23932</p>",
	[EquipamentosObservacoes.PIp452291042024444P]:
		"<p>ip: 45.229.104.202:4444</p>",
};

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

export enum FacilidadeCreatedat {
	Value20251014t232432757z = "2025-10-14T23:24:32.757Z",
	Value20251014t232532650z = "2025-10-14T23:25:32.650Z",
}

export enum FacilidadeDescricao {
	IpFixo = "IP Fixo",
	SessOBgpTeste = "Sessão BGP TESTE",
}

export enum FacilidadeNome {
	IpFixo = "IP Fixo",
	SessOBgp = "Sessão BGP",
}

export enum FacilidadeId {
	Value1 = "1",
	Value2 = "2",
}

export enum FacilidadeUpdatedat {
	Value20251014t232432757z = "2025-10-14T23:24:32.757Z",
	Value20251014t232532650z = "2025-10-14T23:25:32.650Z",
}

export interface Facilidade {
	id: FacilidadeId;
	f_descricao: FacilidadeDescricao;
	f_nome: FacilidadeNome;
	updatedAt: FacilidadeUpdatedat;
	createdAt: FacilidadeCreatedat;
}

export interface FacilidadeRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type FacilidadeRelationKey = keyof FacilidadeRelations;

export const FACILIDADE_CREATEDAT_LABELS: Record<FacilidadeCreatedat, string> =
	{
		[FacilidadeCreatedat.Value20251014t232432757z]: "2025 10 14t23:24:32.757z",
		[FacilidadeCreatedat.Value20251014t232532650z]: "2025 10 14t23:25:32.650z",
	};

export const FACILIDADE_DESCRICAO_LABELS: Record<FacilidadeDescricao, string> =
	{
		[FacilidadeDescricao.IpFixo]: "IP Fixo",
		[FacilidadeDescricao.SessOBgpTeste]: "Sessão BGP Teste",
	};

export const FACILIDADE_NOME_LABELS: Record<FacilidadeNome, string> = {
	[FacilidadeNome.IpFixo]: "IP Fixo",
	[FacilidadeNome.SessOBgp]: "Sessão BGP",
};

export const FACILIDADE_ID_LABELS: Record<FacilidadeId, string> = {
	[FacilidadeId.Value1]: "Ativo",
	[FacilidadeId.Value2]: "Código 2",
};

export const FACILIDADE_UPDATEDAT_LABELS: Record<FacilidadeUpdatedat, string> =
	{
		[FacilidadeUpdatedat.Value20251014t232432757z]: "2025 10 14t23:24:32.757z",
		[FacilidadeUpdatedat.Value20251014t232532650z]: "2025 10 14t23:25:32.650z",
	};

export enum FornecedoresTelecomFkClienteCircuiro {
	Value1 = "1",
	Value2 = "2",
}

export enum FornecedoresTelecomFkFornecedorCircuito {
	Value1 = "1",
	Value2 = "2",
}

export enum FornecedoresTelecomInstrucoes {
	PDataCurCursorClienteP = '<p data-cur="cursor">Cliente</p>',
	PClienteP = "<p>Cliente</p>",
	PContatoStrongNelsonPortoNetoStrongPP35095089000100P = "<p>Contato: <strong>NELSON PORTO NETO</strong></p><p>35.095.089/0001-00</p>",
	PFornecedorP = "<p>Fornecedor</p>",
	PGerenteDeContasPPMichelCaldeirasMteixeiraBrDigital48991537698PPAberturaDeChamadosWhatsapp555130229350P = "<p>Gerente de Contas:</p><p>Michel Caldeiras - mteixeira@br.digital - 48 99153-7698</p><p>Abertura de Chamados: Whatsapp: 555130229350</p>",
	PParceiroDeCuritibanosP = "<p>Parceiro de Curitibanos</p>",
}

export interface FornecedoresTelecom {
	id: number;
	f_fk_cliente_circuiro: FornecedoresTelecomFkClienteCircuiro;
	f_fk_fornecedor_circuito: FornecedoresTelecomFkFornecedorCircuito;
	f_instrucoes: FornecedoresTelecomInstrucoes;
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

export const FORNECEDORESTELECOM_FKCLIENTECIRCUIRO_LABELS: Record<
	FornecedoresTelecomFkClienteCircuiro,
	string
> = {
	[FornecedoresTelecomFkClienteCircuiro.Value1]: "Ativo",
	[FornecedoresTelecomFkClienteCircuiro.Value2]: "Código 2",
};

export const FORNECEDORESTELECOM_FKFORNECEDORCIRCUITO_LABELS: Record<
	FornecedoresTelecomFkFornecedorCircuito,
	string
> = {
	[FornecedoresTelecomFkFornecedorCircuito.Value1]: "Ativo",
	[FornecedoresTelecomFkFornecedorCircuito.Value2]: "Código 2",
};

export const FORNECEDORESTELECOM_INSTRUCOES_LABELS: Record<
	FornecedoresTelecomInstrucoes,
	string
> = {
	[FornecedoresTelecomInstrucoes.PDataCurCursorClienteP]:
		'<p Data Cur="cursor">cliente</p>',
	[FornecedoresTelecomInstrucoes.PClienteP]: "<p>cliente</p>",
	[FornecedoresTelecomInstrucoes.PContatoStrongNelsonPortoNetoStrongPP35095089000100P]:
		"<p>contato: <strong>nelson Porto Neto</strong></p><p>35.095.089/0001 00</p>",
	[FornecedoresTelecomInstrucoes.PFornecedorP]: "<p>fornecedor</p>",
	[FornecedoresTelecomInstrucoes.PGerenteDeContasPPMichelCaldeirasMteixeiraBrDigital48991537698PPAberturaDeChamadosWhatsapp555130229350P]:
		"<p>gerente De Contas:</p><p>michel Caldeiras Mteixeira@br.digital 48 99153 7698</p><p>abertura De Chamados: Whatsapp: 555130229350</p>",
	[FornecedoresTelecomInstrucoes.PParceiroDeCuritibanosP]:
		"<p>parceiro De Curitibanos</p>",
};

export enum FotoAniversarioCreatedat {
	Value20260414t141848544z = "2026-04-14T14:18:48.544Z",
	Value20260414t141848735z = "2026-04-14T14:18:48.735Z",
}

export enum FotoAniversarioExtname {
	Png = ".png",
}

export enum FotoAniversarioFkAniversarios {
	Value358932448018432 = "358932448018432",
	Value358932448018434 = "358932448018434",
}

export enum FotoAniversarioFilename {
	BrenoNetoFreitas1804C6gvgoPng = "Breno Neto Freitas; 18-04-c6gvgo.png",
	MateusSalomODeBarrosNeto1302C3vdpcPng = "Mateus Salomão de Barros Neto; 13-02-c3vdpc.png",
}

export enum FotoAniversarioId {
	Value358932448018433 = "358932448018433",
	Value358932448018435 = "358932448018435",
}

export enum FotoAniversarioMeta {
	ObjectObject = "[object Object]",
}

export enum FotoAniversarioMimetype {
	ImagePng = "image/png",
}

export enum FotoAniversarioPreview {
	StorageUploadsBreno20neto20freitas3b201804C6gvgoPng = "/storage/uploads/Breno%20Neto%20Freitas%3B%2018-04-c6gvgo.png",
	StorageUploadsMateus20salomC3A3o20de20barros20neto3b201302C3vdpcPng = "/storage/uploads/Mateus%20Salom%C3%A3o%20de%20Barros%20Neto%3B%2013-02-c3vdpc.png",
}

export enum FotoAniversarioSize {
	Value13284 = "13284",
}

export enum FotoAniversarioTitle {
	BrenoNetoFreitas1804 = "Breno Neto Freitas; 18-04",
	MateusSalomODeBarrosNeto1302 = "Mateus Salomão de Barros Neto; 13-02",
}

export enum FotoAniversarioUpdatedat {
	Value20260414t141848602z = "2026-04-14T14:18:48.602Z",
	Value20260414t141848784z = "2026-04-14T14:18:48.784Z",
}

export enum FotoAniversarioUrl {
	StorageUploadsBreno20neto20freitas3b201804C6gvgoPng = "/storage/uploads/Breno%20Neto%20Freitas%3B%2018-04-c6gvgo.png",
	StorageUploadsMateus20salomC3A3o20de20barros20neto3b201302C3vdpcPng = "/storage/uploads/Mateus%20Salom%C3%A3o%20de%20Barros%20Neto%3B%2013-02-c3vdpc.png",
}

export interface FotoAniversario {
	id: FotoAniversarioId;
	f_fk_aniversarios: FotoAniversarioFkAniversarios;
	extname: FotoAniversarioExtname;
	filename: FotoAniversarioFilename;
	meta: FotoAniversarioMeta;
	mimetype: FotoAniversarioMimetype;
	path: string;
	preview: FotoAniversarioPreview;
	size: FotoAniversarioSize;
	title: FotoAniversarioTitle;
	url: FotoAniversarioUrl;
	updatedAt: FotoAniversarioUpdatedat;
	createdAt: FotoAniversarioCreatedat;
}

export interface FotoAniversarioRelations {
	createdBy?: Users | null;
	f_aniversarios?: Aniversarios | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type FotoAniversarioRelationKey = keyof FotoAniversarioRelations;

export const FOTOANIVERSARIO_CREATEDAT_LABELS: Record<
	FotoAniversarioCreatedat,
	string
> = {
	[FotoAniversarioCreatedat.Value20260414t141848544z]:
		"2026 04 14t14:18:48.544z",
	[FotoAniversarioCreatedat.Value20260414t141848735z]:
		"2026 04 14t14:18:48.735z",
};

export const FOTOANIVERSARIO_EXTNAME_LABELS: Record<
	FotoAniversarioExtname,
	string
> = {
	[FotoAniversarioExtname.Png]: ".png",
};

export const FOTOANIVERSARIO_FKANIVERSARIOS_LABELS: Record<
	FotoAniversarioFkAniversarios,
	string
> = {
	[FotoAniversarioFkAniversarios.Value358932448018432]: "358932448018432",
	[FotoAniversarioFkAniversarios.Value358932448018434]: "358932448018434",
};

export const FOTOANIVERSARIO_FILENAME_LABELS: Record<
	FotoAniversarioFilename,
	string
> = {
	[FotoAniversarioFilename.BrenoNetoFreitas1804C6gvgoPng]:
		"Breno Neto Freitas; 18 04 C6gvgo.png",
	[FotoAniversarioFilename.MateusSalomODeBarrosNeto1302C3vdpcPng]:
		"Mateus Salomão De Barros Neto; 13 02 C3vdpc.png",
};

export const FOTOANIVERSARIO_ID_LABELS: Record<FotoAniversarioId, string> = {
	[FotoAniversarioId.Value358932448018433]: "358932448018433",
	[FotoAniversarioId.Value358932448018435]: "358932448018435",
};

export const FOTOANIVERSARIO_META_LABELS: Record<FotoAniversarioMeta, string> =
	{
		[FotoAniversarioMeta.ObjectObject]: "[object Object]",
	};

export const FOTOANIVERSARIO_MIMETYPE_LABELS: Record<
	FotoAniversarioMimetype,
	string
> = {
	[FotoAniversarioMimetype.ImagePng]: "Image/png",
};

export const FOTOANIVERSARIO_PREVIEW_LABELS: Record<
	FotoAniversarioPreview,
	string
> = {
	[FotoAniversarioPreview.StorageUploadsBreno20neto20freitas3b201804C6gvgoPng]:
		"/storage/uploads/breno%20neto%20freitas%3b%2018 04 C6gvgo.png",
	[FotoAniversarioPreview.StorageUploadsMateus20salomC3A3o20de20barros20neto3b201302C3vdpcPng]:
		"/storage/uploads/mateus%20salom%c3%a3o%20de%20barros%20neto%3b%2013 02 C3vdpc.png",
};

export const FOTOANIVERSARIO_SIZE_LABELS: Record<FotoAniversarioSize, string> =
	{
		[FotoAniversarioSize.Value13284]: "13284",
	};

export const FOTOANIVERSARIO_TITLE_LABELS: Record<
	FotoAniversarioTitle,
	string
> = {
	[FotoAniversarioTitle.BrenoNetoFreitas1804]: "Breno Neto Freitas; 18 04",
	[FotoAniversarioTitle.MateusSalomODeBarrosNeto1302]:
		"Mateus Salomão De Barros Neto; 13 02",
};

export const FOTOANIVERSARIO_UPDATEDAT_LABELS: Record<
	FotoAniversarioUpdatedat,
	string
> = {
	[FotoAniversarioUpdatedat.Value20260414t141848602z]:
		"2026 04 14t14:18:48.602z",
	[FotoAniversarioUpdatedat.Value20260414t141848784z]:
		"2026 04 14t14:18:48.784z",
};

export const FOTOANIVERSARIO_URL_LABELS: Record<FotoAniversarioUrl, string> = {
	[FotoAniversarioUrl.StorageUploadsBreno20neto20freitas3b201804C6gvgoPng]:
		"/storage/uploads/breno%20neto%20freitas%3b%2018 04 C6gvgo.png",
	[FotoAniversarioUrl.StorageUploadsMateus20salomC3A3o20de20barros20neto3b201302C3vdpcPng]:
		"/storage/uploads/mateus%20salom%c3%a3o%20de%20barros%20neto%3b%2013 02 C3vdpc.png",
};

export enum FotoFuncionariosCreatedat {
	Value20251103t185830947z = "2025-11-03T18:58:30.947Z",
}

export enum FotoFuncionariosExtname {
	Pdf = ".pdf",
}

export enum FotoFuncionariosFkFuncionarios {
	Value8 = "8",
}

export enum FotoFuncionariosFilename {
	BrasilTecparServicosDeTelecomunicacoes7apdd6Pdf = "BRASIL TECPAR SERVICOS DE TELECOMUNICACOES-7apdd6.pdf",
}

export enum FotoFuncionariosId {
	Value1 = "1",
}

export enum FotoFuncionariosMeta {
	ObjectObject = "[object Object]",
}

export enum FotoFuncionariosMimetype {
	ApplicationPdf = "application/pdf",
}

export enum FotoFuncionariosPreview {
	StorageUploadsBrasil20tecpar20servicos20de20telecomunicacoes7apdd6Pdf = "/storage/uploads/BRASIL%20TECPAR%20SERVICOS%20DE%20TELECOMUNICACOES-7apdd6.pdf",
}

export enum FotoFuncionariosSize {
	Value4792190 = "4792190",
}

export enum FotoFuncionariosTitle {
	BrasilTecparServicosDeTelecomunicacoes = "BRASIL TECPAR SERVICOS DE TELECOMUNICACOES",
}

export enum FotoFuncionariosUpdatedat {
	Value20251103t185831637z = "2025-11-03T18:58:31.637Z",
}

export enum FotoFuncionariosUrl {
	StorageUploadsBrasil20tecpar20servicos20de20telecomunicacoes7apdd6Pdf = "/storage/uploads/BRASIL%20TECPAR%20SERVICOS%20DE%20TELECOMUNICACOES-7apdd6.pdf",
}

export interface FotoFuncionarios {
	id: FotoFuncionariosId;
	f_fk_funcionarios: FotoFuncionariosFkFuncionarios;
	extname: FotoFuncionariosExtname;
	filename: FotoFuncionariosFilename;
	meta: FotoFuncionariosMeta;
	mimetype: FotoFuncionariosMimetype;
	path: string;
	preview: FotoFuncionariosPreview;
	size: FotoFuncionariosSize;
	title: FotoFuncionariosTitle;
	url: FotoFuncionariosUrl;
	updatedAt: FotoFuncionariosUpdatedat;
	createdAt: FotoFuncionariosCreatedat;
}

export interface FotoFuncionariosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type FotoFuncionariosRelationKey = keyof FotoFuncionariosRelations;

export const FOTOFUNCIONARIOS_CREATEDAT_LABELS: Record<
	FotoFuncionariosCreatedat,
	string
> = {
	[FotoFuncionariosCreatedat.Value20251103t185830947z]:
		"2025 11 03t18:58:30.947z",
};

export const FOTOFUNCIONARIOS_EXTNAME_LABELS: Record<
	FotoFuncionariosExtname,
	string
> = {
	[FotoFuncionariosExtname.Pdf]: ".pdf",
};

export const FOTOFUNCIONARIOS_FKFUNCIONARIOS_LABELS: Record<
	FotoFuncionariosFkFuncionarios,
	string
> = {
	[FotoFuncionariosFkFuncionarios.Value8]: "Código 8",
};

export const FOTOFUNCIONARIOS_FILENAME_LABELS: Record<
	FotoFuncionariosFilename,
	string
> = {
	[FotoFuncionariosFilename.BrasilTecparServicosDeTelecomunicacoes7apdd6Pdf]:
		"Brasil Tecpar Servicos DE Telecomunicacoes 7apdd6.pdf",
};

export const FOTOFUNCIONARIOS_ID_LABELS: Record<FotoFuncionariosId, string> = {
	[FotoFuncionariosId.Value1]: "Ativo",
};

export const FOTOFUNCIONARIOS_META_LABELS: Record<
	FotoFuncionariosMeta,
	string
> = {
	[FotoFuncionariosMeta.ObjectObject]: "[object Object]",
};

export const FOTOFUNCIONARIOS_MIMETYPE_LABELS: Record<
	FotoFuncionariosMimetype,
	string
> = {
	[FotoFuncionariosMimetype.ApplicationPdf]: "Application/pdf",
};

export const FOTOFUNCIONARIOS_PREVIEW_LABELS: Record<
	FotoFuncionariosPreview,
	string
> = {
	[FotoFuncionariosPreview.StorageUploadsBrasil20tecpar20servicos20de20telecomunicacoes7apdd6Pdf]:
		"/storage/uploads/brasil%20tecpar%20servicos%20de%20telecomunicacoes 7apdd6.pdf",
};

export const FOTOFUNCIONARIOS_SIZE_LABELS: Record<
	FotoFuncionariosSize,
	string
> = {
	[FotoFuncionariosSize.Value4792190]: "4792190",
};

export const FOTOFUNCIONARIOS_TITLE_LABELS: Record<
	FotoFuncionariosTitle,
	string
> = {
	[FotoFuncionariosTitle.BrasilTecparServicosDeTelecomunicacoes]:
		"Brasil Tecpar Servicos DE Telecomunicacoes",
};

export const FOTOFUNCIONARIOS_UPDATEDAT_LABELS: Record<
	FotoFuncionariosUpdatedat,
	string
> = {
	[FotoFuncionariosUpdatedat.Value20251103t185831637z]:
		"2025 11 03t18:58:31.637z",
};

export const FOTOFUNCIONARIOS_URL_LABELS: Record<FotoFuncionariosUrl, string> =
	{
		[FotoFuncionariosUrl.StorageUploadsBrasil20tecpar20servicos20de20telecomunicacoes7apdd6Pdf]:
			"/storage/uploads/brasil%20tecpar%20servicos%20de%20telecomunicacoes 7apdd6.pdf",
	};

export interface Ij93gv1hx9m {
	f_fk_equipamentos_interfaces: number;
	f_fk_interfaces_equipamentos: number;
}

export type Ij93gv1hx9mRelations = Record<string, never>;

export type Ij93gv1hx9mRelationKey = keyof Ij93gv1hx9mRelations;

export enum InfoArquivosCreatedat {
	Value20260406t123901450z = "2026-04-06T12:39:01.450Z",
	Value20260406t123901461z = "2026-04-06T12:39:01.461Z",
	Value20260406t123901484z = "2026-04-06T12:39:01.484Z",
	Value20260406t123901489z = "2026-04-06T12:39:01.489Z",
}

export enum InfoArquivosArquivoExterno {
	Sim = "sim",
	NO = "não",
}

export enum InfoArquivosFkFuncionarios {
	Value8 = "8",
}

export enum InfoArquivosTitulo {
	ComprovanteDeResidenciaPng = "comprovante_de_residencia.png",
	ECnhPng = "e_cnh.png",
	ETituloEleitoralPng = "e_titulo_eleitoral.png",
	ExameAdmissionalPng = "exame_admissional.png",
}

export enum InfoArquivosId {
	Value357470340907008 = "357470340907008",
	Value357470340907009 = "357470340907009",
	Value357470340907010 = "357470340907010",
	Value357470340907011 = "357470340907011",
}

export enum InfoArquivosUpdatedat {
	Value20260406t124032926z = "2026-04-06T12:40:32.926Z",
	Value20260406t124032953z = "2026-04-06T12:40:32.953Z",
	Value20260406t124032959z = "2026-04-06T12:40:32.959Z",
	Value20260406t124032960z = "2026-04-06T12:40:32.960Z",
}

export interface InfoArquivos {
	id: InfoArquivosId;
	f_fk_funcionarios: InfoArquivosFkFuncionarios;
	f_arquivo_externo: InfoArquivosArquivoExterno;
	f_titulo: InfoArquivosTitulo;
	updatedAt: InfoArquivosUpdatedat;
	createdAt: InfoArquivosCreatedat;
}

export interface InfoArquivosRelations {
	createdBy?: Users | null;
	f_arquivos?: ArquivosFuncionarios | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type InfoArquivosRelationKey = keyof InfoArquivosRelations;

export const INFOARQUIVOS_CREATEDAT_LABELS: Record<
	InfoArquivosCreatedat,
	string
> = {
	[InfoArquivosCreatedat.Value20260406t123901450z]: "2026 04 06t12:39:01.450z",
	[InfoArquivosCreatedat.Value20260406t123901461z]: "2026 04 06t12:39:01.461z",
	[InfoArquivosCreatedat.Value20260406t123901484z]: "2026 04 06t12:39:01.484z",
	[InfoArquivosCreatedat.Value20260406t123901489z]: "2026 04 06t12:39:01.489z",
};

export const INFOARQUIVOS_ARQUIVOEXTERNO_LABELS: Record<
	InfoArquivosArquivoExterno,
	string
> = {
	[InfoArquivosArquivoExterno.Sim]: "Sim",
	[InfoArquivosArquivoExterno.NO]: "Não",
};

export const INFOARQUIVOS_FKFUNCIONARIOS_LABELS: Record<
	InfoArquivosFkFuncionarios,
	string
> = {
	[InfoArquivosFkFuncionarios.Value8]: "Código 8",
};

export const INFOARQUIVOS_TITULO_LABELS: Record<InfoArquivosTitulo, string> = {
	[InfoArquivosTitulo.ComprovanteDeResidenciaPng]:
		"Comprovante De Residencia.png",
	[InfoArquivosTitulo.ECnhPng]: "E Cnh.png",
	[InfoArquivosTitulo.ETituloEleitoralPng]: "E Titulo Eleitoral.png",
	[InfoArquivosTitulo.ExameAdmissionalPng]: "Exame Admissional.png",
};

export const INFOARQUIVOS_ID_LABELS: Record<InfoArquivosId, string> = {
	[InfoArquivosId.Value357470340907008]: "357470340907008",
	[InfoArquivosId.Value357470340907009]: "357470340907009",
	[InfoArquivosId.Value357470340907010]: "357470340907010",
	[InfoArquivosId.Value357470340907011]: "357470340907011",
};

export const INFOARQUIVOS_UPDATEDAT_LABELS: Record<
	InfoArquivosUpdatedat,
	string
> = {
	[InfoArquivosUpdatedat.Value20260406t124032926z]: "2026 04 06t12:40:32.926z",
	[InfoArquivosUpdatedat.Value20260406t124032953z]: "2026 04 06t12:40:32.953z",
	[InfoArquivosUpdatedat.Value20260406t124032959z]: "2026 04 06t12:40:32.959z",
	[InfoArquivosUpdatedat.Value20260406t124032960z]: "2026 04 06t12:40:32.960z",
};

export enum InfoAsoApto {
	True = "true",
}

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
	f_apto: InfoAsoApto;
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

export const INFOASO_APTO_LABELS: Record<InfoAsoApto, string> = {
	[InfoAsoApto.True]: "Sim",
};

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

export enum LancamentosFeriasCreatedat {
	Value20260416t183928917z = "2026-04-16T18:39:28.917Z",
	Value20260416t184323555z = "2026-04-16T18:43:23.555Z",
	Value20260416t184351886z = "2026-04-16T18:43:51.886Z",
	Value20260416t201555880z = "2026-04-16T20:15:55.880Z",
	Value20260416t203102365z = "2026-04-16T20:31:02.365Z",
}

export enum LancamentosFeriasDataRetorno {
	Value20260121 = "2026-01-21",
	Value20260416 = "2026-04-16",
	Value20270411 = "2027-04-11",
	Value20270520 = "2027-05-20",
}

export enum LancamentosFeriasDataSaida {
	Value20260101 = "2026-01-01",
	Value20260401 = "2026-04-01",
	Value20270401 = "2027-04-01",
	Value20270503 = "2027-05-03",
}

export enum LancamentosFeriasDiasGozados {
	Value10 = "10",
	Value15 = "15",
	Value17 = "17",
	Value20 = "20",
}

export enum LancamentosFeriasDiasVendidos {
	Value0 = "0",
	Value10 = "10",
	Value3 = "3",
}

export enum LancamentosFeriasFkPeriodosFerias {
	Value359326593056768 = "359326593056768",
	Value359328040091648 = "359328040091648",
	Value359337976397824 = "359337976397824",
}

export enum LancamentosFeriasObservacoes {
	Teste = "Teste",
	TesteMateus = "Teste Mateus",
}

export enum LancamentosFeriasStatus {
	Cancelada = "cancelada",
	Planejada = "planejada",
	EmAndamento = "em-andamento",
	Aprovada = "aprovada",
	Concluida = "concluida",
}

export enum LancamentosFeriasId {
	Value359327635341312 = "359327635341312",
	Value359328128172032 = "359328128172032",
	Value359328186892288 = "359328186892288",
	Value359339771559936 = "359339771559936",
	Value359341673676800 = "359341673676800",
}

export enum LancamentosFeriasUpdatedat {
	Value20260416t183928924z = "2026-04-16T18:39:28.924Z",
	Value20260416t184323563z = "2026-04-16T18:43:23.563Z",
	Value20260416t184351891z = "2026-04-16T18:43:51.891Z",
	Value20260416t202215439z = "2026-04-16T20:22:15.439Z",
	Value20260416t203209319z = "2026-04-16T20:32:09.319Z",
}

export interface LancamentosFerias {
	id: LancamentosFeriasId;
	f_fk_periodos_ferias: LancamentosFeriasFkPeriodosFerias;
	f_data_retorno: LancamentosFeriasDataRetorno;
	f_data_saida: LancamentosFeriasDataSaida;
	f_dias_gozados: LancamentosFeriasDiasGozados;
	f_dias_vendidos: LancamentosFeriasDiasVendidos;
	f_observacoes: LancamentosFeriasObservacoes;
	f_status: LancamentosFeriasStatus;
	updatedAt: LancamentosFeriasUpdatedat;
	createdAt: LancamentosFeriasCreatedat;
}

export interface LancamentosFeriasRelations {
	createdBy?: Users | null;
	f_periodos_ferias?: PeriodosFerias | null;
	updatedBy?: Users | null;
}

export type LancamentosFeriasRelationKey = keyof LancamentosFeriasRelations;

export const LANCAMENTOSFERIAS_CREATEDAT_LABELS: Record<
	LancamentosFeriasCreatedat,
	string
> = {
	[LancamentosFeriasCreatedat.Value20260416t183928917z]:
		"2026 04 16t18:39:28.917z",
	[LancamentosFeriasCreatedat.Value20260416t184323555z]:
		"2026 04 16t18:43:23.555z",
	[LancamentosFeriasCreatedat.Value20260416t184351886z]:
		"2026 04 16t18:43:51.886z",
	[LancamentosFeriasCreatedat.Value20260416t201555880z]:
		"2026 04 16t20:15:55.880z",
	[LancamentosFeriasCreatedat.Value20260416t203102365z]:
		"2026 04 16t20:31:02.365z",
};

export const LANCAMENTOSFERIAS_DATARETORNO_LABELS: Record<
	LancamentosFeriasDataRetorno,
	string
> = {
	[LancamentosFeriasDataRetorno.Value20260121]: "2026 01 21",
	[LancamentosFeriasDataRetorno.Value20260416]: "2026 04 16",
	[LancamentosFeriasDataRetorno.Value20270411]: "2027 04 11",
	[LancamentosFeriasDataRetorno.Value20270520]: "2027 05 20",
};

export const LANCAMENTOSFERIAS_DATASAIDA_LABELS: Record<
	LancamentosFeriasDataSaida,
	string
> = {
	[LancamentosFeriasDataSaida.Value20260101]: "2026 01 01",
	[LancamentosFeriasDataSaida.Value20260401]: "2026 04 01",
	[LancamentosFeriasDataSaida.Value20270401]: "2027 04 01",
	[LancamentosFeriasDataSaida.Value20270503]: "2027 05 03",
};

export const LANCAMENTOSFERIAS_DIASGOZADOS_LABELS: Record<
	LancamentosFeriasDiasGozados,
	string
> = {
	[LancamentosFeriasDiasGozados.Value10]: "Código 10",
	[LancamentosFeriasDiasGozados.Value15]: "Código 15",
	[LancamentosFeriasDiasGozados.Value17]: "Código 17",
	[LancamentosFeriasDiasGozados.Value20]: "Código 20",
};

export const LANCAMENTOSFERIAS_DIASVENDIDOS_LABELS: Record<
	LancamentosFeriasDiasVendidos,
	string
> = {
	[LancamentosFeriasDiasVendidos.Value0]: "Inativo",
	[LancamentosFeriasDiasVendidos.Value10]: "Código 10",
	[LancamentosFeriasDiasVendidos.Value3]: "Código 3",
};

export const LANCAMENTOSFERIAS_FKPERIODOSFERIAS_LABELS: Record<
	LancamentosFeriasFkPeriodosFerias,
	string
> = {
	[LancamentosFeriasFkPeriodosFerias.Value359326593056768]: "359326593056768",
	[LancamentosFeriasFkPeriodosFerias.Value359328040091648]: "359328040091648",
	[LancamentosFeriasFkPeriodosFerias.Value359337976397824]: "359337976397824",
};

export const LANCAMENTOSFERIAS_OBSERVACOES_LABELS: Record<
	LancamentosFeriasObservacoes,
	string
> = {
	[LancamentosFeriasObservacoes.Teste]: "Teste",
	[LancamentosFeriasObservacoes.TesteMateus]: "Teste Mateus",
};

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

export const LANCAMENTOSFERIAS_ID_LABELS: Record<LancamentosFeriasId, string> =
	{
		[LancamentosFeriasId.Value359327635341312]: "359327635341312",
		[LancamentosFeriasId.Value359328128172032]: "359328128172032",
		[LancamentosFeriasId.Value359328186892288]: "359328186892288",
		[LancamentosFeriasId.Value359339771559936]: "359339771559936",
		[LancamentosFeriasId.Value359341673676800]: "359341673676800",
	};

export const LANCAMENTOSFERIAS_UPDATEDAT_LABELS: Record<
	LancamentosFeriasUpdatedat,
	string
> = {
	[LancamentosFeriasUpdatedat.Value20260416t183928924z]:
		"2026 04 16t18:39:28.924z",
	[LancamentosFeriasUpdatedat.Value20260416t184323563z]:
		"2026 04 16t18:43:23.563z",
	[LancamentosFeriasUpdatedat.Value20260416t184351891z]:
		"2026 04 16t18:43:51.891z",
	[LancamentosFeriasUpdatedat.Value20260416t202215439z]:
		"2026 04 16t20:22:15.439z",
	[LancamentosFeriasUpdatedat.Value20260416t203209319z]:
		"2026 04 16t20:32:09.319z",
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

export enum LogsCargosCbo {
	Value732130InstaladorReparadorDeRedesTelefNicasEDeComunicaODeDados = "732130 - Instalador-reparador de redes telefônicas e de comunicação de dados",
}

export enum LogsCargosCreatedat {
	Value20260320t183424998z = "2026-03-20T18:34:24.998Z",
	Value20260320t195157986z = "2026-03-20T19:51:57.986Z",
	Value20260331t185806121z = "2026-03-31T18:58:06.121Z",
}

export enum LogsCargosDataInicioCargo {
	Value20032026 = "20/03/2026",
	Value31032026 = "31/03/2026",
}

export enum LogsCargosFkFuncionarios {
	Value116 = "116",
	Value8 = "8",
}

export enum LogsCargosNomeCargo {
	AssistenteSuporteTCnico = "Assistente Suporte Técnico",
	AuxiliarTCnico = "Auxiliar Técnico",
	Outro = "Outro",
}

export enum LogsCargosId {
	Value354434761621506 = "354434761621506",
	Value354444519669762 = "354444519669762",
	Value356430877032450 = "356430877032450",
}

export enum LogsCargosUpdatedat {
	Value20260320t185853194z = "2026-03-20T18:58:53.194Z",
	Value20260320t195157986z = "2026-03-20T19:51:57.986Z",
	Value20260331t185806121z = "2026-03-31T18:58:06.121Z",
}

export interface LogsCargos {
	id: LogsCargosId;
	f_fk_funcionarios: LogsCargosFkFuncionarios;
	CBO: LogsCargosCbo;
	f_atividades: string;
	f_cargo_anterior: string;
	f_data_inicio_cargo: LogsCargosDataInicioCargo;
	f_descricao: string;
	f_nome_cargo: LogsCargosNomeCargo;
	updatedAt: LogsCargosUpdatedat;
	createdAt: LogsCargosCreatedat;
}

export interface LogsCargosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type LogsCargosRelationKey = keyof LogsCargosRelations;

export const LOGSCARGOS_CBO_LABELS: Record<LogsCargosCbo, string> = {
	[LogsCargosCbo.Value732130InstaladorReparadorDeRedesTelefNicasEDeComunicaODeDados]:
		"732130 Instalador Reparador De Redes Telefônicas E De Comunicação De Dados",
};

export const LOGSCARGOS_CREATEDAT_LABELS: Record<LogsCargosCreatedat, string> =
	{
		[LogsCargosCreatedat.Value20260320t183424998z]: "2026 03 20t18:34:24.998z",
		[LogsCargosCreatedat.Value20260320t195157986z]: "2026 03 20t19:51:57.986z",
		[LogsCargosCreatedat.Value20260331t185806121z]: "2026 03 31t18:58:06.121z",
	};

export const LOGSCARGOS_DATAINICIOCARGO_LABELS: Record<
	LogsCargosDataInicioCargo,
	string
> = {
	[LogsCargosDataInicioCargo.Value20032026]: "20/03/2026",
	[LogsCargosDataInicioCargo.Value31032026]: "31/03/2026",
};

export const LOGSCARGOS_FKFUNCIONARIOS_LABELS: Record<
	LogsCargosFkFuncionarios,
	string
> = {
	[LogsCargosFkFuncionarios.Value116]: "116",
	[LogsCargosFkFuncionarios.Value8]: "Código 8",
};

export const LOGSCARGOS_NOMECARGO_LABELS: Record<LogsCargosNomeCargo, string> =
	{
		[LogsCargosNomeCargo.AssistenteSuporteTCnico]: "Assistente Suporte Técnico",
		[LogsCargosNomeCargo.AuxiliarTCnico]: "Auxiliar Técnico",
		[LogsCargosNomeCargo.Outro]: "Outro",
	};

export const LOGSCARGOS_ID_LABELS: Record<LogsCargosId, string> = {
	[LogsCargosId.Value354434761621506]: "354434761621506",
	[LogsCargosId.Value354444519669762]: "354444519669762",
	[LogsCargosId.Value356430877032450]: "356430877032450",
};

export const LOGSCARGOS_UPDATEDAT_LABELS: Record<LogsCargosUpdatedat, string> =
	{
		[LogsCargosUpdatedat.Value20260320t185853194z]: "2026 03 20t18:58:53.194z",
		[LogsCargosUpdatedat.Value20260320t195157986z]: "2026 03 20t19:51:57.986z",
		[LogsCargosUpdatedat.Value20260331t185806121z]: "2026 03 31t18:58:06.121z",
	};

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

export enum NegociacoesItensTipoIxc {
	I = "I",
	S = "S",
	Smp = "SMP",
	Sva = "SVA",
	T = "T",
	Tv = "TV",
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
	f_tipo_ixc: NegociacoesItensTipoIxc;
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

export const NEGOCIACOESITENS_TIPOIXC_LABELS: Record<
	NegociacoesItensTipoIxc,
	string
> = {
	[NegociacoesItensTipoIxc.I]: "Inativo",
	[NegociacoesItensTipoIxc.S]: "Sim",
	[NegociacoesItensTipoIxc.Smp]: "SMP",
	[NegociacoesItensTipoIxc.Sva]: "SVA",
	[NegociacoesItensTipoIxc.T]: "T",
	[NegociacoesItensTipoIxc.Tv]: "TV",
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

export enum Nukww9tmq83Fk1SetorTipos {
	Value1 = "1",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
	Value14 = "14",
	Value15 = "15",
	Value17 = "17",
	Value18 = "18",
	Value2 = "2",
	Value20 = "20",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
}

export enum Nukww9tmq83Fk2SetorTipos {
	Value1 = "1",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
}

export interface Nukww9tmq83 {
	f_fk1_setor_tipos: Nukww9tmq83Fk1SetorTipos;
	f_fk2_setor_tipos: Nukww9tmq83Fk2SetorTipos;
}

export type Nukww9tmq83Relations = Record<string, never>;

export type Nukww9tmq83RelationKey = keyof Nukww9tmq83Relations;

export const NUKWW9TMQ83_FK1SETORTIPOS_LABELS: Record<
	Nukww9tmq83Fk1SetorTipos,
	string
> = {
	[Nukww9tmq83Fk1SetorTipos.Value1]: "Ativo",
	[Nukww9tmq83Fk1SetorTipos.Value10]: "Código 10",
	[Nukww9tmq83Fk1SetorTipos.Value11]: "Código 11",
	[Nukww9tmq83Fk1SetorTipos.Value12]: "Código 12",
	[Nukww9tmq83Fk1SetorTipos.Value13]: "Código 13",
	[Nukww9tmq83Fk1SetorTipos.Value14]: "Código 14",
	[Nukww9tmq83Fk1SetorTipos.Value15]: "Código 15",
	[Nukww9tmq83Fk1SetorTipos.Value17]: "Código 17",
	[Nukww9tmq83Fk1SetorTipos.Value18]: "Código 18",
	[Nukww9tmq83Fk1SetorTipos.Value2]: "Código 2",
	[Nukww9tmq83Fk1SetorTipos.Value20]: "Código 20",
	[Nukww9tmq83Fk1SetorTipos.Value3]: "Código 3",
	[Nukww9tmq83Fk1SetorTipos.Value4]: "Código 4",
	[Nukww9tmq83Fk1SetorTipos.Value5]: "Código 5",
	[Nukww9tmq83Fk1SetorTipos.Value6]: "Código 6",
	[Nukww9tmq83Fk1SetorTipos.Value7]: "Código 7",
	[Nukww9tmq83Fk1SetorTipos.Value8]: "Código 8",
	[Nukww9tmq83Fk1SetorTipos.Value9]: "Código 9",
};

export const NUKWW9TMQ83_FK2SETORTIPOS_LABELS: Record<
	Nukww9tmq83Fk2SetorTipos,
	string
> = {
	[Nukww9tmq83Fk2SetorTipos.Value1]: "Ativo",
	[Nukww9tmq83Fk2SetorTipos.Value3]: "Código 3",
	[Nukww9tmq83Fk2SetorTipos.Value4]: "Código 4",
	[Nukww9tmq83Fk2SetorTipos.Value5]: "Código 5",
	[Nukww9tmq83Fk2SetorTipos.Value6]: "Código 6",
	[Nukww9tmq83Fk2SetorTipos.Value7]: "Código 7",
	[Nukww9tmq83Fk2SetorTipos.Value8]: "Código 8",
	[Nukww9tmq83Fk2SetorTipos.Value9]: "Código 9",
};

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

export enum OpcoesSmpBonus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value5 = "5",
}

export enum OpcoesSmpFranquiaDados {
	Value14 = "14",
	Value22 = "22",
	Value3 = "3",
	Value30 = "30",
	Value45 = "45",
	Value7 = "7",
}

export enum OpcoesSmpMinutos {
	Value100 = "100",
	Value50 = "50",
	Ilimitado = "Ilimitado",
}

export enum OpcoesSmpNomeDoPlano {
	EaiChip14Gb2GbBonus = "Eai Chip 14 GB + 2 GB Bonus",
	EaiChip22Gb3GbBonus = "Eai Chip 22 GB + 3 GB Bonus",
	EaiChip3Gb1GbBonus = "Eai Chip 3 GB + 1 GB Bonus",
	EaiChip30Gb5GbBonus = "Eai Chip 30 GB + 5 GB Bonus",
	EaiChip45Gb5GbBonus = "Eai Chip 45 GB + 5 GB Bonus",
	EaiChip7Gb1GbBonus = "Eai Chip 7 GB + 1 GB Bonus",
}

export enum OpcoesSmpPortabilidade {
	Value0 = "0",
	Value1 = "1",
}

export enum OpcoesSmpSms {
	Value100 = "100",
	Value20 = "20",
	Value50 = "50",
}

export enum OpcoesSmpSvaIncluso {
	SkeeloEbookAvanAdo = "Skeelo - Ebook Avançado",
	SkeeloEbookGold = "Skeelo - Ebook Gold",
	SkeeloEbookIntermediRio = "Skeelo - Ebook Intermediário",
	SkeeloEbookPremium = "Skeelo - Ebook Premium",
	SkeeloEbookPremiumPlus = "Skeelo - Ebook Premium Plus",
	SkeeloEbookRegular = "Skeelo - Ebook Regular",
}

export enum OpcoesSmpTerminal {
	Value49999834372 = "(49)99983-4372",
	Value499991066121 = "49 999106-6121",
	Value4999940495 = "49 9994-0495",
}

export enum OpcoesSmpValorSmp {
	Value13 = "13",
	Value21 = "21",
	Value26 = "26",
	Value30 = "30",
	Value38 = "38",
	Value41 = "41",
}

export enum OpcoesSmpValorSva {
	Value149 = "14.9",
	Value189 = "18.9",
	Value259 = "25.9",
	Value299 = "29.9",
	Value349 = "34.9",
	Value99 = "9.9",
}

export interface OpcoesSmp {
	id: number;
	f_fk_prod_negociacao_opcoes_smp: number;
	f_bonus: OpcoesSmpBonus;
	f_franquia_dados: OpcoesSmpFranquiaDados;
	f_minutos: OpcoesSmpMinutos;
	f_nome_do_plano: OpcoesSmpNomeDoPlano;
	f_portabilidade: OpcoesSmpPortabilidade;
	f_sms: OpcoesSmpSms;
	f_sva_incluso: OpcoesSmpSvaIncluso;
	f_terminal: OpcoesSmpTerminal;
	f_valor_smp: OpcoesSmpValorSmp;
	f_valor_sva: OpcoesSmpValorSva;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesSmpRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesSmpRelationKey = keyof OpcoesSmpRelations;

export const OPCOESSMP_BONUS_LABELS: Record<OpcoesSmpBonus, string> = {
	[OpcoesSmpBonus.Value1]: "Ativo",
	[OpcoesSmpBonus.Value2]: "Código 2",
	[OpcoesSmpBonus.Value3]: "Código 3",
	[OpcoesSmpBonus.Value5]: "Código 5",
};

export const OPCOESSMP_FRANQUIADADOS_LABELS: Record<
	OpcoesSmpFranquiaDados,
	string
> = {
	[OpcoesSmpFranquiaDados.Value14]: "Código 14",
	[OpcoesSmpFranquiaDados.Value22]: "Código 22",
	[OpcoesSmpFranquiaDados.Value3]: "Código 3",
	[OpcoesSmpFranquiaDados.Value30]: "Código 30",
	[OpcoesSmpFranquiaDados.Value45]: "Código 45",
	[OpcoesSmpFranquiaDados.Value7]: "Código 7",
};

export const OPCOESSMP_MINUTOS_LABELS: Record<OpcoesSmpMinutos, string> = {
	[OpcoesSmpMinutos.Value100]: "100",
	[OpcoesSmpMinutos.Value50]: "Código 50",
	[OpcoesSmpMinutos.Ilimitado]: "Ilimitado",
};

export const OPCOESSMP_NOMEDOPLANO_LABELS: Record<
	OpcoesSmpNomeDoPlano,
	string
> = {
	[OpcoesSmpNomeDoPlano.EaiChip14Gb2GbBonus]: "Eai Chip 14 GB + 2 GB Bonus",
	[OpcoesSmpNomeDoPlano.EaiChip22Gb3GbBonus]: "Eai Chip 22 GB + 3 GB Bonus",
	[OpcoesSmpNomeDoPlano.EaiChip3Gb1GbBonus]: "Eai Chip 3 GB + 1 GB Bonus",
	[OpcoesSmpNomeDoPlano.EaiChip30Gb5GbBonus]: "Eai Chip 30 GB + 5 GB Bonus",
	[OpcoesSmpNomeDoPlano.EaiChip45Gb5GbBonus]: "Eai Chip 45 GB + 5 GB Bonus",
	[OpcoesSmpNomeDoPlano.EaiChip7Gb1GbBonus]: "Eai Chip 7 GB + 1 GB Bonus",
};

export const OPCOESSMP_PORTABILIDADE_LABELS: Record<
	OpcoesSmpPortabilidade,
	string
> = {
	[OpcoesSmpPortabilidade.Value0]: "NÃO",
	[OpcoesSmpPortabilidade.Value1]: "SIM",
};

export const OPCOESSMP_SMS_LABELS: Record<OpcoesSmpSms, string> = {
	[OpcoesSmpSms.Value100]: "100",
	[OpcoesSmpSms.Value20]: "Código 20",
	[OpcoesSmpSms.Value50]: "Código 50",
};

export const OPCOESSMP_SVAINCLUSO_LABELS: Record<OpcoesSmpSvaIncluso, string> =
	{
		[OpcoesSmpSvaIncluso.SkeeloEbookAvanAdo]: "Skeelo Ebook Avançado",
		[OpcoesSmpSvaIncluso.SkeeloEbookGold]: "Skeelo Ebook Gold",
		[OpcoesSmpSvaIncluso.SkeeloEbookIntermediRio]: "Skeelo Ebook Intermediário",
		[OpcoesSmpSvaIncluso.SkeeloEbookPremium]: "Skeelo Ebook Premium",
		[OpcoesSmpSvaIncluso.SkeeloEbookPremiumPlus]: "Skeelo Ebook Premium Plus",
		[OpcoesSmpSvaIncluso.SkeeloEbookRegular]: "Skeelo Ebook Regular",
	};

export const OPCOESSMP_TERMINAL_LABELS: Record<OpcoesSmpTerminal, string> = {
	[OpcoesSmpTerminal.Value49999834372]: "(49)99983 4372",
	[OpcoesSmpTerminal.Value499991066121]: "49 999106 6121",
	[OpcoesSmpTerminal.Value4999940495]: "49 9994 0495",
};

export const OPCOESSMP_VALORSMP_LABELS: Record<OpcoesSmpValorSmp, string> = {
	[OpcoesSmpValorSmp.Value13]: "Código 13",
	[OpcoesSmpValorSmp.Value21]: "Código 21",
	[OpcoesSmpValorSmp.Value26]: "Código 26",
	[OpcoesSmpValorSmp.Value30]: "Código 30",
	[OpcoesSmpValorSmp.Value38]: "Código 38",
	[OpcoesSmpValorSmp.Value41]: "Código 41",
};

export const OPCOESSMP_VALORSVA_LABELS: Record<OpcoesSmpValorSva, string> = {
	[OpcoesSmpValorSva.Value149]: "14.9",
	[OpcoesSmpValorSva.Value189]: "18.9",
	[OpcoesSmpValorSva.Value259]: "25.9",
	[OpcoesSmpValorSva.Value299]: "29.9",
	[OpcoesSmpValorSva.Value349]: "34.9",
	[OpcoesSmpValorSva.Value99]: "9.9",
};

export enum OpcoesSmpTemplateBonus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value5 = "5",
}

export enum OpcoesSmpTemplateFranquiaDados {
	Value14 = "14",
	Value22 = "22",
	Value3 = "3",
	Value30 = "30",
	Value45 = "45",
	Value7 = "7",
}

export enum OpcoesSmpTemplateMinutos {
	Value100 = "100",
	Value50 = "50",
	Ilimitado = "Ilimitado",
}

export enum OpcoesSmpTemplateNomePlano {
	EaiChip14Gb2GbBonus = "Eai Chip 14 GB + 2 GB Bonus",
	EaiChip22Gb3GbBonus = "Eai Chip 22 GB + 3 GB Bonus",
	EaiChip3Gb1GbBonus = "Eai Chip 3 GB + 1 GB Bonus",
	EaiChip30Gb5GbBonus = "Eai Chip 30 GB + 5 GB Bonus",
	EaiChip45Gb5GbBonus = "Eai Chip 45 GB + 5 GB Bonus",
	EaiChip7Gb1GbBonus = "Eai Chip 7 GB + 1 GB Bonus",
}

export enum OpcoesSmpTemplateSms {
	Value100 = "100",
	Value20 = "20",
	Value50 = "50",
}

export enum OpcoesSmpTemplateSvaIncluso {
	SkeeloEbookAvanAdo = "Skeelo - Ebook Avançado",
	SkeeloEbookGold = "Skeelo - Ebook Gold",
	SkeeloEbookIntermediRio = "Skeelo - Ebook Intermediário",
	SkeeloEbookPremium = "Skeelo - Ebook Premium",
	SkeeloEbookPremiumPlus = "Skeelo - Ebook Premium Plus",
	SkeeloEbookRegular = "Skeelo - Ebook Regular",
}

export enum OpcoesSmpTemplateValorSmp {
	Value13 = "13",
	Value21 = "21",
	Value26 = "26",
	Value30 = "30",
	Value38 = "38",
	Value41 = "41",
}

export enum OpcoesSmpTemplateValorSva {
	Value149 = "14.9",
	Value189 = "18.9",
	Value259 = "25.9",
	Value299 = "29.9",
	Value349 = "34.9",
	Value99 = "9.9",
}

export interface OpcoesSmpTemplate {
	id: number;
	f_fk_smp_produtos: number;
	f_bonus: OpcoesSmpTemplateBonus;
	f_franquia_dados: OpcoesSmpTemplateFranquiaDados;
	f_minutos: OpcoesSmpTemplateMinutos;
	f_nome_plano: OpcoesSmpTemplateNomePlano;
	f_sms: OpcoesSmpTemplateSms;
	f_sva_incluso: OpcoesSmpTemplateSvaIncluso;
	f_valor_smp: OpcoesSmpTemplateValorSmp;
	f_valor_sva: OpcoesSmpTemplateValorSva;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesSmpTemplateRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesSmpTemplateRelationKey = keyof OpcoesSmpTemplateRelations;

export const OPCOESSMPTEMPLATE_BONUS_LABELS: Record<
	OpcoesSmpTemplateBonus,
	string
> = {
	[OpcoesSmpTemplateBonus.Value1]: "Ativo",
	[OpcoesSmpTemplateBonus.Value2]: "Código 2",
	[OpcoesSmpTemplateBonus.Value3]: "Código 3",
	[OpcoesSmpTemplateBonus.Value5]: "Código 5",
};

export const OPCOESSMPTEMPLATE_FRANQUIADADOS_LABELS: Record<
	OpcoesSmpTemplateFranquiaDados,
	string
> = {
	[OpcoesSmpTemplateFranquiaDados.Value14]: "Código 14",
	[OpcoesSmpTemplateFranquiaDados.Value22]: "Código 22",
	[OpcoesSmpTemplateFranquiaDados.Value3]: "Código 3",
	[OpcoesSmpTemplateFranquiaDados.Value30]: "Código 30",
	[OpcoesSmpTemplateFranquiaDados.Value45]: "Código 45",
	[OpcoesSmpTemplateFranquiaDados.Value7]: "Código 7",
};

export const OPCOESSMPTEMPLATE_MINUTOS_LABELS: Record<
	OpcoesSmpTemplateMinutos,
	string
> = {
	[OpcoesSmpTemplateMinutos.Value100]: "100",
	[OpcoesSmpTemplateMinutos.Value50]: "Código 50",
	[OpcoesSmpTemplateMinutos.Ilimitado]: "Ilimitado",
};

export const OPCOESSMPTEMPLATE_NOMEPLANO_LABELS: Record<
	OpcoesSmpTemplateNomePlano,
	string
> = {
	[OpcoesSmpTemplateNomePlano.EaiChip14Gb2GbBonus]:
		"Eai Chip 14 GB + 2 GB Bonus",
	[OpcoesSmpTemplateNomePlano.EaiChip22Gb3GbBonus]:
		"Eai Chip 22 GB + 3 GB Bonus",
	[OpcoesSmpTemplateNomePlano.EaiChip3Gb1GbBonus]: "Eai Chip 3 GB + 1 GB Bonus",
	[OpcoesSmpTemplateNomePlano.EaiChip30Gb5GbBonus]:
		"Eai Chip 30 GB + 5 GB Bonus",
	[OpcoesSmpTemplateNomePlano.EaiChip45Gb5GbBonus]:
		"Eai Chip 45 GB + 5 GB Bonus",
	[OpcoesSmpTemplateNomePlano.EaiChip7Gb1GbBonus]: "Eai Chip 7 GB + 1 GB Bonus",
};

export const OPCOESSMPTEMPLATE_SMS_LABELS: Record<
	OpcoesSmpTemplateSms,
	string
> = {
	[OpcoesSmpTemplateSms.Value100]: "100",
	[OpcoesSmpTemplateSms.Value20]: "Código 20",
	[OpcoesSmpTemplateSms.Value50]: "Código 50",
};

export const OPCOESSMPTEMPLATE_SVAINCLUSO_LABELS: Record<
	OpcoesSmpTemplateSvaIncluso,
	string
> = {
	[OpcoesSmpTemplateSvaIncluso.SkeeloEbookAvanAdo]: "Skeelo Ebook Avançado",
	[OpcoesSmpTemplateSvaIncluso.SkeeloEbookGold]: "Skeelo Ebook Gold",
	[OpcoesSmpTemplateSvaIncluso.SkeeloEbookIntermediRio]:
		"Skeelo Ebook Intermediário",
	[OpcoesSmpTemplateSvaIncluso.SkeeloEbookPremium]: "Skeelo Ebook Premium",
	[OpcoesSmpTemplateSvaIncluso.SkeeloEbookPremiumPlus]:
		"Skeelo Ebook Premium Plus",
	[OpcoesSmpTemplateSvaIncluso.SkeeloEbookRegular]: "Skeelo Ebook Regular",
};

export const OPCOESSMPTEMPLATE_VALORSMP_LABELS: Record<
	OpcoesSmpTemplateValorSmp,
	string
> = {
	[OpcoesSmpTemplateValorSmp.Value13]: "Código 13",
	[OpcoesSmpTemplateValorSmp.Value21]: "Código 21",
	[OpcoesSmpTemplateValorSmp.Value26]: "Código 26",
	[OpcoesSmpTemplateValorSmp.Value30]: "Código 30",
	[OpcoesSmpTemplateValorSmp.Value38]: "Código 38",
	[OpcoesSmpTemplateValorSmp.Value41]: "Código 41",
};

export const OPCOESSMPTEMPLATE_VALORSVA_LABELS: Record<
	OpcoesSmpTemplateValorSva,
	string
> = {
	[OpcoesSmpTemplateValorSva.Value149]: "14.9",
	[OpcoesSmpTemplateValorSva.Value189]: "18.9",
	[OpcoesSmpTemplateValorSva.Value259]: "25.9",
	[OpcoesSmpTemplateValorSva.Value299]: "29.9",
	[OpcoesSmpTemplateValorSva.Value349]: "34.9",
	[OpcoesSmpTemplateValorSva.Value99]: "9.9",
};

export enum OpcoesStfcCanais {
	Value1 = "1",
}

export enum OpcoesStfcFranquia {
	Ilimitado = "ILIMITADO",
}

export enum OpcoesStfcNomeDoPlano {
	AtpFone = "ATP Fone",
}

export enum OpcoesStfcPortabilidade {
	Sim = "SIM",
	Nao = "NAO",
}

export interface OpcoesStfc {
	id: number;
	f_fk_opcoes_stfc: number;
	f_canais: OpcoesStfcCanais;
	f_franquia: OpcoesStfcFranquia;
	f_nome_do_plano: OpcoesStfcNomeDoPlano;
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

export const OPCOESSTFC_CANAIS_LABELS: Record<OpcoesStfcCanais, string> = {
	[OpcoesStfcCanais.Value1]: "Ativo",
};

export const OPCOESSTFC_FRANQUIA_LABELS: Record<OpcoesStfcFranquia, string> = {
	[OpcoesStfcFranquia.Ilimitado]: "Ilimitado",
};

export const OPCOESSTFC_NOMEDOPLANO_LABELS: Record<
	OpcoesStfcNomeDoPlano,
	string
> = {
	[OpcoesStfcNomeDoPlano.AtpFone]: "ATP Fone",
};

export const OPCOESSTFC_PORTABILIDADE_LABELS: Record<
	OpcoesStfcPortabilidade,
	string
> = {
	[OpcoesStfcPortabilidade.Sim]: "SIM",
	[OpcoesStfcPortabilidade.Nao]: "NÃO",
};

export enum OpcoesStfcTemplateCanais {
	Value1 = "1",
	Value10 = "10",
	Value15 = "15",
	Value30 = "30",
	Value5 = "5",
}

export enum OpcoesStfcTemplateFranquia {
	Ilimitado = "ILIMITADO",
}

export enum OpcoesStfcTemplatePortabilidade {
	Value0 = "0",
	Value1 = "1",
}

export interface OpcoesStfcTemplate {
	id: number;
	f_fk_opcoes_stfc_template: number;
	f_canais: OpcoesStfcTemplateCanais;
	f_franquia: OpcoesStfcTemplateFranquia;
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

export const OPCOESSTFCTEMPLATE_CANAIS_LABELS: Record<
	OpcoesStfcTemplateCanais,
	string
> = {
	[OpcoesStfcTemplateCanais.Value1]: "Ativo",
	[OpcoesStfcTemplateCanais.Value10]: "Código 10",
	[OpcoesStfcTemplateCanais.Value15]: "Código 15",
	[OpcoesStfcTemplateCanais.Value30]: "Código 30",
	[OpcoesStfcTemplateCanais.Value5]: "Código 5",
};

export const OPCOESSTFCTEMPLATE_FRANQUIA_LABELS: Record<
	OpcoesStfcTemplateFranquia,
	string
> = {
	[OpcoesStfcTemplateFranquia.Ilimitado]: "Ilimitado",
};

export const OPCOESSTFCTEMPLATE_PORTABILIDADE_LABELS: Record<
	OpcoesStfcTemplatePortabilidade,
	string
> = {
	[OpcoesStfcTemplatePortabilidade.Value0]: "NÃO",
	[OpcoesStfcTemplatePortabilidade.Value1]: "SIM",
};

export enum P10scfhrhkwM7vet8zixc9 {
	Value342478045446144 = "342478045446144",
	Value342478047543298 = "342478047543298",
}

export interface P10scfhrhkw {
	id: number;
	f_m7vet8zixc9: P10scfhrhkwM7vet8zixc9;
	updatedAt: string;
	createdAt: string;
}

export interface P10scfhrhkwRelations {
	createdBy?: Users | null;
	f_ytw8yxxeul0?: _902ctke5dhq | null;
	updatedBy?: Users | null;
}

export type P10scfhrhkwRelationKey = keyof P10scfhrhkwRelations;

export const P10SCFHRHKW_M7VET8ZIXC9_LABELS: Record<
	P10scfhrhkwM7vet8zixc9,
	string
> = {
	[P10scfhrhkwM7vet8zixc9.Value342478045446144]: "342478045446144",
	[P10scfhrhkwM7vet8zixc9.Value342478047543298]: "342478047543298",
};

export enum PacotesAbreAtendimento {
	Value0 = "0",
	Value1 = "1",
}

export enum PacotesFkDescontoPacotes {
	Value3 = "3",
	Value4 = "4",
}

export enum PacotesFkIdPacote {
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
	f_fk_desconto_pacotes: PacotesFkDescontoPacotes;
	f_fk_id_pacote: PacotesFkIdPacote;
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

export const PACOTES_FKDESCONTOPACOTES_LABELS: Record<
	PacotesFkDescontoPacotes,
	string
> = {
	[PacotesFkDescontoPacotes.Value3]: "Código 3",
	[PacotesFkDescontoPacotes.Value4]: "Código 4",
};

export const PACOTES_FKIDPACOTE_LABELS: Record<PacotesFkIdPacote, string> = {
	[PacotesFkIdPacote.Value1]: "Ativo",
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

export enum ParentescoCreatedat {
	Value20260223t190333591z = "2026-02-23T19:03:33.591Z",
	Value20260406t124358509z = "2026-04-06T12:43:58.509Z",
}

export enum ParentescoCpf {
	Value12345678944 = "12345678944",
}

export enum ParentescoFkFuncionarios {
	Value8 = "8",
}

export enum ParentescoNome {
	MaribelAparecidaDeBarrosNeto = "Maribel Aparecida de Barros Neto",
	Teste = "Teste",
}

export enum ParentescoVinculoColaborador {
	Filho = "Filho",
	ME = "Mãe",
}

export enum ParentescoId {
	Value349908581220352 = "349908581220352",
	Value357470963761152 = "357470963761152",
}

export enum ParentescoUpdatedat {
	Value20260310t201528611z = "2026-03-10T20:15:28.611Z",
	Value20260406t124358509z = "2026-04-06T12:43:58.509Z",
}

export interface Parentesco {
	id: ParentescoId;
	f_fk_funcionarios: ParentescoFkFuncionarios;
	f_cpf: ParentescoCpf;
	f_nome: ParentescoNome;
	f_vinculo_colaborador: ParentescoVinculoColaborador;
	updatedAt: ParentescoUpdatedat;
	createdAt: ParentescoCreatedat;
}

export interface ParentescoRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type ParentescoRelationKey = keyof ParentescoRelations;

export const PARENTESCO_CREATEDAT_LABELS: Record<ParentescoCreatedat, string> =
	{
		[ParentescoCreatedat.Value20260223t190333591z]: "2026 02 23t19:03:33.591z",
		[ParentescoCreatedat.Value20260406t124358509z]: "2026 04 06t12:43:58.509z",
	};

export const PARENTESCO_CPF_LABELS: Record<ParentescoCpf, string> = {
	[ParentescoCpf.Value12345678944]: "12345678944",
};

export const PARENTESCO_FKFUNCIONARIOS_LABELS: Record<
	ParentescoFkFuncionarios,
	string
> = {
	[ParentescoFkFuncionarios.Value8]: "Código 8",
};

export const PARENTESCO_NOME_LABELS: Record<ParentescoNome, string> = {
	[ParentescoNome.MaribelAparecidaDeBarrosNeto]:
		"Maribel Aparecida De Barros Neto",
	[ParentescoNome.Teste]: "Teste",
};

export const PARENTESCO_VINCULOCOLABORADOR_LABELS: Record<
	ParentescoVinculoColaborador,
	string
> = {
	[ParentescoVinculoColaborador.Filho]: "Filho",
	[ParentescoVinculoColaborador.ME]: "Mãe",
};

export const PARENTESCO_ID_LABELS: Record<ParentescoId, string> = {
	[ParentescoId.Value349908581220352]: "349908581220352",
	[ParentescoId.Value357470963761152]: "357470963761152",
};

export const PARENTESCO_UPDATEDAT_LABELS: Record<ParentescoUpdatedat, string> =
	{
		[ParentescoUpdatedat.Value20260310t201528611z]: "2026 03 10t20:15:28.611z",
		[ParentescoUpdatedat.Value20260406t124358509z]: "2026 04 06t12:43:58.509z",
	};

export enum PatrimonioEstadoUso {
	Novo = "NOVO",
	UsadoEmEstadoDeNovo = "USADO, EM ESTADO DE NOVO",
	UsadoComMarcasDeUso = "USADO, COM MARCAS DE USO",
}

export enum PatrimonioQuantidade {
	Value1 = "1",
}

export enum PatrimonioSo {
	Value1 = "1",
	Hyperos = "HyperOS",
	Windows = "windows",
	Windows11 = "WINDOWS 11",
	Windows11EntrepriseLtsc = "Windows 11 Entreprise  LTSC",
	Windows11Pro = "windows 11 pro",
	Windows11Pro25h2 = "Windows 11 Pro 25H2",
}

export enum PatrimonioTipoPatrimonio {
	Value1 = "1",
}

export enum PatrimonioValorPatrimonio {
	Value1 = "1",
	Value111 = "111",
	Value2000 = "2000",
	Value2222 = "2222",
	Value2500 = "2500",
	Value3000 = "3000",
	Value517 = "517",
	Value700 = "700",
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
	f_quantidade: PatrimonioQuantidade;
	f_ram: string;
	f_so: PatrimonioSo;
	f_tipo_patrimonio: PatrimonioTipoPatrimonio;
	f_valor_patrimonio: PatrimonioValorPatrimonio;
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

export const PATRIMONIO_QUANTIDADE_LABELS: Record<
	PatrimonioQuantidade,
	string
> = {
	[PatrimonioQuantidade.Value1]: "Ativo",
};

export const PATRIMONIO_SO_LABELS: Record<PatrimonioSo, string> = {
	[PatrimonioSo.Value1]: "Ativo",
	[PatrimonioSo.Hyperos]: "Hyperos",
	[PatrimonioSo.Windows]: "Windows",
	[PatrimonioSo.Windows11]: "Windows 11",
	[PatrimonioSo.Windows11EntrepriseLtsc]: "Windows 11 Entreprise LTSC",
	[PatrimonioSo.Windows11Pro]: "Windows 11 Pro",
	[PatrimonioSo.Windows11Pro25h2]: "Windows 11 Pro 25h2",
};

export const PATRIMONIO_TIPOPATRIMONIO_LABELS: Record<
	PatrimonioTipoPatrimonio,
	string
> = {
	[PatrimonioTipoPatrimonio.Value1]: "Equipamento",
};

export const PATRIMONIO_VALORPATRIMONIO_LABELS: Record<
	PatrimonioValorPatrimonio,
	string
> = {
	[PatrimonioValorPatrimonio.Value1]: "Ativo",
	[PatrimonioValorPatrimonio.Value111]: "111",
	[PatrimonioValorPatrimonio.Value2000]: "2000",
	[PatrimonioValorPatrimonio.Value2222]: "2222",
	[PatrimonioValorPatrimonio.Value2500]: "2500",
	[PatrimonioValorPatrimonio.Value3000]: "3000",
	[PatrimonioValorPatrimonio.Value517]: "517",
	[PatrimonioValorPatrimonio.Value700]: "700",
};

export enum PeriodosFeriasDiasDireito {
	Value0 = "0",
	Value30 = "30",
}

export enum PeriodosFeriasFkFuncionarios {
	Value160 = "160",
	Value162 = "162",
	Value8 = "8",
}

export enum PeriodosFeriasPeriodoAquisitivoFim {
	Value20251031 = "2025-10-31",
	Value20251231 = "2025-12-31",
	Value20270331 = "2027-03-31",
	Value20270412 = "2027-04-12",
	Value20270415 = "2027-04-15",
}

export enum PeriodosFeriasPeriodoAquisitivoInicio {
	Value20241101 = "2024-11-01",
	Value20250101 = "2025-01-01",
	Value20260401 = "2026-04-01",
	Value20260413 = "2026-04-13",
	Value20260416 = "2026-04-16",
}

export enum PeriodosFeriasPeriodoConcessivoFim {
	Value20261031 = "2026-10-31",
	Value20261231 = "2026-12-31",
	Value20280331 = "2028-03-31",
	Value20280412 = "2028-04-12",
	Value20280415 = "2028-04-15",
}

export enum PeriodosFeriasPeriodoConcessivoInicio {
	Value20251101 = "2025-11-01",
	Value20260101 = "2026-01-01",
	Value20270401 = "2027-04-01",
	Value20270413 = "2027-04-13",
	Value20270416 = "2027-04-16",
}

export enum PeriodosFeriasStatusPeriodo {
	Cancelada = "cancelada",
	Planejada = "planejada",
	EmAndamento = "em-andamento",
	Aprovada = "aprovada",
	Concluida = "concluida",
}

export interface PeriodosFerias {
	id: number;
	f_fk_funcionarios: PeriodosFeriasFkFuncionarios;
	f_dias_direito: PeriodosFeriasDiasDireito;
	f_periodo_aquisitivo_fim: PeriodosFeriasPeriodoAquisitivoFim;
	f_periodo_aquisitivo_inicio: PeriodosFeriasPeriodoAquisitivoInicio;
	f_periodo_concessivo_fim: PeriodosFeriasPeriodoConcessivoFim;
	f_periodo_concessivo_inicio: PeriodosFeriasPeriodoConcessivoInicio;
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

export const PERIODOSFERIAS_DIASDIREITO_LABELS: Record<
	PeriodosFeriasDiasDireito,
	string
> = {
	[PeriodosFeriasDiasDireito.Value0]: "Inativo",
	[PeriodosFeriasDiasDireito.Value30]: "Código 30",
};

export const PERIODOSFERIAS_FKFUNCIONARIOS_LABELS: Record<
	PeriodosFeriasFkFuncionarios,
	string
> = {
	[PeriodosFeriasFkFuncionarios.Value160]: "160",
	[PeriodosFeriasFkFuncionarios.Value162]: "162",
	[PeriodosFeriasFkFuncionarios.Value8]: "Código 8",
};

export const PERIODOSFERIAS_PERIODOAQUISITIVOFIM_LABELS: Record<
	PeriodosFeriasPeriodoAquisitivoFim,
	string
> = {
	[PeriodosFeriasPeriodoAquisitivoFim.Value20251031]: "2025 10 31",
	[PeriodosFeriasPeriodoAquisitivoFim.Value20251231]: "2025 12 31",
	[PeriodosFeriasPeriodoAquisitivoFim.Value20270331]: "2027 03 31",
	[PeriodosFeriasPeriodoAquisitivoFim.Value20270412]: "2027 04 12",
	[PeriodosFeriasPeriodoAquisitivoFim.Value20270415]: "2027 04 15",
};

export const PERIODOSFERIAS_PERIODOAQUISITIVOINICIO_LABELS: Record<
	PeriodosFeriasPeriodoAquisitivoInicio,
	string
> = {
	[PeriodosFeriasPeriodoAquisitivoInicio.Value20241101]: "2024 11 01",
	[PeriodosFeriasPeriodoAquisitivoInicio.Value20250101]: "2025 01 01",
	[PeriodosFeriasPeriodoAquisitivoInicio.Value20260401]: "2026 04 01",
	[PeriodosFeriasPeriodoAquisitivoInicio.Value20260413]: "2026 04 13",
	[PeriodosFeriasPeriodoAquisitivoInicio.Value20260416]: "2026 04 16",
};

export const PERIODOSFERIAS_PERIODOCONCESSIVOFIM_LABELS: Record<
	PeriodosFeriasPeriodoConcessivoFim,
	string
> = {
	[PeriodosFeriasPeriodoConcessivoFim.Value20261031]: "2026 10 31",
	[PeriodosFeriasPeriodoConcessivoFim.Value20261231]: "2026 12 31",
	[PeriodosFeriasPeriodoConcessivoFim.Value20280331]: "2028 03 31",
	[PeriodosFeriasPeriodoConcessivoFim.Value20280412]: "2028 04 12",
	[PeriodosFeriasPeriodoConcessivoFim.Value20280415]: "2028 04 15",
};

export const PERIODOSFERIAS_PERIODOCONCESSIVOINICIO_LABELS: Record<
	PeriodosFeriasPeriodoConcessivoInicio,
	string
> = {
	[PeriodosFeriasPeriodoConcessivoInicio.Value20251101]: "2025 11 01",
	[PeriodosFeriasPeriodoConcessivoInicio.Value20260101]: "2026 01 01",
	[PeriodosFeriasPeriodoConcessivoInicio.Value20270401]: "2027 04 01",
	[PeriodosFeriasPeriodoConcessivoInicio.Value20270413]: "2027 04 13",
	[PeriodosFeriasPeriodoConcessivoInicio.Value20270416]: "2027 04 16",
};

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

export enum QualirunAssinaturaGovExtname {
	Jpg = ".jpg",
	Pdf = ".pdf",
	Png = ".png",
}

export enum QualirunAssinaturaGovFkNegociacoes {
	Value5799 = "5799",
	Value7023 = "7023",
	Value7282 = "7282",
}

export enum QualirunAssinaturaGovMeta {
	ObjectObject = "[object Object]",
}

export enum QualirunAssinaturaGovMimetype {
	ApplicationPdf = "application/pdf",
	ImageJpeg = "image/jpeg",
	ImagePng = "image/png",
}

export enum QualirunAssinaturaGovSize {
	Value1047315 = "1047315",
	Value16183 = "16183",
	Value175219 = "175219",
	Value214551 = "214551",
	Value223618 = "223618",
	Value253335 = "253335",
	Value325092 = "325092",
	Value6901217 = "6901217",
	Value9149 = "9149",
}

export interface QualirunAssinaturaGov {
	id: number;
	f_fk_negociacoes: QualirunAssinaturaGovFkNegociacoes;
	extname: QualirunAssinaturaGovExtname;
	filename: string;
	meta: QualirunAssinaturaGovMeta;
	mimetype: QualirunAssinaturaGovMimetype;
	path: string;
	preview: string;
	size: QualirunAssinaturaGovSize;
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

export const QUALIRUNASSINATURAGOV_EXTNAME_LABELS: Record<
	QualirunAssinaturaGovExtname,
	string
> = {
	[QualirunAssinaturaGovExtname.Jpg]: ".jpg",
	[QualirunAssinaturaGovExtname.Pdf]: ".pdf",
	[QualirunAssinaturaGovExtname.Png]: ".png",
};

export const QUALIRUNASSINATURAGOV_FKNEGOCIACOES_LABELS: Record<
	QualirunAssinaturaGovFkNegociacoes,
	string
> = {
	[QualirunAssinaturaGovFkNegociacoes.Value5799]: "5799",
	[QualirunAssinaturaGovFkNegociacoes.Value7023]: "7023",
	[QualirunAssinaturaGovFkNegociacoes.Value7282]: "7282",
};

export const QUALIRUNASSINATURAGOV_META_LABELS: Record<
	QualirunAssinaturaGovMeta,
	string
> = {
	[QualirunAssinaturaGovMeta.ObjectObject]: "[object Object]",
};

export const QUALIRUNASSINATURAGOV_MIMETYPE_LABELS: Record<
	QualirunAssinaturaGovMimetype,
	string
> = {
	[QualirunAssinaturaGovMimetype.ApplicationPdf]: "Application/pdf",
	[QualirunAssinaturaGovMimetype.ImageJpeg]: "Image/jpeg",
	[QualirunAssinaturaGovMimetype.ImagePng]: "Image/png",
};

export const QUALIRUNASSINATURAGOV_SIZE_LABELS: Record<
	QualirunAssinaturaGovSize,
	string
> = {
	[QualirunAssinaturaGovSize.Value1047315]: "1047315",
	[QualirunAssinaturaGovSize.Value16183]: "16183",
	[QualirunAssinaturaGovSize.Value175219]: "175219",
	[QualirunAssinaturaGovSize.Value214551]: "214551",
	[QualirunAssinaturaGovSize.Value223618]: "223618",
	[QualirunAssinaturaGovSize.Value253335]: "253335",
	[QualirunAssinaturaGovSize.Value325092]: "325092",
	[QualirunAssinaturaGovSize.Value6901217]: "6901217",
	[QualirunAssinaturaGovSize.Value9149]: "9149",
};

export enum QualirunInfoAdicionaisCreatedat {
	Value20260325t180149564z = "2026-03-25T18:01:49.564Z",
	Value20260406t123954085z = "2026-04-06T12:39:54.085Z",
}

export enum QualirunInfoAdicionaisValue2fxykekjpk2 {
	Alertoutlined = "alertoutlined",
}

export enum QualirunInfoAdicionaisContatoEmergencia {
	Mateus = "mateus",
	Teste2 = "teste 2",
}

export enum QualirunInfoAdicionaisCurso {
	Teste = "Teste",
	Testes = "Testes",
}

export enum QualirunInfoAdicionaisFkFuncionarios {
	Value8 = "8",
}

export enum QualirunInfoAdicionaisGrauEscolaridade {
	EnsinoMDio = "Ensino Médio",
	Superior = "Superior",
	PSMba = "Pós, MBA",
	Mestrado = "Mestrado",
	Doutorado = "Doutorado",
}

export enum QualirunInfoAdicionaisIdExterno {
	Value5fa5c664Bbe54992B5f8F992fb4f85b7 = "5fa5c664-bbe5-4992-b5f8-f992fb4f85b7",
	Value7a50693f85f64498B3eaF774a6824ced = "7a50693f-85f6-4498-b3ea-f774a6824ced",
}

export enum QualirunInfoAdicionaisParentescoCpf {
	Value07621430966 = "07621430966",
	Value12345678944 = "12345678944",
}

export enum QualirunInfoAdicionaisParentescoNome {
	Asde = "asde",
	Teste = "Teste",
}

export enum QualirunInfoAdicionaisParentescoVinculo {
	Filho = "Filho",
	Testes = "testes",
}

export enum QualirunInfoAdicionaisSituacaoCurso {
	Trancado = "Trancado",
	Cursando = "Cursando",
	Completo = "Completo",
}

export enum QualirunInfoAdicionaisSqt1x7ndy5j {
	Value000000 = "#000000",
}

export enum QualirunInfoAdicionaisStatus {
	Recusado = "recusado",
	Aprovado = "aprovado",
	Aguardando = "aguardando",
}

export enum QualirunInfoAdicionaisTelefoneContatoEmergencia {
	Value49999307022 = "49999307022",
}

export enum QualirunInfoAdicionaisVinculoContatoEmergencia {
	Pais = "Pais",
	FilhoAOuEnteadoA = "Filho(a) ou Enteado(a)",
	AvS = "Avós",
	Conjuge = "Conjuge",
}

export enum QualirunInfoAdicionaisId {
	Value355336631353344 = "355336631353344",
	Value357470452056064 = "357470452056064",
}

export enum QualirunInfoAdicionaisUpdatedat {
	Value20260326t143830333z = "2026-03-26T14:38:30.333Z",
	Value20260406t124401198z = "2026-04-06T12:44:01.198Z",
}

export interface QualirunInfoAdicionais {
	id: QualirunInfoAdicionaisId;
	f_fk_funcionarios: QualirunInfoAdicionaisFkFuncionarios;
	f_2fxykekjpk2: QualirunInfoAdicionaisValue2fxykekjpk2;
	f_contato_emergencia: QualirunInfoAdicionaisContatoEmergencia;
	f_curso: QualirunInfoAdicionaisCurso;
	f_grau_escolaridade: QualirunInfoAdicionaisGrauEscolaridade;
	f_id_externo: QualirunInfoAdicionaisIdExterno;
	f_parentesco_cpf: QualirunInfoAdicionaisParentescoCpf;
	f_parentesco_nome: QualirunInfoAdicionaisParentescoNome;
	f_parentesco_vinculo: QualirunInfoAdicionaisParentescoVinculo;
	f_situacao_curso: QualirunInfoAdicionaisSituacaoCurso;
	f_sqt1x7ndy5j: QualirunInfoAdicionaisSqt1x7ndy5j;
	f_status: QualirunInfoAdicionaisStatus;
	f_telefone_contato_emergencia: QualirunInfoAdicionaisTelefoneContatoEmergencia;
	f_tkxxh3xi2zw: string;
	f_vinculo_contato_emergencia: QualirunInfoAdicionaisVinculoContatoEmergencia;
	updatedAt: QualirunInfoAdicionaisUpdatedat;
	createdAt: QualirunInfoAdicionaisCreatedat;
}

export interface QualirunInfoAdicionaisRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type QualirunInfoAdicionaisRelationKey =
	keyof QualirunInfoAdicionaisRelations;

export const QUALIRUNINFOADICIONAIS_CREATEDAT_LABELS: Record<
	QualirunInfoAdicionaisCreatedat,
	string
> = {
	[QualirunInfoAdicionaisCreatedat.Value20260325t180149564z]:
		"2026 03 25t18:01:49.564z",
	[QualirunInfoAdicionaisCreatedat.Value20260406t123954085z]:
		"2026 04 06t12:39:54.085z",
};

export const QUALIRUNINFOADICIONAIS_VALUE2FXYKEKJPK2_LABELS: Record<
	QualirunInfoAdicionaisValue2fxykekjpk2,
	string
> = {
	[QualirunInfoAdicionaisValue2fxykekjpk2.Alertoutlined]: "Alertoutlined",
};

export const QUALIRUNINFOADICIONAIS_CONTATOEMERGENCIA_LABELS: Record<
	QualirunInfoAdicionaisContatoEmergencia,
	string
> = {
	[QualirunInfoAdicionaisContatoEmergencia.Mateus]: "Mateus",
	[QualirunInfoAdicionaisContatoEmergencia.Teste2]: "Teste 2",
};

export const QUALIRUNINFOADICIONAIS_CURSO_LABELS: Record<
	QualirunInfoAdicionaisCurso,
	string
> = {
	[QualirunInfoAdicionaisCurso.Teste]: "Teste",
	[QualirunInfoAdicionaisCurso.Testes]: "Testes",
};

export const QUALIRUNINFOADICIONAIS_FKFUNCIONARIOS_LABELS: Record<
	QualirunInfoAdicionaisFkFuncionarios,
	string
> = {
	[QualirunInfoAdicionaisFkFuncionarios.Value8]: "Código 8",
};

export const QUALIRUNINFOADICIONAIS_GRAUESCOLARIDADE_LABELS: Record<
	QualirunInfoAdicionaisGrauEscolaridade,
	string
> = {
	[QualirunInfoAdicionaisGrauEscolaridade.EnsinoMDio]: "Ensino Médio",
	[QualirunInfoAdicionaisGrauEscolaridade.Superior]: "Superior",
	[QualirunInfoAdicionaisGrauEscolaridade.PSMba]: "Pós, MBA",
	[QualirunInfoAdicionaisGrauEscolaridade.Mestrado]: "Mestrado",
	[QualirunInfoAdicionaisGrauEscolaridade.Doutorado]: "Doutorado",
};

export const QUALIRUNINFOADICIONAIS_IDEXTERNO_LABELS: Record<
	QualirunInfoAdicionaisIdExterno,
	string
> = {
	[QualirunInfoAdicionaisIdExterno.Value5fa5c664Bbe54992B5f8F992fb4f85b7]:
		"5fa5c664 Bbe5 4992 B5f8 F992fb4f85b7",
	[QualirunInfoAdicionaisIdExterno.Value7a50693f85f64498B3eaF774a6824ced]:
		"7a50693f 85f6 4498 B3ea F774a6824ced",
};

export const QUALIRUNINFOADICIONAIS_PARENTESCOCPF_LABELS: Record<
	QualirunInfoAdicionaisParentescoCpf,
	string
> = {
	[QualirunInfoAdicionaisParentescoCpf.Value07621430966]: "07621430966",
	[QualirunInfoAdicionaisParentescoCpf.Value12345678944]: "12345678944",
};

export const QUALIRUNINFOADICIONAIS_PARENTESCONOME_LABELS: Record<
	QualirunInfoAdicionaisParentescoNome,
	string
> = {
	[QualirunInfoAdicionaisParentescoNome.Asde]: "Asde",
	[QualirunInfoAdicionaisParentescoNome.Teste]: "Teste",
};

export const QUALIRUNINFOADICIONAIS_PARENTESCOVINCULO_LABELS: Record<
	QualirunInfoAdicionaisParentescoVinculo,
	string
> = {
	[QualirunInfoAdicionaisParentescoVinculo.Filho]: "Filho",
	[QualirunInfoAdicionaisParentescoVinculo.Testes]: "Testes",
};

export const QUALIRUNINFOADICIONAIS_SITUACAOCURSO_LABELS: Record<
	QualirunInfoAdicionaisSituacaoCurso,
	string
> = {
	[QualirunInfoAdicionaisSituacaoCurso.Trancado]: "Trancado",
	[QualirunInfoAdicionaisSituacaoCurso.Cursando]: "Cursando",
	[QualirunInfoAdicionaisSituacaoCurso.Completo]: "Completo",
};

export const QUALIRUNINFOADICIONAIS_SQT1X7NDY5J_LABELS: Record<
	QualirunInfoAdicionaisSqt1x7ndy5j,
	string
> = {
	[QualirunInfoAdicionaisSqt1x7ndy5j.Value000000]: "#000000",
};

export const QUALIRUNINFOADICIONAIS_STATUS_LABELS: Record<
	QualirunInfoAdicionaisStatus,
	string
> = {
	[QualirunInfoAdicionaisStatus.Recusado]: "Recusado",
	[QualirunInfoAdicionaisStatus.Aprovado]: "Aprovado",
	[QualirunInfoAdicionaisStatus.Aguardando]: "Aguardando",
};

export const QUALIRUNINFOADICIONAIS_TELEFONECONTATOEMERGENCIA_LABELS: Record<
	QualirunInfoAdicionaisTelefoneContatoEmergencia,
	string
> = {
	[QualirunInfoAdicionaisTelefoneContatoEmergencia.Value49999307022]:
		"49999307022",
};

export const QUALIRUNINFOADICIONAIS_VINCULOCONTATOEMERGENCIA_LABELS: Record<
	QualirunInfoAdicionaisVinculoContatoEmergencia,
	string
> = {
	[QualirunInfoAdicionaisVinculoContatoEmergencia.Pais]: "Pais",
	[QualirunInfoAdicionaisVinculoContatoEmergencia.FilhoAOuEnteadoA]:
		"Filho(a) ou Enteado(a)",
	[QualirunInfoAdicionaisVinculoContatoEmergencia.AvS]: "Avós",
	[QualirunInfoAdicionaisVinculoContatoEmergencia.Conjuge]: "Conjuge",
};

export const QUALIRUNINFOADICIONAIS_ID_LABELS: Record<
	QualirunInfoAdicionaisId,
	string
> = {
	[QualirunInfoAdicionaisId.Value355336631353344]: "355336631353344",
	[QualirunInfoAdicionaisId.Value357470452056064]: "357470452056064",
};

export const QUALIRUNINFOADICIONAIS_UPDATEDAT_LABELS: Record<
	QualirunInfoAdicionaisUpdatedat,
	string
> = {
	[QualirunInfoAdicionaisUpdatedat.Value20260326t143830333z]:
		"2026 03 26t14:38:30.333z",
	[QualirunInfoAdicionaisUpdatedat.Value20260406t124401198z]:
		"2026 04 06t12:44:01.198z",
};

export enum QualirunProcessosCreatedat {
	Value20260410t194613984z = "2026-04-10T19:46:13.984Z",
}

export enum QualirunProcessosDetalhesProcedimento {
	Value1 = "1",
	Value2 = "2",
}

export enum QualirunProcessosFkFuncionarios {
	Value8 = "8",
}

export enum QualirunProcessosIdExterno {
	Value571c6e1058d64fa0B041Dfeb12f4704f = "571c6e10-58d6-4fa0-b041-dfeb12f4704f",
}

export enum QualirunProcessosIdProcedimentoQualirun {
	C03f166dA4d742b7Ae73A4c287e171ac = "c03f166d-a4d7-42b7-ae73-a4c287e171ac",
	Value0a3d75b429084bc285a664667ec60477 = "0a3d75b4-2908-4bc2-85a6-64667ec60477",
}

export enum QualirunProcessosLinkExterno {
	HttpsAppQualiRunQualisignToken9acd7d7766cc4fabA742B4bac44831cd5903a9359e394fc78defCb5e4b4925f5 = "https://app.quali.run/qualisign?token=9acd7d77-66cc-4fab-a742-b4bac44831cd-5903a935-9e39-4fc7-8def-cb5e4b4925f5",
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

export enum QualirunProcessosId {
	Value358248870838272 = "358248870838272",
}

export enum QualirunProcessosUpdatedat {
	Value20260410t195120928z = "2026-04-10T19:51:20.928Z",
}

export interface QualirunProcessos {
	id: QualirunProcessosId;
	f_fk_funcionarios: QualirunProcessosFkFuncionarios;
	f_detalhes_procedimento: QualirunProcessosDetalhesProcedimento;
	f_id_externo: QualirunProcessosIdExterno;
	f_id_procedimento_qualirun: QualirunProcessosIdProcedimentoQualirun;
	f_link_externo: QualirunProcessosLinkExterno;
	f_procedimento: QualirunProcessosProcedimento;
	f_status: QualirunProcessosStatus;
	updatedAt: QualirunProcessosUpdatedat;
	createdAt: QualirunProcessosCreatedat;
}

export interface QualirunProcessosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type QualirunProcessosRelationKey = keyof QualirunProcessosRelations;

export const QUALIRUNPROCESSOS_CREATEDAT_LABELS: Record<
	QualirunProcessosCreatedat,
	string
> = {
	[QualirunProcessosCreatedat.Value20260410t194613984z]:
		"2026 04 10t19:46:13.984z",
};

export const QUALIRUNPROCESSOS_DETALHESPROCEDIMENTO_LABELS: Record<
	QualirunProcessosDetalhesProcedimento,
	string
> = {
	[QualirunProcessosDetalhesProcedimento.Value1]:
		"Utilizado para novos colaboradores preencherem os dados e a documentação de admissão, que serão utilizados no CRM, aba de Colaboradores.",
	[QualirunProcessosDetalhesProcedimento.Value2]:
		"Utilizado para novos colaboradores assinarem os termos de Confidencialidade, LGPD e Uso Voz e Imagem.",
};

export const QUALIRUNPROCESSOS_FKFUNCIONARIOS_LABELS: Record<
	QualirunProcessosFkFuncionarios,
	string
> = {
	[QualirunProcessosFkFuncionarios.Value8]: "Código 8",
};

export const QUALIRUNPROCESSOS_IDEXTERNO_LABELS: Record<
	QualirunProcessosIdExterno,
	string
> = {
	[QualirunProcessosIdExterno.Value571c6e1058d64fa0B041Dfeb12f4704f]:
		"571c6e10 58d6 4fa0 B041 Dfeb12f4704f",
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

export const QUALIRUNPROCESSOS_LINKEXTERNO_LABELS: Record<
	QualirunProcessosLinkExterno,
	string
> = {
	[QualirunProcessosLinkExterno.HttpsAppQualiRunQualisignToken9acd7d7766cc4fabA742B4bac44831cd5903a9359e394fc78defCb5e4b4925f5]:
		"Https://app.quali.run/qualisign?token=9acd7d77 66cc 4fab A742 B4bac44831cd 5903a935 9e39 4fc7 8def Cb5e4b4925f5",
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

export const QUALIRUNPROCESSOS_ID_LABELS: Record<QualirunProcessosId, string> =
	{
		[QualirunProcessosId.Value358248870838272]: "358248870838272",
	};

export const QUALIRUNPROCESSOS_UPDATEDAT_LABELS: Record<
	QualirunProcessosUpdatedat,
	string
> = {
	[QualirunProcessosUpdatedat.Value20260410t195120928z]:
		"2026 04 10t19:51:20.928z",
};

export enum RecursosViagemCreatedat {
	Value20250905t134912375z = "2025-09-05T13:49:12.375Z",
	Value20250910t114925919z = "2025-09-10T11:49:25.919Z",
	Value20251010t122359016z = "2025-10-10T12:23:59.016Z",
}

export enum RecursosViagemDestinoViagem {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export enum RecursosViagemKmPercorrido {
	Value20 = "20",
}

export enum RecursosViagemMeioTransporte {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
}

export enum RecursosViagemObservacoes {
	Teste = "teste",
}

export enum RecursosViagemId {
	Value1 = "1",
	Value2 = "2",
	Value4 = "4",
}

export enum RecursosViagemUpdatedat {
	Value20250908t180313371z = "2025-09-08T18:03:13.371Z",
	Value20250915t123654007z = "2025-09-15T12:36:54.007Z",
	Value20251010t123945405z = "2025-10-10T12:39:45.405Z",
}

export interface RecursosViagem {
	id: RecursosViagemId;
	f_fk_recursos_viagem: number;
	f_destino_viagem: RecursosViagemDestinoViagem;
	f_km_percorrido: RecursosViagemKmPercorrido;
	f_meio_transporte: RecursosViagemMeioTransporte;
	f_observacoes: RecursosViagemObservacoes;
	updatedAt: RecursosViagemUpdatedat;
	createdAt: RecursosViagemCreatedat;
}

export interface RecursosViagemRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type RecursosViagemRelationKey = keyof RecursosViagemRelations;

export const RECURSOSVIAGEM_CREATEDAT_LABELS: Record<
	RecursosViagemCreatedat,
	string
> = {
	[RecursosViagemCreatedat.Value20250905t134912375z]:
		"2025 09 05t13:49:12.375z",
	[RecursosViagemCreatedat.Value20250910t114925919z]:
		"2025 09 10t11:49:25.919z",
	[RecursosViagemCreatedat.Value20251010t122359016z]:
		"2025 10 10t12:23:59.016z",
};

export const RECURSOSVIAGEM_DESTINOVIAGEM_LABELS: Record<
	RecursosViagemDestinoViagem,
	string
> = {
	[RecursosViagemDestinoViagem.Value1]: "Curitibanos",
	[RecursosViagemDestinoViagem.Value2]: "Florianópolis",
	[RecursosViagemDestinoViagem.Value3]: "Florianópolis",
};

export const RECURSOSVIAGEM_KMPERCORRIDO_LABELS: Record<
	RecursosViagemKmPercorrido,
	string
> = {
	[RecursosViagemKmPercorrido.Value20]: "Código 20",
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

export const RECURSOSVIAGEM_OBSERVACOES_LABELS: Record<
	RecursosViagemObservacoes,
	string
> = {
	[RecursosViagemObservacoes.Teste]: "Teste",
};

export const RECURSOSVIAGEM_ID_LABELS: Record<RecursosViagemId, string> = {
	[RecursosViagemId.Value1]: "Ativo",
	[RecursosViagemId.Value2]: "Código 2",
	[RecursosViagemId.Value4]: "Código 4",
};

export const RECURSOSVIAGEM_UPDATEDAT_LABELS: Record<
	RecursosViagemUpdatedat,
	string
> = {
	[RecursosViagemUpdatedat.Value20250908t180313371z]:
		"2025 09 08t18:03:13.371z",
	[RecursosViagemUpdatedat.Value20250915t123654007z]:
		"2025 09 15t12:36:54.007z",
	[RecursosViagemUpdatedat.Value20251010t123945405z]:
		"2025 10 10t12:39:45.405z",
};

export interface Rguxtr9p91d {
	f_fk_ponta_a_interface: number;
	f_fk_ponta_a_interface2: number;
}

export type Rguxtr9p91dRelations = Record<string, never>;

export type Rguxtr9p91dRelationKey = keyof Rguxtr9p91dRelations;

export enum ServicosFkServicoXContrato {
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
	Value3 = "3",
	Value4 = "4",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
}

export enum ServicosIdContratoIxc {
	Value13638 = "13638",
	Value15659 = "15659",
	Value16436 = "16436",
	Value16737 = "16737",
	Value18415 = "18415",
	Value23151 = "23151",
	Value6161 = "6161",
}

export enum ServicosIdServicoIxc {
	Value270380 = "270380",
	Value29049 = "29049",
	Value55164 = "55164",
	Value55638 = "55638",
	Value63599 = "63599",
	Value63600 = "63600",
	Value65762 = "65762",
	Value84098 = "84098",
	Value84099 = "84099",
	Value84103 = "84103",
	Value84469 = "84469",
	Value84470 = "84470",
	Value84526 = "84526",
	Value84938 = "84938",
}

export enum ServicosPropriedades {
	PBrPPStrongVelocidadeStrong100MbpsP = "<p><br></p><p><strong>Velocidade:</strong> 100 Mbps</p>",
	P20MbpsP = "<p>20 MBPS</p>",
	PEndereOARuaBenjamimConstant178CentroLagesScCep88501110EndereOBROtLiaFernandesAraJo669VilaMariaLagesScP = "<p>Endereço A: Rua Benjamim Constant, 178, Centro LAGES SC. CEP 88501-110 Endereço B: R. Otília Fernandes Araújo, 669 - Vila Maria - Lages / SC</p>",
	PEndereOARuaBenjamimConstant178CentroLagesScCep88501110EndereOBRuaManoelHeck78CuritibanosScCep89520000P = "<p>Endereço A: Rua Benjamim Constant, 178, Centro LAGES SC. CEP 88501-110 Endereço B: Rua Manoel Heck 78, CURITIBANOS, SC CEP 89520-000</p>",
	PEspaOEmRack1uPPEnergia1PontoP = "<p>Espaço em Rack: 1U</p><p>Energia: 1 Ponto</p>",
	PPopDcScLgsCentroPPPosiOSala01Fila01R03PPEspaO1uP = "<p>POP/DC: SC-LGS-CENTRO</p><p>POSIÇÃO: SALA01-FILA01-R03</p><p>ESPAÇO: 1U</p>",
}

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

export enum ServicosVelocidade {
	Value10Mbps = "10 Mbps",
	Value100m = "100M",
	Value100mbps = "100Mbps",
	Value10mbps = "10Mbps",
	Value15mbps = "15Mbps",
	Value1gbpsTrunkFlex = "1Gbps Trunk Flex",
	Value20mbps = "20Mbps",
	Value2mbps = "2Mbps",
	Value300m = "300M",
	Value4mbps = "4Mbps",
	Value50mbps = "50Mbps",
	Na = "NA",
}

export interface Servicos {
	id: number;
	f_fk_servico_x_contrato: ServicosFkServicoXContrato;
	f_id_contrato_ixc: ServicosIdContratoIxc;
	f_id_servico_ixc: ServicosIdServicoIxc;
	f_caracteristicas: string;
	f_descricao: string;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_propriedades: ServicosPropriedades;
	f_status: ServicosStatus;
	f_tipo: ServicosTipo;
	f_velocidade: ServicosVelocidade;
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

export const SERVICOS_FKSERVICOXCONTRATO_LABELS: Record<
	ServicosFkServicoXContrato,
	string
> = {
	[ServicosFkServicoXContrato.Value10]: "Código 10",
	[ServicosFkServicoXContrato.Value11]: "Código 11",
	[ServicosFkServicoXContrato.Value12]: "Código 12",
	[ServicosFkServicoXContrato.Value13]: "Código 13",
	[ServicosFkServicoXContrato.Value3]: "Código 3",
	[ServicosFkServicoXContrato.Value4]: "Código 4",
	[ServicosFkServicoXContrato.Value6]: "Código 6",
	[ServicosFkServicoXContrato.Value7]: "Código 7",
	[ServicosFkServicoXContrato.Value8]: "Código 8",
	[ServicosFkServicoXContrato.Value9]: "Código 9",
};

export const SERVICOS_IDCONTRATOIXC_LABELS: Record<
	ServicosIdContratoIxc,
	string
> = {
	[ServicosIdContratoIxc.Value13638]: "13638",
	[ServicosIdContratoIxc.Value15659]: "15659",
	[ServicosIdContratoIxc.Value16436]: "16436",
	[ServicosIdContratoIxc.Value16737]: "16737",
	[ServicosIdContratoIxc.Value18415]: "18415",
	[ServicosIdContratoIxc.Value23151]: "23151",
	[ServicosIdContratoIxc.Value6161]: "6161",
};

export const SERVICOS_IDSERVICOIXC_LABELS: Record<
	ServicosIdServicoIxc,
	string
> = {
	[ServicosIdServicoIxc.Value270380]: "270380",
	[ServicosIdServicoIxc.Value29049]: "29049",
	[ServicosIdServicoIxc.Value55164]: "55164",
	[ServicosIdServicoIxc.Value55638]: "55638",
	[ServicosIdServicoIxc.Value63599]: "63599",
	[ServicosIdServicoIxc.Value63600]: "63600",
	[ServicosIdServicoIxc.Value65762]: "65762",
	[ServicosIdServicoIxc.Value84098]: "84098",
	[ServicosIdServicoIxc.Value84099]: "84099",
	[ServicosIdServicoIxc.Value84103]: "84103",
	[ServicosIdServicoIxc.Value84469]: "84469",
	[ServicosIdServicoIxc.Value84470]: "84470",
	[ServicosIdServicoIxc.Value84526]: "84526",
	[ServicosIdServicoIxc.Value84938]: "84938",
};

export const SERVICOS_PROPRIEDADES_LABELS: Record<
	ServicosPropriedades,
	string
> = {
	[ServicosPropriedades.PBrPPStrongVelocidadeStrong100MbpsP]:
		"<p><br></p><p><strong>velocidade:</strong> 100 Mbps</p>",
	[ServicosPropriedades.P20MbpsP]: "<p>20 Mbps</p>",
	[ServicosPropriedades.PEndereOARuaBenjamimConstant178CentroLagesScCep88501110EndereOBROtLiaFernandesAraJo669VilaMariaLagesScP]:
		"<p>endereço A: Rua Benjamim Constant, 178, Centro Lages Sc. CEP 88501 110 Endereço B: R. Otília Fernandes Araújo, 669 Vila Maria Lages / Sc</p>",
	[ServicosPropriedades.PEndereOARuaBenjamimConstant178CentroLagesScCep88501110EndereOBRuaManoelHeck78CuritibanosScCep89520000P]:
		"<p>endereço A: Rua Benjamim Constant, 178, Centro Lages Sc. CEP 88501 110 Endereço B: Rua Manoel Heck 78, Curitibanos, SC CEP 89520 000</p>",
	[ServicosPropriedades.PEspaOEmRack1uPPEnergia1PontoP]:
		"<p>espaço Em Rack: 1u</p><p>energia: 1 Ponto</p>",
	[ServicosPropriedades.PPopDcScLgsCentroPPPosiOSala01Fila01R03PPEspaO1uP]:
		"<p>pop/dc: SC LGS Centro</p><p>posição: Sala01 Fila01 R03</p><p>espaço: 1u</p>",
};

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

export const SERVICOS_VELOCIDADE_LABELS: Record<ServicosVelocidade, string> = {
	[ServicosVelocidade.Value10Mbps]: "10 Mbps",
	[ServicosVelocidade.Value100m]: "100m",
	[ServicosVelocidade.Value100mbps]: "100mbps",
	[ServicosVelocidade.Value10mbps]: "10mbps",
	[ServicosVelocidade.Value15mbps]: "15mbps",
	[ServicosVelocidade.Value1gbpsTrunkFlex]: "1gbps Trunk Flex",
	[ServicosVelocidade.Value20mbps]: "20mbps",
	[ServicosVelocidade.Value2mbps]: "2mbps",
	[ServicosVelocidade.Value300m]: "300m",
	[ServicosVelocidade.Value4mbps]: "4mbps",
	[ServicosVelocidade.Value50mbps]: "50mbps",
	[ServicosVelocidade.Na]: "NA",
};

export enum ServicosXServicosValue8n72gqelvp5 {
	Value25 = "25",
	Value50 = "50",
	Value51 = "51",
	Value52 = "52",
}

export interface ServicosXServicos {
	f_8n72gqelvp5: ServicosXServicosValue8n72gqelvp5;
	f_d40asyeldtp: number;
}

export type ServicosXServicosRelations = Record<string, never>;

export type ServicosXServicosRelationKey = keyof ServicosXServicosRelations;

export const SERVICOSXSERVICOS_VALUE8N72GQELVP5_LABELS: Record<
	ServicosXServicosValue8n72gqelvp5,
	string
> = {
	[ServicosXServicosValue8n72gqelvp5.Value25]: "Código 25",
	[ServicosXServicosValue8n72gqelvp5.Value50]: "Código 50",
	[ServicosXServicosValue8n72gqelvp5.Value51]: "Código 51",
	[ServicosXServicosValue8n72gqelvp5.Value52]: "Código 52",
};

export enum SetorCreatedat {
	Value20260326t170813125z = "2026-03-26T17:08:13.125Z",
}

export enum SetorFkFuncionarios {
	Value100 = "100",
	Value135 = "135",
	Value84 = "84",
	Value92 = "92",
	Value94 = "94",
}

export enum SetorUpdatedat {
	Value20260326t170813125z = "2026-03-26T17:08:13.125Z",
}

export interface Setor {
	id: number;
	f_fk_funcionarios: SetorFkFuncionarios;
	f_fk_sistemas_acessos: unknown[];
	f_nome_setor: string;
	updatedAt: SetorUpdatedat;
	createdAt: SetorCreatedat;
}

export interface SetorRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	f_funcionarios_1?: FFuncionarios[];
	f_sistemas_acessos?: SistemasAcessos[];
	updatedBy?: Users | null;
}

export type SetorRelationKey = keyof SetorRelations;

export const SETOR_CREATEDAT_LABELS: Record<SetorCreatedat, string> = {
	[SetorCreatedat.Value20260326t170813125z]: "2026 03 26t17:08:13.125z",
};

export const SETOR_FKFUNCIONARIOS_LABELS: Record<SetorFkFuncionarios, string> =
	{
		[SetorFkFuncionarios.Value100]: "100",
		[SetorFkFuncionarios.Value135]: "135",
		[SetorFkFuncionarios.Value84]: "Código 84",
		[SetorFkFuncionarios.Value92]: "Código 92",
		[SetorFkFuncionarios.Value94]: "Código 94",
	};

export const SETOR_UPDATEDAT_LABELS: Record<SetorUpdatedat, string> = {
	[SetorUpdatedat.Value20260326t170813125z]: "2026 03 26t17:08:13.125z",
};

export enum SistemasAcessosCreatedat {
	Value20260326t171753451z = "2026-03-26T17:17:53.451Z",
	Value20260326t175925233z = "2026-03-26T17:59:25.233Z",
}

export enum SistemasAcessosFkFuncionarios {
	Value82 = "82",
	Value83 = "83",
	Value98 = "98",
}

export enum SistemasAcessosUrl {
	HttpsAdminEaiNetBr = "https://admin.eai.net.br/",
	HttpsAtpchatAtplusCloud = "https://atpchat.atplus.cloud/",
	HttpsCrmAtplusCloud = "https://crm.atplus.cloud/",
	HttpsErpAtplusCloudAdmPhp = "https://erp.atplus.cloud/adm.php",
	HttpsExtranetOletelecomComBr = "https://extranet.oletelecom.com.br/",
	HttpsIahubAppPortal = "https://iahub.app/portal",
	HttpsOperadoraAppBrLogin = "https://operadora.app.br/login",
	HttpsPrevisaAthenasOnline = "https://previsa.athenas.online/",
	HttpsWwwMicrosoftComPtBr = "https://www.microsoft.com/pt-br",
}

export enum SistemasAcessosUpdatedat {
	Value20260326t171753451z = "2026-03-26T17:17:53.451Z",
	Value20260326t171956833z = "2026-03-26T17:19:56.833Z",
	Value20260326t175925233z = "2026-03-26T17:59:25.233Z",
	Value20260326t180007728z = "2026-03-26T18:00:07.728Z",
	Value20260326t180019435z = "2026-03-26T18:00:19.435Z",
	Value20260326t180029372z = "2026-03-26T18:00:29.372Z",
	Value20260326t180044797z = "2026-03-26T18:00:44.797Z",
	Value20260326t180057112z = "2026-03-26T18:00:57.112Z",
	Value20260326t180111485z = "2026-03-26T18:01:11.485Z",
	Value20260326t180123394z = "2026-03-26T18:01:23.394Z",
	Value20260326t180131401z = "2026-03-26T18:01:31.401Z",
}

export interface SistemasAcessos {
	id: number;
	f_fk_funcionarios: SistemasAcessosFkFuncionarios;
	f_sistemas_acessos: string;
	f_url: SistemasAcessosUrl;
	updatedAt: SistemasAcessosUpdatedat;
	createdAt: SistemasAcessosCreatedat;
}

export interface SistemasAcessosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	updatedBy?: Users | null;
}

export type SistemasAcessosRelationKey = keyof SistemasAcessosRelations;

export const SISTEMASACESSOS_CREATEDAT_LABELS: Record<
	SistemasAcessosCreatedat,
	string
> = {
	[SistemasAcessosCreatedat.Value20260326t171753451z]:
		"2026 03 26t17:17:53.451z",
	[SistemasAcessosCreatedat.Value20260326t175925233z]:
		"2026 03 26t17:59:25.233z",
};

export const SISTEMASACESSOS_FKFUNCIONARIOS_LABELS: Record<
	SistemasAcessosFkFuncionarios,
	string
> = {
	[SistemasAcessosFkFuncionarios.Value82]: "Código 82",
	[SistemasAcessosFkFuncionarios.Value83]: "Código 83",
	[SistemasAcessosFkFuncionarios.Value98]: "Código 98",
};

export const SISTEMASACESSOS_URL_LABELS: Record<SistemasAcessosUrl, string> = {
	[SistemasAcessosUrl.HttpsAdminEaiNetBr]: "Https://admin.eai.net.br/",
	[SistemasAcessosUrl.HttpsAtpchatAtplusCloud]: "Https://atpchat.atplus.cloud/",
	[SistemasAcessosUrl.HttpsCrmAtplusCloud]: "Https://crm.atplus.cloud/",
	[SistemasAcessosUrl.HttpsErpAtplusCloudAdmPhp]:
		"Https://erp.atplus.cloud/adm.php",
	[SistemasAcessosUrl.HttpsExtranetOletelecomComBr]:
		"Https://extranet.oletelecom.com.br/",
	[SistemasAcessosUrl.HttpsIahubAppPortal]: "Https://iahub.app/portal",
	[SistemasAcessosUrl.HttpsOperadoraAppBrLogin]:
		"Https://operadora.app.br/login",
	[SistemasAcessosUrl.HttpsPrevisaAthenasOnline]:
		"Https://previsa.athenas.online/",
	[SistemasAcessosUrl.HttpsWwwMicrosoftComPtBr]:
		"Https://www.microsoft.com/pt Br",
};

export const SISTEMASACESSOS_UPDATEDAT_LABELS: Record<
	SistemasAcessosUpdatedat,
	string
> = {
	[SistemasAcessosUpdatedat.Value20260326t171753451z]:
		"2026 03 26t17:17:53.451z",
	[SistemasAcessosUpdatedat.Value20260326t171956833z]:
		"2026 03 26t17:19:56.833z",
	[SistemasAcessosUpdatedat.Value20260326t175925233z]:
		"2026 03 26t17:59:25.233z",
	[SistemasAcessosUpdatedat.Value20260326t180007728z]:
		"2026 03 26t18:00:07.728z",
	[SistemasAcessosUpdatedat.Value20260326t180019435z]:
		"2026 03 26t18:00:19.435z",
	[SistemasAcessosUpdatedat.Value20260326t180029372z]:
		"2026 03 26t18:00:29.372z",
	[SistemasAcessosUpdatedat.Value20260326t180044797z]:
		"2026 03 26t18:00:44.797z",
	[SistemasAcessosUpdatedat.Value20260326t180057112z]:
		"2026 03 26t18:00:57.112z",
	[SistemasAcessosUpdatedat.Value20260326t180111485z]:
		"2026 03 26t18:01:11.485z",
	[SistemasAcessosUpdatedat.Value20260326t180123394z]:
		"2026 03 26t18:01:23.394z",
	[SistemasAcessosUpdatedat.Value20260326t180131401z]:
		"2026 03 26t18:01:31.401z",
};

export enum SitesCidade {
	CampoBeloDoSul = "Campo Belo do Sul",
	Catanduvas = "Catanduvas",
	Chapec = "Chapecó",
	Cotia = "Cotia",
	Curitiba = "Curitiba",
	Curitibanos = "Curitibanos",
	FlorianPolis = "Florianópolis",
	Fortaleza = "Fortaleza",
	HervalDOeste = "Herval D'Oeste",
	JoaAba = "Joaçaba",
	Joinville = "Joinville",
	Lages = "Lages",
	Recife = "Recife",
	SOJos = "São José",
	TubarO = "Tubarão",
}

export enum SitesDadosAcesso {
	PStrongDataCenterFortalezaCeStrongNbspPPNbspNbspPPRazOSocialNbspBrfibraTelecomunicaEsLtdaNbspNbspPPEndereONbspRuaDrRatisbonaN75BairroFTimaFortalezaCeNbspNbspPPCnpjNbsp73972002001350NbspNbspPPInscriOEstadualNbsp063818574NbspNbspPPNaturezaDaOperaONbspRemessaDeAtivoImobilizadoParaUsoForaDoEstabelecimentoNbspNbspPPDadosAdicionaisDaNfNbspContratoDePrestaODeServiOsNEmitidoEmNbspP = "<p><strong>DATA CENTER FORTALEZA/CE</strong>&nbsp;</p><p>&nbsp;&nbsp;</p><p>Razão Social:&nbsp;BRFIBRA TELECOMUNICAÇÕES LTDA&nbsp;&nbsp;</p><p>Endereço:&nbsp;Rua Dr. Ratisbona, nº 75, Bairro Fátima, Fortaleza/CE&nbsp;&nbsp;</p><p>CNPJ:&nbsp;73.972.002/0013-50&nbsp;&nbsp;</p><p>Inscrição Estadual:&nbsp;063/818574&nbsp;&nbsp;</p><p>Natureza da Operação:&nbsp;Remessa de Ativo Imobilizado para uso fora do estabelecimento&nbsp;&nbsp;</p><p>Dados Adicionais da NF:&nbsp;Contrato de Prestação de Serviços Nº (_____________) emitido em __/__/____.&nbsp;</p>",
	PStrongDataCenterRecifePeNbspStrongNbspPPNbspPPRazOSocialNbspBrfibraTelecomunicaEsLtdaNbspNbspPPEndereONbspRuaGeneralJoaquimInCioN412Sala701BairroIlhaDoLeiteRecifePeNbspNbspPPCnpjNbsp73972002001430NbspNbspPPInscriOEstadualNbsp038170752NbspNbspPPNaturezaDaOperaONbspRemessaDeAtivoImobilizadoParaUsoForaDoEstabelecimentoNbspNbspPPDadosAdicionaisDaNfNbspContratoDePrestaODeServiOsNEmitidoEmNbspNbspP = "<p><strong>DATA CENTER RECIFE/PE&nbsp;</strong>&nbsp;</p><p>&nbsp;</p><p>Razão Social:&nbsp;BRFIBRA TELECOMUNICAÇÕES LTDA&nbsp;&nbsp;</p><p>Endereço:&nbsp;Rua General Joaquim Inácio, nº 412, sala 701, Bairro Ilha do Leite, Recife/PE&nbsp;&nbsp;</p><p>CNPJ:&nbsp;73.972.002/0014-30&nbsp;&nbsp;</p><p>Inscrição Estadual:&nbsp;038/170752&nbsp;&nbsp;</p><p>Natureza da Operação:&nbsp;Remessa de Ativo Imobilizado para uso fora do estabelecimento&nbsp;&nbsp;</p><p>Dados Adicionais da NF:&nbsp;Contrato de Prestação de Serviços Nº (_____________) emitido em __/__/____.&nbsp;&nbsp;</p>",
	PStrongDataNbspCenterNbspCuritibaPrNbspStrongNbspPPNbspCta53004891624PPRazOSocialNbspBrfibraTelecomunicaEsLtdaNbspNbspPPEndereORuaProfessorRubensElkeNbspBragaN107BBairroParolinNbspCuritibaPrNbspNbspPPCnpj73972002000469NbspNbspPPInscriOEstadual9037424290NbspNbspPPNaturezaDaOperaORemessaDeAtivoImobilizadoParaUsoForaDoEstabelecimentoNbspNbspPPDadosAdicionaisDaNfContratoDePrestaODeServiOsN0492024Anexo01EmitidoEm08042024P = "<p><strong>DATA&nbsp;CENTER&nbsp;CURITIBA/PR&nbsp;</strong>&nbsp;</p><p>&nbsp;CTA53004891624</p><p>Razão Social:&nbsp;BRFIBRA TELECOMUNICAÇÕES LTDA&nbsp;&nbsp;</p><p>Endereço: Rua Professor Rubens Elke&nbsp;Braga, nº 107-B, Bairro Parolin,&nbsp;Curitiba, PR&nbsp;&nbsp;</p><p>CNPJ: 73.972.002/0004-69&nbsp;&nbsp;</p><p>Inscrição Estadual: 90374242-90&nbsp;&nbsp;</p><p>Natureza da Operação: Remessa de Ativo Imobilizado para uso fora do estabelecimento&nbsp;&nbsp;</p><p>Dados Adicionais da NF: Contrato de Prestação de Serviços Nº 049/2024 Anexo 01 emitido em 08/04/2024</p>",
	PStrongInstalaODeEquipamentosNoLocalNecessRioSolicitarAcessoPeloHelpdeskDaBrdigitalStrongPPRazOSocialBrfibraTelecomunicaEsLtdaNbspNbspPPEndereOAvPatrCioCaldeiraDeAndradeN12862AndarBairroCapoeirasFlorianPolisScNbspNbspPPCnpj73972002002674NbspNbspPPInscriOEstadual255313101NbspNbspPPNaturezaDaOperaORemessaDeAtivoImobilizadoParaUsoForaDoEstabelecimentoNbspNbspPPDadosAdicionaisDaNfContratoDePrestaODeServiOsNContrato0442024Anexo11EmitidoEm05122024PPBrPPStrongHelpDeskStrongPPHttpsHelpbrdigitalAgideskComPPBrPPStrongContatoDoTCnicoNoLocalStrongPPResponsVelEvertonPPWhatsapp48984038401PPPodeSerAcionadoEmCasosDeEmergenciaVerificaORPidaEEtcP = "<p><strong>Instalação de equipamentos no local, necessário solicitar acesso pelo helpdesk da BRDIGITAL</strong></p><p>Razão Social: BRFIBRA TELECOMUNICAÇÕES LTDA&nbsp;&nbsp;</p><p>Endereço: Av. Patrício Caldeira de Andrade, nº 1286, 2º andar, Bairro Capoeiras, Florianópolis, SC&nbsp;&nbsp;</p><p>CNPJ: 73.972.002/0026-74&nbsp;&nbsp;</p><p>Inscrição Estadual: 255/313101&nbsp;&nbsp;</p><p>Natureza da Operação: Remessa de Ativo Imobilizado para uso fora do estabelecimento&nbsp;&nbsp;</p><p>Dados Adicionais da NF: Contrato de Prestação de Serviços Nº Contrato 044/2024 Anexo 11 emitido em 05/12/2024</p><p><br></p><p><strong>Help Desk:</strong></p><p>https://helpbrdigital.agidesk.com/</p><p><br></p><p><strong>Contato do técnico no Local:</strong></p><p>Responsável: Everton</p><p>Whatsapp: 48984038401</p><p>Pode ser acionado em casos de emergencia, verificação rápida, e etc. </p>",
	PContatoComSimTelecomViaGrupoDeWhatsappP = "<p>Contato com SIM TELECOM via Grupo de Whatsapp</p>",
	PDentroDoDcDaCirionCuritibaP = "<p>Dentro do DC da Cirion Curitiba</p>",
	PGaleriaTrevisanPP2717310585444451551506813019318614P = "<p>Galeria Trevisan</p><p>-27.173105854444515, -51.506813019318614</p>",
	PJoOConstantinoNetoPP48991301910P = "<p>João Constantino Neto</p><p>(48)991301910</p>",
	PMarcosCsnetwork49985030165P = "<p>Marcos CSNetwork: (49) 98503-0165</p>",
	PNOTemosAcessoAoSiteClientePsaUtilizaOLocalP = "<p>Não temos acesso ao site. Cliente PSA utiliza o local</p>",
	PPortaria49998272550P = "<p>Portaria: (49) 99827-2550</p>",
	PSemEstruturaClientePsaNoLocalP = "<p>Sem Estrutura. Cliente PSA no local</p>",
	PSolicitarAcessoAVivoPorEmailEnviandoAPlanilhaGausPreenchidaParaAReaDeGerenciamentoDeAcessoDaVivoPPEMailEfssobralIcomontecnologiaComBrPPModeloNaPastaDeEngenhariaEPlanejamentoGtStfcAtplusGtTelefonicaP = "<p>Solicitar Acesso a VIVO por email, enviando a planilha GAUS Preenchida para a Área de Gerenciamento de acesso da VIVO</p><p>E-mail: efssobral@icomontecnologia.com.br</p><p>Modelo na pasta de Engenharia e Planejamento &gt; STFC ATPLUS &gt; Telefonica</p>",
	PSolicitarAcessoJuntoAReaDeInterconexOClaroPPContatosNoSiteLgsPPDiego49988735474P = "<p>Solicitar Acesso junto a área de interconexão claro.</p><p>Contatos no site LGS:</p><p>Diego 49988735474</p>",
	PSotrimaP = "<p>SOTRIMA</p>",
}

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

export enum SitesUf {
	Ce = "CE",
	Pe = "PE",
	Pr = "PR",
	Sc = "sc",
	Sp = "SP",
}

export interface Sites {
	id: number;
	f_fk_telecom_contatos: number;
	f_bairro: string;
	f_cep: string;
	f_cidade: SitesCidade;
	f_complemento: string;
	f_dados_acesso: SitesDadosAcesso;
	f_endereco: string;
	f_nome: string;
	f_numero: string;
	f_sigla: string;
	f_status: SitesStatus;
	f_tipo: SitesTipo;
	f_uf: SitesUf;
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

export const SITES_CIDADE_LABELS: Record<SitesCidade, string> = {
	[SitesCidade.CampoBeloDoSul]: "Campo Belo Do Sul",
	[SitesCidade.Catanduvas]: "Catanduvas",
	[SitesCidade.Chapec]: "Chapecó",
	[SitesCidade.Cotia]: "Cotia",
	[SitesCidade.Curitiba]: "Curitiba",
	[SitesCidade.Curitibanos]: "Curitibanos",
	[SitesCidade.FlorianPolis]: "Florianópolis",
	[SitesCidade.Fortaleza]: "Fortaleza",
	[SitesCidade.HervalDOeste]: "Herval D'oeste",
	[SitesCidade.JoaAba]: "Joaçaba",
	[SitesCidade.Joinville]: "Joinville",
	[SitesCidade.Lages]: "Lages",
	[SitesCidade.Recife]: "Recife",
	[SitesCidade.SOJos]: "São José",
	[SitesCidade.TubarO]: "Tubarão",
};

export const SITES_DADOSACESSO_LABELS: Record<SitesDadosAcesso, string> = {
	[SitesDadosAcesso.PStrongDataCenterFortalezaCeStrongNbspPPNbspNbspPPRazOSocialNbspBrfibraTelecomunicaEsLtdaNbspNbspPPEndereONbspRuaDrRatisbonaN75BairroFTimaFortalezaCeNbspNbspPPCnpjNbsp73972002001350NbspNbspPPInscriOEstadualNbsp063818574NbspNbspPPNaturezaDaOperaONbspRemessaDeAtivoImobilizadoParaUsoForaDoEstabelecimentoNbspNbspPPDadosAdicionaisDaNfNbspContratoDePrestaODeServiOsNEmitidoEmNbspP]:
		"<p><strong>data Center Fortaleza/ce</strong>&nbsp;</p><p>&nbsp;&nbsp;</p><p>razão Social:&nbsp;brfibra Telecomunicações Ltda&nbsp;&nbsp;</p><p>endereço:&nbsp;rua Dr. Ratisbona, Nº 75, Bairro Fátima, Fortaleza/ce&nbsp;&nbsp;</p><p>cnpj:&nbsp;73.972.002/0013 50&nbsp;&nbsp;</p><p>inscrição Estadual:&nbsp;063/818574&nbsp;&nbsp;</p><p>natureza Da Operação:&nbsp;remessa De Ativo Imobilizado Para Uso Fora Do Estabelecimento&nbsp;&nbsp;</p><p>dados Adicionais Da Nf:&nbsp;contrato De Prestação De Serviços Nº ( ) Emitido Em / / .&nbsp;</p>",
	[SitesDadosAcesso.PStrongDataCenterRecifePeNbspStrongNbspPPNbspPPRazOSocialNbspBrfibraTelecomunicaEsLtdaNbspNbspPPEndereONbspRuaGeneralJoaquimInCioN412Sala701BairroIlhaDoLeiteRecifePeNbspNbspPPCnpjNbsp73972002001430NbspNbspPPInscriOEstadualNbsp038170752NbspNbspPPNaturezaDaOperaONbspRemessaDeAtivoImobilizadoParaUsoForaDoEstabelecimentoNbspNbspPPDadosAdicionaisDaNfNbspContratoDePrestaODeServiOsNEmitidoEmNbspNbspP]:
		"<p><strong>data Center Recife/pe&nbsp;</strong>&nbsp;</p><p>&nbsp;</p><p>razão Social:&nbsp;brfibra Telecomunicações Ltda&nbsp;&nbsp;</p><p>endereço:&nbsp;rua General Joaquim Inácio, Nº 412, Sala 701, Bairro Ilha Do Leite, Recife/pe&nbsp;&nbsp;</p><p>cnpj:&nbsp;73.972.002/0014 30&nbsp;&nbsp;</p><p>inscrição Estadual:&nbsp;038/170752&nbsp;&nbsp;</p><p>natureza Da Operação:&nbsp;remessa De Ativo Imobilizado Para Uso Fora Do Estabelecimento&nbsp;&nbsp;</p><p>dados Adicionais Da Nf:&nbsp;contrato De Prestação De Serviços Nº ( ) Emitido Em / / .&nbsp;&nbsp;</p>",
	[SitesDadosAcesso.PStrongDataNbspCenterNbspCuritibaPrNbspStrongNbspPPNbspCta53004891624PPRazOSocialNbspBrfibraTelecomunicaEsLtdaNbspNbspPPEndereORuaProfessorRubensElkeNbspBragaN107BBairroParolinNbspCuritibaPrNbspNbspPPCnpj73972002000469NbspNbspPPInscriOEstadual9037424290NbspNbspPPNaturezaDaOperaORemessaDeAtivoImobilizadoParaUsoForaDoEstabelecimentoNbspNbspPPDadosAdicionaisDaNfContratoDePrestaODeServiOsN0492024Anexo01EmitidoEm08042024P]:
		"<p><strong>data&nbsp;center&nbsp;curitiba/pr&nbsp;</strong>&nbsp;</p><p>&nbsp;cta53004891624</p><p>razão Social:&nbsp;brfibra Telecomunicações Ltda&nbsp;&nbsp;</p><p>endereço: Rua Professor Rubens Elke&nbsp;braga, Nº 107 B, Bairro Parolin,&nbsp;curitiba, Pr&nbsp;&nbsp;</p><p>cnpj: 73.972.002/0004 69&nbsp;&nbsp;</p><p>inscrição Estadual: 90374242 90&nbsp;&nbsp;</p><p>natureza Da Operação: Remessa De Ativo Imobilizado Para Uso Fora Do Estabelecimento&nbsp;&nbsp;</p><p>dados Adicionais Da Nf: Contrato De Prestação De Serviços Nº 049/2024 Anexo 01 Emitido Em 08/04/2024</p>",
	[SitesDadosAcesso.PStrongInstalaODeEquipamentosNoLocalNecessRioSolicitarAcessoPeloHelpdeskDaBrdigitalStrongPPRazOSocialBrfibraTelecomunicaEsLtdaNbspNbspPPEndereOAvPatrCioCaldeiraDeAndradeN12862AndarBairroCapoeirasFlorianPolisScNbspNbspPPCnpj73972002002674NbspNbspPPInscriOEstadual255313101NbspNbspPPNaturezaDaOperaORemessaDeAtivoImobilizadoParaUsoForaDoEstabelecimentoNbspNbspPPDadosAdicionaisDaNfContratoDePrestaODeServiOsNContrato0442024Anexo11EmitidoEm05122024PPBrPPStrongHelpDeskStrongPPHttpsHelpbrdigitalAgideskComPPBrPPStrongContatoDoTCnicoNoLocalStrongPPResponsVelEvertonPPWhatsapp48984038401PPPodeSerAcionadoEmCasosDeEmergenciaVerificaORPidaEEtcP]:
		"<p><strong>instalação De Equipamentos No Local, Necessário Solicitar Acesso Pelo Helpdesk Da Brdigital</strong></p><p>razão Social: Brfibra Telecomunicações Ltda&nbsp;&nbsp;</p><p>endereço: Av. Patrício Caldeira De Andrade, Nº 1286, 2º Andar, Bairro Capoeiras, Florianópolis, Sc&nbsp;&nbsp;</p><p>cnpj: 73.972.002/0026 74&nbsp;&nbsp;</p><p>inscrição Estadual: 255/313101&nbsp;&nbsp;</p><p>natureza Da Operação: Remessa De Ativo Imobilizado Para Uso Fora Do Estabelecimento&nbsp;&nbsp;</p><p>dados Adicionais Da Nf: Contrato De Prestação De Serviços Nº Contrato 044/2024 Anexo 11 Emitido Em 05/12/2024</p><p><br></p><p><strong>help Desk:</strong></p><p>https://helpbrdigital.agidesk.com/</p><p><br></p><p><strong>contato Do Técnico No Local:</strong></p><p>responsável: Everton</p><p>whatsapp: 48984038401</p><p>pode Ser Acionado Em Casos De Emergencia, Verificação Rápida, E Etc. </p>",
	[SitesDadosAcesso.PContatoComSimTelecomViaGrupoDeWhatsappP]:
		"<p>contato Com SIM Telecom Via Grupo De Whatsapp</p>",
	[SitesDadosAcesso.PDentroDoDcDaCirionCuritibaP]:
		"<p>dentro Do DC Da Cirion Curitiba</p>",
	[SitesDadosAcesso.PGaleriaTrevisanPP2717310585444451551506813019318614P]:
		"<p>galeria Trevisan</p><p> 27.173105854444515, 51.506813019318614</p>",
	[SitesDadosAcesso.PJoOConstantinoNetoPP48991301910P]:
		"<p>joão Constantino Neto</p><p>(48)991301910</p>",
	[SitesDadosAcesso.PMarcosCsnetwork49985030165P]:
		"<p>marcos Csnetwork: (49) 98503 0165</p>",
	[SitesDadosAcesso.PNOTemosAcessoAoSiteClientePsaUtilizaOLocalP]:
		"<p>não Temos Acesso Ao Site. Cliente PSA Utiliza O Local</p>",
	[SitesDadosAcesso.PPortaria49998272550P]: "<p>portaria: (49) 99827 2550</p>",
	[SitesDadosAcesso.PSemEstruturaClientePsaNoLocalP]:
		"<p>sem Estrutura. Cliente PSA No Local</p>",
	[SitesDadosAcesso.PSolicitarAcessoAVivoPorEmailEnviandoAPlanilhaGausPreenchidaParaAReaDeGerenciamentoDeAcessoDaVivoPPEMailEfssobralIcomontecnologiaComBrPPModeloNaPastaDeEngenhariaEPlanejamentoGtStfcAtplusGtTelefonicaP]:
		"<p>solicitar Acesso A VIVO Por Email, Enviando A Planilha GAUS Preenchida Para A Área De Gerenciamento De Acesso Da Vivo</p><p>e Mail: Efssobral@icomontecnologia.com.br</p><p>modelo Na Pasta De Engenharia E Planejamento &gt; STFC Atplus &gt; Telefonica</p>",
	[SitesDadosAcesso.PSolicitarAcessoJuntoAReaDeInterconexOClaroPPContatosNoSiteLgsPPDiego49988735474P]:
		"<p>solicitar Acesso Junto A Área De Interconexão Claro.</p><p>contatos No Site Lgs:</p><p>diego 49988735474</p>",
	[SitesDadosAcesso.PSotrimaP]: "<p>sotrima</p>",
};

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

export const SITES_UF_LABELS: Record<SitesUf, string> = {
	[SitesUf.Ce]: "CE",
	[SitesUf.Pe]: "PE",
	[SitesUf.Pr]: "PR",
	[SitesUf.Sc]: "Sc",
	[SitesUf.Sp]: "SP",
};

export enum Siurxeb1juyStgjevi19lg {
	Value1 = "1",
	Value15 = "15",
	Value16 = "16",
}

export enum Siurxeb1juyVazo5n0bhe5 {
	Value9 = "9",
}

export interface Siurxeb1juy {
	f_stgjevi19lg: Siurxeb1juyStgjevi19lg;
	f_vazo5n0bhe5: Siurxeb1juyVazo5n0bhe5;
}

export type Siurxeb1juyRelations = Record<string, never>;

export type Siurxeb1juyRelationKey = keyof Siurxeb1juyRelations;

export const SIURXEB1JUY_STGJEVI19LG_LABELS: Record<
	Siurxeb1juyStgjevi19lg,
	string
> = {
	[Siurxeb1juyStgjevi19lg.Value1]: "Ativo",
	[Siurxeb1juyStgjevi19lg.Value15]: "Código 15",
	[Siurxeb1juyStgjevi19lg.Value16]: "Código 16",
};

export const SIURXEB1JUY_VAZO5N0BHE5_LABELS: Record<
	Siurxeb1juyVazo5n0bhe5,
	string
> = {
	[Siurxeb1juyVazo5n0bhe5.Value9]: "Código 9",
};

export enum SolicitacaoComprasCategoria {
	Produto = "Produto",
	ServiO = "Serviço",
}

export enum SolicitacaoComprasDepartamento {
	Almox = "Almox",
	Comercial = "Comercial",
	Financeiro = "Financeiro",
	Infraestrutura = "Infraestrutura",
	LaboratRioTCnico = "Laboratório Técnico",
	Marketing = "Marketing",
	Noc = "NOC",
	Operacional = "Operacional",
	Platon = "Platon",
	Processos = "Processos",
	Projetos = "Projetos",
	Rh = "RH",
	ServiOsGerais = "Serviços Gerais",
}

export enum SolicitacaoComprasMetodoDePagamento {
	Definir = "Á definir",
	Pix = "Pix",
	Boleto = "Boleto",
	CartO = "Cartão",
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
	AprovaODaGestO = "Aprovação da Gestão",
	PedidoDeCompra = "Pedido de Compra",
	ProcessamentoFinanceiro = "Processamento Financeiro",
	FilaDeEntrega = "Fila de Entrega",
	ConcluDo = "Concluído",
	Rejeitado = "Rejeitado",
	Standby = "Standby",
}

export enum SolicitacaoComprasTipo {
	Value1 = "1",
	Value2 = "2",
}

export enum SolicitacaoComprasFkSolicitacaoCompras {
	Value4976 = "4976",
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
	fk_solicitacao_compras: SolicitacaoComprasFkSolicitacaoCompras;
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
	[SolicitacaoComprasCategoria.ServiO]: "Serviço",
};

export const SOLICITACAOCOMPRAS_DEPARTAMENTO_LABELS: Record<
	SolicitacaoComprasDepartamento,
	string
> = {
	[SolicitacaoComprasDepartamento.Almox]: "Almox",
	[SolicitacaoComprasDepartamento.Comercial]: "Comercial",
	[SolicitacaoComprasDepartamento.Financeiro]: "Financeiro",
	[SolicitacaoComprasDepartamento.Infraestrutura]: "Infraestrutura",
	[SolicitacaoComprasDepartamento.LaboratRioTCnico]: "Laboratório Técnico",
	[SolicitacaoComprasDepartamento.Marketing]: "Marketing",
	[SolicitacaoComprasDepartamento.Noc]: "NOC",
	[SolicitacaoComprasDepartamento.Operacional]: "Operacional",
	[SolicitacaoComprasDepartamento.Platon]: "Platon",
	[SolicitacaoComprasDepartamento.Processos]: "Processos",
	[SolicitacaoComprasDepartamento.Projetos]: "Projetos",
	[SolicitacaoComprasDepartamento.Rh]: "RH",
	[SolicitacaoComprasDepartamento.ServiOsGerais]: "Serviços Gerais",
};

export const SOLICITACAOCOMPRAS_METODODEPAGAMENTO_LABELS: Record<
	SolicitacaoComprasMetodoDePagamento,
	string
> = {
	[SolicitacaoComprasMetodoDePagamento.Definir]: "Á definir",
	[SolicitacaoComprasMetodoDePagamento.Pix]: "Pix",
	[SolicitacaoComprasMetodoDePagamento.Boleto]: "Boleto",
	[SolicitacaoComprasMetodoDePagamento.CartO]: "Cartão",
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
	[SolicitacaoComprasStatus.AprovaODaGestO]: "Aprovação da Gestão",
	[SolicitacaoComprasStatus.PedidoDeCompra]: "Pedido de Compra",
	[SolicitacaoComprasStatus.ProcessamentoFinanceiro]:
		"Processamento Financeiro",
	[SolicitacaoComprasStatus.FilaDeEntrega]: "Fila de Entrega",
	[SolicitacaoComprasStatus.ConcluDo]: "Concluído",
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

export const SOLICITACAOCOMPRAS_FKSOLICITACAOCOMPRAS_LABELS: Record<
	SolicitacaoComprasFkSolicitacaoCompras,
	string
> = {
	[SolicitacaoComprasFkSolicitacaoCompras.Value4976]: "4976",
};

export enum SuspensaoContratoDiasSuspensao {
	Value1 = "1",
	Value120 = "120",
	Value22 = "22",
	Value60 = "60",
	Value65 = "65",
	Value75 = "75",
	Value76 = "76",
	Value79 = "79",
	Value90 = "90",
}

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
	f_dias_suspensao: SuspensaoContratoDiasSuspensao;
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

export const SUSPENSAOCONTRATO_DIASSUSPENSAO_LABELS: Record<
	SuspensaoContratoDiasSuspensao,
	string
> = {
	[SuspensaoContratoDiasSuspensao.Value1]: "Ativo",
	[SuspensaoContratoDiasSuspensao.Value120]: "120",
	[SuspensaoContratoDiasSuspensao.Value22]: "Código 22",
	[SuspensaoContratoDiasSuspensao.Value60]: "Código 60",
	[SuspensaoContratoDiasSuspensao.Value65]: "Código 65",
	[SuspensaoContratoDiasSuspensao.Value75]: "Código 75",
	[SuspensaoContratoDiasSuspensao.Value76]: "Código 76",
	[SuspensaoContratoDiasSuspensao.Value79]: "Código 79",
	[SuspensaoContratoDiasSuspensao.Value90]: "Código 90",
};

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

export enum TelecomAnexosExtname {
	Drawio = ".drawio",
	Jpeg = ".jpeg",
	Jpg = ".jpg",
	Mov = ".mov",
	Pdf = ".pdf",
	Png = ".png",
}

export enum TelecomAnexosValue6j2u7ptvn88 {
	Value2 = "2",
	Value6 = "6",
	Value74 = "74",
}

export enum TelecomAnexosValue88kxg6s8bb8 {
	Value10 = "10",
	Value28 = "28",
	Value29 = "29",
	Value31 = "31",
	Value32 = "32",
	Value33 = "33",
	Value34 = "34",
	Value35 = "35",
	Value36 = "36",
	Value37 = "37",
	Value38 = "38",
	Value39 = "39",
	Value40 = "40",
}

export enum TelecomAnexosWo3wzgdoyoa {
	Value130 = "130",
	Value134 = "134",
	Value2 = "2",
}

export enum TelecomAnexosYcsq6mkkvk7 {
	Value12 = "12",
	Value20 = "20",
	Value63 = "63",
	Value65 = "65",
	Value66 = "66",
	Value85 = "85",
}

export enum TelecomAnexosMeta {
	ObjectObject = "[object Object]",
}

export enum TelecomAnexosMimetype {
	ApplicationOctetStream = "application/octet-stream",
	ApplicationPdf = "application/pdf",
	ImageJpeg = "image/jpeg",
	ImagePng = "image/png",
	VideoQuicktime = "video/quicktime",
}

export enum TelecomAnexosStorageid {
	Value1 = "1",
}

export interface TelecomAnexos {
	id: number;
	extname: TelecomAnexosExtname;
	f_6j2u7ptvn88: TelecomAnexosValue6j2u7ptvn88;
	f_88kxg6s8bb8: TelecomAnexosValue88kxg6s8bb8;
	f_wo3wzgdoyoa: TelecomAnexosWo3wzgdoyoa;
	f_ycsq6mkkvk7: TelecomAnexosYcsq6mkkvk7;
	filename: string;
	meta: TelecomAnexosMeta;
	mimetype: TelecomAnexosMimetype;
	path: string;
	preview: string;
	size: number;
	storageId: TelecomAnexosStorageid;
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

export const TELECOMANEXOS_EXTNAME_LABELS: Record<
	TelecomAnexosExtname,
	string
> = {
	[TelecomAnexosExtname.Drawio]: ".drawio",
	[TelecomAnexosExtname.Jpeg]: ".jpeg",
	[TelecomAnexosExtname.Jpg]: ".jpg",
	[TelecomAnexosExtname.Mov]: ".mov",
	[TelecomAnexosExtname.Pdf]: ".pdf",
	[TelecomAnexosExtname.Png]: ".png",
};

export const TELECOMANEXOS_VALUE6J2U7PTVN88_LABELS: Record<
	TelecomAnexosValue6j2u7ptvn88,
	string
> = {
	[TelecomAnexosValue6j2u7ptvn88.Value2]: "Código 2",
	[TelecomAnexosValue6j2u7ptvn88.Value6]: "Código 6",
	[TelecomAnexosValue6j2u7ptvn88.Value74]: "Código 74",
};

export const TELECOMANEXOS_VALUE88KXG6S8BB8_LABELS: Record<
	TelecomAnexosValue88kxg6s8bb8,
	string
> = {
	[TelecomAnexosValue88kxg6s8bb8.Value10]: "Código 10",
	[TelecomAnexosValue88kxg6s8bb8.Value28]: "Código 28",
	[TelecomAnexosValue88kxg6s8bb8.Value29]: "Código 29",
	[TelecomAnexosValue88kxg6s8bb8.Value31]: "Código 31",
	[TelecomAnexosValue88kxg6s8bb8.Value32]: "Código 32",
	[TelecomAnexosValue88kxg6s8bb8.Value33]: "Código 33",
	[TelecomAnexosValue88kxg6s8bb8.Value34]: "Código 34",
	[TelecomAnexosValue88kxg6s8bb8.Value35]: "Código 35",
	[TelecomAnexosValue88kxg6s8bb8.Value36]: "Código 36",
	[TelecomAnexosValue88kxg6s8bb8.Value37]: "Código 37",
	[TelecomAnexosValue88kxg6s8bb8.Value38]: "Código 38",
	[TelecomAnexosValue88kxg6s8bb8.Value39]: "Código 39",
	[TelecomAnexosValue88kxg6s8bb8.Value40]: "Código 40",
};

export const TELECOMANEXOS_WO3WZGDOYOA_LABELS: Record<
	TelecomAnexosWo3wzgdoyoa,
	string
> = {
	[TelecomAnexosWo3wzgdoyoa.Value130]: "130",
	[TelecomAnexosWo3wzgdoyoa.Value134]: "134",
	[TelecomAnexosWo3wzgdoyoa.Value2]: "Código 2",
};

export const TELECOMANEXOS_YCSQ6MKKVK7_LABELS: Record<
	TelecomAnexosYcsq6mkkvk7,
	string
> = {
	[TelecomAnexosYcsq6mkkvk7.Value12]: "Código 12",
	[TelecomAnexosYcsq6mkkvk7.Value20]: "Código 20",
	[TelecomAnexosYcsq6mkkvk7.Value63]: "Código 63",
	[TelecomAnexosYcsq6mkkvk7.Value65]: "Código 65",
	[TelecomAnexosYcsq6mkkvk7.Value66]: "Código 66",
	[TelecomAnexosYcsq6mkkvk7.Value85]: "Código 85",
};

export const TELECOMANEXOS_META_LABELS: Record<TelecomAnexosMeta, string> = {
	[TelecomAnexosMeta.ObjectObject]: "[object Object]",
};

export const TELECOMANEXOS_MIMETYPE_LABELS: Record<
	TelecomAnexosMimetype,
	string
> = {
	[TelecomAnexosMimetype.ApplicationOctetStream]: "Application/octet Stream",
	[TelecomAnexosMimetype.ApplicationPdf]: "Application/pdf",
	[TelecomAnexosMimetype.ImageJpeg]: "Image/jpeg",
	[TelecomAnexosMimetype.ImagePng]: "Image/png",
	[TelecomAnexosMimetype.VideoQuicktime]: "Video/quicktime",
};

export const TELECOMANEXOS_STORAGEID_LABELS: Record<
	TelecomAnexosStorageid,
	string
> = {
	[TelecomAnexosStorageid.Value1]: "Ativo",
};

export enum TelecomColocationOpcoesValue6c1tv6gt1ey {
	Value7 = "7",
}

export enum TelecomColocationOpcoesEnergia {
	Value0nqbw68srah = "0nqbw68srah",
	E5b3lklfpq4 = "e5b3lklfpq4",
	Mra46p506xo = "mra46p506xo",
}

export interface TelecomColocationOpcoes {
	id: number;
	f_6c1tv6gt1ey: TelecomColocationOpcoesValue6c1tv6gt1ey;
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

export const TELECOMCOLOCATIONOPCOES_VALUE6C1TV6GT1EY_LABELS: Record<
	TelecomColocationOpcoesValue6c1tv6gt1ey,
	string
> = {
	[TelecomColocationOpcoesValue6c1tv6gt1ey.Value7]: "Código 7",
};

export const TELECOMCOLOCATIONOPCOES_ENERGIA_LABELS: Record<
	TelecomColocationOpcoesEnergia,
	string
> = {
	[TelecomColocationOpcoesEnergia.Value0nqbw68srah]: "AC 220",
	[TelecomColocationOpcoesEnergia.E5b3lklfpq4]: "AC 110",
	[TelecomColocationOpcoesEnergia.Mra46p506xo]: "DC -48",
};

export enum TelecomContratosFkFornecedor {
	Value1 = "1",
	Value2 = "2",
}

export interface TelecomContratos {
	id: number;
	f_fk_cliente: number;
	f_fk_fornecedor: TelecomContratosFkFornecedor;
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

export const TELECOMCONTRATOS_FKFORNECEDOR_LABELS: Record<
	TelecomContratosFkFornecedor,
	string
> = {
	[TelecomContratosFkFornecedor.Value1]: "Ativo",
	[TelecomContratosFkFornecedor.Value2]: "Código 2",
};

export enum TelecomFilaFkFila {
	Value1 = "1",
}

export interface TelecomFila {
	id: number;
	f_fk_fila: TelecomFilaFkFila;
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

export const TELECOMFILA_FKFILA_LABELS: Record<TelecomFilaFkFila, string> = {
	[TelecomFilaFkFila.Value1]: "Ativo",
};

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

export enum TelecomIpsFixosControle {
	Value1 = "1",
}

export enum TelecomIpsFixosPossuiIpFixo {
	Value0 = "0",
	Value1 = "1",
}

export interface TelecomIpsFixos {
	id: number;
	f_contrato_ixc: string;
	f_controle: TelecomIpsFixosControle;
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

export const TELECOMIPSFIXOS_CONTROLE_LABELS: Record<
	TelecomIpsFixosControle,
	string
> = {
	[TelecomIpsFixosControle.Value1]: "Ativo",
};

export const TELECOMIPSFIXOS_POSSUIIPFIXO_LABELS: Record<
	TelecomIpsFixosPossuiIpFixo,
	string
> = {
	[TelecomIpsFixosPossuiIpFixo.Value0]: "Não",
	[TelecomIpsFixosPossuiIpFixo.Value1]: "Sim",
};

export enum TelecomOpcoesL2lRmfqnk0k53u {
	Value9 = "9",
}

export enum TelecomOpcoesL2lVelocidade {
	Value1Gbps = "1 Gbps",
	Value10Gbps = "10 Gbps",
	Value100Mbps = "100 Mbps",
	Value1000 = "1000",
	Value100m = "100M",
	Value100mbps = "100Mbps",
	Value150Mbps = "150 Mbps",
	Value2Gbps = "2 Gbps",
	Value20Gbps = "20 Gbps",
	Value20Mbps = "20 Mbps",
	Value200Mbps = "200 Mbps",
	Value30Mbps = "30 Mbps",
	Value300Mbps = "300 Mbps",
	Value400Mbps = "400 Mbps",
	Value50Mbps = "50 Mbps",
	Value50mbps = "50Mbps",
	Value55Mbps = "55 Mbps",
	Value600Mbps = "600 Mbps",
}

export interface TelecomOpcoesL2l {
	id: number;
	f_rmfqnk0k53u: TelecomOpcoesL2lRmfqnk0k53u;
	f_velocidade: TelecomOpcoesL2lVelocidade;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomOpcoesL2lRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomOpcoesL2lRelationKey = keyof TelecomOpcoesL2lRelations;

export const TELECOMOPCOESL2L_RMFQNK0K53U_LABELS: Record<
	TelecomOpcoesL2lRmfqnk0k53u,
	string
> = {
	[TelecomOpcoesL2lRmfqnk0k53u.Value9]: "Código 9",
};

export const TELECOMOPCOESL2L_VELOCIDADE_LABELS: Record<
	TelecomOpcoesL2lVelocidade,
	string
> = {
	[TelecomOpcoesL2lVelocidade.Value1Gbps]: "1 Gbps",
	[TelecomOpcoesL2lVelocidade.Value10Gbps]: "10 Gbps",
	[TelecomOpcoesL2lVelocidade.Value100Mbps]: "100 Mbps",
	[TelecomOpcoesL2lVelocidade.Value1000]: "1000",
	[TelecomOpcoesL2lVelocidade.Value100m]: "100m",
	[TelecomOpcoesL2lVelocidade.Value100mbps]: "100mbps",
	[TelecomOpcoesL2lVelocidade.Value150Mbps]: "150 Mbps",
	[TelecomOpcoesL2lVelocidade.Value2Gbps]: "2 Gbps",
	[TelecomOpcoesL2lVelocidade.Value20Gbps]: "20 Gbps",
	[TelecomOpcoesL2lVelocidade.Value20Mbps]: "20 Mbps",
	[TelecomOpcoesL2lVelocidade.Value200Mbps]: "200 Mbps",
	[TelecomOpcoesL2lVelocidade.Value30Mbps]: "30 Mbps",
	[TelecomOpcoesL2lVelocidade.Value300Mbps]: "300 Mbps",
	[TelecomOpcoesL2lVelocidade.Value400Mbps]: "400 Mbps",
	[TelecomOpcoesL2lVelocidade.Value50Mbps]: "50 Mbps",
	[TelecomOpcoesL2lVelocidade.Value50mbps]: "50mbps",
	[TelecomOpcoesL2lVelocidade.Value55Mbps]: "55 Mbps",
	[TelecomOpcoesL2lVelocidade.Value600Mbps]: "600 Mbps",
};

export enum TelecomRacksFkRackFila {
	Value1 = "1",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
	Value14 = "14",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value6 = "6",
	Value8 = "8",
	Value9 = "9",
}

export enum TelecomRacksFkRackSala {
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
	Value15 = "15",
	Value16 = "16",
	Value17 = "17",
	Value18 = "18",
	Value19 = "19",
	Value2 = "2",
	Value3 = "3",
	Value5 = "5",
	Value7 = "7",
	Value9 = "9",
}

export enum TelecomRacksRack {
	Value01 = "01",
	Value013 = "013",
	Value014 = "014",
	Value020 = "020",
	B01 = "B01",
	Bastidor4 = "BASTIDOR-4",
	Bt4 = "BT-4",
	DgoIx = "DGO-IX",
	R01 = "R01",
	R02 = "R02",
	R03 = "R03",
	R04 = "R04",
	R05 = "R05",
	R06 = "R06",
	R07 = "R07",
	R08 = "R08",
	R20 = "R20",
	Rack0695 = "RACK 0695",
}

export interface TelecomRacks {
	id: number;
	f_fk_rack_fila: TelecomRacksFkRackFila;
	f_fk_rack_sala: TelecomRacksFkRackSala;
	f_fk_site_racks: number;
	f_rack: TelecomRacksRack;
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

export const TELECOMRACKS_FKRACKFILA_LABELS: Record<
	TelecomRacksFkRackFila,
	string
> = {
	[TelecomRacksFkRackFila.Value1]: "Ativo",
	[TelecomRacksFkRackFila.Value10]: "Código 10",
	[TelecomRacksFkRackFila.Value11]: "Código 11",
	[TelecomRacksFkRackFila.Value12]: "Código 12",
	[TelecomRacksFkRackFila.Value13]: "Código 13",
	[TelecomRacksFkRackFila.Value14]: "Código 14",
	[TelecomRacksFkRackFila.Value2]: "Código 2",
	[TelecomRacksFkRackFila.Value3]: "Código 3",
	[TelecomRacksFkRackFila.Value4]: "Código 4",
	[TelecomRacksFkRackFila.Value6]: "Código 6",
	[TelecomRacksFkRackFila.Value8]: "Código 8",
	[TelecomRacksFkRackFila.Value9]: "Código 9",
};

export const TELECOMRACKS_FKRACKSALA_LABELS: Record<
	TelecomRacksFkRackSala,
	string
> = {
	[TelecomRacksFkRackSala.Value10]: "Código 10",
	[TelecomRacksFkRackSala.Value11]: "Código 11",
	[TelecomRacksFkRackSala.Value12]: "Código 12",
	[TelecomRacksFkRackSala.Value13]: "Código 13",
	[TelecomRacksFkRackSala.Value15]: "Código 15",
	[TelecomRacksFkRackSala.Value16]: "Código 16",
	[TelecomRacksFkRackSala.Value17]: "Código 17",
	[TelecomRacksFkRackSala.Value18]: "Código 18",
	[TelecomRacksFkRackSala.Value19]: "Código 19",
	[TelecomRacksFkRackSala.Value2]: "Código 2",
	[TelecomRacksFkRackSala.Value3]: "Código 3",
	[TelecomRacksFkRackSala.Value5]: "Código 5",
	[TelecomRacksFkRackSala.Value7]: "Código 7",
	[TelecomRacksFkRackSala.Value9]: "Código 9",
};

export const TELECOMRACKS_RACK_LABELS: Record<TelecomRacksRack, string> = {
	[TelecomRacksRack.Value01]: "Código 01",
	[TelecomRacksRack.Value013]: "013",
	[TelecomRacksRack.Value014]: "014",
	[TelecomRacksRack.Value020]: "020",
	[TelecomRacksRack.B01]: "B01",
	[TelecomRacksRack.Bastidor4]: "Bastidor 4",
	[TelecomRacksRack.Bt4]: "BT 4",
	[TelecomRacksRack.DgoIx]: "DGO IX",
	[TelecomRacksRack.R01]: "R01",
	[TelecomRacksRack.R02]: "R02",
	[TelecomRacksRack.R03]: "R03",
	[TelecomRacksRack.R04]: "R04",
	[TelecomRacksRack.R05]: "R05",
	[TelecomRacksRack.R06]: "R06",
	[TelecomRacksRack.R07]: "R07",
	[TelecomRacksRack.R08]: "R08",
	[TelecomRacksRack.R20]: "R20",
	[TelecomRacksRack.Rack0695]: "RACK 0695",
};

export enum TelecomRecursosValue2ew016ynyo6 {
	Value3 = "3",
}

export enum TelecomRecursosDesignacaoExterna {
	Value17598 = "17598",
	Value1952644 = "1952644",
	Value8150d3js4 = "81-50D3JS4",
	Value8150d3js8 = "81-50D3JS8",
	Cta53004891624 = "CTA53004891624",
	Cta53007441824 = "CTA53007441824",
	Fns53007971924 = "FNS53007971924",
	Fns53007972024 = "FNS53007972024",
	Fns53008536025 = "FNS53008536025",
	Lgs53004891424 = "LGS53004891424",
	Lgs53007972324 = "LGS53007972324",
	Soo53007972124 = "SOO53007972124",
}

export enum TelecomRecursosDetalhes {
	Value10GbpsNoTotal = "10 GBPS no total",
	Value17918417254Atplus17918417253VivoBgpAs267121Asvivo = "179.184.17.254 - ATPLUS\n179.184.17.253 - VIVO\nBGP AS267121 <> ASVIVO\n",
	Value4522910448 = "45.229.104.48",
	Asdadsadsadsadasdasd = "asdadsadsadsadasdasd",
	ColocationFornecidoParaNddSpo = "Colocation Fornecido para NDD SPO",
	ContratadoComACirionExclusivamenteParaAtenderANdd = "Contratado com a Cirion exclusivamente para atender a NDD",
	FavorIrAoLocalRemoverUmCabo = "Favor ir ao local remover um cabo.",
	Velocidade1GbpsEntregaDePortaTrunkCrossConnectDeResponsabilidadeDoClienteClienteProveuAsSeguintesInformaEsDePontaARackDc07Rack010007ParaPontaBSimDc11012014Pp01Ft1012Xconnection500400695 = "VELOCIDADE: 1 GBPS\nEntrega de porta trunk. Cross Connect de responsabilidade do cliente. Cliente proveu as seguintes informações:\nDE: Ponta A: Rack DC07 Rack 010.007\nPARA: Ponta B: SIM - DC-11 012-014 - PP01 FT10 1/2\nXConnection -  500400695",
	Vlan1010Asn265005BlocosDeIp1708420002231562024 = "VLAN:\n1010\nASN: \n265005\nBlocos de IP:\n170.84.200.0/22\n31.56.2.0/24",
}

export enum TelecomRecursosFinalidade {
	Value3 = "3",
	Value2 = "2",
	Value4 = "4",
	Value1 = "1",
}

export enum TelecomRecursosFkAnexosRecursos {
	Value1 = "1",
	Value8 = "8",
}

export enum TelecomRecursosFkFornecedorRecurso {
	Value1 = "1",
	Value2 = "2",
	Value29 = "29",
	Value36 = "36",
	Value5 = "5",
	Value9 = "9",
}

export enum TelecomRecursosIdProduto {
	Value1998 = "1998",
	Value29049 = "29049",
	Value63600 = "63600",
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
	f_fk_anexos_recursos: TelecomRecursosFkAnexosRecursos;
	f_fk_cliente_recurso: number;
	f_fk_fornecedor_recurso: TelecomRecursosFkFornecedorRecurso;
	f_fk_rack_a: number;
	f_fk_rack_b: number;
	f_fk_site_a: number;
	f_fk_site_b: number;
	f_2ew016ynyo6: TelecomRecursosValue2ew016ynyo6;
	f_contrato_ixc: number;
	f_designacao_atplus: string;
	f_designacao_externa: TelecomRecursosDesignacaoExterna;
	f_detalhes: TelecomRecursosDetalhes;
	f_finalidade: TelecomRecursosFinalidade;
	f_id_produto: TelecomRecursosIdProduto;
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

export const TELECOMRECURSOS_VALUE2EW016YNYO6_LABELS: Record<
	TelecomRecursosValue2ew016ynyo6,
	string
> = {
	[TelecomRecursosValue2ew016ynyo6.Value3]: "Código 3",
};

export const TELECOMRECURSOS_DESIGNACAOEXTERNA_LABELS: Record<
	TelecomRecursosDesignacaoExterna,
	string
> = {
	[TelecomRecursosDesignacaoExterna.Value17598]: "17598",
	[TelecomRecursosDesignacaoExterna.Value1952644]: "1952644",
	[TelecomRecursosDesignacaoExterna.Value8150d3js4]: "81 50d3js4",
	[TelecomRecursosDesignacaoExterna.Value8150d3js8]: "81 50d3js8",
	[TelecomRecursosDesignacaoExterna.Cta53004891624]: "Cta53004891624",
	[TelecomRecursosDesignacaoExterna.Cta53007441824]: "Cta53007441824",
	[TelecomRecursosDesignacaoExterna.Fns53007971924]: "Fns53007971924",
	[TelecomRecursosDesignacaoExterna.Fns53007972024]: "Fns53007972024",
	[TelecomRecursosDesignacaoExterna.Fns53008536025]: "Fns53008536025",
	[TelecomRecursosDesignacaoExterna.Lgs53004891424]: "Lgs53004891424",
	[TelecomRecursosDesignacaoExterna.Lgs53007972324]: "Lgs53007972324",
	[TelecomRecursosDesignacaoExterna.Soo53007972124]: "Soo53007972124",
};

export const TELECOMRECURSOS_DETALHES_LABELS: Record<
	TelecomRecursosDetalhes,
	string
> = {
	[TelecomRecursosDetalhes.Value10GbpsNoTotal]: "10 GBPS No Total",
	[TelecomRecursosDetalhes.Value17918417254Atplus17918417253VivoBgpAs267121Asvivo]:
		"179.184.17.254 Atplus 179.184.17.253 VIVO BGP As267121 <> Asvivo",
	[TelecomRecursosDetalhes.Value4522910448]: "45.229.104.48",
	[TelecomRecursosDetalhes.Asdadsadsadsadasdasd]: "Asdadsadsadsadasdasd",
	[TelecomRecursosDetalhes.ColocationFornecidoParaNddSpo]:
		"Colocation Fornecido Para NDD SPO",
	[TelecomRecursosDetalhes.ContratadoComACirionExclusivamenteParaAtenderANdd]:
		"Contratado Com A Cirion Exclusivamente Para Atender A NDD",
	[TelecomRecursosDetalhes.FavorIrAoLocalRemoverUmCabo]:
		"Favor Ir Ao Local Remover Um Cabo.",
	[TelecomRecursosDetalhes.Velocidade1GbpsEntregaDePortaTrunkCrossConnectDeResponsabilidadeDoClienteClienteProveuAsSeguintesInformaEsDePontaARackDc07Rack010007ParaPontaBSimDc11012014Pp01Ft1012Xconnection500400695]:
		"Velocidade: 1 GBPS Entrega De Porta Trunk. Cross Connect De Responsabilidade Do Cliente. Cliente Proveu As Seguintes Informações: De: Ponta A: Rack Dc07 Rack 010.007 Para: Ponta B: SIM DC 11 012 014 Pp01 Ft10 1/2 Xconnection 500400695",
	[TelecomRecursosDetalhes.Vlan1010Asn265005BlocosDeIp1708420002231562024]:
		"Vlan: 1010 Asn: 265005 Blocos De Ip: 170.84.200.0/22 31.56.2.0/24",
};

export const TELECOMRECURSOS_FINALIDADE_LABELS: Record<
	TelecomRecursosFinalidade,
	string
> = {
	[TelecomRecursosFinalidade.Value3]: "Insumo para Serviço",
	[TelecomRecursosFinalidade.Value2]: "Serviço",
	[TelecomRecursosFinalidade.Value4]: "Facilidade",
	[TelecomRecursosFinalidade.Value1]: "Acesso",
};

export const TELECOMRECURSOS_FKANEXOSRECURSOS_LABELS: Record<
	TelecomRecursosFkAnexosRecursos,
	string
> = {
	[TelecomRecursosFkAnexosRecursos.Value1]: "Ativo",
	[TelecomRecursosFkAnexosRecursos.Value8]: "Código 8",
};

export const TELECOMRECURSOS_FKFORNECEDORRECURSO_LABELS: Record<
	TelecomRecursosFkFornecedorRecurso,
	string
> = {
	[TelecomRecursosFkFornecedorRecurso.Value1]: "Ativo",
	[TelecomRecursosFkFornecedorRecurso.Value2]: "Código 2",
	[TelecomRecursosFkFornecedorRecurso.Value29]: "Código 29",
	[TelecomRecursosFkFornecedorRecurso.Value36]: "Código 36",
	[TelecomRecursosFkFornecedorRecurso.Value5]: "Código 5",
	[TelecomRecursosFkFornecedorRecurso.Value9]: "Código 9",
};

export const TELECOMRECURSOS_IDPRODUTO_LABELS: Record<
	TelecomRecursosIdProduto,
	string
> = {
	[TelecomRecursosIdProduto.Value1998]: "1998",
	[TelecomRecursosIdProduto.Value29049]: "29049",
	[TelecomRecursosIdProduto.Value63600]: "63600",
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

export enum TelecomSalasFkSalas {
	Value1 = "1",
}

export interface TelecomSalas {
	id: number;
	f_fk_salas: TelecomSalasFkSalas;
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

export const TELECOMSALAS_FKSALAS_LABELS: Record<TelecomSalasFkSalas, string> =
	{
		[TelecomSalasFkSalas.Value1]: "Ativo",
	};

export enum TelecomTransitoOpcoesValue1eu8gjcf9js {
	Value14 = "14",
	Value8 = "8",
}

export enum TelecomTransitoOpcoesVelocidade {
	Value1Gbps = "1 Gbps",
	Value10Gbps = "10 Gbps",
	Value100Mbps = "100 Mbps",
	Value100mbps = "100Mbps",
	Value150Mbps = "150 Mbps",
	Value2Gbps = "2 Gbps",
	Value20Mbps = "20 Mbps",
	Value200Mbps = "200 Mbps",
	Value30Mbps = "30 Mbps",
	Value300Mbps = "300 Mbps",
	Value400Mbps = "400 Mbps",
	Value50Mbps = "50 Mbps",
	Value55Mbps = "55 Mbps",
	Value600Mbps = "600 Mbps",
}

export interface TelecomTransitoOpcoes {
	id: number;
	f_1eu8gjcf9js: TelecomTransitoOpcoesValue1eu8gjcf9js;
	f_ips: string;
	f_velocidade: TelecomTransitoOpcoesVelocidade;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomTransitoOpcoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomTransitoOpcoesRelationKey =
	keyof TelecomTransitoOpcoesRelations;

export const TELECOMTRANSITOOPCOES_VALUE1EU8GJCF9JS_LABELS: Record<
	TelecomTransitoOpcoesValue1eu8gjcf9js,
	string
> = {
	[TelecomTransitoOpcoesValue1eu8gjcf9js.Value14]: "Código 14",
	[TelecomTransitoOpcoesValue1eu8gjcf9js.Value8]: "Código 8",
};

export const TELECOMTRANSITOOPCOES_VELOCIDADE_LABELS: Record<
	TelecomTransitoOpcoesVelocidade,
	string
> = {
	[TelecomTransitoOpcoesVelocidade.Value1Gbps]: "1 Gbps",
	[TelecomTransitoOpcoesVelocidade.Value10Gbps]: "10 Gbps",
	[TelecomTransitoOpcoesVelocidade.Value100Mbps]: "100 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value100mbps]: "100mbps",
	[TelecomTransitoOpcoesVelocidade.Value150Mbps]: "150 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value2Gbps]: "2 Gbps",
	[TelecomTransitoOpcoesVelocidade.Value20Mbps]: "20 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value200Mbps]: "200 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value30Mbps]: "30 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value300Mbps]: "300 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value400Mbps]: "400 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value50Mbps]: "50 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value55Mbps]: "55 Mbps",
	[TelecomTransitoOpcoesVelocidade.Value600Mbps]: "600 Mbps",
};

export enum TemplatesAtendimentoN1Createdat {
	Value20250904t171815345z = "2025-09-04T17:18:15.345Z",
}

export enum TemplatesAtendimentoN1AcessaPelaRedeDaAtplus {
	Sim = "Sim",
	NO = "Não",
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
	OlTv = "Olé TV",
	TodosOsAplicativos = "Todos os aplicativos",
}

export enum TemplatesAtendimentoN1AplicativoEspecifico {
	Sim = "Sim",
	NO = "Não",
}

export enum TemplatesAtendimentoN1ApnPreenchida {
	Sim = "Sim",
	NO = "Não",
	NOSoubeDizer = "Não soube dizer",
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
	NO = "Não",
}

export enum TemplatesAtendimentoN1Nome {
	SemConexO = "Sem conexão",
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
	NORecebeLigaEs = "Não recebe ligações",
	NOEfetuaLigaEs = "Não efetua ligações",
	QuedasNasLigaEs = "Quedas nas ligações",
	ChiadoVozRobTica = "Chiado / Voz robótica",
	MudoSemTom = "Mudo / Sem tom",
}

export enum TemplatesAtendimentoN1TipoDeAtendimento {
	LentidO = "Lentidão",
	SemConexO = "Sem conexão",
	SiteEspecFico = "Site específico",
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
	NORecebeLigaEs = "Não recebe ligações",
	NOEfetuaLigaEs = "Não efetua ligações",
	DadosMVeisNOFuncionam = "Dados móveis não funcionam",
}

export enum TemplatesAtendimentoN1TorreRede {
	ComSinal = "Com sinal",
	SemSinal = "Sem sinal",
}

export enum TemplatesAtendimentoN1Id {
	Value1 = "1",
}

export enum TemplatesAtendimentoN1Updatedat {
	Value20250904t171815345z = "2025-09-04T17:18:15.345Z",
}

export interface TemplatesAtendimentoN1 {
	id: TemplatesAtendimentoN1Id;
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
	f_nome: TemplatesAtendimentoN1Nome;
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
	updatedAt: TemplatesAtendimentoN1Updatedat;
	createdAt: TemplatesAtendimentoN1Createdat;
}

export interface TemplatesAtendimentoN1Relations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TemplatesAtendimentoN1RelationKey =
	keyof TemplatesAtendimentoN1Relations;

export const TEMPLATESATENDIMENTON1_CREATEDAT_LABELS: Record<
	TemplatesAtendimentoN1Createdat,
	string
> = {
	[TemplatesAtendimentoN1Createdat.Value20250904t171815345z]:
		"2025 09 04t17:18:15.345z",
};

export const TEMPLATESATENDIMENTON1_ACESSAPELAREDEDAATPLUS_LABELS: Record<
	TemplatesAtendimentoN1AcessaPelaRedeDaAtplus,
	string
> = {
	[TemplatesAtendimentoN1AcessaPelaRedeDaAtplus.Sim]: "Sim",
	[TemplatesAtendimentoN1AcessaPelaRedeDaAtplus.NO]: "Nao",
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
	[TemplatesAtendimentoN1Aplicativo.OlTv]: "Olé TV",
	[TemplatesAtendimentoN1Aplicativo.TodosOsAplicativos]: "Todos os aplicativos",
};

export const TEMPLATESATENDIMENTON1_APLICATIVOESPECIFICO_LABELS: Record<
	TemplatesAtendimentoN1AplicativoEspecifico,
	string
> = {
	[TemplatesAtendimentoN1AplicativoEspecifico.Sim]: "Sim",
	[TemplatesAtendimentoN1AplicativoEspecifico.NO]: "Não",
};

export const TEMPLATESATENDIMENTON1_APNPREENCHIDA_LABELS: Record<
	TemplatesAtendimentoN1ApnPreenchida,
	string
> = {
	[TemplatesAtendimentoN1ApnPreenchida.Sim]: "Sim",
	[TemplatesAtendimentoN1ApnPreenchida.NO]: "Não",
	[TemplatesAtendimentoN1ApnPreenchida.NOSoubeDizer]: "Não soube dizer",
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
	[TemplatesAtendimentoN1Los.NO]: "Não",
};

export const TEMPLATESATENDIMENTON1_NOME_LABELS: Record<
	TemplatesAtendimentoN1Nome,
	string
> = {
	[TemplatesAtendimentoN1Nome.SemConexO]: "Sem Conexão",
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
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.NORecebeLigaEs]:
		"Não recebe ligações",
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.NOEfetuaLigaEs]:
		"Não efetua ligações",
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.QuedasNasLigaEs]:
		"Quedas nas ligações",
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.ChiadoVozRobTica]:
		"Chiado / Voz robótica",
	[TemplatesAtendimentoN1TelefoniaTipoDeProblema.MudoSemTom]: "Mudo / Sem tom",
};

export const TEMPLATESATENDIMENTON1_TIPODEATENDIMENTO_LABELS: Record<
	TemplatesAtendimentoN1TipoDeAtendimento,
	string
> = {
	[TemplatesAtendimentoN1TipoDeAtendimento.LentidO]: "Lentidão/Quedas",
	[TemplatesAtendimentoN1TipoDeAtendimento.SemConexO]: "Sem conexão",
	[TemplatesAtendimentoN1TipoDeAtendimento.SiteEspecFico]: "Site específico",
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
	[TemplatesAtendimentoN1TipoDeProblemaMvno.NORecebeLigaEs]:
		"Não recebe ligações",
	[TemplatesAtendimentoN1TipoDeProblemaMvno.NOEfetuaLigaEs]:
		"Não efetua ligações",
	[TemplatesAtendimentoN1TipoDeProblemaMvno.DadosMVeisNOFuncionam]:
		"Dados móveis não funcionam",
};

export const TEMPLATESATENDIMENTON1_TORREREDE_LABELS: Record<
	TemplatesAtendimentoN1TorreRede,
	string
> = {
	[TemplatesAtendimentoN1TorreRede.ComSinal]: "Com sinal",
	[TemplatesAtendimentoN1TorreRede.SemSinal]: "Sem sinal",
};

export const TEMPLATESATENDIMENTON1_ID_LABELS: Record<
	TemplatesAtendimentoN1Id,
	string
> = {
	[TemplatesAtendimentoN1Id.Value1]: "Ativo",
};

export const TEMPLATESATENDIMENTON1_UPDATEDAT_LABELS: Record<
	TemplatesAtendimentoN1Updatedat,
	string
> = {
	[TemplatesAtendimentoN1Updatedat.Value20250904t171815345z]:
		"2025 09 04t17:18:15.345z",
};

export enum TrocaEnderecoEnderecoCidade {
	BocainaDoSul = "Bocaina do Sul",
	BomRetiro = "Bom Retiro ",
	CampoBeloDoSul = "Campo Belo do Sul",
	CapOAlto = "Capão Alto",
	Curitibanos = "Curitibanos",
	Lages = "lages",
	Vacaria = "Vacaria ",
}

export enum TrocaEnderecoEnderecoEstado {
	Sc = "sc",
}

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
	f_endereco_cidade: TrocaEnderecoEnderecoCidade;
	f_endereco_complemento: string;
	f_endereco_estado: TrocaEnderecoEnderecoEstado;
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

export const TROCAENDERECO_ENDERECOCIDADE_LABELS: Record<
	TrocaEnderecoEnderecoCidade,
	string
> = {
	[TrocaEnderecoEnderecoCidade.BocainaDoSul]: "Bocaina Do Sul",
	[TrocaEnderecoEnderecoCidade.BomRetiro]: "Bom Retiro",
	[TrocaEnderecoEnderecoCidade.CampoBeloDoSul]: "Campo Belo Do Sul",
	[TrocaEnderecoEnderecoCidade.CapOAlto]: "Capão Alto",
	[TrocaEnderecoEnderecoCidade.Curitibanos]: "Curitibanos",
	[TrocaEnderecoEnderecoCidade.Lages]: "Lages",
	[TrocaEnderecoEnderecoCidade.Vacaria]: "Vacaria",
};

export const TROCAENDERECO_ENDERECOESTADO_LABELS: Record<
	TrocaEnderecoEnderecoEstado,
	string
> = {
	[TrocaEnderecoEnderecoEstado.Sc]: "Sc",
};

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

export enum TurnosCreatedat {
	Value20260223t203759071z = "2026-02-23T20:37:59.071Z",
}

export enum TurnosUpdatedat {
	Value20260223t203759071z = "2026-02-23T20:37:59.071Z",
}

export interface Turnos {
	id: number;
	f_turno: string;
	updatedAt: TurnosUpdatedat;
	createdAt: TurnosCreatedat;
}

export interface TurnosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	updatedBy?: Users | null;
}

export type TurnosRelationKey = keyof TurnosRelations;

export const TURNOS_CREATEDAT_LABELS: Record<TurnosCreatedat, string> = {
	[TurnosCreatedat.Value20260223t203759071z]: "2026 02 23t20:37:59.071z",
};

export const TURNOS_UPDATEDAT_LABELS: Record<TurnosUpdatedat, string> = {
	[TurnosUpdatedat.Value20260223t203759071z]: "2026 02 23t20:37:59.071z",
};

export enum ViagemSolicitacaoDestinoViagem {
	BocainaDoSul = "Bocaina do Sul",
	CampoBeloDoSul = "Campo Belo do Sul",
	CapOAlto = "Capão Alto",
	CerroNegro = "Cerro Negro",
	CorreiaPinto = "Correia Pinto",
	Curitibanos = "Curitibanos",
	FlorianPolis = "Florianópolis",
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
	ConcluDo = "Concluído",
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

export enum ViagemSolicitacaoPercorrido {
	Value170 = "170",
	Value174 = "174",
	Value180 = "180",
	Value448 = "448",
}

export enum ViagemSolicitacaoValorCobrado {
	Value20958 = "209.58",
	Value40 = "40",
	Value80 = "80",
}

export enum ViagemSolicitacaoValorDiaria {
	Value200 = "200",
	Value40 = "40",
	Value400 = "400",
	Value4000 = "4000",
	Value80 = "80",
}

export enum ViagemSolicitacaoValorPedagio {
	Value168 = "16.8",
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
	f_percorrido: ViagemSolicitacaoPercorrido;
	f_quantidade_dias: string;
	f_sub_total: string;
	f_total_pagar: number;
	f_valor_cobrado: ViagemSolicitacaoValorCobrado;
	f_valor_diaria: ViagemSolicitacaoValorDiaria;
	f_valor_pedagio: ViagemSolicitacaoValorPedagio;
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
	[ViagemSolicitacaoDestinoViagem.CapOAlto]: "Capão Alto",
	[ViagemSolicitacaoDestinoViagem.CerroNegro]: "Cerro Negro",
	[ViagemSolicitacaoDestinoViagem.CorreiaPinto]: "Correia Pinto",
	[ViagemSolicitacaoDestinoViagem.Curitibanos]: "Curitibanos",
	[ViagemSolicitacaoDestinoViagem.FlorianPolis]: "Florianópolis",
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
	[ViagemSolicitacaoFase.ConcluDo]: "Concluído",
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

export const VIAGEMSOLICITACAO_PERCORRIDO_LABELS: Record<
	ViagemSolicitacaoPercorrido,
	string
> = {
	[ViagemSolicitacaoPercorrido.Value170]: "170",
	[ViagemSolicitacaoPercorrido.Value174]: "174",
	[ViagemSolicitacaoPercorrido.Value180]: "180",
	[ViagemSolicitacaoPercorrido.Value448]: "448",
};

export const VIAGEMSOLICITACAO_VALORCOBRADO_LABELS: Record<
	ViagemSolicitacaoValorCobrado,
	string
> = {
	[ViagemSolicitacaoValorCobrado.Value20958]: "209.58",
	[ViagemSolicitacaoValorCobrado.Value40]: "Código 40",
	[ViagemSolicitacaoValorCobrado.Value80]: "Código 80",
};

export const VIAGEMSOLICITACAO_VALORDIARIA_LABELS: Record<
	ViagemSolicitacaoValorDiaria,
	string
> = {
	[ViagemSolicitacaoValorDiaria.Value200]: "200",
	[ViagemSolicitacaoValorDiaria.Value40]: "Código 40",
	[ViagemSolicitacaoValorDiaria.Value400]: "400",
	[ViagemSolicitacaoValorDiaria.Value4000]: "4000",
	[ViagemSolicitacaoValorDiaria.Value80]: "Código 80",
};

export const VIAGEMSOLICITACAO_VALORPEDAGIO_LABELS: Record<
	ViagemSolicitacaoValorPedagio,
	string
> = {
	[ViagemSolicitacaoValorPedagio.Value168]: "16.8",
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

export enum ZapsignDataDeEncerramento {
	Value20250526 = "2025-05-26",
	Value20250625 = "2025-06-25",
	Value20250725 = "2025-07-25",
	Value20250824 = "2025-08-24",
	Value20250923 = "2025-09-23",
	Value20251023 = "2025-10-23",
	Value20251122 = "2025-11-22",
	Value20251222 = "2025-12-22",
	Value20260121 = "2026-01-21",
	Value20260220 = "2026-02-20",
	Value20260322 = "2026-03-22",
	Value20260421 = "2026-04-21",
}

export enum ZapsignNomeDoPlano {
	ApiGrowMensal = "API Grow (mensal)",
	Equipe200Mensal = "Equipe 200 (Mensal)",
}

export enum ZapsignPeriodo {
	Monthly = "monthly",
}

export enum ZapsignStatus {
	Paid = "paid",
}

export interface Zapsign {
	id: number;
	f_data_de_encerramento: ZapsignDataDeEncerramento;
	f_nome_do_plano: ZapsignNomeDoPlano;
	f_numero_de_creditos: string;
	f_periodo: ZapsignPeriodo;
	f_status: ZapsignStatus;
	updatedAt: string;
	createdAt: string;
}

export interface ZapsignRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ZapsignRelationKey = keyof ZapsignRelations;

export const ZAPSIGN_DATADEENCERRAMENTO_LABELS: Record<
	ZapsignDataDeEncerramento,
	string
> = {
	[ZapsignDataDeEncerramento.Value20250526]: "2025 05 26",
	[ZapsignDataDeEncerramento.Value20250625]: "2025 06 25",
	[ZapsignDataDeEncerramento.Value20250725]: "2025 07 25",
	[ZapsignDataDeEncerramento.Value20250824]: "2025 08 24",
	[ZapsignDataDeEncerramento.Value20250923]: "2025 09 23",
	[ZapsignDataDeEncerramento.Value20251023]: "2025 10 23",
	[ZapsignDataDeEncerramento.Value20251122]: "2025 11 22",
	[ZapsignDataDeEncerramento.Value20251222]: "2025 12 22",
	[ZapsignDataDeEncerramento.Value20260121]: "2026 01 21",
	[ZapsignDataDeEncerramento.Value20260220]: "2026 02 20",
	[ZapsignDataDeEncerramento.Value20260322]: "2026 03 22",
	[ZapsignDataDeEncerramento.Value20260421]: "2026 04 21",
};

export const ZAPSIGN_NOMEDOPLANO_LABELS: Record<ZapsignNomeDoPlano, string> = {
	[ZapsignNomeDoPlano.ApiGrowMensal]: "API Grow (mensal)",
	[ZapsignNomeDoPlano.Equipe200Mensal]: "Equipe 200 (mensal)",
};

export const ZAPSIGN_PERIODO_LABELS: Record<ZapsignPeriodo, string> = {
	[ZapsignPeriodo.Monthly]: "Monthly",
};

export const ZAPSIGN_STATUS_LABELS: Record<ZapsignStatus, string> = {
	[ZapsignStatus.Paid]: "Paid",
};

export enum TemplatesXOrdensDeServicoFkTemplateOs1 {
	Value1 = "1",
	Value12 = "12",
	Value13 = "13",
	Value17 = "17",
	Value18 = "18",
	Value19 = "19",
	Value2 = "2",
	Value21 = "21",
	Value22 = "22",
	Value23 = "23",
	Value24 = "24",
	Value25 = "25",
	Value6 = "6",
	Value7 = "7",
	Value9 = "9",
}

export interface TemplatesXOrdensDeServico {
	f_fk_template_os_1: TemplatesXOrdensDeServicoFkTemplateOs1;
	f_fk_template_os_2: number;
}

export type TemplatesXOrdensDeServicoRelations = Record<string, never>;

export type TemplatesXOrdensDeServicoRelationKey =
	keyof TemplatesXOrdensDeServicoRelations;

export const TEMPLATESXORDENSDESERVICO_FKTEMPLATEOS1_LABELS: Record<
	TemplatesXOrdensDeServicoFkTemplateOs1,
	string
> = {
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value1]: "Ativo",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value12]: "Código 12",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value13]: "Código 13",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value17]: "Código 17",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value18]: "Código 18",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value19]: "Código 19",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value2]: "Código 2",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value21]: "Código 21",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value22]: "Código 22",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value23]: "Código 23",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value24]: "Código 24",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value25]: "Código 25",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value6]: "Código 6",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value7]: "Código 7",
	[TemplatesXOrdensDeServicoFkTemplateOs1.Value9]: "Código 9",
};

export interface TipoXTemplates {
	f_fk_tipo_template_1: number;
	f_fk_tipo_template_2: number;
}

export type TipoXTemplatesRelations = Record<string, never>;

export type TipoXTemplatesRelationKey = keyof TipoXTemplatesRelations;

export enum VendedorCuponsFkVendedorCupom2 {
	Value12 = "12",
	Value20 = "20",
	Value27 = "27",
	Value30 = "30",
	Value31 = "31",
	Value32 = "32",
	Value34 = "34",
	Value35 = "35",
	Value36 = "36",
	Value37 = "37",
	Value38 = "38",
	Value39 = "39",
	Value40 = "40",
	Value42 = "42",
	Value43 = "43",
	Value51 = "51",
}

export interface VendedorCupons {
	f_fk_vendedor_cupom_1: number;
	f_fk_vendedor_cupom_2: VendedorCuponsFkVendedorCupom2;
}

export type VendedorCuponsRelations = Record<string, never>;

export type VendedorCuponsRelationKey = keyof VendedorCuponsRelations;

export const VENDEDORCUPONS_FKVENDEDORCUPOM2_LABELS: Record<
	VendedorCuponsFkVendedorCupom2,
	string
> = {
	[VendedorCuponsFkVendedorCupom2.Value12]: "Código 12",
	[VendedorCuponsFkVendedorCupom2.Value20]: "Código 20",
	[VendedorCuponsFkVendedorCupom2.Value27]: "Código 27",
	[VendedorCuponsFkVendedorCupom2.Value30]: "Código 30",
	[VendedorCuponsFkVendedorCupom2.Value31]: "Código 31",
	[VendedorCuponsFkVendedorCupom2.Value32]: "Código 32",
	[VendedorCuponsFkVendedorCupom2.Value34]: "Código 34",
	[VendedorCuponsFkVendedorCupom2.Value35]: "Código 35",
	[VendedorCuponsFkVendedorCupom2.Value36]: "Código 36",
	[VendedorCuponsFkVendedorCupom2.Value37]: "Código 37",
	[VendedorCuponsFkVendedorCupom2.Value38]: "Código 38",
	[VendedorCuponsFkVendedorCupom2.Value39]: "Código 39",
	[VendedorCuponsFkVendedorCupom2.Value40]: "Código 40",
	[VendedorCuponsFkVendedorCupom2.Value42]: "Código 42",
	[VendedorCuponsFkVendedorCupom2.Value43]: "Código 43",
	[VendedorCuponsFkVendedorCupom2.Value51]: "Código 51",
};

export interface VwMermaidPorServico {
	mermaid_text: string;
	servico_id: number;
}

export type VwMermaidPorServicoRelations = Record<string, never>;

export type VwMermaidPorServicoRelationKey = keyof VwMermaidPorServicoRelations;
