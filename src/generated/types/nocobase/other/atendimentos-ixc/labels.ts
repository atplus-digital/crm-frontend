/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ATENDIMENTOSIXC_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_assunto: "Assunto",
	f_cliente: "Cliente",
	f_contrato: "Contrato",
	f_datafim: "Data Fim",
	f_datainicio: "Data Início",
	f_departamento: "Departamento",
	f_descricao: "Descrição",
	f_diagnosticos: "Diagnósticos",
	f_finalizaatendimento: "Finaliza Atendimento?",
	f_id_login: "ID Login",
	f_idatendimento: "ID Atendimento",
	f_idcliente: "ID Cliente",
	f_idos: "ID O.S.",
	f_prioridade: "Prioridade",
	f_processo: "Processo",
	f_responsavel: "Responsável",
	f_tarefas: "Tarefas",
	f_templates_atendimentos: "Templates Atendimento N1",
	f_usuario: "Usuário",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const ATENDIMENTOSIXC_ASSUNTO_LABELS = {
	88: "Reparo",
	89: "Serviço",
	90: "Manutenção Preventiva",
	78: "Atendimento Financeiro",
} as const;

export const ATENDIMENTOSIXC_DIAGNOSTICOS_LABELS = {
	95: "1000 - Defeito Rede interna do cliente",
	96: "1001 - Defeito no equipamento do cliente",
	97: "1002 - Defeito em outra operadora",
	99: "1004 - Falha Massiva",
	100: "1005 - Encaminhado para agendamento",
	101: "1006 - Encontrado OK",
	105: "1010 - Configuração ONT/Roteador",
	106: "1011 - SVA - Plataformas",
	107: "1012 - Outros",
	110: "1013 - Encaminhado para N2",
	111: "1014 - Reboot na ONT/Roteador",
	246: "1015 - Sem contato com o cliente",
	248: "1016 - Abertura indevida",
	147: "1017 - Encaminhado para CS",
	264: "1100 - Executado",
	265: "1101 - Pendência",
	266: "1102 - Cancelamento",
	255: "1200 - Defeito Rede interna do cliente",
	267: "1201 - Defeito no equipamento do cliente",
	268: "1202 - Defeito em outra operadora",
	269: "1204 - Falha Massiva",
	270: "1205 - Encaminhado para agendamento",
	271: "1206 - Encontrado OK",
	272: "1210 - Configuração ONT/Roteador",
	273: "1211 - SVA - Plataformas",
	274: "1212 - Outros",
} as const;

export const ATENDIMENTOSIXC_PRIORIDADE_LABELS = {
	B: "Baixa",
	N: "Normal",
	A: "Alta",
	C: "Crítica",
} as const;

export const ATENDIMENTOSIXC_PROCESSO_LABELS = {
	33: "Reparo",
	36: "Serviço",
	34: "Manutenção Preventiva",
	40: "Atendimento Financeiro",
} as const;

