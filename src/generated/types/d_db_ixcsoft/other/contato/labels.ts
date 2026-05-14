/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONTATO_FIELD_LABELS = {
	alerta: "alerta",
	apartamento: "apartamento",
	ativo: "ativo",
	bairro: "bairro",
	bloco: "bloco",
	cadastro_site: "cadastro_site",
	caixa_mais_proxima: "caixa_mais_proxima",
	cep: "cep",
	cidade: "cidade",
	cnpj_cpf: "cnpj_cpf",
	complemento: "complemento",
	conversao_duplicada_marketing: "conversao_duplicada_marketing",
	data: "data",
	data_cadastro: "data_cadastro",
	data_nascimento: "data_nascimento",
	data_ult_verificacao_viab: "data_ult_verificacao_viab",
	distancia_caixa_mais_proxima: "distancia_caixa_mais_proxima",
	email: "email",
	email_atendimento: "email_atendimento",
	endereco: "endereco",
	external_id: "external_id",
	external_system: "external_system",
	facebook: "facebook",
	fone_celular: "fone_celular",
	fone_comercial: "fone_comercial",
	fone_residencial: "fone_residencial",
	fone_whatsapp: "fone_whatsapp",
	frequencia_celular_lead: "frequencia_celular_lead",
	frequencia_computador_lead: "frequencia_computador_lead",
	frequencia_console_lead: "frequencia_console_lead",
	frequencia_pessoas_lead: "frequencia_pessoas_lead",
	frequencia_smart_lead: "frequencia_smart_lead",
	id: "id",
	id_caixa_ftth: "id_caixa_ftth",
	id_campanha: "id_campanha",
	id_candidato_tipo: "id_candidato_tipo",
	id_cliente: "id_cliente",
	id_concorrente: "id_concorrente",
	id_condominio: "id_condominio",
	id_contato_tipo: "id_contato_tipo",
	id_estagio: "id_estagio",
	id_estagio_anterior: "id_estagio_anterior",
	id_filial: "id_filial",
	id_fornecedor: "id_fornecedor",
	id_perfil: "id_perfil",
	id_prospeccao: "id_prospeccao",
	id_responsavel: "id_responsavel",
	id_segmento: "id_segmento",
	id_tipo_elemento: "id_tipo_elemento",
	id_tipo_relacionamento_contato: "id_tipo_relacionamento_contato",
	id_vd_contrato: "id_vd_contrato",
	identificador: "identificador",
	identificador_ultima_conversao: "identificador_ultima_conversao",
	ids_contratos_vinculados: "ids_contratos_vinculados",
	indicado_por: "indicado_por",
	instagram: "instagram",
	latitude: "latitude",
	lead: "lead",
	lid: "lid",
	longitude: "longitude",
	moradia: "moradia",
	nome: "nome",
	numero: "numero",
	obs: "obs",
	operador_neutro: "operador_neutro",
	ordem_kanban: "ordem_kanban",
	origem_campaing: "origem_campaing",
	origem_medium: "origem_medium",
	origem_source: "origem_source",
	permissoes: "permissoes",
	pipe_id_pessoa: "pipe_id_pessoa",
	principal: "principal",
	quantidade_celular_lead: "quantidade_celular_lead",
	quantidade_computador_lead: "quantidade_computador_lead",
	quantidade_console_lead: "quantidade_console_lead",
	quantidade_pessoas_lead: "quantidade_pessoas_lead",
	quantidade_smart_lead: "quantidade_smart_lead",
	razao: "razao",
	referencia: "referencia",
	senha: "senha",
	skype: "skype",
	status_viabilidade: "status_viabilidade",
	tipo_documento_identificacao_col: "tipo_documento_identificacao_col",
	tipo_localidade: "tipo_localidade",
	tipo_pessoa: "tipo_pessoa",
	tipo_rede: "tipo_rede",
	uf: "uf",
	ultima_atualizacao: "ultima_atualizacao",
	velocidade_calculada: "velocidade_calculada",
	vincular_contrato: "vincular_contrato",
	website: "website",
} as const;

