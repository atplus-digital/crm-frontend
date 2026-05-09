/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCTAREFAS_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_tarefasStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcTarefasStatus = z.infer<typeof ixc_tarefasStatusSchema>;
