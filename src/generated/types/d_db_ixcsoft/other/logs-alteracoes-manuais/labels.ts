/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSALTERACOESMANUAIS_FIELD_LABELS = {
	data_hora: "data_hora",
	descricao_plano_antigo: "descricao_plano_antigo",
	descricao_plano_novo: "descricao_plano_novo",
	executou: "executou",
	id: "id",
	id_contrato: "id_contrato",
	id_plano_antigo: "id_plano_antigo",
	id_plano_novo: "id_plano_novo",
	operador: "operador",
	tipo: "tipo",
} as const;

export const LOGSALTERACOESMANUAIS_EXECUTOU_LABELS = {
	U: "U",
	S: "S",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logs_alteracoes_manuaisExecutouSchema = z.enum(["U", "S", "A"], {
	error: () => ({ message: "executou: valores válidos são [U, S, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsAlteracoesManuaisExecutou = z.infer<
	typeof logs_alteracoes_manuaisExecutouSchema
>;
