/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { ixc_falha_tarefaStatusExecucaoSchema } from "./labels";

export const IXC_FALHA_TAREFA_TABLE_NAME = "ixc_falha_tarefa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_falha_tarefaBaseSchema = z.object({
	id: z.number(),
	controle_valor_atual: z.string(),
	controle_valor_esperado: z.string(),
	data_hora_inicio: z.string(),
	data_ultima_atualizacao: z.string(),
	email_dest: z.string(),
	id_smtp_envio: z.number(),
	id_tarefa: z.number(),
	maximo_minutos: z.number(),
	numero_tentativas_monitoramento: z.number(),
	status_execucao: ixc_falha_tarefaStatusExecucaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_falha_tarefaSchema = ixc_falha_tarefaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_falha_tarefaCreateSchema = ixc_falha_tarefaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_falha_tarefaUpdateSchema =
	ixc_falha_tarefaCreateSchema.partial();
