/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	ixc_tarefas_cronAmbienteCodigoSchema,
	ixc_tarefas_cronBloquearExecucaoSimultaneaSchema,
	ixc_tarefas_cronDiaMesObrigatorioSchema,
	ixc_tarefas_cronDiaSemanaObrigatorioSchema,
	ixc_tarefas_cronGravarLogSchema,
	ixc_tarefas_cronHoraObrigatorioSchema,
	ixc_tarefas_cronMesObrigatorioSchema,
	ixc_tarefas_cronMinutoObrigatorioSchema,
	ixc_tarefas_cronTipoSchema,
} from "./labels";

export const IXC_TAREFAS_CRON_TABLE_NAME = "ixc_tarefas_cron";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_tarefas_cronBaseSchema = z.object({
	id: z.number(),
	ambiente_codigo: ixc_tarefas_cronAmbienteCodigoSchema,
	atualizado_em: z.string(),
	bloquear_execucao_simultanea:
		ixc_tarefas_cronBloquearExecucaoSimultaneaSchema,
	criado_em: z.string(),
	dia_mes_obrigatorio: ixc_tarefas_cronDiaMesObrigatorioSchema,
	dia_semana_obrigatorio: ixc_tarefas_cronDiaSemanaObrigatorioSchema,
	expressao: z.string(),
	gravar_log: ixc_tarefas_cronGravarLogSchema,
	hora_obrigatorio: ixc_tarefas_cronHoraObrigatorioSchema,
	id_tarefa: z.number(),
	location: z.string(),
	mes_obrigatorio: ixc_tarefas_cronMesObrigatorioSchema,
	minuto_obrigatorio: ixc_tarefas_cronMinutoObrigatorioSchema,
	nome: z.string(),
	tipo: ixc_tarefas_cronTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_tarefas_cronSchema = ixc_tarefas_cronBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_tarefas_cronCreateSchema = ixc_tarefas_cronSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_tarefas_cronUpdateSchema =
	ixc_tarefas_cronCreateSchema.partial();
