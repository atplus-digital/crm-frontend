/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
