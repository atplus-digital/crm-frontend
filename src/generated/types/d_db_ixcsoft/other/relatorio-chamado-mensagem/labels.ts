/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOCHAMADOMENSAGEM_FIELD_LABELS = {
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_final: "data_final",
	data_final_final: "data_final_final",
	data_final_inicial: "data_final_inicial",
	data_final_periodo: "data_final_periodo",
	data_inicial: "data_inicial",
	data_inicio_final: "data_inicio_final",
	data_inicio_inicial: "data_inicio_inicial",
	data_inicio_periodo: "data_inicio_periodo",
	data_periodo: "data_periodo",
	data_ultima_impres: "data_ultima_impres",
	id: "id",
	id_diagnostico_especifico: "id_diagnostico_especifico",
	id_evento: "id_evento",
	id_proxima_tarefa: "id_proxima_tarefa",
	id_resposta: "id_resposta",
	id_su_diagnostico: "id_su_diagnostico",
	id_tecnico: "id_tecnico",
	impresso_por: "impresso_por",
	nome: "nome",
	relatorio: "relatorio",
	tipo_data: "tipo_data",
	tipo_data_final: "tipo_data_final",
	tipo_data_inicio: "tipo_data_inicio",
} as const;

export const RELATORIOCHAMADOMENSAGEM_TIPODATA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOCHAMADOMENSAGEM_TIPODATAFINAL_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOCHAMADOMENSAGEM_TIPODATAINICIO_LABELS = {
	D: "D",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_chamado_mensagemTipoDataSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data: valores válidos são [D, P]" }),
});

export const relatorio_chamado_mensagemTipoDataFinalSchema = z.enum(
	["D", "P"],
	{
		error: () => ({ message: "tipo_data_final: valores válidos são [D, P]" }),
	},
);

export const relatorio_chamado_mensagemTipoDataInicioSchema = z.enum(
	["D", "P"],
	{
		error: () => ({ message: "tipo_data_inicio: valores válidos são [D, P]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioChamadoMensagemTipoData = z.infer<
	typeof relatorio_chamado_mensagemTipoDataSchema
>;

export type RelatorioChamadoMensagemTipoDataFinal = z.infer<
	typeof relatorio_chamado_mensagemTipoDataFinalSchema
>;

export type RelatorioChamadoMensagemTipoDataInicio = z.infer<
	typeof relatorio_chamado_mensagemTipoDataInicioSchema
>;
