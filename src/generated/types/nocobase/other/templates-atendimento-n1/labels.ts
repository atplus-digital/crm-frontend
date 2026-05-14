/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TEMPLATESATENDIMENTON1_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_acessa_pela_rede_da_atplus: "Acessa pela rede da ATPlus",
	f_alteracoes: "Alterações",
	f_aplicativo: "Aplicativos",
	f_aplicativo_especifico: "Aplicativo específico",
	f_apn_preenchida: "APN preenchida?",
	f_descricao_do_cliente: "Descrição do cliente",
	"f_e-mail": "E-mail para cadastro",
	f_endereco_do_site: "Endereço do site",
	f_fabricante: "Fabricante",
	f_fk_templates_atendimentos: "f_fk_templates_atendimentos",
	f_ip_fixo: "IP fixo",
	f_ip_interno_para_liberacao: "IP interno para liberação",
	f_login_pppoe: "Login PPPoE",
	f_los: "LOS",
	f_melhor_horario_retorno: "Melhor horário para retorno",
	f_nome: "Nome",
	f_nome_do_solicitante: "Nome do solicitante",
	f_nome_rede_wifi: "Nome da rede Wi-Fi",
	f_numero_de_A: "Número de A",
	f_numero_de_B: "Número de B",
	f_numero_para_contato: "Número para contato",
	f_portas_a_serem_liberadas: "Portas a serem liberadas",
	f_protocolo_do_atendimento: "Protocolo do atendimento",
	f_qual_aplicativo: "Qual aplicativo?",
	f_qual_apn_configurada: "Qual APN está configurada?",
	f_qual_fabricante: "Qual fabricante?",
	f_quantidade_de_dispositivos: "Quantidade de dispositivos",
	f_senha_da_rede_wifi: "Senha da rede Wi-Fi",
	f_status_do_circuito: "Status do circuito",
	f_telefonia_tipo_de_problema: "Tipo de problema",
	f_tipo_de_atendimento: "Tipo de atendimento",
	f_tipo_de_conexao_do_dispositivo: "Tipo de conexão do dispositivo",
	f_tipo_de_problema_mvno: "Tipo de problema",
	f_torre_rede: "Torre de rede",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const TEMPLATESATENDIMENTON1_ACESSAPELAREDEDAATPLUS_LABELS = {
	Sim: "Sim",
	Não: "Nao",
} as const;

export const TEMPLATESATENDIMENTON1_ALTERACOES_LABELS = {
	"Somente o nome": "Somente o nome",
	"Somente a senha": "Somente a senha",
	"Nome e senha": "Nome e senha",
} as const;

export const TEMPLATESATENDIMENTON1_APLICATIVO_LABELS = {
	Deezer: "Deezer",
	"Watch BR": "Watch BR",
	"Paramount+": "Paramount+",
	"HBO Max": "HBO Max",
	"Via Livros": "Via Livros",
	"Olé TV": "Olé TV",
	"Todos os aplicativos": "Todos os aplicativos",
} as const;

export const TEMPLATESATENDIMENTON1_APLICATIVOESPECIFICO_LABELS = {
	Sim: "Sim",
	Não: "Não",
} as const;

export const TEMPLATESATENDIMENTON1_APNPREENCHIDA_LABELS = {
	Sim: "Sim",
	Não: "Não",
	"Não soube dizer": "Não soube dizer",
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
	Não: "Não",
} as const;

export const TEMPLATESATENDIMENTON1_QUALAPNCONFIGURADA_LABELS = {
	"eai.br": "eai.br",
	"m2m.arqia.br": "m2m.arqia.br",
	"internet.br": "internet.br",
} as const;

export const TEMPLATESATENDIMENTON1_QUANTIDADEDEDISPOSITIVOS_LABELS = {
	"Um dispositivo": "Um dispositivo",
	"Todos os dispositivos": "Todos os dispositivos",
} as const;

export const TEMPLATESATENDIMENTON1_STATUSDOCIRCUITO_LABELS = {
	Online: "Online",
	Offline: "Offline",
} as const;

export const TEMPLATESATENDIMENTON1_TELEFONIATIPODEPROBLEMA_LABELS = {
	"Não recebe ligações": "Não recebe ligações",
	"Não efetua ligações": "Não efetua ligações",
	"Quedas nas ligações": "Quedas nas ligações",
	"Chiado / Voz robótica": "Chiado / Voz robótica",
	"Mudo / Sem tom": "Mudo / Sem tom",
} as const;

export const TEMPLATESATENDIMENTON1_TIPODEATENDIMENTO_LABELS = {
	Lentidão: "Lentidão/Quedas",
	"Sem conexão": "Sem conexão",
	"Site específico": "Site específico",
	Telefonia: "Telefonia",
	"Abertura de portas": "Abertura de portas",
	"Troca de nome/senha": "Troca de nome/senha",
	SVA: "SVA",
	MVNO: "MVNO",
	Outro: "Outro",
} as const;

export const TEMPLATESATENDIMENTON1_TIPODECONEXAODODISPOSITIVO_LABELS = {
	"Wi-Fi": "Wi-Fi",
	"Cabo de rede": "Cabo de rede",
} as const;

export const TEMPLATESATENDIMENTON1_TIPODEPROBLEMAMVNO_LABELS = {
	"Não recebe ligações": "Não recebe ligações",
	"Não efetua ligações": "Não efetua ligações",
	"Dados móveis não funcionam": "Dados móveis não funcionam",
} as const;

export const TEMPLATESATENDIMENTON1_TORREREDE_LABELS = {
	"Com sinal": "Com sinal",
	"Sem sinal": "Sem sinal",
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
