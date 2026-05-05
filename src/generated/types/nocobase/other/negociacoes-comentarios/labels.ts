/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NEGOCIACOESCOMENTARIOS_INSEREATENDIMENTOIXC_LABELS = {
	0: "Não",
	1: "Sim",
} as const;

export const NEGOCIACOESCOMENTARIOS_SETORPARAOBS_LABELS = {
	1: "Equipe de Campo",
	2: "Suporte Nível 1",
	3: "Suporte Nível 2",
	4: "Telefonia (Ativações e/ou Portabilidades)",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const negociacoes_comentariosInsereAtendimentoIxcSchema = z.enum(
	["0", "1"],
	{
		error: () => ({
			message: "insere_atendimento_ixc: valores válidos são [Não, Sim]",
		}),
	},
);

export const negociacoes_comentariosSetorParaObsSchema = z.enum(
	["1", "2", "3", "4"],
	{
		error: () => ({
			message:
				"setor_para_obs: valores válidos são [Equipe de Campo, Suporte Nível 1, Suporte Nível 2, Telefonia (Ativações e/ou Portabilidades)]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NegociacoesComentariosInsereAtendimentoIxc = z.infer<
	typeof negociacoes_comentariosInsereAtendimentoIxcSchema
>;

export type NegociacoesComentariosSetorParaObs = z.infer<
	typeof negociacoes_comentariosSetorParaObsSchema
>;
