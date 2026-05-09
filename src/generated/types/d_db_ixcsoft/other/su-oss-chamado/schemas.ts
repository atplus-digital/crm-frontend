/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { clienteBaseSchema } from "../../cliente/schemas";
import { cliente_contratoBaseSchema } from "../../cliente-contrato/schemas";
import { su_ticketBaseSchema } from "../../su-ticket/schemas";
import { empresa_setorBaseSchema } from "../empresa-setor/schemas";
import { funcionariosBaseSchema } from "../funcionarios/schemas";
import { su_diagnosticoBaseSchema } from "../su-diagnostico/schemas";
import { su_oss_assuntoBaseSchema } from "../su-oss-assunto/schemas";
import { wfl_tarefaBaseSchema } from "../wfl-tarefa/schemas";
import {
	su_oss_chamadoGeraComissaoSchema,
	su_oss_chamadoHabilitaAssinaturaClienteSchema,
	su_oss_chamadoImpressoSchema,
	su_oss_chamadoMelhorHorarioAgendaSchema,
	su_oss_chamadoMostrarOsSemFuncionarioSchema,
	su_oss_chamadoNotificacaoPushAgrupadaSchema,
	su_oss_chamadoOrigemCadastroSchema,
	su_oss_chamadoOrigemEnderecoEstruturaSchema,
	su_oss_chamadoOrigemEnderecoSchema,
	su_oss_chamadoOrigemFinalizacaoSchema,
	su_oss_chamadoOrigemOsAbertaSchema,
	su_oss_chamadoPrioridadeSchema,
	su_oss_chamadoStatusAssinaturaSchema,
	su_oss_chamadoStatusSchema,
	su_oss_chamadoTipoSchema,
} from "./labels";

export const SU_OSS_CHAMADO_TABLE_NAME = "su_oss_chamado";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamadoBaseSchema = z.object({
	id: z.number(),
	apartamento: z.string(),
	bairro: z.string(),
	bloco: z.string(),
	complemento: z.string(),
	data_abertura: z.string(),
	data_agenda: z.string(),
	data_agenda_final: z.string(),
	data_fechamento: z.string(),
	data_final: z.string(),
	data_hora_analise: z.string(),
	data_hora_assumido: z.string(),
	data_hora_encaminhado: z.string(),
	data_hora_execucao: z.string(),
	data_inicio: z.string(),
	data_prazo_limite: z.string(),
	data_prev_final: z.string(),
	data_reabertura: z.string(),
	data_reagendar: z.string(),
	data_reservada: z.string(),
	endereco: z.string(),
	gera_comissao: su_oss_chamadoGeraComissaoSchema,
	habilita_assinatura_cliente: su_oss_chamadoHabilitaAssinaturaClienteSchema,
	id_assunto: z.number(),
	id_atendente: z.string(),
	id_cidade: z.number(),
	id_circuito: z.number(),
	id_cliente: z.number(),
	id_cobranca: z.number(),
	id_condominio: z.number(),
	id_contrato_kit: z.number(),
	id_estrutura: z.number(),
	id_filial: z.number(),
	id_login: z.number(),
	id_oss_chamado: z.number(),
	id_receber: z.number(),
	id_resposta: z.number(),
	id_su_diagnostico: z.number(),
	id_tecnico: z.number(),
	id_ticket: z.number(),
	id_usuario_reabertura: z.number(),
	id_wfl_param_os: z.number(),
	id_wfl_tarefa: z.number(),
	idx: z.number(),
	impresso: su_oss_chamadoImpressoSchema,
	justificativa_sla_atrasado: z.string(),
	latitude: z.string(),
	liberado: z.number(),
	longitude: z.string(),
	melhor_horario_agenda: su_oss_chamadoMelhorHorarioAgendaSchema,
	mensagem: z.string(),
	mensagem_resposta: z.string(),
	mostrar_os_sem_funcionario: su_oss_chamadoMostrarOsSemFuncionarioSchema,
	motivo_reabertura: z.string(),
	notificacao_push_agrupada: su_oss_chamadoNotificacaoPushAgrupadaSchema,
	origem_cadastro: su_oss_chamadoOrigemCadastroSchema,
	origem_endereco: su_oss_chamadoOrigemEnderecoSchema,
	origem_endereco_estrutura: su_oss_chamadoOrigemEnderecoEstruturaSchema,
	origem_finalizacao: su_oss_chamadoOrigemFinalizacaoSchema,
	origem_os_aberta: su_oss_chamadoOrigemOsAbertaSchema,
	preview: z.string(),
	prioridade: su_oss_chamadoPrioridadeSchema,
	protocolo: z.string(),
	referencia: z.string(),
	setor: z.number(),
	status: su_oss_chamadoStatusSchema,
	status_assinatura: su_oss_chamadoStatusAssinaturaSchema,
	status_pesquisa_satisfacao: z.number(),
	status_sla: z.string(),
	tipo: su_oss_chamadoTipoSchema,
	ultima_atualizacao: z.string(),
	valor_outras_despesas: z.number(),
	valor_total: z.number(),
	valor_total_comissao: z.number(),
	valor_unit_comissao: z.number(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const su_oss_chamadoRelationSchema = z.object({
	f_3w8ih0kmms9: z.lazy(() => cliente_contratoBaseSchema.nullable()),
	f_6ar6ff1gv59: z.lazy(() => funcionariosBaseSchema.nullable()),
	f_diagnosticos: z.lazy(() => su_diagnosticoBaseSchema.nullable()),
	f_nc_atendimentos: z.lazy(() => su_ticketBaseSchema.nullable()),
	f_pzurkpjz7ub: z.lazy(() => su_oss_assuntoBaseSchema.nullable()),
	f_tarefa: z.lazy(() => wfl_tarefaBaseSchema.nullable()),
	f_vpc23waj8bf: z.lazy(() => clienteBaseSchema.nullable()),
	f_wnstu9yvv3j: z.lazy(() => empresa_setorBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamadoSchema = su_oss_chamadoBaseSchema.extend(
	su_oss_chamadoRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamadoCreateSchema = su_oss_chamadoSchema.omit({
	f_3w8ih0kmms9: true,
	f_6ar6ff1gv59: true,
	f_diagnosticos: true,
	f_nc_atendimentos: true,
	f_pzurkpjz7ub: true,
	f_tarefa: true,
	f_vpc23waj8bf: true,
	f_wnstu9yvv3j: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamadoUpdateSchema = su_oss_chamadoCreateSchema.partial();
