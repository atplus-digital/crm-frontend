/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_TEMPLATES_ATENDIMENTO_N1_TABLE_NAME =
	"t_templates_atendimento_n1";

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
