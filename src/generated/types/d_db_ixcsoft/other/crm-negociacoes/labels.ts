/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMNEGOCIACOES_FIELD_LABELS = {
	acesso_automatico_central: "acesso_automatico_central",
	alerta: "alerta",
	apartamento_negociacao: "apartamento_negociacao",
	assinatura_digital: "assinatura_digital",
	autenticacao: "autenticacao",
	auto_viabilidade: "auto_viabilidade",
	bairro_negociacao: "bairro_negociacao",
	bloco_negociacao: "bloco_negociacao",
	cep_negociacao: "cep_negociacao",
	cidade_negociacao: "cidade_negociacao",
	cif_negociacao: "cif_negociacao",
	complemento_negociacao: "complemento_negociacao",
	considera_endereco_cliente: "considera_endereco_cliente",
	criado_por: "criado_por",
	data_fechamento: "data_fechamento",
	data_inicio: "data_inicio",
	data_pausado_ate: "data_pausado_ate",
	data_pausado_em: "data_pausado_em",
	data_perdemos: "data_perdemos",
	data_reservada: "data_reservada",
	data_vencemos: "data_vencemos",
	descricao: "descricao",
	endereco_negociacao: "endereco_negociacao",
	fidelidade: "fidelidade",
	hora_inicio: "hora_inicio",
	hotsite_acesso: "hotsite_acesso",
	hotsite_email: "hotsite_email",
	hotsite_senha: "hotsite_senha",
	id: "id",
	id_assunto: "id_assunto",
	id_assunto_falha: "id_assunto_falha",
	id_caixa_ftth: "id_caixa_ftth",
	id_campanha: "id_campanha",
	id_canal_origem: "id_canal_origem",
	id_cliente: "id_cliente",
	id_concorrente: "id_concorrente",
	id_condicoes_pagamento: "id_condicoes_pagamento",
	id_condominio_negociacao: "id_condominio_negociacao",
	id_contato: "id_contato",
	id_contrato: "id_contrato",
	id_contrato_prospect: "id_contrato_prospect",
	id_estagio: "id_estagio",
	id_estagio_anterior: "id_estagio_anterior",
	id_filial: "id_filial",
	id_funil: "id_funil",
	id_grupo: "id_grupo",
	id_integracao: "id_integracao",
	id_login: "id_login",
	id_modelo_contrato: "id_modelo_contrato",
	id_oss_chamado: "id_oss_chamado",
	id_perfil: "id_perfil",
	id_plano: "id_plano",
	id_plano_negocio: "id_plano_negocio",
	id_responsavel: "id_responsavel",
	id_responsavel_atendimento: "id_responsavel_atendimento",
	id_responsavel_atendimento_falha: "id_responsavel_atendimento_falha",
	id_segmento: "id_segmento",
	id_tipo_agendamento: "id_tipo_agendamento",
	id_tipo_cobranca: "id_tipo_cobranca",
	id_vendedor_ativ: "id_vendedor_ativ",
	id_wfl_processo: "id_wfl_processo",
	id_wfl_processo_falha: "id_wfl_processo_falha",
	inserir_acesso: "inserir_acesso",
	inserir_atendimento: "inserir_atendimento",
	inserir_contrato: "inserir_contrato",
	inserir_tarefa: "inserir_tarefa",
	latitude_negociacao: "latitude_negociacao",
	login: "login",
	longitude_negociacao: "longitude_negociacao",
	melhor_horario_reserva: "melhor_horario_reserva",
	mensagem_falha: "mensagem_falha",
	menssagem: "menssagem",
	moradia_negociacao: "moradia_negociacao",
	numero_negociacao: "numero_negociacao",
	obs: "obs",
	operador_neutro: "operador_neutro",
	ordem_kanban: "ordem_kanban",
	origem: "origem",
	pacote_integracao: "pacote_integracao",
	pipe_id: "pipe_id",
	porcentagem_ativacao_empresa: "porcentagem_ativacao_empresa",
	porcentagem_ativacao_parceiro: "porcentagem_ativacao_parceiro",
	porta_ftth: "porta_ftth",
	previsao_fechamento: "previsao_fechamento",
	prioridade: "prioridade",
	prioridade_falha: "prioridade_falha",
	referencia_negociacao: "referencia_negociacao",
	senha: "senha",
	service_type: "service_type",
	status: "status",
	substatus: "substatus",
	tipo_cliente: "tipo_cliente",
	tipo_conexao_mapa: "tipo_conexao_mapa",
	tipo_localidade_negociacao: "tipo_localidade_negociacao",
	uf_negociacao: "uf_negociacao",
	ultima_atualizacao: "ultima_atualizacao",
	valor_ativacao_empresa: "valor_ativacao_empresa",
	valor_ativacao_parceiro: "valor_ativacao_parceiro",
	valor_fixo: "valor_fixo",
	valor_mensal: "valor_mensal",
} as const;

