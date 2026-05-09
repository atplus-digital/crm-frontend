/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCTAREFASAGENDADASLOGS_ORIGEM_LABELS = {
	S: "S",
	U: "U",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_tarefas_agendadas_logsOrigemSchema = z.enum(["S", "U"], {
	error: () => ({ message: "origem: valores válidos são [S, U]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcTarefasAgendadasLogsOrigem = z.infer<
	typeof ixc_tarefas_agendadas_logsOrigemSchema
>;