export const CONTATO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_CADASTROSITE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_EMAILATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_LEAD_LABELS = {
	N: "N",
	S: "S",
} as const;

export const CONTATO_LID_LABELS = {
	N: "N",
	S: "S",
} as const;

export const CONTATO_MORADIA_LABELS = {
	P: "P",
	A: "A",
} as const;

export const CONTATO_PRINCIPAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_STATUSVIABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_TIPODOCUMENTOIDENTIFICACAOCOL_LABELS = {
	11: "11",
	12: "12",
	13: "13",
	21: "21",
	22: "22",
	31: "31",
	41: "41",
	42: "42",
	47: "47",
	50: "50",
	91: "91",
	CI: "CI",
	RUC: "RUC",
	NUIT: "NUIT",
} as const;

export const CONTATO_TIPOLOCALIDADE_LABELS = {
	R: "R",
	U: "U",
} as const;

export const CONTATO_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	E: "E",
} as const;

export const CONTATO_TIPOREDE_LABELS = {
	P: "P",
	N: "N",
	A: "A",
} as const;

export const CONTATO_VINCULARCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const contatoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const contatoCadastroSiteSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cadastro_site: valores válidos são [S, N]" }),
});

export const contatoEmailAtendimentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "email_atendimento: valores válidos são [S, N]" }),
});

export const contatoLeadSchema = z.enum(["N", "S"], {
	error: () => ({ message: "lead: valores válidos são [N, S]" }),
});

export const contatoLidSchema = z.enum(["N", "S"], {
	error: () => ({ message: "lid: valores válidos são [N, S]" }),
});

export const contatoMoradiaSchema = z.enum(["P", "A"], {
	error: () => ({ message: "moradia: valores válidos são [P, A]" }),
});

export const contatoPrincipalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "principal: valores válidos são [S, N]" }),
});

export const contatoStatusViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status_viabilidade: valores válidos são [S, N]" }),
});

export const contatoTipoDocumentoIdentificacaoColSchema = z.enum(
	[
		"11",
		"12",
		"13",
		"21",
		"22",
		"31",
		"41",
		"42",
		"47",
		"50",
		"91",
		"CI",
		"RUC",
		"NUIT",
	],
	{
		error: () => ({
			message:
				"tipo_documento_identificacao_col: valores válidos são [11, 12, 13, 21, 22, 31, 41, 42, 47, 50, 91, CI, RUC, NUIT]",
		}),
	},
);

export const contatoTipoLocalidadeSchema = z.enum(["R", "U"], {
	error: () => ({ message: "tipo_localidade: valores válidos são [R, U]" }),
});

export const contatoTipoPessoaSchema = z.enum(["F", "J", "E"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J, E]" }),
});

export const contatoTipoRedeSchema = z.enum(["P", "N", "A"], {
	error: () => ({ message: "tipo_rede: valores válidos são [P, N, A]" }),
});

export const contatoVincularContratoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "vincular_contrato: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ContatoAtivo = z.infer<typeof contatoAtivoSchema>;

export type ContatoCadastroSite = z.infer<typeof contatoCadastroSiteSchema>;

export type ContatoEmailAtendimento = z.infer<
	typeof contatoEmailAtendimentoSchema
>;

export type ContatoLead = z.infer<typeof contatoLeadSchema>;

export type ContatoLid = z.infer<typeof contatoLidSchema>;

export type ContatoMoradia = z.infer<typeof contatoMoradiaSchema>;

export type ContatoPrincipal = z.infer<typeof contatoPrincipalSchema>;

export type ContatoStatusViabilidade = z.infer<
	typeof contatoStatusViabilidadeSchema
>;

export type ContatoTipoDocumentoIdentificacaoCol = z.infer<
	typeof contatoTipoDocumentoIdentificacaoColSchema
>;

export type ContatoTipoLocalidade = z.infer<typeof contatoTipoLocalidadeSchema>;

export type ContatoTipoPessoa = z.infer<typeof contatoTipoPessoaSchema>;

export type ContatoTipoRede = z.infer<typeof contatoTipoRedeSchema>;

export type ContatoVincularContrato = z.infer<
	typeof contatoVincularContratoSchema
>;