export const CRMNEGOCIACOES_ACESSOAUTOMATICOCENTRAL_LABELS = {
	P: "P",
	N: "N",
	S: "S",
} as const;

export const CRMNEGOCIACOES_ALERTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMNEGOCIACOES_ASSINATURADIGITAL_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CRMNEGOCIACOES_AUTENTICACAO_LABELS = {
	L: "L",
	H: "H",
	M: "M",
	V: "V",
	D: "D",
	I: "I",
	E: "E",
} as const;

export const CRMNEGOCIACOES_AUTOVIABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMNEGOCIACOES_CONSIDERAENDERECOCLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMNEGOCIACOES_INSERIRACESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMNEGOCIACOES_INSERIRATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMNEGOCIACOES_INSERIRCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMNEGOCIACOES_INSERIRTAREFA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMNEGOCIACOES_MELHORHORARIORESERVA_LABELS = {
	M: "M",
	T: "T",
	N: "N",
	Q: "Q",
} as const;

export const CRMNEGOCIACOES_MORADIANEGOCIACAO_LABELS = {
	P: "P",
	A: "A",
} as const;

export const CRMNEGOCIACOES_ORIGEM_LABELS = {
	outros: "outros",
	kanban: "kanban",
} as const;

export const CRMNEGOCIACOES_PRIORIDADE_LABELS = {
	B: "B",
	M: "M",
	A: "A",
	C: "C",
} as const;

export const CRMNEGOCIACOES_PRIORIDADEFALHA_LABELS = {
	B: "B",
	M: "M",
	A: "A",
	C: "C",
} as const;

export const CRMNEGOCIACOES_STATUS_LABELS = {
	N: "N",
	D: "D",
	V: "V",
} as const;

export const CRMNEGOCIACOES_TIPOCONEXAOMAPA_LABELS = {
	58: "58",
	24: "24",
	F: "F",
	L: "L",
	A: "A",
} as const;

export const CRMNEGOCIACOES_TIPOLOCALIDADENEGOCIACAO_LABELS = {
	R: "R",
	U: "U",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_negociacoesAcessoAutomaticoCentralSchema = z.enum(
	["P", "N", "S"],
	{
		error: () => ({
			message: "acesso_automatico_central: valores válidos são [P, N, S]",
		}),
	},
);

export const crm_negociacoesAlertaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "alerta: valores válidos são [S, N]" }),
});

export const crm_negociacoesAssinaturaDigitalSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "assinatura_digital: valores válidos são [S, N, P]",
	}),
});

export const crm_negociacoesAutenticacaoSchema = z.enum(
	["L", "H", "M", "V", "D", "I", "E"],
	{
		error: () => ({
			message: "autenticacao: valores válidos são [L, H, M, V, D, I, E]",
		}),
	},
);

export const crm_negociacoesAutoViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "auto_viabilidade: valores válidos são [S, N]" }),
});

export const crm_negociacoesConsideraEnderecoClienteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "considera_endereco_cliente: valores válidos são [S, N]",
		}),
	},
);

export const crm_negociacoesInserirAcessoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inserir_acesso: valores válidos são [S, N]" }),
});

export const crm_negociacoesInserirAtendimentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inserir_atendimento: valores válidos são [S, N]" }),
});

export const crm_negociacoesInserirContratoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inserir_contrato: valores válidos são [S, N]" }),
});

