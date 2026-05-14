/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOSUOSSCHAMADO_FIELD_LABELS = {
	abertura: "abertura",
	agendamento: "agendamento",
	apartamento: "apartamento",
	ativo_tecnico: "ativo_tecnico",
	bairro: "bairro",
	bloco: "bloco",
	considerar_sla: "considerar_sla",
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_abertura_fin: "data_abertura_fin",
	data_abertura_ini: "data_abertura_ini",
	data_abertura_periodo: "data_abertura_periodo",
	data_agenda_fin: "data_agenda_fin",
	data_agenda_final_fin: "data_agenda_final_fin",
	data_agenda_final_ini: "data_agenda_final_ini",
	data_agenda_ini: "data_agenda_ini",
	data_agenda_periodo: "data_agenda_periodo",
	data_agendamento_periodo: "data_agendamento_periodo",
	data_analise_periodo: "data_analise_periodo",
	data_assumido_periodo: "data_assumido_periodo",
	data_encaminhado_periodo: "data_encaminhado_periodo",
	data_execucao_periodo: "data_execucao_periodo",
	data_fechamento_fin: "data_fechamento_fin",
	data_fechamento_ini: "data_fechamento_ini",
	data_fechamento_periodo: "data_fechamento_periodo",
	data_final_fin: "data_final_fin",
	data_final_ini: "data_final_ini",
	data_final_periodo: "data_final_periodo",
	data_hora_analise_fin: "data_hora_analise_fin",
	data_hora_analise_ini: "data_hora_analise_ini",
	data_hora_assumido_fin: "data_hora_assumido_fin",
	data_hora_assumido_ini: "data_hora_assumido_ini",
	data_hora_encaminhado_fin: "data_hora_encaminhado_fin",
	data_hora_encaminhado_ini: "data_hora_encaminhado_ini",
	data_hora_execucao_fin: "data_hora_execucao_fin",
	data_hora_execucao_ini: "data_hora_execucao_ini",
	data_inicio_fin: "data_inicio_fin",
	data_inicio_ini: "data_inicio_ini",
	data_inicio_periodo: "data_inicio_periodo",
	data_prazo_limite_fin: "data_prazo_limite_fin",
	data_prazo_limite_ini: "data_prazo_limite_ini",
	data_prazo_limite_periodo: "data_prazo_limite_periodo",
	data_prev_final_fin: "data_prev_final_fin",
	data_prev_final_ini: "data_prev_final_ini",
	data_reabertura_fin: "data_reabertura_fin",
	data_reabertura_ini: "data_reabertura_ini",
	data_reabertura_periodo: "data_reabertura_periodo",
	data_reagendamento_periodo: "data_reagendamento_periodo",
	data_reagendar_fin: "data_reagendar_fin",
	data_reagendar_ini: "data_reagendar_ini",
	data_reservada_fin: "data_reservada_fin",
	data_reservada_ini: "data_reservada_ini",
	data_reservada_periodo: "data_reservada_periodo",
	data_ultima_impres: "data_ultima_impres",
	endereco: "endereco",
	gera_comissao: "gera_comissao",
	id: "id",
	id_assunto: "id_assunto",
	id_cidade: "id_cidade",
	id_cliente: "id_cliente",
	id_cobranca: "id_cobranca",
	id_condominio: "id_condominio",
	id_conta_decimo: "id_conta_decimo",
	id_contrato_kit: "id_contrato_kit",
	id_diagnostico_especifico: "id_diagnostico_especifico",
	id_equipe: "id_equipe",
	id_estrutura: "id_estrutura",
	id_filial: "id_filial",
	id_login: "id_login",
	id_oss_chamado: "id_oss_chamado",
	id_su_diagnostico: "id_su_diagnostico",
	id_tecnico: "id_tecnico",
	id_ticket: "id_ticket",
	id_usuario_reabertura: "id_usuario_reabertura",
	id_wfl_param_os: "id_wfl_param_os",
	id_wfl_tarefa: "id_wfl_tarefa",
	impresso: "impresso",
	impresso_por: "impresso_por",
	nome: "nome",
	previsao_finalizacao_periodo: "previsao_finalizacao_periodo",
	protocolo: "protocolo",
	qtde_recorrencia: "qtde_recorrencia",
	relatorio: "relatorio",
	setor: "setor",
	tipo_data_abertura: "tipo_data_abertura",
	tipo_data_agenda: "tipo_data_agenda",
	tipo_data_agendamento: "tipo_data_agendamento",
	tipo_data_analise: "tipo_data_analise",
	tipo_data_assumido: "tipo_data_assumido",
	tipo_data_encaminhado: "tipo_data_encaminhado",
	tipo_data_execucao: "tipo_data_execucao",
	tipo_data_fechamento: "tipo_data_fechamento",
	tipo_data_final: "tipo_data_final",
	tipo_data_inicio: "tipo_data_inicio",
	tipo_data_prazo_limite: "tipo_data_prazo_limite",
	tipo_data_prev_final: "tipo_data_prev_final",
	tipo_data_reabertura: "tipo_data_reabertura",
	tipo_data_reag: "tipo_data_reag",
	tipo_data_reservada: "tipo_data_reservada",
} as const;

export const RELATORIOSUOSSCHAMADO_ABERTURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUOSSCHAMADO_AGENDAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUOSSCHAMADO_ATIVOTECNICO_LABELS = {
	S: "S",
	N: "N",
	A: "A",
} as const;

