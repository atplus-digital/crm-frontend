/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUOSSCHAMADO_FIELD_LABELS = {
	apartamento: "apartamento",
	bairro: "bairro",
	bloco: "bloco",
	complemento: "complemento",
	data_abertura: "data_abertura",
	data_agenda: "data_agenda",
	data_agenda_final: "data_agenda_final",
	data_fechamento: "data_fechamento",
	data_final: "data_final",
	data_hora_analise: "data_hora_analise",
	data_hora_assumido: "data_hora_assumido",
	data_hora_encaminhado: "data_hora_encaminhado",
	data_hora_execucao: "data_hora_execucao",
	data_inicio: "data_inicio",
	data_prazo_limite: "data_prazo_limite",
	data_prev_final: "data_prev_final",
	data_reabertura: "data_reabertura",
	data_reagendar: "data_reagendar",
	data_reservada: "data_reservada",
	endereco: "endereco",
	f_3w8ih0kmms9: "NC Contratos",
	f_6ar6ff1gv59: "NC Técnico",
	f_diagnosticos: "NC Diagnósticos",
	f_nc_atendimentos: "NC Atendimentos",
	f_pzurkpjz7ub: "NC Assuntos",
	f_tarefa: "NC Tarefa",
	f_vpc23waj8bf: "NC Clientes",
	f_wnstu9yvv3j: "NC Setor",
	gera_comissao: "gera_comissao",
	habilita_assinatura_cliente: "habilita_assinatura_cliente",
	id: "id",
	id_assunto: "id_assunto",
	id_atendente: "id_atendente",
	id_cidade: "id_cidade",
	id_circuito: "id_circuito",
	id_cliente: "id_cliente",
	id_cobranca: "id_cobranca",
	id_condominio: "id_condominio",
	id_contrato_kit: "id_contrato_kit",
	id_estrutura: "id_estrutura",
	id_filial: "id_filial",
	id_login: "id_login",
	id_oss_chamado: "id_oss_chamado",
	id_receber: "id_receber",
	id_resposta: "id_resposta",
	id_su_diagnostico: "id_su_diagnostico",
	id_tecnico: "id_tecnico",
	id_ticket: "id_ticket",
	id_usuario_reabertura: "id_usuario_reabertura",
	id_wfl_param_os: "id_wfl_param_os",
	id_wfl_tarefa: "id_wfl_tarefa",
	idx: "idx",
	impresso: "impresso",
	justificativa_sla_atrasado: "justificativa_sla_atrasado",
	latitude: "latitude",
	liberado: "liberado",
	longitude: "longitude",
	melhor_horario_agenda: "melhor_horario_agenda",
	mensagem: "mensagem",
	mensagem_resposta: "mensagem_resposta",
	mostrar_os_sem_funcionario: "mostrar_os_sem_funcionario",
	motivo_reabertura: "motivo_reabertura",
	notificacao_push_agrupada: "notificacao_push_agrupada",
	origem_cadastro: "origem_cadastro",
	origem_endereco: "origem_endereco",
	origem_endereco_estrutura: "origem_endereco_estrutura",
	origem_finalizacao: "origem_finalizacao",
	origem_os_aberta: "origem_os_aberta",
	preview: "preview",
	prioridade: "prioridade",
	protocolo: "protocolo",
	referencia: "referencia",
	setor: "setor",
	status: "status",
	status_assinatura: "status_assinatura",
	status_pesquisa_satisfacao: "status_pesquisa_satisfacao",
	status_sla: "status_sla",
	tipo: "tipo",
	ultima_atualizacao: "ultima_atualizacao",
	valor_outras_despesas: "valor_outras_despesas",
	valor_total: "valor_total",
	valor_total_comissao: "valor_total_comissao",
	valor_unit_comissao: "valor_unit_comissao",
} as const;

export const SUOSSCHAMADO_GERACOMISSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSCHAMADO_HABILITAASSINATURACLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSCHAMADO_IMPRESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSCHAMADO_MELHORHORARIOAGENDA_LABELS = {
	M: "M",
	T: "T",
	N: "N",
	Q: "Q",
} as const;

export const SUOSSCHAMADO_MOSTRAROSSEMFUNCIONARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSCHAMADO_NOTIFICACAOPUSHAGRUPADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSCHAMADO_ORIGEMCADASTRO_LABELS = {
	P: "P",
	SV: "SV",
	M: "M",
	CRM: "CRM",
	CC: "CC",
} as const;

export const SUOSSCHAMADO_ORIGEMENDERECO_LABELS = {
	C: "C",
	L: "L",
	CC: "CC",
	M: "M",
} as const;

export const SUOSSCHAMADO_ORIGEMENDERECOESTRUTURA_LABELS = {
	E: "E",
	M: "M",
} as const;

export const SUOSSCHAMADO_ORIGEMFINALIZACAO_LABELS = {
	SM: "SM",
	IPM: "IPM",
	IPW: "IPW",
	API: "API",
} as const;

export const SUOSSCHAMADO_ORIGEMOSABERTA_LABELS = {
	M: "M",
	P: "P",
	CRM: "CRM",
	CC: "CC",
} as const;

export const SUOSSCHAMADO_PRIORIDADE_LABELS = {
	B: "Baixa",
	N: "Normal",
	A: "Alta",
	C: "Crítica",
} as const;

