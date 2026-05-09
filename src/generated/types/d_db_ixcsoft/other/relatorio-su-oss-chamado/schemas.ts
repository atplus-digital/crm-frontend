/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_su_oss_chamadoAberturaSchema,
	relatorio_su_oss_chamadoAgendamentoSchema,
	relatorio_su_oss_chamadoAtivoTecnicoSchema,
	relatorio_su_oss_chamadoConsiderarSlaSchema,
	relatorio_su_oss_chamadoGeraComissaoSchema,
	relatorio_su_oss_chamadoImpressoSchema,
	relatorio_su_oss_chamadoTipoDataAberturaSchema,
	relatorio_su_oss_chamadoTipoDataAgendamentoSchema,
	relatorio_su_oss_chamadoTipoDataAgendaSchema,
	relatorio_su_oss_chamadoTipoDataAnaliseSchema,
	relatorio_su_oss_chamadoTipoDataAssumidoSchema,
	relatorio_su_oss_chamadoTipoDataEncaminhadoSchema,
	relatorio_su_oss_chamadoTipoDataExecucaoSchema,
	relatorio_su_oss_chamadoTipoDataFechamentoSchema,
	relatorio_su_oss_chamadoTipoDataFinalSchema,
	relatorio_su_oss_chamadoTipoDataInicioSchema,
	relatorio_su_oss_chamadoTipoDataPrazoLimiteSchema,
	relatorio_su_oss_chamadoTipoDataPrevFinalSchema,
	relatorio_su_oss_chamadoTipoDataReaberturaSchema,
	relatorio_su_oss_chamadoTipoDataReagSchema,
	relatorio_su_oss_chamadoTipoDataReservadaSchema,
} from "./labels";

export const RELATORIO_SU_OSS_CHAMADO_TABLE_NAME = "relatorio_su_oss_chamado";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_su_oss_chamadoBaseSchema = z.object({
	id: z.number(),
	abertura: relatorio_su_oss_chamadoAberturaSchema,
	agendamento: relatorio_su_oss_chamadoAgendamentoSchema,
	apartamento: z.string(),
	ativo_tecnico: relatorio_su_oss_chamadoAtivoTecnicoSchema,
	bairro: z.string(),
	bloco: z.string(),
	considerar_sla: relatorio_su_oss_chamadoConsiderarSlaSchema,
	creation_date: z.string(),
	creation_user: z.string(),
	data_abertura_fin: z.string(),
	data_abertura_ini: z.string(),
	data_abertura_periodo: z.string(),
	data_agenda_fin: z.string(),
	data_agenda_final_fin: z.string(),
	data_agenda_final_ini: z.string(),
	data_agenda_ini: z.string(),
	data_agenda_periodo: z.string(),
	data_agendamento_periodo: z.string(),
	data_analise_periodo: z.string(),
	data_assumido_periodo: z.string(),
	data_encaminhado_periodo: z.string(),
	data_execucao_periodo: z.string(),
	data_fechamento_fin: z.string(),
	data_fechamento_ini: z.string(),
	data_fechamento_periodo: z.string(),
	data_final_fin: z.string(),
	data_final_ini: z.string(),
	data_final_periodo: z.string(),
	data_hora_analise_fin: z.string(),
	data_hora_analise_ini: z.string(),
	data_hora_assumido_fin: z.string(),
	data_hora_assumido_ini: z.string(),
	data_hora_encaminhado_fin: z.string(),
	data_hora_encaminhado_ini: z.string(),
	data_hora_execucao_fin: z.string(),
	data_hora_execucao_ini: z.string(),
	data_inicio_fin: z.string(),
	data_inicio_ini: z.string(),
	data_inicio_periodo: z.string(),
	data_prazo_limite_fin: z.string(),
	data_prazo_limite_ini: z.string(),
	data_prazo_limite_periodo: z.string(),
	data_prev_final_fin: z.string(),
	data_prev_final_ini: z.string(),
	data_reabertura_fin: z.string(),
	data_reabertura_ini: z.string(),
	data_reabertura_periodo: z.string(),
	data_reagendamento_periodo: z.string(),
	data_reagendar_fin: z.string(),
	data_reagendar_ini: z.string(),
	data_reservada_fin: z.string(),
	data_reservada_ini: z.string(),
	data_reservada_periodo: z.string(),
	data_ultima_impres: z.string(),
	endereco: z.string(),
	gera_comissao: relatorio_su_oss_chamadoGeraComissaoSchema,
	id_assunto: z.number(),
	id_cidade: z.number(),
	id_cliente: z.number(),
	id_cobranca: z.number(),
	id_condominio: z.number(),
	id_conta_decimo: z.number(),
	id_contrato_kit: z.number(),
	id_diagnostico_especifico: z.number(),
	id_equipe: z.number(),
	id_estrutura: z.number(),
	id_filial: z.number(),
	id_login: z.number(),
	id_oss_chamado: z.number(),
	id_su_diagnostico: z.number(),
	id_tecnico: z.number(),
	id_ticket: z.number(),
	id_usuario_reabertura: z.number(),
	id_wfl_param_os: z.number(),
	id_wfl_tarefa: z.number(),
	impresso: relatorio_su_oss_chamadoImpressoSchema,
	impresso_por: z.number(),
	nome: z.string(),
	previsao_finalizacao_periodo: z.string(),
	protocolo: z.string(),
	qtde_recorrencia: z.number(),
	relatorio: z.string(),
	setor: z.number(),
	tipo_data_abertura: relatorio_su_oss_chamadoTipoDataAberturaSchema,
	tipo_data_agenda: relatorio_su_oss_chamadoTipoDataAgendaSchema,
	tipo_data_agendamento: relatorio_su_oss_chamadoTipoDataAgendamentoSchema,
	tipo_data_analise: relatorio_su_oss_chamadoTipoDataAnaliseSchema,
	tipo_data_assumido: relatorio_su_oss_chamadoTipoDataAssumidoSchema,
	tipo_data_encaminhado: relatorio_su_oss_chamadoTipoDataEncaminhadoSchema,
	tipo_data_execucao: relatorio_su_oss_chamadoTipoDataExecucaoSchema,
	tipo_data_fechamento: relatorio_su_oss_chamadoTipoDataFechamentoSchema,
	tipo_data_final: relatorio_su_oss_chamadoTipoDataFinalSchema,
	tipo_data_inicio: relatorio_su_oss_chamadoTipoDataInicioSchema,
	tipo_data_prazo_limite: relatorio_su_oss_chamadoTipoDataPrazoLimiteSchema,
	tipo_data_prev_final: relatorio_su_oss_chamadoTipoDataPrevFinalSchema,
	tipo_data_reabertura: relatorio_su_oss_chamadoTipoDataReaberturaSchema,
	tipo_data_reag: relatorio_su_oss_chamadoTipoDataReagSchema,
	tipo_data_reservada: relatorio_su_oss_chamadoTipoDataReservadaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_su_oss_chamadoSchema =
	relatorio_su_oss_chamadoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_su_oss_chamadoCreateSchema =
	relatorio_su_oss_chamadoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_su_oss_chamadoUpdateSchema =
	relatorio_su_oss_chamadoCreateSchema.partial();
