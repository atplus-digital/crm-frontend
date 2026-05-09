/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