export const crm_negociacoesInserirTarefaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inserir_tarefa: valores válidos são [S, N]" }),
});

export const crm_negociacoesMelhorHorarioReservaSchema = z.enum(
	["M", "T", "N", "Q"],
	{
		error: () => ({
			message: "melhor_horario_reserva: valores válidos são [M, T, N, Q]",
		}),
	},
);

export const crm_negociacoesMoradiaNegociacaoSchema = z.enum(["P", "A"], {
	error: () => ({ message: "moradia_negociacao: valores válidos são [P, A]" }),
});

export const crm_negociacoesOrigemSchema = z.enum(["outros", "kanban"], {
	error: () => ({ message: "origem: valores válidos são [outros, kanban]" }),
});

export const crm_negociacoesPrioridadeSchema = z.enum(["B", "M", "A", "C"], {
	error: () => ({ message: "prioridade: valores válidos são [B, M, A, C]" }),
});

export const crm_negociacoesPrioridadeFalhaSchema = z.enum(
	["B", "M", "A", "C"],
	{
		error: () => ({
			message: "prioridade_falha: valores válidos são [B, M, A, C]",
		}),
	},
);

export const crm_negociacoesStatusSchema = z.enum(["N", "D", "V"], {
	error: () => ({ message: "status: valores válidos são [N, D, V]" }),
});

export const crm_negociacoesTipoConexaoMapaSchema = z.enum(
	["58", "24", "F", "L", "A"],
	{
		error: () => ({
			message: "tipo_conexao_mapa: valores válidos são [58, 24, F, L, A]",
		}),
	},
);

export const crm_negociacoesTipoLocalidadeNegociacaoSchema = z.enum(
	["R", "U"],
	{
		error: () => ({
			message: "tipo_localidade_negociacao: valores válidos são [R, U]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmNegociacoesAcessoAutomaticoCentral = z.infer<
	typeof crm_negociacoesAcessoAutomaticoCentralSchema
>;

export type CrmNegociacoesAlerta = z.infer<typeof crm_negociacoesAlertaSchema>;

export type CrmNegociacoesAssinaturaDigital = z.infer<
	typeof crm_negociacoesAssinaturaDigitalSchema
>;

export type CrmNegociacoesAutenticacao = z.infer<
	typeof crm_negociacoesAutenticacaoSchema
>;

export type CrmNegociacoesAutoViabilidade = z.infer<
	typeof crm_negociacoesAutoViabilidadeSchema
>;

export type CrmNegociacoesConsideraEnderecoCliente = z.infer<
	typeof crm_negociacoesConsideraEnderecoClienteSchema
>;

export type CrmNegociacoesInserirAcesso = z.infer<
	typeof crm_negociacoesInserirAcessoSchema
>;

export type CrmNegociacoesInserirAtendimento = z.infer<
	typeof crm_negociacoesInserirAtendimentoSchema
>;

export type CrmNegociacoesInserirContrato = z.infer<
	typeof crm_negociacoesInserirContratoSchema
>;

export type CrmNegociacoesInserirTarefa = z.infer<
	typeof crm_negociacoesInserirTarefaSchema
>;

export type CrmNegociacoesMelhorHorarioReserva = z.infer<
	typeof crm_negociacoesMelhorHorarioReservaSchema
>;

export type CrmNegociacoesMoradiaNegociacao = z.infer<
	typeof crm_negociacoesMoradiaNegociacaoSchema
>;

export type CrmNegociacoesOrigem = z.infer<typeof crm_negociacoesOrigemSchema>;

export type CrmNegociacoesPrioridade = z.infer<
	typeof crm_negociacoesPrioridadeSchema
>;

export type CrmNegociacoesPrioridadeFalha = z.infer<
	typeof crm_negociacoesPrioridadeFalhaSchema
>;

export type CrmNegociacoesStatus = z.infer<typeof crm_negociacoesStatusSchema>;

export type CrmNegociacoesTipoConexaoMapa = z.infer<
	typeof crm_negociacoesTipoConexaoMapaSchema
>;

export type CrmNegociacoesTipoLocalidadeNegociacao = z.infer<
	typeof crm_negociacoesTipoLocalidadeNegociacaoSchema
>;
