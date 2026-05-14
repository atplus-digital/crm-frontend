/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCFALHATAREFA_FIELD_LABELS = {
	controle_valor_atual: "controle_valor_atual",
	controle_valor_esperado: "controle_valor_esperado",
	data_hora_inicio: "data_hora_inicio",
	data_ultima_atualizacao: "data_ultima_atualizacao",
	email_dest: "email_dest",
	id: "id",
	id_smtp_envio: "id_smtp_envio",
	id_tarefa: "id_tarefa",
	maximo_minutos: "maximo_minutos",
	numero_tentativas_monitoramento: "numero_tentativas_monitoramento",
	status_execucao: "status_execucao",
} as const;

export const IXCFALHATAREFA_STATUSEXECUCAO_LABELS = {
	P: "P",
	E: "E",
	F: "F",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_falha_tarefaStatusExecucaoSchema = z.enum(
	["P", "E", "F", "N"],
	{
		error: () => ({
			message: "status_execucao: valores válidos são [P, E, F, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcFalhaTarefaStatusExecucao = z.infer<
	typeof ixc_falha_tarefaStatusExecucaoSchema
>;
