/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	wfl_tarefaAtivoSchema,
	wfl_tarefaDecisaoSchema,
	wfl_tarefaFinalizaProcessoSchema,
	wfl_tarefaGeraComissaoSchema,
	wfl_tarefaObrigatorioSchema,
	wfl_tarefaOrigemPrioridadeOsSchema,
	wfl_tarefaPermiteFinalizarSchema,
} from "./labels";

export const WFL_TAREFA_TABLE_NAME = "wfl_tarefa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wfl_tarefaBaseSchema = z.object({
	id: z.number(),
	ativo: wfl_tarefaAtivoSchema,
	decisao: wfl_tarefaDecisaoSchema,
	descricao: z.string(),
	finaliza_processo: wfl_tarefaFinalizaProcessoSchema,
	gera_comissao: wfl_tarefaGeraComissaoSchema,
	id_processo: z.number(),
	id_proxima_tarefa: z.number(),
	id_setor: z.number(),
	id_tarefa_anterior: z.number(),
	obrigatorio: wfl_tarefaObrigatorioSchema,
	operador_ultima_atualizacao: z.number(),
	origem_prioridade_os: wfl_tarefaOrigemPrioridadeOsSchema,
	permite_finalizar: wfl_tarefaPermiteFinalizarSchema,
	prazo_minutos: z.number(),
	sequencia: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wfl_tarefaSchema = wfl_tarefaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wfl_tarefaCreateSchema = wfl_tarefaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wfl_tarefaUpdateSchema = wfl_tarefaCreateSchema.partial();