export const ATENDIMENTOSIXC_TAREFAS_LABELS = {
	158: "REPARO - Encaminhar O.S para Agendamento",
	159: "REPARO - Encaminhar O.S para o Customer Success",
	160: "REPARO - Escalona O.S para SN2 - Banda Larga",
	164: "REPARO - Escalona O.S para SN2 - Telefonia",
	382: "REPARO - Encaminhar O.S para Financeiro",
	412: "REPARO - Escalona O.S para SN2 - MVNO",
	305: "SERVIÇO - Encaminhar O.S para Agendamento",
	306: "SERVIÇO - Encaminhar O.S para Customer Success",
	307: "SERVIÇO - Escalona O.S para SN2 - Banda Larga",
	311: "SERVIÇO - Escalona O.S para SN2 - Telefonia",
	393: "SERVIÇO - Encaminhar O.S para Financeiro",
	316: "SERVIÇO (2) - Encaminhar O.S para Agendamento",
	317: "SERVIÇO (2) - Encaminhar O.S para Customer Success",
	320: "SERVIÇO (2) - Escalona O.S para SN2 - Banda Larga",
	321: "SERVIÇO (2) - Escalona O.S para SN2 - Telefonia",
	395: "SERVIÇO (2) - Encaminhar O.S para Financeiro",
	170: "REPARO (2) - Encaminhar O.S para Agendamento",
	171: "REPARO (2) - Encaminhar O.S para o Customer Success",
	174: "REPARO (2) - Escalona O.S para SN2 - Banda Larga",
	175: "REPARO (2) - Escalona O.S para SN2 - Telefonia",
	375: "REPARO (2) - Encaminhar O.S para Financeiro",
	414: "REPARO (2) - Escalona O.S para SN2 - MVNO",
	228: "MANUN. PREV. - Encaminhar O.S para Agendamento",
	229: "MANUN. PREV. - Encaminhar O.S para Customer Success",
	230: "MANUN. PREV. - Escalona O.S para SN2 - Banda Larga",
	234: "MANUN. PREV. - Escalona O.S para SN2 - Telefonia",
	384: "MANUN. PREV. - Encaminhar O.S para Financeiro",
	240: "MANUN. PREV. (2) - Encaminhar O.S para Agendamento",
	241: "MANUN. PREV. (2) - Encaminhar O.S para Customer Success",
	244: "MANUN. PREV. (2) - Escalona O.S para SN2 - Banda Larga",
	245: "MANUN. PREV. (2) - Escalona O.S para SN2 - Telefonia",
	386: "MANUN. PREV. (2) - Encaminhar O.S para Financeiro",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const atendimentos_ixcAssuntoSchema = z.enum(["88", "89", "90", "78"], {
	error: () => ({
		message:
			"assunto: valores válidos são [Reparo, Serviço, Manutenção Preventiva, Atendimento Financeiro]",
	}),
});

export const atendimentos_ixcDiagnosticosSchema = z.enum(
	[
		"95",
		"96",
		"97",
		"99",
		"100",
		"101",
		"105",
		"106",
		"107",
		"110",
		"111",
		"246",
		"248",
		"147",
		"264",
		"265",
		"266",
		"255",
		"267",
		"268",
		"269",
		"270",
		"271",
		"272",
		"273",
		"274",
	],
	{
		error: () => ({
			message:
				"diagnosticos: valores válidos são [1000 - Defeito Rede interna do cliente, 1001 - Defeito no equipamento do cliente, 1002 - Defeito em outra operadora, 1004 - Falha Massiva, 1005 - Encaminhado para agendamento, 1006 - Encontrado OK, 1010 - Configuração ONT/Roteador, 1011 - SVA - Plataformas, 1012 - Outros, 1013 - Encaminhado para N2, 1014 - Reboot na ONT/Roteador, 1015 - Sem contato com o cliente, 1016 - Abertura indevida, 1017 - Encaminhado para CS, 1100 - Executado, 1101 - Pendência, 1102 - Cancelamento, 1200 - Defeito Rede interna do cliente, 1201 - Defeito no equipamento do cliente, 1202 - Defeito em outra operadora, 1204 - Falha Massiva, 1205 - Encaminhado para agendamento, 1206 - Encontrado OK, 1210 - Configuração ONT/Roteador, 1211 - SVA - Plataformas, 1212 - Outros]",
		}),
	},
);

export const atendimentos_ixcPrioridadeSchema = z.enum(["B", "N", "A", "C"], {
	error: () => ({
		message: "prioridade: valores válidos são [Baixa, Normal, Alta, Crítica]",
	}),
});

export const atendimentos_ixcProcessoSchema = z.enum(["33", "36", "34", "40"], {
	error: () => ({
		message:
			"processo: valores válidos são [Reparo, Serviço, Manutenção Preventiva, Atendimento Financeiro]",
	}),
});

export const atendimentos_ixcTarefasSchema = z.enum(
	[
		"158",
		"159",
		"160",
		"164",
		"382",
		"412",
		"305",
		"306",
		"307",
		"311",
		"393",
		"316",
		"317",
		"320",
		"321",
		"395",
		"170",
		"171",
		"174",
		"175",
		"375",
		"414",
		"228",
		"229",
		"230",
		"234",
		"384",
		"240",
		"241",
		"244",
		"245",
		"386",
	],
	{
		error: () => ({
			message:
				"tarefas: valores válidos são [REPARO - Encaminhar O.S para Agendamento, REPARO - Encaminhar O.S para o Customer Success, REPARO - Escalona O.S para SN2 - Banda Larga, REPARO - Escalona O.S para SN2 - Telefonia, REPARO - Encaminhar O.S para Financeiro, REPARO - Escalona O.S para SN2 - MVNO, SERVIÇO - Encaminhar O.S para Agendamento, SERVIÇO - Encaminhar O.S para Customer Success, SERVIÇO - Escalona O.S para SN2 - Banda Larga, SERVIÇO - Escalona O.S para SN2 - Telefonia, SERVIÇO - Encaminhar O.S para Financeiro, SERVIÇO (2) - Encaminhar O.S para Agendamento, SERVIÇO (2) - Encaminhar O.S para Customer Success, SERVIÇO (2) - Escalona O.S para SN2 - Banda Larga, SERVIÇO (2) - Escalona O.S para SN2 - Telefonia, SERVIÇO (2) - Encaminhar O.S para Financeiro, REPARO (2) - Encaminhar O.S para Agendamento, REPARO (2) - Encaminhar O.S para o Customer Success, REPARO (2) - Escalona O.S para SN2 - Banda Larga, REPARO (2) - Escalona O.S para SN2 - Telefonia, REPARO (2) - Encaminhar O.S para Financeiro, REPARO (2) - Escalona O.S para SN2 - MVNO, MANUN. PREV. - Encaminhar O.S para Agendamento, MANUN. PREV. - Encaminhar O.S para Customer Success, MANUN. PREV. - Escalona O.S para SN2 - Banda Larga, MANUN. PREV. - Escalona O.S para SN2 - Telefonia, MANUN. PREV. - Encaminhar O.S para Financeiro, MANUN. PREV. (2) - Encaminhar O.S para Agendamento, MANUN. PREV. (2) - Encaminhar O.S para Customer Success, MANUN. PREV. (2) - Escalona O.S para SN2 - Banda Larga, MANUN. PREV. (2) - Escalona O.S para SN2 - Telefonia, MANUN. PREV. (2) - Encaminhar O.S para Financeiro]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AtendimentosIxcAssunto = z.infer<
	typeof atendimentos_ixcAssuntoSchema
>;

export type AtendimentosIxcDiagnosticos = z.infer<
	typeof atendimentos_ixcDiagnosticosSchema
>;

export type AtendimentosIxcPrioridade = z.infer<
	typeof atendimentos_ixcPrioridadeSchema
>;

export type AtendimentosIxcProcesso = z.infer<
	typeof atendimentos_ixcProcessoSchema
>;

export type AtendimentosIxcTarefas = z.infer<
	typeof atendimentos_ixcTarefasSchema
>;
