/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRJPROJETOHISTORICO_FIELD_LABELS = {
	data_hora: "data_hora",
	id: "id",
	id_operador: "id_operador",
	id_prj_projeto: "id_prj_projeto",
	status: "status",
} as const;

export const PRJPROJETOHISTORICO_STATUS_LABELS = {
	A: "A",
	P: "P",
	PA: "PA",
	F: "F",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const prj_projeto_historicoStatusSchema = z.enum(
	["A", "P", "PA", "F", "D"],
	{
		error: () => ({ message: "status: valores válidos são [A, P, PA, F, D]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PrjProjetoHistoricoStatus = z.infer<
	typeof prj_projeto_historicoStatusSchema
>;
