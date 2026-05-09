/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
