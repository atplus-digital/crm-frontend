/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_chamado_mensagemTipoDataFinalSchema,
	relatorio_chamado_mensagemTipoDataInicioSchema,
	relatorio_chamado_mensagemTipoDataSchema,
} from "./labels";

export const RELATORIO_CHAMADO_MENSAGEM_TABLE_NAME =
	"relatorio_chamado_mensagem";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_chamado_mensagemBaseSchema = z.object({
	id: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_final: z.string(),
	data_final_final: z.string(),
	data_final_inicial: z.string(),
	data_final_periodo: z.string(),
	data_inicial: z.string(),
	data_inicio_final: z.string(),
	data_inicio_inicial: z.string(),
	data_inicio_periodo: z.string(),
	data_periodo: z.string(),
	data_ultima_impres: z.string(),
	id_diagnostico_especifico: z.number(),
	id_evento: z.number(),
	id_proxima_tarefa: z.number(),
	id_resposta: z.number(),
	id_su_diagnostico: z.number(),
	id_tecnico: z.number(),
	impresso_por: z.number(),
	nome: z.string(),
	relatorio: z.string(),
	tipo_data: relatorio_chamado_mensagemTipoDataSchema,
	tipo_data_final: relatorio_chamado_mensagemTipoDataFinalSchema,
	tipo_data_inicio: relatorio_chamado_mensagemTipoDataInicioSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_chamado_mensagemSchema =
	relatorio_chamado_mensagemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_chamado_mensagemCreateSchema =
	relatorio_chamado_mensagemSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_chamado_mensagemUpdateSchema =
	relatorio_chamado_mensagemCreateSchema.partial();
