/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { TemplatesAtendimentoN1 } from "../other/templates-atendimento-n1";
import type { Users } from "../users";

export const T_ATENDIMENTOS_IXC_TABLE_NAME = "t_atendimentos_ixc";

export const ATENDIMENTOSIXC_ASSUNTO_LABELS = {
	"88": "Reparo",
	"89": "Serviço",
	"90": "Manutenção Preventiva",
	"78": "Atendimento Financeiro",
} as const;

export const ATENDIMENTOSIXC_DIAGNOSTICOS_LABELS = {
	"95": "1000 - Defeito Rede interna do cliente",
	"96": "1001 - Defeito no equipamento do cliente",
	"97": "1002 - Defeito em outra operadora",
	"99": "1004 - Falha Massiva",
	"100": "1005 - Encaminhado para agendamento",
	"101": "1006 - Encontrado OK",
	"105": "1010 - Configuração ONT/Roteador",
	"106": "1011 - SVA - Plataformas",
	"107": "1012 - Outros",
	"110": "1013 - Encaminhado para N2",
	"111": "1014 - Reboot na ONT/Roteador",
	"246": "1015 - Sem contato com o cliente",
	"248": "1016 - Abertura indevida",
	"147": "1017 - Encaminhado para CS",
	"264": "1100 - Executado",
	"265": "1101 - Pendência",
	"266": "1102 - Cancelamento",
	"255": "1200 - Defeito Rede interna do cliente",
	"267": "1201 - Defeito no equipamento do cliente",
	"268": "1202 - Defeito em outra operadora",
	"269": "1204 - Falha Massiva",
	"270": "1205 - Encaminhado para agendamento",
	"271": "1206 - Encontrado OK",
	"272": "1210 - Configuração ONT/Roteador",
	"273": "1211 - SVA - Plataformas",
	"274": "1212 - Outros",
} as const;

export const ATENDIMENTOSIXC_PRIORIDADE_LABELS = {
	B: "Baixa",
	N: "Normal",
	A: "Alta",
	C: "Crítica",
} as const;

export const ATENDIMENTOSIXC_PROCESSO_LABELS = {
	"33": "Reparo",
	"36": "Serviço",
	"34": "Manutenção Preventiva",
	"40": "Atendimento Financeiro",
} as const;

export const ATENDIMENTOSIXC_TAREFAS_LABELS = {
	"158": "REPARO - Encaminhar O.S para Agendamento",
	"159": "REPARO - Encaminhar O.S para o Customer Success",
	"160": "REPARO - Escalona O.S para SN2 - Banda Larga",
	"164": "REPARO - Escalona O.S para SN2 - Telefonia",
	"382": "REPARO - Encaminhar O.S para Financeiro",
	"412": "REPARO - Escalona O.S para SN2 - MVNO",
	"305": "SERVIÇO - Encaminhar O.S para Agendamento",
	"306": "SERVIÇO - Encaminhar O.S para Customer Success",
	"307": "SERVIÇO - Escalona O.S para SN2 - Banda Larga",
	"311": "SERVIÇO - Escalona O.S para SN2 - Telefonia",
	"393": "SERVIÇO - Encaminhar O.S para Financeiro",
	"316": "SERVIÇO (2) - Encaminhar O.S para Agendamento",
	"317": "SERVIÇO (2) - Encaminhar O.S para Customer Success",
	"320": "SERVIÇO (2) - Escalona O.S para SN2 - Banda Larga",
	"321": "SERVIÇO (2) - Escalona O.S para SN2 - Telefonia",
	"395": "SERVIÇO (2) - Encaminhar O.S para Financeiro",
	"170": "REPARO (2) - Encaminhar O.S para Agendamento",
	"171": "REPARO (2) - Encaminhar O.S para o Customer Success",
	"174": "REPARO (2) - Escalona O.S para SN2 - Banda Larga",
	"175": "REPARO (2) - Escalona O.S para SN2 - Telefonia",
	"375": "REPARO (2) - Encaminhar O.S para Financeiro",
	"414": "REPARO (2) - Escalona O.S para SN2 - MVNO",
	"228": "MANUN. PREV. - Encaminhar O.S para Agendamento",
	"229": "MANUN. PREV. - Encaminhar O.S para Customer Success",
	"230": "MANUN. PREV. - Escalona O.S para SN2 - Banda Larga",
	"234": "MANUN. PREV. - Escalona O.S para SN2 - Telefonia",
	"384": "MANUN. PREV. - Encaminhar O.S para Financeiro",
	"240": "MANUN. PREV. (2) - Encaminhar O.S para Agendamento",
	"241": "MANUN. PREV. (2) - Encaminhar O.S para Customer Success",
	"244": "MANUN. PREV. (2) - Escalona O.S para SN2 - Banda Larga",
	"245": "MANUN. PREV. (2) - Escalona O.S para SN2 - Telefonia",
	"386": "MANUN. PREV. (2) - Encaminhar O.S para Financeiro",
} as const;

export type AtendimentosIxcAssunto =
	keyof typeof ATENDIMENTOSIXC_ASSUNTO_LABELS;

export type AtendimentosIxcDiagnosticos =
	keyof typeof ATENDIMENTOSIXC_DIAGNOSTICOS_LABELS;

export type AtendimentosIxcPrioridade =
	keyof typeof ATENDIMENTOSIXC_PRIORIDADE_LABELS;

export type AtendimentosIxcProcesso =
	keyof typeof ATENDIMENTOSIXC_PROCESSO_LABELS;

export type AtendimentosIxcTarefas =
	keyof typeof ATENDIMENTOSIXC_TAREFAS_LABELS;

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