export const SUOSSCHAMADO_STATUS_LABELS = {
	A: "Aberta",
	F: "Finalizada",
	AN: "Análise",
	EN: "Encaminhada",
	AS: "Assumida",
	AG: "Agendada",
	EX: "Execução",
	RAG: "Aguardando reagendamento",
	DS: "Deslocamento",
} as const;

export const SUOSSCHAMADO_STATUSASSINATURA_LABELS = {
	A: "A",
	F: "F",
} as const;

export const SUOSSCHAMADO_TIPO_LABELS = {
	C: "C",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_oss_chamadoGeraComissaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_comissao: valores válidos são [S, N]" }),
});

export const su_oss_chamadoHabilitaAssinaturaClienteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "habilita_assinatura_cliente: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_chamadoImpressoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "impresso: valores válidos são [S, N]" }),
});

export const su_oss_chamadoMelhorHorarioAgendaSchema = z.enum(
	["M", "T", "N", "Q"],
	{
		error: () => ({
			message: "melhor_horario_agenda: valores válidos são [M, T, N, Q]",
		}),
	},
);

export const su_oss_chamadoMostrarOsSemFuncionarioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_os_sem_funcionario: valores válidos são [S, N]",
	}),
});

export const su_oss_chamadoNotificacaoPushAgrupadaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "notificacao_push_agrupada: valores válidos são [S, N]",
	}),
});

export const su_oss_chamadoOrigemCadastroSchema = z.enum(
	["P", "SV", "M", "CRM", "CC"],
	{
		error: () => ({
			message: "origem_cadastro: valores válidos são [P, SV, M, CRM, CC]",
		}),
	},
);

export const su_oss_chamadoOrigemEnderecoSchema = z.enum(
	["C", "L", "CC", "M"],
	{
		error: () => ({
			message: "origem_endereco: valores válidos são [C, L, CC, M]",
		}),
	},
);

export const su_oss_chamadoOrigemEnderecoEstruturaSchema = z.enum(["E", "M"], {
	error: () => ({
		message: "origem_endereco_estrutura: valores válidos são [E, M]",
	}),
});

export const su_oss_chamadoOrigemFinalizacaoSchema = z.enum(
	["SM", "IPM", "IPW", "API"],
	{
		error: () => ({
			message: "origem_finalizacao: valores válidos são [SM, IPM, IPW, API]",
		}),
	},
);

export const su_oss_chamadoOrigemOsAbertaSchema = z.enum(
	["M", "P", "CRM", "CC"],
	{
		error: () => ({
			message: "origem_os_aberta: valores válidos são [M, P, CRM, CC]",
		}),
	},
);

export const su_oss_chamadoPrioridadeSchema = z.enum(["B", "N", "A", "C"], {
	error: () => ({
		message: "prioridade: valores válidos são [Baixa, Normal, Alta, Crítica]",
	}),
});

export const su_oss_chamadoStatusSchema = z.enum(
	["A", "F", "AN", "EN", "AS", "AG", "EX", "RAG", "DS"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Aberta, Finalizada, Análise, Encaminhada, Assumida, Agendada, Execução, Aguardando reagendamento, Deslocamento]",
		}),
	},
);

export const su_oss_chamadoStatusAssinaturaSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status_assinatura: valores válidos são [A, F]" }),
});

export const su_oss_chamadoTipoSchema = z.enum(["C", "E"], {
	error: () => ({ message: "tipo: valores válidos são [C, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuOssChamadoGeraComissao = z.infer<
	typeof su_oss_chamadoGeraComissaoSchema
>;

export type SuOssChamadoHabilitaAssinaturaCliente = z.infer<
	typeof su_oss_chamadoHabilitaAssinaturaClienteSchema
>;

export type SuOssChamadoImpresso = z.infer<typeof su_oss_chamadoImpressoSchema>;

export type SuOssChamadoMelhorHorarioAgenda = z.infer<
	typeof su_oss_chamadoMelhorHorarioAgendaSchema
>;

export type SuOssChamadoMostrarOsSemFuncionario = z.infer<
	typeof su_oss_chamadoMostrarOsSemFuncionarioSchema
>;

export type SuOssChamadoNotificacaoPushAgrupada = z.infer<
	typeof su_oss_chamadoNotificacaoPushAgrupadaSchema
>;

export type SuOssChamadoOrigemCadastro = z.infer<
	typeof su_oss_chamadoOrigemCadastroSchema
>;

export type SuOssChamadoOrigemEndereco = z.infer<
	typeof su_oss_chamadoOrigemEnderecoSchema
>;

export type SuOssChamadoOrigemEnderecoEstrutura = z.infer<
	typeof su_oss_chamadoOrigemEnderecoEstruturaSchema
>;

export type SuOssChamadoOrigemFinalizacao = z.infer<
	typeof su_oss_chamadoOrigemFinalizacaoSchema
>;

export type SuOssChamadoOrigemOsAberta = z.infer<
	typeof su_oss_chamadoOrigemOsAbertaSchema
>;

export type SuOssChamadoPrioridade = z.infer<
	typeof su_oss_chamadoPrioridadeSchema
>;

export type SuOssChamadoStatus = z.infer<typeof su_oss_chamadoStatusSchema>;

export type SuOssChamadoStatusAssinatura = z.infer<
	typeof su_oss_chamadoStatusAssinaturaSchema
>;

export type SuOssChamadoTipo = z.infer<typeof su_oss_chamadoTipoSchema>;
