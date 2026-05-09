/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PESQUISASATISFACAOPERGUNTAS_OBRIGATORIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PESQUISASATISFACAOPERGUNTAS_TIPORESPOSTA_LABELS = {
	S: "S",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pesquisa_satisfacao_perguntasObrigatoriaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "obrigatoria: valores válidos são [S, N]" }),
	},
);

export const pesquisa_satisfacao_perguntasTipoRespostaSchema = z.enum(
	["S", "T"],
	{
		error: () => ({ message: "tipo_resposta: valores válidos são [S, T]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PesquisaSatisfacaoPerguntasObrigatoria = z.infer<
	typeof pesquisa_satisfacao_perguntasObrigatoriaSchema
>;

export type PesquisaSatisfacaoPerguntasTipoResposta = z.infer<
	typeof pesquisa_satisfacao_perguntasTipoRespostaSchema
>;