export const RELATORIOSUOSSCHAMADO_CONSIDERARSLA_LABELS = {
	AG: "AG",
	AB: "AB",
	A: "A",
} as const;

export const RELATORIOSUOSSCHAMADO_GERACOMISSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUOSSCHAMADO_IMPRESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAABERTURA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAAGENDA_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAAGENDAMENTO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAANALISE_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAASSUMIDO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAENCAMINHADO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAEXECUCAO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAFECHAMENTO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAFINAL_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAINICIO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAPRAZOLIMITE_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAPREVFINAL_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAREABERTURA_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATAREAG_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOSUOSSCHAMADO_TIPODATARESERVADA_LABELS = {
	P: "P",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_su_oss_chamadoAberturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "abertura: valores válidos são [S, N]" }),
});

export const relatorio_su_oss_chamadoAgendamentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "agendamento: valores válidos são [S, N]" }),
});

export const relatorio_su_oss_chamadoAtivoTecnicoSchema = z.enum(
	["S", "N", "A"],
	{
		error: () => ({ message: "ativo_tecnico: valores válidos são [S, N, A]" }),
	},
);

export const relatorio_su_oss_chamadoConsiderarSlaSchema = z.enum(
	["AG", "AB", "A"],
	{
		error: () => ({
			message: "considerar_sla: valores válidos são [AG, AB, A]",
		}),
	},
);

export const relatorio_su_oss_chamadoGeraComissaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_comissao: valores válidos são [S, N]" }),
});

export const relatorio_su_oss_chamadoImpressoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "impresso: valores válidos são [S, N]" }),
});

export const relatorio_su_oss_chamadoTipoDataAberturaSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_abertura: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataAgendaSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_agenda: valores válidos são [P, D]" }),
});

export const relatorio_su_oss_chamadoTipoDataAgendamentoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_agendamento: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataAnaliseSchema = z.enum(
	["P", "D"],
	{
		error: () => ({ message: "tipo_data_analise: valores válidos são [P, D]" }),
	},
);

export const relatorio_su_oss_chamadoTipoDataAssumidoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_assumido: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataEncaminhadoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_encaminhado: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataExecucaoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_execucao: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataFechamentoSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_fechamento: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataFinalSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_final: valores válidos são [P, D]" }),
});

export const relatorio_su_oss_chamadoTipoDataInicioSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_inicio: valores válidos são [P, D]" }),
});

export const relatorio_su_oss_chamadoTipoDataPrazoLimiteSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_prazo_limite: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataPrevFinalSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_prev_final: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataReaberturaSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_reabertura: valores válidos são [P, D]",
		}),
	},
);

export const relatorio_su_oss_chamadoTipoDataReagSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_reag: valores válidos são [P, D]" }),
});

export const relatorio_su_oss_chamadoTipoDataReservadaSchema = z.enum(
	["P", "D"],
	{
		error: () => ({
			message: "tipo_data_reservada: valores válidos são [P, D]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioSuOssChamadoAbertura = z.infer<
	typeof relatorio_su_oss_chamadoAberturaSchema
>;

export type RelatorioSuOssChamadoAgendamento = z.infer<
	typeof relatorio_su_oss_chamadoAgendamentoSchema
>;

export type RelatorioSuOssChamadoAtivoTecnico = z.infer<
	typeof relatorio_su_oss_chamadoAtivoTecnicoSchema
>;

export type RelatorioSuOssChamadoConsiderarSla = z.infer<
	typeof relatorio_su_oss_chamadoConsiderarSlaSchema
>;

export type RelatorioSuOssChamadoGeraComissao = z.infer<
	typeof relatorio_su_oss_chamadoGeraComissaoSchema
>;

export type RelatorioSuOssChamadoImpresso = z.infer<
	typeof relatorio_su_oss_chamadoImpressoSchema
>;

export type RelatorioSuOssChamadoTipoDataAbertura = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAberturaSchema
>;

export type RelatorioSuOssChamadoTipoDataAgenda = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAgendaSchema
>;

export type RelatorioSuOssChamadoTipoDataAgendamento = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAgendamentoSchema
>;

export type RelatorioSuOssChamadoTipoDataAnalise = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAnaliseSchema
>;

export type RelatorioSuOssChamadoTipoDataAssumido = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataAssumidoSchema
>;

export type RelatorioSuOssChamadoTipoDataEncaminhado = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataEncaminhadoSchema
>;

export type RelatorioSuOssChamadoTipoDataExecucao = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataExecucaoSchema
>;

export type RelatorioSuOssChamadoTipoDataFechamento = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataFechamentoSchema
>;

export type RelatorioSuOssChamadoTipoDataFinal = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataFinalSchema
>;

export type RelatorioSuOssChamadoTipoDataInicio = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataInicioSchema
>;

export type RelatorioSuOssChamadoTipoDataPrazoLimite = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataPrazoLimiteSchema
>;

export type RelatorioSuOssChamadoTipoDataPrevFinal = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataPrevFinalSchema
>;

export type RelatorioSuOssChamadoTipoDataReabertura = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataReaberturaSchema
>;

export type RelatorioSuOssChamadoTipoDataReag = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataReagSchema
>;

export type RelatorioSuOssChamadoTipoDataReservada = z.infer<
	typeof relatorio_su_oss_chamadoTipoDataReservadaSchema
>;
