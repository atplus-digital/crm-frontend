/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const templates_atendimento_n1AcessaPelaRedeDaAtplusSchema = z.enum(
	["Sim", "Não"],
	{
		error: () => ({
			message: "acessa_pela_rede_da_atplus: valores válidos são [Sim, Nao]",
		}),
	},
);

export const templates_atendimento_n1AlteracoesSchema = z.enum(
	["Somente o nome", "Somente a senha", "Nome e senha"],
	{
		error: () => ({
			message:
				"alteracoes: valores válidos são [Somente o nome, Somente a senha, Nome e senha]",
		}),
	},
);

export const templates_atendimento_n1AplicativoSchema = z.enum(
	[
		"Deezer",
		"Watch BR",
		"Paramount+",
		"HBO Max",
		"Via Livros",
		"Olé TV",
		"Todos os aplicativos",
	],
	{
		error: () => ({
			message:
				"aplicativo: valores válidos são [Deezer, Watch BR, Paramount+, HBO Max, Via Livros, Olé TV, Todos os aplicativos]",
		}),
	},
);

export const templates_atendimento_n1AplicativoEspecificoSchema = z.enum(
	["Sim", "Não"],
	{
		error: () => ({
			message: "aplicativo_especifico: valores válidos são [Sim, Não]",
		}),
	},
);

export const templates_atendimento_n1ApnPreenchidaSchema = z.enum(
	["Sim", "Não", "Não soube dizer"],
	{
		error: () => ({
			message:
				"apn_preenchida: valores válidos são [Sim, Não, Não soube dizer]",
		}),
	},
);

export const templates_atendimento_n1FabricanteSchema = z.enum(
	["Samsung", "Apple", "Motorola", "Xiomi", "Asus", "Outro"],
	{
		error: () => ({
			message:
				"fabricante: valores válidos são [Samsung, Apple, Motorola, Xiomi, Asus, Outro]",
		}),
	},
);

export const templates_atendimento_n1LosSchema = z.enum(["Sim", "Não"], {
	error: () => ({ message: "los: valores válidos são [Sim, Não]" }),
});

export const templates_atendimento_n1QualApnConfiguradaSchema = z.enum(
	["eai.br", "m2m.arqia.br", "internet.br"],
	{
		error: () => ({
			message:
				"qual_apn_configurada: valores válidos são [eai.br, m2m.arqia.br, internet.br]",
		}),
	},
);

export const templates_atendimento_n1QuantidadeDeDispositivosSchema = z.enum(
	["Um dispositivo", "Todos os dispositivos"],
	{
		error: () => ({
			message:
				"quantidade_de_dispositivos: valores válidos são [Um dispositivo, Todos os dispositivos]",
		}),
	},
);

export const templates_atendimento_n1StatusDoCircuitoSchema = z.enum(
	["Online", "Offline"],
	{
		error: () => ({
			message: "status_do_circuito: valores válidos são [Online, Offline]",
		}),
	},
);

export const templates_atendimento_n1TelefoniaTipoDeProblemaSchema = z.enum(
	[
		"Não recebe ligações",
		"Não efetua ligações",
		"Quedas nas ligações",
		"Chiado / Voz robótica",
		"Mudo / Sem tom",
	],
	{
		error: () => ({
			message:
				"telefonia_tipo_de_problema: valores válidos são [Não recebe ligações, Não efetua ligações, Quedas nas ligações, Chiado / Voz robótica, Mudo / Sem tom]",
		}),
	},
);

export const templates_atendimento_n1TipoDeAtendimentoSchema = z.enum(
	[
		"Lentidão",
		"Sem conexão",
		"Site específico",
		"Telefonia",
		"Abertura de portas",
		"Troca de nome/senha",
		"SVA",
		"MVNO",
		"Outro",
	],
	{
		error: () => ({
			message:
				"tipo_de_atendimento: valores válidos são [Lentidão/Quedas, Sem conexão, Site específico, Telefonia, Abertura de portas, Troca de nome/senha, SVA, MVNO, Outro]",
		}),
	},
);

export const templates_atendimento_n1TipoDeConexaoDoDispositivoSchema = z.enum(
	["Wi-Fi", "Cabo de rede"],
	{
		error: () => ({
			message:
				"tipo_de_conexao_do_dispositivo: valores válidos são [Wi-Fi, Cabo de rede]",
		}),
	},
);

export const templates_atendimento_n1TipoDeProblemaMvnoSchema = z.enum(
	["Não recebe ligações", "Não efetua ligações", "Dados móveis não funcionam"],
	{
		error: () => ({
			message:
				"tipo_de_problema_mvno: valores válidos são [Não recebe ligações, Não efetua ligações, Dados móveis não funcionam]",
		}),
	},
);

export const templates_atendimento_n1TorreRedeSchema = z.enum(
	["Com sinal", "Sem sinal"],
	{
		error: () => ({
			message: "torre_rede: valores válidos são [Com sinal, Sem sinal]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TemplatesAtendimentoN1AcessaPelaRedeDaAtplus = z.infer<
	typeof templates_atendimento_n1AcessaPelaRedeDaAtplusSchema
>;

export type TemplatesAtendimentoN1Alteracoes = z.infer<
	typeof templates_atendimento_n1AlteracoesSchema
>;

export type TemplatesAtendimentoN1Aplicativo = z.infer<
	typeof templates_atendimento_n1AplicativoSchema
>;

export type TemplatesAtendimentoN1AplicativoEspecifico = z.infer<
	typeof templates_atendimento_n1AplicativoEspecificoSchema
>;

export type TemplatesAtendimentoN1ApnPreenchida = z.infer<
	typeof templates_atendimento_n1ApnPreenchidaSchema
>;

export type TemplatesAtendimentoN1Fabricante = z.infer<
	typeof templates_atendimento_n1FabricanteSchema
>;

export type TemplatesAtendimentoN1Los = z.infer<
	typeof templates_atendimento_n1LosSchema
>;

export type TemplatesAtendimentoN1QualApnConfigurada = z.infer<
	typeof templates_atendimento_n1QualApnConfiguradaSchema
>;

export type TemplatesAtendimentoN1QuantidadeDeDispositivos = z.infer<
	typeof templates_atendimento_n1QuantidadeDeDispositivosSchema
>;

export type TemplatesAtendimentoN1StatusDoCircuito = z.infer<
	typeof templates_atendimento_n1StatusDoCircuitoSchema
>;

export type TemplatesAtendimentoN1TelefoniaTipoDeProblema = z.infer<
	typeof templates_atendimento_n1TelefoniaTipoDeProblemaSchema
>;

export type TemplatesAtendimentoN1TipoDeAtendimento = z.infer<
	typeof templates_atendimento_n1TipoDeAtendimentoSchema
>;

export type TemplatesAtendimentoN1TipoDeConexaoDoDispositivo = z.infer<
	typeof templates_atendimento_n1TipoDeConexaoDoDispositivoSchema
>;

export type TemplatesAtendimentoN1TipoDeProblemaMvno = z.infer<
	typeof templates_atendimento_n1TipoDeProblemaMvnoSchema
>;

export type TemplatesAtendimentoN1TorreRede = z.infer<
	typeof templates_atendimento_n1TorreRedeSchema
>;
